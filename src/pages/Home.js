import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/hero1.jpg",
      title: "Elevate Your Look with Mellow Caps",
      text: "Premium, stylish, and comfortable caps for every occasion.",
      link: "/shop",
      btnText: "Shop Now",
    },
    {
      image: "/images/hero2.jpg",
      title: "Discover Our New Collection",
      text: "Trendy designs to match your unique style.",
      link: "/shop",
      btnText: "Explore Now",
    },
    {
      image: "/images/hero3.jpg",
      title: "Comfort Meets Style",
      text: "Perfect caps for every season and occasion.",
      link: "/shop",
      btnText: "Browse Now",
    },
  ];

  // ✅ Use useCallback to prevent re-creation of nextSlide on every render
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide]); // ✅ No ESLint warning now

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="home">
      {/* Hero Section - Carousel */}
      <section className="hero">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <Link to={slide.link} className="btn">
                  {slide.btnText}
                </Link>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button className="prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="next" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>🔥 Featured Collection</h2>
        <div className="featured-products">
          <div className="product-card">
            <img src="/images/cap1.jpg" alt="Classic Cap" />
            <h3>Classic Cap</h3>
            <p>$20</p>
          </div>
          <div className="product-card">
            <img src="/images/cap2.jpg" alt="Sporty Cap" />
            <h3>Sporty Cap</h3>
            <p>$25</p>
          </div>
          <div className="product-card">
            <img src="/images/cap3.jpg" alt="Luxury Cap" />
            <h3>Luxury Cap</h3>
            <p>$30</p>
          </div>
        </div>
        <Link to="/shop" className="btn explore-btn">
          Explore Collection
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Mellow?</h2>
        <div className="features">
          <div className="feature">
            <h3>✨ Premium Quality</h3>
            <p>Our caps are crafted with the finest materials for maximum comfort and durability.</p>
          </div>
          <div className="feature">
            <h3>🚀 Fast & Reliable Shipping</h3>
            <p>We ensure quick and secure delivery for a seamless shopping experience.</p>
          </div>
          <div className="feature">
            <h3>🌟 100% Customer Satisfaction</h3>
            <p>We are trusted by thousands of happy customers worldwide.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"Absolutely love my new cap! The quality is amazing, and it looks great!" – Alex</p>
        </div>
        <div className="testimonial">
          <p>"Super fast delivery and top-notch quality. Highly recommended!" – Sarah</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
