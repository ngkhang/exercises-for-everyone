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
      <div className="bg-[#fffafb] py-6 px-4">
        <h1 className="font-bold text-3xl leading-10 mb-10 text-center">{data.title}</h1>
        <Search bodyPartList={bodyPartList} />
      </div>
      <div className="mx-6">
        <h2 className="font-bold mb-8 text-2xl">All Exercises for Everyone</h2>
        <div className="flex flex-wrap mx-8">
          {
            listData.map((exercise) => (
              <Card exercise={exercise} key={exercise.id} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Exercises;
