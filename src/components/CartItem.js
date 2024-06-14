import React from "react";

const CartItem = props => {
  const { cartItem, cartKey } = props;

  const navigateToProductDetails = () => {
    window.location.href = `/products/${product.id}`;
  };

  const { product, amount } = cartItem;
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://picsum.photos/200/300"
                alt="Img"
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            <small>{`${amount} in cart`}</small>
          </div>
          <div
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large is-pulled-right"></span>
          </div>
          <button
            className="button is-success is-12 is-pulled-left"
            onClick={navigateToProductDetails}
            style={{ marginRight: "5px" }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;