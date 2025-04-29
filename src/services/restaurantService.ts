import { Restaurant } from '../types/restaurant';

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Сказка',
    description: 'Аутентичный грузинский ресторан с живой музыкой и винным погребом. Попробуйте настоящие хинкали и хачапури по старинным рецептам.',
    image: 'tables/src/img/fairy_tale.webp',
    address: 'ул.Мерецково-Волосова, 11, район Софийская сторона, Великий Новгород',
    cuisineType: 'Грузинская',
    rating: 5.0,
  },
  {
    id: '2',
    name: 'География',
    description: 'Гастрономическое пространство с авторской кухней, где каждый зал посвящен кулинарным традициям разных регионов России.',
    image: 'tables/src/img/geografiya.jpg',
    address: 'ул.Газон, 2, район Софийская сторона, Великий Новгород',
    cuisineType: 'Русская',
    rating: 5.0,
  },
  {
    id: '3',
    name: 'Marusya',
    description: 'Уютное кафе с домашней атмосферой',
    image: 'tables/src/img/marusya.jpg',
    address: 'ул. Большая Московская, 15, Великий Новгород',
    cuisineType: 'Европейская',
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Наффига козе баян',
    description: 'Антикафе с настольными играми и неформальной атмосферой',
    image: 'tables/src/img/koza.jpg',
    address: 'ул. Мерецкова-Волосова, 5, Великий Новгород',
    cuisineType: 'Кафе',
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Napoli',
    description: 'Пиццерия с дровяной печью и итальянской кухней',
    image: 'tables/src/img/napoli.jpg',
    address: 'ул. Федоровский Ручей, 12, Великий Новгород',
    cuisineType: 'Итальянская',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Palazzo',
    description: 'Ресторан средиземноморской кухни в дворцовой атмосфере',
    image: 'tables/src/img/palazzo.jpg',
    address: 'наб. Александра Невского, 22, Великий Новгород',
    cuisineType: 'Средиземноморская',
    rating: 4.5,
  },
  {
    id: '7',
    name: 'Пхали-Хинкали',
    description: 'Грузинский ресторан с живой музыкой по вечерам',
    image: 'tables/src/img/phali.jpg',
    address: 'ул. Великая, 10, Великий Новгород',
    cuisineType: 'Грузинская',
    rating: 4.9,
  },
  {
    id: '8',
    name: 'Ильмень',
    description: 'Рыбный ресторан с блюдами из местных продуктов',
    image: 'tables/src/img/ilmen.jpg',
    address: 'ул. Федоровский Ручей, 16, Великий Новгород',
    cuisineType: 'Русская',
    rating: 4.5,
  },
  {
    id: '9',
    name: 'Фрегат',
    description: 'Ресторан в виде корабля с панорамными видами',
    image: 'tables/src/img/fregat.jpg',
    address: 'наб. Александра Невского, 19, Великий Новгород',
    cuisineType: 'Европейская',
    rating: 4.3,
  },
  {
    id: '10',
    name: 'Токио Сити',
    description: 'Суши-бар с японской кухней и доставкой',
    image: 'tables/src/img/tokyo.jpg',
    address: 'ул. Ломоносова, 7, Великий Новгород',
    cuisineType: 'Японская',
    rating: 4.4,
  },
  {
    id: '11',
    name: 'Садко',
    description: 'Кафе-ресторан с живой музыкой и русской кухней',
    image: 'tables/src/img/sadko.jpg',
    address: 'ул. Большая Московская, 24, Великий Новгород',
    cuisineType: 'Русская',
    rating: 4.4,
  },
  {
    id: '12',
    name: 'Гурметто',
    description: 'Ресторан, суши-бар, пиццерия',
    image: 'tables/src/img/gurmetto.jpg',
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

