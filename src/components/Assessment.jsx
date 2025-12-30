import React, { useState } from 'react';
import { Mic, Upload, Play, Pause, Volume2 } from 'lucide-react';

const Assessment = ({ onComplete }) => {
    const [hasRecording, setHasRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Mock analysis results
    const mockResults = {
        duration: '0:38',
        stuttersDetected: 9,
        stutterRate: 69,
        segments: [
            { id: 0, start: 0.00, end: 0.03, hasStutter: true, label: 'Segment 0' },
            { id: 1, start: 0.03, end: 0.06, hasStutter: true, label: 'Segment 1' },
            { id: 2, start: 0.06, end: 0.09, hasStutter: true, label: 'Segment 2' },
            { id: 3, start: 0.09, end: 0.12, hasStutter: true, label: 'Segment 3' },
            { id: 4, start: 0.12, end: 0.15, hasStutter: true, label: 'Segment 4' },
            { id: 5, start: 0.15, end: 0.18, hasStutter: true, label: 'Segment 5' },
            { id: 6, start: 0.18, end: 0.21, hasStutter: false, label: 'Segment 6' },
            { id: 7, start: 0.21, end: 0.24, hasStutter: false, label: 'Segment 7' },
            { id: 8, start: 0.24, end: 0.27, hasStutter: false, label: 'Segment 8' },
            { id: 9, start: 0.27, end: 0.30, hasStutter: true, label: 'Segment 9' },
            { id: 10, start: 0.30, end: 0.33, hasStutter: true, label: 'Segment 10' },
            { id: 11, start: 0.33, end: 0.36, hasStutter: true, label: 'Segment 11' },
            { id: 12, start: 0.36, end: 0.38, hasStutter: true, label: 'Segment 12' }
        ],
        confidence: 96.7
    };

    const handleRecord = () => {
        // Simulate recording
        setTimeout(() => {
            setHasRecording(true);
        }, 100);
    };

    const handleUpload = () => {
        // Simulate file upload
        setHasRecording(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Speech Assessment</h1>
                    <p className="text-gray-900">Analyze your speech patterns and detect stuttering</p>
                </div>

                {/* Upload Section */}
                {!hasRecording ? (
                    <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleRecord}
                                className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
                            >
                                <Mic className="w-5 h-5" />
                                Record Audio
                            </button>
                            <button
                                onClick={handleUpload}
                                className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
                            >
                                <Upload className="w-5 h-5" />
                                Upload File
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
                                <h3 className="text-3xl font-bold text-purple-600 mb-1">{mockResults.duration}</h3>
                                <p className="text-xs text-gray-900 font-medium">Total Duration</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
                                <h3 className="text-3xl font-bold text-purple-600 mb-1">{mockResults.stuttersDetected}</h3>
                                <p className="text-xs text-gray-900 font-medium">Stutters Detected</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
                                <h3 className="text-3xl font-bold text-purple-600 mb-1">{mockResults.stutterRate}%</h3>
                                <p className="text-xs text-gray-900 font-medium">Stutter Rate</p>
                            </div>
                        </div>

                        {/* Audio Player */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="bg-emerald-600 hover:bg-emerald-700 rounded-full p-4 transition-colors shadow-md"
                                >
                                    {isPlaying ? (
                                        <Pause className="w-6 h-6 text-white" />
                                    ) : (
                                        <Play className="w-6 h-6 text-white" />
                                    )}
                                </button>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs text-gray-900 font-medium">0:00</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2 relative">
                                            <div className="bg-emerald-600 h-2 rounded-full w-1/3"></div>
                                            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-4 h-4 bg-emerald-700 rounded-full border-2 border-white shadow-lg"></div>
                                        </div>
                                        <span className="text-xs text-gray-900 font-medium">{mockResults.duration}</span>
                                    </div>
                                </div>
                                <Volume2 className="w-5 h-5 text-gray-900" />
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-xs text-gray-900 font-semibold">Timeline (3-second segments)</p>
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 bg-emerald-600 rounded"></div>
                                        <span className="text-gray-900 font-medium">No Stutter</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 bg-red-600 rounded"></div>
                                        <span className="text-gray-900 font-medium">Stutter Detected</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2">
                                {mockResults.segments.map((segment) => (
                                    <div
                                        key={segment.id}
                                        className={`${segment.hasStutter ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'
                                            } rounded-lg p-3 text-center transition-all hover:scale-105 cursor-pointer shadow-md`}
                                    >
                                        <p className="text-white font-bold text-xs mb-1">{segment.label}</p>
                                        <p className="text-white text-[10px] opacity-90">
                                            {segment.start.toFixed(2)}-{segment.end.toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setHasRecording(false)}
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-xl transition-all"
                            >
                                New Recording
                            </button>
                            <button
                                onClick={onComplete}
                                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
                            >
                                Save Results
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Assessment;
