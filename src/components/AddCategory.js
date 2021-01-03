import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ( {setCategories} ) =>{

    const [inputValue, setInputValue] = useState('');


    
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats]);
            setInputValue('');
        }
        
    }

    return(
        <>
            <form onSubmit={ handleSubmit} className="container items-center">
                <div className="mb-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center">
                    <input className="w-full bg-transparent text-base focus:outline-none"
                        type="text"
                        value={ inputValue }
                        onChange= { handleInputChange }
                    />
                    <button onClick={ handleSubmit } className="focus:outline-none"><i className="fa fa-plus text-gray-500"></i></button>
                </div>
            </form>
        </>
    );
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}