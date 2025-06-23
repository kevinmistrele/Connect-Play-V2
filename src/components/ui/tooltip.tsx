"use client";

import * as React from "react";
import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from "@radix-ui/react-tooltip";

export interface CntTooltipProviderProps {
    children: React.ReactNode;
}

export function CntTooltipProvider({ children }: CntTooltipProviderProps) {
    return (
        <TooltipProvider delayDuration={300}>
            {children}
        </TooltipProvider>
    );
}

export {
    Tooltip as CntTooltip,
    TooltipTrigger as CntTooltipTrigger,
    TooltipContent as CntTooltipContent,
};
