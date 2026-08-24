export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  active: boolean;
}
export type createProductInput = Omit<Product, "id" | "active">;

export type updateProductInput = Partial<Omit<Product, "id" | "active">>;