import { Fragment, useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
import Header from "./Header";

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( ['HunterxHunter', ...categories]);
    //     setCategories( cats => [...cats, 'HunterxHunter']);
    // }
    
    return(
        <Fragment>
            <Header />
            <div className='container flex flex-col items-center justify-center my-12 p-12 bg-white text-gray-900 antialiased'>
        
                <AddCategory setCategories={ setCategories }/>
                <hr></hr>
                <ol>
                    { 
                        categories.map( category  => (
                            <GifGrid 
                                key = { category }
                                category = { category }
                            />
                        ))
                    }
                </ol>
            </div>
        </Fragment>
    );
}

export default GifExpertApp;