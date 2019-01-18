import { USER_ID, SUPERUSER } from '@/store/getters.types';

export default {
  [USER_ID]: state => state.userId,
  [SUPERUSER]: state => state.superuser,
};
