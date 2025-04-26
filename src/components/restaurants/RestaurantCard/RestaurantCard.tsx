import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RestaurantCard.module.css';

interface RestaurantCardProps {
  restaurant: {
    id: string;
    name: string;
    description: string;
    image: string;
    cuisineType: string;
    rating: number;
  };
  isAuthenticated: boolean;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  restaurant,
  isAuthenticated
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className={styles.image}
          loading="lazy"
        />
        <span className={styles.rating}>
          ★ {restaurant.rating.toFixed(1)}
        </span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{restaurant.name}</h3>
          <span className={styles.cuisine}>{restaurant.cuisineType}</span>
        </div>
        
        <p className={styles.description}>{restaurant.description}</p>
        
        {isAuthenticated ? (
          <Link 
            to={`/booking/${restaurant.id}`} 
            className={styles.bookButton}
          >
            Забронировать
          </Link>
        ) : (
          <Link 
            to="/login" 
            className={styles.loginButton}
          >
            Войдите
          </Link>
        )}
      </div>
    </div>
  );
};