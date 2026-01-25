import {Button} from "@heroui/button";
import {ArrowDownCircleIcon, ArrowUpCircleIcon, CheckIcon} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

type Props = {
    accepted?: boolean;
}

export default function VotingButtons({accepted}: Props){
    return (
        <div className='flex-shrink-0 flex flex-col gap-3 items-center justify-start mt-4'>
            <Button
                isIconOnly
                variant='light'
                className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            >
                <ArrowUpCircleIcon className='w-12' />
            </Button>
            <span className='text-xl font-semibold text-gray-800 dark:text-gray-200'>0</span>
            <Button
                isIconOnly
                variant='light'
                className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            >
                <ArrowDownCircleIcon className='w-12' />
            </Button>
            {accepted && (
                <Button
                isIconOnly
                variant='light'
                >
                    <CheckBadgeIcon className='size-12 text-sucess' strokeWidth={4}/>
                </Button>
            )}
        </div>
    );
}

