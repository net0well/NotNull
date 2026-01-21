import {getQuestionById} from "@/lib/actions/question-actions";
import {notFound} from "next/navigation";
import QuestionDetailedHeader from "@/app/questions/[id]/QuestionDetailedHeader";


type Params = Promise<{ id: string }>

export default async function QuestionDetailed({ params }: {params: Params}) {
    const { id } = await params;
    const question = await getQuestionById(id);

    if (!question) return notFound();

    return (
        <div className='w-full'>
            <QuestionDetailedHeader question={question} />
        </div>
    )
}