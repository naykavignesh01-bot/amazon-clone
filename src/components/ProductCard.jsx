import { useRef } from "react";

function ProductCard({ product, addToCart }) {
  const imageRef = useRef(null);

  return (
    <div className="card" id={`product-${product.id}`}>
      <img ref={imageRef} src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.price}</p>

      <div className="button-group">
        <button className="buy-btn">Buy Now</button>

        <button
          className="cart-btn"
          onClick={() => addToCart(product, imageRef.current)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
