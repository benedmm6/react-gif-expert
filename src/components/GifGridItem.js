import React from 'react';

const GifGridItem = ( {id, title, url}) => {

    return(
            <div className="md:flex p-4 rounded overflow-hidden shadow-lg m-6 animate__animated animate__fadeInDownBig">
                <div className="md:flex-shrink-0">
                    <img className="rounded-lg md:w-56" src={ url }/>
                </div>

                <div className="mt-4 md:mt-0 md:ml-6">
                    <a href={url} className="uppercase block mt-1 text-lg text-gray-900 hover:underline font-bold">{ title }</a>
                </div>
            </div>

    )
}

export default GifGridItem;