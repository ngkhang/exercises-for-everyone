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

function VideoCard(Props: PropsVideo) {
  const { className, video } = Props;
  return (
    <div className={`bg-white mb-6 box-border shadow-2xl rounded-lg ${className}`}>
      <div className="mb-2 rounded-t-lg overflow-hidden relative">
        <img src={video.thumbnails[0].url} alt="" className="w-full object-fill rounded-t-lg hover:scale-110 transition-transform duration-200" />
        <span className="absolute right-0 bottom-0 bg-black/30 text-gray-200 px-2 text-xs mb-1 mr-1">{video.lengthText}</span>
      </div>
      <div className="px-3 pb-3">
        <p className="font-semibold text-sm mb-1">{video.title}</p>
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
  );
}

export default VideoCard;
