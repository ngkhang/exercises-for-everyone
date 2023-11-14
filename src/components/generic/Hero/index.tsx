const data = {
  subTitle: 'Exercises for Everyone',
  title: 'Sweat, Smile And Repeat',
  description: 'Check out the most effective exercises personalized to you',
};

function HeroSection() {
  return (
    <div className="py-12 mx-5">
      <p className="text-primary uppercase font-bold text-lg">{data.subTitle}</p>
      <h1 className="uppercase font-bold text-4xl leading-relaxed my-8">
        {data.title}
      </h1>
      <p className="mb-6">
        {data.description}
      </p>
      <a href="#mainHome" className="bg-primary text-stone-100 py-2 px-6 rounded">Explore Exercises</a>
      {/* <span className="">Exercise</span> */}
    </div>
  );
}

export default HeroSection;
