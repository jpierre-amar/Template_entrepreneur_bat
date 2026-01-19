import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Noise overlay for premium texture */}
      <div className="noise-overlay" />
      
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
