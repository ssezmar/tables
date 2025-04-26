import React from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Забронируйте идеальный вечер в ресторане</h1>
          <p className={styles.heroSubtitle}>
            Бронируйте столики в лучших ресторанах вашего города в несколько кликов
          </p>
          <Link to="/restaurants" className={styles.ctaButton}>
            Смотреть рестораны
          </Link>
        </div>
      </section>
      
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⏱️</div>
            <h3 className={styles.featureTitle}>Мгновенное бронирование</h3>
            <p className={styles.featureText}>
              Бронируйте столик за секунды с помощью нашего удобного сервиса
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌟</div>
            <h3 className={styles.featureTitle}>Лучшие рестораны</h3>
            <p className={styles.featureText}>
              Доступ к самым популярным и высокооцененным заведениям
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3 className={styles.featureTitle}>Удобно на телефоне</h3>
            <p className={styles.featureText}>
              Бронируйте на ходу с адаптивным дизайном для мобильных
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};