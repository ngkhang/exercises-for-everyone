import { Link } from 'react-router-dom';
import Exercise from '~/types/Exercise';

interface PropsCard {
  className?: string,
  exercise : Exercise
}

function Card(Props : PropsCard) {
  const { className = '', exercise } = Props;
  return (
    <div key={exercise.id} className={`w-full ${className}`}>
      <div
        className="flex flex-col bg-slate-50 border-t-4 border-primary box-border shadow-lg hover:shadow-2xl transition-shadow p-4 h-full"
      >
        <Link className="inline-block mb-4" to={`/exercises/${exercise.id}`}>
          <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-full" />
        </Link>
        <div className="capitalize">
          <div className="mb-3 text-xs lg:text-base">
            <span className="bg-green-300 rounded-xl inline-block px-3 mr-2">{exercise.bodyPart}</span>
            <span className="bg-yellow-300 rounded-xl inline-block px-3">{exercise.target}</span>
          </div>
          <p className="font-bold lg:text-lg">{exercise.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
