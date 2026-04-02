export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  nameMn?: string;
  category: 'tractor' | 'harvester' | 'seeder' | 'soil' | 'sprayer' | 'equipment' | 'dryer' | 'hay' | 'excavator';
  subcategory?: string;
  brand: string;
  model: string;
  image: string;
  images?: string[];
  price?: number;
  priceRange?: string;
  description: string;
  descriptionMn?: string;
  specifications: ProductSpecification[];
  features?: string[];
  featuresMn?: string[];
  inStock: boolean;
  featured?: boolean;
}

export type ProductCategory = Product['category'];
