import axios from "axios";
import { useEffect, useState } from "react";
import {Product} from '../model/Product';

const baseUrl = "http://localhost:9000/products";

function ListProducts(){

    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {

        fetchProducts();
    }, []);

    async function fetchProducts(){

        try {
            
            const response = await axios.get<Array<Product>>(baseUrl);
            console.log(response.data);
            setProducts(response.data);
        } catch (error) {
            console.log("fetchProducts error: ", error);
        }
    }

    return(
        <div>
            <h4>List Products</h4>
            <div>
                {products.map((product) => {
                    return (
                        <div>
                            <p>Id: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProducts;