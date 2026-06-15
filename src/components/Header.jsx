function Header({
  setIsOpen,
  cartCount,
  setShowCart,
  cartAnimate,
}) {
  return (
    <>
      <header className="header">
        <img
          src="/amazon-logo.png"
          alt="Amazon Logo"
          className="logo"
        />

        <input
          type="text"
          placeholder="Search products..."
        />

        <nav>
          <button
  className="signin-link"
  onClick={() => setIsOpen(true)}
>
  Sign In
</button>

          <button
  id="cart-button"
  className={`cart-link ${
    cartAnimate ? "cart-bounce" : ""
  }`}
  onClick={() => setShowCart(true)}
>
  🛒 Cart ({cartCount})
</button>
        </nav>
      </header>

      {/* Sirf Menu */}
      <div className="menu-bar">
        <span
          className="menu-category"
          onClick={() => setIsOpen(true)}
        >
          ☰ Menu
        </span>
      </div>
    </>
  );
}

export default Header;