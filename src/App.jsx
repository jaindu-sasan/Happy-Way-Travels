// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import 'leaflet/dist/leaflet.css';

// Pages
import HomePage from '../src/features/home/HomePage';
import ContactPage from '../src/features/contact/ContactPage';
import DestinationPage from './features/destination/PackagePage';
import PackageDetailPage from './features/destination/PackageDetailPage';
import CustomizeTripPage from './features/destination/CustomizeTripPage';
import About from './features/aboutus/aboutus';
import Blog from './features/blog/pages/Blog';
import BlogPost from './features/blog/pages/BlogPost';
import ScrollToTop from "./components/ScrollToTop";
import T20LandingPage from './features/T20WorldCup/T20LandingPage';
import WhatsAppButton from "./components/WhatsAppButton";


// Common Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const libraries = ['places'];

function App() {
  return (
    <Router>
      <ScrollToTop />
     
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/destinations" element={<DestinationPage />} />
              <Route path="/packages/:slug" element={<PackageDetailPage />} />
              <Route path="/customize-trip" element={<CustomizeTripPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/t20-world-cup" element={<T20LandingPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton /> {/* 👈 visible on ALL pages */}
        </div>
      
    </Router>
  );
}

export default App;
