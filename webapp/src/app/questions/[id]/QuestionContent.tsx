'use client'

import { Question } from "@/lib/types";
import VotingButtons from "@/app/questions/[id]/VotingButtons";
import QuestionFooter from "@/app/questions/[id]/QuestionFooter";
import { Avatar, Link } from "@heroui/react";
import { timeAgo } from "@/lib/util";

export default function QuestionContent({ question }: { question: Question }) {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <div className='flex gap-6 py-8 px-6 bg-gradient-to-br from-purple-50/30 to-transparent dark:from-purple-950/20 dark:to-transparent'>

                <VotingButtons />

                <div className='flex-1 flex flex-col gap-6'>
                    <div className='relative p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow'>
                        <div
                            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-code:bg-purple-50 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700 prose-pre:rounded-lg prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-blockquote:border-purple-300 dark:prose-blockquote:border-purple-700 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300"

                            dangerouslySetInnerHTML={{ __html: question.content }}
                        />
                    </div>

                    <QuestionFooter question={question} />
                    
                    <div className='flex justify-end'>
                        <div className='group flex items-center gap-3 px-5 py-3.5 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all duration-200'>
                            <span className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                asked {timeAgo(question.createdAt)}
                            </span>
                            <Avatar
                                className='h-9 w-9 ring-2 ring-purple-200 dark:ring-purple-800 group-hover:ring-purple-300 dark:group-hover:ring-purple-700 transition-all'
                                color='secondary'
                                name={question.askerDisplayName?.charAt(0)}
                            />
                            <Link
                                href={`/profiles/${question.askerId}`}
                                className='text-purple-700 dark:text-purple-300 font-semibold hover:text-purple-900 dark:hover:text-purple-100 transition-colors text-sm'
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