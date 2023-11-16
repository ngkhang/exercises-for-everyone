import { Link } from 'react-router-dom';
import Exercise from '~/types/Exercise';

interface PropsCard {
  className?: string,
  exercise : Exercise
}

function Card(Props : PropsCard) {
  const { className = 'w-full', exercise } = Props;
  return (
    <div className={`${className}`}>
      <div
        key={exercise.id}
        className="bg-white border-t-4 border-primary p-4 box-border mb-7 shadow-md hover:shadow-2xl transition-shadow"
      >
        <div className="p-2">
          <Link to={`/exercises/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} className="w-full" />
          </Link>
        </div>
        <div className="capitalize">
          <span className="bg-green-300 rounded-xl inline-block px-4 py-1 mr-2 text-xs">{exercise.bodyPart}</span>
          <span className="bg-yellow-300 rounded-xl inline-block px-4 py-1 mr-2 text-xs">{exercise.target}</span>
        </div>
        <p className="font-bold my-2 capitalize">{exercise.name}</p>
      </div>
    </div>
  );
}

export default Card;
