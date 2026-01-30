import {getTags} from "@/lib/actions/tag-actions";

export default async function Page() {
    const {data: tags, error} = await  getTags();
    
    if(error) throw error;
    
    return (
        <div>
            <ul>
                {tags?.map((tag) => (
                    <li key={tag.id}>
                        {tag.name}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

