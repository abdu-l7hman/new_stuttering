import React from 'react';
import { CheckCircle, Flame, Award, Target, TrendingUp } from 'lucide-react';

const Dashboard = ({ onCardClick }) => {
    const dailyGoal = { current: 120, target: 200 };
    const streak = 7;

    const practiceCards = [
        {
            id: 1,
            title: 'Turtle Pace',
            description: 'Slow down your speech',
            xp: 50,
            completed: true,
            icon: '🐢'
        },
        {
            id: 2,
            title: 'Soft Sounds',
            description: 'Practice gentle onset',
            xp: 30,
            completed: false,
            icon: '🎵'
        },
        {
            id: 3,
            title: 'Breathing Exercise',
            description: 'Control your breath',
            xp: 40,
            completed: false,
            icon: '🌬️'
        },
        {
            id: 4,
            title: 'Word Repetition',
            description: 'Practice challenging words',
            xp: 60,
            completed: false,
            icon: '📖'
        },
        {
            id: 5,
            title: 'Prolonged Sounds',
            description: 'Stretch vowel sounds',
            xp: 45,
            completed: false,
            icon: '🎤'
        },
        {
            id: 6,
            title: 'Phrase Practice',
            description: 'Build fluent phrases',
            xp: 55,
            completed: false,
            icon: '💬'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Summary Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Daily Goal Card */}
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-sm font-medium opacity-90">Daily Goal</p>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-3xl font-bold">{dailyGoal.current}</span>
                                    <span className="text-lg opacity-75">/ {dailyGoal.target} XP</span>
                                </div>
                            </div>
                            <Target className="w-12 h-12 opacity-80" />
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                            <div
                                className="bg-white h-3 rounded-full transition-all duration-500"
                                style={{ width: `${(dailyGoal.current / dailyGoal.target) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Streak Card */}
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium opacity-90">Current Streak</p>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-3xl font-bold">{streak}</span>
                                    <span className="text-lg opacity-75">Days</span>
                                </div>
                            </div>
                            <Flame className="w-12 h-12 opacity-80" />
                        </div>
                        <p className="text-sm opacity-90 mt-4">Keep it up! 🔥</p>
                    </div>

                    {/* Progress Card */}
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium opacity-90">Overall Progress</p>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-3xl font-bold">42%</span>
                                    <span className="text-lg opacity-75">Better</span>
                                </div>
                            </div>
                            <TrendingUp className="w-12 h-12 opacity-80" />
                        </div>
                        <p className="text-sm opacity-90 mt-4">Amazing improvement!</p>
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
                                className={`bg-white rounded-2xl shadow-md p-6 transition-all transform ${card.completed
                                        ? 'opacity-75'
                                        : 'cursor-pointer hover:shadow-xl hover:scale-105'
                                    }`}
                            >
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

                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{card.description}</p>

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
