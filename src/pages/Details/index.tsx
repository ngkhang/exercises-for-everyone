/* eslint-disable react/jsx-props-no-spreading */

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { listData, videos } from '~/data';
import Images from '~/utils/helpers/images';
import VideoCard from './VideoCard';

import 'swiper/css';
import 'swiper/css/pagination';
import Card from '~/components/generic/Card';
import Exercise from '~/types/Exercise';
import Exercises from '../Exercises';
import Loader from '~/components/generic/Loader';

interface ExerciseSimilar<T> {
  targetMuscles : T[],
  equipments: T[],
}

type KeysOfExercise = keyof typeof Exercises;

const configSwiper: SwiperOptions = {
  pagination: {
    clickable: true,
  },
  modules: [Pagination],
  spaceBetween: 40,
  slidesPerView: 1,
  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
};

function DetailsPage() {
  const findExercisesSimilar = (obj: Exercise) => {
    const targetMuscles = listData.filter((item) => (
      item.bodyPart === obj.bodyPart
      || item.equipment === obj.target
    ));
    const equipments = listData.filter((item) => (
      item.equipment === obj.equipment
    ));
    return {
      targetMuscles,
      equipments,
    };
  };

  const [isLoading, setLoading] = useState(true);
  const [exercise, setExercise] = useState<Exercise>();
  const [exercisesimilar, setExercisesSimilar] = useState<ExerciseSimilar<Exercise>>();
  const extraDetail = ['bodyPart', 'target', 'equipment'];

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setExercise(listData[0]);
      setLoading(false);
    }, 2000);

    if (exercise) setExercisesSimilar(findExercisesSimilar(exercise));

    return () => clearTimeout(idTimeOut);
  }, [exercise]);

  return (
    <div className="w-full flex justify-center items-center">
      {
        isLoading === false
          ? (
            exercise !== undefined && (
              <div className="w-full flex justify-center">
                <div className="w-full md:w-mid lg:w-large px-4 md:px-0 mb-8 md:mb-10">
                  {/* Details Exercise */}
                  <div className="lg:flex items-center lg:pt-20">
                    <div className="lg:w-1/2 mb-4 lg:mb-0 pt-12 lg:p-0 lg:pr-12">
                      <div className="flex justify-center">
                        <img src={exercise.gifUrl} alt={exercise.name} className="w-1/2 lg:w-2/3 object-cover" />
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <h1 className="font-bold text-2xl leading-10 mb-5 text-center lg:text-4xl">{exercise.name}</h1>
                      <div className="flex flex-col md:flex-row lg:flex-col">
                        <p className="md:w-3/5 lg:w-full mb-5 md:mb-0 lg:mb-4 md:pr-4 lg:p-0">
                          {
                            `Exercises keep you strong. ${exercise.name} bup is one of the best exercises to target your lats. It will help you improve your mood and gain energy.`
                          }
                        </p>

                        <div className="md:w-2/5 lg:w-full flex flex-wrap">
                          {
                            extraDetail.map((item) => (
                              <div key={item} className=" w-1/2 md:w-full lg:w-1/2 px-2 py-1 flex items-center mb-2">
                                <div className="box-border p-1 md:p-2 mr-3 rounded-full bg-slate-100">
                                  <img src={Images[item.toUpperCase() as KeysOfExercise]} alt={exercise[item as KeysOfExercise]} className="w-full h-full p-1" />
                                </div>
                                <span className="capitalize text-sm w-full bg-white">{exercise[item as KeysOfExercise]}</span>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video content */}
                  {
                    videos.contents && videos.contents.length > 0 && (
                      <div>
                        <h2 className="font-bold mt-8 mb-4 text-2xl lg:text-4xl lg:mt-12 lg:mb-8">
                          {'Watch '}
                          <span className="text-primary">{exercise.name}</span>
                          {' exercise videos'}
                        </h2>
                        <div className="flex flex-wrap mx-5 md:mx-0">
                          {
                            videos.contents.map(({ video }) => (
                              <VideoCard className="md:w-1/2 lg:w-1/3 md:px-2" video={video} />
                            ))
                          }
                        </div>
                      </div>
                    )
                  }

                  {/* Similar Exercises */}
                  {
                    exercisesimilar && (
                      <>
                        <div className="mb-5">
                          <h2 className="font-bold mt-8 mb-2 text-2xl lg:text-4xl lg:mt-12 lg:mb-8">
                            {'Similar '}
                            <span className="text-primary">Target Muscle</span>
                            {' exercise'}
                          </h2>
                          <div className="mx-4 md:mx-0">
                            {
                              exercisesimilar.targetMuscles && (
                                <Swiper
                                  {...configSwiper}
                                  className="px-2 w-full max-h-max swiper-container"
                                >
                                  {
                                    exercisesimilar.targetMuscles.map((item) => (
                                      <SwiperSlide
                                        className="mt-4 mb-8 md:my-8 flex flex-col items-center"
                                      >
                                        <Card className="h-full" exercise={item} />
                                      </SwiperSlide>
                                    ))
                                  }
                                </Swiper>
                              )
                            }
                          </div>
                        </div>
                        <div>
                          <h2 className="font-bold mt-8 mb-4 text-2xl lg:text-4xl lg:mt-12 lg:mb-8">
                            {'Similar '}
                            <span className="text-primary">Equipment</span>
                            {' exercise'}
                          </h2>
                          <div className="mx-4 md:mx-0">
                            {
                              exercisesimilar.equipments && (
                                <Swiper
                                  {...configSwiper}
                                  className="px-2 w-full max-h-max swiper-container"
                                >
                                  {
                                    exercisesimilar.equipments.map((item) => (
                                      <SwiperSlide
                                        className="mt-4 mb-8 md:my-8 flex flex-col items-center"
                                      >
                                        <Card className="h-full" exercise={item} />
                                      </SwiperSlide>
                                    ))
                                  }
                                </Swiper>
                              )
                            }
                          </div>
                        </div>
                      </>
                    )
                  }
                </div>

              </div>
            )
          )
          : (
            <Loader />
          )
      }
    </div>
  );
}

export default DetailsPage;
