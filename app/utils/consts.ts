export const IS_LOCAL = process.env.MODE === 'local';

export const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';

export const SLACK_CHANNEL = process.env.SLACK_CHANNEL;

export const ALLOWLISTED_FIDS = process.env.ALLOWLISTED_FIDS?.split(',') ?? [];
