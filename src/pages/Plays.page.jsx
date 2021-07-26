import React from 'react'
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component'

import Poster from "../components/Poster/poster.component"


const Plays = () => {
    return (
        <>
        <div className="container mx-auto px-4">
        
            <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Bengaluru</h2>
            <div className="flex flex-wrap lg:w-3/4">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster src=""
                   title="Theatre Play"
                   subtitle="Telugu"

               /> 
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster src=""
                   title="Theatre Play"
                   subtitle="Telugu"

               /> 
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster src=""
                   title="Theatre Play"
                   subtitle="Telugu"

               /> 
              </div>
               
            </div>
            </div>
            
            
            <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
                <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                <PlaysFilter title="Language" tags={["Tamil","Telugu","English"]} />
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Plays;
