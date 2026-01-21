import {Button} from "@heroui/button";
import { LinkComponent } from "@/components/nav/LinkComponent";

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[70vh] px-6 text-center '>
            <div className='text-8xl font-bold text-default-500 dark:text-default-700 mb-4'>
                404
            </div>

            <h1 className='text-2xl font-semibold mb-2'>
                Page Not Found
            </h1>

            <p className='text-default-600 dark:text-default-400 mb-8 max-w-md'>
                The page you&#39;re looking for doesn&#39;t exist or has been moved.
            </p>

            <div className='flex gap-3'>
                <Button
                    as={LinkComponent}
                    href='/'
                    color='secondary'
                >
                    Go Home
                </Button>

                <Button
                    as={LinkComponent}
                    href='/questions'
                    variant='bordered'
                >
                    View Questions
                </Button>
            </div>
        </div>
    );
}