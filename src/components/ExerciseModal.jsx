import React, { useState } from 'react';
import { X, Volume2, Mic, CheckCircle } from 'lucide-react';

const ExerciseModal = ({ exercise, onClose }) => {
    const [step, setStep] = useState(1); // 1: Intro, 2: Recording, 3: Results
    const [isRecording, setIsRecording] = useState(false);
    const [results, setResults] = useState(null);

    const handleListenExample = () => {
        // Simulate audio playback
        alert('Playing example audio...');
    };

    const handleRecord = () => {
        if (!isRecording) {
            setIsRecording(true);
            // Simulate recording for 3 seconds
            setTimeout(() => {
                setIsRecording(false);
                // Generate mock results
                setResults({
                    fluencyScore: 85,
                    stuttersDetected: 3,
                    timeline: [
                        { position: 10, severity: 'low' },
                        { position: 45, severity: 'medium' },
                        { position: 78, severity: 'low' }
                    ]
                });
                setStep(3);
            }, 3000);
        }
    };

    const handleContinue = () => {
        if (step === 1) {
            setStep(2);
        } else if (step === 3) {
            onClose(true); // Pass true to indicate completion
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            {/* Centered Modal Card */}
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-3xl z-10">
                    <h3 className="text-2xl font-bold text-gray-800">{exercise.title}</h3>
                    <button
                        onClick={() => onClose(false)}
                        aria-label="Close modal"
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                    >
                        <X className="w-6 h-6 text-gray-900 group-hover:text-red-600 transition-colors" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Step 1: Intro */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                                <h4 className="font-bold text-gray-900 mb-3 text-lg">Instructions</h4>
                                <p className="text-gray-900 leading-relaxed">
                                    Practice speaking slowly and deliberately. Focus on controlling your breath and maintaining a steady pace.
                                    This exercise will help you develop better control over your speech patterns.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <button
                                    onClick={handleListenExample}
                                    className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg"
                                >
                                    <Volume2 className="w-5 h-5" />
                                    Listen to Example
                                </button>

                                <button
                                    onClick={handleContinue}
                                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg"
                                >
                                    Start Exercise
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Recording */}
                    {step === 2 && (
                        <div className="space-y-8">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <p className="text-xl text-gray-900 leading-relaxed text-center">
                                    "The quick brown fox jumps over the lazy dog. Practice speaking this sentence slowly and smoothly."
                                </p>
                            </div>

                            {isRecording && (
                                <div className="flex justify-center items-center gap-2 py-6">
                                    {[...Array(7)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-3 bg-emerald-600 rounded-full animate-pulse"
                                            style={{
                                                height: `${Math.random() * 60 + 20}px`,
                                                animationDelay: `${i * 0.1}s`,
                                                animationDuration: '0.5s'
                                            }}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-col items-center gap-4">
                                <button
                                    onClick={handleRecord}
                                    disabled={isRecording}
                                    aria-label="Toggle recording"
                                    className={`rounded-full p-10 shadow-2xl transition-all transform hover:scale-110 ${isRecording
                                        ? 'bg-red-500 animate-pulse cursor-not-allowed'
                                        : 'bg-emerald-600 hover:bg-emerald-700'
                                        }`}
                                >
                                    <Mic className="w-20 h-20 text-white" />
                                </button>
                                <p className="text-center text-gray-900 font-medium">
                                    {isRecording ? 'Recording... Speak now!' : 'Click to record'}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Results */}
                    {step === 3 && results && (
                        <div className="space-y-6">
                            <div className="text-center pb-4">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-4">
                                    <CheckCircle className="w-16 h-16 text-emerald-600" />
                                </div>
                                <h4 className="text-3xl font-bold text-gray-900 mb-2">Great Job!</h4>
                                <p className="text-gray-900">You completed the exercise successfully</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Fluency Score */}
                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200 text-center">
                                    <p className="text-sm text-gray-900 mb-2 font-medium">Fluency Score</p>
                                    <p className="text-6xl font-bold text-emerald-700">{results.fluencyScore}%</p>
                                </div>

                                {/* Stutters Detected */}
                                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 text-center">
                                    <p className="text-sm text-gray-900 mb-2 font-medium">Stutters Detected</p>
                                    <p className="text-6xl font-bold text-gray-900">{results.stuttersDetected}</p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <p className="text-sm text-gray-900 mb-4 font-medium">Speech Timeline</p>
                                <div className="relative h-10 bg-emerald-200 rounded-full overflow-hidden">
                                    {results.timeline.map((event, idx) => (
                                        <div
                                            key={idx}
                                            className={`absolute top-0 bottom-0 w-1.5 ${event.severity === 'low'
                                                ? 'bg-yellow-400'
                                                : event.severity === 'medium'
                                                    ? 'bg-orange-500'
                                                    : 'bg-red-500'
                                                }`}
                                            style={{ left: `${event.position}%` }}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between mt-3 text-xs text-gray-900">
                                    <span>Start</span>
                                    <span>End</span>
                                </div>
                            </div>

                            {/* XP Earned */}
                            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 text-center border-2 border-amber-300">
                                <p className="text-amber-800 font-bold text-lg">🎉 + {exercise.xp} XP Earned!</p>
                            </div>

                            <button
                                onClick={handleContinue}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg"
                            >
                                Continue
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExerciseModal;
