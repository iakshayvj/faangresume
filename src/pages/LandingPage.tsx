import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import CTASection from '@/components/landing/CTASection';
import DesktopNotice from '@/components/ui/desktop-notice';

export default function LandingPage() {
  const navigate = useNavigate();
  const [showDesktopNotice, setShowDesktopNotice] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleStartBuilding = () => {
    if (isMobile) {
      setShowDesktopNotice(true);
    } else {
      navigate('/app');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onStartBuilding={handleStartBuilding} />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection onStartBuilding={handleStartBuilding} />
      
      <DesktopNotice 
        open={showDesktopNotice} 
        onClose={() => setShowDesktopNotice(false)} 
      />
    </div>
  );
}