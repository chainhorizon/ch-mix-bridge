/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IMixSenderInterface extends ethers.utils.Interface {
  functions: {
    "sendOverHorizon(uint256,uint256)": FunctionFragment;
    "signer()": FunctionFragment;
    "sended(address,uint256,uint256)": FunctionFragment;
    "sendCount(address,uint256)": FunctionFragment;
    "received(address,uint256,uint256)": FunctionFragment;
    "receiveOverHorizon(uint256,uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "sendOverHorizon",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sended",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "received",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveOverHorizon",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "sendOverHorizon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sended", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "received", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveOverHorizon",
    data: BytesLike
  ): Result;

  events: {
    "SetSigner(address)": EventFragment;
    "SendOverHorizon(address,uint256)": EventFragment;
    "ReceiveOverHorizon(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetSigner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendOverHorizon"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiveOverHorizon"): EventFragment;
}

export class IMixSender extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IMixSenderInterface;

  functions: {
    sendOverHorizon(
      toChain: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendOverHorizon(uint256,uint256)"(
      toChain: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    signer(overrides?: CallOverrides): Promise<[string]>;

    "signer()"(overrides?: CallOverrides): Promise<[string]>;

    sended(
      sender: string,
      toChain: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    "sended(address,uint256,uint256)"(
      sender: string,
      toChain: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "sendCount(address,uint256)"(
      sender: string,
      toChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    received(
      receiver: string,
      fromChain: BigNumberish,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "received(address,uint256,uint256)"(
      receiver: string,
      fromChain: BigNumberish,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "receiveOverHorizon(uint256,uint256,uint256,bytes)"(
      fromChain: BigNumberish,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  sendOverHorizon(
    toChain: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendOverHorizon(uint256,uint256)"(
    toChain: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sended(
    sender: string,
    toChain: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "sended(address,uint256,uint256)"(
    sender: string,
    toChain: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  sendCount(
    sender: string,
    toChain: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "sendCount(address,uint256)"(
    sender: string,
    toChain: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  received(
    receiver: string,
    fromChain: BigNumberish,
    sendId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "received(address,uint256,uint256)"(
    receiver: string,
    fromChain: BigNumberish,
    sendId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  receiveOverHorizon(
    fromChain: BigNumberish,
    sendId: BigNumberish,
    amount: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "receiveOverHorizon(uint256,uint256,uint256,bytes)"(
    fromChain: BigNumberish,
    sendId: BigNumberish,
    amount: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    sendOverHorizon(
      toChain: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendOverHorizon(uint256,uint256)"(
      toChain: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<string>;

    "signer()"(overrides?: CallOverrides): Promise<string>;

    sended(
      sender: string,
      toChain: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sended(address,uint256,uint256)"(
      sender: string,
      toChain: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendCount(address,uint256)"(
      sender: string,
      toChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    received(
      receiver: string,
      fromChain: BigNumberish,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "received(address,uint256,uint256)"(
      receiver: string,
      fromChain: BigNumberish,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "receiveOverHorizon(uint256,uint256,uint256,bytes)"(
      fromChain: BigNumberish,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    SetSigner(signer: string | null): EventFilter;

    SendOverHorizon(sender: string | null, amount: null): EventFilter;

    ReceiveOverHorizon(receiver: string | null, amount: null): EventFilter;
  };

  estimateGas: {
    sendOverHorizon(
      toChain: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendOverHorizon(uint256,uint256)"(
      toChain: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;

    "signer()"(overrides?: CallOverrides): Promise<BigNumber>;

    sended(
      sender: string,
      toChain: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sended(address,uint256,uint256)"(
      sender: string,
      toChain: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendCount(address,uint256)"(
      sender: string,
      toChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    received(
      receiver: string,
      fromChain: BigNumberish,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "received(address,uint256,uint256)"(
      receiver: string,
      fromChain: BigNumberish,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "receiveOverHorizon(uint256,uint256,uint256,bytes)"(
      fromChain: BigNumberish,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    sendOverHorizon(
      toChain: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendOverHorizon(uint256,uint256)"(
      toChain: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "signer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sended(
      sender: string,
      toChain: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "sended(address,uint256,uint256)"(
      sender: string,
      toChain: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendCount(
      sender: string,
      toChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "sendCount(address,uint256)"(
      sender: string,
      toChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    received(
      receiver: string,
      fromChain: BigNumberish,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "received(address,uint256,uint256)"(
      receiver: string,
      fromChain: BigNumberish,
      sendId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveOverHorizon(
      fromChain: BigNumberish,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "receiveOverHorizon(uint256,uint256,uint256,bytes)"(
      fromChain: BigNumberish,
      sendId: BigNumberish,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
