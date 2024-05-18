import {createFrames} from 'frames.js/next';
import {farcasterHubContext} from 'frames.js/middleware';

import {IS_LOCAL} from '../utils/consts';

export const frames = createFrames({
  basePath: '/frames',
  middleware: [
    // Using airstack for validation.
    farcasterHubContext({
      hubHttpUrl: IS_LOCAL
        ? 'http://localhost:3010/hub'
        : 'https://hubs.airstack.xyz',
      hubRequestOptions: IS_LOCAL
        ? undefined
        : {
            headers: {
              'x-airstack-hubs': process.env.AIRSTACK_API_KEY as string,
            },
          },
    }),
  ],
});
