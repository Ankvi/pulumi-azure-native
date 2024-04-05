import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationGatewayArgs } from "./applicationGateway";
export type ApplicationGateway = import("./applicationGateway").ApplicationGateway;
export const ApplicationGateway: typeof import("./applicationGateway").ApplicationGateway = null as any;
utilities.lazyLoad(exports, ["ApplicationGateway"], () => require("./applicationGateway"));

export { ExpressRouteCircuitArgs } from "./expressRouteCircuit";
export type ExpressRouteCircuit = import("./expressRouteCircuit").ExpressRouteCircuit;
export const ExpressRouteCircuit: typeof import("./expressRouteCircuit").ExpressRouteCircuit = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuit"], () => require("./expressRouteCircuit"));

export { ExpressRouteCircuitAuthorizationArgs } from "./expressRouteCircuitAuthorization";
export type ExpressRouteCircuitAuthorization = import("./expressRouteCircuitAuthorization").ExpressRouteCircuitAuthorization;
export const ExpressRouteCircuitAuthorization: typeof import("./expressRouteCircuitAuthorization").ExpressRouteCircuitAuthorization = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuitAuthorization"], () => require("./expressRouteCircuitAuthorization"));

export { ExpressRouteCircuitPeeringArgs } from "./expressRouteCircuitPeering";
export type ExpressRouteCircuitPeering = import("./expressRouteCircuitPeering").ExpressRouteCircuitPeering;
export const ExpressRouteCircuitPeering: typeof import("./expressRouteCircuitPeering").ExpressRouteCircuitPeering = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuitPeering"], () => require("./expressRouteCircuitPeering"));

export { GetApplicationGatewayArgs, GetApplicationGatewayResult, GetApplicationGatewayOutputArgs } from "./getApplicationGateway";
export const getApplicationGateway: typeof import("./getApplicationGateway").getApplicationGateway = null as any;
export const getApplicationGatewayOutput: typeof import("./getApplicationGateway").getApplicationGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGateway","getApplicationGatewayOutput"], () => require("./getApplicationGateway"));

export { GetApplicationGatewayBackendHealthOnDemandArgs, GetApplicationGatewayBackendHealthOnDemandResult, GetApplicationGatewayBackendHealthOnDemandOutputArgs } from "./getApplicationGatewayBackendHealthOnDemand";
export const getApplicationGatewayBackendHealthOnDemand: typeof import("./getApplicationGatewayBackendHealthOnDemand").getApplicationGatewayBackendHealthOnDemand = null as any;
export const getApplicationGatewayBackendHealthOnDemandOutput: typeof import("./getApplicationGatewayBackendHealthOnDemand").getApplicationGatewayBackendHealthOnDemandOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGatewayBackendHealthOnDemand","getApplicationGatewayBackendHealthOnDemandOutput"], () => require("./getApplicationGatewayBackendHealthOnDemand"));

export { GetExpressRouteCircuitArgs, GetExpressRouteCircuitResult, GetExpressRouteCircuitOutputArgs } from "./getExpressRouteCircuit";
export const getExpressRouteCircuit: typeof import("./getExpressRouteCircuit").getExpressRouteCircuit = null as any;
export const getExpressRouteCircuitOutput: typeof import("./getExpressRouteCircuit").getExpressRouteCircuitOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuit","getExpressRouteCircuitOutput"], () => require("./getExpressRouteCircuit"));

export { GetExpressRouteCircuitAuthorizationArgs, GetExpressRouteCircuitAuthorizationResult, GetExpressRouteCircuitAuthorizationOutputArgs } from "./getExpressRouteCircuitAuthorization";
export const getExpressRouteCircuitAuthorization: typeof import("./getExpressRouteCircuitAuthorization").getExpressRouteCircuitAuthorization = null as any;
export const getExpressRouteCircuitAuthorizationOutput: typeof import("./getExpressRouteCircuitAuthorization").getExpressRouteCircuitAuthorizationOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuitAuthorization","getExpressRouteCircuitAuthorizationOutput"], () => require("./getExpressRouteCircuitAuthorization"));

export { GetExpressRouteCircuitPeeringArgs, GetExpressRouteCircuitPeeringResult, GetExpressRouteCircuitPeeringOutputArgs } from "./getExpressRouteCircuitPeering";
export const getExpressRouteCircuitPeering: typeof import("./getExpressRouteCircuitPeering").getExpressRouteCircuitPeering = null as any;
export const getExpressRouteCircuitPeeringOutput: typeof import("./getExpressRouteCircuitPeering").getExpressRouteCircuitPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuitPeering","getExpressRouteCircuitPeeringOutput"], () => require("./getExpressRouteCircuitPeering"));

export { GetInboundNatRuleArgs, GetInboundNatRuleResult, GetInboundNatRuleOutputArgs } from "./getInboundNatRule";
export const getInboundNatRule: typeof import("./getInboundNatRule").getInboundNatRule = null as any;
export const getInboundNatRuleOutput: typeof import("./getInboundNatRule").getInboundNatRuleOutput = null as any;
utilities.lazyLoad(exports, ["getInboundNatRule","getInboundNatRuleOutput"], () => require("./getInboundNatRule"));

