import {fetchMetadata} from 'frames.js/next';
import {siteUrl} from './consts';

export async function generateMetadata() {
  return {
    title: 'Slackcast',
    other: {
      ...(await fetchMetadata(
        // provide a full URL to your /frames endpoint
        new URL('/frames', siteUrl),
      )),
    },
  };
}

export default async function Page() {
  return (
    <div className="w-full bg-black text-white flex justify-center h-[100vh]">
      slackcast
    </div>
  );
}
