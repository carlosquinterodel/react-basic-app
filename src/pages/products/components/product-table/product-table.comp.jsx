import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';
import './product-table.style.css'


const ProductTable = () => {
    return (
        <div className = "product-table-container">
            <div className="text">
                Name    Price
            </div>
            <ProductCategoryRow text="Sporting Goods"/>
            <ProductRow text="Football	$49.99"/>
            <ProductRow text="Baseball	$9.99"/>
            <ProductRow text="Basketball	$29.99" color="color-red"/>
            <ProductCategoryRow text="Electronics"/>
            <ProductRow text="iPod Touch	$99.99"/>
            <ProductRow text="iPhone 5	$399.99" color="color-red"/>
            <ProductRow text="Nexus 7	$199.99"/>
        </div>
    );
}

export default ProductTable ;