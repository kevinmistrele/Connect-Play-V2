"use client";

import { Toaster } from "sonner";

export const CntSonner = () => {
    return (
        <Toaster
            position="top-center"
            richColors
            theme="dark"
            toastOptions={{
                style: {
                    background: "#0A0A0A",
                    color: "#F8FAFC",
                    border: "1px solid #1E1E1E",
                },
            }}
        />
    );
};
