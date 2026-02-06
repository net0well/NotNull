'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Input } from "@heroui/input";
import { Tab, Tabs } from "@heroui/tabs";

export default function TagHeader() {
    const tabs = [
        { key: 'popular', label: 'Popular' },
        { key: 'name', label: 'Name' }
    ]

    return (
        <div className='flex flex-col w-full gap-6 pb-6'>
            {/* Header Section */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                    Tags
                </h1>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl'>
                    A tag is a keyword or label that categorizes your question with other similar questions.
                    Using the right tags makes it easier for others to find and answer your question.
                </p>
            </div>

            {/* Controls Section */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                <Input
                    type="search"
                    className='w-full sm:w-80'
                    placeholder="Filter by tag name"
                    startContent={<MagnifyingGlassIcon className='size-5 text-gray-400 dark:text-gray-500' />}
                    classNames={{
                        input: "text-sm",
                        inputWrapper: "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 focus-within:bg-white dark:focus-within:bg-gray-900 transition-colors"
                    }}
                    radius="lg"
                />

                <Tabs
                    aria-label="Sort tags"
                    color="secondary"
                    variant="bordered"
                    classNames={{
                        tabList: "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
                        cursor: "bg-gradient-to-r from-purple-500 to-indigo-600",
                        tab: "data-[selected=true]:text-white",
                    }}
                >
                    {tabs.map((item) => (
                        <Tab key={item.key} title={item.label} />
                    ))}
                </Tabs>
            </div>
        </div>
    )
}