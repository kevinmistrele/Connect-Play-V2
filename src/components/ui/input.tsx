import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type = "text", ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    // base
                    "w-full rounded-md border bg-background px-4 py-2 text-white placeholder-gray-500",
                    // estado padrão
                    "border-gray-700",
                    // focus state
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    // disabled
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "CntInput";

export { Input as CntInput };
