import React, { useState } from 'react';
import { Mic, StopCircle, CheckCircle } from 'lucide-react';

const Learning = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [stepResults, setStepResults] = useState([null, null, null]);

    const steps = [
        {
            title: 'Free Speech',
            instruction: 'Tell us about your day for 2 minutes',
            example: 'Example: "Today I woke up early and had breakfast with my family. We talked about our plans for the weekend..."',
            mockResult: { fluency: 85, confidence: 78 }
        },
        {
            title: 'Reading',
            instruction: 'Read the passage displayed below',
            example: '"The quick brown fox jumps over the lazy dog. Peter Piper picked a peck of pickled peppers."',
            mockResult: { fluency: 92, confidence: 88 }
        },
        {
            title: 'Questions',
            instruction: 'Answer: What is your favorite hobby?',
            example: 'Example: "My favorite hobby is playing basketball because it helps me stay active and make friends."',
            mockResult: { fluency: 88, confidence: 82 }
        }
    ];

    const handleRecord = () => {
        setIsRecording(!isRecording);
        // Simulate recording completion after 2 seconds
        if (!isRecording) {
            setTimeout(() => {
                setIsRecording(false);
                const newResults = [...stepResults];
                newResults[currentStep] = steps[currentStep].mockResult;
                setStepResults(newResults);
            }, 2000);
        }
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setIsRecording(false);
        } else {
            onComplete();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-5xl w-full">
                {/* Compact Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between mb-2">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-1">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mb-1 transition-all relative ${idx <= currentStep
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-200 text-gray-900'
                                        }`}
                                >
                                    {stepResults[idx] ? (
                                        <CheckCircle className="w-5 h-5" />
                                    ) : (
                                        idx + 1
                                    )}
                                </div>
                                <span
                                    className={`text-xs font-medium ${idx === currentStep ? 'text-emerald-700' : 'text-gray-900'
                                        }`}
                                >
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                            className="bg-emerald-600 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Main Content - Two Column Layout */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Column - Instructions & Recording */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    {steps[currentStep].title}
                                </h2>
                                <p className="text-sm text-gray-900 mb-4">
                                    {steps[currentStep].instruction}
                                </p>

                                {/* Example */}
                                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 mb-4">
                                    <p className="text-xs font-semibold text-emerald-800 mb-1">Example:</p>
                                    <p className="text-xs text-gray-900 italic">
                                        {steps[currentStep].example}
                                    </p>
                                </div>
                            </div>

                            {/* Recording Button - Smaller */}
                            <div className="text-center">
                                {/* Recording Visualizer */}
                                {isRecording && (
                                    <div className="flex justify-center items-center gap-2 mb-3">
                                        {[...Array(7)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-2 bg-emerald-500 rounded-full animate-pulse"
                                                style={{
                                                    height: `${Math.random() * 30 + 15}px`,
                                                    animationDelay: `${i * 0.1}s`,
                                                    animationDuration: '0.6s'
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}

                                <button
                                    onClick={handleRecord}
                                    className={`rounded-full p-6 shadow-xl transition-all transform hover:scale-105 ${isRecording
                                        ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                        : 'bg-emerald-600 hover:bg-emerald-700'
                                        }`}
                                >
                                    {isRecording ? (
                                        <StopCircle className="w-12 h-12 text-white" />
                                    ) : (
                                        <Mic className="w-12 h-12 text-white" />
                                    )}
                                </button>
                                <p className="text-xs text-gray-900 font-medium mt-2">
                                    {isRecording ? 'Recording... Speak clearly!' : 'Click to start recording'}
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Results */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Assessment Results</h3>

                            {stepResults[currentStep] ? (
                                <div className="space-y-4">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-semibold text-gray-900">Fluency Score</span>
                                            <span className="text-2xl font-bold text-emerald-700">
                                                {stepResults[currentStep].fluency}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-emerald-600 h-2 rounded-full transition-all"
                                                style={{ width: `${stepResults[currentStep].fluency}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-semibold text-gray-900">Confidence Level</span>
                                            <span className="text-2xl font-bold text-blue-600">
                                                {stepResults[currentStep].confidence}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-500 h-2 rounded-full transition-all"
                                                style={{ width: `${stepResults[currentStep].confidence}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                                        <div className="flex items-center gap-2 mb-1">
                                            <CheckCircle className="w-4 h-4 text-emerald-700" />
                                            <span className="text-xs font-semibold text-emerald-800">Great job!</span>
                                        </div>
                                        <p className="text-xs text-gray-900">
                                            You're showing good progress. Keep practicing to improve your fluency.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="bg-gray-200 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <Mic className="w-8 h-8 text-gray-900" />
                                    </div>
                                    <p className="text-sm text-gray-900">
                                        Complete the recording to see your results
                                    </p>
                                </div>
                            )}

                            {/* Overall Progress */}
                            {stepResults.some(r => r !== null) && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-xs font-semibold text-gray-900 mb-2">
                                        Steps Completed: {stepResults.filter(r => r !== null).length} / {steps.length}
                                    </p>
                                    <div className="flex gap-1">
                                        {stepResults.map((result, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex-1 h-1.5 rounded-full ${result ? 'bg-emerald-600' : 'bg-gray-200'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 mt-6">
                        {currentStep > 0 && (
                            <button
                                onClick={() => setCurrentStep(currentStep - 1)}
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-xl transition-all text-sm"
                            >
                                Previous
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all hover:shadow-xl text-sm"
                        >
                            {currentStep < steps.length - 1 ? 'Next Step' : 'Complete Assessment'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learning;
