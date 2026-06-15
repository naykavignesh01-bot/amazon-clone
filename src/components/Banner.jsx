import { useState } from "react";

function Banner() {
  const banners = [
    "/image/banner1.jpg",
    "/image/banner2.jpg",
    "/image/banner3.jpg",
    "/image/banner4.jpg",
    "/image/banner5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextBanner = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
  <div className="banner">
    <button
      className="banner-btn left"
      onClick={prevBanner}
    >
      &#10094;
    </button>

    <img
      src={banners[current]}
      alt={`Banner ${current + 1}`}
    />

    <button
      className="banner-btn right"
      onClick={nextBanner}
    >
      &#10095;
    </button>
  </div>
);
}

export default Banner;