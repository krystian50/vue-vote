import guid from '@/utils/guid.util';

const initialState = () => ({
  userId: guid(),
  superuser: false,
});

export default initialState;
