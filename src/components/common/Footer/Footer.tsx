import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>TableReserve</h3>
          <p className={styles.description}>
            Самый простой путь для бронирования ресторанов
          </p>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Ссылки</h4>
          <ul className={styles.links}>
            <li><a href="/about" className={styles.link}>О нас</a></li>
            <li><a href="/contact" className={styles.link}>Контакты</a></li>
            <li><a href="/privacy" className={styles.link}>Политика конфиденциальности</a></li>
            <li><a href="/terms" className={styles.link}>Условия обслуживания</a></li>
          </ul>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Связь с нами</h4>
          <p className={styles.contactInfo}>
            Email: info@tablereserve.com<br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
      
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Новгу Столешница. Все права защищены.
      </div>
    </footer>
  );
};