import {Block, KnownBlock, WebClient} from '@slack/web-api';
import {SLACK_CHANNEL} from '../utils/consts';

const slack = new WebClient(process.env.SLACK_TOKEN);

export const sendSlackChannelMessage = async ({
  castUrl,
  comment,
}: {
  castUrl: string;
  comment?: string;
}) => {
  try {
    const response = await slack.chat.postMessage({
      channel: SLACK_CHANNEL as string,
      text: `${comment ? `${comment}\n` : ''}${castUrl}`,
      unfurl_links: true,
    });

    if (response.ok) return;

    if (response.error) {
      throw new Error(response.error);
    }
  } catch (err) {
    console.error(err);
    throw new Error(
      `Failed to send message to Slack: ${(err as Error).message}`,
    );
  }
};
