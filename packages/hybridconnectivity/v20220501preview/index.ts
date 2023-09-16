import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EndpointArgs } from "./endpoint";
export type Endpoint = import("./endpoint").Endpoint;
export const Endpoint: typeof import("./endpoint").Endpoint = null as any;
utilities.lazyLoad(exports, ["Endpoint"], () => require("./endpoint"));

export { GetEndpointArgs, GetEndpointResult, GetEndpointOutputArgs } from "./getEndpoint";
export const getEndpoint: typeof import("./getEndpoint").getEndpoint = null as any;
export const getEndpointOutput: typeof import("./getEndpoint").getEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getEndpoint","getEndpointOutput"], () => require("./getEndpoint"));

export { ListEndpointCredentialsArgs, ListEndpointCredentialsResult, ListEndpointCredentialsOutputArgs } from "./listEndpointCredentials";
export const listEndpointCredentials: typeof import("./listEndpointCredentials").listEndpointCredentials = null as any;
export const listEndpointCredentialsOutput: typeof import("./listEndpointCredentials").listEndpointCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listEndpointCredentials","listEndpointCredentialsOutput"], () => require("./listEndpointCredentials"));

export { ListEndpointManagedProxyDetailsArgs, ListEndpointManagedProxyDetailsResult, ListEndpointManagedProxyDetailsOutputArgs } from "./listEndpointManagedProxyDetails";
export const listEndpointManagedProxyDetails: typeof import("./listEndpointManagedProxyDetails").listEndpointManagedProxyDetails = null as any;
export const listEndpointManagedProxyDetailsOutput: typeof import("./listEndpointManagedProxyDetails").listEndpointManagedProxyDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listEndpointManagedProxyDetails","listEndpointManagedProxyDetailsOutput"], () => require("./listEndpointManagedProxyDetails"));


// Export enums:
export * from "../types/enums/v20220501preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridconnectivity/v20220501preview:Endpoint":
                return new Endpoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridconnectivity/v20220501preview", _module)
