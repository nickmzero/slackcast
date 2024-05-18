/* eslint-disable react/jsx-key */
import {Button} from 'frames.js/next';
import {frames} from './frames';
import {siteUrl} from '@/app/utils/consts';

function constructCastActionUrl(params: {url: string}): string {
  const baseUrl = 'https://warpcast.com/~/add-cast-action';
  const urlParams = new URLSearchParams({
    url: params.url,
    name: 'Slackcast',
    /** An [Octicons](https://primer.style/foundations/icons) icon name. */
    icon: 'paper-airplane',
    aboutUrl: `${siteUrl}/`,
    description: 'Send casts to Slack channels.',
  });

  return `${baseUrl}?${urlParams.toString()}`;
}

const handleRequest = frames(async (ctx) => {
  const installActionUrl = constructCastActionUrl({
    url: `${siteUrl}/frames/action`,
  });

  return {
    image: (
      <div>{`Install the "Slackcast" action to send casts to your slack channels.`}</div>
    ),
    buttons: [
      <Button action="link" target={installActionUrl}>
        Install
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
