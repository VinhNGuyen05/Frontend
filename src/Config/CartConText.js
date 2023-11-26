import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((p) => p.fruitId === product.fruitId)

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[existingProductIndex].quantity += 1
            setCart(updatedCart)
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.fruitId !== productId)
        setCart(updatedCart)
    }

    // const increaseQuantity = (productId) => {
    //     const updatedCart = cart.map((product) =>
    //         product.name === productId ? { ...product, quantity: product.quantity + 1 } : product
    //     )
    //     setCart(updatedCart)
    // }

    // const decreaseQuantity = (productId) => {
    //     const updatedCart = cart.map((product) =>
    //         product.name === productId && product.quantity > 1
    //             ? { ...product, quantity: product.quantity - 1 }
    //             : product
    //     )
    //     setCart(updatedCart)
    // }

    const updateQuantity = (productId, quantity) => {
        const existingProductIndex = cart.findIndex((p) => p.fruitId === productId)
        const updatedCart = [...cart]
        updatedCart[existingProductIndex].quantity = quantity
        setCart(updatedCart)
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
