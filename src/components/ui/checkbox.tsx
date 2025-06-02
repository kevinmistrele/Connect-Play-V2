import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const CntCheckbox  = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <div className="relative">
      <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
              "peer h-4 w-4 shrink-0 rounded-sm border border-gray-700 bg-cp-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cp-primary data-[state=checked]:text-primary-foreground",
              className
          )}
          {...props}
      >
        <CheckboxPrimitive.Indicator
            className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center text-white opacity-0 peer-data-[state=checked]:opacity-100 pointer-events-none"
        >
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
))
CntCheckbox.displayName = "CntCheckbox"

export { CntCheckbox }
