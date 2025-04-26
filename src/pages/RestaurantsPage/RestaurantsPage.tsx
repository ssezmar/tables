import React, { useEffect, useState } from 'react';
import { RestaurantCard } from '../../components/restaurants/RestaurantCard/RestaurantCard';
import { getRestaurants } from '../../services/restaurantService';
import { Restaurant } from '../../types/restaurant';
import styles from './RestaurantsPage.module.css';
import { useAuth } from '../../hooks/useAuth';
import { LoadingSpinner } from '../../components/common/LoadingSpinner/LoadingSpinner';

export const RestaurantsPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [cuisineFilter, setCuisineFilter] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
        setFilteredRestaurants(data);
      } catch (err) {
        setError('Не удалось загрузить рестораны. Пожалуйста, попробуйте позже.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    let result = [...restaurants];
    
    if (cuisineFilter) {
      result = result.filter(r => 
        r.cuisineType.toLowerCase() === cuisineFilter.toLowerCase()
      );
    }
    
    if (searchQuery) {
      result = result.filter(r =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    result.sort((a, b) => {
      if (sortOption === 'rating') {
        return b.rating - a.rating;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    
    setFilteredRestaurants(result);
  }, [restaurants, cuisineFilter, sortOption, searchQuery]);

  const handleRetry = () => {
    setError('');
    setLoading(true);
    setTimeout(() => {
      setRestaurants([
        {
          id: '1',
          name: 'Итальянский бистро',
          description: 'Аутентичная итальянская кухня в уютной атмосфере',
          image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590',
          address: 'ул. Главная, 123, Москва',
          cuisineType: 'Итальянская',
          rating: 4.5,
        },
        {
          id: '2',
          name: 'Суши-бар',
          description: 'Свежие суши и японские блюда',
          image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
          address: 'пр. Дубовый, 456, Москва',
          cuisineType: 'Японская',
          rating: 4.8,
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
        <p>Загрузка ресторанов...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>{error}</p>
        <button 
          onClick={handleRetry}
          className={styles.retryButton}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Наши рестораны</h1>
      
      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Поиск ресторанов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.filters}>
          <select
            value={cuisineFilter}
            onChange={(e) => setCuisineFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">Все кухни</option>
            <option value="italian">Итальянская</option>
            <option value="japanese">Японская</option>
            <option value="mexican">Мексиканская</option>
            <option value="american">Американская</option>
          </select>
          
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="name">По названию</option>
            <option value="rating">По рейтингу</option>
          </select>
        </div>
      </div>
      
      {filteredRestaurants.length === 0 ? (
        <div className={styles.noResults}>
          <p>Нет ресторанов, соответствующих вашим критериям.</p>
          <button 
            onClick={() => {
              setCuisineFilter('');
              setSearchQuery('');
            }}
            className={styles.clearButton}
          >
            Сбросить фильтры
          </button>
        </div>
      ) : (
        <div className={styles.restaurantsGrid}>
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.id} 
              restaurant={restaurant}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
      )}
    </div>
  );
};