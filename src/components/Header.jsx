function Header({
  setIsOpen,
  cartCount,
  setShowCart,
  cartAnimate,
  search,
  setSearch,
}) {
    return (
    <>
      <header className="header">
        <img src="/amazon-logo.png" alt="Amazon Logo" className="logo" />

        <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

        <nav>
          <button className="signin-link" onClick={() => setIsOpen(true)}>
            Sign In
          </button>

          <button
            id="cart-button"
            className={`cart-link ${cartAnimate ? "cart-bounce" : ""}`}
            onClick={() => setShowCart(true)}
          >
            🛒 Cart ({cartCount})
          </button>
        </nav>
      </header>

      <div className="menu-bar">
        <span className="menu-category" onClick={() => setIsOpen(true)}>
          ☰ Menu
        </span>
      </div>
    </>
  );
}

export default Header;
