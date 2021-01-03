import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data, loading } = useFetchGifs( category );

    

    return(
        <>
            <h3 className="animate__animated animate__fadeInLeftBig">{ category }</h3>

            { loading && <p>Cargando</p>}

             {
                data.map( img => (
            
                    <GifGridItem 
                        key= {img.id}
                        {...img}
                    />
                ))
            }
        
        </>
    )
}

export default GifGrid;