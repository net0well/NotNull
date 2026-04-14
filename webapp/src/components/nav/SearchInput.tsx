'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@heroui/input";
import { useEffect, useRef, useState } from "react";
import { Question } from "@/lib/types";
import { searchQuestions } from "@/lib/actions/question-actions";
import { Listbox, ListboxItem } from "@heroui/listbox";

export default function SearchInput() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<Question[] | null>(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        if (!query) {
            setResults(null);
            setShowDropdown(false);
            return;
        }

        timeoutRef.current = setTimeout(async () => {
            setLoading(true);
            const { data: questions } = await searchQuestions(query);
            setResults(questions);
            setLoading(false);
            setShowDropdown(true);
        }, 300);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const onAction = () => {
        setQuery('');
        setResults(null);
        setShowDropdown(false);
    };

    return (
        <div ref={containerRef} className="relative ml-6 w-[300px] lg:w-[450px] xl:w-[550px]">
            <Input
                startContent={
                    loading
                        ? <div className="size-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                        : <MagnifyingGlassIcon className="size-4 text-default-400" />
                }
                type="search"
                placeholder="Search questions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => results && setShowDropdown(true)}
                classNames={{
                    inputWrapper: [
                        'border border-default-200 dark:border-white/10',
                        'bg-gray-50 dark:bg-white/5',
                        'hover:border-purple-300 dark:hover:border-purple-700',
                        'group-data-[focus=true]:border-purple-500 dark:group-data-[focus=true]:border-purple-400',
                        'shadow-none',
                        'transition-colors duration-150',
                    ].join(' '),
                }}
            />

            {showDropdown && results && (
                <div className="
                    absolute top-[calc(100%+6px)] left-0 z-50 w-full
                    bg-white dark:bg-gray-900
                    border border-default-200 dark:border-white/10
                    rounded-xl overflow-hidden
                    shadow-lg shadow-black/5 dark:shadow-black/30
                ">
                    {results.length === 0 ? (
                        <div className="px-4 py-8 text-center">
                            <MagnifyingGlassIcon className="size-8 text-default-300 mx-auto mb-2" />
                            <p className="text-sm text-default-400">
                                No results for{' '}
                                <span className="font-semibold text-default-600 dark:text-default-300">
                                    &ldquo;{query}&rdquo;
                                </span>
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Header do dropdown */}
                            <div className="
                                flex items-center justify-between
                                px-3 py-2
                                border-b border-default-100 dark:border-white/5
                            ">
                                <span className="text-xs font-medium text-default-400">
                                    {results.length} result{results.length !== 1 ? 's' : ''} found
                                </span>
                                <span className="text-xs text-default-300 dark:text-default-500">
                                    ↵ to select
                                </span>
                            </div>

                            <Listbox
                                aria-label="Search results"
                                onAction={onAction}
                                items={results}
                                className="max-h-[400px] overflow-y-auto p-1.5"
                            >
                                {(question) => (
                                    <ListboxItem
                                        aria-label={question.title}
                                        textValue={question.title}
                                        href={`/questions/${question.id}`}
                                        key={question.id}
                                        className="
                                            rounded-lg px-2 py-2 my-0.5
                                            hover:bg-purple-50 dark:hover:bg-purple-950/30
                                            data-[hover=true]:bg-purple-50 dark:data-[hover=true]:bg-purple-950/30
                                            transition-colors overflow-hidden
                                        "
                                        startContent={
                                            <div className={`
                                                flex flex-col h-11 min-w-11 justify-center items-center
                                                border rounded-lg text-center flex-shrink-0
                                                ${question.answerCount > 0
                                                ? 'border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                                                : 'border-default-200 dark:border-white/10 text-default-400 bg-default-50 dark:bg-white/5'
                                            }
                                            `}>
                                                <span className="text-sm font-bold leading-none">
                                                    {question.answerCount}
                                                </span>
                                                <span className="text-[10px] mt-0.5 leading-none opacity-70">
                                                    ans
                                                </span>
                                            </div>
                                        }
                                    >
                                        <div className="flex flex-col gap-0.5 min-w-0 overflow-hidden w-full">
                                            <span className="font-medium text-sm truncate block text-default-700 dark:text-default-200">
                                                {question.title}
                                            </span>
                                            <span className="text-xs text-default-400 line-clamp-1 break-words">
                                                {question.content}
                                            </span>
                                        </div>
                                    </ListboxItem>
                                )}
                            </Listbox>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}