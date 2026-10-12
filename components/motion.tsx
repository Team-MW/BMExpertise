"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Splits a title into words that slide up from a mask */
export function SplitTitle({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const words = text.split(" ");
  const ref = useRef<HTMLHeadingElement>(null);
  // Observe the (visible) heading itself: each word is fully clipped by its
  // overflow:hidden mask, so observing the words would never trigger.
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/(^|\s)_/g, "$1").replace(/\s\|\s?/g, " ")}>
      {words.map((w, i) => (
        <span key={i} className="word-mask" aria-hidden>
          <motion.span
            className="word"
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{ duration: 1, delay: delay + i * 0.06, ease }}
          >
            {w === "|" ? <em>&nbsp;</em> : w.startsWith("_") ? <em>{w.slice(1)}</em> : w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2200, bounce: 0 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);
  useEffect(() => spring.on("change", (v) => setVal(Math.round(v))), [spring]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/** Button that is subtly attracted to the cursor */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
