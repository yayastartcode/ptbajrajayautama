import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import LayananKami from './components/LayananKami';
import QuotationForm from './components/QuotationForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { siteContent } from './data/content';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatsAppButton whatsappNumber={siteContent.company.whatsappNumber} />

      <AboutUs
        title={siteContent.about.title}
        description={siteContent.about.description}
        image={siteContent.about.image}
        stats={siteContent.about.stats}
      />

      <WhyChooseUs
        title={siteContent.whyChooseUs.title}
        reasons={siteContent.whyChooseUs.reasons}
      />

      <LayananKami
        title={siteContent.services.title}
        divisions={siteContent.services.divisions}
        whatsappNumber={siteContent.company.whatsappNumber}
      />

      <QuotationForm
        title={siteContent.quotation.title}
        subtitle={siteContent.quotation.subtitle}
        whatsappNumber={siteContent.company.whatsappNumber}
      />

      <CTA
        title={siteContent.cta.title}
        description={siteContent.cta.description}
        buttonText={siteContent.cta.buttonText}
        buttonLink={siteContent.cta.buttonLink}
      />

      <Footer footerData={siteContent.footer} />
    </div>
  );
}

export default App;
