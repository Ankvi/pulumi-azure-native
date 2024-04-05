import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ACIServiceArgs } from "./aciservice";
export type ACIService = import("./aciservice").ACIService;
export const ACIService: typeof import("./aciservice").ACIService = null as any;
utilities.lazyLoad(exports, ["ACIService"], () => require("./aciservice"));

export { AKSServiceArgs } from "./aksservice";
export type AKSService = import("./aksservice").AKSService;
export const AKSService: typeof import("./aksservice").AKSService = null as any;
utilities.lazyLoad(exports, ["AKSService"], () => require("./aksservice"));

export { EndpointVariantArgs } from "./endpointVariant";
export type EndpointVariant = import("./endpointVariant").EndpointVariant;
export const EndpointVariant: typeof import("./endpointVariant").EndpointVariant = null as any;
utilities.lazyLoad(exports, ["EndpointVariant"], () => require("./endpointVariant"));

export { GetACIServiceArgs, GetACIServiceResult, GetACIServiceOutputArgs } from "./getACIService";
export const getACIService: typeof import("./getACIService").getACIService = null as any;
export const getACIServiceOutput: typeof import("./getACIService").getACIServiceOutput = null as any;
utilities.lazyLoad(exports, ["getACIService","getACIServiceOutput"], () => require("./getACIService"));

export { GetAKSServiceArgs, GetAKSServiceResult, GetAKSServiceOutputArgs } from "./getAKSService";
export const getAKSService: typeof import("./getAKSService").getAKSService = null as any;
export const getAKSServiceOutput: typeof import("./getAKSService").getAKSServiceOutput = null as any;
utilities.lazyLoad(exports, ["getAKSService","getAKSServiceOutput"], () => require("./getAKSService"));

export { GetEndpointVariantArgs, GetEndpointVariantResult, GetEndpointVariantOutputArgs } from "./getEndpointVariant";
export const getEndpointVariant: typeof import("./getEndpointVariant").getEndpointVariant = null as any;
export const getEndpointVariantOutput: typeof import("./getEndpointVariant").getEndpointVariantOutput = null as any;
utilities.lazyLoad(exports, ["getEndpointVariant","getEndpointVariantOutput"], () => require("./getEndpointVariant"));

export { GetMachineLearningComputeArgs, GetMachineLearningComputeResult, GetMachineLearningComputeOutputArgs } from "./getMachineLearningCompute";
export const getMachineLearningCompute: typeof import("./getMachineLearningCompute").getMachineLearningCompute = null as any;
export const getMachineLearningComputeOutput: typeof import("./getMachineLearningCompute").getMachineLearningComputeOutput = null as any;
utilities.lazyLoad(exports, ["getMachineLearningCompute","getMachineLearningComputeOutput"], () => require("./getMachineLearningCompute"));

export { GetWorkspaceConnectionArgs, GetWorkspaceConnectionResult, GetWorkspaceConnectionOutputArgs } from "./getWorkspaceConnection";
export const getWorkspaceConnection: typeof import("./getWorkspaceConnection").getWorkspaceConnection = null as any;
export const getWorkspaceConnectionOutput: typeof import("./getWorkspaceConnection").getWorkspaceConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceConnection","getWorkspaceConnectionOutput"], () => require("./getWorkspaceConnection"));

export { MachineLearningComputeArgs } from "./machineLearningCompute";
export type MachineLearningCompute = import("./machineLearningCompute").MachineLearningCompute;
export const MachineLearningCompute: typeof import("./machineLearningCompute").MachineLearningCompute = null as any;
utilities.lazyLoad(exports, ["MachineLearningCompute"], () => require("./machineLearningCompute"));

export { WorkspaceConnectionArgs } from "./workspaceConnection";
export type WorkspaceConnection = import("./workspaceConnection").WorkspaceConnection;
export const WorkspaceConnection: typeof import("./workspaceConnection").WorkspaceConnection = null as any;
utilities.lazyLoad(exports, ["WorkspaceConnection"], () => require("./workspaceConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearningservices/v20210401:ACIService":
                return new ACIService(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210401:AKSService":
                return new AKSService(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210401:EndpointVariant":
                return new EndpointVariant(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210401:MachineLearningCompute":
                return new MachineLearningCompute(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210401:WorkspaceConnection":
                return new WorkspaceConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearningservices/v20210401", _module)