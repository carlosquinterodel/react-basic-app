import React from 'react';
import './product-row.style.css'


const ProductRow = (props) => {
    return (
        <div className = {"product-row-container "+props.color}>
            <div className="">
                {props.text}
            </div>
        </div>
        
       // <SearchBar/>
    );
}

export default ProductRow ;