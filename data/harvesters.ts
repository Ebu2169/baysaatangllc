import { Product } from './types';

export const harvesters: Product[] = [
  {
    id: 'wheat-harvester-4lz-10fb',
    name: 'Wheat Harvester 4LZ-10FB',
    nameMn: 'Үр тарианы комбайн 4LZ-10FB',
    category: 'harvester',
    subcategory: 'grain',
    brand: 'FMWorld',
    model: '4LZ-10FB',
    image: '/products/fmworld wheat harvester.webp',
    description: 'Full-feed grain harvester for wheat, rapeseed, soybeans, and corn. 200HP engine with 3000/2750mm cutting width.',
    descriptionMn: 'Үр тариа, рапс, шар буурцаг, эрдэнэ шиш хураах бүрэн тэжээлт комбайн. 200 м.х хөдөлгүүртэй.',
    specifications: [
      { label: 'Загвар', value: '4LZ-10FB' },
      { label: 'Хураах таримлын төрөл', value: 'Үр тариа, рапс, шар буурцаг, эрдэнэ шиш' },
      { label: 'Бүтцийн төрөл', value: 'Дугуйт, өөрөө явагч, бүрэн тэжээлт' },
      { label: 'Овьёы хэмжээ', value: '6610 × 3450 × 3410 мм' },
      { label: 'Жин', value: '6000 кг' },
      { label: 'Хөдөлгүүрийн хүчин чадал', value: '200 м.х' },
      { label: 'Хөдөлгүүрийн эргэлт', value: '2300 эрг/мин' },
      { label: 'Авцын өргөн', value: '3000 / 2750 мм (сонголтоор)' },
      { label: 'Нэйтрүүлэх чадвар', value: '10.0 кг/сек' },
      { label: 'Ажлын бүтээмж', value: '0.2-1.5 га/цаг' },
      { label: 'Цайруулах хурдний диаметр', value: 'Ф700 × 2900 мм' },
      { label: 'Дугуйн хэмжээ', value: '10.5/75R15.3, 15-24' },
      { label: 'Тэнхлэг хоорондын зай', value: '3130 мм' },
      { label: 'Сүрэл хэрчигч', value: 'Эргэдэг иртэй төрөл' }
    ],
    features: ['200 м.х хөдөлгүүр', 'Бүрэн тэжээлт', 'Олон төрлийн ургац', 'Эргэдэг сүрэл хэрчигч'],
    featuresMn: ['200 м.х хөдөлгүүр', 'Бүрэн тэжээлт', 'Олон төрлийн ургац', 'Эргэдэг сүрэл хэрчигч'],
    inStock: true,
    featured: true
  },
  {
    id: 'corn-harvester-4yz-4eb',
    name: 'Corn Harvester 4YZ-4EB',
    nameMn: 'Эрдэнэ шишийн комбайн 4YZ-4EB',
    category: 'harvester',
    subcategory: 'corn',
    brand: 'FMWorld',
    model: '4YZ-4EB',
    image: '/products/fmworld corn harvester.webp',
    description: '4-row corn harvester with 220-240HP YUCHAI engine. Vertical, water-cooled, 4-stroke diesel.',
    descriptionMn: '4 мөрийн эрдэнэ шишийн комбайн. 220-240 м.х YUCHAI хөдөлгүүртэй.',
    specifications: [
      { label: 'Загвар', value: '4YZ-4EB' },
      { label: 'Хураах таримлын төрөл', value: 'Эрдэнэ шиш' },
      { label: 'Хөдөлгүүрийн загвар', value: 'YUCHAI YC6J220-T303/YCA07P240-T401' },
      { label: 'Төрөл', value: 'Босоо, цуваа байрлалтай, усан хөргөлттэй, дөрвөн тактай' },
      { label: 'Овьёы хэмжээ', value: '6930 × 2560 × 3340 мм' },
      { label: 'Жин', value: '7560 кг' },
      { label: 'Хөдөлгүүрийн хүчин чадал', value: '220-240 м.х' },
      { label: 'Хөдөлгүүрийн эргэлт', value: '2300 эрг/мин' },
      { label: 'Авцын өргөн', value: '2340 мм' },
      { label: 'Ажлын бүтээмж', value: '0.4-0.65 га/цаг' },
      { label: 'Мөрийн тоо', value: '4' },
      { label: 'Цэвэрлэх анги', value: '450-750 мм' },
      { label: 'Дугуйн хэмжээ', value: '10/75-15.3, 15.5/80-24' },
      { label: 'Тэнхлэг хоорондын зай', value: '2950 мм' }
    ],
    features: ['4 мөр', '220-240 м.х', 'YUCHAI хөдөлгүүр', 'Усан хөргөлт'],
    featuresMn: ['4 мөр', '220-240 м.х', 'YUCHAI хөдөлгүүр', 'Усан хөргөлт'],
    inStock: true,
    featured: true
  }
];
