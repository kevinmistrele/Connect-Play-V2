import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold font-inter transition-all duration-300 cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white hover:bg-primary-light hover-glow",
                secondary: "bg-secondary text-foreground hover:bg-secondary/80",
                accent: "bg-accent text-white hover:bg-accent/80",
                outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
            },
            size: {
                sm: "py-2 px-4 text-sm",
                md: "py-2 px-6 text-base",
                lg: "py-3 px-8 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
        );
    }
);

Button.displayName = "CntButton"; // para DevTools

export { Button as CntButton, buttonVariants };
