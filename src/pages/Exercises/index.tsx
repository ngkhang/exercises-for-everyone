import Card from '~/components/generic/Card';
import Search from '~/components/generic/Search';
import { bodyPartList, listData } from '~/data';

const data = {
  subTitle: '',
  title: 'Awesome Exercises You Should Know',
  description: '',
};

function Exercises() {
  return (
    <div className="w-full">
      <div className="bg-[#ffedf1] flex justify-center">
        <div className="w-full md:w-mid lg:w-large">
          <div className="pt-16 lg:pt-24 pb-8 px-4 md:px-0 py-12 lg:px-0 box-border">
            <h1 className="font-bold text-2xl leading-10 mb-10 text-center lg:text-4xl">{data.title}</h1>
            <Search bodyPartList={bodyPartList} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-mid lg:w-large">
          <div className="mx-6 md:mx-0 lg:mb-16">
            <h2 className="font-bold my-8 text-2xl lg:text-3xl lg:my-14">All Exercises for Everyone</h2>
            <div className="flex flex-wrap mx-8 md:mx-0">
              {
                listData.map((exercise) => (
                  <Card className="mb-6 md:mb-4 lg:mb-8 md:px-2 lg:px-4 md:w-1/2 lg:w-1/4" exercise={exercise} key={exercise.id} />
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Exercises;
