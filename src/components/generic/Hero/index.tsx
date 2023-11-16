import Images from '~/utils/helpers/images';

const dataPage = {
  subTitle: 'Exercises for Everyone',
  title: 'Sweat, Smile And Repeat',
  description: 'Check out the most effective exercises personalized to you',
};

function HeroSection() {
  return (
    <div className="mx-5 mt-10 md:mx-0 lg:mt-0 lg:flex items-center lg:h-screen">
      <div className="py-8 lg:pr-5 lg:w-1/2">
        <p className="text-primary uppercase font-bold text-lg mb-4 lg:text-3xl">{dataPage.subTitle}</p>
        <h1 className="uppercase font-bold text-4xl leading-relaxed mb-6">
          {dataPage.title}
        </h1>
        <p className="mb-12 lg:mb-14">{dataPage.description}</p>
        <a href="#mainHome" className="bg-primary text-stone-100 py-2 lg:py-3 px-8 lg:px-16 rounded-md inline-block">Explore Exercises</a>
        <p className="hidden lg:block text-8xl uppercase font-extrabold lg:mt-2 ml-2 opacity-5">Exercise</p>
      </div>
      <div className="hidden lg:block lg:w-1/2 rounded-br-xl z-50 p-14 box-border">
        <img src={Images.BANNER} alt="banner" className="w-full object-cover rounded-br-xl" />
      </div>
    </div>
  );
}

export default HeroSection;
