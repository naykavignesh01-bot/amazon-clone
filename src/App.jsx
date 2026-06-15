import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import products from "./data/products";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [items] = useState(products);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartAnimate, setCartAnimate] = useState(false);
  const addToCart = (product, imageElement) => {
  const alreadyExists = cart.find(
    (item) => item.id === product.id
  );

  if (alreadyExists) {
    alert("This product is already in your cart!");
    return;
  }

  const cartButton = document.getElementById("cart-button");

  if (cartButton && imageElement) {
    const productRect =
      imageElement.getBoundingClientRect();

    const cartRect =
      cartButton.getBoundingClientRect();

    const clone = imageElement.cloneNode(true);

    clone.style.position = "fixed";
    clone.style.left = `${productRect.left}px`;
    clone.style.top = `${productRect.top}px`;
    clone.style.width = `${productRect.width}px`;
    clone.style.height = `${productRect.height}px`;
    clone.style.zIndex = "9999";
    clone.style.transition = "all 0.8s ease-in-out";

    document.body.appendChild(clone);

    setTimeout(() => {
      clone.style.left = `${cartRect.left}px`;
      clone.style.top = `${cartRect.top}px`;
      clone.style.width = "30px";
      clone.style.height = "30px";
      clone.style.opacity = "0.3";
    }, 10);

    setTimeout(() => {
      document.body.removeChild(clone);

      setCart((prev) => [...prev, product]);
    }, 800);
  } else {
    setCart((prev) => [...prev, product]);
  }
};

const removeFromCart = (id) => {
  setCart((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

body {
  background-color: #e3e6e6;
}

.grid {
  background-color: transparent;
}

        .header{
          background:#131921;
          color:white;
          padding:15px 30px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:15px;
        }

.header input {
  flex: 1;
  max-width: 500px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
}

  .logo {
  width: 120px;
  height: auto;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -320px;
  width: 300px;
  height: 100%;
  background: white;
  transition: 0.4s;
  z-index: 1000;
  overflow-y: auto;
}

.sidebar.open {
  left: 0;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: none;
  z-index: 999;
}

.overlay.show {
  display: block;
}

.sidebar-header {
  background: #131921;
  color: white;
  text-align: center;
  padding: 30px 20px;
}

.user-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.signin-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background: #ffd814;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.menu-items {
  padding: 20px;
}

.menu-item {
  display: block;
  padding: 12px;
  margin: 10px 0;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
}

.menu-item:hover {
  background: #464ffd;
  transform: translateX(8px);
}

        nav{
          display:flex;
          gap:20px;
        }

        nav a{
          color:white;
          text-decoration:none;
        }

        .banner {
  position: relative;
}

.banner img {
  width: 100%;
  height: 350px;
  object-fit: contain;
  background: #e3e6e6;
  display: block;
}

.banner-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: #333;
  border: none;
  font-size: 60px;
  cursor: pointer;
  padding: 0 10px;
  transition: 0.3s;
}

.banner-btn:hover {
  color: black;
  transform: translateY(-50%) scale(1.1);
}

.banner-btn.left {
  left: 15px;
}

.banner-btn.right {
  right: 15px;
}

        .grid{
  padding:30px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.signin-link {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.signin-link:hover {
  color: #ffd814;
}
  
.menu-bar {
  background: #131921;
  padding: 8px 20px;
}

.menu-category {
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}

.menu-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
}

.menu-btn:hover {
  color: #ffd814;
}

.remove-btn {
  margin-top: 8px;
  padding: 6px 12px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn:hover {
  opacity: 0.8;
}

.cart-link {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.cart-bounce {
  animation: shakeCart 1s ease;
}

@keyframes shakeCart {
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1.4) rotate(-12deg);
  }

  40% {
    transform: scale(1.2) rotate(12deg);
  }

  60% {
    transform: scale(1.3) rotate(-8deg);
  }

  80% {
    transform: scale(1.1) rotate(5deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
}

@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2,1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

        .card {
  background: white;
  border: none;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

        .card img{
          width:100%;
          height:200px;
          object-fit:cover;
        }

        .button-group {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.buy-btn,
.cart-btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.buy-btn {
  background: #ff9900;
}

.buy-btn:hover {
  background: #fcab32;
}

.cart-btn {
  background: #ffd814;
}

.cart-btn:hover {
  background: #fadf6a;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}

.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background: white;
  z-index: 1001;
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 15px rgba(0,0,0,0.2);
}

.cart-item {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  align-items: center;
}

.cart-item img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
}

.close-cart {
  width: 100%;
  padding: 12px;
  background: #ffd814;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

        .footer{
          background:#131921;
          color:white;
          text-align:center;
          padding:20px;
        }
      `}</style>

<Header
  setIsOpen={setIsOpen}
  cartCount={cart.length}
  setShowCart={setShowCart}
  cartAnimate={cartAnimate}
/>

<Sidebar
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  products={items}
  setShowCart={setShowCart}
/>

      <div id="home">
  <Banner />
</div>

      <div className="grid">
  {items.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      addToCart={addToCart}
    />
  ))}
</div>

{showCart && (
  <>


    <div className="cart-sidebar">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div>
  <h4>{item.name}</h4>
  <p>{item.price}</p>

  <button
    className="remove-btn"
    onClick={() => removeFromCart(item.id)}
  >
    Remove
  </button>
</div>
          </div>
        ))
      )}

      <button
        className="close-cart"
        onClick={() => setShowCart(false)}
      >
        Close
      </button>
    </div>
  </>
)}

<Footer />
    </>
  );
}

export default App;