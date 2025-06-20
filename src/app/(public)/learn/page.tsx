import { BookOpen, Bookmark, FileText, Search } from 'lucide-react';

export default function Learn() {
    const categories = [
        {
            name: "Getting Started",
            resources: 5,
            icon: <Bookmark className="w-5 h-5" />
        },
        {
            name: "MERN Stack",
            resources: 12,
            icon: <FileText className="w-5 h-5" />
        },
        {
            name: "GraphQL",
            resources: 8,
            icon: <FileText className="w-5 h-5" />
        },
        {
            name: "Django",
            resources: 3,
            icon: <FileText className="w-5 h-5" />
        }
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="w-8 h-8 text-zinc-400" />
                    <h1 className="text-3xl font-bold text-white">Learning Resources</h1>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 mb-8 flex items-center">
                    <Search className="w-5 h-5 text-zinc-500 mr-3" />
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="bg-transparent border-none outline-none text-white placeholder-zinc-500 w-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-zinc-800 p-2 rounded-md">
                                    {category.icon}
                                </div>
                                <h2 className="text-lg font-semibold text-white">{category.name}</h2>
                            </div>
                            <p className="text-zinc-400 text-sm mb-2">{category.resources} resources</p>
                            <button className="text-sm text-zinc-400 hover:text-white transition-colors">
                                Explore collection →
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 inline-block max-w-2xl">
                        <h2 className="text-xl font-semibold text-white mb-2">Our Learning Repository</h2>
                        <p className="text-zinc-400 mb-6">We're currently organizing our learning materials. Check back soon for tutorials, notes, and resources.</p>
                        <button className="border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Coming Soon
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}