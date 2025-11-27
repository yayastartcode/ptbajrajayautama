import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientSlider from '../components/ClientSlider';
import LayananKami from '../components/LayananKami';
import Gallery from '../components/Gallery';
import QuotationForm from '../components/QuotationForm';
import CTA from '../components/CTA';
import { siteContent } from '../data/content';

function Home() {
  return (
    <>
      <Hero />
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
      <ClientSlider />
      <LayananKami
        title={siteContent.services.title}
        divisions={siteContent.services.divisions}
        whatsappNumber={siteContent.company.whatsappNumber}
      />
      <Gallery />
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
    </>
  );
}

export default Home;
