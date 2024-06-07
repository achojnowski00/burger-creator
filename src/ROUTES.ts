export default {
  home: '/',
  favorites: '/favorites',
};

export const AppRoutes = {
  home: 'home',
  favorites: 'favorites',
};

export type IAppRoutes = keyof typeof AppRoutes;
