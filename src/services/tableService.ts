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
    },
    {
      id: '1-4',
      restaurantId: '1',
      capacity: 2,
      position: { x: 5, y: 1 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '1-5',
      restaurantId: '1',
      capacity: 8,
      position: { x: 7, y: 1 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Мария Сидорова',
        time: '20:15',
        guests: 8
      }
    },
    {
      id: '1-6',
      restaurantId: '1',
      capacity: 4,
      position: { x: 1, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '1-7',
      restaurantId: '1',
      capacity: 2,
      position: { x: 3, y: 5 },
      shape: 'round',
      status: 'pending'
    },
    {
      id: '1-8',
      restaurantId: '1',
      capacity: 4,
      position: { x: 5, y: 5 },
      shape: 'square',
      status: 'occupied'
    },
    {
      id: '1-9',
      restaurantId: '1',
      capacity: 6,
      position: { x: 7, y: 5 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '1-10',
      restaurantId: '1',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Сергей Васильев',
        time: '21:00',
        guests: 9
      }
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
    },
    {
      id: '2-3',
      restaurantId: '2',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Анна Ковалева',
        time: '19:00',
        guests: 5
      }
    },
    {
      id: '2-4',
      restaurantId: '2',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'occupied'
    },
    {
      id: '2-5',
      restaurantId: '2',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '2-6',
      restaurantId: '2',
      capacity: 8,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '2-7',
      restaurantId: '2',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Дмитрий Соколов',
        time: '20:30',
        guests: 2
      }
    },
    {
      id: '2-8',
      restaurantId: '2',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'pending'
    },
    {
      id: '2-9',
      restaurantId: '2',
      capacity: 6,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '2-10',
      restaurantId: '2',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'occupied'
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
    },
    {
      id: '3-2',
      restaurantId: '3',
      capacity: 2,
      position: { x: 3, y: 1 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '3-3',
      restaurantId: '3',
      capacity: 4,
      position: { x: 5, y: 1 },
      shape: 'square',
      status: 'occupied'
    },
    {
      id: '3-4',
      restaurantId: '3',
      capacity: 6,
      position: { x: 1, y: 3 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '3-5',
      restaurantId: '3',
      capacity: 2,
      position: { x: 3, y: 3 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Екатерина Воробьева',
        time: '19:45',
        guests: 2
      }
    },
    {
      id: '3-6',
      restaurantId: '3',
      capacity: 4,
      position: { x: 5, y: 3 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '3-7',
      restaurantId: '3',
      capacity: 6,
      position: { x: 1, y: 5 },
      shape: 'rectangle',
      status: 'pending'
    },
    {
      id: '3-8',
      restaurantId: '3',
      capacity: 2,
      position: { x: 3, y: 5 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '3-9',
      restaurantId: '3',
      capacity: 4,
      position: { x: 5, y: 5 },
      shape: 'square',
      status: 'occupied'
    },
    {
      id: '3-10',
      restaurantId: '3',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Артем Лебедев',
        time: '21:30',
        guests: 10
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
    },
    {
      id: '4-4',
      restaurantId: '4',
      capacity: 2,
      position: { x: 3, y: 3 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Наталья Кузнецова',
        time: '20:15',
        guests: 2
      }
    },
    {
      id: '4-5',
      restaurantId: '4',
      capacity: 4,
      position: { x: 5, y: 1 },
      shape: 'square',
      status: 'pending'
    },
    {
      id: '4-6',
      restaurantId: '4',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '4-7',
      restaurantId: '4',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'occupied'
    },
    {
      id: '4-8',
      restaurantId: '4',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '4-9',
      restaurantId: '4',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Виктор Петров',
        time: '19:30',
        guests: 7
      }
    },
    {
      id: '4-10',
      restaurantId: '4',
      capacity: 10,
      position: { x: 1, y: 7 },
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
    },
    {
      id: '5-3',
      restaurantId: '5',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '5-4',
      restaurantId: '5',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'occupied'
    },
    {
      id: '5-5',
      restaurantId: '5',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '5-6',
      restaurantId: '5',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Светлана Федорова',
        time: '20:45',
        guests: 5
      }
    },
    {
      id: '5-7',
      restaurantId: '5',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '5-8',
      restaurantId: '5',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'pending'
    },
    {
      id: '5-9',
      restaurantId: '5',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '5-10',
      restaurantId: '5',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'occupied'
    }
  ],
  '6': [
    {
      id: '6-1',
      restaurantId: '6',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '6-2',
      restaurantId: '6',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'reserved',
      reservationInfo: {
        userName: 'Денис Морозов',
        time: '19:15',
        guests: 4
      }
    },
    {
      id: '6-3',
      restaurantId: '6',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '6-4',
      restaurantId: '6',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'occupied'
    },
    {
      id: '6-5',
      restaurantId: '6',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '6-6',
      restaurantId: '6',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'pending'
    },
    {
      id: '6-7',
      restaurantId: '6',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Алина Семенова',
        time: '20:30',
        guests: 2
      }
    },
    {
      id: '6-8',
      restaurantId: '6',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '6-9',
      restaurantId: '6',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'occupied'
    },
    {
      id: '6-10',
      restaurantId: '6',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'available'
    }
  ],
  '7': [
    {
      id: '7-1',
      restaurantId: '7',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'pending'
    },
    {
      id: '7-2',
      restaurantId: '7',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '7-3',
      restaurantId: '7',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Глеб Павлов',
        time: '20:00',
        guests: 6
      }
    },
    {
      id: '7-4',
      restaurantId: '7',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '7-5',
      restaurantId: '7',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'occupied'
    },
    {
      id: '7-6',
      restaurantId: '7',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '7-7',
      restaurantId: '7',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Евгения Волкова',
        time: '19:45',
        guests: 2
      }
    },
    {
      id: '7-8',
      restaurantId: '7',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '7-9',
      restaurantId: '7',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'pending'
    },
    {
      id: '7-10',
      restaurantId: '7',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'available'
    }
  ],
  '8': [
    {
      id: '8-1',
      restaurantId: '8',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '8-2',
      restaurantId: '8',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'occupied'
    },
    {
      id: '8-3',
      restaurantId: '8',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Артур Яковлев',
        time: '20:30',
        guests: 5
      }
    },
    {
      id: '8-4',
      restaurantId: '8',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '8-5',
      restaurantId: '8',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'pending'
    },
    {
      id: '8-6',
      restaurantId: '8',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '8-7',
      restaurantId: '8',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Кристина Белова',
        time: '21:15',
        guests: 2
      }
    },
    {
      id: '8-8',
      restaurantId: '8',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '8-9',
      restaurantId: '8',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'occupied'
    },
    {
      id: '8-10',
      restaurantId: '8',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'available'
    }
  ],
  '9': [
    {
      id: '9-1',
      restaurantId: '9',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Максим Новиков',
        time: '19:30',
        guests: 2
      }
    },
    {
      id: '9-2',
      restaurantId: '9',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '9-3',
      restaurantId: '9',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'occupied'
    },
    {
      id: '9-4',
      restaurantId: '9',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '9-5',
      restaurantId: '9',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'pending'
    },
    {
      id: '9-6',
      restaurantId: '9',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Антон Степанов',
        time: '20:45',
        guests: 6
      }
    },
    {
      id: '9-7',
      restaurantId: '9',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '9-8',
      restaurantId: '9',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '9-9',
      restaurantId: '9',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'occupied'
    },
    {
      id: '9-10',
      restaurantId: '9',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'available'
    }
  ],
  '10': [
    {
      id: '10-1',
      restaurantId: '10',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '10-2',
      restaurantId: '10',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'reserved',
      reservationInfo: {
        userName: 'Яна Михайлова',
        time: '20:00',
        guests: 3
      }
    },
    {
      id: '10-3',
      restaurantId: '10',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '10-4',
      restaurantId: '10',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'occupied'
    },
    {
      id: '10-5',
      restaurantId: '10',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '10-6',
      restaurantId: '10',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'pending'
    },
    {
      id: '10-7',
      restaurantId: '10',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Роман Козлов',
        time: '21:30',
        guests: 2
      }
    },
    {
      id: '10-8',
      restaurantId: '10',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '10-9',
      restaurantId: '10',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '10-10',
      restaurantId: '10',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'occupied'
    }
  ],
  '11': [
    {
      id: '11-1',
      restaurantId: '11',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'pending'
    },
    {
      id: '11-2',
      restaurantId: '11',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '11-3',
      restaurantId: '11',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Людмила Семенова',
        time: '19:45',
        guests: 5
      }
    },
    {
      id: '11-4',
      restaurantId: '11',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '11-5',
      restaurantId: '11',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'occupied'
    },
    {
      id: '11-6',
      restaurantId: '11',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '11-7',
      restaurantId: '11',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Вадим Медведев',
        time: '20:15',
        guests: 2
      }
    },
    {
      id: '11-8',
      restaurantId: '11',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '11-9',
      restaurantId: '11',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'pending'
    },
    {
      id: '11-10',
      restaurantId: '11',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'available'
    }
  ],
  '12': [
    {
      id: '12-1',
      restaurantId: '12',
      capacity: 2,
      position: { x: 1, y: 1 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '12-2',
      restaurantId: '12',
      capacity: 4,
      position: { x: 3, y: 1 },
      shape: 'square',
      status: 'occupied'
    },
    {
      id: '12-3',
      restaurantId: '12',
      capacity: 6,
      position: { x: 5, y: 1 },
      shape: 'rectangle',
      status: 'reserved',
      reservationInfo: {
        userName: 'Элина Григорьева',
        time: '20:30',
        guests: 6
      }
    },
    {
      id: '12-4',
      restaurantId: '12',
      capacity: 2,
      position: { x: 1, y: 3 },
      shape: 'round',
      status: 'available'
    },
    {
      id: '12-5',
      restaurantId: '12',
      capacity: 4,
      position: { x: 3, y: 3 },
      shape: 'square',
      status: 'pending'
    },
    {
      id: '12-6',
      restaurantId: '12',
      capacity: 6,
      position: { x: 5, y: 3 },
      shape: 'rectangle',
      status: 'available'
    },
    {
      id: '12-7',
      restaurantId: '12',
      capacity: 2,
      position: { x: 1, y: 5 },
      shape: 'round',
      status: 'reserved',
      reservationInfo: {
        userName: 'Станислав Борисов',
        time: '21:00',
        guests: 2
      }
    },
    {
      id: '12-8',
      restaurantId: '12',
      capacity: 4,
      position: { x: 3, y: 5 },
      shape: 'square',
      status: 'available'
    },
    {
      id: '12-9',
      restaurantId: '12',
      capacity: 8,
      position: { x: 5, y: 5 },
      shape: 'rectangle',
      status: 'occupied'
    },
    {
      id: '12-10',
      restaurantId: '12',
      capacity: 10,
      position: { x: 1, y: 7 },
      shape: 'rectangle',
      status: 'available'
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