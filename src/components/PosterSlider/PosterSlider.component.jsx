import React from 'react'

// components
import Poster from "../Poster/poster.component";

import PosterCarouselSettings from "../../config/PosterCarousel.config";
import Slider from 'react-slick';



export const PosterSlider= (props) => {
  const sliderConfig=props.config ? props.config : PosterCarouselSettings
    return <>

<div className="flex flex-col items-start my-2">
      <h3 className={`text-2xl font-bold${props.isDark ? "text-white" : "text-gray-800"}`}>
        {props.title}
      </h3>
      <p  className={`text-xm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
    </div>
      <Slider {...sliderConfig}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>    
}
export default PosterSlider;