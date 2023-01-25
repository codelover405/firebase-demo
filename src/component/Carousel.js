import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Assets/landing.scss'
const CarouselSlider = () => {
    const imagescollection = [
        {
            id: 1,
            image: require("../Assets/pictures/foodpic1.png"),
        },
        {
            id: 2,
            image: require("../Assets/pictures/food2.png"),
        },
        {
            id: 3,
            image: require("../Assets/pictures/food3.png"),
        },
        {
            id: 4,
            image: require("../Assets/pictures/food4.png"),
        }, {
            id: 5,
            image: require("../Assets/pictures/food5.png"),
        }, {
            id: 6,
            image: require("../Assets/pictures/food6.png"),
        }
    ]

    return (
        <>
        <div className='carousel'>

            <Carousel swipeable={false}
                transitionDuration={2000}
                backdrop="static"
                //    fade
                variant="dark"
                interval={2000}
                keyBoardControl={true}
                autoplayHoverPause={false}
            >
                <Carousel.Item>
                    <iframe
                        src="https://www.youtube.com/embed/LXb3EKWsInQ"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <iframe
                        src="https://www.youtube.com/embed/LXb3EKWsInQ"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />
                </Carousel.Item>
                {imagescollection.map((item) => {
                    return (
                        <Carousel.Item>
                            <img
                                src={item.image}
                                alt="nfosfn"
                                className="slider-img"
                                key="{item}"
                            // style={{ width: "100%", height: 'auto' }}
                            ></img>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
        </>
    )
}

export default CarouselSlider