### Env Vars
```
SITE_URL=<localhost or url of wherever you deploy this, e.g. https://super-cool-slackcast.vercel.app>
SLACK_TOKEN=<slack app api token>
SLACK_CHANNEL=<name of the channel>
ALLOWLISTED_FIDS=<comma separated list of fids that can use this action>
AIRSTACK_API_KEY=<if you don't want to use airstack's hub for validation, use another hub and remove from frames.ts>
```

## Testing Locally
Run the frames.js debugger https://framesjs.org/guides/debugger

Run the dev server:

```bash
npm run dev
```

Go to http://localhost:3000/frames/

To the right of debug, impersonate an allowlisted fid and input the hash (not short hash) and fid of a cast. 

Example:
```
hash: 0x76adb7d1152bce3a7c1793db648455c6cd40ae7a
fid: 3
```

Click 'Debug Install', then 'Run'

## Deploy on Vercel

[Next.js deployment documentation](https://nextjs.org/docs/deployment)
