
/**
 * @module types
 * @description This module contains all the types used in the Aqua SDK
 * @preferred @description This module contains all the types used in the Aqua SDK
 * @preferred @exports {CredentialsData, AquaOperationData, RevisionType, WitnessType, WitnessPlatformType, WitnessNetwork, SignType, WitnessEnvironment, FileObject, LogType, LogTypeEmojis, LogData, RevisionTree, Revision, Revisions, FileIndex, FormData, TreeMapping, AquaTreeWrapper, AquaTree, SignaturePayload, SignatureResult, SignatureData, SignatureItem, IWitnessConfig, AnObject, WitnessMerkleProof, WitnessResult, GasEstimateResult, WitnessConfig, TransactionResult, WitnessTransactionData, WitnessTSAResponse, WitnessEthResponse, WitnessNostrResponse, WitnessNostrVerifyResult}
 */

/**
 * @typedef {Object} CredentialsData
 * @property {string} mnemonic - The mnemonic of the user
 * @property {string} nostr_sk - The secret key of the Nostr account
 * @property {string} did:key - The DID key of the user
 * @property {string} alchemy_key - The Alchemy key of the user
 * @property {string} witness_eth_network - The Ethereum network of the witness
 * @property {string} witness_eth_platform - The Ethereum platform of the witness
 * @description The data required for the credentials of the user
 * @example
 * { mnemonic: "abandon, abandon, abandon, abandon, abandon, abandon, abandon, abandon, abandon, abandon, abandon, about",
 * nostr_sk: "0x
 * did:key: "did:key:z6Mkq
 * alchemy_key: "0x
 * witness_eth_network: "sepolia"
 * witness_eth_platform: "cli"
 * }
 */
export interface CredentialsData {
  mnemonic: string;
  nostr_sk: string;
  "did:key": string;
  alchemy_key: string,
  witness_eth_network: string;
  witness_method: string;
}

/**
 * @typedef {Object} AquaOperationData
 * @property {AquaTree[]} aquaTrees - The list of Aqua Trees
 * @property {AquaTree} aquaTree - The Aqua Tree
 * @property {Array<LogData>} logData - The log data
 * @description The data required for the Aqua operation
 */
export interface AquaOperationData {
  aquaTrees: AquaTree[]
  aquaTree: AquaTree | null
  logData: Array<LogData>
}

export type RevisionType = "file" | "witness" | "signature" | "form" | "link"
export type WitnessType = "tsa" | "eth" | "nostr"
export type WitnessPlatformType = 'cli' | 'metamask';
export type WitnessNetwork = "sepolia" | "mainnet" | "holesky"
export type SignType = "cli" | "metamask" | "did"

export type WitnessEnvironment = 'node' | 'browser'

export interface FileObject {
  fileName: string,
  fileContent: string | AquaTree,
  path: string
}

export enum LogType {
  SUCCESS = "success",
  INFO = "info",
  ERROR = "error",
  FINAL_ERROR = "final_error",
  WARNING = "warning",
  HINT = "hint",
  DEBUGDATA = "debug_data",
  FILE = "file",
  LINK = "link",
  SIGNATURE = "signature",
  WITNESS = "witness",
  FORM = "form",
  SCALAR = "scalar",
  EMPTY = "empty",
}

export const LogTypeEmojis: Record<LogType, string> = {
  [LogType.SUCCESS]: "✅",
  [LogType.INFO]: "✨",
  [LogType.ERROR]: "❌",
  [LogType.FINAL_ERROR]: "🚫",
  [LogType.WARNING]: "🚨",
  [LogType.HINT]: "💡",
  [LogType.DEBUGDATA]: "🐞",
  [LogType.FILE]: "📄",
  [LogType.LINK]: "🔗",
  [LogType.SIGNATURE]: "🔏",
  [LogType.WITNESS]: "👀",
  [LogType.FORM]: "📝",
  [LogType.SCALAR]: "⏺️ ",
  [LogType.EMPTY]: "",
};

export interface LogData {
  logType: LogType,
  log: string
}



export interface RevisionTree {
  hash: string
  children: RevisionTree[]
}


export interface Revision {
  previous_verification_hash: string;
  local_timestamp: string;
  revision_type: "file" | "witness" | "signature" | "form" | "link";
  file_hash?: string;
  file_nonce?: string;
  witness_merkle_root?: string;
  witness_timestamp?: number;
  witness_network?: string;
  witness_smart_contract_address?: string;
  witness_transaction_hash?: string;
  witness_sender_account_address?: string;
  witness_merkle_proof?: string[];
  signature?: string | SignatureData | any;
  signature_public_key?: string;
  signature_wallet_address?: string;
  signature_type?: string;
  [key: string]: any;

}

export interface Revisions {
  [key: string]: Revision;
}

export interface FileIndex {
  [key: string]: string;
}

export interface FormData {
  [key: string]: string;
}

export interface TreeMapping {
  paths: {
    [key: string]: string[];
  };
  latestHash: string;
}


export interface AquaTreeWrapper {
  aquaTree: AquaTree;
  fileObject?: FileObject;
  revision: string;
}

export interface AquaTree {
  revisions: Revisions;
  file_index: FileIndex;
  tree?: RevisionTree;
  treeMapping?: TreeMapping;
}



export interface SignaturePayload {
  message: string;
}

export interface SignatureResult {
  jws: SignatureData; // Using 'any' here as the JWS type isn't exported from dids
  key: string;
}



export interface SignatureData {
  payload: string;
  signatures: SignatureItem[];
}

export interface SignatureItem {
  protected: string;
  signature: string;
}


export interface IWitnessConfig {
  witnessNetwork: string,
  smartContractAddress: string,
  witnessEventVerificationHash: string,
  port: number,
  host: string
}

export interface AnObject {
  [key: string]: string | number | boolean | any;
}


export interface WitnessMerkleProof {
  depth?: string;
  left_leaf?: string;
  right_leaf?: string | null;
  successor?: string;
}

export interface WitnessResult {
  witness_merkle_root: string;
  witness_timestamp: number;
  witness_network: string;
  witness_smart_contract_address: string;
  witness_transaction_hash: string;
  witness_sender_account_address: string;
  witness_merkle_proof: string[] | WitnessMerkleProof[];
}


export interface GasEstimateResult {
  error: string | null;
  hasEnoughBalance: boolean;
  gasEstimate?: string;
  gasFee?: string;
  balance?: string
}

export interface WitnessConfig {
  witnessEventVerificationHash: string;
  witnessNetwork: WitnessNetwork;
  smartContractAddress: string;
}

export interface TransactionResult {
  error: string | null;
  transactionHash?: string;
}

export interface WitnessTransactionData {
  transaction_hash: string;
  wallet_address: string;
}


export interface WitnessTSAResponse {
  base64Response: string;
  provider: string;
  timestamp: number;
}

export interface WitnessEthResponse {
  transactionHash: string,
  walletAddress: string

}

export interface WitnessNostrResponse {
  nevent: string;
  npub: string;
  timestamp: number;
}

export interface WitnessNostrVerifyResult {
  type: string;
  data: {
    id: string;
    relays?: string[];
    author?: string;
  };
}


