'use client'

import { Select, SelectItem } from "@heroui/select";

export default function AnswersHeader({ answerCount }: { answerCount: number }) {
    return (
        <div className="
            flex items-center justify-between
            px-6 py-4
            border-b border-default-200 dark:border-white/10
        ">
            <h2 className="text-lg font-semibold text-default-800 dark:text-default-200">
                {answerCount} {answerCount === 1 ? 'Answer' : 'Answers'}
            </h2>

            <Select
                aria-label="Sort answers"
                defaultSelectedKeys={['highScore']}
                size="sm"
                classNames={{
                    base: "w-52",
                    trigger: "border border-default-200 dark:border-white/10 bg-default-50 dark:bg-white/5 hover:border-purple-300 dark:hover:border-purple-700 transition-colors",
                }}
            >
                <SelectItem key="highScore">Highest score (default)</SelectItem>
                <SelectItem key="created">Date created</SelectItem>
            </Select>
        </div>
    );
}