'use client';

import {Button} from "@heroui/button";
import Link from "next/link";
import {Tab, Tabs} from "@heroui/tabs";
import {useTagStore} from "@/lib/UseTagStore";

type Props = {
    tag?: string;
    total: number;
}

export default function QuestionsHeader({ tag, total }: Props) {

    const selectedTag = useTagStore((state) => state.getTagBySlug(tag ?? ''));
    
    
    const tabs = [
        {key: 'newest', label: 'Newest'},
        {key: 'active', label: 'Active'},
        {key: 'unanswered', label: 'Unanswered'},
    ];

    return (
        <div className='flex flex-col w-full border-b-2 border-default-200 gap-6 pb-6 bg-gradient-to-b from-default-50 to-transparent -mt-6'>
            <div className='flex justify-between items-center px-6 pt-6'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col items-start gap-2'>
                        <h1 className='text-4xl font-bold text-default-800'>
                            {tag ? (
                                <span>
                                Questions tagged <span className='text-primary'>[{tag}]</span>
                            </span>
                            ) : (
                                'All Questions'
                            )}
                        </h1>
                        <p className='font-light'>
                            {selectedTag?.description}
                        </p>
                    </div>
                    <p className='text-default-500 text-sm'>
                        {total.toLocaleString()} {total === 1 ? 'question' : 'questions'}
                    </p>
                </div>

                <Button
                    as={Link}
                    href='/questions/ask'
                    color='secondary'
                    size='lg'
                    className='font-semibold shadow-md'
                >
                    Ask Question
                </Button>
            </div>

            {/* Filter tabs */}
            <div className='px-6'>
                <Tabs
                    variant='underlined'
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-secondary",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-secondary font-semibold"
                    }}
                >
                    {tabs.map(tab => (
                        <Tab key={tab.key} title={tab.label}/>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}