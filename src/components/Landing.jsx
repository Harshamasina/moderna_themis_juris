import Footer from './Footer';
import ComplianceSection from './ComplianceSection';
import ContactSection from './ContactSection';
import CareersSection from './CareersSection';
import EpidemiologySection from './EpidemiologySection';
import FounderSection from './FounderSection';
import HeroSection from './HeroSection';
import ResearchSection from './ResearchSection';
import TrainingSection from './TrainingSection';

const Landing = () => {
  return (
    <main className="page">
      <HeroSection />
      <FounderSection />
      <ResearchSection />
      <ComplianceSection />
      <TrainingSection />
      <EpidemiologySection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Landing;
