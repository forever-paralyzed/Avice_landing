import { useEffect, useRef, useState, type ReactNode } from 'react';
import '../styles/Reveal.css';

type RevealProps = {
  children: ReactNode;
  className?: string;
};

function Reveal({ children, className = '' }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

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
      { threshold: 0.15, rootMargin: '0px 0px -32px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ['reveal', isVisible && 'reveal--visible', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={elementRef} className={classes}>
      {children}
    </div>
  );
}

export default Reveal;
