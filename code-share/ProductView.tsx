import React from "react";
import { Product } from "../model/Product";

type ProductViewProps = {
    product: Product;
    onDelete?: (product: Product) => void;
    onEdit?: (product: Product) => void;
}

const ProductView: React.FC<ProductViewProps> = ({product, onDelete, onEdit})=> {
    console.log("ProductView", product);
    return(
        <div className="product">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
            {onEdit ? <button onClick={() => onEdit(product)}>Edit</button>: null}
            {onDelete? <button onClick={() => onDelete(product)}>Delete</button>: null}
        </div>
    )
}

export default ProductView;