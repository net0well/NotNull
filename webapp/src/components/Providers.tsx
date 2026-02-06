'use client';

import {HeroUIProvider} from "@heroui/system";
import {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import {ThemeProvider} from "next-themes";
import { ToastProvider } from "@heroui/react";
import {useTagStore} from "@/lib/UseTagStore";
import {getTags} from "@/lib/actions/tag-actions";

export default function Providers({children} : {children: ReactNode}) {
    
    const router = useRouter();
    const setTags = useTagStore(state => state.setTags);
    
    useEffect(() =>{
        const  loadTags = async () => {
            const {data: tags} = await getTags();
            if(tags) setTags(tags);
        }
        
        void loadTags();
    }, [setTags])
    
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



