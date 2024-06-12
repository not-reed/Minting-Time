/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { RunScriptResult, DeployContractExecutionResult } from "@alephium/cli";
import type { NetworkId } from "@alephium/web3";
import {
  TimeZoneSpliceByteVec,
  TimeZoneSpliceByteVecInstance,
  TimeZoneCoordinatorByteVec,
  TimeZoneCoordinatorByteVecInstance,
  TimeZoneSpliceU256,
  TimeZoneSpliceU256Instance,
  TimeZoneCoordinatorU256,
  TimeZoneCoordinatorU256Instance,
  TimeZoneController,
  TimeZoneControllerInstance,
  NFT,
  NFTInstance,
  NFTCollection,
  NFTCollectionInstance,
} from ".";
import { default as mainnetDeployments } from "../../deployments/.deployments.mainnet.json";
import { default as testnetDeployments } from "../.deployments.testnet.json";
import { default as devnetDeployments } from "../.deployments.devnet.json";

export type Deployments = {
  deployerAddress: string;
  contracts: {
    TimeZoneController: DeployContractExecutionResult<TimeZoneControllerInstance>;
    NFT: DeployContractExecutionResult<NFTInstance>;
    NFTCollection: DeployContractExecutionResult<NFTCollectionInstance>;
    TimeZoneSpliceByteVec_zones_0?: DeployContractExecutionResult<TimeZoneSpliceByteVecInstance>;
    TimeZoneSpliceByteVec_zones_1?: DeployContractExecutionResult<TimeZoneSpliceByteVecInstance>;
    TimeZoneSpliceByteVec_zones_2?: DeployContractExecutionResult<TimeZoneSpliceByteVecInstance>;
    TimeZoneCoordinatorByteVec_zones_coordinator?: DeployContractExecutionResult<TimeZoneCoordinatorByteVecInstance>;
    TimeZoneSpliceByteVec_abbr_0?: DeployContractExecutionResult<TimeZoneSpliceByteVecInstance>;
    TimeZoneSpliceByteVec_abbr_1?: DeployContractExecutionResult<TimeZoneSpliceByteVecInstance>;
    TimeZoneSpliceByteVec_abbr_2?: DeployContractExecutionResult<TimeZoneSpliceByteVecInstance>;
    TimeZoneCoordinatorByteVec_abbr_coordinator?: DeployContractExecutionResult<TimeZoneCoordinatorByteVecInstance>;
    TimeZoneSpliceU256_offset_0?: DeployContractExecutionResult<TimeZoneSpliceU256Instance>;
    TimeZoneSpliceU256_offset_1?: DeployContractExecutionResult<TimeZoneSpliceU256Instance>;
    TimeZoneSpliceU256_offset_2?: DeployContractExecutionResult<TimeZoneSpliceU256Instance>;
    TimeZoneSpliceU256_offset_3?: DeployContractExecutionResult<TimeZoneSpliceU256Instance>;
    TimeZoneSpliceU256_offset_4?: DeployContractExecutionResult<TimeZoneSpliceU256Instance>;
    TimeZoneCoordinatorU256_offset_coordinator?: DeployContractExecutionResult<TimeZoneCoordinatorU256Instance>;
    TimeZoneSpliceByteVec?: DeployContractExecutionResult<TimeZoneSpliceByteVecInstance>;
    TimeZoneCoordinatorByteVec?: DeployContractExecutionResult<TimeZoneCoordinatorByteVecInstance>;
    TimeZoneSpliceU256?: DeployContractExecutionResult<TimeZoneSpliceU256Instance>;
    TimeZoneCoordinatorU256?: DeployContractExecutionResult<TimeZoneCoordinatorU256Instance>;
  };
  scripts: {
    SetCollection: RunScriptResult;
    SetCoordinatorByteVec_SetCoordinatorByteVec_zoneSpliceOne?: RunScriptResult;
    SetCoordinatorByteVec_SetCoordinatorByteVec_zoneSpliceTwo?: RunScriptResult;
    SetCoordinatorByteVec_SetCoordinatorByteVec_zoneSpliceThree?: RunScriptResult;
    SetCoordinatorByteVec_SetCoordinatorByteVec_abbrSpliceOne?: RunScriptResult;
    SetCoordinatorByteVec_SetCoordinatorByteVec_abbrSpliceTwo?: RunScriptResult;
    SetCoordinatorByteVec_SetCoordinatorByteVec_abbrSpliceThree?: RunScriptResult;
    SetCoordinatorU256_SetCoordinatorU256_offsetSpliceOne?: RunScriptResult;
    SetCoordinatorU256_SetCoordinatorU256_offsetSpliceTwo?: RunScriptResult;
    SetCoordinatorU256_SetCoordinatorU256_offsetSpliceThree?: RunScriptResult;
    SetCoordinatorU256_SetCoordinatorU256_offsetSpliceFour?: RunScriptResult;
    SetCoordinatorU256_SetCoordinatorU256_offsetSpliceFive?: RunScriptResult;
    SetControllerByteVec_SetControllerByteVec_abbrCoordinator?: RunScriptResult;
    SetControllerByteVec_SetControllerByteVec_zoneCoordinator?: RunScriptResult;
    SetControllerU256_SetControllerU256_offsetCoordinator?: RunScriptResult;
    SetCoordinatorByteVec?: RunScriptResult;
    SetCoordinatorU256?: RunScriptResult;
    SetControllerByteVec?: RunScriptResult;
    SetControllerU256?: RunScriptResult;
  };
};

