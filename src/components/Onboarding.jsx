import React from 'react';
import { Mic, Sparkles } from 'lucide-react';

const Onboarding = ({ onStart, onSkip }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 flex items-center justify-center p-8">
            {/* Centered Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full">
                {/* Animated Microphone Icon */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="bg-emerald-500 rounded-full p-10 shadow-2xl animate-bounce">
                            <Mic className="w-24 h-24 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 animate-pulse">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Welcome to Clarity
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Your personal stuttering therapy companion. Practice daily exercises,
                        track your progress, and build confidence in your speech journey.
                    </p>
                </div>

                {/* Features List */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="text-center p-4">
                        <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">📊</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-700">Track Progress</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-700">Daily Goals</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🏆</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-700">Achievements</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={onStart}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                    >
                        Get Started
                    </button>
                    <button
                        onClick={onSkip}
                        className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-xl shadow-md border-2 border-gray-200 transition-all hover:border-emerald-300"
                    >
                        Skip to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
