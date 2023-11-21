export interface IProduct {
  objectId: string;
  name: string;
  brand: string;
  description: string;
  createdAt: string;
  updatedAtt: string;
  price: number;
  image: string;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
