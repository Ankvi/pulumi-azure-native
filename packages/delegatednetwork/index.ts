import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ControllerDetailsArgs } from "./controllerDetails";
export type ControllerDetails = import("./controllerDetails").ControllerDetails;
export const ControllerDetails: typeof import("./controllerDetails").ControllerDetails = null as any;
utilities.lazyLoad(exports, ["ControllerDetails"], () => require("./controllerDetails"));

export { DelegatedSubnetServiceDetailsArgs } from "./delegatedSubnetServiceDetails";
export type DelegatedSubnetServiceDetails = import("./delegatedSubnetServiceDetails").DelegatedSubnetServiceDetails;
export const DelegatedSubnetServiceDetails: typeof import("./delegatedSubnetServiceDetails").DelegatedSubnetServiceDetails = null as any;
utilities.lazyLoad(exports, ["DelegatedSubnetServiceDetails"], () => require("./delegatedSubnetServiceDetails"));

export { GetControllerDetailsArgs, GetControllerDetailsResult, GetControllerDetailsOutputArgs } from "./getControllerDetails";
export const getControllerDetails: typeof import("./getControllerDetails").getControllerDetails = null as any;
export const getControllerDetailsOutput: typeof import("./getControllerDetails").getControllerDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getControllerDetails","getControllerDetailsOutput"], () => require("./getControllerDetails"));

export { GetDelegatedSubnetServiceDetailsArgs, GetDelegatedSubnetServiceDetailsResult, GetDelegatedSubnetServiceDetailsOutputArgs } from "./getDelegatedSubnetServiceDetails";
export const getDelegatedSubnetServiceDetails: typeof import("./getDelegatedSubnetServiceDetails").getDelegatedSubnetServiceDetails = null as any;
export const getDelegatedSubnetServiceDetailsOutput: typeof import("./getDelegatedSubnetServiceDetails").getDelegatedSubnetServiceDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getDelegatedSubnetServiceDetails","getDelegatedSubnetServiceDetailsOutput"], () => require("./getDelegatedSubnetServiceDetails"));

export { GetOrchestratorInstanceServiceDetailsArgs, GetOrchestratorInstanceServiceDetailsResult, GetOrchestratorInstanceServiceDetailsOutputArgs } from "./getOrchestratorInstanceServiceDetails";
export const getOrchestratorInstanceServiceDetails: typeof import("./getOrchestratorInstanceServiceDetails").getOrchestratorInstanceServiceDetails = null as any;
export const getOrchestratorInstanceServiceDetailsOutput: typeof import("./getOrchestratorInstanceServiceDetails").getOrchestratorInstanceServiceDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getOrchestratorInstanceServiceDetails","getOrchestratorInstanceServiceDetailsOutput"], () => require("./getOrchestratorInstanceServiceDetails"));

export { OrchestratorInstanceServiceDetailsArgs } from "./orchestratorInstanceServiceDetails";
export type OrchestratorInstanceServiceDetails = import("./orchestratorInstanceServiceDetails").OrchestratorInstanceServiceDetails;
export const OrchestratorInstanceServiceDetails: typeof import("./orchestratorInstanceServiceDetails").OrchestratorInstanceServiceDetails = null as any;
utilities.lazyLoad(exports, ["OrchestratorInstanceServiceDetails"], () => require("./orchestratorInstanceServiceDetails"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:delegatednetwork:ControllerDetails":
                return new ControllerDetails(name, <any>undefined, { urn })
            case "azure-native:delegatednetwork:DelegatedSubnetServiceDetails":
                return new DelegatedSubnetServiceDetails(name, <any>undefined, { urn })
            case "azure-native:delegatednetwork:OrchestratorInstanceServiceDetails":
                return new OrchestratorInstanceServiceDetails(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "delegatednetwork", _module)