import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../../../hooks/useAuth';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          НовгуСтолы
        </Link>
        
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Главная</Link>
          <Link to="/restaurants" className={styles.navLink}>Рестораны</Link>
          
          {user ? (
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className={styles.navLink}>Вход</Link>
              <Link to="/register" className={styles.signUpButton}>
                Регистрация
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};