// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Images from '~/utils/helpers/images';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Search({ bodyPartList } : {bodyPartList: string[]}) {
  return (
    <div className="">
      {/* Search Input */}
      <div className="border flex justify-between bg-white rounded">
        <input type="text" className="pl-2 flex-grow mr-2 py-2 focus:outline-none text-sm" placeholder="Search Exercises" />
        <button type="button" className="bg-primary px-4 py-1 rounded text-white text-sm">Search</button>
      </div>
      {/* Swipper */}
      <div className="py-8">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          navigation
          className="w-full h-full swiper-container"
        >
          {
            bodyPartList.map((item) => (
              <SwiperSlide
                className="flex flex-col items-center p-6 rounded-lg bg-slate-50"
              >
                <div className="mb-2">
                  <img src={Images.Logo} alt="Iconms" className="w-full h-full object-cover" />
                </div>
                <p className="capitalize text-sm">{item}</p>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default Search;
