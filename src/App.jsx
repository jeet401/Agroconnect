import { useState } from 'react';
import { LandingPage } from '../components/LandingPage';
import { AuthModal } from '../components/AuthModal';

export default function App() {
  // Show/hide the authentication modal
  const [showAuth, setShowAuth] = useState(false);

  // Dummy login handler (does nothing for demo)
  const handleLogin = () => {
    setShowAuth(false);
    // For demo, you can show an alert or do nothing
  };

  // Show modal when any landing page button is clicked
  const handleShowAuth = () => setShowAuth(true);

  // Hide modal
  const handleCloseAuth = () => setShowAuth(false);

  return (
    <>
      <LandingPage onShowAuth={handleShowAuth} />
      {showAuth && (
        <AuthModal onLogin={handleLogin} onClose={handleCloseAuth} />
      )}
    </>
  );
}