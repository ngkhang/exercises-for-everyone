import { NavLink } from 'react-router-dom';
import Images from '~/utils/helpers/images';

const data = [
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
    <div>
      <div className="flex items-center px-4 py-4">
        <div className="w-8 mr-4">
          <img src={Images.Logo} alt="Logo" className="w-full" />
        </div>
        <div className="flex-grow">
          {
            data.map((item) => (
              <NavLink
                key={item.id}
                to={item.url}
                className="capitalize bg-white px-2 py-1 ml-4 text-base border-b-2 border-hidden"
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
