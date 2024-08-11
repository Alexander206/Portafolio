import { useState, useEffect, useRef, useCallback } from "react";
import "./carousel.scss";

const Carousel = ({ images, circular = true }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [slidesToShow, setSlidesToShow] = useState(window.innerWidth > 800 ? 2 : 1);
    const [imageHeight, setImageHeight] = useState(0);
    const trackRef = useRef(null);
    const dotNavRef = useRef(null);
    const imageRef = useRef(null);

    images = images.map((image) => {
        return new URL(`../../assets/proyects/${image}`, import.meta.url).pathname;
    });

    const moveToSlide = useCallback(
        (targetIndex) => {
            setCurrentSlide(Math.min(targetIndex, images.length - slidesToShow));
        },
        [images.length, slidesToShow]
    );

    const updateSlidePosition = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        const slideWidth = track.clientWidth / slidesToShow;
        track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    }, [currentSlide, slidesToShow]);

    useEffect(() => {
        updateSlidePosition();
    }, [currentSlide, updateSlidePosition]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenWidth(width);
            setSlidesToShow(width > 800 ? 2 : 1);
            setCurrentSlide(0); // Reset the slide index when changing slidesToShow

            if (imageRef.current) {
                // Accede a la altura del elemento cuando el componente se monta
                const height = imageRef.current.offsetWidth - imageRef.current.offsetWidth * 0.23;
                setImageHeight(height);
            }
        };

        if (imageRef.current) {
            // Accede a la altura del elemento cuando el componente se monta
            const height = imageRef.current.offsetWidth - imageRef.current.offsetWidth * 0.23;
            setImageHeight(height);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handlePrevClick = useCallback(() => {
        setCurrentSlide((prev) => {
            if (circular) {
                return prev > 0 ? prev - 1 : images.length - slidesToShow;
            } else {
                return Math.max(0, prev - 1);
            }
        });
    }, [images.length, slidesToShow, circular]);

    const handleNextClick = useCallback(() => {
        setCurrentSlide((prev) => {
            if (circular) {
                return (prev + 1) % (images.length - slidesToShow + 1);
            } else {
                return Math.min(images.length - slidesToShow, prev + 1);
            }
        });
    }, [images.length, slidesToShow, circular]);

    return (
        <div
            className="carousel"
            role="region"
            aria-roledescription="carousel"
            aria-live="polite"
            style={{ height: `${imageHeight}px` }}
        >
            <button
                onClick={handlePrevClick}
                aria-label="Previous slide"
                disabled={!circular && currentSlide === 0}
                className={`carousel__button carousel__button--left ${
                    !circular && currentSlide === 0 ? "is-hidden" : ""
                }`}
            >
                &#x276E;
            </button>
            <div className="carousel__track-container">
                <ul className="carousel__track" ref={trackRef}>
                    {images.map((image, index) => (
                        <li
                            key={image}
                            aria-hidden={index < currentSlide || index >= currentSlide + slidesToShow}
                            className={`carousel__slide ${
                                index >= currentSlide && index < currentSlide + slidesToShow ? "current-slide" : ""
                            }`}
                            style={{
                                left: `${(100 / slidesToShow) * index}%`,
                                width: `${100 / slidesToShow}%`,
                            }}
                        >
                            <img ref={imageRef} src={image} alt={`Slide ${index + 1}`} className="carousel__image" />
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={handleNextClick}
                aria-label="Next slide"
                disabled={!circular && currentSlide === images.length - slidesToShow}
                className={`carousel__button carousel__button--right ${
                    !circular && currentSlide === images.length - slidesToShow ? "is-hidden" : ""
                }`}
            >
                &#x276F;
            </button>
            <div ref={dotNavRef} className="carousel__nav">
                {images.map((color, index) => (
                    <button
                        key={color}
                        onClick={() => moveToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index >= currentSlide && index < currentSlide + slidesToShow ? "true" : "false"}
                        className={`carousel__indicator ${
                            index >= currentSlide && index < currentSlide + slidesToShow ? "current-slide" : ""
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
