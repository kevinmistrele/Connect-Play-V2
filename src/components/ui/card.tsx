import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "bg-card-bg rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300",
            className
        )}
        {...props}
    />
));
Card.displayName = "CntCard";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5", className)} {...props} />
));
CardHeader.displayName = "CntCardHeader";

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h4
        ref={ref}
        className={cn("font-poppins text-lg font-semibold mb-3", className)}
        {...props}
    />
));
CardTitle.displayName = "CntCardTitle";

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("font-inter text-sm text-gray-300 mb-4", className)}
        {...props}
    />
));
CardDescription.displayName = "CntCardDescription";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5 pt-0", className)} {...props} />
));
CardContent.displayName = "CntCardContent";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5 pt-0", className)} {...props} />
));
CardFooter.displayName = "CntCardFooter";

// Aqui exportamos com nomes prefixed:
export {
    Card as CntCard,
    CardHeader as CntCardHeader,
    CardFooter as CntCardFooter,
    CardTitle as CntCardTitle,
    CardDescription as CntCardDescription,
    CardContent as CntCardContent,
};
