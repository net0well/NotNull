import { Answer } from "@/lib/types";
import VotingButtons from "@/app/questions/[id]/VotingButtons";
import AnswerFooter from "@/app/questions/[id]/AnswerFooter";

export default function AnswerContent({ answer }: { answer: Answer }) {
    return (
        <div className="
            flex gap-6 px-6 py-6
            border-b border-default-200 dark:border-white/10
            hover:bg-purple-50/20 dark:hover:bg-purple-950/10
            transition-colors duration-150
        ">
            <VotingButtons accepted={answer.accepted} />

            <div className="flex flex-col flex-1 gap-4">
                <div
                    className="prose max-w-none dark:prose-invert
                    prose-p:text-gray-700 dark:prose-p:text-gray-100
                    prose-headings:text-gray-900 dark:prose-headings:text-white
                    prose-strong:text-gray-900 dark:prose-strong:text-white
                    prose-li:text-gray-700 dark:prose-li:text-gray-100
                    prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-200
                    prose-a:text-purple-600 dark:prose-a:text-purple-400
                    prose-code:text-purple-600 dark:prose-code:text-purple-300
                    prose-code:bg-purple-50 dark:prose-code:bg-purple-950/30
                    prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900
                    prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-white/10
                    "
                    dangerouslySetInnerHTML={{ __html: answer.content }}
                />
                <AnswerFooter answer={answer} />
            </div>
        </div>
    );
}