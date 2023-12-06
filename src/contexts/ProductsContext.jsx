import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);

            } catch (error) {
                console.error(error);
            }
        }

        fetchProducts();
    }, []);


    return <ProductsContext.Provider value={{ products }}>
        {children}
    </ProductsContext.Provider>
}

export default ProductProvider;
