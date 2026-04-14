'use client';

import { Button } from "@heroui/react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
    return (
        <Button
            variant="light"
            className="
                font-medium
                text-purple-600 dark:text-purple-400
                hover:bg-purple-50 dark:hover:bg-purple-950/40
            "
            size="md"
            type="button"
            onPress={() => signIn('keycloak', { redirectTo: '/questions' })}
        >
            Login
        </Button>
    );
}