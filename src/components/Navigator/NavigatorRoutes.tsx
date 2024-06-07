import ROUTES from 'src/ROUTES';

import HeartIcon from 'assets/heart-icon.svg';
import HomeIcon from 'assets/home-icon.svg';

export type INavigatorRoute = {
  path: string;
  title: string;
  icon: React.ReactNode;
};

export const NavigatorRoutes: INavigatorRoute[] = [
  {
    path: ROUTES.home,
    title: 'Create Your Burger',
    icon: <img src={HomeIcon} alt="Home Icon" />,
  },
  {
    path: ROUTES.favorites,
    title: 'Your Favuorite  Burgers',
    icon: <img src={HeartIcon} alt="Home Icon" />,
  },
];
