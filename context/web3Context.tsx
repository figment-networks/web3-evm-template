import React, {createContext, useCallback, useState} from 'react';
import {ethers} from 'ethers';
import {MirrorClone, MirrorClone__factory} from '@/typechain';
import {JsonRpcProvider} from '@ethersproject/providers';

declare let window: {
  ethereum: ethers.providers.ExternalProvider;
};

export type Web3ContextT = {
  provider: JsonRpcProvider | null;
  contract: MirrorClone | null;
  address: string | null;
  connect: () => void;
  disconnect: () => void;
};

export const Web3Context = createContext<Web3ContextT>({} as Web3ContextT);

type NFTContractProviderProps = {
  children: React.ReactNode;
};

export const Web3Provider = (props: NFTContractProviderProps) => {
  const {children} = props;
  const provider =
    typeof window == 'undefined' || !window.ethereum
      ? null
      : new ethers.providers.Web3Provider(window.ethereum);
  const contract = provider
    ? MirrorClone__factory.connect(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
        provider,
      )
    : null;

  const [address, setAddress] = useState<string | null>(null);

  const connect = useCallback(async () => {
    if (provider) {
      // Request accounts, get signer, signers address & chainId
      // More information can be found: https://docs.ethers.io/v5/getting-started/#getting-started--connecting

      const currentAddress = '';
      const chainId = '';

      if (chainId != 80001) {
        alert('Please connect to the Polygon Mumbai testnet in MetaMask!')
      }

      // Read more about React hooks: https://reactjs.org/docs/hooks-intro.html
      // The setAddress React hook sets the value of address in the app state
      setAddress(currentAddress);
    } else {
      alert('Please install MetaMask at https://metamask.io');
    }
  }, [provider]);

  const disconnect = () => {
    setAddress(null);
  };

  return (
    <Web3Context.Provider
      value={{provider, contract, address, connect, disconnect}}
    >
      {children}
    </Web3Context.Provider>
  );
};
