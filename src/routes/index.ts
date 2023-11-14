import HomePage from '~/pages/Home';
import ExercisesPage from '~/pages/Exercises';
import DetailsPage from '~/pages/Details';

const PublicRoutes = [
  {
    id: 1,
    path: '/',
    component: HomePage,
  },
  {
    id: 2,
    path: 'exercises',
    component: ExercisesPage,
  },
  {
    id: 3,
    path: 'exercises/:idExercises',
    component: DetailsPage,

  },
];

export default PublicRoutes;
