import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CapabilityArgs } from "./capability";
export type Capability = import("./capability").Capability;
export const Capability: typeof import("./capability").Capability = null as any;
utilities.lazyLoad(exports, ["Capability"], () => require("./capability"));

export { ExperimentArgs } from "./experiment";
export type Experiment = import("./experiment").Experiment;
export const Experiment: typeof import("./experiment").Experiment = null as any;
utilities.lazyLoad(exports, ["Experiment"], () => require("./experiment"));

export { GetCapabilityArgs, GetCapabilityResult, GetCapabilityOutputArgs } from "./getCapability";
export const getCapability: typeof import("./getCapability").getCapability = null as any;
export const getCapabilityOutput: typeof import("./getCapability").getCapabilityOutput = null as any;
utilities.lazyLoad(exports, ["getCapability","getCapabilityOutput"], () => require("./getCapability"));

export { GetExperimentArgs, GetExperimentResult, GetExperimentOutputArgs } from "./getExperiment";
export const getExperiment: typeof import("./getExperiment").getExperiment = null as any;
export const getExperimentOutput: typeof import("./getExperiment").getExperimentOutput = null as any;
utilities.lazyLoad(exports, ["getExperiment","getExperimentOutput"], () => require("./getExperiment"));

export { GetExperimentExecutionDetailsArgs, GetExperimentExecutionDetailsResult, GetExperimentExecutionDetailsOutputArgs } from "./getExperimentExecutionDetails";
export const getExperimentExecutionDetails: typeof import("./getExperimentExecutionDetails").getExperimentExecutionDetails = null as any;
export const getExperimentExecutionDetailsOutput: typeof import("./getExperimentExecutionDetails").getExperimentExecutionDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getExperimentExecutionDetails","getExperimentExecutionDetailsOutput"], () => require("./getExperimentExecutionDetails"));

export { GetPrivateAccessArgs, GetPrivateAccessResult, GetPrivateAccessOutputArgs } from "./getPrivateAccess";
export const getPrivateAccess: typeof import("./getPrivateAccess").getPrivateAccess = null as any;
export const getPrivateAccessOutput: typeof import("./getPrivateAccess").getPrivateAccessOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateAccess","getPrivateAccessOutput"], () => require("./getPrivateAccess"));

export { GetTargetArgs, GetTargetResult, GetTargetOutputArgs } from "./getTarget";
export const getTarget: typeof import("./getTarget").getTarget = null as any;
export const getTargetOutput: typeof import("./getTarget").getTargetOutput = null as any;
utilities.lazyLoad(exports, ["getTarget","getTargetOutput"], () => require("./getTarget"));

export { PrivateAccessArgs } from "./privateAccess";
export type PrivateAccess = import("./privateAccess").PrivateAccess;
export const PrivateAccess: typeof import("./privateAccess").PrivateAccess = null as any;
utilities.lazyLoad(exports, ["PrivateAccess"], () => require("./privateAccess"));

export { TargetArgs } from "./target";
export type Target = import("./target").Target;
export const Target: typeof import("./target").Target = null as any;
utilities.lazyLoad(exports, ["Target"], () => require("./target"));


// Export enums:
export * from "./types/enums";


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:chaos:Capability":
                return new Capability(name, <any>undefined, { urn })
            case "azure-native:chaos:Experiment":
                return new Experiment(name, <any>undefined, { urn })
            case "azure-native:chaos:PrivateAccess":
                return new PrivateAccess(name, <any>undefined, { urn })
            case "azure-native:chaos:Target":
                return new Target(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "chaos", _module)
