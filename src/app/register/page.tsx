'use client';
import { motion } from 'framer-motion';
import { Lock, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        // Mock registration (replace with real API call)
        console.log('Registered:', { username, password });
        router.push('/login');
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
                        <User className="w-6 h-6 text-zinc-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-zinc-400">Join the Dignity learning community</p>
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
                                placeholder="Choose a username"
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
                                placeholder="Create a password (min 6 chars)"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-400 mb-1">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="w-5 h-5 text-zinc-500" />
                            </div>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 rounded-lg block w-full pl-10 p-2.5 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 outline-none"
                                placeholder="Confirm your password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg px-5 py-2.5 transition-colors"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-500">
                    Already have an account?{' '}
                    <Link href="/login" className="text-zinc-300 hover:text-white font-medium">
                        Sign in
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}