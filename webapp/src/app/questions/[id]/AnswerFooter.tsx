import {Answer} from "@/lib/types";
import {Avatar} from "@heroui/avatar";
import Link from "next/link";

export default function AnswerFooter({answer}: {answer: Answer}) {
    return (
        <div className='flex justify-end mt-4'>
            <div className='flex justify-end mt-4 ml-[4.5rem]'>
                <div className='flex items-center gap-3 px-4 py-3 bg-primary-50/50 dark:bg-primary-900/10 rounded-lg border border-primary-100 dark:border-primary-900/30'>
                    <span className='text-xs text-default-500'>answered {answer.createdAt}</span>
                    <Avatar
                        className='h-8 w-8'
                        color='secondary'
                        name={answer.userDisplayName?.charAt(0)}
                    />
                    <Link
                        href={`/profiles/${answer.id}`}
                        className='text-secondary font-semibold hover:underline text-sm'
                    >
                        {answer.userDisplayName}
                    </Link>
                </div>
            </div>
        </div>
    );
}