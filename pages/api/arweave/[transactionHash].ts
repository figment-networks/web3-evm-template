import type {NextApiRequest, NextApiResponse} from 'next';

import {GetTransactionRespT, PostTagsT, TransactionStatusE} from '@/types';
import {MIN_NUMBER_OF_CONFIRMATIONS} from '@/constants';

import {initialize} from 'lib/arweave';

const arweave = initialize();

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<GetTransactionRespT | string>,
): Promise<any> {
  try {
    const {transactionHash} = req.query;

    // Get Arweave transaction data. Documentation can be found here: https://github.com/ArweaveTeam/arweave-js

    // Get Arweave transaction status. Documentation can be found here: https://github.com/ArweaveTeam/arweave-js
    const txStatus = undefined;

    if (txStatus === TransactionStatusE.CONFIRMED) {
      // Get Arweave transaction. Documentation can be found here: https://github.com/ArweaveTeam/arweave-js

      // Get Arweave transaction tags. Documentation can be found here: https://github.com/ArweaveTeam/arweave-js

      // Get Arweave transaction block in order to retrieve timestamp. Documentation can be found here: https://github.com/ArweaveTeam/arweave-js

      // Return JSON response in form:
      // res.status(200).json({
      //   id: transactionHash as string,
      //   data: txData,
      //   status: txStatus,
      //   timestamp: block?.timestamp,
      //   tags,
      // });
    } else {
      res.status(200).json({
        id: transactionHash as string,
        data: txData,
        status: txStatus,
      });
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error';
    res.status(500).json(errorMessage);
  }
}
