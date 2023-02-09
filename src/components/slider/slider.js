import React from 'react';
import { connect } from 'react-redux';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductsCard from '../products/products-card';
import ProductsListContainer from '../../containers/products-list-container';

const Slider = (props) => {
    const { category } = props,
    { [category]: items } = props[`${category}List`];

    return (
        <Swiper
            modules={ [Navigation, Pagination, Scrollbar, A11y] }
            breakpoints={{
                640: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1440: {
                    slidesPerView: 5,
                },
            }}
            spaceBetween={ 16 }
            slidesPerView={ 2 }
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
