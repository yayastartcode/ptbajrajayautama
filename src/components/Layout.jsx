import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { siteContent } from '../data/content';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton whatsappNumber={siteContent.company.whatsappNumber} />
      <main>
        <Outlet />
      </main>
      <Footer footerData={siteContent.footer} />
    </div>
  );
};

export default Layout;
