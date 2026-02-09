
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StoreDetail from './pages/StoreDetail';

// Placeholder for missing pages to maintain structure
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[50vh] flex items-center justify-center bg-slate-50 dark:bg-slate-900">
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h1>
      <p className="text-slate-500">This page is coming soon. Stay tuned for more deals!</p>
      <a href="/" className="mt-6 inline-block text-blue-600 font-bold hover:underline">Back to Home</a>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:storeId" element={<StoreDetail />} />
        <Route path="/stores" element={<Placeholder title="All Stores Listing" />} />
        <Route path="/deals" element={<Placeholder title="Hot Trending Deals" />} />
        <Route path="/blog" element={<Placeholder title="Saving Tips Blog" />} />
        <Route path="/submit-coupon" element={<Placeholder title="Submit a Coupon" />} />
        <Route path="/about" element={<Placeholder title="About Us" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
        <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
        <Route path="*" element={<Placeholder title="404 - Not Found" />} />
      </Routes>
    </Router>
  );
};

export default App;
