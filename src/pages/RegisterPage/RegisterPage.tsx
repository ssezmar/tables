import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';
import { useAuth } from '../../hooks/useAuth';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return setError('Пароли не совпадают');
    }
    
    try {
      setError('');
      setLoading(true);
      await register(name, email, password);
      navigate('/');
    } catch {
      setError('Ошибка при создании аккаунта');
    }
    
    setLoading(false);
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Регистрация через ${provider}`);
    // В реальном приложении здесь будет перенаправление на OAuth провайдера
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Регистрация</h2>
        
        {error && <div className={styles.alert}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Полное имя</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Пароль</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Подтвердите пароль</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Создание аккаунта...' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className={styles.socialDivider}>
          <span className={styles.dividerText}>или зарегистрироваться через</span>
        </div>

        <div className={styles.socialButtons}>
          <button 
            className={`${styles.socialButton} ${styles.gosuslugi}`}
            onClick={() => handleSocialRegister('Госуслуги')}
          >
            Госуслуги
          </button>
          <button 
            className={`${styles.socialButton} ${styles.yandex}`}
            onClick={() => handleSocialRegister('Яндекс')}
          >
            Яндекс
          </button>
          <button 
            className={`${styles.socialButton} ${styles.vk}`}
            onClick={() => handleSocialRegister('ВКонтакте')}
          >
            ВКонтакте
          </button>
          <button 
            className={`${styles.socialButton} ${styles.ok}`}
            onClick={() => handleSocialRegister('Одноклассники')}
          >
            Одноклассники
          </button>
          <button 
            className={`${styles.socialButton} ${styles.google}`}
            onClick={() => handleSocialRegister('Google')}
          >
            Google
          </button>
        </div>
        
        <div className={styles.footer}>
          Уже есть аккаунт? <Link to="/login" className={styles.link}>Войти</Link>
        </div>
      </div>
    </div>
  );
};