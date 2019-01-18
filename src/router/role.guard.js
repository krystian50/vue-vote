import store from '@/store/store';

export default function roleGuard(role) {
  return (to, from, next) => {
    if (role !== 'admin' || store.getters['user/superuser']) {
      next();
    } else {
      next({
        name: 'home',
      });
    }
  };
}
