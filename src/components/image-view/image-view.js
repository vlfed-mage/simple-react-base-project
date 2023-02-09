import React from "react";

import { getImgUrl, onImageError } from '../helpers';

const ImageView = ({ item, category }) => {
    const imageName = `${ item.name }-image`;

    return (
        <img src={ getImgUrl(item, category) }
             onError={ (e) => onImageError(e) }
             alt= { imageName } />
    )
};

export default ImageView;