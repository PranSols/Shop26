
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sun, Moon, MapPin, Percent, ShoppingBag, BookOpen, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Percent className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-slate-900 dark:text-white hidden sm:block">Deals<span className="text-orange-500">India</span></span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for stores or coupons..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/stores" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">Stores</Link>
            <Link to="/deals" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">Hot Deals</Link>
            <Link to="/blog" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">Saving Tips</Link>
            <Link to="/submit-coupon" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Submit Coupon</Link>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2">
          <div className="py-2">
            <input
              type="text"
              placeholder="Search stores..."
              className="w-full pl-4 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>
          <Link to="/stores" className="block py-2 text-slate-600 dark:text-slate-300">Browse Stores</Link>
          <Link to="/deals" className="block py-2 text-slate-600 dark:text-slate-300">Trending Deals</Link>
          <Link to="/blog" className="block py-2 text-slate-600 dark:text-slate-300">Saving Blog</Link>
          <Link to="/submit-coupon" className="block py-3 mt-4 text-center bg-blue-600 text-white rounded-lg font-medium">Submit Coupon</Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Percent className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">Deals<span className="text-orange-500">India</span></span>
            </div>
            <p className="text-sm leading-relaxed">
              India's favorite destination for verified coupon codes, promo codes, and daily shopping deals. Save more every day!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Popular Stores</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/store/amazon" className="hover:text-blue-400 transition-colors">Amazon Coupons</Link></li>
              <li><Link to="/store/flipkart" className="hover:text-blue-400 transition-colors">Flipkart Offers</Link></li>
              <li><Link to="/store/myntra" className="hover:text-blue-400 transition-colors">Myntra Promo Codes</Link></li>
              <li><Link to="/store/tatacliq" className="hover:text-blue-400 transition-colors">Tata Cliq Deals</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Weekly Savings</h4>
            <p className="text-sm mb-4">Subscribe to get the hottest deals in your inbox.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-slate-800 border-none rounded-l-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 text-sm text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© 2025 DealsIndia. All Rights Reserved. Made for Indian Shoppers.</p>
          <div className="flex space-x-6">
            <span className="flex items-center space-x-1"><MapPin size={14} /> <span>New Delhi, India</span></span>
            <p>Affiliate Disclosure: We may earn a commission from links on our site.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children, title = "Best Coupons & Deals in India", description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | DealsIndia`;
  }, [pathname, title]);

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
