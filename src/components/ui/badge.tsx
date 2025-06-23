import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cntbadgeVariants = cva(
  "flex w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-background border-border text-white",
        ghost: "bg-transparent border-transparent hover:bg-muted",
        filled: "bg-muted border-muted text-foreground",
      },
      size: {
        sm: "h-8 px-2 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface CntBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cntbadgeVariants> {}

const CntBadge = React.forwardRef<HTMLDivElement, CntBadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(cntbadgeVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CntBadge.displayName = "CntBadge";

export { CntBadge, cntbadgeVariants };