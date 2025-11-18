import Conf from 'conf';

export const config = new Conf({
  projectName: 'cloudos-cli',
  defaults: {
    apiUrl: 'http://localhost:3001/api',
  },
});

