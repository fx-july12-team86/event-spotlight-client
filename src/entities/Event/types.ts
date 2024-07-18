type EventType = {
  id: number;
  title: string;
  img: string;
  favorite: boolean;
  category: string;
  options: {
    date: string;
    time: string;
    address: string;
    city: string;
    price: number;
  };
};

export type { EventType };
