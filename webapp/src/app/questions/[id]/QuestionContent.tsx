'use client'

import {Question} from "@/lib/types";
import VotingButtons from "@/app/questions/[id]/VotingButtons";
import QuestionFooter from "@/app/questions/[id]/QuestionFooter";
import { Avatar, Link } from "@heroui/react";

export default function QuestionContent({question}: { question: Question }) {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <div className='flex gap-6 py-8 px-6 bg-gradient-to-br from-purple-50/40 via-purple-50/20 to-transparent dark:from-purple-950/30 dark:via-purple-950/10 dark:to-transparent'>
                <VotingButtons/>
                <div className='flex-1 flex flex-col gap-6'>
                    <div className='relative p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-700 shadow-lg before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-r before:from-purple-400 before:via-pink-400 before:to-purple-400 before:-z-10 before:animate-[spin_3s_linear_infinite] before:blur-sm after:absolute after:inset-0 after:rounded-2xl after:bg-white dark:after:bg-gray-900 after:-z-[9]'>
                        <div className='prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-100 prose-p:leading-relaxed prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-code:text-purple-600 dark:prose-code:text-purple-300 prose-code:bg-purple-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700 prose-strong:text-gray-900 dark:prose-strong:text-white prose-li:text-gray-700 dark:prose-li:text-gray-100'
                             dangerouslySetInnerHTML={{ __html: question.content }}
                        />
                    </div>

                    <QuestionFooter question={question} />

                    <div className='flex justify-end'>
                        <div className='group/user flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-purple-100/80 to-purple-200/60 dark:from-purple-900/40 dark:to-purple-800/30 rounded-xl border-2 border-purple-300/60 dark:border-purple-700/60 shadow-md hover:shadow-lg transition-all duration-300'>
                            <span className='text-xs font-medium text-purple-700 dark:text-purple-300'>
                                asked {question.createdAt}
                            </span>
                            <Avatar
                                className='h-10 w-10 ring-2 ring-purple-400 dark:ring-purple-600 transition-transform group-hover/user:scale-110'
                                color='secondary'
                                name={question.askerDisplayName?.charAt(0)}
                            />
                            <Link
                                href={`/profiles/${question.askerId}`}
                                className='text-purple-800 dark:text-purple-200 font-bold hover:text-purple-950 dark:hover:text-purple-50 transition-colors text-sm'
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