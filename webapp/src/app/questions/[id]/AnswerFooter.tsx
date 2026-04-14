import { Answer } from "@/lib/types";
import { timeAgo } from "@/lib/util";
import { Avatar } from "@heroui/avatar";
import Link from "next/link";

export default function AnswerFooter({ answer }: { answer: Answer }) {
    return (
        <div className="flex justify-end mt-2">
            <div className="
                flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                bg-purple-50/60 dark:bg-purple-950/20
                border border-purple-100 dark:border-purple-900/40
            ">
                <span className="text-xs text-default-400">
                    answered {timeAgo(answer.createdAt)}
                </span>
                <Avatar
                    className="h-7 w-7 text-xs"
                    color="secondary"
                    name={answer.userDisplayName?.charAt(0)}
                />
                <Link
                    href={`/profiles/${answer.id}`}
                    className="text-purple-700 dark:text-purple-300 font-semibold hover:underline text-sm"
                >
                    {answer.userDisplayName}
                </Link>
            </div>
        </div>
    );
}