import React from 'react';
import styles from './TableVisual.module.css';
import { Table } from '../../../types/table';

interface TableVisualProps {
  table: Table;
  isSelected: boolean;
}

export const TableVisual: React.FC<TableVisualProps> = ({ table, isSelected }) => {
  const tableClasses = [
    styles.table,
    styles[`table-${table.shape}`],
    styles[`status-${table.status}`],
    isSelected ? styles.selected : ''
  ].join(' ');

  const getStatusInfo = () => {
    switch(table.status) {
      case 'occupied':
        return 'Сейчас занят';
      case 'reserved':
        return `Забронирован${table.reservationInfo?.userName ? ` на ${table.reservationInfo.userName}` : ''}`;
      case 'pending':
        return 'Ожидает подтверждения';
      default:
        return 'Свободен';
    }
  };

  return (
    <div className={tableClasses}>
      <div className={styles.tableInfo}>
        <span className={styles.tableId}>#{table.id.split('-')[1]}</span>
        <span className={styles.tableCapacity}>{table.capacity}</span>
      </div>
      <div className={styles.tooltip}>
        <div className={styles.tooltipContent}>
          <h4>Стол #{table.id.split('-')[1]}</h4>
          <p>Вместимость: {table.capacity} чел.</p>
          <p>Статус: {getStatusInfo()}</p>
          {table.reservationInfo?.time && (
            <p>Время: {table.reservationInfo.time}</p>
          )}
          {table.reservationInfo?.guests && (
            <p>Гостей: {table.reservationInfo.guests}</p>
          )}
        </div>
      </div>
    </div>
  );
};