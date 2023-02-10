import React from "react";

const ImageView = ({ item, category }) => {
    const imageName = `${ item.name }-image`,
    _bodyImgUrl = 'https://starwars-visualguide.com/assets/img/',

    _extractId = (url) => {
        const regex = /\/([0-9]*)\/$/;
        return url.match(regex)[1];
    },

    getImgUrl = (item, category) => {
        const id = _extractId(item.url)
        const group = category === 'people' ? 'characters' : category;
        return `${_bodyImgUrl}${group}/${id}.jpg`
    },

    onImageError = (e) => {
        e.target.src = require('../../images/dumb-img.svg');
    };

    return (
        <img src={ getImgUrl(item, category) }
             onError={ (e) => onImageError(e) }
             alt= { imageName } />
    )
};

export default ImageView;