import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import QuickActionCards from './components/QuickActionCards';
import CreateMeetingModal from './components/CreateMeetingModal';
import JoinMeetingModal from './components/JoinMeetingModal';
import UpcomingMeetingsModal from './components/UpcomingMeetingsModal';
import VideoCallMockModal from './components/VideoCallMockModal';
import ServiceIntroSection from './components/ServiceIntroSection';
import ProcessFlowSection from './components/ProcessFlowSection';
import AccessibilitySection from './components/AccessibilitySection';
import Footer from './components/Footer';
import { CURRENT_USER } from './mock/meetingsData';

export default function App() {
  // Authentication state (Req 1, 3: First screen is Login/Signup, no backend required)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(CURRENT_USER);

  // Accessibility state
  const [contrastMode, setContrastMode] = useState(false);
  const [textSize, setTextSize] = useState('normal'); // 'normal' | 'large' | 'xlarge'

  // Modals state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showUpcomingModal, setShowUpcomingModal] = useState(false);
  const [activeCallMeeting, setActiveCallMeeting] = useState(null); // When set, opens live video call simulation!

  // Apply high contrast class to body
  useEffect(() => {
    if (contrastMode) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [contrastMode]);

  // Apply font size scaling to body
  useEffect(() => {
    document.body.classList.remove('font-large', 'font-xlarge');
    if (textSize === 'large') {
      document.body.classList.add('font-large');
    } else if (textSize === 'xlarge') {
      document.body.classList.add('font-xlarge');
    }
  }, [textSize]);

  // Toggle contrast
  const toggleContrast = () => {
    setContrastMode(prev => !prev);
  };

  // Cycle text size
  const cycleTextSize = () => {
    if (textSize === 'normal') setTextSize('large');
    else if (textSize === 'large') setTextSize('xlarge');
    else setTextSize('normal');
  };

  // Handle Login success
  const handleLoginSuccess = (userData) => {
    setUser({
      name: userData.name || '김지유님',
      email: userData.email || 'jiyu.kim@iseeyourvoice.kr',
      role: userData.role || 'deaf'
    });
    setIsAuthenticated(true);
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Start Meeting Handler
  const handleStartMeeting = (meetingInfo) => {
    setShowCreateModal(false);
    setShowJoinModal(false);
    setShowUpcomingModal(false);
    setActiveCallMeeting(meetingInfo);
  };

  return (
    <div className="app-root">
      
      {/* 1. Auth Screen Overlay (If not authenticated) */}
      {!isAuthenticated ? (
        <AuthModal onLoginSuccess={handleLoginSuccess} />
      ) : (
        /* 2. Main Dashboard & Landing Layout (If authenticated) */
        <div className="app-dashboard">
          
          {/* Top Fixed Navigation (Req 7, 8, 9, 10) */}
          <Navbar 
            user={user}
            onLogout={handleLogout}
            contrastMode={contrastMode}
            toggleContrast={toggleContrast}
            textSize={textSize}
            cycleTextSize={cycleTextSize}
            onOpenProfileModal={() => setShowUpcomingModal(true)}
          />

          {/* Main Content Area */}
          <main id="main-content" role="main">
            
            {/* 3 Main Action Cards Section (Req 5: 개설, 참여, 다가올 회의) */}
            <QuickActionCards 
              onOpenCreateModal={() => setShowCreateModal(true)}
              onOpenJoinModal={() => setShowJoinModal(true)}
              onOpenUpcomingModal={() => setShowUpcomingModal(true)}
              onStartDirectCall={handleStartMeeting}
            />

            {/* Scrollable Landing Sections (Req 6) */}
            <ServiceIntroSection />
            <ProcessFlowSection />
            <AccessibilitySection />

          </main>

          {/* Footer */}
          <Footer />

          {/* Interactive Modals */}
          {showCreateModal && (
            <CreateMeetingModal 
              onClose={() => setShowCreateModal(false)}
              onStartMeeting={handleStartMeeting}
            />
          )}

          {showJoinModal && (
            <JoinMeetingModal 
              onClose={() => setShowJoinModal(false)}
              onJoinMeeting={handleStartMeeting}
            />
          )}

          {showUpcomingModal && (
            <UpcomingMeetingsModal 
              onClose={() => setShowUpcomingModal(false)}
              onJoinMeeting={handleStartMeeting}
            />
          )}

          {/* Live Video Call Simulation Window */}
          {activeCallMeeting && (
            <VideoCallMockModal 
              meetingInfo={activeCallMeeting}
              onClose={() => setActiveCallMeeting(null)}
            />
          )}

        </div>
      )}

    </div>
  );
}
