// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Images from '~/utils/helpers/images';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = {
  subTitle: '',
  title: 'Awesome Exercises You Should Know',
  description: '',
};

const bodyPartList = [
  'back',
  'cardio',
  'chest',
  'lower arms',
  'lower legs',
  'neck',
  'shoulders',
  'upper arms',
  'upper legs',
  'waist',
];

const exercises = [
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://api.exercisedb.io/image/WN5xiqDBHQbXbl',
    id: '0001',
    name: '3/4 sit-up',
    target: 'abs',
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://api.exercisedb.io/image/Cu6EO22y5W-Yk6',
    id: '0002',
    name: '45° side bend',
    target: 'abs',
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://api.exercisedb.io/image/9xrz37ENuU-snf',
    id: '0003',
    name: 'air bike',
    target: 'abs',
  },
  {
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'https://api.exercisedb.io/image/4He9hBHMZJHfp1',
    id: '1512',
    name: 'all fours squad stretch',
    target: 'quads',
  },
];

function Search() {
  return (
    <div className="bg-[#fffafb] py-6 px-4">
      <h1 className="font-bold text-3xl leading-10 mb-10 text-center">{data.title}</h1>
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
      {/* List Exercises */}
      <div className="">
        <h2 className="font-bold mb-8 text-2xl">Showing Results</h2>
        <div className="flex flex-col mx-6">
          {
            exercises.map((exercise) => (
              <div key={exercise.id} className="bg-white border-t-4 border-primary p-2 box-border mb-7 shadow-md hover:shadow-2xl transition-shadow">
                <div className="">
                  <img src={exercise.gifUrl} alt="Gif exercise" className="w-full" />
                </div>
                <div className="capitalize">
                  <span className="bg-green-300 rounded-xl inline-block px-4 py-1 mr-2 text-xs">{exercise.bodyPart}</span>
                  <span className="bg-yellow-300 rounded-xl inline-block px-4 py-1 mr-2 text-xs">{exercise.target}</span>
                </div>
                <p className="font-bold">{exercise.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Search;
