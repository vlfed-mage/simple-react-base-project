import React from 'react';
import { connect } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';

import ProductsCard from '../products/products-card';

import ProductsListContainer from '../../containers/products-list-container';
import swiperParams from '../../dev/swiper-params';

const Slider = (props) => {
    const { category } = props,
    { [category]: items } = props[`${category}List`];

    const params = swiperParams[category];

    return (
        <ProductsListContainer { ...props } >
            <Swiper { ...params } >
                {
                    items?.map((item) => {
                        const { id } = item;
                        return (
                            <SwiperSlide key={ id } >
                                <ProductsCard
                                    item={ item }
                                    category={ category } />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </ProductsListContainer>
    );
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps)(Slider);
