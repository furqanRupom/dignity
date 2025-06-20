'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, BookOpen, MessageSquare, Github, X, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            name: 'Projects',
            path: '/projects',
            icon: <Code2 className="w-4 h-4" />
        },
        {
            name: 'Learn',
            path: '/learn',
            icon: <BookOpen className="w-4 h-4" />
        },
        {
            name: 'Community',
            path: '/community',
            icon: <MessageSquare className="w-4 h-4" />
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black border-b border-zinc-800 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                            <Code2 className="w-4 h-4 text-zinc-400" />
                        </div>
                        <span className="font-semibold text-white">Dignity</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${pathname === link.path ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        {/* Discord Link */}
                        {/* <a
                            href="https://discord.gg/your-invite-link"
                            target="_blank"
                            className="p-2 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors hidden md:block"
                            aria-label="Discord"
                        >
                            <DiscordLogo className="w-5 h-5" />
                        </a> */}

                        {/* GitHub Link */}
                        <Link
                            href="https://github.com/your-dignity-team"
                            target="_blank"
                            className="p-2 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors hidden md:block"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </Link>

                        {/* Sign Up Button - Desktop */}
                        <Link
                            href="/register"
                            className="hidden md:flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Sign Up
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: 1,
                                height: 'auto'
                            }}
                            exit={{
                                opacity: 0,
                                height: 0
                            }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden"
                        >
                            <motion.nav
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                exit={{ y: -20 }}
                                transition={{ duration: 0.2 }}
                                className="pb-4"
                            >
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${pathname === link.path ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}
                                    >
                                        <span className="w-5 h-5 flex items-center justify-center">
                                            {link.icon}
                                        </span>
                                        {link.name}
                                    </Link>
                                ))}

                                {/* <div className="flex items-center gap-2 px-4 py-3">
                                    <a
                                        href="https://discord.gg/your-invite-link"
                                        target="_blank"
                                        className="p-2 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <DiscordLogo className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://github.com/your-dignity-team"
                                        target="_blank"
                                        className="p-2 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <Link
                                        href="/register"
                                        className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Sign Up
                                    </Link>
                                </div> */}
                            </motion.nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}