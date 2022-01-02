import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from 'react';
import { sliderItems } from "../data";


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        let mover = document.querySelector('.slider__wrapper');
        function moveLeft() {
            mover.style.transform = `translateX(${slideIndex == 0 ? -200 : (slideIndex * (-100)) + 100}vw)`;
        }

        function moveRight() {
            mover.style.transform = `translateX(${slideIndex == 2 ? 0 : (slideIndex * (-100)) - 100}vw)`;
        }

        //left click
        if (direction === "left") {
            if (slideIndex === 0) {
                setSlideIndex(2);
            } else {
                setSlideIndex(slideIndex - 1)
            }
            moveLeft()
            //right click
        } else {
            if (slideIndex === 2) {
                setSlideIndex(0);
            } else {
                setSlideIndex(slideIndex + 1)
            }
            moveRight()
        }
    }
    return (
        <div>
            <div className="slider__container">
                <div className="slider__arrow slider__arrow-left" onClick={() => { handleClick('left') }}>
                    <ArrowLeftOutlined />
                </div>
                <div className="slider__wrapper">
                    {sliderItems.map((item) => {
                        return <div className="slider__slide">
                            <div className="slider__imgContainer">
                                <img className="slider__image" src={item.img}></img>
                            </div>
                            <div className="slider__info-container">
                                <h1 className="slider__info-title">{item.title}</h1>
                                <p className="slider__info-desc">{item.desc}</p>
                                <button className="slider__info-btn">SHOP NOW</button>
                            </div>
                        </div>
                    })}



                </div>
                <div className="slider__arrow slider__arrow-right" onClick={() => { handleClick('right') }}>
                    <ArrowRightOutlined />
                </div>
            </div>
        </div>
    )
}

export default Slider
