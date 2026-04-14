"use client";

import { Button } from "@heroui/react";

export default function SignUpButton() {
    return (
        <Button
            className='bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-shadow'
            size="md"
        >
            Sign Up
        </Button>
    );
}