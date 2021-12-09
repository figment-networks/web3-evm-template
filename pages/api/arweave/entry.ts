import type {NextApiRequest, NextApiResponse} from 'next';

import {initialize} from 'lib/arweave';

const arweave = initialize();

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<string>,
): Promise<any> {
  try {
    const {data, address} = req.body;

    // Initialize wallet using ARWEAVE_WALLET environmental variable (Tip: Use JSON.parse)

    // Create Arweave transaction passing in data. Documentation can be found here: https://github.com/ArweaveTeam/arweave-js

    // Add tags:
    // - App-Name - APP_NAME environmental variable
    // - Content-Type - Should be application/json
    // - Address - Address of a user
    // Documentation can be found here: https://github.com/ArweaveTeam/arweave-js

    // Sign Arweave transaction with your wallet. Documentation can be found here: https://github.com/ArweaveTeam/arweave-js

    // Post Arweave transaction. Documentation can be found here: https://github.com/ArweaveTeam/arweave-js

    // Return transaction id
    res.status(200).json('<Transaction ID>');
  } catch (error) {
    console.log('ERROR', error);
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error';
    res.status(500).json(errorMessage);
  }
}