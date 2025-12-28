import React from 'react';
import { CheckCircle, Flame, Award, Target, TrendingUp } from 'lucide-react';

const Dashboard = ({ onCardClick }) => {
    const dailyGoal = { current: 120, target: 200 };
    const streak = 7;

    const practiceCards = [
        {
            id: 1,
            title: 'Free Speech',
            description: 'Tell us about your day for 2 minutes',
            xp: 50,
            completed: false,
            icon: '💬'
        },
        {
            id: 2,
            title: 'Reading',
            description: 'Read the passage displayed',
            xp: 30,
            completed: false,
            icon: '📖'
        },
        {
            id: 3,
            title: 'Questions',
            description: 'Answer simple questions',
            xp: 40,
            completed: false,
            icon: '❓'
        },
        {
            id: 4,
            title: 'Turtle Pace',
            description: 'Slow down your speech',
            xp: 50,
            completed: true,
            icon: '🐢'
        },
        {
            id: 5,
            title: 'Soft Sounds',
            description: 'Practice gentle onset',
            xp: 30,
            completed: false,
            icon: '🎵'
        },
        {
            id: 6,
            title: 'Breathing Exercise',
            description: 'Control your breath',
            xp: 40,
            completed: false,
            icon: '🌬️'
        },
        {
            id: 7,
            title: 'Word Repetition',
            description: 'Practice challenging words',
            xp: 60,
            completed: false,
            icon: '📚'
        },
        {
            id: 8,
            title: 'Prolonged Sounds',
            description: 'Stretch vowel sounds',
            xp: 45,
            completed: false,
            icon: '🎤'
        },
        {
            id: 9,
            title: 'Phrase Practice',
            description: 'Build fluent phrases',
            xp: 55,
            completed: false,
            icon: '🗣️'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Summary Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Daily Goal Card */}
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
                        <div className="flex justify-center mb-3">
                            <Target className="w-10 h-10 opacity-90" />
                        </div>
                        <p className="text-sm font-semibold mb-2">Daily Goal</p>
                        <div className="flex items-baseline gap-2 justify-center mb-4">
                            <span className="text-4xl font-bold">{dailyGoal.current}</span>
                            <span className="text-lg font-medium">/ {dailyGoal.target} XP</span>
                        </div>
                        <div className="w-full bg-white/30 rounded-full h-2.5">
                            <div
                                className="bg-white h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${(dailyGoal.current / dailyGoal.target) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Streak Card */}
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
                        <div className="flex justify-center mb-3">
                            <Flame className="w-10 h-10" />
                        </div>
                        <p className="text-sm font-semibold mb-2">Current Streak</p>
                        <div className="flex items-baseline gap-2 justify-center mb-3">
                            <span className="text-4xl font-bold">{streak}</span>
                            <span className="text-lg font-medium">Days</span>
                        </div>
                        <p className="text-sm font-medium">Keep it up!</p>
                    </div>

                    {/* Progress Card */}
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
                        <div className="flex justify-center mb-3">
                            <TrendingUp className="w-10 h-10" />
                        </div>
                        <p className="text-sm font-semibold mb-2">Overall Progress</p>
                        <div className="flex items-baseline gap-2 justify-center mb-3">
                            <span className="text-4xl font-bold">42%</span>
                            <span className="text-lg font-medium">Better</span>
                        </div>
                        <p className="text-sm font-medium">Amazing improvement!</p>
                    </div>
                </div>

                {/* Practice Section */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Today's Practice</h2>
                        <span className="text-sm text-gray-500">
                            {practiceCards.filter(c => c.completed).length} of {practiceCards.length} completed
                        </span>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {practiceCards.map((card) => (
                            <div
                                key={card.id}
                                onClick={() => !card.completed && onCardClick(card)}
                                className={`bg-white rounded-2xl shadow-md p-6 transition-all transform relative overflow-hidden group ${card.completed
                                    ? 'opacity-75'
                                    : 'cursor-pointer hover:shadow-xl hover:scale-105'
                                    }`}
                            >
                                {/* Green wave hover effect */}
                                {!card.completed && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                )}
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-4xl">{card.icon}</span>
                                    {card.completed ? (
                                        <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                            <CheckCircle className="w-4 h-4" />
                                            <span className="text-xs font-semibold">Done</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                                            <Award className="w-4 h-4" />
                                            <span className="text-xs font-semibold">{card.xp} XP</span>
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 text-center">{card.description}</p>

                                {!card.completed && (
                                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                                        Start Exercise
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
