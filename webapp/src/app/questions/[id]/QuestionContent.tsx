import { Question } from "@/lib/types";
import {ArrowDownCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import VotingButtons from "@/app/questions/[id]/VotingButtons";

type Props = {
    question: Question;
}

export default function QuestionContent({question} : Props) {
    return (
        <div className="border-b">
            <div className='flex border-b border-gray-200 dark:border-gray-700 pb-3 px-6'>
                <VotingButtons/>
                <div className='flex-1 mt-4 ml-6 prose prose-gray dark:prose-invert max-w-none'
                     dangerouslySetInnerHTML={{ __html: question.content }}
                />
            </div>
        </div>
    );
}