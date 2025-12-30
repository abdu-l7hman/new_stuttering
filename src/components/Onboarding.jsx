import React from 'react';
import { Mic } from 'lucide-react';
import logo from '../assets/logo.jpg';
import featureAssessment from '../assets/feature_assessment.png';
import featureProgress from '../assets/feature_progress.png';
import featureStats from '../assets/feature_stats.png';

const Onboarding = ({ onStart }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 flex items-center justify-center p-8">
            {/* Centered Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-5xl w-full">
                {/* Logo and Microphone Icon */}
                <div className="flex flex-col items-center justify-center mb-8 gap-4">
                    <img src={logo} alt="FluentPath Logo" className="w-32 h-32 rounded-2xl object-cover shadow-xl" />
                </div>

                {/* Welcome Text */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Welcome to FluentPath</span>
                    </h1>
                    <p className="text-lg text-gray-900 leading-relaxed max-w-2xl mx-auto">
                        Your personal stuttering therapy companion. Practice daily exercises,
                        track your progress, and build confidence in your speech journey.
                    </p>
                </div>

                {/* Features with Images */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Assessment Feature */}
                    <div className="text-center">
                        <div className="bg-gray-50 rounded-2xl p-4 mb-4 shadow-md overflow-hidden">
                            <img
                                src={featureAssessment}
                                alt="Free Speech Assessment"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Assessment</h3>
                        <p className="text-sm text-gray-900">
                            Begin with a free speech assessment to understand your baseline and create a customized therapy plan
                        </p>
                    </div>

                    {/* Progress Feature */}
                    <div className="text-center">
                        <div className="bg-gray-50 rounded-2xl p-4 mb-4 shadow-md overflow-hidden">
                            <img
                                src={featureProgress}
                                alt="Track Your Progress"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Track Your Journey</h3>
                        <p className="text-sm text-gray-900">
                            Monitor your improvement with detailed progress charts, streaks, and achievement milestones
                        </p>
                    </div>

                    {/* Stats Feature */}
                    <div className="text-center">
                        <div className="bg-gray-50 rounded-2xl p-4 mb-4 shadow-md overflow-hidden">
                            <img
                                src={featureStats}
                                alt="Daily Exercises"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Daily Practice</h3>
                        <p className="text-sm text-gray-900">
                            Access engaging exercises designed by speech therapists to improve fluency and build confidence
                        </p>
                    </div>
                </div>

                {/* Single Get Started Button */}
                <div className="flex justify-center">
                    <button
                        onClick={onStart}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-16 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
