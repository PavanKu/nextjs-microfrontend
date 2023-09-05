import type { NextApiRequest, NextApiResponse } from 'next';
import childAppManifest from '@/mock/child-app-manifest.json';
import { ChildConfig } from '@/types/childManifest';

type ChildAppConfig = {
  [key: string]: ChildConfig[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChildConfig[]>
) {
    const childApps:ChildAppConfig = childAppManifest;

    const {path=""} = req.query;
    console.log(`Path requested => ${path}`)
    const base = (path as string).split('/')[1];
    console.log(`base => ${base}`)
    let config:ChildConfig[] = [];
    config = childApps[base];

    res.status(200).json(config||[]);
}
