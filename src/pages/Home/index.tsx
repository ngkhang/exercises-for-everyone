import Card from '~/components/generic/Card';
import HeroSection from '~/components/generic/Hero';
import Search from '~/components/generic/Search';
import { listData, bodyPartList } from '~/data';

const dataPage = {
  subTitle: '',
  title: 'Awesome Exercises You Should Know',
  description: '',
};

function HomePage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-mid lg:w-large">
        <HeroSection />
        <div id="mainHome" className="bg-[#fffafb] py-6 px-4 box-border">
          <h1 className="font-bold text-3xl leading-10 mb-10 text-center lg:pt-20 lg:text-5xl">{dataPage.title}</h1>
          <Search bodyPartList={bodyPartList} />
        </div>
        <div className="mx-6 lg:mx-0 lg:mb-16">
          <h2 className="font-bold mb-8 text-2xl lg:text-4xl lg:mb-14">Showing Results</h2>
          <div className="flex flex-wrap mx-8 lg:m-0">
            {
              listData.map((exercise) => (
                <Card className="lg:w-1/4 lg:px-5" key={exercise.id} exercise={exercise} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