export { GetLoadBalancerArgs, GetLoadBalancerResult, GetLoadBalancerOutputArgs } from "./getLoadBalancer";
export const getLoadBalancer: typeof import("./getLoadBalancer").getLoadBalancer = null as any;
export const getLoadBalancerOutput: typeof import("./getLoadBalancer").getLoadBalancerOutput = null as any;
utilities.lazyLoad(exports, ["getLoadBalancer","getLoadBalancerOutput"], () => require("./getLoadBalancer"));

export { GetNatGatewayArgs, GetNatGatewayResult, GetNatGatewayOutputArgs } from "./getNatGateway";
export const getNatGateway: typeof import("./getNatGateway").getNatGateway = null as any;
export const getNatGatewayOutput: typeof import("./getNatGateway").getNatGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getNatGateway","getNatGatewayOutput"], () => require("./getNatGateway"));

export { GetNetworkInterfaceArgs, GetNetworkInterfaceResult, GetNetworkInterfaceOutputArgs } from "./getNetworkInterface";
export const getNetworkInterface: typeof import("./getNetworkInterface").getNetworkInterface = null as any;
export const getNetworkInterfaceOutput: typeof import("./getNetworkInterface").getNetworkInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterface","getNetworkInterfaceOutput"], () => require("./getNetworkInterface"));

export { GetNetworkSecurityGroupArgs, GetNetworkSecurityGroupResult, GetNetworkSecurityGroupOutputArgs } from "./getNetworkSecurityGroup";
export const getNetworkSecurityGroup: typeof import("./getNetworkSecurityGroup").getNetworkSecurityGroup = null as any;
export const getNetworkSecurityGroupOutput: typeof import("./getNetworkSecurityGroup").getNetworkSecurityGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityGroup","getNetworkSecurityGroupOutput"], () => require("./getNetworkSecurityGroup"));

export { GetPublicIPAddressArgs, GetPublicIPAddressResult, GetPublicIPAddressOutputArgs } from "./getPublicIPAddress";
export const getPublicIPAddress: typeof import("./getPublicIPAddress").getPublicIPAddress = null as any;
export const getPublicIPAddressOutput: typeof import("./getPublicIPAddress").getPublicIPAddressOutput = null as any;
utilities.lazyLoad(exports, ["getPublicIPAddress","getPublicIPAddressOutput"], () => require("./getPublicIPAddress"));

export { GetPublicIPPrefixArgs, GetPublicIPPrefixResult, GetPublicIPPrefixOutputArgs } from "./getPublicIPPrefix";
export const getPublicIPPrefix: typeof import("./getPublicIPPrefix").getPublicIPPrefix = null as any;
export const getPublicIPPrefixOutput: typeof import("./getPublicIPPrefix").getPublicIPPrefixOutput = null as any;
utilities.lazyLoad(exports, ["getPublicIPPrefix","getPublicIPPrefixOutput"], () => require("./getPublicIPPrefix"));

export { GetRouteArgs, GetRouteResult, GetRouteOutputArgs } from "./getRoute";
export const getRoute: typeof import("./getRoute").getRoute = null as any;
export const getRouteOutput: typeof import("./getRoute").getRouteOutput = null as any;
utilities.lazyLoad(exports, ["getRoute","getRouteOutput"], () => require("./getRoute"));

export { GetRouteTableArgs, GetRouteTableResult, GetRouteTableOutputArgs } from "./getRouteTable";
export const getRouteTable: typeof import("./getRouteTable").getRouteTable = null as any;
export const getRouteTableOutput: typeof import("./getRouteTable").getRouteTableOutput = null as any;
utilities.lazyLoad(exports, ["getRouteTable","getRouteTableOutput"], () => require("./getRouteTable"));

export { GetSecurityRuleArgs, GetSecurityRuleResult, GetSecurityRuleOutputArgs } from "./getSecurityRule";
export const getSecurityRule: typeof import("./getSecurityRule").getSecurityRule = null as any;
export const getSecurityRuleOutput: typeof import("./getSecurityRule").getSecurityRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityRule","getSecurityRuleOutput"], () => require("./getSecurityRule"));

export { GetSubnetArgs, GetSubnetResult, GetSubnetOutputArgs } from "./getSubnet";
export const getSubnet: typeof import("./getSubnet").getSubnet = null as any;
export const getSubnetOutput: typeof import("./getSubnet").getSubnetOutput = null as any;
utilities.lazyLoad(exports, ["getSubnet","getSubnetOutput"], () => require("./getSubnet"));

export { GetVirtualNetworkArgs, GetVirtualNetworkResult, GetVirtualNetworkOutputArgs } from "./getVirtualNetwork";
export const getVirtualNetwork: typeof import("./getVirtualNetwork").getVirtualNetwork = null as any;
export const getVirtualNetworkOutput: typeof import("./getVirtualNetwork").getVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetwork","getVirtualNetworkOutput"], () => require("./getVirtualNetwork"));

