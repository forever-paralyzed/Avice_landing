import { useEffect, useRef, useState, type ReactNode } from 'react';
import '../styles/RevealGroup.css';

type RevealGroupProps = {
  children: ReactNode;
};

function RevealGroup({ children }: RevealGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = groupRef.current;

    if (!element) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={groupRef}
      className={`reveal-group${isVisible ? ' is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default RevealGroup;
