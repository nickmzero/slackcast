/* eslint-disable react/jsx-key */
import {Button} from 'frames.js/next';
import {frames} from '../../../frames';
import {getCastUrl} from '@/app/utils';
import {sendSlackChannelMessage} from '@/app/frames/sendSlackMessage';
import {ALLOWLISTED_FIDS, SLACK_CHANNEL} from '@/app/utils/consts';

const handleRequest = frames(async (ctx) => {
  const userIsAllowed = ALLOWLISTED_FIDS.some(
    (fid) => fid === ctx.message?.requesterFid?.toString(),
  );

  if (!ctx.message?.isValid || !userIsAllowed) {
    throw new Error('Not authorized');
  }

  const {castId} = ctx.message || {};
  const {fid, hash} = castId || {};

  if (!fid || !hash) {
    // Handle missing cast fid/hash.
    throw new Error('Missing cast fid/hash');
  }

  try {
    const castUrl = await getCastUrl({fid, hash});
    await sendSlackChannelMessage({castUrl, comment: ctx.message?.inputText});

    return {
      image: <div>Cast Sent!</div>,
      buttons: [
        <Button
          action="link"
          target={`https://slack.com/app_redirect?channel=${SLACK_CHANNEL}`}>
          Head to the channel
        </Button>,
      ],
    };
  } catch (err) {
    const errorMessage = (err as Error).message;

    return {
      image: <div>{errorMessage}</div>,
      buttons: [
        <Button action="post" target={{pathname: '/action/frame/'}}>
          Try again
        </Button>,
      ],
    };
  }
});

export const GET = handleRequest;
export const POST = handleRequest;
