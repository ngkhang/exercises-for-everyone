import Video from '~/types/Video';

interface PropsVideo {
  className ?: string,
  video: Video,
}

const formatViewCount = (str: string) => {
  const [count, text] = str.split(' ');
  return `
    ${count.split(',')[0]}
    ${count.split(',')[1] ? 'N' : ''}
    ${text}`;
};

function VideoCard({ video, className = '' }: PropsVideo) {
  // const { className, video } = Props;
  return (
    <div className={`w-full mb-6 ${className}`}>
      <div className="bg-white box-border shadow-2xl rounded-lg rounded-tl-3xl">
        <div className="mb-2 rounded-tl-3xl rounded-tr-lg overflow-hidden relative">
          <img src={video.thumbnails[0].url} alt="" className="w-full object-fill hover:scale-110 transition-transform duration-200" />
          <span className="absolute right-0 bottom-0 bg-black/30 text-gray-200 px-2 text-xs mb-1 mr-1">{video.lengthText}</span>
        </div>
        <div className="px-3 pb-3">
          <p className="font-semibold text-sm mb-1 md:line-clamp-1">{video.title}</p>
          <p className="text-xs font-semibold text-gray-600">{video.channelName}</p>
          <div className="text-xs text-slate-800/60">
            <span className="">
              {`${formatViewCount(video.viewCountText)}`}
            </span>
            <span className="mx-2">•</span>
            <span className="">
              {video.publishedTimeText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
