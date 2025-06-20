'use client';
import { motion } from 'framer-motion';
import { BookOpen, Code2, MessageSquare, GitPullRequestArrow, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-black border-b border-zinc-800 overflow-hidden">
      {/* Subtle learning path pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/path-pattern.svg')] bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Honest headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-1.5 mb-6">
              <GraduationCap className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-medium text-zinc-400">ACTIVELY LEARNING</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-500">
                The Dignity Team
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              A collective learning modern web development through
              <span className="text-zinc-300"> open-source projects</span>,
              <span className="text-zinc-300"> documentation deep dives</span>, and
              <span className="text-zinc-300"> daily Discord discussions</span>.
            </p>
          </motion.div>

          {/* Learning metrics - zinc color scheme */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-lg px-5 py-3 w-full sm:w-auto">
              <div className="p-2 bg-zinc-800 rounded-md">
                <Users className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <div className="text-white font-medium">Team</div>
                <div className="text-zinc-500 text-sm">Collaborative Learning</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-lg px-5 py-3 w-full sm:w-auto">
              <div className="p-2 bg-zinc-800 rounded-md">
                <BookOpen className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <div className="text-white font-medium">Weekly</div>
                <div className="text-zinc-500 text-sm">Tech Docs Review</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-lg px-5 py-3 w-full sm:w-auto">
              <div className="p-2 bg-zinc-800 rounded-md">
                <Code2 className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <div className="text-white font-medium">2+</div>
                <div className="text-zinc-500 text-sm">Open Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Current learning stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden max-w-4xl mx-auto shadow-xl"
          >
            <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-950">
              <div className="text-xs text-zinc-300 font-mono flex items-center gap-2">
                <GitPullRequestArrow className="w-4 h-4 text-zinc-500" />
                LEARNING_TRACK.md
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-zinc-300 mb-3">
                <span className="text-zinc-500">##</span> Current Stack
              </div>
              <div className="text-zinc-400 ml-4 mb-4">
                - MERN (MongoDB, Express, React, Node.js)<br />
                - GraphQL Fundamentals<br />
                - Python/Django Basics
              </div>

              <div className="text-zinc-300 mb-3">
                <span className="text-zinc-500">##</span> Learning Approach
              </div>
              <div className="text-zinc-400 ml-4">
                - Pair programming sessions<br />
                - Weekly knowledge sharing<br />
                - Open-source contributions<br />
                - Error-driven growth
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col items-center mt-20 gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-zinc-700">
                <Link href="/https://discord.gg/cWr3u8qd">Join Our Discord</Link>
                <MessageSquare className="w-4 h-4 text-zinc-400" />
              </button>
              <button className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View Learning Logs
                <BookOpen className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
            <p className="text-zinc-500 text-sm text-center">
              We welcome fellow learners to grow with us
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}