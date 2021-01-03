import { Fragment } from "react";

const Header = () => {
    return (
        <Fragment>
            
            <nav className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
                
                <div className="flex items-center justify-between mb-4 md:mb-0">
                
                    <h1 className="leading-none text-2xl text-grey-darkest">
                        
                            GifExpertApp

                    </h1>
                
                </div>
            
            </nav>
        
        </Fragment>
        
    );
}

export default Header;