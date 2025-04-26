import React from 'react';
import styles from './TableGrid.module.css';
import { TableVisual } from '../TableVisual/TableVisual';
import { Table } from '../../../types/table';

interface TableGridProps {
  tables: Table[];
  selectedTable: Table | null;
  onSelectTable: (table: Table) => void;
}

export const TableGrid: React.FC<TableGridProps> = ({ tables, selectedTable, onSelectTable }) => {
  const maxX = Math.max(...tables.map(t => t.position.x), 0) + 1;
  const maxY = Math.max(...tables.map(t => t.position.y), 0) + 1;

  return (
    <div className={styles.tableGridContainer}>
      <h2 className={styles.title}>Выберите стол</h2>
      <div 
        className={styles.grid}
        style={{
          gridTemplateColumns: `repeat(${maxX}, 90px)`,
          gridTemplateRows: `repeat(${maxY}, 90px)`,
        }}
      >
        {tables.map(table => (
          <div
            key={table.id}
            style={{
              gridColumn: table.position.x,
              gridRow: table.position.y,
            }}
            onClick={() => onSelectTable(table)}
          >
            <TableVisual 
              table={table} 
              isSelected={selectedTable?.id === table.id} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};