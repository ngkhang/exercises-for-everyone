import Card from '~/components/generic/Card';
import HeroSection from '~/components/generic/Hero';
import Search from '~/components/generic/Search';
import { listData, bodyPartList } from '~/data';

const data = {
  subTitle: '',
  title: 'Awesome Exercises You Should Know',
  description: '',
};

function HomePage() {
  return (
    <div>
      <HeroSection />
      <div id="mainHome" className="bg-[#fffafb] py-6 px-4">
        <h1 className="font-bold text-3xl leading-10 mb-10 text-center">{data.title}</h1>
        <Search bodyPartList={bodyPartList} />
      </div>
      <div className="">
        <h2 className="font-bold mb-8 text-2xl">Showing Results</h2>
        <div className="flex flex-wrap mx-6">
          {
            listData.map((exercise) => (
              <Card key={exercise.id} exercise={exercise} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
