import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section 
  className="hero">
        <div className="hero-content">
          <h1>Upgrade Your Style with Mellow Caps</h1>
          <p>Premium quality caps for every occasion</p>
          <Link to="/shop" className="btn">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Collection</h2>
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
        <Link to="/shop" className="btn explore-btn">Explore Collection</Link>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose Mellow?</h2>
        <div className="features">
          <div className="feature">
            <h3>✅ Premium Quality</h3>
            <p>Our caps are made from the finest materials.</p>
          </div>
          <div className="feature">
            <h3>🚀 Fast Shipping</h3>
            <p>We deliver your orders quickly and safely.</p>
          </div>
          <div className="feature">
            <h3>💯 Customer Satisfaction</h3>
            <p>Thousands of happy customers trust us.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"Absolutely love my new cap! Great quality and stylish design." – Alex</p>
        </div>
        <div className="testimonial">
          <p>"Fast delivery and amazing product. Highly recommend!" – Sarah</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
