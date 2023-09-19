import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetNetworkInterfaceArgs, GetNetworkInterfaceResult, GetNetworkInterfaceOutputArgs } from "./getNetworkInterface";
export const getNetworkInterface: typeof import("./getNetworkInterface").getNetworkInterface = null as any;
export const getNetworkInterfaceOutput: typeof import("./getNetworkInterface").getNetworkInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterface","getNetworkInterfaceOutput"], () => require("./getNetworkInterface"));

export { GetServiceEndpointPolicyArgs, GetServiceEndpointPolicyResult, GetServiceEndpointPolicyOutputArgs } from "./getServiceEndpointPolicy";
export const getServiceEndpointPolicy: typeof import("./getServiceEndpointPolicy").getServiceEndpointPolicy = null as any;
export const getServiceEndpointPolicyOutput: typeof import("./getServiceEndpointPolicy").getServiceEndpointPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getServiceEndpointPolicy","getServiceEndpointPolicyOutput"], () => require("./getServiceEndpointPolicy"));

export { GetServiceEndpointPolicyDefinitionArgs, GetServiceEndpointPolicyDefinitionResult, GetServiceEndpointPolicyDefinitionOutputArgs } from "./getServiceEndpointPolicyDefinition";
export const getServiceEndpointPolicyDefinition: typeof import("./getServiceEndpointPolicyDefinition").getServiceEndpointPolicyDefinition = null as any;
export const getServiceEndpointPolicyDefinitionOutput: typeof import("./getServiceEndpointPolicyDefinition").getServiceEndpointPolicyDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getServiceEndpointPolicyDefinition","getServiceEndpointPolicyDefinitionOutput"], () => require("./getServiceEndpointPolicyDefinition"));

export { GetVirtualHubArgs, GetVirtualHubResult, GetVirtualHubOutputArgs } from "./getVirtualHub";
export const getVirtualHub: typeof import("./getVirtualHub").getVirtualHub = null as any;
export const getVirtualHubOutput: typeof import("./getVirtualHub").getVirtualHubOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualHub","getVirtualHubOutput"], () => require("./getVirtualHub"));

export { GetVirtualWANArgs, GetVirtualWANResult, GetVirtualWANOutputArgs } from "./getVirtualWAN";
export const getVirtualWAN: typeof import("./getVirtualWAN").getVirtualWAN = null as any;
export const getVirtualWANOutput: typeof import("./getVirtualWAN").getVirtualWANOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualWAN","getVirtualWANOutput"], () => require("./getVirtualWAN"));

export { GetVpnConnectionArgs, GetVpnConnectionResult, GetVpnConnectionOutputArgs } from "./getVpnConnection";
export const getVpnConnection: typeof import("./getVpnConnection").getVpnConnection = null as any;
export const getVpnConnectionOutput: typeof import("./getVpnConnection").getVpnConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getVpnConnection","getVpnConnectionOutput"], () => require("./getVpnConnection"));

export { GetVpnGatewayArgs, GetVpnGatewayResult, GetVpnGatewayOutputArgs } from "./getVpnGateway";
export const getVpnGateway: typeof import("./getVpnGateway").getVpnGateway = null as any;
export const getVpnGatewayOutput: typeof import("./getVpnGateway").getVpnGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getVpnGateway","getVpnGatewayOutput"], () => require("./getVpnGateway"));

export { GetVpnSiteArgs, GetVpnSiteResult, GetVpnSiteOutputArgs } from "./getVpnSite";
export const getVpnSite: typeof import("./getVpnSite").getVpnSite = null as any;
export const getVpnSiteOutput: typeof import("./getVpnSite").getVpnSiteOutput = null as any;
utilities.lazyLoad(exports, ["getVpnSite","getVpnSiteOutput"], () => require("./getVpnSite"));

export { NetworkInterfaceArgs } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

export { ServiceEndpointPolicyArgs } from "./serviceEndpointPolicy";
export type ServiceEndpointPolicy = import("./serviceEndpointPolicy").ServiceEndpointPolicy;
export const ServiceEndpointPolicy: typeof import("./serviceEndpointPolicy").ServiceEndpointPolicy = null as any;
utilities.lazyLoad(exports, ["ServiceEndpointPolicy"], () => require("./serviceEndpointPolicy"));

export { ServiceEndpointPolicyDefinitionArgs } from "./serviceEndpointPolicyDefinition";
export type ServiceEndpointPolicyDefinition = import("./serviceEndpointPolicyDefinition").ServiceEndpointPolicyDefinition;
export const ServiceEndpointPolicyDefinition: typeof import("./serviceEndpointPolicyDefinition").ServiceEndpointPolicyDefinition = null as any;
utilities.lazyLoad(exports, ["ServiceEndpointPolicyDefinition"], () => require("./serviceEndpointPolicyDefinition"));

export { VirtualHubArgs } from "./virtualHub";
export type VirtualHub = import("./virtualHub").VirtualHub;
export const VirtualHub: typeof import("./virtualHub").VirtualHub = null as any;
utilities.lazyLoad(exports, ["VirtualHub"], () => require("./virtualHub"));

export { VirtualWANArgs } from "./virtualWAN";
export type VirtualWAN = import("./virtualWAN").VirtualWAN;
export const VirtualWAN: typeof import("./virtualWAN").VirtualWAN = null as any;
utilities.lazyLoad(exports, ["VirtualWAN"], () => require("./virtualWAN"));

export { VpnConnectionArgs } from "./vpnConnection";
export type VpnConnection = import("./vpnConnection").VpnConnection;
export const VpnConnection: typeof import("./vpnConnection").VpnConnection = null as any;
utilities.lazyLoad(exports, ["VpnConnection"], () => require("./vpnConnection"));

export { VpnGatewayArgs } from "./vpnGateway";
export type VpnGateway = import("./vpnGateway").VpnGateway;
export const VpnGateway: typeof import("./vpnGateway").VpnGateway = null as any;
utilities.lazyLoad(exports, ["VpnGateway"], () => require("./vpnGateway"));

export { VpnSiteArgs } from "./vpnSite";
export type VpnSite = import("./vpnSite").VpnSite;
export const VpnSite: typeof import("./vpnSite").VpnSite = null as any;
utilities.lazyLoad(exports, ["VpnSite"], () => require("./vpnSite"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20180701:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:network/v20180701:ServiceEndpointPolicy":
                return new ServiceEndpointPolicy(name, <any>undefined, { urn })
            case "azure-native:network/v20180701:ServiceEndpointPolicyDefinition":
                return new ServiceEndpointPolicyDefinition(name, <any>undefined, { urn })
            case "azure-native:network/v20180701:VirtualHub":
                return new VirtualHub(name, <any>undefined, { urn })
            case "azure-native:network/v20180701:VirtualWAN":
                return new VirtualWAN(name, <any>undefined, { urn })
            case "azure-native:network/v20180701:VpnConnection":
                return new VpnConnection(name, <any>undefined, { urn })
            case "azure-native:network/v20180701:VpnGateway":
                return new VpnGateway(name, <any>undefined, { urn })
            case "azure-native:network/v20180701:VpnSite":
                return new VpnSite(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20180701", _module)
