import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const cntLabelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    {
        variants: {
            variant: {
                default: "text-foreground",
                muted: "text-muted-foreground",
                primary: "text-primary",
            },
            size: {
                sm: "text-xs",
                md: "text-sm",
                lg: "text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

export interface CntLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof cntLabelVariants> {}

export const CntLabel = React.forwardRef<HTMLLabelElement, CntLabelProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={cn(cntLabelVariants({ variant, size }), className)}
                {...props}
            />
        )
    }
)
CntLabel.displayName = "CntLabel"
