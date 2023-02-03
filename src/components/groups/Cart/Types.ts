export interface CheckoutType {
  couriers: {
    id: number;
    imgUrl: string;
    name: string;
  }[];
  payments: {
    id: number;
    imgUrl: string;
    name: string;
  }[];
}
