import {Answer} from "@/lib/types";
import VotingButtons from "@/app/questions/[id]/VotingButtons";
import {Avatar} from "@heroui/avatar";
import Link from "next/link";

type Props = {
    answer: Answer;
}

export default function AnswerContent({answer}: Props) {
    return (
        <div className='flex flex-col border-b-2 border-default-200 py-6 px-6'>
            <div className='flex'>
                <VotingButtons accepted={answer.accepted}/>
                <div className='flex-1 ml-6 prose max-w-none dark:prose-invert'
                     dangerouslySetInnerHTML={{ __html: answer.content }}>
                </div>
            </div>

            {/* Perfil de quem respondeu */}
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