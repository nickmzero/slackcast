import {NextRequest} from 'next/server';
import {frames} from '../frames';
import {ActionMetadata} from 'frames.js';
import {siteUrl} from '@/app/utils/consts';

export const GET = async (req: NextRequest) => {
  const actionMetadata: ActionMetadata = {
    action: {
      type: 'post',
    },
    icon: 'paper-airplane',
    name: 'Slackcast',
    aboutUrl: `${siteUrl}/`,
    description: 'Send casts to Slack channels.',
  };

  return Response.json(actionMetadata);
};

export const POST = frames(async (ctx) => {
  return Response.json({
    type: 'frame',
    frameUrl: `${siteUrl}/frames/action/frame/`,
  });
});
