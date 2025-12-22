export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    originalPrice: number;
    discount: string;
    rating: number;
    image: string;

    // 👇 filters
    size: string;
    color: string;
    category: string;
}
