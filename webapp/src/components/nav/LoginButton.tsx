'use client';

import {Button} from "@heroui/react";
import {signIn} from "next-auth/react";

export default function LoginButton() {
    return (
        <Button
            variant='light'
            className='text-purple-600 font-medium hover:bg-purple-50'
            size="md"
            type='button'
            onPress={() => signIn('keycloak', {redirectTo: '/questions'}) }
        >
            Login
        </Button>
    );
}

