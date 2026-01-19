import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-secondary/10 text-secondary border border-secondary/20 rounded-full"
        >
          {badge}
        </motion.span>
      )}
      
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title.split(" ").map((word, i, arr) => (
          <span key={i}>
            {i === arr.length - 1 ? (
              <span className="text-gradient-gold">{word}</span>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
      
      <div className="divider-gold mt-8" />
    </motion.div>
  );
};
