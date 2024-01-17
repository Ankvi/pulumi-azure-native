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

export { GetServiceConfigurationArgs, GetServiceConfigurationResult, GetServiceConfigurationOutputArgs } from "./getServiceConfiguration";
export const getServiceConfiguration: typeof import("./getServiceConfiguration").getServiceConfiguration = null as any;
export const getServiceConfigurationOutput: typeof import("./getServiceConfiguration").getServiceConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getServiceConfiguration","getServiceConfigurationOutput"], () => require("./getServiceConfiguration"));

export { ListEndpointCredentialsArgs, ListEndpointCredentialsResult, ListEndpointCredentialsOutputArgs } from "./listEndpointCredentials";
export const listEndpointCredentials: typeof import("./listEndpointCredentials").listEndpointCredentials = null as any;
export const listEndpointCredentialsOutput: typeof import("./listEndpointCredentials").listEndpointCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listEndpointCredentials","listEndpointCredentialsOutput"], () => require("./listEndpointCredentials"));

export { ListEndpointIngressGatewayCredentialsArgs, ListEndpointIngressGatewayCredentialsResult, ListEndpointIngressGatewayCredentialsOutputArgs } from "./listEndpointIngressGatewayCredentials";
export const listEndpointIngressGatewayCredentials: typeof import("./listEndpointIngressGatewayCredentials").listEndpointIngressGatewayCredentials = null as any;
export const listEndpointIngressGatewayCredentialsOutput: typeof import("./listEndpointIngressGatewayCredentials").listEndpointIngressGatewayCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listEndpointIngressGatewayCredentials","listEndpointIngressGatewayCredentialsOutput"], () => require("./listEndpointIngressGatewayCredentials"));

export { ListEndpointManagedProxyDetailsArgs, ListEndpointManagedProxyDetailsResult, ListEndpointManagedProxyDetailsOutputArgs } from "./listEndpointManagedProxyDetails";
export const listEndpointManagedProxyDetails: typeof import("./listEndpointManagedProxyDetails").listEndpointManagedProxyDetails = null as any;
export const listEndpointManagedProxyDetailsOutput: typeof import("./listEndpointManagedProxyDetails").listEndpointManagedProxyDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listEndpointManagedProxyDetails","listEndpointManagedProxyDetailsOutput"], () => require("./listEndpointManagedProxyDetails"));

export { ServiceConfigurationArgs } from "./serviceConfiguration";
export type ServiceConfiguration = import("./serviceConfiguration").ServiceConfiguration;
export const ServiceConfiguration: typeof import("./serviceConfiguration").ServiceConfiguration = null as any;
utilities.lazyLoad(exports, ["ServiceConfiguration"], () => require("./serviceConfiguration"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridconnectivity:Endpoint":
                return new Endpoint(name, <any>undefined, { urn })
            case "azure-native:hybridconnectivity:ServiceConfiguration":
                return new ServiceConfiguration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridconnectivity", _module)