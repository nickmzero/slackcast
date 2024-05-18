/* eslint-disable react/jsx-key */
import {Button} from 'frames.js/next';
import {frames} from '../../frames';
import {sendSlackChannelMessage} from '../../sendSlackMessage';
import {getCastUrl} from '@/app/utils';

const handleRequest = frames(async (ctx) => {
  return {
    image: <div>Send this cast to Slack!</div>,
    textInput: 'Comment (optional):',
    buttons: [
      <Button action="post" target={{pathname: '/action/frame/send'}}>
        Send
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
