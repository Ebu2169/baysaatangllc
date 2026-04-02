import { Product } from './types';

export const excavators: Product[] = [
  {
    id: 'wheel-excavator-w295w-10',
    name: 'Wheel Excavator W295W-10',
    nameMn: 'Дугуйт экскаватор W295W-10',
    category: 'excavator',
    brand: 'FMWorld',
    model: 'W295W-10',
    image: '/products/fmworld Wheel Excavator-W295W-10.webp',
    description: 'Wheel excavator with YCF3000x-T481 diesel engine. 62.5kW power, 0.23m³ bucket capacity.',
    descriptionMn: 'YCF3000x-T481 дизель хөдөлгүүртэй дугуйт экскаватор. 62.5кВт чадал, 0.23м³ шанаганы багтаамж.',
    specifications: [
      { label: 'Загвар', value: 'W295W-10' },
      { label: 'Хөдөлгүүрийн загвар (дизель)', value: 'YCF3000x-T481' },
      { label: 'Хөдөлгүүрийн чадал', value: '62.5 кВт / 2200 эрг/мин' },
      { label: 'Хамгийн их мушгих момент', value: '260 Н-м / 1600 эрг/мин' },
      { label: 'Үндсэн насосны төрөл', value: 'Axial piston pump' },
      { label: 'Үндсэн насосны бүтээмж', value: '154 л/мин' },
      { label: 'Гидравлик шингэний савны багтаамж', value: '110 л' },
      { label: 'Эргэх хурд', value: '12 эрг/мин' },
      { label: 'Өгсөх чадвар', value: '36°' },
      { label: 'Шанаганы багтаамж', value: '0.23 м³' },
      { label: 'Шанаганы хэмжээ', value: '3000 × 1600 мм' },
      { label: 'Хамгийн их ухах өндөр', value: '6125 мм' },
      { label: 'Хамгийн их яраа буулгах өндөр', value: '4356 мм' },
      { label: 'Хамгийн их ухах гүн', value: '3464 мм' },
      { label: 'Шанаганы босоо ухалтын хамгийн их гүн', value: '3250 мм' },
      { label: 'Хамгийн их ухах зай', value: '6140 мм' },
      { label: 'Хамгийн бага эргэлтийн радиус', value: '2460 мм' }
    ],
    features: ['62.5 кВт', 'Дугуйт', '0.23м³ шанага', '6125мм ухах өндөр'],
    featuresMn: ['62.5 кВт', 'Дугуйт', '0.23м³ шанага', '6125мм ухах өндөр'],
    inStock: true,
    featured: false
  }
];
