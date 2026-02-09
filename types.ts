
export enum StoreCategory {
  FASHION = 'Fashion',
  ELECTRONICS = 'Electronics',
  GROCERY = 'Grocery',
  BEAUTY = 'Beauty',
  FOOTWEAR = 'Footwear',
  HOME = 'Home & Kitchen'
}

export interface Store {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: StoreCategory;
  affiliateUrl: string;
  isFeatured?: boolean;
}

export interface Coupon {
  id: string;
  storeId: string;
  title: string;
  description: string;
  code?: string;
  expiryDate: string;
  isVerified: boolean;
  type: 'coupon' | 'deal';
  bankOffer?: string;
  usageCount?: number;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}