function toDeployments(json: any): Deployments {
  const contracts = {
    TimeZoneController: {
      ...json.contracts["TimeZoneController"],
      contractInstance: TimeZoneController.at(
        json.contracts["TimeZoneController"].contractInstance.address
      ),
    },
    NFT: {
      ...json.contracts["NFT"],
      contractInstance: NFT.at(json.contracts["NFT"].contractInstance.address),
    },
    NFTCollection: {
      ...json.contracts["NFTCollection"],
      contractInstance: NFTCollection.at(
        json.contracts["NFTCollection"].contractInstance.address
      ),
    },
    TimeZoneSpliceByteVec_zones_0:
      json.contracts["TimeZoneSpliceByteVec:zones_0"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceByteVec:zones_0"],
            contractInstance: TimeZoneSpliceByteVec.at(
              json.contracts["TimeZoneSpliceByteVec:zones_0"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceByteVec_zones_1:
      json.contracts["TimeZoneSpliceByteVec:zones_1"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceByteVec:zones_1"],
            contractInstance: TimeZoneSpliceByteVec.at(
              json.contracts["TimeZoneSpliceByteVec:zones_1"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceByteVec_zones_2:
      json.contracts["TimeZoneSpliceByteVec:zones_2"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceByteVec:zones_2"],
            contractInstance: TimeZoneSpliceByteVec.at(
              json.contracts["TimeZoneSpliceByteVec:zones_2"].contractInstance
                .address
            ),
          },
    TimeZoneCoordinatorByteVec_zones_coordinator:
      json.contracts["TimeZoneCoordinatorByteVec:zones_coordinator"] ===
      undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneCoordinatorByteVec:zones_coordinator"],
            contractInstance: TimeZoneCoordinatorByteVec.at(
              json.contracts["TimeZoneCoordinatorByteVec:zones_coordinator"]
                .contractInstance.address
            ),
          },
    TimeZoneSpliceByteVec_abbr_0:
      json.contracts["TimeZoneSpliceByteVec:abbr_0"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceByteVec:abbr_0"],
            contractInstance: TimeZoneSpliceByteVec.at(
              json.contracts["TimeZoneSpliceByteVec:abbr_0"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceByteVec_abbr_1:
      json.contracts["TimeZoneSpliceByteVec:abbr_1"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceByteVec:abbr_1"],
            contractInstance: TimeZoneSpliceByteVec.at(
              json.contracts["TimeZoneSpliceByteVec:abbr_1"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceByteVec_abbr_2:
      json.contracts["TimeZoneSpliceByteVec:abbr_2"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceByteVec:abbr_2"],
            contractInstance: TimeZoneSpliceByteVec.at(
              json.contracts["TimeZoneSpliceByteVec:abbr_2"].contractInstance
                .address
            ),
          },
    TimeZoneCoordinatorByteVec_abbr_coordinator:
      json.contracts["TimeZoneCoordinatorByteVec:abbr_coordinator"] ===
      undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneCoordinatorByteVec:abbr_coordinator"],
            contractInstance: TimeZoneCoordinatorByteVec.at(
              json.contracts["TimeZoneCoordinatorByteVec:abbr_coordinator"]
                .contractInstance.address
            ),
          },
    TimeZoneSpliceU256_offset_0:
      json.contracts["TimeZoneSpliceU256:offset_0"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceU256:offset_0"],
            contractInstance: TimeZoneSpliceU256.at(
              json.contracts["TimeZoneSpliceU256:offset_0"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceU256_offset_1:
      json.contracts["TimeZoneSpliceU256:offset_1"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceU256:offset_1"],
            contractInstance: TimeZoneSpliceU256.at(
              json.contracts["TimeZoneSpliceU256:offset_1"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceU256_offset_2:
      json.contracts["TimeZoneSpliceU256:offset_2"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceU256:offset_2"],
            contractInstance: TimeZoneSpliceU256.at(
              json.contracts["TimeZoneSpliceU256:offset_2"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceU256_offset_3:
      json.contracts["TimeZoneSpliceU256:offset_3"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceU256:offset_3"],
            contractInstance: TimeZoneSpliceU256.at(
              json.contracts["TimeZoneSpliceU256:offset_3"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceU256_offset_4:
      json.contracts["TimeZoneSpliceU256:offset_4"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceU256:offset_4"],
            contractInstance: TimeZoneSpliceU256.at(
              json.contracts["TimeZoneSpliceU256:offset_4"].contractInstance
                .address
            ),
          },
    TimeZoneCoordinatorU256_offset_coordinator:
      json.contracts["TimeZoneCoordinatorU256:offset_coordinator"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneCoordinatorU256:offset_coordinator"],
            contractInstance: TimeZoneCoordinatorU256.at(
              json.contracts["TimeZoneCoordinatorU256:offset_coordinator"]
                .contractInstance.address
            ),
          },
    TimeZoneSpliceByteVec:
      json.contracts["TimeZoneSpliceByteVec"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceByteVec"],
            contractInstance: TimeZoneSpliceByteVec.at(
              json.contracts["TimeZoneSpliceByteVec"].contractInstance.address
            ),
          },
    TimeZoneCoordinatorByteVec:
      json.contracts["TimeZoneCoordinatorByteVec"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneCoordinatorByteVec"],
            contractInstance: TimeZoneCoordinatorByteVec.at(
              json.contracts["TimeZoneCoordinatorByteVec"].contractInstance
                .address
            ),
          },
    TimeZoneSpliceU256:
      json.contracts["TimeZoneSpliceU256"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneSpliceU256"],
            contractInstance: TimeZoneSpliceU256.at(
              json.contracts["TimeZoneSpliceU256"].contractInstance.address
            ),
          },
    TimeZoneCoordinatorU256:
      json.contracts["TimeZoneCoordinatorU256"] === undefined
        ? undefined
        : {
            ...json.contracts["TimeZoneCoordinatorU256"],
            contractInstance: TimeZoneCoordinatorU256.at(
              json.contracts["TimeZoneCoordinatorU256"].contractInstance.address
            ),
          },
  };
  return {
    ...json,
    contracts: contracts as Deployments["contracts"],
    scripts: {
      SetCollection: json.scripts["SetCollection"],
      SetCoordinatorByteVec_SetCoordinatorByteVec_zoneSpliceOne:
        json.scripts[
          "SetCoordinatorByteVec:SetCoordinatorByteVec_zoneSpliceOne"
        ],
      SetCoordinatorByteVec_SetCoordinatorByteVec_zoneSpliceTwo:
        json.scripts[
          "SetCoordinatorByteVec:SetCoordinatorByteVec_zoneSpliceTwo"
        ],
      SetCoordinatorByteVec_SetCoordinatorByteVec_zoneSpliceThree:
        json.scripts[
          "SetCoordinatorByteVec:SetCoordinatorByteVec_zoneSpliceThree"
        ],
      SetCoordinatorByteVec_SetCoordinatorByteVec_abbrSpliceOne:
        json.scripts[
          "SetCoordinatorByteVec:SetCoordinatorByteVec_abbrSpliceOne"
        ],
      SetCoordinatorByteVec_SetCoordinatorByteVec_abbrSpliceTwo:
        json.scripts[
          "SetCoordinatorByteVec:SetCoordinatorByteVec_abbrSpliceTwo"
        ],
      SetCoordinatorByteVec_SetCoordinatorByteVec_abbrSpliceThree:
        json.scripts[
          "SetCoordinatorByteVec:SetCoordinatorByteVec_abbrSpliceThree"
        ],
      SetCoordinatorU256_SetCoordinatorU256_offsetSpliceOne:
        json.scripts["SetCoordinatorU256:SetCoordinatorU256_offsetSpliceOne"],
      SetCoordinatorU256_SetCoordinatorU256_offsetSpliceTwo:
        json.scripts["SetCoordinatorU256:SetCoordinatorU256_offsetSpliceTwo"],
      SetCoordinatorU256_SetCoordinatorU256_offsetSpliceThree:
        json.scripts["SetCoordinatorU256:SetCoordinatorU256_offsetSpliceThree"],
      SetCoordinatorU256_SetCoordinatorU256_offsetSpliceFour:
        json.scripts["SetCoordinatorU256:SetCoordinatorU256_offsetSpliceFour"],
      SetCoordinatorU256_SetCoordinatorU256_offsetSpliceFive:
        json.scripts["SetCoordinatorU256:SetCoordinatorU256_offsetSpliceFive"],
      SetControllerByteVec_SetControllerByteVec_abbrCoordinator:
        json.scripts[
          "SetControllerByteVec:SetControllerByteVec_abbrCoordinator"
        ],
      SetControllerByteVec_SetControllerByteVec_zoneCoordinator:
        json.scripts[
          "SetControllerByteVec:SetControllerByteVec_zoneCoordinator"
        ],
      SetControllerU256_SetControllerU256_offsetCoordinator:
        json.scripts["SetControllerU256:SetControllerU256_offsetCoordinator"],
      SetCoordinatorByteVec: json.scripts["SetCoordinatorByteVec"],
      SetCoordinatorU256: json.scripts["SetCoordinatorU256"],
      SetControllerByteVec: json.scripts["SetControllerByteVec"],
      SetControllerU256: json.scripts["SetControllerU256"],
    },
  };
}

export function loadDeployments(
  networkId: NetworkId,
  deployerAddress?: string
): Deployments {
  const deployments =
    networkId === "mainnet"
      ? mainnetDeployments
      : networkId === "testnet"
      ? testnetDeployments
      : networkId === "devnet"
      ? devnetDeployments
      : undefined;
  if (deployments === undefined) {
    throw Error("The contract has not been deployed to the " + networkId);
  }
  const allDeployments: any[] = Array.isArray(deployments)
    ? deployments
    : [deployments];
  if (deployerAddress === undefined) {
    if (allDeployments.length > 1) {
      throw Error(
        "The contract has been deployed multiple times on " +
          networkId +
          ", please specify the deployer address"
      );
    } else {
      return toDeployments(allDeployments[0]);
    }
  }
  const result = allDeployments.find(
    (d) => d.deployerAddress === deployerAddress
  );
  if (result === undefined) {
    throw Error("The contract deployment result does not exist");
  }
  return toDeployments(result);
}
