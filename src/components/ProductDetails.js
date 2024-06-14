import React from "react";
import { useParams } from "react-router-dom";
import withContext from "../withContext";

const ProductDetails = (props) => {
    const { id } = useParams();
    const product = props.context.products.find((p) => p.id === id);
    if (!product) {
        return (
            <div className="container">
                <div className="notification is-danger">
                    <button className="delete"></button>
                    Product not found.
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-half">
                    <br />
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img
                                    src="https://picsum.photos/200"
                                    alt={product.shortDesc}
                                />
                            </figure>
                        </div>
                        <div className="card-content">
                            <p className="title">{product.name}</p>
                            <p className="subtitle">${product.price}</p>
                            <div className="content">{product.shortDesc}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withContext(ProductDetails);
