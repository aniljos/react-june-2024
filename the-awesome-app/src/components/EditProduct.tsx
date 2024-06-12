import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Product } from '../model/Product';
import axios from 'axios';
function EditProduct(){

    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));
    const params = useParams();

    useEffect(() => {

        console.log("params", params);
        fetchProduct();

    }, [])

    async function fetchProduct(){
        try {
            
            const url = `http://localhost:9000/products/${params.id}`;
            const response = await axios.get<Product>(url);
            setProduct(response.data);


        } catch (error) {
            console.log("fetchProduct error", error)
        }
    }

    return(
        <div>
            <h4> Edit Product</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" value={product.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" id="price" value={product.price}/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" id="desc" value={product.description}/>
                </div>
            </form>
        </div>
    )

}
export default EditProduct;