import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Lightweight scroll-triggered fade-in-up.
 * Uses IntersectionObserver — no Framer Motion dependency.
 */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: shown ? undefined : 0,
        animation: shown ? `fade-in-up 0.8s cubic-bezier(0.21, 1, 0.21, 1) ${delay}ms both` : undefined,
      }}
    >
      {children}
    </Component>
  );
}
