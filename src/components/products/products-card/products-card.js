import React from 'react';

import ImageView from '../../image-view';

const ProductsCard = ({ product, category }) => {

    const { name } = product;

    return (
        <div className='product'>
            {/*<span className='product__image' href='#'>*/}
            {/*    <ImageView*/}
            {/*        product={ product }*/}
            {/*        category={ category } />*/}
            {/*</span>*/}
            <span className='product__name' href='#'>
                { name }
            </span>
        </div>
    );
};

export default ProductsCard;