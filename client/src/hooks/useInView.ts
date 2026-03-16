import { useEffect, useRef, useState } from "react";

/**
 * useInView - triggers when element enters viewport
 * Content is always visible (opacity 1 by default)
 * Animation is purely additive enhancement
 */
export function useInView(threshold: number = 0.05, initialVisible: boolean = false) {
  const ref = useRef<HTMLDivElement>(null);
  // Start as true so content is always visible even without scroll
  const [inView, setInView] = useState(true);

  useEffect(() => {
    setInView(true); // Always show content immediately
  }, []);

  return { ref, inView: true };
}
