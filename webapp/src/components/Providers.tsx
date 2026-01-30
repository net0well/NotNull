'use client';

import {HeroUIProvider} from "@heroui/system";
import {ReactNode} from "react";
import {useRouter} from "next/navigation";
import {ThemeProvider} from "next-themes";
import { ToastProvider } from "@heroui/react";

export default function Providers({children} : {children: ReactNode}) {
    
    const router = useRouter();
    
    return (
        <HeroUIProvider navigate={router.push} className='h-full flex flex-col'>
            <ToastProvider/>
            <ThemeProvider
                attribute='class'
                defaultTheme='dark'
            >
                {children}
            </ThemeProvider>
           
        </HeroUIProvider>
    );
}



