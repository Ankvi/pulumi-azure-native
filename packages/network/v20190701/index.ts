import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetP2sVpnGatewayArgs, GetP2sVpnGatewayResult, GetP2sVpnGatewayOutputArgs } from "./getP2sVpnGateway";
export const getP2sVpnGateway: typeof import("./getP2sVpnGateway").getP2sVpnGateway = null as any;
export const getP2sVpnGatewayOutput: typeof import("./getP2sVpnGateway").getP2sVpnGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getP2sVpnGateway","getP2sVpnGatewayOutput"], () => require("./getP2sVpnGateway"));

export { GetP2sVpnGatewayP2sVpnConnectionHealthArgs, GetP2sVpnGatewayP2sVpnConnectionHealthResult, GetP2sVpnGatewayP2sVpnConnectionHealthOutputArgs } from "./getP2sVpnGatewayP2sVpnConnectionHealth";
export const getP2sVpnGatewayP2sVpnConnectionHealth: typeof import("./getP2sVpnGatewayP2sVpnConnectionHealth").getP2sVpnGatewayP2sVpnConnectionHealth = null as any;
export const getP2sVpnGatewayP2sVpnConnectionHealthOutput: typeof import("./getP2sVpnGatewayP2sVpnConnectionHealth").getP2sVpnGatewayP2sVpnConnectionHealthOutput = null as any;
utilities.lazyLoad(exports, ["getP2sVpnGatewayP2sVpnConnectionHealth","getP2sVpnGatewayP2sVpnConnectionHealthOutput"], () => require("./getP2sVpnGatewayP2sVpnConnectionHealth"));

export { GetP2sVpnServerConfigurationArgs, GetP2sVpnServerConfigurationResult, GetP2sVpnServerConfigurationOutputArgs } from "./getP2sVpnServerConfiguration";
export const getP2sVpnServerConfiguration: typeof import("./getP2sVpnServerConfiguration").getP2sVpnServerConfiguration = null as any;
export const getP2sVpnServerConfigurationOutput: typeof import("./getP2sVpnServerConfiguration").getP2sVpnServerConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getP2sVpnServerConfiguration","getP2sVpnServerConfigurationOutput"], () => require("./getP2sVpnServerConfiguration"));

export { GetVirtualWanArgs, GetVirtualWanResult, GetVirtualWanOutputArgs } from "./getVirtualWan";
export const getVirtualWan: typeof import("./getVirtualWan").getVirtualWan = null as any;
export const getVirtualWanOutput: typeof import("./getVirtualWan").getVirtualWanOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualWan","getVirtualWanOutput"], () => require("./getVirtualWan"));

export { GetWebApplicationFirewallPolicyArgs, GetWebApplicationFirewallPolicyResult, GetWebApplicationFirewallPolicyOutputArgs } from "./getWebApplicationFirewallPolicy";
export const getWebApplicationFirewallPolicy: typeof import("./getWebApplicationFirewallPolicy").getWebApplicationFirewallPolicy = null as any;
export const getWebApplicationFirewallPolicyOutput: typeof import("./getWebApplicationFirewallPolicy").getWebApplicationFirewallPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getWebApplicationFirewallPolicy","getWebApplicationFirewallPolicyOutput"], () => require("./getWebApplicationFirewallPolicy"));

export { P2sVpnGatewayArgs } from "./p2sVpnGateway";
export type P2sVpnGateway = import("./p2sVpnGateway").P2sVpnGateway;
export const P2sVpnGateway: typeof import("./p2sVpnGateway").P2sVpnGateway = null as any;
utilities.lazyLoad(exports, ["P2sVpnGateway"], () => require("./p2sVpnGateway"));

export { P2sVpnServerConfigurationArgs } from "./p2sVpnServerConfiguration";
export type P2sVpnServerConfiguration = import("./p2sVpnServerConfiguration").P2sVpnServerConfiguration;
export const P2sVpnServerConfiguration: typeof import("./p2sVpnServerConfiguration").P2sVpnServerConfiguration = null as any;
utilities.lazyLoad(exports, ["P2sVpnServerConfiguration"], () => require("./p2sVpnServerConfiguration"));

export { VirtualWanArgs } from "./virtualWan";
export type VirtualWan = import("./virtualWan").VirtualWan;
export const VirtualWan: typeof import("./virtualWan").VirtualWan = null as any;
utilities.lazyLoad(exports, ["VirtualWan"], () => require("./virtualWan"));

export { WebApplicationFirewallPolicyArgs } from "./webApplicationFirewallPolicy";
export type WebApplicationFirewallPolicy = import("./webApplicationFirewallPolicy").WebApplicationFirewallPolicy;
export const WebApplicationFirewallPolicy: typeof import("./webApplicationFirewallPolicy").WebApplicationFirewallPolicy = null as any;
utilities.lazyLoad(exports, ["WebApplicationFirewallPolicy"], () => require("./webApplicationFirewallPolicy"));


// Export enums:
export * from "../types/enums/v20190701";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20190701:P2sVpnGateway":
                return new P2sVpnGateway(name, <any>undefined, { urn })
            case "azure-native:network/v20190701:P2sVpnServerConfiguration":
                return new P2sVpnServerConfiguration(name, <any>undefined, { urn })
            case "azure-native:network/v20190701:VirtualWan":
                return new VirtualWan(name, <any>undefined, { urn })
            case "azure-native:network/v20190701:WebApplicationFirewallPolicy":
                return new WebApplicationFirewallPolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20190701", _module)
