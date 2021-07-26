import React from 'react'
import {FaCcVisa,FaCcApplePay} from "react-icons/fa"
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//config

import TempPosters from "../config/TempPosters.config"
const Movie= () => {
    const settings = {
        infinity: false,
        speed:500,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
          {
            breakpoints: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoints: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              InitialSlide: 1,
            },
          },
          {
            breakpoints: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return <>
        <MovieHero />
        <div className="my-5 container px-4 lg:ml-20 lg:w-2/3" >
        <div className="flex flex-col items-start gap-3">
        <h2 className="text-gray-800 font-bolf text-2xl" >About the movie</h2>
        <p>ajajajdjasbdjbbbbbbbbbbbbbbbbbbbbbbbbbbbajsdjjb asdjsajdas asdjbasjd dasdjsdn dsadasnd</p>
        </div>
        <div className="my-8">
        <hr />
        </div>

        <div className="my-8">

            <h2 className="text-gray-800 font-bolf text-2xl mb-3" >Applicable Offers</h2>
           <div className="flex flex-col gap-3">
           <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8 text-blue">
              <FaCcVisa className="w-full h-full"/>
              </div>
              <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                  <p className="text-gray-600">Sd sdfdsfs dfsdfs fs sd fsdf sdf f sd fsdf  sdfs f sd sf</p>
                  
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8 text-blue">
              <FaCcApplePay className="w-full h-full"/>
              </div>
              <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-bold">Filmi Pass</h3>
                  <p className="text-gray-600">Sd sdfdsfs dfsdfs fs sd fsdf sdf f sd fsdf  sdfs f sd sf</p>
                  
              </div>
            </div>
           </div>
        </div>
        </div>

        <div className="my-8">
        <h2 className="text-gray-800 font-bolf text-2xl mb-3" >Applicable Offers</h2>
        <div className="flex flex-wrap gap-4">
            <Cast image="" castName="Henry Cavil" role="Superman"/>
        </div>
        <div>
            <Cast image="" castName="Henry Cavil" role="Superman"/>
        </div>
        <div>
            <Cast image="" castName="Henry Cavil" role="Superman"/>
        </div>
        </div>
        
        <div className="my-8">
        <PosterSlider
        config={settings}
         images={TempPosters} title="You Might Also Like" isDark={false}/>
        </div>

        <div className="my-8">
        <PosterSlider
        config={settings}
         images={TempPosters} title="BMS XCLUSIVE" isDark={false}/>
        </div>

      

    </>
}

export default Movie;
