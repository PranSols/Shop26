
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Filter, Info, ChevronDown, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';
import CouponCard from '../components/CouponCard';
import { STORES, COUPONS } from '../data/mockData';

const StoreDetail: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [filter, setFilter] = useState<'all' | 'coupon' | 'deal'>('all');

  const store = STORES.find(s => s.id === storeId);
  const storeCoupons = COUPONS.filter(c => c.storeId === storeId)
    .filter(c => filter === 'all' || c.type === filter);

  if (!store) {
    return (
      <Layout title="Store Not Found">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Store Not Found</h1>
          <p className="mb-8">The store you are looking for does not exist.</p>
          <Link to="/" className="text-blue-600 font-bold hover:underline">Return to Home</Link>
        </div>
      </Layout>
    );
  }

  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Layout 
      title={`${store.name} Coupon Codes & Deals - ${currentDate}`}
      description={`Find the latest verified ${store.name} promo codes, discount coupons and limited-time offers for India.`}
    >
      {/* Breadcrumbs */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={12} />
            <Link to="/stores" className="hover:text-blue-600">Stores</Link>
            <ChevronRight size={12} />
            <span className="text-slate-900 dark:text-slate-200">{store.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-slate-50 dark:bg-slate-700 rounded-xl mx-auto mb-4 flex items-center justify-center p-3 shadow-inner">
                <img src={store.logo} alt={store.name} className="max-h-full max-w-full object-contain" />
              </div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{store.name} Coupons</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{store.description}</p>
              <a 
                href={store.affiliateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all"
              >
                Visit Store
              </a>
            </div>

            {/* Facts Card */}
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Info size={18} className="mr-2 text-blue-600" />
                Store Info
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between text-sm">
                  <span className="text-slate-500">Active Offers</span>
                  <span className="font-bold text-slate-900 dark:text-white">{storeCoupons.length}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-slate-500">Last Updated</span>
                  <span className="font-bold text-green-600">Today</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-slate-500">Category</span>
                  <span className="font-bold text-slate-900 dark:text-white">{store.category}</span>
                </li>
              </ul>
            </div>
            
            {/* Related Stores */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Related Stores</h3>
              <div className="flex flex-wrap gap-2">
                 {STORES.filter(s => s.id !== store.id).slice(0, 4).map(s => (
                   <Link key={s.id} to={`/store/${s.id}`} className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium hover:border-blue-500 transition-colors">
                     {s.name}
                   </Link>
                 ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
               <div>
                 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                   {store.name} Promo Codes & Offers
                 </h2>
                 <p className="text-slate-500 dark:text-slate-400">Verified deals for {currentDate}</p>
               </div>
               
               <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                 {(['all', 'coupon', 'deal'] as const).map(f => (
                   <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-1.5 rounded-md text-sm font-bold capitalize transition-all ${filter === f ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                   >
                     {f}s
                   </button>
                 ))}
               </div>
            </div>

            <div className="space-y-6">
              {storeCoupons.length > 0 ? (
                storeCoupons.map(coupon => (
                  <CouponCard key={coupon.id} coupon={coupon} store={store} />
                ))
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-12 text-center border-2 border-dashed border-slate-200 dark:border-slate-700">
                  <p className="text-slate-500">No active {filter}s found for this store. Check back later!</p>
                </div>
              )}
            </div>

            {/* SEO Content & FAQ */}
            <div className="mt-20 border-t border-slate-200 dark:border-slate-700 pt-16">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">How to use {store.name} Coupons?</h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 mb-12">
                <p>To save money using {store.name} promo codes, follow these simple steps:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-4">
                  <li>Visit our {store.name} store page on DealsIndia.</li>
                  <li>Click on the 'Reveal Code' or 'Get Deal' button of the offer you like.</li>
                  <li>The code will be automatically copied to your clipboard.</li>
                  <li>Go to the {store.name} website and add items to your cart.</li>
                  <li>During checkout, paste the code into the promo code box and click apply.</li>
                  <li>Your discount will be applied instantly!</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Are these coupons verified?", a: "Yes, our dedicated team manually verifies every coupon and deal on this page daily to ensure you always get working discounts." },
                  { q: `What is the best deal at ${store.name} today?`, a: `Currently, the best offer is ${storeCoupons[0]?.title || 'available on our latest list above.'}` },
                  { q: "Why is my promo code not working?", a: "Codes may not work if they have expired, are restricted to specific products, or if you haven't met the minimum purchase requirement." }
                ].map((item, idx) => (
                  <details key={idx} className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                    <summary className="p-5 flex justify-between items-center cursor-pointer list-none font-bold text-slate-800 dark:text-white">
                      <span>{item.q}</span>
                      <ChevronDown className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StoreDetail;
