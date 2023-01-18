export interface initialValueType {
  id: number;
  title: string;
  price: number;
  description: string;
  imgUrls: Array<string>;
  relatedProducts: {
    title: string;
    price: number;
    imageUrl: string;
  }[];
  category: {
    id: number;
    title: string;
    products: number;
    imageUrl: string;
  };
}

export const initialValue: initialValueType = {
  id: 1,
  title: "",
  price: 0,
  description: "",
  imgUrls: [],
  relatedProducts: [],
  category: {
    id: 1,
    title: "",
    products: 0,
    imageUrl: "",
  },
};
