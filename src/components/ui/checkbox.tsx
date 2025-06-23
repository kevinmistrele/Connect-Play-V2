import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cntCheckboxVariants = cva(
    "flex h-5 w-5 items-center justify-center rounded border border-border text-background",
    {
        variants: {
            variant: {
                default: "bg-background",
                ghost: "bg-transparent",
                filled: "bg-muted border-muted",
            },
            size: {
                sm: "h-4 w-4",
                md: "h-5 w-5",
                lg: "h-6 w-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

export interface CntCheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
        VariantProps<typeof cntCheckboxVariants> {}

const CntCheckbox = React.forwardRef<HTMLInputElement, CntCheckboxProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <input
                type="checkbox"
                className={cn(cntCheckboxVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            />
        );
    }
);
CntCheckbox.displayName = "CntCheckbox";

export { CntCheckbox, cntCheckboxVariants };
