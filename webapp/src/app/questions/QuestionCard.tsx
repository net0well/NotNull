'use client'

import {Question} from "@/lib/types";
import Link from "next/link";
import {Chip} from "@heroui/chip";
import {Avatar} from "@heroui/avatar";
import clsx from "clsx";
import {CheckIcon} from "@heroicons/react/24/outline";
import { timeAgo } from "@/lib/util";

type Props = {
    question: Question;
}

export default function QuestionCard({question}: Props) {
    return (
        <div className='flex gap-6 px-6 py-5 w-full hover:bg-default-50 dark:hover:bg-default-200/20 transition-colors rounded-lg border-b border-default-200'>            <div className='flex flex-col items-end gap-3 text-sm min-w-[6rem]'>
                <div className='flex flex-col items-center gap-1 px-3 py-2 rounded-md bg-default-100'>
                    <span className='font-semibold text-default-700'>{question.votes}</span>
                    <span className='text-xs text-default-500'>{question.votes === 1 ? 'vote' : 'votes'}</span>
                </div>

                <div
                    className={clsx('flex flex-col items-center gap-1 px-3 py-2 rounded-md transition-all', {
                        'bg-success-50 border border-success-200': question.answerCount > 0 && !question.hasAcceptedAnswer,
                        'bg-success-500 text-white shadow-md': question.hasAcceptedAnswer,
                        'bg-default-100': question.answerCount === 0
                    })}
                >
                    <div className='flex items-center gap-1'>
                        {question.hasAcceptedAnswer && (
                            <CheckIcon className="h-4 w-4" strokeWidth={3}/>
                        )}
                        <span className='font-semibold'>{question.answerCount}</span>
                    </div>
                    <span className='text-xs'>{question.answerCount === 1 ? 'answer' : 'answers'}</span>
                </div>

                <div className='flex flex-col items-center gap-1 px-3 py-2 rounded-md bg-default-100'>
                    <span className='font-semibold text-default-700'>{question.viewCount}</span>
                    <span className='text-xs text-default-500'>{question.viewCount === 1 ? 'view' : 'views'}</span>
                </div>
            </div>
            
            <div className='flex flex-1 flex-col gap-3'>
                <Link
                    href={`/questions/${question.id}`}
                    className='text-lg text-primary font-semibold hover:text-primary-600 transition-colors first-letter:uppercase line-clamp-2'
                >
                    {question.title}
                </Link>

                <div
                    className='line-clamp-2 text-default-600 text-sm leading-relaxed'
                    dangerouslySetInnerHTML={{__html: question.content}}
                />

                <div className='flex justify-between items-center pt-2'>
                    {/* Tags */}
                    <div className='flex gap-2 flex-wrap'>
                        {question.tagSlugs.map(tag => (
                            <Chip
                                key={tag}
                                variant='flat'
                                size='sm'
                                as={Link}
                                href={`/questions?tag=${tag}`}
                                className='hover:bg-default-200 transition-colors'
                            >
                                {tag}
                            </Chip>
                        ))}
                    </div>

                    <div className='text-xs flex items-center gap-2 text-default-500 ml-4'>
                        <Avatar
                            className='h-6 w-6'
                            color='secondary'
                            name={question.askerDisplayName?.charAt(0)}
                        />
                        <Link
                            href={`/profiles/${question.askerId}`}
                            className='text-secondary font-medium hover:underline'
                        >
                            {question.askerDisplayName}
                        </Link>
                        <span>asked {timeAgo(question.createdAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}