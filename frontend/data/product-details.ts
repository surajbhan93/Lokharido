export interface Review {
    id: number;
    user: string;
    rating: number; // 1 to 5
    comment: string;
    date: string;
}

export interface ProductDetails {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice: number;
    discount: number; // Percentage
    rating: number;
    reviewCount: number;

    // Arrays are crucial for the UI sliders/selectors
    images: string[];
    sizes: string[];

    // Specific details for the accordion sections
    description: string;
    specifications: { [key: string]: string }; // flexible object for key-value pairs

    // Marketing data
    offers: string[];
    returnPolicy: string;
    ratingBreakdown: { 5: number; 4: number; 3: number; 2: number; 1: number };

    reviews: Review[];
}

// MOCK DATA: A sample "Men's Jacket" for testing
export const sampleProduct: ProductDetails = {
    id: "101",
    name: "Men's Black Bomber Jacket with Patchwork",
    brand: "Lokharido®",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.5,
    reviewCount: 245,

    // 4 Images for the Gallery Component
    images: [
        "https://images.unsplash.com/photo-1551028919-ac6635f0e5c9?w=800&q=80", // Main Front
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80", // Side/Back
        "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&q=80", // Detail Shot
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80", // Lifestyle
    ],

    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],

    offers: [
        "Save extra ₹100 on first order. Use code: NEW100",
        "Get 10% Cashback on UPI payments",
        "Buy 2 get 5% off"
    ],

    returnPolicy: "15 Days Return & Exchange available for this product.",

    description: "Elevate your winter style with this premium Bomber Jacket. Featuring a durable nylon shell, quilted lining for warmth, and signature patchwork details. Perfect for layering over hoodies or t-shirts.",

    specifications: {
        "Fabric": "100% Nylon",
        "Fit": "Regular Fit",
        "Wash Care": "Machine Wash Cold",
        "Origin": "Made in India"
    },

    ratingBreakdown: { 5: 120, 4: 80, 3: 30, 2: 10, 1: 5 },

    reviews: [
        { id: 1, user: "Amit S.", rating: 5, comment: "Amazing quality, fits perfectly!", date: "2 days ago" },
        { id: 2, user: "Rahul K.", rating: 4, comment: "Good, but sleeves are slightly long.", date: "1 week ago" }
    ]
};