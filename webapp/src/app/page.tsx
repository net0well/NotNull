import {Button} from "@heroui/button";
import {ChatBubbleLeftRightIcon, UserGroupIcon, BookOpenIcon, CodeBracketIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
    return (
        <div className='min-h-screen'>
            <div className='max-w-4xl mx-auto px-6 pt-12 pb-20 text-center'>
                <h1 className='text-6xl font-bold text-gray-900 dark:text-white mb-6'>
                    @NotNull
                </h1>
                <p className='text-2xl text-gray-600 dark:text-gray-300 mb-4'>
                    Every question deserves an answer.
                </p>
                <p className='text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto'>
                    A community where developers help each other solve problems, share knowledge, and learn together.
                </p>
                <div className='flex gap-4 justify-center'>
                    <Link href='/questions/ask'>
                        <Button
                            color='secondary'
                            size='lg'
                            className='font-semibold'
                        >
                            Ask a Question
                        </Button>
                    </Link>
                    <Link href='/questions'>
                        <Button
                            variant='bordered'
                            size='lg'
                            className='font-semibold border-gray-300 dark:border-gray-600'
                        >
                            Browse Questions
                        </Button>
                    </Link>
                </div>
            </div>
            
            <div className='py-16 border-y border-gray-200 dark:border-gray-800'>
                <div className='max-w-6xl mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-12'>
                        How it works
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='text-center'>
                            <div className='flex justify-center mb-4'>
                                <div className='p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full'>
                                    <ChatBubbleLeftRightIcon className='w-8 h-8 text-purple-600 dark:text-purple-400' />
                                </div>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                                Ask Questions
                            </h3>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Post your programming questions and get help from the community.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='flex justify-center mb-4'>
                                <div className='p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full'>
                                    <BookOpenIcon className='w-8 h-8 text-purple-600 dark:text-purple-400' />
                                </div>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                                Share Knowledge
                            </h3>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Answer questions and share your expertise with fellow developers.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='flex justify-center mb-4'>
                                <div className='p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full'>
                                    <UserGroupIcon className='w-8 h-8 text-purple-600 dark:text-purple-400' />
                                </div>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                                Build Community
                            </h3>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Connect with developers worldwide and grow your network.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='py-16'>
                <div className='max-w-4xl mx-auto px-6 text-center'>
                    <CodeBracketIcon className='w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-6' />
                    <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                        Ready to get started?
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
                        Join thousands of developers who are already part of our community.
                    </p>
                    <Link href='/questions/ask'>
                        <Button
                            color='secondary'
                            size='lg'
                            className='font-semibold'
                        >
                            Ask Your First Question
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}