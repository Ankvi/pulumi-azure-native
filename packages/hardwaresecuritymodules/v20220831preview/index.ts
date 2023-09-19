import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CloudHsmClusterArgs } from "./cloudHsmCluster";
export type CloudHsmCluster = import("./cloudHsmCluster").CloudHsmCluster;
export const CloudHsmCluster: typeof import("./cloudHsmCluster").CloudHsmCluster = null as any;
utilities.lazyLoad(exports, ["CloudHsmCluster"], () => require("./cloudHsmCluster"));

export { CloudHsmClusterPrivateEndpointConnectionArgs } from "./cloudHsmClusterPrivateEndpointConnection";
export type CloudHsmClusterPrivateEndpointConnection = import("./cloudHsmClusterPrivateEndpointConnection").CloudHsmClusterPrivateEndpointConnection;
export const CloudHsmClusterPrivateEndpointConnection: typeof import("./cloudHsmClusterPrivateEndpointConnection").CloudHsmClusterPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["CloudHsmClusterPrivateEndpointConnection"], () => require("./cloudHsmClusterPrivateEndpointConnection"));

export { GetCloudHsmClusterArgs, GetCloudHsmClusterResult, GetCloudHsmClusterOutputArgs } from "./getCloudHsmCluster";
export const getCloudHsmCluster: typeof import("./getCloudHsmCluster").getCloudHsmCluster = null as any;
export const getCloudHsmClusterOutput: typeof import("./getCloudHsmCluster").getCloudHsmClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCloudHsmCluster","getCloudHsmClusterOutput"], () => require("./getCloudHsmCluster"));

export { GetCloudHsmClusterPrivateEndpointConnectionArgs, GetCloudHsmClusterPrivateEndpointConnectionResult, GetCloudHsmClusterPrivateEndpointConnectionOutputArgs } from "./getCloudHsmClusterPrivateEndpointConnection";
export const getCloudHsmClusterPrivateEndpointConnection: typeof import("./getCloudHsmClusterPrivateEndpointConnection").getCloudHsmClusterPrivateEndpointConnection = null as any;
export const getCloudHsmClusterPrivateEndpointConnectionOutput: typeof import("./getCloudHsmClusterPrivateEndpointConnection").getCloudHsmClusterPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getCloudHsmClusterPrivateEndpointConnection","getCloudHsmClusterPrivateEndpointConnectionOutput"], () => require("./getCloudHsmClusterPrivateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hardwaresecuritymodules/v20220831preview:CloudHsmCluster":
                return new CloudHsmCluster(name, <any>undefined, { urn })
            case "azure-native:hardwaresecuritymodules/v20220831preview:CloudHsmClusterPrivateEndpointConnection":
                return new CloudHsmClusterPrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hardwaresecuritymodules/v20220831preview", _module)
