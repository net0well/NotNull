'use client'

import { HomeIcon, QuestionMarkCircleIcon, TagIcon, UserIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
    { key: 'home',      icon: HomeIcon,                 text: 'Home',         href: '/' },
    { key: 'questions', icon: QuestionMarkCircleIcon,   text: 'Questions',    href: '/questions' },
    { key: 'tags',      icon: TagIcon,                  text: 'Tags',         href: '/tags' },
    { key: 'session',   icon: UserIcon,                 text: 'User Session', href: '/session' },
];

export default function SideMenu() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-20 ml-4 flex flex-col gap-1 w-56">
            {navLinks.map(({ key, href, icon: Icon, text }) => {
                const isActive = pathname === href;
                return (
                    <Link
                        key={key}
                        href={href}
                        className={`
                            group relative flex items-center gap-3 px-3 py-3 rounded-xl
                            text-sm font-medium transition-all duration-150
                            ${isActive
                            ? 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/70 dark:hover:bg-white/5'
                        }
                        `}
                    >
                        {isActive && (
                            <span className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-purple-500 to-indigo-600" />
                        )}
                        
                        <span className={`
                            flex items-center justify-center w-8 h-8 rounded-lg transition-colors
                            ${isActive
                            ? 'bg-purple-100 dark:bg-purple-900/50'
                            : 'bg-gray-100 dark:bg-white/5 group-hover:bg-gray-200 dark:group-hover:bg-white/10'
                        }
                        `}>
                            <Icon className={`h-4 w-4 ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`} />
                        </span>

                        {text}
                    </Link>
                );
            })}
        </nav>
    );
}