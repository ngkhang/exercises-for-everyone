import Images from '~/utils/helpers/images';

const dataPage = {
  subTitle: 'Exercises for Everyone',
  title: 'Sweat, Smile And Repeat',
  description: 'Check out the most effective exercises personalized to you',
};

function HeroSection() {
  return (
    <div className="mx-5 md:mx-0 lg:flex items-center lg:h-screen">
      <div className="pt-16 pb-10 lg:pr-5 lg:w-3/5">
        <p className="text-primary uppercase font-bold text-lg mb-2 lg:mb-5 lg:text-2xl">{dataPage.subTitle}</p>
        <h1 className="uppercase font-bold text-3xl md:text-5xl leading-relaxed mb-10">
          {dataPage.title}
        </h1>
        <p className="mb-5 lg:mb-16">{dataPage.description}</p>
        <a href="#mainHome" className="bg-primary text-stone-100 py-2 lg:py-3 px-8 lg:px-16 rounded-md inline-block">Explore Exercises</a>
        <p className="hidden lg:block text-8xl uppercase font-extrabold lg:mt-2 ml-2 opacity-5">Exercise</p>
      </div>
      <div className="hidden lg:block lg:w-2/5 h-full z-50 box-border">
        <div className="bg-white h-full box-border">
          <img src={Images.BANNER} alt="banner" className="w-full h-full object-cover bg-center" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
