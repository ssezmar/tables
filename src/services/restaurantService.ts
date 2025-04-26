import { Restaurant } from '../types/restaurant';

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Итальянское бистро',
    description: 'Паста и пицца от шеф-повара из Рима',
    image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590',
    address: 'ул. Гастрономическая, 1, Москва',
    cuisineType: 'Итальянская',
    rating: 4.7,
  },
  {
    id: '2',
    name: 'Суши-мастер',
    description: 'Авторские роллы и свежие морепродукты',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    address: 'ул. Рыбацкая, 5, Москва',
    cuisineType: 'Японская',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Грузинские традиции',
    description: 'Хачапури и хинкали по семейным рецептам',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    address: 'ул. Кавказская, 12, Москва',
    cuisineType: 'Грузинская',
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Бургерная №1',
    description: 'Крафтовые бургеры с мраморной говядиной',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    address: 'ул. Американская, 7, Москва',
    cuisineType: 'Американская',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Французский дворик',
    description: 'Круассаны и фуа-гра с видом на парк',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    address: 'ул. Парижская, 3, Москва',
    cuisineType: 'Французская',
    rating: 4.6,
  }
];

export const getRestaurants = async (): Promise<Restaurant[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRestaurants), 300);
  });
};

export const getRestaurantById = async (id: string): Promise<Restaurant | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRestaurants.find(r => r.id === id));
    }, 300);
  });
};

