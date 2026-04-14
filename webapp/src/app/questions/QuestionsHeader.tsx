'use client';

import { Button } from "@heroui/button";
import Link from "next/link";
import { Tab, Tabs } from "@heroui/tabs";
import { useTagStore } from "@/lib/UseTagStore";

type Props = {
    tag?: string;
    total: number;
}

export default function QuestionsHeader({ tag, total }: Props) {
    const selectedTag = useTagStore((state) => state.getTagBySlug(tag ?? ''));

    const tabs = [
        { key: 'newest',     label: 'Newest' },
        { key: 'active',     label: 'Active' },
        { key: 'unanswered', label: 'Unanswered' },
    ];

    return (
        <div className="flex flex-col w-full gap-0 -mt-6">

            {/* Top bar */}
            <div className="flex justify-between items-start px-6 pt-8 pb-6 border-b border-default-200 dark:border-white/10">
                <div className="flex flex-col gap-1.5">
                    <h1 className="text-3xl font-bold text-default-900 dark:text-default-100">
                        {tag ? (
                            <>
                                Questions tagged{' '}
                                <span className="
                                    inline-flex items-center px-2.5 py-0.5 rounded-lg
                                    bg-purple-50 dark:bg-purple-950/40
                                    text-purple-700 dark:text-purple-300
                                    border border-purple-200 dark:border-purple-800
                                    font-mono text-2xl
                                ">
                                    {tag}
                                </span>
                            </>
                        ) : (
                            'All Questions'
                        )}
                    </h1>

                    {selectedTag?.description && (
                        <p className="text-sm text-default-500 dark:text-default-400 max-w-xl font-light">
                            {selectedTag.description}
                        </p>
                    )}

                    <p className="text-sm text-default-400 dark:text-default-500 mt-0.5">
                        {total.toLocaleString()} {total === 1 ? 'question' : 'questions'}
                    </p>
                </div>

                <Button
                    as={Link}
                    href="/questions/ask"
                    size="md"
                    className="
                        font-semibold text-white
                        bg-gradient-to-r from-purple-500 to-indigo-600
                        hover:shadow-md hover:shadow-purple-500/20
                        active:scale-[0.98]
                        transition-all duration-150
                        flex-shrink-0
                    "
                >
                    Ask Question
                </Button>
            </div>

            {/* Filter tabs */}
            <div className="px-6 bg-white/50 dark:bg-white/[0.02]">
                <Tabs
                    variant="underlined"
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b-0",
                        cursor: "w-full bg-purple-600 dark:bg-purple-400",
                        tab: "max-w-fit px-0 h-11",
                        tabContent: "text-default-500 group-data-[selected=true]:text-purple-600 dark:group-data-[selected=true]:text-purple-400 font-medium text-sm"
                    }}
                >
                    {tabs.map(tab => (
                        <Tab key={tab.key} title={tab.label} />
                    ))}
                </Tabs>
            </div>
        </div>
    );
}