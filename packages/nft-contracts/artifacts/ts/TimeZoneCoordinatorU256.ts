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
import { default as TimeZoneCoordinatorU256ContractJson } from "../TimeZoneCoordinatorU256.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace TimeZoneCoordinatorU256Types {
  export type Fields = {
    owner: Address;
    controller: Address;
    spliceOne: HexString;
    spliceTwo: HexString;
    spliceThree: HexString;
    spliceFour: HexString;
    spliceFive: HexString;
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
      result: CallContractResult<bigint>;
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
  TimeZoneCoordinatorU256Instance,
  TimeZoneCoordinatorU256Types.Fields
> {
  encodeFields(fields: TimeZoneCoordinatorU256Types.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as TimeZoneCoordinatorU256Types.Fields;
  }

  consts = { TOTAL: BigInt(377), ErrorCode: { UnAuthorized: BigInt(422) } };

  at(address: string): TimeZoneCoordinatorU256Instance {
    return new TimeZoneCoordinatorU256Instance(address);
  }

  tests = {
    setController: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneCoordinatorU256Types.Fields,
        { controller_: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "setController", params, getContractByCodeHash);
    },
    getItem: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneCoordinatorU256Types.Fields,
        { item: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getItem", params, getContractByCodeHash);
    },
    internalGetItem: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneCoordinatorU256Types.Fields,
        { item: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "internalGetItem", params, getContractByCodeHash);
    },
    internalSetItem: async (
      params: TestContractParamsWithoutMaps<
        TimeZoneCoordinatorU256Types.Fields,
        { item: bigint; value: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "internalSetItem", params, getContractByCodeHash);
    },
    destroy: async (
      params: Omit<
        TestContractParamsWithoutMaps<
          TimeZoneCoordinatorU256Types.Fields,
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
export const TimeZoneCoordinatorU256 = new Factory(
  Contract.fromJson(
    TimeZoneCoordinatorU256ContractJson,
    "",
    "24f95ed82b673959550ee16c117003b6c969aeddb9964e98fd8166eb4ef21880",
    []
  )
);

// Use this class to interact with the blockchain
export class TimeZoneCoordinatorU256Instance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<TimeZoneCoordinatorU256Types.State> {
    return fetchContractState(TimeZoneCoordinatorU256, this);
  }

  methods = {
    setController: async (
      params: TimeZoneCoordinatorU256Types.CallMethodParams<"setController">
    ): Promise<
      TimeZoneCoordinatorU256Types.CallMethodResult<"setController">
    > => {
      return callMethod(
        TimeZoneCoordinatorU256,
        this,
        "setController",
        params,
        getContractByCodeHash
      );
    },
    getItem: async (
      params: TimeZoneCoordinatorU256Types.CallMethodParams<"getItem">
    ): Promise<TimeZoneCoordinatorU256Types.CallMethodResult<"getItem">> => {
      return callMethod(
        TimeZoneCoordinatorU256,
        this,
        "getItem",
        params,
        getContractByCodeHash
      );
    },
    destroy: async (
      params?: TimeZoneCoordinatorU256Types.CallMethodParams<"destroy">
    ): Promise<TimeZoneCoordinatorU256Types.CallMethodResult<"destroy">> => {
      return callMethod(
        TimeZoneCoordinatorU256,
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
      params: TimeZoneCoordinatorU256Types.SignExecuteMethodParams<"setController">
    ): Promise<
      TimeZoneCoordinatorU256Types.SignExecuteMethodResult<"setController">
    > => {
      return signExecuteMethod(
        TimeZoneCoordinatorU256,
        this,
        "setController",
        params
      );
    },
    getItem: async (
      params: TimeZoneCoordinatorU256Types.SignExecuteMethodParams<"getItem">
    ): Promise<
      TimeZoneCoordinatorU256Types.SignExecuteMethodResult<"getItem">
    > => {
      return signExecuteMethod(
        TimeZoneCoordinatorU256,
        this,
        "getItem",
        params
      );
    },
    destroy: async (
      params: TimeZoneCoordinatorU256Types.SignExecuteMethodParams<"destroy">
    ): Promise<
      TimeZoneCoordinatorU256Types.SignExecuteMethodResult<"destroy">
    > => {
      return signExecuteMethod(
        TimeZoneCoordinatorU256,
        this,
        "destroy",
        params
      );
    },
  };

  async multicall<Calls extends TimeZoneCoordinatorU256Types.MultiCallParams>(
    calls: Calls
  ): Promise<TimeZoneCoordinatorU256Types.MultiCallResults<Calls>> {
    return (await multicallMethods(
      TimeZoneCoordinatorU256,
      this,
      calls,
      getContractByCodeHash
    )) as TimeZoneCoordinatorU256Types.MultiCallResults<Calls>;
  }
}
