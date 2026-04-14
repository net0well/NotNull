'use client'

import { Question } from "@/lib/types";
import Link from "next/link";
import { Chip } from "@heroui/chip";
import { Avatar } from "@heroui/avatar";
import clsx from "clsx";
import { CheckIcon } from "@heroicons/react/24/outline";
import { timeAgo } from "@/lib/util";

type Props = {
    question: Question;
}

export default function QuestionCard({ question }: Props) {
    return (
        <div className="
            flex gap-5 px-6 py-5 w-full
            border-b border-default-200 dark:border-white/10
            hover:bg-purple-50/30 dark:hover:bg-purple-950/10
            transition-colors duration-150
        ">
            {/* Stats column */}
            <div className="flex flex-col items-center gap-2 text-sm min-w-[4.5rem]">

                {/* Votes */}
                <div className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg bg-default-100 dark:bg-white/5 w-full text-center">
                    <span className="font-semibold text-default-800 dark:text-default-200 text-base leading-none">
                        {question.votes}
                    </span>
                    <span className="text-[11px] text-default-400 mt-0.5">
                        {question.votes === 1 ? 'vote' : 'votes'}
                    </span>
                </div>

                {/* Answers */}
                <div className={clsx(
                    'flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg w-full text-center transition-all',
                    {
                        'bg-emerald-500 text-white':                          question.hasAcceptedAnswer,
                        'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400': question.answerCount > 0 && !question.hasAcceptedAnswer,
                        'bg-default-100 dark:bg-white/5 text-default-500':   question.answerCount === 0,
                    }
                )}>
                    <div className="flex items-center gap-0.5 leading-none">
                        {question.hasAcceptedAnswer && (
                            <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                        )}
                        <span className="font-semibold text-base">{question.answerCount}</span>
                    </div>
                    <span className="text-[11px] mt-0.5">
                        {question.answerCount === 1 ? 'answer' : 'answers'}
                    </span>
                </div>

                {/* Views */}
                <div className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg bg-default-100 dark:bg-white/5 w-full text-center">
                    <span className="font-semibold text-default-800 dark:text-default-200 text-base leading-none">
                        {question.viewCount}
                    </span>
                    <span className="text-[11px] text-default-400 mt-0.5">
                        {question.viewCount === 1 ? 'view' : 'views'}
                    </span>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col gap-2.5 min-w-0">
                <Link
                    href={`/questions/${question.id}`}
                    className="
                        text-base font-semibold leading-snug
                        text-purple-700 dark:text-purple-300
                        hover:text-purple-900 dark:hover:text-purple-100
                        transition-colors first-letter:uppercase line-clamp-2
                    "
                >
                    {question.title}
                </Link>

                <div
                    className="line-clamp-2 text-default-500 dark:text-default-400 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: question.content }}
                />

                {/* Footer: tags + author */}
                <div className="flex justify-between items-center gap-4 pt-1">
                    <div className="flex gap-1.5 flex-wrap">
                        {question.tagSlugs.map(tag => (
                            <Chip
                                key={tag}
                                variant="flat"
                                size="sm"
                                as={Link}
                                href={`/questions?tag=${tag}`}
                                classNames={{
                                    base: "bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors cursor-pointer",
                                    content: "text-purple-700 dark:text-purple-300 text-xs font-medium"
                                }}
                            >
                                {tag}
                            </Chip>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-default-400 flex-shrink-0">
                        <Avatar
                            className="h-5 w-5 text-[10px]"
                            color="secondary"
                            name={question.askerDisplayName?.charAt(0)}
                        />
                        <Link
                            href={`/profiles/${question.askerId}`}
                            className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
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