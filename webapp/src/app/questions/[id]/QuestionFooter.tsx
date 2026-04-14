import { Question } from "@/lib/types";
import { Chip } from "@heroui/chip";
import { Avatar } from "@heroui/avatar";
import { LinkComponent } from "@/components/nav/LinkComponent";

export default function QuestionFooter({ question }: { question: Question }) {
    return (
        <div className="flex items-center justify-between gap-4 mt-2">
            {/* Tags */}
            <div className="flex gap-1.5 flex-wrap">
                {question.tagSlugs.map((tag: string) => (
                    <Chip
                        key={tag}
                        as={LinkComponent}
                        href={`/questions?tag=${tag}`}
                        size="sm"
                        classNames={{
                            base: "bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors cursor-pointer",
                            content: "text-purple-700 dark:text-purple-300 text-xs font-medium"
                        }}
                    >
                        {tag}
                    </Chip>
                ))}
            </div>
        </div>
    );
}