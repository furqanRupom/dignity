'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative bg-black pt-32 pb-20 border-b border-zinc-800">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-zinc-800 rounded-full"
                />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <span className="block text-zinc-400 text-lg md:text-xl mb-3">WE ARE</span>
                        DIGNITY
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8"
                    >
                        Six MERN stack developers building scalable solutions through daily collaboration.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-4"
                >
                    <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        View Projects
                    </button>
                    <button className="border border-zinc-700 hover:border-zinc-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Join Discord
                    </button>
                </motion.div>
            </div>
        </section>
    );
}