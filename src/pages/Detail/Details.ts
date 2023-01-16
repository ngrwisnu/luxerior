export interface initialValueType {
  title: string;
  price: number;
  description: string;
  imgUrls: Array<string>;
  relatedProducts: {
    title: string;
    price: number;
    imageUrl: string;
  }[];
}
