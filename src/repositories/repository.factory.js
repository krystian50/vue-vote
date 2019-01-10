import FirebaseRepository from './firebase.repository';

const repositories = {
  firebase: FirebaseRepository,
  // other repositories ...
};

const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
