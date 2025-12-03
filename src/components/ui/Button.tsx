import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const { type, ...restProps } = props;
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      type={type || 'button'}
      {...restProps}
    >
      {children}
    </motion.button>
  );
};

