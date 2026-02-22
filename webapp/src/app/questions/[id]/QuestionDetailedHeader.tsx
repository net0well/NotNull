import {Question} from "@/lib/types";
import {Button} from "@heroui/button";
import {LinkComponent} from "@/components/nav/LinkComponent";
import {fuzzyTimeAgo} from "@/lib/util";

type Props = {
    question: Question;
}

export default function QuestionDetailedHeader({question}: Props) {
    return (
        <div className='flex flex-col w-full border-b border-gray-300 dark:border-gray-700 pb-4 px-6'>
            <div className='flex justify-between items-start gap-4 mb-3'>
                <h1 className='text-3xl font-normal text-gray-900 dark:text-gray-100 flex-1 leading-tight'>
                    {question.title}
                </h1>
                <Button
                    as={LinkComponent}
                    href='/questions/ask'
                    color='secondary'
                    size='md'
                    className='whitespace-nowrap'
                >
                    Ask Question
                </Button>
            </div>

            <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
                <div className='flex items-center gap-1'>
                    <span>Asked</span>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>{fuzzyTimeAgo(question.createdAt)}</span>
                </div>

                {question.updatedAt && (
                    <div className='flex items-center gap-1'>
                        <span>Modified</span>
                        <span className='font-medium text-gray-900 dark:text-gray-100'>{fuzzyTimeAgo(question.updatedAt)}</span>
                    </div>
                )}

                <div className='flex items-center gap-1'>
                    <span>Viewed</span>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>{question.viewCount + 1} times</span>
                </div>
            </div>
        </div>
    );
}