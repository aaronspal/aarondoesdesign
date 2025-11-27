import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './carousel.css';

// Dot Button Component
const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

// Dot Button Hook
const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  };
};

// Main Carousel Component
function Carousel({ images, options = {} }) {
  const defaultOptions = {
    align: 'center',
    loop: true,
    ...options
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  if (!images || images.length === 0) {
    return null;
  }

  const handleSlideClick = (clickedIndex) => {
    if (!emblaApi) return;

    // Calculate if clicked slide is adjacent to current
    const totalSlides = images.length;
    const prevIndex = (selectedIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (selectedIndex + 1) % totalSlides;

    // Only navigate if clicking on adjacent slides
    if (clickedIndex === prevIndex || clickedIndex === nextIndex) {
      emblaApi.scrollTo(clickedIndex);
    }
  };

  return (
    <section className="carousel">
      <div className="carouselViewport" ref={emblaRef}>
        <div className="carouselContainer">
          {images.map((image, index) => (
            <div
              className="carouselSlide"
              key={index}
              onClick={() => handleSlideClick(index)}
              style={{ cursor: index !== selectedIndex ? 'pointer' : 'default' }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carouselSlideImg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="carouselControls">
        <div className="carouselDots">
          {images.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'carouselDot'.concat(
                index === selectedIndex ? ' carouselDotSelected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;