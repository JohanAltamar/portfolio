import React, { useState } from "react"
import PropTypes from "prop-types"
import "./styles/portfolioProjectCarousel.css"

const PortfolioProjectCarousel = ({ images, orientation }) => {
  const [slideIndex, setSlideIndex] = useState(1)

  const plusSlides = step => {
    setSlideIndex(index => {
      if (index + step > images.length) {
        return 1
      } else if (index + step < 1) {
        return images.length
      }
      return index + step
    })
  }

  const currentSlide = slide => {
    setSlideIndex(slide)
  }

  return (
    <>
      <div className={`slideshow-container-${orientation}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`mySlides fade ${
              slideIndex === index + 1 ? "block" : "none"
            }`}
          >
            <div className="numbertext">
              {index + 1} / {images.length}
            </div>
            <img src={image.url} alt={image.title} />
            <div className="text">{image.title}</div>
          </div>
        ))}

        <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        {images.map((image, idx) => (
          <button
            key={idx}
            className={`dot ${slideIndex === idx + 1 ? "active" : undefined}`}
            aria-label={`Image ${idx + 1}`}
            onClick={() => currentSlide(idx + 1)}
          ></button>
        ))}
      </div>
    </>
  )
}

PortfolioProjectCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired,
}

export default PortfolioProjectCarousel
