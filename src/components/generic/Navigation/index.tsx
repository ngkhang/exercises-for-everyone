import { Link, NavLink } from 'react-router-dom';
import Images from '~/utils/helpers/images';

const dataPage = [
  {
    id: 1,
    name: 'home',
    url: '/',
  },
  {
    id: 2,
    name: 'exercises',
    url: '/exercises',
  },
];

function Navigation() {
  return (
    <div className="fixed z-40 bg-slate-100/90 w-full flex justify-center shadow-md lg:shadow-none">
      <div className="w-full md:w-mid lg:w-large flex items-center px-4">
        <Link to="/" className="w-8 lg:w-10 mr-4 inline-block">
          <img src={Images.LOGO} alt="Logo" className="w-full" />
        </Link>
        <div className="flex-grow">
          {
            dataPage.map((item) => (
              <NavLink
                key={item.id}
                to={item.url}
                className="capitalize px-2 py-2 lg:p-4 inline-block ml-4 text-sm lg:text-lg border-b-2 md:border-b-[3px] border-transparent"
              >
                {item.name}
              </NavLink>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Navigation;
