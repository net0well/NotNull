import Link from "next/link";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "@/components/nav/ThemeToggle";
import SearchInput from "@/components/nav/SearchInput";
import LoginButton from "./LoginButton";
import SignUpButton from "@/components/nav/SignUpButton";
import { getCurrentUser } from "@/lib/actions/auth-actions";

const navLinks = [
    { href: '/questions', label: 'Questions' },
    { href: '/tags',      label: 'Tags' },
    { href: '/users',     label: 'Users' },
];

export default async function TopNav() {
    const user = await getCurrentUser();

    return (
        <header className="
            w-full fixed top-0 z-50
            border-b border-gray-200/70 dark:border-white/10
            bg-white/80 dark:bg-gray-950/80
            backdrop-blur-md
        ">
            <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-[1920px]">

                {/* ── Left: logo + nav + search ── */}
                <div className="flex items-center gap-6">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                        <div className="
                            p-2 rounded-xl
                            bg-gradient-to-br from-purple-500 to-indigo-600
                            shadow-sm group-hover:shadow-md group-hover:scale-105
                            transition-all duration-150
                        ">
                            <CommandLineIcon className="size-5 text-white" />
                        </div>
                        <span className="
                            text-lg font-bold tracking-tight
                            bg-gradient-to-r from-purple-600 to-indigo-600
                            bg-clip-text text-transparent
                        ">
                            @NotNull
                        </span>
                    </Link>

                    {/* Divider */}
                    <div className="hidden md:block h-5 w-px bg-gray-200 dark:bg-white/10" />

                    {/* Nav links */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="
                                    px-3.5 py-2 rounded-lg
                                    text-sm font-medium
                                    text-gray-600 dark:text-gray-400
                                    hover:text-purple-600 dark:hover:text-purple-400
                                    hover:bg-purple-50 dark:hover:bg-purple-950/40
                                    transition-all duration-150
                                "
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Search */}
                    <div className="hidden md:block">
                        <SearchInput />
                    </div>
                </div>

                {/* ── Right: theme toggle + auth ── */}
                <div className="flex items-center gap-2">

                    <ThemeToggle />

                    {user ? (
                        /* User avatar/name pill */
                        <div className="
                            flex items-center gap-2.5 px-3 py-1.5 rounded-xl
                            bg-gray-100 dark:bg-white/5
                            border border-gray-200/80 dark:border-white/10
                        ">
                            <div className="
                                flex items-center justify-center
                                w-6 h-6 rounded-full text-xs font-semibold
                                bg-gradient-to-br from-purple-500 to-indigo-600
                                text-white flex-shrink-0
                            ">
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 max-w-[120px] truncate">
                                {user.name}
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <LoginButton />
                            <SignUpButton />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}