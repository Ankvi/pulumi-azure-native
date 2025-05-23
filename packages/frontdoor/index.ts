import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ExperimentArgs } from "./experiment";
export type Experiment = import("./experiment").Experiment;
export const Experiment: typeof import("./experiment").Experiment = null as any;
utilities.lazyLoad(exports, ["Experiment"], () => require("./experiment"));

export { FrontDoorArgs } from "./frontDoor";
export type FrontDoor = import("./frontDoor").FrontDoor;
export const FrontDoor: typeof import("./frontDoor").FrontDoor = null as any;
utilities.lazyLoad(exports, ["FrontDoor"], () => require("./frontDoor"));

export { GetExperimentArgs, GetExperimentResult, GetExperimentOutputArgs } from "./getExperiment";
export const getExperiment: typeof import("./getExperiment").getExperiment = null as any;
export const getExperimentOutput: typeof import("./getExperiment").getExperimentOutput = null as any;
utilities.lazyLoad(exports, ["getExperiment","getExperimentOutput"], () => require("./getExperiment"));

export { GetFrontDoorArgs, GetFrontDoorResult, GetFrontDoorOutputArgs } from "./getFrontDoor";
export const getFrontDoor: typeof import("./getFrontDoor").getFrontDoor = null as any;
export const getFrontDoorOutput: typeof import("./getFrontDoor").getFrontDoorOutput = null as any;
utilities.lazyLoad(exports, ["getFrontDoor","getFrontDoorOutput"], () => require("./getFrontDoor"));

export { GetNetworkExperimentProfileArgs, GetNetworkExperimentProfileResult, GetNetworkExperimentProfileOutputArgs } from "./getNetworkExperimentProfile";
export const getNetworkExperimentProfile: typeof import("./getNetworkExperimentProfile").getNetworkExperimentProfile = null as any;
export const getNetworkExperimentProfileOutput: typeof import("./getNetworkExperimentProfile").getNetworkExperimentProfileOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkExperimentProfile","getNetworkExperimentProfileOutput"], () => require("./getNetworkExperimentProfile"));

export { GetPolicyArgs, GetPolicyResult, GetPolicyOutputArgs } from "./getPolicy";
export const getPolicy: typeof import("./getPolicy").getPolicy = null as any;
export const getPolicyOutput: typeof import("./getPolicy").getPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getPolicy","getPolicyOutput"], () => require("./getPolicy"));

export { GetRulesEngineArgs, GetRulesEngineResult, GetRulesEngineOutputArgs } from "./getRulesEngine";
export const getRulesEngine: typeof import("./getRulesEngine").getRulesEngine = null as any;
export const getRulesEngineOutput: typeof import("./getRulesEngine").getRulesEngineOutput = null as any;
utilities.lazyLoad(exports, ["getRulesEngine","getRulesEngineOutput"], () => require("./getRulesEngine"));

export { NetworkExperimentProfileArgs } from "./networkExperimentProfile";
export type NetworkExperimentProfile = import("./networkExperimentProfile").NetworkExperimentProfile;
export const NetworkExperimentProfile: typeof import("./networkExperimentProfile").NetworkExperimentProfile = null as any;
utilities.lazyLoad(exports, ["NetworkExperimentProfile"], () => require("./networkExperimentProfile"));

export { PolicyArgs } from "./policy";
export type Policy = import("./policy").Policy;
export const Policy: typeof import("./policy").Policy = null as any;
utilities.lazyLoad(exports, ["Policy"], () => require("./policy"));

export { RulesEngineArgs } from "./rulesEngine";
export type RulesEngine = import("./rulesEngine").RulesEngine;
export const RulesEngine: typeof import("./rulesEngine").RulesEngine = null as any;
utilities.lazyLoad(exports, ["RulesEngine"], () => require("./rulesEngine"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:frontdoor:Experiment":
                return new Experiment(name, <any>undefined, { urn })
            case "azure-native:frontdoor:FrontDoor":
                return new FrontDoor(name, <any>undefined, { urn })
            case "azure-native:frontdoor:NetworkExperimentProfile":
                return new NetworkExperimentProfile(name, <any>undefined, { urn })
            case "azure-native:frontdoor:Policy":
                return new Policy(name, <any>undefined, { urn })
            case "azure-native:frontdoor:RulesEngine":
                return new RulesEngine(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "frontdoor", _module)