import {getUserDataForFid} from 'frames.js';

export const getCastUrl = async ({fid, hash}: {fid: number; hash: string}) => {
  const {username} = (await getUserDataForFid({fid})) || {};
  if (!username) throw new Error(`Failed to get username for fid ${fid}`);

  return `https://warpcast.com/${username}/${hash}`;
};
