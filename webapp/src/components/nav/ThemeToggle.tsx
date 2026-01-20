'use client';

import { Button } from "@heroui/react";
import {useTheme} from "next-themes";
import {BoltIcon, MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    
    const[mounted, setMounted] = useState(false);
    
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setMounted(true);
    }, []);
    
    if(!mounted) return null;
    
    
    return (
        <Button
            color='primary'
            variant='light'
            isIconOnly
            aria-label='Toggle Theme'
            onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? (
                <MoonIcon  className='h-8 text-purple-600' />
            ) : (
                <BoltIcon className='h-8 text-orange-400'/>
            )}
        </Button>
    );
}

