import { useState } from 'react';
import Onboarding from './components/Onboarding';
import Assessment from './components/Assessment';
import Dashboard from './components/Dashboard';
import ExerciseModal from './components/ExerciseModal';
import Stats from './components/Stats';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('onboarding');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleOnboardingStart = () => {
    setCurrentView('assessment');
  };

  const handleOnboardingSkip = () => {
    setCurrentView('dashboard');
  };

  const handleAssessmentComplete = () => {
    setCurrentView('dashboard');
  };

  const handleCardClick = (card) => {
    setSelectedExercise(card);
  };

  const handleExerciseClose = (completed) => {
    setSelectedExercise(null);
    // Could update XP here if completed
  };

  const handleTabChange = (tabId) => {
    setCurrentView(tabId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation - Only show on main views */}
      {['dashboard', 'assessment', 'stats'].includes(currentView) && (
        <Navbar activeTab={currentView} onTabChange={handleTabChange} />
      )}

      {/* Main Content - Full width, no mobile frame */}
      <div>
        {/* Current View */}
        {currentView === 'onboarding' && (
          <Onboarding onStart={handleOnboardingStart} onSkip={handleOnboardingSkip} />
        )}

        {currentView === 'assessment' && (
          <Assessment onComplete={handleAssessmentComplete} />
        )}

        {currentView === 'dashboard' && (
          <Dashboard onCardClick={handleCardClick} />
        )}

        {currentView === 'stats' && (
          <Stats />
        )}

        {/* Exercise Modal */}
        {selectedExercise && (
          <ExerciseModal exercise={selectedExercise} onClose={handleExerciseClose} />
        )}
      </div>
    </div>
  );
}

export default App;
