import { Product } from "../models/Products.js";


export const products: Product[] = [
  {
    id: 1, 
    name: "latop dell xps 15",
    price: 999999,
    stock: 10,
    category: "computadoras",
    active: true
  },
  {
    id: 2, 
    name: "smartphone samsung galaxy s21",
    price: 799999,
    stock: 15,
    category: "celulares",
    active: true
  },
  {
    id: 3, 
    name: "headphones sony wh-1000xm4",
    price: 1099999,
    stock: 5,
    category: "audifonos",
    active: true
  }
];

let nextProductId = Math.max(...products.map(product => product.id)) + 1;

export function generateProductId(): number {
  const id = nextProductId;
  nextProductId++;
  return id;
}