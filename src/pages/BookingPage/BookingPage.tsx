import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../../services/restaurantService';
import { getTablesByRestaurant } from '../../services/tableService';
import { Restaurant } from '../../types/restaurant';
import { Table } from '../../types/table';
import { TableGrid } from '../../components/booking/TableGrid/TableGrid';
import { BookingForm } from '../../components/booking/BookingForm/BookingForm';
import { LoadingSpinner } from '../../components/common/LoadingSpinner/LoadingSpinner';
import styles from './BookingPage.module.css';

export const BookingPage = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!restaurantId) {
          throw new Error('ID ресторана не указан');
        }

        const [restaurantData, tablesData] = await Promise.all([
          getRestaurantById(restaurantId),
          getTablesByRestaurant(restaurantId),
        ]);

        if (!restaurantData) {
          throw new Error('Ресторан не найден');
        }

        setRestaurant(restaurantData);
        setTables(tablesData);
        setError(null);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Ошибка загрузки данных');
        setRestaurant(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [restaurantId]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className={styles.retryButton}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className={styles.notFound}>
        <p>Ресторан не найден</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Забронируйте столик в {restaurant.name}</h1>
        <p className={styles.subtitle}>{restaurant.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.tableSection}>
          <TableGrid 
            tables={tables} 
            selectedTable={selectedTable}
            onSelectTable={setSelectedTable}
          />
        </div>

        <div className={styles.bookingSection}>
          {selectedTable ? (
            <BookingForm 
              restaurant={restaurant} 
              table={selectedTable} 
            />
          ) : (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>Пожалуйста, выберите столик для бронирования</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};