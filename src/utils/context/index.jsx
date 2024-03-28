import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, updateCart] = useState([])

    return (
        <CartContext.Provider value={{cart, updateCart}}>
            {children}
        </CartContext.Provider>
    )
}