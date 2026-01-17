"use client";

import Link from "next/link";
import { CommandLineIcon, MagnifyingGlassIcon, BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Button, Input, Badge } from "@heroui/react";

export default function TopNav() {
    return (
        <header className='w-full fixed top-0 z-50 border-b bg-white/80 backdrop-blur-md shadow-sm'>
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
                        <Link
                            href='/'
                            className='px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors'
                        >
                            Questions
                        </Link>
                        <Link
                            href='/'
                            className='px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors'
                        >
                            Tags
                        </Link>
                        <Link
                            href='/'
                            className='px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors'
                        >
                            Users
                        </Link>
                    </nav>
                </div>

                <div className='hidden lg:flex flex-1 max-w-md ml-0 mr-4'>
                <Input
                        startContent={<MagnifyingGlassIcon className='size-5 text-gray-400'/>}
                        classNames={{
                            base: "w-full",
                            input: "text-sm",
                            inputWrapper: "bg-gray-50 border-gray-200 hover:bg-gray-100 focus-within:bg-white group-data-[focus=true]:bg-white transition-colors"
                        }}
                        type='search'
                        placeholder='Search questions, tags, or users...'
                        radius="lg"
                    />
                </div>
                
                <div className='flex items-center gap-3'>
                    
                    <div className='flex gap-2'>
                        <Button
                            variant='light'
                            className='text-purple-600 font-medium hover:bg-purple-50'
                            size="sm"
                        >
                            Login
                        </Button>
                        <Button
                            className='bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-shadow'
                            size="sm"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
            
            <div className='lg:hidden px-6 pb-3'>
                <Input
                    startContent={<MagnifyingGlassIcon className='size-5 text-gray-400'/>}
                    classNames={{
                        input: "text-sm",
                        inputWrapper: "bg-gray-50 border-gray-200"
                    }}
                    type='search'
                    placeholder='Search...'
                    radius="lg"
                    size="sm"
                />
            </div>
        </header>
    );
}