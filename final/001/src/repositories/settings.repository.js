import HttpService from './http.service';

const resource = '/settings.json';

export default {
  getSettings() {
    return HttpService.get(resource);
  },

  updateSettings(newSettings) {
    return HttpService.patch(resource, newSettings);
  },
};
