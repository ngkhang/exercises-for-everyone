const data = {
  subTitle: 'Exercises for Everyone',
  title: 'Made with ❤️ by ngkhang',
  description: 'Check out the most effective exercises personalized to you',
};

function Footer() {
  return (
    <div className="bg-[#fafafa] py-6 text-center">
      <p className="font-semibold mb-2">{data.subTitle}</p>
      <p className="text-base">{data.title}</p>
    </div>
  );
}

export default Footer;
