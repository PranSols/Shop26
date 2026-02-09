
import React from 'react';
import { Link } from 'react-router-dom';
// Fixed missing icon imports for the home page sections
import { Zap, Shield, Gift, ArrowRight, Star, TrendingUp, Percent, BookOpen, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import CouponCard from '../components/CouponCard';
import { STORES, COUPONS, BLOGS } from '../data/mockData';

const Home: React.FC = () => {
  const featuredStores = STORES.filter(s => s.isFeatured);
  const trendingCoupons = COUPONS.slice(0, 4);

  return (
    <Layout title="Save More with Today's Best Coupons & Deals in India">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-4 py-2 rounded-full text-blue-400 text-sm font-medium mb-8">
            <Zap size={16} />
            <span>Updated 5 minutes ago • 1,200+ Verified Offers</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Stop Overpaying. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Save Big</span> at India's Top Stores.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            One-stop destination for the latest promo codes, bank offers, and limited-time deals from Amazon, Flipkart, Myntra, and 50+ stores.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/stores" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center space-x-2">
              <span>Browse All Stores</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/deals" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg border border-slate-700 transition-all">
              Trending Deals Today
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <Star className="text-yellow-400 mr-2 fill-current" />
              Featured Stores
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {featuredStores.map(store => (
                <Link 
                  key={store.id} 
                  to={`/store/${store.id}`}
                  className="group flex flex-col items-center p-4 border border-slate-100 dark:border-slate-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all bg-slate-50 dark:bg-slate-900/50"
                >
                  <div className="h-12 w-full flex items-center justify-center mb-3">
                    <img src={store.logo} alt={store.name} className="max-h-full max-w-full grayscale group-hover:grayscale-0 transition-all object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 group-hover:text-blue-600">{store.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">100% Verified</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Our team checks every code manually to ensure they actually work.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Daily Updates</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Fresh deals added every hour to keep you saving on every purchase.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                <Gift size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Completely Free</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">We never charge for our service. It's free now and will always be.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Coupons */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
                <TrendingUp className="text-blue-600 mr-2" />
                Latest Offers & Coupons
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">The most popular savings available right now across India.</p>
            </div>
            <Link to="/deals" className="hidden sm:flex items-center text-blue-600 font-bold hover:underline space-x-1">
              <span>See All Deals</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trendingCoupons.map(coupon => {
              const store = STORES.find(s => s.id === coupon.storeId)!;
              return <CouponCard key={coupon.id} coupon={coupon} store={store} />;
            })}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link to="/deals" className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-blue-600 font-bold space-x-2">
              <span>View All 500+ Offers</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bank Offers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative shadow-2xl">
             <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
               <Percent size={400} />
             </div>
             
             <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Exclusive Bank Offers</h2>
                <p className="text-blue-100 mb-8 text-lg">Save up to ₹5,000 extra on your shopping using HDFC, SBI, ICICI, and Axis Bank cards. No coupon needed.</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {['HDFC', 'SBI', 'ICICI', 'AXIS'].map(bank => (
                    <div key={bank} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl flex items-center space-x-2">
                       <Shield size={20} className="text-orange-400" />
                       <span className="font-bold">{bank} Bank</span>
                    </div>
                  ))}
                </div>
                <Link to="/bank-offers" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg">
                  Explore Bank Offers
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Blogs / Savings Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center">
            <BookOpen className="text-blue-600 mr-2" />
            Money Saving Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOGS.map(blog => (
              <Link key={blog.id} to={`/blog/${blog.slug}`} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all flex flex-col sm:flex-row">
                <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Big */}
      <section className="py-16 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
             <Mail size={32} />
           </div>
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Never Miss a Big Sale!</h2>
           <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
             Subscribe to our weekly newsletter and be the first to know about Diwali sales, Great Indian Festival alerts, and flash deals.
           </p>
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="flex-1 px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white"
               required
             />
             <button type="submit" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all whitespace-nowrap">
               Subscribe Now
             </button>
           </form>
           <p className="text-xs text-slate-400 mt-4 italic">No spam, only savings. Unsubscribe anytime.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
