import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ExperimentArgs } from "./experiment";
export type Experiment = import("./experiment").Experiment;
export const Experiment: typeof import("./experiment").Experiment = null as any;
utilities.lazyLoad(exports, ["Experiment"], () => require("./experiment"));

export { GetExperimentArgs, GetExperimentResult, GetExperimentOutputArgs } from "./getExperiment";
export const getExperiment: typeof import("./getExperiment").getExperiment = null as any;
export const getExperimentOutput: typeof import("./getExperiment").getExperimentOutput = null as any;
utilities.lazyLoad(exports, ["getExperiment","getExperimentOutput"], () => require("./getExperiment"));

export { GetNetworkExperimentProfileArgs, GetNetworkExperimentProfileResult, GetNetworkExperimentProfileOutputArgs } from "./getNetworkExperimentProfile";
export const getNetworkExperimentProfile: typeof import("./getNetworkExperimentProfile").getNetworkExperimentProfile = null as any;
export const getNetworkExperimentProfileOutput: typeof import("./getNetworkExperimentProfile").getNetworkExperimentProfileOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkExperimentProfile","getNetworkExperimentProfileOutput"], () => require("./getNetworkExperimentProfile"));

export { NetworkExperimentProfileArgs } from "./networkExperimentProfile";
export type NetworkExperimentProfile = import("./networkExperimentProfile").NetworkExperimentProfile;
export const NetworkExperimentProfile: typeof import("./networkExperimentProfile").NetworkExperimentProfile = null as any;
utilities.lazyLoad(exports, ["NetworkExperimentProfile"], () => require("./networkExperimentProfile"));


// Export enums:
export * from "../types/enums/v20191101";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20191101:Experiment":
                return new Experiment(name, <any>undefined, { urn })
            case "azure-native:network/v20191101:NetworkExperimentProfile":
                return new NetworkExperimentProfile(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20191101", _module)
