const dataPage = {
  subTitle: 'Exercises for Everyone',
  title: 'Made with ❤️ by ngkhang',
  description: 'Check out the most effective exercises personalized to you',
};

function Footer() {
  return (
    <div className="bg-[#fafafa] mt-auto py-4 md:py-6 text-center">
      <p className="font-semibold md:text-lg lg:text-2xl mb-2">{dataPage.subTitle}</p>
      <p className="text-sm lg:text-base italic">{dataPage.title}</p>
    </div>
  );
}

export default Footer;
