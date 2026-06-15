function Sidebar({ isOpen, setIsOpen, products, setShowCart }) {
  return (
    <>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="user-photo"
          />

          <h3>Welcome</h3>

          <button className="signin-btn">
            Sign In
          </button>
        </div>

        <div className="menu-items">
         <a
  href="#home"
  className="menu-item"
  onClick={() => setIsOpen(false)}
>
  🏠 Home
</a>

          <div
  className="menu-item"
  onClick={() => {
    setShowCart(true);
    setIsOpen(false);
  }}
>
  🛒 Cart
</div>

          <h4>Products</h4>

          {products.map((product) => (
            <a
              key={product.id}
              href={`#product-${product.id}`}
              className="menu-item"
              onClick={() => setIsOpen(false)}
            >
              {product.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;