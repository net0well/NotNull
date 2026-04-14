import { Question } from "@/lib/types";
import { Button } from "@heroui/button";
import { LinkComponent } from "@/components/nav/LinkComponent";
import { fuzzyTimeAgo } from "@/lib/util";

export default function QuestionDetailedHeader({ question }: { question: Question }) {
    return (
        <div className="flex flex-col w-full border-b border-default-200 dark:border-white/10 pb-4 px-6 pt-6">
            <div className="flex justify-between items-start gap-6 mb-4">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white flex-1 leading-snug">
                    {question.title}
                </h1>
                <Button
                    as={LinkComponent}
                    href="/questions/ask"
                    size="md"
                    className="
                        font-semibold text-white flex-shrink-0
                        bg-gradient-to-r from-purple-500 to-indigo-600
                        hover:shadow-md hover:shadow-purple-500/20
                        active:scale-[0.98] transition-all duration-150
                    "
                >
                    Ask Question
                </Button>
            </div>

            <div className="flex items-center gap-5 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                    <span>Asked</span>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                        {fuzzyTimeAgo(question.createdAt)}
                    </span>
                </div>
                {question.updatedAt && (
                    <div className="flex items-center gap-1.5">
                        <span>Modified</span>
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                            {fuzzyTimeAgo(question.updatedAt)}
                        </span>
                    </div>
                )}
                <div className="flex items-center gap-1.5">
                    <span>Viewed</span>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                        {question.viewCount + 1} times
                    </span>
                </div>
            </div>
        </div>
    );
}