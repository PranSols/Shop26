
import React, { useState } from 'react';
import { ShieldCheck, Clock, ExternalLink, Copy, Check, Info } from 'lucide-react';
import { Coupon, Store } from '../types';

interface CouponCardProps {
  coupon: Coupon;
  store: Store;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon, store }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCodeRevealed, setIsCodeRevealed] = useState(false);

  const handleAction = () => {
    if (coupon.type === 'coupon') {
      setIsCodeRevealed(true);
      if (coupon.code) {
        navigator.clipboard.writeText(coupon.code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      }
    }
    // Simulate affiliate redirection
    setTimeout(() => {
      window.open(store.affiliateUrl, '_blank');
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
      <div className="flex flex-col sm:flex-row p-5 gap-6">
        {/* Store Logo & Meta */}
        <div className="flex flex-row sm:flex-col items-center sm:w-32 flex-shrink-0">
          <div className="w-20 h-20 bg-slate-50 dark:bg-slate-700 rounded-lg p-2 flex items-center justify-center mb-3">
            <img src={store.logo} alt={store.name} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="ml-4 sm:ml-0 text-center">
            {coupon.isVerified && (
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded">
                <ShieldCheck size={10} className="mr-1" /> Verified
              </span>
            )}
            <p className="text-[10px] text-slate-400 mt-2 flex items-center justify-center">
              <Clock size={10} className="mr-1" /> {coupon.expiryDate}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">
              {coupon.title}
            </h3>
            {coupon.bankOffer && (
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-2 py-0.5 rounded uppercase">
                {coupon.bankOffer} Offer
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {coupon.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-6">
             <span className="flex items-center"><Check size={14} className="mr-1 text-green-500" /> Success: 98%</span>
             <span className="flex items-center"><Info size={14} className="mr-1 text-blue-500" /> {coupon.usageCount || 0} Uses Today</span>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            {coupon.type === 'coupon' ? (
              <button 
                onClick={handleAction}
                className="relative flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg overflow-hidden group/btn hover:bg-blue-700 transition-all transform active:scale-95"
              >
                <div className="flex items-center justify-center">
                  <span className={isCodeRevealed ? "hidden" : "block"}>REVEAL CODE</span>
                  <div className={!isCodeRevealed ? "hidden" : "flex items-center space-x-2"}>
                    <span className="font-mono text-lg tracking-widest">{coupon.code}</span>
                    {isCopied ? <Check size={18} /> : <Copy size={18} />}
                  </div>
                </div>
                {!isCodeRevealed && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-opacity bg-blue-700/80">
                    <span className="text-sm">Click to Copy Code</span>
                  </div>
                )}
              </button>
            ) : (
              <button 
                onClick={() => window.open(store.affiliateUrl, '_blank')}
                className="flex-1 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center space-x-2 transform active:scale-95"
              >
                <span>GET DEAL</span>
                <ExternalLink size={18} />
              </button>
            )}
            
            <button className="sm:w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Info size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {isCopied && (
        <div className="bg-green-500 text-white text-center py-1 text-xs font-medium animate-pulse">
          Code Copied & Redirecting to Store...
        </div>
      )}
    </div>
  );
};

export default CouponCard;
