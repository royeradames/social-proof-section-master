import React from "react";
import "./App.css";
import ratingStart from "./images/icon-star.svg";
import colton from "./images/image-colton.jpg";
import irene from "./images/image-irene.jpg";
import anne from "./images/image-anne.jpg";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          10,000+ of our users love our products.
        </h1>
        <p className="header__description">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </header>

      <section className="rate reviews-rate">
        <div className="rate_starts">
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
        </div>
        <p className="rate__message">Rated 5 Stars in Reviews</p>
      </section>
      <section className="report-guru-rate rate">
        <div className="rate_starts">
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
        </div>
        <p className="rate__message">Rated 5 Stars in Report Guru</p>
      </section>
      <section className="rate best-tect-rate">
        <div className="rate_starts">
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
          <img src={ratingStart} alt="A rating start" />
        </div>
        <p className="rate__message">Rated 5 Stars in BestTech</p>
      </section>

      <section className="testimonial testimonial__colton-smith">
        <img
          src={colton}
          alt="portrait of Colton Smith"
          className="testimonial__img"
        />
        <h2 className="testimonial__name">Colton Smith</h2>
        <p className="testimonial__verify-buyer">Verified Buyer</p>
        <p className="testimonial__message">
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </p>
      </section>

      <section className="testimonial testimonial__irene-roberts">
        <img
          src={irene}
          alt="portrait of Irene Roberts"
          className="testimonial__img"
        />
        <h2 className="testimonial__name">Irene Roberts</h2>
        <p className="testimonial__verify-buyer">Verified Buyer</p>
        <p className="testimonial__message">
          "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </p>
      </section>

      <section className="testimonial testimonial__anne-wallance">
        <img
          src={anne}
          alt="portrait of Anne Wallace"
          className="testimonial__img"
        />
        <h2 className="testimonial__name">Anne Wallace</h2>
        <p className="testimonial__verify-buyer">Verified Buyer</p>
        <p className="testimonial__message">
          "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </p>
      </section>
    </>
  );
}

export default App;
