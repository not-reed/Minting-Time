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
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as TimeZoneSpliceU256ContractJson } from "../TimeZoneSpliceU256.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace TimeZoneSpliceU256Types {
  export type Fields = {
    start: bigint;
    fields: [
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint
    ];
    owner: Address;
    coordinator: Address;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getStart: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getItem: {
      params: CallContractParams<{ item: bigint }>;
      result: CallContractResult<bigint>;
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
}

class Factory extends ContractFactory<
  TimeZoneSpliceU256Instance,
  TimeZoneSpliceU256Types.Fields
> {
  encodeFields(fields: TimeZoneSpliceU256Types.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as TimeZoneSpliceU256Types.Fields;
  }

  consts = { ErrorCode: { WrongCaller: BigInt(0) } };

  at(address: string): TimeZoneSpliceU256Instance {
    return new TimeZoneSpliceU256Instance(address);
  }

  tests = {
    getStart: async (
      params: Omit<
        TestContractParamsWithoutMaps<TimeZoneSpliceU256Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getStart", params);
    },
    getItem: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneSpliceU256Types.Fields,
        { item: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getItem", params);
    },
    setItem: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneSpliceU256Types.Fields,
        { item: bigint; value: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "setItem", params);
    },
    setCoordinator: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneSpliceU256Types.Fields,
        { newCoordinator: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "setCoordinator", params);
    },
    destroy: async (
      params: Omit<
        TestContractParamsWithoutMaps<TimeZoneSpliceU256Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroy", params);
    },
  };
}

// Use this object to test and deploy the contract
export const TimeZoneSpliceU256 = new Factory(
  Contract.fromJson(
    TimeZoneSpliceU256ContractJson,
    "",
    "7a0c7f8efec8b59c06cb14eaef4754fe210848b68bdff619e2ebe79df5df1b9e",
    []
  )
);

// Use this class to interact with the blockchain
export class TimeZoneSpliceU256Instance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<TimeZoneSpliceU256Types.State> {
    return fetchContractState(TimeZoneSpliceU256, this);
  }

  methods = {
    getStart: async (
      params?: TimeZoneSpliceU256Types.CallMethodParams<"getStart">
    ): Promise<TimeZoneSpliceU256Types.CallMethodResult<"getStart">> => {
      return callMethod(
        TimeZoneSpliceU256,
        this,
        "getStart",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getItem: async (
      params: TimeZoneSpliceU256Types.CallMethodParams<"getItem">
    ): Promise<TimeZoneSpliceU256Types.CallMethodResult<"getItem">> => {
      return callMethod(
        TimeZoneSpliceU256,
        this,
        "getItem",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends TimeZoneSpliceU256Types.MultiCallParams>(
    calls: Calls
  ): Promise<TimeZoneSpliceU256Types.MultiCallResults<Calls>> {
    return (await multicallMethods(
      TimeZoneSpliceU256,
      this,
      calls,
      getContractByCodeHash
    )) as TimeZoneSpliceU256Types.MultiCallResults<Calls>;
  }
}
