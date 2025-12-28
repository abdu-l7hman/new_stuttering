import { useState } from 'react';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Register from './components/Register';
import Learning from './components/Learning';
import Assessment from './components/Assessment';
import Dashboard from './components/Dashboard';
import ExerciseModal from './components/ExerciseModal';
import Statistics from './components/Statistics';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('onboarding');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleOnboardingStart = () => {
    setCurrentView('login');
  };

  const handleLogin = (formData) => {
    // In a real app, you would validate credentials with a backend
    console.log('Login attempt:', formData);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleRegister = (formData) => {
    // In a real app, you would send registration data to a backend
    console.log('Registration attempt:', formData);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleSwitchToRegister = () => {
    setCurrentView('register');
  };

  const handleSwitchToLogin = () => {
    setCurrentView('login');
  };

  const handleLearningComplete = () => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navigation - Only show on authenticated main views */}
      {isAuthenticated && ['dashboard', 'learning', 'assessment', 'statistics'].includes(currentView) && (
        <Navbar activeTab={currentView} onTabChange={handleTabChange} />
      )}

      {/* Main Content */}
      <div className="flex-1">
        {/* Onboarding View */}
        {currentView === 'onboarding' && (
          <Onboarding onStart={handleOnboardingStart} />
        )}

        {/* Login View */}
        {currentView === 'login' && (
          <Login
            onLogin={handleLogin}
            onSwitchToRegister={handleSwitchToRegister}
          />
        )}

        {/* Register View */}
        {currentView === 'register' && (
          <Register
            onRegister={handleRegister}
            onSwitchToLogin={handleSwitchToLogin}
          />
        )}

        {/* Learning View - Protected (3-step exercises) */}
        {currentView === 'learning' && isAuthenticated && (
          <Learning onComplete={handleLearningComplete} />
        )}

        {/* Assessment View - Protected (detailed analysis) */}
        {currentView === 'assessment' && isAuthenticated && (
          <Assessment onComplete={handleAssessmentComplete} />
        )}

        {/* Dashboard View - Protected */}
        {currentView === 'dashboard' && isAuthenticated && (
          <Dashboard onCardClick={handleCardClick} />
        )}

        {/* Statistics View - Protected */}
        {currentView === 'statistics' && isAuthenticated && (
          <Statistics />
        )}

        {/* Exercise Modal */}
        {selectedExercise && (
          <ExerciseModal exercise={selectedExercise} onClose={handleExerciseClose} />
        )}
      </div>

      {/* Footer - Show on all pages */}
      <Footer />
    </div>
  );
}

export default App;
