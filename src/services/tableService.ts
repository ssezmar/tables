import { Table } from '../types/table';

const mockTables: Record<string, Table[]> = {
  '1': [
    {
      id: '1-1', 
      restaurantId: '1',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '1-2',
      restaurantId: '1',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'reserved',
      reservationInfo: {
        userName: 'Иван Петров',
        time: '19:30',
        guests: 3
      }
    },
    {
      id: '1-3',
      restaurantId: '1',
      capacity: 6,
      position: { x: 1, y: 3 },
      shape: 'rectangle',
      status: 'occupied'
    }
  ],
  '2': [
    {
      id: '2-1',
      restaurantId: '2',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'square',
      status: 'pending'
    },
    {
      id: '2-2',
      restaurantId: '2',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'round',
      status: 'available'
    }
  ],
  '3': [
    {
      id: '3-1',
      restaurantId: '3',
      capacity: 8,
      position: { x: 1, y: 1 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Ольга Смирнова',
        time: '20:00',
        guests: 7
      }
    }
  ],
  '4': [
    {
      id: '4-1',
      restaurantId: '4',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'occupied'
    },
    {
      id: '4-2',
      restaurantId: '4',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '4-3',
      restaurantId: '4',
      capacity: 6,
      position: { x: 1, y: 3 },
      shape: 'rectangle',
      status: 'available'
    }
  ],
  '5': [
    {
      id: '5-1',
      restaurantId: '5',
      capacity: 4,
      position: { x: 1, y: 1 },
      shape: 'square',
      status: 'reserved',
      reservationInfo: {
        userName: 'Алексей Иванов',
        time: '21:00',
        guests: 4
      }
    },
    {
      id: '5-2',
      restaurantId: '5',
      capacity: 2,
      position: { x: 3, y: 1 },
      shape: 'round',
      status: 'pending'
    }
  ]
};


export const getTablesByRestaurant = async (restaurantId: string): Promise<Table[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTables[restaurantId] || []);
      }, 300);
    });
  };