import guid from '@/utils/guid.util';

const initialState = () => ({
  userId: guid(),
});

export default initialState;
