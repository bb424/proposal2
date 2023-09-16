import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import axios from "axios";



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []) /*the square brackets prevent multiple calls which would keep recursively calling requests*/

    
    return (
        <>
            <ProductList products={products} />
        </>
    )
}
