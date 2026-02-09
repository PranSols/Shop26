
import { Store, Coupon, StoreCategory, Blog } from '../types';

export const STORES: Store[] = [
  {
    id: 'amazon',
    name: 'Amazon India',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    description: 'Get the best deals on electronics, fashion, and home appliances from Amazon India.',
    category: StoreCategory.ELECTRONICS,
    affiliateUrl: 'https://amazon.in',
    isFeatured: true,
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    logo: 'https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png',
    description: 'India\'s leading e-commerce marketplace for mobiles, laptops, and fashion.',
    category: StoreCategory.ELECTRONICS,
    affiliateUrl: 'https://flipkart.com',
    isFeatured: true,
  },
  {
    id: 'myntra',
    name: 'Myntra',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png',
    description: 'Shop for the latest fashion trends and accessories at Myntra.',
    category: StoreCategory.FASHION,
    affiliateUrl: 'https://myntra.com',
    isFeatured: true,
  },
  {
    id: 'tatacliq',
    name: 'Tata Cliq',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tata_CLiQ_Logo.svg/1200px-Tata_CLiQ_Logo.svg.png',
    description: 'Authentic brands and premium shopping experience from the house of Tata.',
    category: StoreCategory.FASHION,
    affiliateUrl: 'https://tatacliq.com',
    isFeatured: true,
  },
  {
    id: 'ajio',
    name: 'AJIO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/AJIO_Logo.png',
    description: 'Own the latest style trends with AJIO\'s curated fashion collection.',
    category: StoreCategory.FASHION,
    affiliateUrl: 'https://ajio.com',
    isFeatured: false,
  },
  {
    id: 'nykaa',
    name: 'Nykaa',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Nykaa_Logo.svg/1200px-Nykaa_Logo.svg.png',
    description: 'Discover beauty and wellness products at India\'s premier beauty store.',
    category: StoreCategory.BEAUTY,
    affiliateUrl: 'https://nykaa.com',
    isFeatured: false,
  }
];

export const COUPONS: Coupon[] = [
  {
    id: '1',
    storeId: 'amazon',
    title: 'Flat ₹200 Cashback on Min. Order of ₹1000',
    description: 'Valid on all grocery and pantry orders. Use code to avail cashback.',
    code: 'AMZNTRICKS200',
    expiryDate: '2025-12-31',
    isVerified: true,
    type: 'coupon',
    usageCount: 1240
  },
  {
    id: '2',
    storeId: 'flipkart',
    title: '10% Instant Discount with HDFC Bank Cards',
    description: 'Maximum discount up to ₹1500 on electronics and mobiles.',
    expiryDate: '2025-06-15',
    isVerified: true,
    type: 'deal',
    bankOffer: 'HDFC',
    usageCount: 890
  },
  {
    id: '3',
    storeId: 'myntra',
    title: 'Flat 50% OFF + Extra 10% for New Users',
    description: 'Exclusive deal on lifestyle and fashion categories.',
    code: 'MYNTRA50NEW',
    expiryDate: '2025-05-20',
    isVerified: true,
    type: 'coupon',
    usageCount: 4500
  },
  {
    id: '4',
    storeId: 'tatacliq',
    title: 'End of Season Sale: Up to 80% OFF',
    description: 'Best deals on premium clothing and electronics.',
    expiryDate: '2025-04-10',
    isVerified: true,
    type: 'deal',
    usageCount: 230
  },
  {
    id: '5',
    storeId: 'amazon',
    title: 'Flat 10% OFF on Prime Membership',
    description: 'Enjoy free delivery and exclusive deals with Prime.',
    code: 'PRIME10OFF',
    expiryDate: '2025-12-01',
    isVerified: true,
    type: 'coupon',
    usageCount: 670
  }
];

export const BLOGS: Blog[] = [
  {
    id: '1',
    title: 'How to Save Extra 10% on Amazon using Bank Offers',
    excerpt: 'A comprehensive guide on combining coupons and bank discounts for maximum savings.',
    author: 'Savings Expert',
    date: 'Oct 24, 2024',
    image: 'https://picsum.photos/seed/savings/800/400',
    slug: 'amazon-bank-offers-guide'
  },
  {
    id: '2',
    title: 'Top 5 Fashion Sales to Look Forward in 2025',
    excerpt: 'Mark your calendars for the biggest fashion blowouts of the year.',
    author: 'Style Guru',
    date: 'Nov 12, 2024',
    image: 'https://picsum.photos/seed/fashion/800/400',
    slug: 'upcoming-fashion-sales'
  }
];
