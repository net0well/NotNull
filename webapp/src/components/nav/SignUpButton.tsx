// src/components/nav/SignUpButton.tsx
'use client';

import { Button } from "@heroui/react";

export default function SignUpButton() {
    return (
        <Button
            className="
                bg-gradient-to-r from-purple-500 to-indigo-600
                text-white font-medium
                hover:shadow-md hover:shadow-purple-500/20
                active:scale-[0.98]
                transition-all duration-150
            "
            size="md"
            type="button"
        >
            Sign Up
        </Button>
    );
}