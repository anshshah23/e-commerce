import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "./Context";
import ProductItem from "./ProductItem";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(Context);
  const product = products.find(prod => prod.id === parseInt(id));

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
