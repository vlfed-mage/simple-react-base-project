import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import storeServices from '../../dev/services';
import * as actions from '../../dev/actions';

import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';
import ProductCard from '../products/products-card'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = (props) => {
    const { getCollection } = storeServices();
    const { of: category, dataLoaded, dataRequested, dataError } = props;
    const { [category]: products, loading, error } = props[`${category}List`];

    useEffect(() => {
        dataRequested(category);
        getCollection(category)
            .then((response) => dataLoaded(category, response))
            .catch((e) => dataError(category, e))
    }, []);

    if (loading) {
        return <LoadingIndicator />
    }

    if (error) {
        return <ErrorIndicator />
    }

    const productsList = products.map((product) => {
        const { id } = product;
        return (
            <SwiperSlide key={ id }>
                <ProductCard
                    product={ product }
                    category={ category }/>
            </SwiperSlide>
        )
    });

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')} >

            { productsList }

        </Swiper>
    );
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps, actions)(Slider);