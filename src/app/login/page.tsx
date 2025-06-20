'use client';
import { motion } from 'framer-motion';
import { Lock, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!username.trim() || !password.trim()) {
            setError('Please fill in all fields');
            return;
        }

        // Mock authentication (replace with real API call)
        if (username === 'demo' && password === 'demo123') {
            router.push('/');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6 text-zinc-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-zinc-400">Sign in to your Dignity account</p>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-red-900/50 border border-red-800 text-red-400 p-3 rounded-lg mb-4 text-sm"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-zinc-400 mb-1">
                            Username
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="w-5 h-5 text-zinc-500" />
                            </div>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 rounded-lg block w-full pl-10 p-2.5 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 outline-none"
                                placeholder="Enter your username"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-400 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="w-5 h-5 text-zinc-500" />
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 rounded-lg block w-full pl-10 p-2.5 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 outline-none"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 focus:ring-zinc-600"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-400">
                                Remember me
                            </label>
                        </div>
                        <Link href="/forgot-password" className="text-sm text-zinc-400 hover:text-zinc-300">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg px-5 py-2.5 transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-500">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="text-zinc-300 hover:text-white font-medium">
                        Create one
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}