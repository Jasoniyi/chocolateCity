import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

const Carousel = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={2}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
      slide
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 img-fluid"
              src="http://chocolatecitygroup.com/wp-content/uploads/2017/02/chocolate_city_music_artist_10.jpg"
              alt="First slide"
              height="700px"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 img-fluid"
              src="http://chocolatecitygroup.com/wp-content/uploads/2017/02/CC_Distribution.jpg"
              alt="Second slide"
            />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel;
