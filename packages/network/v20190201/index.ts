import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ExpressRouteCircuitPeeringArgs } from "./expressRouteCircuitPeering";
export type ExpressRouteCircuitPeering = import("./expressRouteCircuitPeering").ExpressRouteCircuitPeering;
export const ExpressRouteCircuitPeering: typeof import("./expressRouteCircuitPeering").ExpressRouteCircuitPeering = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuitPeering"], () => require("./expressRouteCircuitPeering"));

export { GetExpressRouteCircuitPeeringArgs, GetExpressRouteCircuitPeeringResult, GetExpressRouteCircuitPeeringOutputArgs } from "./getExpressRouteCircuitPeering";
export const getExpressRouteCircuitPeering: typeof import("./getExpressRouteCircuitPeering").getExpressRouteCircuitPeering = null as any;
export const getExpressRouteCircuitPeeringOutput: typeof import("./getExpressRouteCircuitPeering").getExpressRouteCircuitPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuitPeering","getExpressRouteCircuitPeeringOutput"], () => require("./getExpressRouteCircuitPeering"));

export { GetInterfaceEndpointArgs, GetInterfaceEndpointResult, GetInterfaceEndpointOutputArgs } from "./getInterfaceEndpoint";
export const getInterfaceEndpoint: typeof import("./getInterfaceEndpoint").getInterfaceEndpoint = null as any;
export const getInterfaceEndpointOutput: typeof import("./getInterfaceEndpoint").getInterfaceEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getInterfaceEndpoint","getInterfaceEndpointOutput"], () => require("./getInterfaceEndpoint"));

export { GetNetworkInterfaceArgs, GetNetworkInterfaceResult, GetNetworkInterfaceOutputArgs } from "./getNetworkInterface";
export const getNetworkInterface: typeof import("./getNetworkInterface").getNetworkInterface = null as any;
export const getNetworkInterfaceOutput: typeof import("./getNetworkInterface").getNetworkInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterface","getNetworkInterfaceOutput"], () => require("./getNetworkInterface"));

export { GetSubnetArgs, GetSubnetResult, GetSubnetOutputArgs } from "./getSubnet";
export const getSubnet: typeof import("./getSubnet").getSubnet = null as any;
export const getSubnetOutput: typeof import("./getSubnet").getSubnetOutput = null as any;
utilities.lazyLoad(exports, ["getSubnet","getSubnetOutput"], () => require("./getSubnet"));

export { InterfaceEndpointArgs } from "./interfaceEndpoint";
export type InterfaceEndpoint = import("./interfaceEndpoint").InterfaceEndpoint;
export const InterfaceEndpoint: typeof import("./interfaceEndpoint").InterfaceEndpoint = null as any;
utilities.lazyLoad(exports, ["InterfaceEndpoint"], () => require("./interfaceEndpoint"));

export { NetworkInterfaceArgs } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

export { SubnetArgs } from "./subnet";
export type Subnet = import("./subnet").Subnet;
export const Subnet: typeof import("./subnet").Subnet = null as any;
utilities.lazyLoad(exports, ["Subnet"], () => require("./subnet"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20190201:ExpressRouteCircuitPeering":
                return new ExpressRouteCircuitPeering(name, <any>undefined, { urn })
            case "azure-native:network/v20190201:InterfaceEndpoint":
                return new InterfaceEndpoint(name, <any>undefined, { urn })
            case "azure-native:network/v20190201:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:network/v20190201:Subnet":
                return new Subnet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20190201", _module)
