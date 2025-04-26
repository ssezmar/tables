export interface Table {
    id: string;
    restaurantId: string;
    capacity: number;
    position: {
      x: number;
      y: number;
    };
    shape: 'square' | 'round' | 'rectangle';
    status: 'available' | 'occupied' | 'reserved' | 'pending'; // Добавляем статус
    reservationInfo?: { // Дополнительная информация о брони
      userName?: string;
      time?: string;
      guests?: number;
    };
  }