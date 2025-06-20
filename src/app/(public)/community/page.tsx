import { MessageSquare, Users, Calendar, Mail, GitFork, Code2 } from 'lucide-react';

export default function Community() {
    const events = [
        {
            title: "Weekly Learning Sync",
            date: "Every Monday, 7PM UTC",
            description: "Review what we've learned and plan the week ahead",
            icon: <Calendar className="w-5 h-5" />
        },
        {
            title: "Code Review Session",
            date: "Every Wednesday, 7PM UTC",
            description: "Collaborative code review and pair programming",
            icon: <Code2 className="w-5 h-5" />
        },
        {
            title: "Open Discussion",
            date: "Every Friday, 7PM UTC",
            description: "Q&A and open floor for any topics",
            icon: <MessageSquare className="w-5 h-5" />
        }
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-8">
                    <Users className="w-8 h-8 text-zinc-400" />
                    <h1 className="text-3xl font-bold text-white">Community</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <MessageSquare className="w-6 h-6 text-zinc-400" />
                            <h2 className="text-xl font-semibold text-white">Discord</h2>
                        </div>
                        <p className="text-zinc-400 mb-6">Join our daily discussions, ask questions, and collaborate with the team.</p>
                        <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
                            Join Server
                        </button>
                    </div>

                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Mail className="w-6 h-6 text-zinc-400" />
                            <h2 className="text-xl font-semibold text-white">Newsletter</h2>
                        </div>
                        <p className="text-zinc-400 mb-6">Get weekly updates on our learning progress and new resources.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 flex-1 outline-none"
                            />
                            <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <GitFork className="w-6 h-6 text-zinc-400" />
                            <h2 className="text-xl font-semibold text-white">Contribute</h2>
                        </div>
                        <p className="text-zinc-400 mb-6">We welcome contributors at all skill levels to join our projects.</p>
                        <button className="border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
                            View Guidelines
                        </button>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-white mb-6">Regular Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-zinc-800 p-2 rounded-md">
                                    {event.icon}
                                </div>
                                <h3 className="text-lg font-medium text-white">{event.title}</h3>
                            </div>
                            <p className="text-zinc-400 text-sm mb-2">{event.date}</p>
                            <p className="text-zinc-500 mb-4">{event.description}</p>
                            <button className="text-sm text-zinc-400 hover:text-white transition-colors">
                                Add to calendar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}