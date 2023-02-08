const _bodyImgUrl = 'https://starwars-visualguide.com/assets/img/',

_extractId = (url) => {
    const regex = /\/([0-9]*)\/$/;
    return url.match(regex)[1];
},

getImgUrl = (product, category) => {
    const id = _extractId(product.url)
    const group = category === 'people' ? 'characters' : category;
    return `${_bodyImgUrl}${group}/${id}.jpg`
},

onImageError = (e) => {
    e.target.src = require('../../images/dumb-img.svg');
};

export {
    getImgUrl,
    onImageError
}