import VotesRepository from './votes.repository';
import SettingsRepository from './settings.repository';

const repositories = {
  votes: VotesRepository,
  settings: SettingsRepository,
  // other repositories ...
};

const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
