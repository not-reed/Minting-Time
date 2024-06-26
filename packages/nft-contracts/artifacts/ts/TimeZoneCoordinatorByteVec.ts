/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as TimeZoneCoordinatorByteVecContractJson } from "../TimeZoneCoordinatorByteVec.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace TimeZoneCoordinatorByteVecTypes {
  export type Fields = {
    owner: Address;
    controller: Address;
    spliceOne: HexString;
    spliceTwo: HexString;
    spliceThree: HexString;
    minted: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    setController: {
      params: CallContractParams<{ controller_: Address }>;
      result: CallContractResult<null>;
    };
    getItem: {
      params: CallContractParams<{ item: bigint }>;
      result: CallContractResult<HexString>;
    };
    destroy: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };

  export interface SignExecuteMethodTable {
    setController: {
      params: SignExecuteContractMethodParams<{ controller_: Address }>;
      result: SignExecuteScriptTxResult;
    };
    getItem: {
      params: SignExecuteContractMethodParams<{ item: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    destroy: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  TimeZoneCoordinatorByteVecInstance,
  TimeZoneCoordinatorByteVecTypes.Fields
> {
  encodeFields(fields: TimeZoneCoordinatorByteVecTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as TimeZoneCoordinatorByteVecTypes.Fields;
  }

  consts = { TOTAL: BigInt(377), ErrorCode: { UnAuthorized: BigInt(421) } };

  at(address: string): TimeZoneCoordinatorByteVecInstance {
    return new TimeZoneCoordinatorByteVecInstance(address);
  }

  tests = {
    setController: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneCoordinatorByteVecTypes.Fields,
        { controller_: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "setController", params, getContractByCodeHash);
    },
    getItem: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneCoordinatorByteVecTypes.Fields,
        { item: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getItem", params, getContractByCodeHash);
    },
    internalGetItem: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneCoordinatorByteVecTypes.Fields,
        { item: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "internalGetItem", params, getContractByCodeHash);
    },
    internalSetItem: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneCoordinatorByteVecTypes.Fields,
        { item: bigint; value: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "internalSetItem", params, getContractByCodeHash);
    },
    destroy: async (
      params: Omit<
        TestContractParamsWithoutMaps<
          TimeZoneCoordinatorByteVecTypes.Fields,
          never
        >,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroy", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const TimeZoneCoordinatorByteVec = new Factory(
  Contract.fromJson(
    TimeZoneCoordinatorByteVecContractJson,
    "",
    "f446a628c2291d8eba4955b96d7f49628fcf4d9ed3b4ca4aed91dd05e155d813",
    []
  )
);

// Use this class to interact with the blockchain
export class TimeZoneCoordinatorByteVecInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<TimeZoneCoordinatorByteVecTypes.State> {
    return fetchContractState(TimeZoneCoordinatorByteVec, this);
  }

  methods = {
    setController: async (
      params: TimeZoneCoordinatorByteVecTypes.CallMethodParams<"setController">
    ): Promise<
      TimeZoneCoordinatorByteVecTypes.CallMethodResult<"setController">
    > => {
      return callMethod(
        TimeZoneCoordinatorByteVec,
        this,
        "setController",
        params,
        getContractByCodeHash
      );
    },
    getItem: async (
      params: TimeZoneCoordinatorByteVecTypes.CallMethodParams<"getItem">
    ): Promise<TimeZoneCoordinatorByteVecTypes.CallMethodResult<"getItem">> => {
      return callMethod(
        TimeZoneCoordinatorByteVec,
        this,
        "getItem",
        params,
        getContractByCodeHash
      );
    },
    destroy: async (
      params?: TimeZoneCoordinatorByteVecTypes.CallMethodParams<"destroy">
    ): Promise<TimeZoneCoordinatorByteVecTypes.CallMethodResult<"destroy">> => {
      return callMethod(
        TimeZoneCoordinatorByteVec,
        this,
        "destroy",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  view = this.methods;

  transact = {
    setController: async (
      params: TimeZoneCoordinatorByteVecTypes.SignExecuteMethodParams<"setController">
    ): Promise<
      TimeZoneCoordinatorByteVecTypes.SignExecuteMethodResult<"setController">
    > => {
      return signExecuteMethod(
        TimeZoneCoordinatorByteVec,
        this,
        "setController",
        params
      );
    },
    getItem: async (
      params: TimeZoneCoordinatorByteVecTypes.SignExecuteMethodParams<"getItem">
    ): Promise<
      TimeZoneCoordinatorByteVecTypes.SignExecuteMethodResult<"getItem">
    > => {
      return signExecuteMethod(
        TimeZoneCoordinatorByteVec,
        this,
        "getItem",
        params
      );
    },
    destroy: async (
      params: TimeZoneCoordinatorByteVecTypes.SignExecuteMethodParams<"destroy">
    ): Promise<
      TimeZoneCoordinatorByteVecTypes.SignExecuteMethodResult<"destroy">
    > => {
      return signExecuteMethod(
        TimeZoneCoordinatorByteVec,
        this,
        "destroy",
        params
      );
    },
  };

  async multicall<
    Calls extends TimeZoneCoordinatorByteVecTypes.MultiCallParams
  >(
    calls: Calls
  ): Promise<TimeZoneCoordinatorByteVecTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      TimeZoneCoordinatorByteVec,
      this,
      calls,
      getContractByCodeHash
    )) as TimeZoneCoordinatorByteVecTypes.MultiCallResults<Calls>;
  }
}
