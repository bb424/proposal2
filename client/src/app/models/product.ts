export interface Product {
    id: number
    name: string
    description: string
    price: number
    pictureUrl: string
    type?: string
    brand: string
    quantityInStock?: number
  }
  /* question mark after variable makes property optional */