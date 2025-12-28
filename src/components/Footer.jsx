import React from 'react';
import { Heart } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                            <img src={logo} alt="FluentPath Logo" className="w-10 h-10 rounded-lg object-cover" />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">FluentPath</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            Your personal stuttering therapy companion
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-emerald-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center md:text-right">
                        <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>support@fluentpath.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by FluentPath Team
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        © {new Date().getFullYear()} FluentPath. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
