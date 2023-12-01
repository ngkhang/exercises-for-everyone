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
    <div className="w-full">
      <div className="flex justify-center">
        <div className="w-full md:w-mid lg:w-large">
          <HeroSection />
        </div>
      </div>
      <div className="flex justify-center bg-[#fffafb]">
        <div className="w-full md:w-mid lg:w-large">
          <div id="mainHome" className="py-12 lg:pt-24 px-4 lg:px-0 box-border">
            <h1 className="font-bold text-3xl leading-10 mb-10 text-center lg:text-5xl">{dataPage.title}</h1>
            <Search bodyPartList={bodyPartList} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-mid lg:w-large">
          <div className="mx-6 lg:mb-16">
            <h2 className="font-bold my-8 text-2xl lg:text-4xl lg:my-14">Showing Results</h2>
            <div className="flex flex-wrap mx-5 md:mx-0">
              {
                listData.map((exercise) => (
                  <Card className="mb-6 md:w-1/2 lg:w-1/4 md:px-2 lg:px-4 md:mb-4 lg:mb-8" key={exercise.id} exercise={exercise} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
