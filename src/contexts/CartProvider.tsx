import { useState, type ReactNode } from "react";
import type { CartItem } from "../lib/types";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: Omit<CartItem, "qty">) => {
        setCart((prev) => {
            const found = prev.find((p) => p.id === item.id);
            if (found) {
                return prev.map((p) =>
                    p.id === item.id ? { ...p, qty: p.qty + 1 } : p
                );
            }
            return [...prev, { ...item, qty: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) =>
            prev
                .map((p) =>
                    p.id === id ? { ...p, qty: p.qty - 1 } : p
                )
                .filter((p) => p.qty > 0)
        );
    };

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    const subtotal = cart.reduce((s, i) => s + i.qty * i.price, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, totalQty, subtotal }}
        >
            {children}
        </CartContext.Provider>
    )
};