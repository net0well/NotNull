'use client';

import { Tag } from "@/lib/types";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/react";
import { HashtagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
    tag: Tag;
}

export default function TagCard({ tag }: Props) {
    return (
        <Card
            as={Link}
            href={`/questions?tag=${tag.slug}`}
            isPressable
            className="group border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg transition-all duration-200"
        >
            <CardHeader className="pb-3 pt-4 px-4 flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-md group-hover:scale-110 transition-transform">
                        <HashtagIcon className="size-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <Chip
                        variant="flat"
                        size="sm"
                        className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800"
                    >
                        {tag.slug}
                    </Chip>
                </div>
            </CardHeader>

            <CardBody className="py-3 px-4">
                <p className="line-clamp-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {tag.description}
                </p>
            </CardBody>

            <CardFooter className="pt-3 pb-4 px-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        42
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        questions
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
}