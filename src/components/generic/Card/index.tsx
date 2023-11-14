import { Link } from 'react-router-dom';
import Exercise from '~/types/Exercise';

interface PropsCard {
  className?: string,
  exercise : Exercise
}

function Card(Props : PropsCard) {
  const { className = 'w-full', exercise } = Props;
  return (
    <div
      key={exercise.id}
      className={`bg-white border-t-4 border-primary p-2 box-border mb-7 shadow-md hover:shadow-2xl transition-shadow ${className}`}
    >
      <div className="">
        <Link to={`/exercises/${exercise.id}`}>
          <img src={exercise.gifUrl} alt="Gif exercise" className="w-full" />
        </Link>
      </div>
      <div className="capitalize">
        <span className="bg-green-300 rounded-xl inline-block px-4 py-1 mr-2 text-xs">{exercise.bodyPart}</span>
        <span className="bg-yellow-300 rounded-xl inline-block px-4 py-1 mr-2 text-xs">{exercise.target}</span>
      </div>
      <p className="font-bold">{exercise.name}</p>
    </div>
  );
}

export default Card;
