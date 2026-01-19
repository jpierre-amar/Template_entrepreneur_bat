import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export const SectionWrapper = ({
  children,
  className,
  id,
  containerClassName,
  fullWidth = false,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        className
      )}
    >
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--secondary)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--secondary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div
        className={cn(
          "relative z-10",
          !fullWidth && "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};
