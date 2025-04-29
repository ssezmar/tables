import { Restaurant } from '../types/restaurant';

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Сказка',
    description: 'Аутентичный грузинский ресторан с живой музыкой и винным погребом.',
    image: 'https://img.freepik.com/free-photo/khinkali-traditional-georgian-dumplings_140725-1179.jpg',
    address: 'ул.Мерецково-Волосова, 11, Великий Новгород',
    cuisineType: 'Грузинская',
    rating: 5.0,
  },
  {
    id: '2',
    name: 'География',
    description: 'Гастрономическое пространство с авторской кухней регионов России.',
    image: 'https://img.freepik.com/free-photo/russian-borscht-soup-with-smetana_1220-6883.jpg',
    address: 'ул.Газон, 2, Великий Новгород',
    cuisineType: 'Русская',
    rating: 5.0,
  },
  {
    id: '3',
    name: 'Marusya',
    description: 'Уютное кафе с домашней атмосферой',
    image: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141356.jpg',
    address: 'ул. Большая Московская, 15, Великий Новгород',
    cuisineType: 'Европейская',
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Наффига козе баян',
    description: 'Антикафе с настольными играми и неформальной атмосферой',
    image: 'https://img.freepik.com/free-photo/coffee-cup-cookies-table-cafe_1220-6853.jpg',
    address: 'ул. Мерецкова-Волосова, 5, Великий Новгород',
    cuisineType: 'Кафе',
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Napoli',
    description: 'Пиццерия с дровяной печью и итальянской кухней',
    image: 'https://img.freepik.com/free-photo/authentic-italian-pasta-with-tomato-sauce-parmesan_141793-1774.jpg', // Паста карбонара
    address: 'ул. Федоровский Ручей, 12, Великий Новгород',
    cuisineType: 'Итальянская',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Palazzo',
    description: 'Ресторан средиземноморской кухни в дворцовой атмосфере',
    image: 'https://img.freepik.com/free-photo/gourmet-seafood-risotto-with-scallops-shrimps_141793-2225.jpg', // Ризотто с морепродуктами
    address: 'наб. Александра Невского, 22, Великий Новгород',
    cuisineType: 'Средиземноморская',
    rating: 4.5,
  },
  {
    id: '7',
    name: 'Пхали-Хинкали',
    description: 'Грузинский ресторан с живой музыкой по вечерам',
    image: 'https://img.freepik.com/free-photo/georgian-cuisine-chakapuli-stew_141793-3206.jpg',
    address: 'ул. Великая, 10, Великий Новгород',
    cuisineType: 'Грузинская',
    rating: 4.9,
  },
  {
    id: '8',
    name: 'Ильмень',
    description: 'Рыбный ресторан с блюдами из местных продуктов',
    image: 'https://img.freepik.com/free-photo/grilled-trout-with-vegetables-herbs_2829-19769.jpg',
    address: 'ул. Федоровский Ручей, 16, Великий Новгород',
    cuisineType: 'Русская',
    rating: 4.5,
  },
  {
    id: '9',
    name: 'Фрегат',
    description: 'Ресторан в виде корабля с панорамными видами',
    image: 'https://img.freepik.com/free-photo/seafood-platter-with-lobster-shrimps-mussels_140725-4015.jpg',
    address: 'наб. Александра Невского, 19, Великий Новгород',
    cuisineType: 'Европейская',
    rating: 4.3,
  },
  {
    id: '10',
    name: 'Токио Сити',
    description: 'Суши-бар с японской кухней и доставкой',
    image: 'https://img.freepik.com/free-photo/sushi-set-with-salmon-roe_141793-2278.jpg',
    address: 'ул. Ломоносова, 7, Великий Новгород',
    cuisineType: 'Японская',
    rating: 4.4,
  },
  {
    id: '11',
    name: 'Садко',
    description: 'Кафе-ресторан с живой музыкой и русской кухней',
    image: 'https://img.freepik.com/free-photo/russian-pancakes-with-caviar_141793-2193.jpg',
    address: 'ул. Большая Московская, 24, Великий Новгород',
    cuisineType: 'Русская',
    rating: 4.4,
  },
  {
    id: '12',
    name: 'Гурметто',
    description: 'Ресторан, суши-бар, пиццерия',
    image: 'https://img.freepik.com/free-photo/fusion-cuisine-concept_141793-2224.jpg',
    address: 'ул. Кавказская, 12, Великий Новгород',
    cuisineType: 'Смешанная',
    rating: 4.5,
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