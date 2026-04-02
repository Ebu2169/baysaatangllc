import { Product, ProductCategory } from './types';
import { tractors } from './tractors';
import { harvesters } from './harvesters';
import { attachments } from './attachments';
import { excavators } from './excavators';

// Combine all products
export const allProducts: Product[] = [
  ...tractors,
  ...harvesters,
  ...attachments,
  ...excavators
];

// Get products by category
export function getProductsByCategory(category: ProductCategory): Product[] {
  return allProducts.filter(product => product.category === category);
}

// Get featured products
export function getFeaturedProducts(): Product[] {
  return allProducts.filter(product => product.featured);
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return allProducts.find(product => product.id === id);
}

// Get all categories with counts
export function getCategoriesWithCounts(): { category: ProductCategory; count: number; label: string; labelMn: string }[] {
  const categoryLabels: Record<ProductCategory, { label: string; labelMn: string }> = {
    tractor: { label: 'Tractors', labelMn: 'Трактор' },
    harvester: { label: 'Harvesters', labelMn: 'Ургац хураалтын техник' },
    seeder: { label: 'Seeders', labelMn: 'Үрлэгч' },
    soil: { label: 'Soil Equipment', labelMn: 'Хөрс боловсруулах техник' },
    sprayer: { label: 'Sprayers', labelMn: 'Шүршигч төхөөрөмж' },
    equipment: { label: 'Farm Equipment', labelMn: 'ХАА-н дагалдах тоног төхөөрөмж' },
    dryer: { label: 'Grain Dryers', labelMn: 'Үр тариа хатаах төхөөрөмж' },
    hay: { label: 'Hay Equipment', labelMn: 'Өвс, тэжээл бэлтгэх техник' },
    excavator: { label: 'Excavators', labelMn: 'Экскаватор' }
  };

  return (Object.keys(categoryLabels) as ProductCategory[]).map(category => ({
    category,
    count: getProductsByCategory(category).length,
    ...categoryLabels[category]
  }));
}

// Search products
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.nameMn?.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery) ||
    product.model.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
}

// Re-export types and category arrays
export type { Product, ProductCategory } from './types';
export { tractors } from './tractors';
export { harvesters } from './harvesters';
export { attachments } from './attachments';
export { excavators } from './excavators';
