'use client'

import { Question } from "@/lib/types";
import VotingButtons from "@/app/questions/[id]/VotingButtons";
import QuestionFooter from "@/app/questions/[id]/QuestionFooter";
import { Avatar, Link } from "@heroui/react";
import { timeAgo } from "@/lib/util";

export default function QuestionContent({ question }: { question: Question }) {
    return (
        <div className="border-b border-default-200 dark:border-white/10">
            <div className="flex gap-6 py-8 px-6">

                <VotingButtons />

                <div className="flex-1 flex flex-col gap-6">

                    {/* Content box */}
                    <div className="
                        p-6 rounded-xl
                        bg-white dark:bg-gray-900
                        border border-default-200 dark:border-white/10
                    ">
                        <div
                            className="
                                prose prose-lg max-w-none dark:prose-invert
                                prose-headings:font-semibold
                                prose-headings:text-gray-900 dark:prose-headings:text-white
                                prose-p:text-gray-700 dark:prose-p:text-gray-100
                                prose-p:leading-relaxed
                                prose-li:text-gray-700 dark:prose-li:text-gray-100
                                prose-strong:text-gray-900 dark:prose-strong:text-white
                                prose-strong:font-semibold
                                prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-200
                                prose-blockquote:border-purple-300 dark:prose-blockquote:border-purple-700
                                prose-a:text-purple-600 dark:prose-a:text-purple-400
                                prose-a:no-underline hover:prose-a:underline
                                prose-code:text-purple-600 dark:prose-code:text-purple-300
                                prose-code:bg-purple-50 dark:prose-code:bg-purple-950/40
                                prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium
                                prose-pre:bg-gray-50 dark:prose-pre:bg-gray-950
                                prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-white/10
                                prose-pre:rounded-lg
                            "
                            dangerouslySetInnerHTML={{ __html: question.content }}
                        />
                    </div>

                    <QuestionFooter question={question} />

                    {/* Author card */}
                    <div className="flex justify-end">
                        <div className="
                            group flex items-center gap-3 px-4 py-3 rounded-xl
                            bg-purple-50 dark:bg-purple-950/30
                            border border-purple-100 dark:border-purple-900/50
                            hover:border-purple-300 dark:hover:border-purple-700
                            transition-all duration-150
                        ">
                            <div className="flex flex-col items-end gap-0.5">
                                <span className="text-[11px] text-default-400">asked</span>
                                <span className="text-xs font-medium text-default-600 dark:text-default-300">
                                    {timeAgo(question.createdAt)}
                                </span>
                            </div>

                            <Avatar
                                className="h-8 w-8 text-xs ring-2 ring-purple-200 dark:ring-purple-800 group-hover:ring-purple-400 dark:group-hover:ring-purple-600 transition-all"
                                color="secondary"
                                name={question.askerDisplayName?.charAt(0)}
                            />

                            <Link
                                href={`/profiles/${question.askerId}`}
                                className="text-purple-700 dark:text-purple-300 font-semibold hover:text-purple-900 dark:hover:text-purple-100 transition-colors text-sm"
                            >
                                {question.askerDisplayName}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}