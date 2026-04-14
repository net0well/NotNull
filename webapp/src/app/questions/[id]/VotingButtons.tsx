import { Button } from "@heroui/button";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

type Props = {
    accepted?: boolean;
}

export default function VotingButtons({ accepted }: Props) {
    return (
        <div className="flex-shrink-0 flex flex-col items-center gap-1 justify-start">
            <Button
                isIconOnly
                variant="light"
                size="lg"
                className="text-default-400 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all duration-150"
            >
                <ArrowUpCircleIcon className="w-9 h-9 stroke-[1.5]" />
            </Button>

            <div className="
                px-3 py-1.5 rounded-lg min-w-[2.75rem]
                bg-default-100 dark:bg-white/5
                flex items-center justify-center
            ">
                <span className="text-xl font-bold text-default-800 dark:text-default-200">0</span>
            </div>

            <Button
                isIconOnly
                variant="light"
                size="lg"
                className="text-default-400 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all duration-150"
            >
                <ArrowDownCircleIcon className="w-9 h-9 stroke-[1.5]" />
            </Button>

            {accepted && (
                <div className="mt-1 animate-in fade-in zoom-in duration-300">
                    <div className="
                        p-2 rounded-xl
                        bg-emerald-50 dark:bg-emerald-950/30
                        border border-emerald-200 dark:border-emerald-800
                    ">
                        <CheckBadgeIcon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </div>
            )}
        </div>
    );
}