"use client";

import Link from "next/link";
import { CommandLineIcon, MagnifyingGlassIcon, BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Button, Input, Badge } from "@heroui/react";
import ThemeToggle from "@/components/nav/ThemeToggle";

export default function TopNav() {
    return (
        <header className='w-full fixed top-0 z-50 border-b bg-white/80 dark:bg-black backdrop-blur-md shadow-sm'>
            <div className='flex items-center justify-between px-6 py-3 mx-auto max-w-[1920px]'>
                <div className='flex items-center gap-8'>
                    <Link href='/' className='flex items-center gap-2.5 group'>
                        <div className='p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-md group-hover:shadow-lg transition-shadow'>
                            <CommandLineIcon className='size-6 text-white'/>
                        </div>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                            @NotNull
                        </h3>
                    </Link>

                    <nav className='hidden md:flex items-center gap-1'>
                        <nav className='hidden md:flex items-center gap-1'>
                            <Link
                                href='/'
                                className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-colors'
                            >
                                Questions
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-colors'
                            >
                                Tags
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-colors'
                            >
                                Users
                            </Link>
                        </nav>

                        <div className='ml-4 w-200'>
                            <Input
                                startContent={<MagnifyingGlassIcon className='size-5 text-gray-400 dark:text-gray-500'/>}
                                classNames={{
                                    input: "text-sm",
                                    inputWrapper: "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 focus-within:bg-white dark:focus-within:bg-gray-900 group-data-[focus=true]:bg-white dark:group-data-[focus=true]:bg-gray-900 transition-colors"
                                }}
                                type='search'
                                placeholder='Search questions, tags, or users...'
                                radius="lg"
                            />
                        </div>
                        
                    </nav>
                </div>
                
                
                <div className='flex items-center gap-3'>
                    
                    <ThemeToggle/>
                    
                    <div className='flex gap-2'>
                        <Button
                            variant='light'
                            className='text-purple-600 font-medium hover:bg-purple-50'
                            size="md"
                        >
                            Login
                        </Button>
                        <Button
                            className='bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-shadow'
                            size="md"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}