export interface BrowseSectionType {
  refLink?: any;
  categories: {
    id: number;
    imageUrl: string;
    products: number;
    title: string;
    ratio: {
      default: string;
      md: string;
    };
  }[];
}

export interface ratioType {
  wrapper: {
    default: {
      [key: string]: string;
    };
    md: {
      [key: string]: string;
    };
  };
  meta: {
    [key: string]: string;
  };
}
