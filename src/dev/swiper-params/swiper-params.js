import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

const swiperParams = {
    people: {
        modules: [Navigation, Pagination, Scrollbar, A11y],
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            },
        },
        spaceBetween: 4,
        slidesPerView: 2,
        navigation: {},
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        onSwiper: (swiper) => console.log(swiper),
        onSlideChange: () => console.log(`slide change`)
    },
    planets: {
        modules: [Navigation, Pagination, Scrollbar, A11y],
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        },
        spaceBetween: 4,
        slidesPerView: 2,
        navigation: {},
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        onSwiper: (swiper) => console.log(swiper),
        onSlideChange: () => console.log(`slide change`)
    },
    starships: {
        modules: [Navigation, Pagination, Scrollbar, A11y],
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 6,
            },
        },
        spaceBetween: 4,
        slidesPerView: 2,
        navigation: {},
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        onSwiper: (swiper) => console.log(swiper),
        onSlideChange: () => console.log(`slide change`)
    },
};

export default swiperParams;