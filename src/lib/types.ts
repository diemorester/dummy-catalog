export const Category = {
    ElectricGuitar: "Electric Guitar",
    AcousticGuitar: "Acoustic Guitar",
    Bass: "Bass",
    GrandPiano: "Grand Piano",
    Keyboard: "Keyboard",
    DrumSet: "Drum Set",
    ElectricDrumSet: "Electric Drum Set",
    Microphone: "Microphone",
    Accessories: "Accessories",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export type ProductType = {
    id: string;
    name: string;
    image: string;
    category: keyof typeof Category;
    price: number;
    description: string;
};

export type CartItem = {
    id: string;
    name: string;
    image: string;
    category: keyof typeof Category;
    price: number;
    qty: number;
};

export type CartContextType = {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "qty">) => void;
    removeFromCart: (id: string) => void;
    totalQty: number;
    subtotal: number;
};