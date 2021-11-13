export type EventType = {
  _id: string;
  name: string;
  date_time: string;
  description: string;
  location: string;
  picture: File | null;
  tickets_number: number;
  tickets?: [];
  type_event: string;
  price: string;
  in_archive: boolean;
};
