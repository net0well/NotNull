import {Question} from "@/lib/types";
import {Chip} from "@heroui/chip";
import {Avatar} from "@heroui/avatar";
import { LinkComponent } from "@/components/nav/LinkComponent";


type Props = {
    question: Question;
}
export default function QuestionFooter({question}: Props) {
    return (
        <div className='flex justify-between mt-2'>
            <div className='flex flex-col self-end'>
                <div className="flex gap-2">
                    {question.tagSlugs.map((tag: string) => (
                        <Chip
                            as={LinkComponent}
                            variant='bordered'
                            href={`/questions?tag=${tag}`}
                            key={tag}
                        >
                            {tag}
                        </Chip>
                    ))}
                </div>
            </div>
        </div>
    );
}