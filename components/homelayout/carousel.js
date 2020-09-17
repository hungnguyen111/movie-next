import React from "react";

export default function Carousel() {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./img/ke-du-hanh-15761286853539.jpg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/ccee-15768157060937.jpg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/jumanjii-3-15762073170542.jpg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/last-christ-15762073893342.jpg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/mat-biec-15768091323740.jpg"
            alt="..."
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
