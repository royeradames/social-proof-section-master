import React from "react";
import "./App.scss";
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

      <section className="rate">
        <div className="rate_reviews rate__container">
          <div className="rate__starts">
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
          </div>
          <p className="rate__message">Rated 5 Stars in Reviews</p>
        </div>
        <div className="rate_report_gurux rate__container">
          <div className="rate__starts">
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
          </div>
          <p className="rate__message">Rated 5 Stars in Report Guru</p>
        </div>
        <div className="rate_best_tect rate__container">
          <div className="rate__starts">
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
            <img src={ratingStart} alt="A rating start" />
          </div>
          <p className="rate__message">Rated 5 Stars in BestTech</p>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial__container testimonial__colton_smith ">
          <header className="testimonial__header">
            <img
              src={colton}
              alt="portrait of Colton Smith"
              className="testimonial__img"
            />
            <h2 className="testimonial__name ">Colton Smith</h2>
            <p className="testimonial__verify-buyer">Verified Buyer</p>
          </header>
          <p className="testimonial__message">
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </p>
        </div>

        <div className="testimonial__irene_roberts testimonial__container">
          <header className="testimonial__header">
            <img
              src={irene}
              alt="portrait of Irene Roberts"
              className="testimonial__img"
            />
            <h2 className="testimonial__name">Irene Roberts</h2>
            <p className="testimonial__verify-buyer">Verified Buyer</p>
          </header>
          <p className="testimonial__message">
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </p>
        </div>

        <div className="testimonial__anne_wallance testimonial__container">
          <header className="testimonial__header">
            <img
              src={anne}
              alt="portrait of Anne Wallace"
              className="testimonial__img"
            />
            <h2 className="testimonial__name">Anne Wallace</h2>
            <p className="testimonial__verify-buyer">Verified Buyer</p>
          </header>
          <p className="testimonial__message">
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
