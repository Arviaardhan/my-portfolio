import { cn } from "@/lib/utils";

interface BrickLabelProps {
  children: React.ReactNode;
  variant?: "red" | "teal" | "amber" | "blue" | "green";
  className?: string;
}

const variantMap = {
  red: "bg-brick-red/15 text-brick-red border-brick-red/20",
  teal: "bg-brick-teal/15 text-brick-teal border-brick-teal/20",
  amber: "bg-brick-amber/15 text-brick-amber border-brick-amber/20",
  blue: "bg-brick-blue/15 text-brick-blue border-brick-blue/20",
  green: "bg-brick-green/15 text-brick-green border-brick-green/20",
};

export default function BrickLabel({ children, variant = "teal", className }: BrickLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-sm text-xs font-display font-medium border tracking-wide",
        variantMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
