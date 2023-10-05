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

export { GetTargetArgs, GetTargetResult, GetTargetOutputArgs } from "./getTarget";
export const getTarget: typeof import("./getTarget").getTarget = null as any;
export const getTargetOutput: typeof import("./getTarget").getTargetOutput = null as any;
utilities.lazyLoad(exports, ["getTarget","getTargetOutput"], () => require("./getTarget"));

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
            case "azure-native:chaos/v20230901preview:Capability":
                return new Capability(name, <any>undefined, { urn })
            case "azure-native:chaos/v20230901preview:Experiment":
                return new Experiment(name, <any>undefined, { urn })
            case "azure-native:chaos/v20230901preview:Target":
                return new Target(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "chaos/v20230901preview", _module)
