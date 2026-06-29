import React, { createContext } from "react";
import type { CartItem, Product } from "../types";
import { useEffect } from "react";
import { useMemo } from "react";

interface CartContextType {
    item: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
    updateQuantity: (productId: string, quantity: number) => void;
    isCartOpen: boolean;
    setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [item, setItem] = React.useState<CartItem[]>(() => {
        const saved = localStorage.getItem("app_cart");
        return saved ? JSON.parse(saved) : [];
    });

    const [isCartOpen, setCartOpen] = React.useState(false);
    useEffect(() => {
        localStorage.setItem("app_cart", JSON.stringify(item));
    }, [item]);

    const addToCart = (product: Product, quantity: number = 1) => {
        setItem((prev) => {
            if (prev.find((item) => item.product._id === product._id)) {
                return prev.map((item) =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prev, { product, quantity }];
            }
        });
        setCartOpen(true);
    };

    const removeFromCart = (productId: string) => {
        setItem((prev) => prev.filter((item) => item.product._id !== productId));
    };

    const clearCart = () => {
        setItem([]);
        setCartOpen(false);
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setItem((prev) =>
            prev.map((item) =>
                item.product._id === productId ? { ...item, quantity } : item
            )
        );
    };

  const cartCount = useMemo(() => item.length, [item]);
    const cartTotal = item.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                item,
                addToCart,
                removeFromCart,
                clearCart,
                cartTotal,
                cartCount,
                updateQuantity,
                isCartOpen,
                setCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = React.useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }

    return context;
}