'use client';
import { Code2, BookOpen, MessageSquare, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                                <Code2 className="w-4 h-4 text-zinc-400" />
                            </div>
                            <span className="font-semibold text-white">Dignity</span>
                        </div>
                        <p className="text-zinc-500 text-sm">
                            A learning collective exploring modern web development together.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Learn</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Tutorials</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Roadmaps</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Resources</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Projects</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Current Work</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Contribute</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Showcase</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Community</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Discord</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Code of Conduct</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Join Us</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Dignity Team. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Privacy</Link>
                        <Link href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Terms</Link>
                        <Link href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}