"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LegoGrid from "../widgets/LegoGrid";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <LegoGrid />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)] pointer-events-none" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95] text-foreground"
        >
          Building
        </motion.h1>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95] text-foreground"
        >
          High-Performance
        </motion.h1>

        <motion.span 
          variants={itemVariants}
          className="text-primary block mt-4 md:mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight"
        >
          Mobile Products
        </motion.span>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body font-light italic"
        >
          Engineering scalable mobile architectures, one modular brick at a time.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-display font-semibold rounded-sm hover:opacity-90 transition-all group"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}