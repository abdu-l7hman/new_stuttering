import React, { useState } from 'react';
import { Mic, StopCircle } from 'lucide-react';

const Assessment = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isRecording, setIsRecording] = useState(false);

    const steps = [
        { title: 'Free Speech', instruction: 'Tell us about your day for 2 minutes' },
        { title: 'Reading', instruction: 'Read the passage displayed on screen' },
        { title: 'Questions', instruction: 'Answer a few simple questions' }
    ];

    const handleRecord = () => {
        setIsRecording(!isRecording);
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
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between mb-4">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-1">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all ${idx <= currentStep
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-gray-200 text-gray-500'
                                        }`}
                                >
                                    {idx + 1}
                                </div>
                                <span
                                    className={`text-sm font-medium ${idx === currentStep ? 'text-emerald-600' : 'text-gray-400'
                                        }`}
                                >
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-emerald-500 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-3xl shadow-xl p-12 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {steps[currentStep].title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        {steps[currentStep].instruction}
                    </p>

                    {/* Recording Visualizer */}
                    {isRecording && (
                        <div className="flex justify-center items-center gap-3 mb-12">
                            {[...Array(7)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-3 bg-emerald-500 rounded-full animate-pulse"
                                    style={{
                                        height: `${Math.random() * 60 + 30}px`,
                                        animationDelay: `${i * 0.1}s`,
                                        animationDuration: '0.6s'
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Record Button */}
                    <div className="flex justify-center mb-8">
                        <button
                            onClick={handleRecord}
                            className={`rounded-full p-12 shadow-2xl transition-all transform hover:scale-110 ${isRecording
                                    ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                    : 'bg-emerald-500 hover:bg-emerald-600'
                                }`}
                        >
                            {isRecording ? (
                                <StopCircle className="w-20 h-20 text-white" />
                            ) : (
                                <Mic className="w-20 h-20 text-white" />
                            )}
                        </button>
                    </div>

                    <p className="text-center text-gray-600 font-medium">
                        {isRecording ? 'Recording... Speak clearly!' : 'Click to start recording'}
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                    {currentStep > 0 && (
                        <button
                            onClick={() => setCurrentStep(currentStep - 1)}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 rounded-xl transition-all"
                        >
                            Previous
                        </button>
                    )}
                    <button
                        onClick={handleNext}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl shadow-lg transition-all hover:shadow-xl"
                    >
                        {currentStep < steps.length - 1 ? 'Next Step' : 'Complete Assessment'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Assessment;