export { GetVirtualNetworkPeeringArgs, GetVirtualNetworkPeeringResult, GetVirtualNetworkPeeringOutputArgs } from "./getVirtualNetworkPeering";
export const getVirtualNetworkPeering: typeof import("./getVirtualNetworkPeering").getVirtualNetworkPeering = null as any;
export const getVirtualNetworkPeeringOutput: typeof import("./getVirtualNetworkPeering").getVirtualNetworkPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkPeering","getVirtualNetworkPeeringOutput"], () => require("./getVirtualNetworkPeering"));

export { InboundNatRuleArgs } from "./inboundNatRule";
export type InboundNatRule = import("./inboundNatRule").InboundNatRule;
export const InboundNatRule: typeof import("./inboundNatRule").InboundNatRule = null as any;
utilities.lazyLoad(exports, ["InboundNatRule"], () => require("./inboundNatRule"));

export { LoadBalancerArgs } from "./loadBalancer";
export type LoadBalancer = import("./loadBalancer").LoadBalancer;
export const LoadBalancer: typeof import("./loadBalancer").LoadBalancer = null as any;
utilities.lazyLoad(exports, ["LoadBalancer"], () => require("./loadBalancer"));

export { NatGatewayArgs } from "./natGateway";
export type NatGateway = import("./natGateway").NatGateway;
export const NatGateway: typeof import("./natGateway").NatGateway = null as any;
utilities.lazyLoad(exports, ["NatGateway"], () => require("./natGateway"));

export { NetworkInterfaceArgs } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

export { NetworkSecurityGroupArgs } from "./networkSecurityGroup";
export type NetworkSecurityGroup = import("./networkSecurityGroup").NetworkSecurityGroup;
export const NetworkSecurityGroup: typeof import("./networkSecurityGroup").NetworkSecurityGroup = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityGroup"], () => require("./networkSecurityGroup"));

export { PublicIPAddressArgs } from "./publicIPAddress";
export type PublicIPAddress = import("./publicIPAddress").PublicIPAddress;
export const PublicIPAddress: typeof import("./publicIPAddress").PublicIPAddress = null as any;
utilities.lazyLoad(exports, ["PublicIPAddress"], () => require("./publicIPAddress"));

export { PublicIPPrefixArgs } from "./publicIPPrefix";
export type PublicIPPrefix = import("./publicIPPrefix").PublicIPPrefix;
export const PublicIPPrefix: typeof import("./publicIPPrefix").PublicIPPrefix = null as any;
utilities.lazyLoad(exports, ["PublicIPPrefix"], () => require("./publicIPPrefix"));

export { RouteArgs } from "./route";
export type Route = import("./route").Route;
export const Route: typeof import("./route").Route = null as any;
utilities.lazyLoad(exports, ["Route"], () => require("./route"));

export { RouteTableArgs } from "./routeTable";
export type RouteTable = import("./routeTable").RouteTable;
export const RouteTable: typeof import("./routeTable").RouteTable = null as any;
utilities.lazyLoad(exports, ["RouteTable"], () => require("./routeTable"));

export { SecurityRuleArgs } from "./securityRule";
export type SecurityRule = import("./securityRule").SecurityRule;
export const SecurityRule: typeof import("./securityRule").SecurityRule = null as any;
utilities.lazyLoad(exports, ["SecurityRule"], () => require("./securityRule"));

export { SubnetArgs } from "./subnet";
export type Subnet = import("./subnet").Subnet;
export const Subnet: typeof import("./subnet").Subnet = null as any;
utilities.lazyLoad(exports, ["Subnet"], () => require("./subnet"));

export { VirtualNetworkArgs } from "./virtualNetwork";
export type VirtualNetwork = import("./virtualNetwork").VirtualNetwork;
export const VirtualNetwork: typeof import("./virtualNetwork").VirtualNetwork = null as any;
utilities.lazyLoad(exports, ["VirtualNetwork"], () => require("./virtualNetwork"));

export { VirtualNetworkPeeringArgs } from "./virtualNetworkPeering";
export type VirtualNetworkPeering = import("./virtualNetworkPeering").VirtualNetworkPeering;
export const VirtualNetworkPeering: typeof import("./virtualNetworkPeering").VirtualNetworkPeering = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkPeering"], () => require("./virtualNetworkPeering"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20190601:ApplicationGateway":
                return new ApplicationGateway(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:ExpressRouteCircuit":
                return new ExpressRouteCircuit(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:ExpressRouteCircuitAuthorization":
                return new ExpressRouteCircuitAuthorization(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:ExpressRouteCircuitPeering":
                return new ExpressRouteCircuitPeering(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:InboundNatRule":
                return new InboundNatRule(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:LoadBalancer":
                return new LoadBalancer(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:NatGateway":
                return new NatGateway(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:NetworkSecurityGroup":
                return new NetworkSecurityGroup(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:PublicIPAddress":
                return new PublicIPAddress(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:PublicIPPrefix":
                return new PublicIPPrefix(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:Route":
                return new Route(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:RouteTable":
                return new RouteTable(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:SecurityRule":
                return new SecurityRule(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:Subnet":
                return new Subnet(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            case "azure-native:network/v20190601:VirtualNetworkPeering":
                return new VirtualNetworkPeering(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20190601", _module)