/* eslint-disable react/jsx-props-no-spreading */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperOptions } from 'swiper/types';
import Icons from '~/utils/helpers/icons';

const configSwiper: SwiperOptions = {
  pagination: {
    clickable: true,
  },
  modules: [Navigation, Pagination],
  navigation: true,
  spaceBetween: 10,
  slidesPerView: 3,
  breakpoints: {
    425: {
      spaceBetween: 10,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 60,
      slidesPerView: 4,
    },
  },
};

function Search({ bodyPartList } : {bodyPartList: string[]}) {
  return (
    <>
      <div className="border flex justify-between bg-white rounded mb-8 lg:mb-5 lg:mx-20">
        <input type="text" className="pl-2 lg:pl-4 flex-grow mr-2 py-2 rounded focus:outline-none text-sm lg:text-lg" placeholder="Search Exercises" />
        <button type="button" className="bg-primary px-4 py-1 lg:px-6 rounded text-white text-sm lg:text-lg">Search</button>
      </div>
      <div className="">
        <Swiper
          {...configSwiper}
          className="px-2 w-full max-h-max swiper-container"
        >
          {
            bodyPartList && bodyPartList.map((item) => (
              <SwiperSlide
                className="flex flex-col items-center p-3 my-8 rounded-lg bg-white shadow-lg"
              >
                <div className="mb-3 md:py-2 w-full lg:w-1/2 p-2">
                  <img src={Icons.GYM} alt={Icons.GYM} className="w-full" />
                </div>
                <p className="capitalize text-sm text-center lg:text-base">{item}</p>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  );
}

export default Search;
