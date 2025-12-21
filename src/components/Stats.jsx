import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Trophy, Flame, Target, TrendingUp, Calendar } from 'lucide-react';

const Stats = () => {
    // Mock data for the week
    const weekData = [
        { day: 'Mon', severity: 6.5 },
        { day: 'Tue', severity: 5.8 },
        { day: 'Wed', severity: 5.2 },
        { day: 'Thu', severity: 4.9 },
        { day: 'Fri', severity: 4.3 },
        { day: 'Sat', severity: 4.0 },
        { day: 'Sun', severity: 3.8 }
    ];

    const achievements = [
        { id: 1, title: '7 Day Streak', icon: Flame, color: 'orange', unlocked: true },
        { id: 2, title: 'First Exercise', icon: Trophy, color: 'yellow', unlocked: true },
        { id: 3, title: '10 Sessions', icon: Target, color: 'emerald', unlocked: true },
        { id: 4, title: '100 XP', icon: Award, color: 'purple', unlocked: false },
        { id: 5, title: 'Perfect Week', icon: Calendar, color: 'blue', unlocked: false },
        { id: 6, title: 'Improvement', icon: TrendingUp, color: 'green', unlocked: true }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Progress</h1>
                    <p className="text-gray-600">Track your journey to fluent speech</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <p className="text-sm text-gray-600 mb-1 font-medium">Total Sessions</p>
                        <p className="text-4xl font-bold text-gray-800">24</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <p className="text-sm text-gray-600 mb-1 font-medium">Total XP</p>
                        <p className="text-4xl font-bold text-amber-600">1,240</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <p className="text-sm text-gray-600 mb-1 font-medium">Current Streak</p>
                        <p className="text-4xl font-bold text-orange-600">7 days</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <p className="text-sm text-gray-600 mb-1 font-medium">Improvement</p>
                        <p className="text-4xl font-bold text-emerald-600">42%</p>
                    </div>
                </div>

                {/* Side-by-Side Layout: Chart and Achievements */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Chart Section (Takes 2 columns on large screens) */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Stuttering Severity</h3>
                        <p className="text-sm text-gray-600 mb-6">Lower is better - Track your weekly progress</p>

                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={weekData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="day"
                                    stroke="#9ca3af"
                                    style={{ fontSize: '14px' }}
                                />
                                <YAxis
                                    stroke="#9ca3af"
                                    style={{ fontSize: '14px' }}
                                    domain={[0, 10]}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '12px',
                                        fontSize: '14px',
                                        padding: '12px'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="severity"
                                    stroke="#10b981"
                                    strokeWidth={4}
                                    dot={{ fill: '#10b981', r: 6 }}
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Right: Achievements Section (Takes 1 column on large screens) */}
                    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Achievements</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {achievements.map((achievement) => {
                                const IconComponent = achievement.icon;
                                const colorClasses = {
                                    orange: { bg: 'bg-orange-100', border: 'border-orange-200', text: 'text-orange-600' },
                                    yellow: { bg: 'bg-yellow-100', border: 'border-yellow-200', text: 'text-yellow-600' },
                                    emerald: { bg: 'bg-emerald-100', border: 'border-emerald-200', text: 'text-emerald-600' },
                                    purple: { bg: 'bg-purple-100', border: 'border-purple-200', text: 'text-purple-600' },
                                    blue: { bg: 'bg-blue-100', border: 'border-blue-200', text: 'text-blue-600' },
                                    green: { bg: 'bg-green-100', border: 'border-green-200', text: 'text-green-600' }
                                };

                                const colors = colorClasses[achievement.color];

                                return (
                                    <div
                                        key={achievement.id}
                                        className={`rounded-xl p-4 border-2 transition-all cursor-pointer hover:scale-105 ${achievement.unlocked
                                                ? `${colors.border} ${colors.bg}`
                                                : 'border-gray-200 bg-gray-50 opacity-50'
                                            }`}
                                    >
                                        <div className="flex flex-col items-center text-center gap-2">
                                            <div
                                                className={`p-3 rounded-full ${achievement.unlocked
                                                        ? colors.bg
                                                        : 'bg-gray-200'
                                                    }`}
                                            >
                                                <IconComponent
                                                    className={`w-6 h-6 ${achievement.unlocked
                                                            ? colors.text
                                                            : 'text-gray-400'
                                                        }`}
                                                />
                                            </div>
                                            <p
                                                className={`text-xs font-semibold ${achievement.unlocked ? 'text-gray-800' : 'text-gray-400'
                                                    }`}
                                            >
                                                {achievement.title}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
