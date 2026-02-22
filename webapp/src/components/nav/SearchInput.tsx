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
            timeoutRef.current = setTimeout(() => {
                setResults(null);
                setShowDropdown(false);
            }, 0);
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
                        ? <div className="size-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        : <MagnifyingGlassIcon className="size-5 text-default-400" />
                }
                type="search"
                placeholder="Search questions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => results && setShowDropdown(true)}
            />

            {showDropdown && results && (
                <div className="absolute top-[calc(100%+6px)] left-0 z-50 w-full bg-background dark:bg-default-50 shadow-xl border border-default-200 rounded-xl overflow-hidden">
                    {results.length === 0 ? (
                        <div className="px-4 py-6 text-center text-sm text-default-400">
                            No results for{' '}
                            <span className="font-semibold text-default-600">
                                &ldquo;{query}&rdquo;
                            </span>
                        </div>
                    ) : (
                        <>
                            <div className="px-3 py-2 text-xs font-semibold text-default-400 border-b border-default-100">
                                {results.length} result{results.length !== 1 ? 's' : ''} found
                            </div>
                            <Listbox
                                aria-label="Search results"
                                onAction={onAction}
                                items={results}
                                className="max-h-[420px] overflow-y-auto p-1"
                            >
                                {(question) => (
                                    <ListboxItem
                                        aria-label={question.title}
                                        textValue={question.title}
                                        href={`/questions/${question.id}`}
                                        key={question.id}
                                        className="rounded-lg px-2 py-2 my-0.5 hover:bg-default-100 transition-colors overflow-hidden"
                                        startContent={
                                            <div
                                                className={`flex flex-col h-12 min-w-12 justify-center items-center border rounded-lg text-center flex-shrink-0
                                                    ${question.answerCount > 0
                                                    ? 'border-success text-success bg-success/10'
                                                    : 'border-default-300 text-default-400'
                                                }`}
                                            >
                                                <span className="text-sm font-bold leading-none">{question.answerCount}</span>
                                                <span className="text-[10px] mt-0.5 leading-none">answers</span>
                                            </div>
                                        }
                                    >
                                        <div className="flex flex-col gap-0.5 min-w-0 overflow-hidden w-full">
                                            <span className="font-semibold text-sm truncate block">{question.title}</span>
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