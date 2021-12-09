import type {NextApiRequest, NextApiResponse} from 'next';
import ArDB from 'ardb';
import {DataT} from '@/types';

import {initialize} from 'lib/arweave';

const arweave = initialize();

const getData = async (txId: string) => {
  const buffer = (await arweave.transactions.getData(txId, {
    decode: true,
    string: true,
  })) as string;
  return {
    transactionId: txId,
    buffer: JSON.parse(buffer),
  };
};

export default async function (
  _req: NextApiRequest,
  res: NextApiResponse<DataT[] | string>,
): Promise<any> {
  try {
    const {query} = _req.query;

    // Initialize ArDB
    // More information about ArDB can be found here: https://www.npmjs.com/package/ardb

    // Retrieve searchAddress
    
    // Build tags

    // Search for transaction withs App-Name and Address (optional) tags
    // More information can be found here: https://www.npmjs.com/package/ardb
    const txs = [];

    const promises = txs.map((tx: any) => getData(tx._id));
    const data = await Promise.all(promises);

    res.status(200).json(data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error';
    res.status(500).json(errorMessage);
  }
}
