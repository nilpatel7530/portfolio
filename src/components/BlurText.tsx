import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const words = text.split(' ');

  return (
    <p
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em',
      }}
    >
      {words.map((word, idx) => {
        const delay = (idx * 100) / 1000;
        return (
          <motion.span
            key={idx}
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={
              isInView
                ? {
                    filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                    opacity: [0, 0.5, 1],
                    y: [50, -5, 0],
                  }
                : {}
            }
            transition={
              isInView
                ? {
                    duration: 0.7,
                    times: [0, 0.5, 1],
                    ease: 'easeOut',
                    delay: delay,
                  }
                : {}
            }
            style={{
              display: 'inline-block',
              marginRight: '0.28em',
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};
