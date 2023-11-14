// import { useParams } from 'react-router-dom';
import { listData, videos } from '~/data';
import Images from '~/utils/helpers/images';
import VideoCard from './VideoCard';

function DetailsPage() {
  // const param = useParams();
  const dataExample = listData[0];
  const extraDetail = [
    {
      id: 1,
      icon: Images.BodyPart,
      name: dataExample.bodyPart,
    },
    {
      id: 2,
      icon: Images.Target,
      name: dataExample.target,
    },
    {
      id: 3,
      icon: Images.Equipment,
      name: dataExample.equipment,
    },
  ];

  return (
    <div className="flex">
      <div className="mx-4">
        {/* Detail */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-2/3 mb-4 bg-slate-300">
            <img src={dataExample.gifUrl} alt="Gif Exercise" className="w-full object-cover" />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold mb-2">{dataExample.name}</h1>
            <p className="mb-5">
              {
                `Exercises keep you strong. ${dataExample.name} bup is one of the best exercises to target your lats. It will help you improve your mood and gain energy.`
              }
            </p>
            <div className="flex flex-col">
              {
                extraDetail.map((item) => (
                  <div key={item.id} className="flex items-center mb-2">
                    <div className="box-border p-1 mr-4 rounded-full bg-slate-100">
                      <img src={item.icon} alt={item.name} className="w-full h-full p-1" />
                    </div>
                    <span className="capitalize text-sm">{item.name}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="">
          {
            videos.contents && videos.contents.length > 0 && (
              <>
                <h2 className="font-bold text-lg mb-6">
                  {'Watch '}
                  <span className="text-primary">{dataExample.name}</span>
                  {' exercise videos'}
                </h2>
                <div className="flex flex-wrap mx-8">
                  {
                    videos.contents.map(({ video }) => (
                      <VideoCard video={video} />
                    ))
                  }
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
