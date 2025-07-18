import { globalInit } from '../preset';
import { getApis } from '@components/Apis';
import merge from 'lodash/merge';

const apis = merge({}, getApis(), {});

const preset = {
  ajax: async ({ loader, ...props }) => {
    if (!loader && props.url) {
      const { ajax } = await globalInit();
      return ajax({ loader, ...props });
    }
    return Promise.resolve({ data: loader ? { code: 0, data: loader() } : { code: 0, data: {} } });
  },
  apis
};

export default preset;
