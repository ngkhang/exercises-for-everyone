import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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
              <div className="w-full px-4">
                {/* Details Exercise */}
                <div className="flex flex-col items-center mb-10">
                  <div className="w-2/3 mb-4 bg-slate-300">
                    <img src={exercise.gifUrl} alt="Gif Exercise" className="w-full object-cover" />
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold mb-2">{exercise.name}</h1>
                    <p className="mb-5">
                      {
                        `Exercises keep you strong. ${exercise.name} bup is one of the best exercises to target your lats. It will help you improve your mood and gain energy.`
                      }
                    </p>
                    <div className="flex flex-col">
                      {
                        extraDetail.map((item) => (
                          <div key={item} className="flex items-center mb-2">
                            <div className="box-border p-1 mr-4 rounded-full bg-slate-100">
                              <img src={Images[item.toUpperCase() as KeysOfExercise]} alt={exercise[item as KeysOfExercise]} className="w-full h-full p-1" />
                            </div>
                            <span className="capitalize text-sm">{exercise[item as KeysOfExercise]}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>

                {/* Video content */}
                <div className="">
                  {
                    videos.contents && videos.contents.length > 0 && (
                      <>
                        <h2 className="font-bold text-lg mb-6">
                          {'Watch '}
                          <span className="text-primary">{exercise.name}</span>
                          {' exercise videos'}
                        </h2>
                        <div className="flex flex-wrap mx-8">
                          {
                            videos.contents.map(({ video }) => (
                              <VideoCard video={video} />
                            ))
                          }
                        </div>
                      </>
                    )
                  }
                </div>

                {/* Similar Exercises */}
                {
                  exercisesimilar && (
                    <>
                      <div className="mb-5">
                        <h2 className="font-bold text-lg mb-6">
                          {'Similar '}
                          <span className="text-primary">Target Muscle</span>
                          {' exercise'}
                        </h2>
                        <div className="mx-10">
                          {
                            exercisesimilar.targetMuscles && (
                              <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[Pagination]}
                                className="w-full h-full"
                              >
                                {
                                  exercisesimilar.targetMuscles.map((item) => (
                                    <SwiperSlide
                                      className=""
                                    >
                                      <Card exercise={item} />
                                    </SwiperSlide>
                                  ))
                                }
                              </Swiper>
                            )
                          }
                        </div>
                      </div>
                      <div className="mb-5">
                        <h2 className="font-bold text-lg mb-6">
                          {'Similar '}
                          <span className="text-primary">Equipment</span>
                          {' exercise'}
                        </h2>
                        <div className="mx-10">
                          {
                            exercisesimilar.equipments && (
                              <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[Pagination]}
                                className="w-full h-full"
                              >
                                {
                                  exercisesimilar.equipments.map((item) => (
                                    <SwiperSlide
                                      className=""
                                    >
                                      <Card exercise={item} />
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
