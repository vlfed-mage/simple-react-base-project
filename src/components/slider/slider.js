import React, {Children, cloneElement, useEffect, useState} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductsCard from '../products/products-card';
import ProductsListContainer from '../../containers/products-list-container';
import { connect } from 'react-redux';
import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';

const Slider = (props) => {
    const { of: category } = props;
    const { [category]: items, loading, error } = props[`${category}List`];

    return (
        <Swiper
            modules={ [Navigation, Pagination, Scrollbar, A11y] }
            spaceBetween={50}
            slidesPerView={5}
            navigation
            pagination={ { clickable: true } }
            scrollbar={ { draggable: true } }
            onSwiper={ (swiper) => console.log(swiper) }
            onSlideChange={ () => console.log('slide change') } >

            <ProductsListContainer { ...props } >
                {
                    items && items.map((item) => {
                        const { id } = item;
                        return (
                            <SwiperSlide key={ id } >
                                <ProductsCard
                                    item={ item }
                                    category={ category } />
                            </SwiperSlide>
                        )
                    })
                }
            </ProductsListContainer>

        </Swiper>
    );
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps)(Slider);
