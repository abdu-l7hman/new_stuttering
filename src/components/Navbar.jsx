import React from 'react';
import { Mic, Home, BarChart3, Award, User, LogOut } from 'lucide-react';

const Navbar = ({ activeTab, onTabChange }) => {
    const navLinks = [
        { id: 'dashboard', label: 'Learn', icon: Home },
        { id: 'assessment', label: 'Assess', icon: BarChart3 },
        { id: 'stats', label: 'Stats', icon: Award }
    ];

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand/Logo - Left */}
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-500 rounded-lg p-2">
                            <Mic className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">Clarity</span>
                    </div>

                    {/* Navigation Links - Center */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const IconComponent = link.icon;
                            const isActive = activeTab === link.id;

                            return (
                                <button
                                    key={link.id}
                                    onClick={() => onTabChange(link.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${isActive
                                            ? 'text-emerald-600 bg-emerald-50 border-b-2 border-emerald-600'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    <IconComponent className="w-5 h-5" />
                                    <span>{link.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* User Profile - Right */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full p-2">
                                <User className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-sm">
                                <p className="font-semibold text-gray-800">John Doe</p>
                                <p className="text-xs text-gray-500">Premium Member</p>
                            </div>
                        </div>
                        <button className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <LogOut className="w-5 h-5" />
                            <span className="text-sm font-medium">Logout</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden pb-4">
                    <div className="flex justify-around">
                        {navLinks.map((link) => {
                            const IconComponent = link.icon;
                            const isActive = activeTab === link.id;

                            return (
                                <button
                                    key={link.id}
                                    onClick={() => onTabChange(link.id)}
                                    className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all ${isActive ? 'text-emerald-600' : 'text-gray-600'
                                        }`}
                                >
                                    <IconComponent className="w-5 h-5 mb-1" />
                                    <span className="text-xs font-medium">{link.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
