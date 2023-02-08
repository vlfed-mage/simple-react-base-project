import React from "react";
import { getImgUrl, onImageError } from '../helpers';

const ImageView = ({ product, category }) => {
    const imageName = `${ product.name }-image`;

    return (
        <img src={ getImgUrl(product, category) }
             onError={ (e) => onImageError(e) }
             alt= { imageName } />
    )
};

export default ImageView;