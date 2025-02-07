import { Creator } from '@metaplex-foundation/mpl-token-metadata';
import { ConfigLine } from '@metaplex-foundation/mpl-candy-machine';
import { CandyMachineV2 } from './models';
import { BigNumber, Signer } from '../../types';
export declare const assertName: (name: string) => void;
export declare const assertSymbol: (symbol: string) => void;
export declare const assertUri: (uri: string) => void;
export declare const assertCreators: (creators: Creator[]) => void;
export declare const assertNotFull: (candyMachine: Pick<CandyMachineV2, 'itemsAvailable' | 'itemsLoaded'>, index: BigNumber) => void;
export declare const assertNotEmpty: (candyMachine: Pick<CandyMachineV2, 'itemsRemaining' | 'itemsAvailable'>) => void;
export declare const assertCanAdd: (candyMachine: Pick<CandyMachineV2, 'itemsAvailable'>, index: BigNumber, amount: number) => void;
export declare const assertAllConfigLineConstraints: (configLines: ConfigLine[]) => void;
export declare const assertCandyMachineV2IsLive: (candyMachine: Pick<CandyMachineV2, 'whitelistMintSettings' | 'goLiveDate'>) => void;
export declare const assertCandyMachineV2HasNotEnded: (candyMachine: Pick<CandyMachineV2, 'endSettings' | 'itemsMinted'>) => void;
export declare const assertCanMintCandyMachineV2: (candyMachine: Pick<CandyMachineV2, 'authorityAddress' | 'itemsRemaining' | 'itemsAvailable' | 'itemsMinted' | 'whitelistMintSettings' | 'goLiveDate' | 'endSettings'>, payer: Signer) => void;
