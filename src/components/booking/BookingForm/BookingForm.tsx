import React from 'react';
import styles from './BookingForm.module.css';

interface BookingFormProps {
  restaurant: {
    id: string;
    name: string;
  };
  table: {
    id: string;
    capacity: number;
  };
}

export const BookingForm: React.FC<BookingFormProps> = ({ restaurant, table }) => {
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [guests, setGuests] = React.useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Бронирование:', { date, time, guests, restaurant, table });
  };

  return (
    <div className={styles.bookingForm}>
      <h3 className={styles.title}>Бронирование стола #{table.id.split('-')[1]}</h3>
      <p className={styles.restaurantName}>{restaurant.name}</p>
      <p className={styles.capacity}>Вместимость: до {table.capacity} гостей</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="date">Дата:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="time">Время:</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="guests">Количество гостей:</label>
          <input
            id="guests"
            type="number"
            min="1"
            max={table.capacity}
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className={styles.input}
            required
          />
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Подтвердить бронь
        </button>
      </form>
    </div>
  );
};