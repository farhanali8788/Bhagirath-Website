import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocationAdvantage from './components/LocationAdvantage';
import ProjectOverview from './components/ProjectOverview';
import Infrastructure from './components/Infrastructure';
import PlotOptions from './components/PlotOptions';
import TrustCompliance from './components/TrustCompliance';
import SecurityAmenities from './components/SecurityAmenities';
import InvestmentAngle from './components/InvestmentAngle';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LocationAdvantage />
        <ProjectOverview />
        <Infrastructure />
        <PlotOptions />
        <TrustCompliance />
        <SecurityAmenities />
        <InvestmentAngle />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
