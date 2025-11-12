import { createContext } from "react";
import type { CartContextType } from "../lib/types";

export const CartContext = createContext<CartContextType | undefined>(undefined);