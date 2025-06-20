import { Code2, Clock, GitFork, Star } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            name: "Recipe API (Cooking)",
            description: "Building a RESTful API for recipe management using Node.js and MongoDB",
            status: "In Development",
            tech: ["Node.js", "Express", "MongoDB"],
            stars: 12,
            forks: 4,
            link: "#"
        },
        {
            name: "Learning Dashboard",
            description: "Tracking our team's learning progress with React and GraphQL",
            status: "Planning",
            tech: ["React", "GraphQL", "Tailwind"],
            stars: 8,
            forks: 2,
            link: "#"
        }
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-8">
                    <Code2 className="w-8 h-8 text-zinc-400" />
                    <h1 className="text-3xl font-bold text-white">Our Projects</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-2">{project.name}</h2>
                                    <p className="text-zinc-400 mb-4">{project.description}</p>
                                </div>
                                <span className="inline-flex items-center gap-1 bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full">
                                    <Clock className="w-3 h-3" />
                                    {project.status}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                                <div className="flex gap-4 text-sm text-zinc-500">
                                    <span className="flex items-center gap-1">
                                        <Star className="w-4 h-4" />
                                        {project.stars}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork className="w-4 h-4" />
                                        {project.forks}
                                    </span>
                                </div>
                                <Link
                                    href={project.link}
                                    className="text-sm font-medium text-white hover:text-zinc-300 transition-colors"
                                >
                                    View Project →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-zinc-500 mb-4">More projects coming soon as we learn and grow</p>
                    <Link
                        href="https://github.com/your-dignity-team"
                        className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        <GitFork className="w-5 h-5" />
                        Contribute on GitHub
                    </Link>
                </div>
            </div>
        </div>
    );
}