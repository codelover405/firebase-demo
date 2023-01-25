import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { EventItem } from './EventItem';
export const Events = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="events">
      <div className='text-center container'>
      <div className='heading'>
                        <p>Events</p>                       
                        <h4>SHARE <span>YOUR MOMENTS</span> IN OUR RESTAURENT</h4>
   
                    </div>
   <div className='container-fluid' style={{height:"488px",backgroundColor:"black"}}>
                    <Carousel
                     responsive={responsive}
                      swipeable={false}
                      draggable={false}
                      showDots={true}
                      // ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={1000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      // deviceType={this.props.deviceType}
                      dotListClass="custom-dot-list-style"
                      // itemClass="carousel-item-padding-40-px">
  style={{ height: "477px",
   backgroundColor: "black",
   color: "wheat"}}
>
<EventItem/>
              <div>itedmddd</div>
              <div>itedmddd</div>
              <div>itedmddd</div>
  </Carousel>

   </div>
      </div>
    </div>
  )
}
