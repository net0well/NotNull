import {Button} from "@heroui/button";
import {ArrowDownCircleIcon, ArrowUpCircleIcon} from "@heroicons/react/24/outline";
import {CheckBadgeIcon} from "@heroicons/react/24/solid";

type Props = {
    accepted?: boolean;
}

export default function VotingButtons({accepted}: Props){
    return (
        <div className='flex-shrink-0 flex flex-col gap-2 items-center justify-start'>
            <Button
                isIconOnly
                variant='light'
                size='lg'
                className='text-purple-600 hover:text-purple-600 dark:hover:text-purple-600 hover:text-purple-600 dark:hover:text-purple-600 transition-all duration-200 hover:scale-110'
            >
                <ArrowUpCircleIcon className='w-10 h-10 stroke-[1.5]' />
            </Button>
            <div className='px-3 py-1.5 rounded-lg bg-default-100 dark:bg-default-800/50 min-w-[3rem] flex items-center justify-center'>
                <span className='text-2xl font-bold text-default-900 dark:text-default-100'>0</span>
            </div>
            <Button
                isIconOnly
                variant='light'
                size='lg'
                className='text-default-500 hover:text-purple-600 dark:hover:text-purple-600 hover:text-purple-600 dark:hover:text-purple-600 transition-all duration-200 hover:scale-110'
            >
                <ArrowDownCircleIcon className='w-10 h-10 stroke-[1.5]' />
            </Button>
            {accepted && (
                <div className='mt-2 animate-in fade-in zoom-in duration-500'>
                    <Button
                        isIconOnly
                        variant='light'
                        size='lg'
                        className='bg-success-100 dark:bg-success-900/30 hover:bg-success-200 dark:hover:bg-success-900/50 transition-all'
                    >
                        <CheckBadgeIcon className='w-10 h-10 text-success-600 dark:text-success-400 drop-shadow-lg'/>
                    </Button>
                </div>
            )}
        </div>
    );
}