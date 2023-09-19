import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationGatewayArgs } from "./applicationGateway";
export type ApplicationGateway = import("./applicationGateway").ApplicationGateway;
export const ApplicationGateway: typeof import("./applicationGateway").ApplicationGateway = null as any;
utilities.lazyLoad(exports, ["ApplicationGateway"], () => require("./applicationGateway"));

export { ExpressRouteCircuitPeeringArgs } from "./expressRouteCircuitPeering";
export type ExpressRouteCircuitPeering = import("./expressRouteCircuitPeering").ExpressRouteCircuitPeering;
export const ExpressRouteCircuitPeering: typeof import("./expressRouteCircuitPeering").ExpressRouteCircuitPeering = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCircuitPeering"], () => require("./expressRouteCircuitPeering"));

export { ExpressRouteCrossConnectionPeeringArgs } from "./expressRouteCrossConnectionPeering";
export type ExpressRouteCrossConnectionPeering = import("./expressRouteCrossConnectionPeering").ExpressRouteCrossConnectionPeering;
export const ExpressRouteCrossConnectionPeering: typeof import("./expressRouteCrossConnectionPeering").ExpressRouteCrossConnectionPeering = null as any;
utilities.lazyLoad(exports, ["ExpressRouteCrossConnectionPeering"], () => require("./expressRouteCrossConnectionPeering"));

export { ExpressRoutePortArgs } from "./expressRoutePort";
export type ExpressRoutePort = import("./expressRoutePort").ExpressRoutePort;
export const ExpressRoutePort: typeof import("./expressRoutePort").ExpressRoutePort = null as any;
utilities.lazyLoad(exports, ["ExpressRoutePort"], () => require("./expressRoutePort"));

export { GetApplicationGatewayArgs, GetApplicationGatewayResult, GetApplicationGatewayOutputArgs } from "./getApplicationGateway";
export const getApplicationGateway: typeof import("./getApplicationGateway").getApplicationGateway = null as any;
export const getApplicationGatewayOutput: typeof import("./getApplicationGateway").getApplicationGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGateway","getApplicationGatewayOutput"], () => require("./getApplicationGateway"));

export { GetApplicationGatewayBackendHealthOnDemandArgs, GetApplicationGatewayBackendHealthOnDemandResult, GetApplicationGatewayBackendHealthOnDemandOutputArgs } from "./getApplicationGatewayBackendHealthOnDemand";
export const getApplicationGatewayBackendHealthOnDemand: typeof import("./getApplicationGatewayBackendHealthOnDemand").getApplicationGatewayBackendHealthOnDemand = null as any;
export const getApplicationGatewayBackendHealthOnDemandOutput: typeof import("./getApplicationGatewayBackendHealthOnDemand").getApplicationGatewayBackendHealthOnDemandOutput = null as any;
utilities.lazyLoad(exports, ["getApplicationGatewayBackendHealthOnDemand","getApplicationGatewayBackendHealthOnDemandOutput"], () => require("./getApplicationGatewayBackendHealthOnDemand"));

export { GetExpressRouteCircuitPeeringArgs, GetExpressRouteCircuitPeeringResult, GetExpressRouteCircuitPeeringOutputArgs } from "./getExpressRouteCircuitPeering";
export const getExpressRouteCircuitPeering: typeof import("./getExpressRouteCircuitPeering").getExpressRouteCircuitPeering = null as any;
export const getExpressRouteCircuitPeeringOutput: typeof import("./getExpressRouteCircuitPeering").getExpressRouteCircuitPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCircuitPeering","getExpressRouteCircuitPeeringOutput"], () => require("./getExpressRouteCircuitPeering"));

export { GetExpressRouteCrossConnectionPeeringArgs, GetExpressRouteCrossConnectionPeeringResult, GetExpressRouteCrossConnectionPeeringOutputArgs } from "./getExpressRouteCrossConnectionPeering";
export const getExpressRouteCrossConnectionPeering: typeof import("./getExpressRouteCrossConnectionPeering").getExpressRouteCrossConnectionPeering = null as any;
export const getExpressRouteCrossConnectionPeeringOutput: typeof import("./getExpressRouteCrossConnectionPeering").getExpressRouteCrossConnectionPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRouteCrossConnectionPeering","getExpressRouteCrossConnectionPeeringOutput"], () => require("./getExpressRouteCrossConnectionPeering"));

export { GetExpressRoutePortArgs, GetExpressRoutePortResult, GetExpressRoutePortOutputArgs } from "./getExpressRoutePort";
export const getExpressRoutePort: typeof import("./getExpressRoutePort").getExpressRoutePort = null as any;
export const getExpressRoutePortOutput: typeof import("./getExpressRoutePort").getExpressRoutePortOutput = null as any;
utilities.lazyLoad(exports, ["getExpressRoutePort","getExpressRoutePortOutput"], () => require("./getExpressRoutePort"));

export { GetLoadBalancerArgs, GetLoadBalancerResult, GetLoadBalancerOutputArgs } from "./getLoadBalancer";
export const getLoadBalancer: typeof import("./getLoadBalancer").getLoadBalancer = null as any;
export const getLoadBalancerOutput: typeof import("./getLoadBalancer").getLoadBalancerOutput = null as any;
utilities.lazyLoad(exports, ["getLoadBalancer","getLoadBalancerOutput"], () => require("./getLoadBalancer"));

export { GetLocalNetworkGatewayArgs, GetLocalNetworkGatewayResult, GetLocalNetworkGatewayOutputArgs } from "./getLocalNetworkGateway";
export const getLocalNetworkGateway: typeof import("./getLocalNetworkGateway").getLocalNetworkGateway = null as any;
export const getLocalNetworkGatewayOutput: typeof import("./getLocalNetworkGateway").getLocalNetworkGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getLocalNetworkGateway","getLocalNetworkGatewayOutput"], () => require("./getLocalNetworkGateway"));

export { GetNatGatewayArgs, GetNatGatewayResult, GetNatGatewayOutputArgs } from "./getNatGateway";
export const getNatGateway: typeof import("./getNatGateway").getNatGateway = null as any;
export const getNatGatewayOutput: typeof import("./getNatGateway").getNatGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getNatGateway","getNatGatewayOutput"], () => require("./getNatGateway"));

export { GetNetworkInterfaceArgs, GetNetworkInterfaceResult, GetNetworkInterfaceOutputArgs } from "./getNetworkInterface";
export const getNetworkInterface: typeof import("./getNetworkInterface").getNetworkInterface = null as any;
export const getNetworkInterfaceOutput: typeof import("./getNetworkInterface").getNetworkInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterface","getNetworkInterfaceOutput"], () => require("./getNetworkInterface"));

export { GetNetworkProfileArgs, GetNetworkProfileResult, GetNetworkProfileOutputArgs } from "./getNetworkProfile";
export const getNetworkProfile: typeof import("./getNetworkProfile").getNetworkProfile = null as any;
export const getNetworkProfileOutput: typeof import("./getNetworkProfile").getNetworkProfileOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkProfile","getNetworkProfileOutput"], () => require("./getNetworkProfile"));

export { GetNetworkSecurityGroupArgs, GetNetworkSecurityGroupResult, GetNetworkSecurityGroupOutputArgs } from "./getNetworkSecurityGroup";
export const getNetworkSecurityGroup: typeof import("./getNetworkSecurityGroup").getNetworkSecurityGroup = null as any;
export const getNetworkSecurityGroupOutput: typeof import("./getNetworkSecurityGroup").getNetworkSecurityGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityGroup","getNetworkSecurityGroupOutput"], () => require("./getNetworkSecurityGroup"));

export { GetPrivateLinkServiceArgs, GetPrivateLinkServiceResult, GetPrivateLinkServiceOutputArgs } from "./getPrivateLinkService";
export const getPrivateLinkService: typeof import("./getPrivateLinkService").getPrivateLinkService = null as any;
export const getPrivateLinkServiceOutput: typeof import("./getPrivateLinkService").getPrivateLinkServiceOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkService","getPrivateLinkServiceOutput"], () => require("./getPrivateLinkService"));

export { GetPublicIPAddressArgs, GetPublicIPAddressResult, GetPublicIPAddressOutputArgs } from "./getPublicIPAddress";
export const getPublicIPAddress: typeof import("./getPublicIPAddress").getPublicIPAddress = null as any;
export const getPublicIPAddressOutput: typeof import("./getPublicIPAddress").getPublicIPAddressOutput = null as any;
utilities.lazyLoad(exports, ["getPublicIPAddress","getPublicIPAddressOutput"], () => require("./getPublicIPAddress"));

export { GetPublicIPPrefixArgs, GetPublicIPPrefixResult, GetPublicIPPrefixOutputArgs } from "./getPublicIPPrefix";
export const getPublicIPPrefix: typeof import("./getPublicIPPrefix").getPublicIPPrefix = null as any;
export const getPublicIPPrefixOutput: typeof import("./getPublicIPPrefix").getPublicIPPrefixOutput = null as any;
utilities.lazyLoad(exports, ["getPublicIPPrefix","getPublicIPPrefixOutput"], () => require("./getPublicIPPrefix"));

export { GetRouteFilterArgs, GetRouteFilterResult, GetRouteFilterOutputArgs } from "./getRouteFilter";
export const getRouteFilter: typeof import("./getRouteFilter").getRouteFilter = null as any;
export const getRouteFilterOutput: typeof import("./getRouteFilter").getRouteFilterOutput = null as any;
utilities.lazyLoad(exports, ["getRouteFilter","getRouteFilterOutput"], () => require("./getRouteFilter"));

export { GetSubnetArgs, GetSubnetResult, GetSubnetOutputArgs } from "./getSubnet";
export const getSubnet: typeof import("./getSubnet").getSubnet = null as any;
export const getSubnetOutput: typeof import("./getSubnet").getSubnetOutput = null as any;
utilities.lazyLoad(exports, ["getSubnet","getSubnetOutput"], () => require("./getSubnet"));

export { GetVirtualNetworkArgs, GetVirtualNetworkResult, GetVirtualNetworkOutputArgs } from "./getVirtualNetwork";
export const getVirtualNetwork: typeof import("./getVirtualNetwork").getVirtualNetwork = null as any;
export const getVirtualNetworkOutput: typeof import("./getVirtualNetwork").getVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetwork","getVirtualNetworkOutput"], () => require("./getVirtualNetwork"));

export { GetVirtualNetworkGatewayArgs, GetVirtualNetworkGatewayResult, GetVirtualNetworkGatewayOutputArgs } from "./getVirtualNetworkGateway";
export const getVirtualNetworkGateway: typeof import("./getVirtualNetworkGateway").getVirtualNetworkGateway = null as any;
export const getVirtualNetworkGatewayOutput: typeof import("./getVirtualNetworkGateway").getVirtualNetworkGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGateway","getVirtualNetworkGatewayOutput"], () => require("./getVirtualNetworkGateway"));

export { GetVirtualNetworkGatewayAdvertisedRoutesArgs, GetVirtualNetworkGatewayAdvertisedRoutesResult, GetVirtualNetworkGatewayAdvertisedRoutesOutputArgs } from "./getVirtualNetworkGatewayAdvertisedRoutes";
export const getVirtualNetworkGatewayAdvertisedRoutes: typeof import("./getVirtualNetworkGatewayAdvertisedRoutes").getVirtualNetworkGatewayAdvertisedRoutes = null as any;
export const getVirtualNetworkGatewayAdvertisedRoutesOutput: typeof import("./getVirtualNetworkGatewayAdvertisedRoutes").getVirtualNetworkGatewayAdvertisedRoutesOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayAdvertisedRoutes","getVirtualNetworkGatewayAdvertisedRoutesOutput"], () => require("./getVirtualNetworkGatewayAdvertisedRoutes"));

export { GetVirtualNetworkGatewayBgpPeerStatusArgs, GetVirtualNetworkGatewayBgpPeerStatusResult, GetVirtualNetworkGatewayBgpPeerStatusOutputArgs } from "./getVirtualNetworkGatewayBgpPeerStatus";
export const getVirtualNetworkGatewayBgpPeerStatus: typeof import("./getVirtualNetworkGatewayBgpPeerStatus").getVirtualNetworkGatewayBgpPeerStatus = null as any;
export const getVirtualNetworkGatewayBgpPeerStatusOutput: typeof import("./getVirtualNetworkGatewayBgpPeerStatus").getVirtualNetworkGatewayBgpPeerStatusOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayBgpPeerStatus","getVirtualNetworkGatewayBgpPeerStatusOutput"], () => require("./getVirtualNetworkGatewayBgpPeerStatus"));

export { GetVirtualNetworkGatewayConnectionArgs, GetVirtualNetworkGatewayConnectionResult, GetVirtualNetworkGatewayConnectionOutputArgs } from "./getVirtualNetworkGatewayConnection";
export const getVirtualNetworkGatewayConnection: typeof import("./getVirtualNetworkGatewayConnection").getVirtualNetworkGatewayConnection = null as any;
export const getVirtualNetworkGatewayConnectionOutput: typeof import("./getVirtualNetworkGatewayConnection").getVirtualNetworkGatewayConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayConnection","getVirtualNetworkGatewayConnectionOutput"], () => require("./getVirtualNetworkGatewayConnection"));

export { GetVirtualNetworkGatewayLearnedRoutesArgs, GetVirtualNetworkGatewayLearnedRoutesResult, GetVirtualNetworkGatewayLearnedRoutesOutputArgs } from "./getVirtualNetworkGatewayLearnedRoutes";
export const getVirtualNetworkGatewayLearnedRoutes: typeof import("./getVirtualNetworkGatewayLearnedRoutes").getVirtualNetworkGatewayLearnedRoutes = null as any;
export const getVirtualNetworkGatewayLearnedRoutesOutput: typeof import("./getVirtualNetworkGatewayLearnedRoutes").getVirtualNetworkGatewayLearnedRoutesOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayLearnedRoutes","getVirtualNetworkGatewayLearnedRoutesOutput"], () => require("./getVirtualNetworkGatewayLearnedRoutes"));

export { GetVirtualNetworkGatewayVpnclientConnectionHealthArgs, GetVirtualNetworkGatewayVpnclientConnectionHealthResult, GetVirtualNetworkGatewayVpnclientConnectionHealthOutputArgs } from "./getVirtualNetworkGatewayVpnclientConnectionHealth";
export const getVirtualNetworkGatewayVpnclientConnectionHealth: typeof import("./getVirtualNetworkGatewayVpnclientConnectionHealth").getVirtualNetworkGatewayVpnclientConnectionHealth = null as any;
export const getVirtualNetworkGatewayVpnclientConnectionHealthOutput: typeof import("./getVirtualNetworkGatewayVpnclientConnectionHealth").getVirtualNetworkGatewayVpnclientConnectionHealthOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayVpnclientConnectionHealth","getVirtualNetworkGatewayVpnclientConnectionHealthOutput"], () => require("./getVirtualNetworkGatewayVpnclientConnectionHealth"));

export { GetVirtualNetworkGatewayVpnclientIpsecParametersArgs, GetVirtualNetworkGatewayVpnclientIpsecParametersResult, GetVirtualNetworkGatewayVpnclientIpsecParametersOutputArgs } from "./getVirtualNetworkGatewayVpnclientIpsecParameters";
export const getVirtualNetworkGatewayVpnclientIpsecParameters: typeof import("./getVirtualNetworkGatewayVpnclientIpsecParameters").getVirtualNetworkGatewayVpnclientIpsecParameters = null as any;
export const getVirtualNetworkGatewayVpnclientIpsecParametersOutput: typeof import("./getVirtualNetworkGatewayVpnclientIpsecParameters").getVirtualNetworkGatewayVpnclientIpsecParametersOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkGatewayVpnclientIpsecParameters","getVirtualNetworkGatewayVpnclientIpsecParametersOutput"], () => require("./getVirtualNetworkGatewayVpnclientIpsecParameters"));

export { LoadBalancerArgs } from "./loadBalancer";
export type LoadBalancer = import("./loadBalancer").LoadBalancer;
export const LoadBalancer: typeof import("./loadBalancer").LoadBalancer = null as any;
utilities.lazyLoad(exports, ["LoadBalancer"], () => require("./loadBalancer"));

export { LocalNetworkGatewayArgs } from "./localNetworkGateway";
export type LocalNetworkGateway = import("./localNetworkGateway").LocalNetworkGateway;
export const LocalNetworkGateway: typeof import("./localNetworkGateway").LocalNetworkGateway = null as any;
utilities.lazyLoad(exports, ["LocalNetworkGateway"], () => require("./localNetworkGateway"));

export { NatGatewayArgs } from "./natGateway";
export type NatGateway = import("./natGateway").NatGateway;
export const NatGateway: typeof import("./natGateway").NatGateway = null as any;
utilities.lazyLoad(exports, ["NatGateway"], () => require("./natGateway"));

export { NetworkInterfaceArgs } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

export { NetworkProfileArgs } from "./networkProfile";
export type NetworkProfile = import("./networkProfile").NetworkProfile;
export const NetworkProfile: typeof import("./networkProfile").NetworkProfile = null as any;
utilities.lazyLoad(exports, ["NetworkProfile"], () => require("./networkProfile"));

export { NetworkSecurityGroupArgs } from "./networkSecurityGroup";
export type NetworkSecurityGroup = import("./networkSecurityGroup").NetworkSecurityGroup;
export const NetworkSecurityGroup: typeof import("./networkSecurityGroup").NetworkSecurityGroup = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityGroup"], () => require("./networkSecurityGroup"));

export { PrivateLinkServiceArgs } from "./privateLinkService";
export type PrivateLinkService = import("./privateLinkService").PrivateLinkService;
export const PrivateLinkService: typeof import("./privateLinkService").PrivateLinkService = null as any;
utilities.lazyLoad(exports, ["PrivateLinkService"], () => require("./privateLinkService"));

export { PublicIPAddressArgs } from "./publicIPAddress";
export type PublicIPAddress = import("./publicIPAddress").PublicIPAddress;
export const PublicIPAddress: typeof import("./publicIPAddress").PublicIPAddress = null as any;
utilities.lazyLoad(exports, ["PublicIPAddress"], () => require("./publicIPAddress"));

export { PublicIPPrefixArgs } from "./publicIPPrefix";
export type PublicIPPrefix = import("./publicIPPrefix").PublicIPPrefix;
export const PublicIPPrefix: typeof import("./publicIPPrefix").PublicIPPrefix = null as any;
utilities.lazyLoad(exports, ["PublicIPPrefix"], () => require("./publicIPPrefix"));

export { RouteFilterArgs } from "./routeFilter";
export type RouteFilter = import("./routeFilter").RouteFilter;
export const RouteFilter: typeof import("./routeFilter").RouteFilter = null as any;
utilities.lazyLoad(exports, ["RouteFilter"], () => require("./routeFilter"));

export { SubnetArgs } from "./subnet";
export type Subnet = import("./subnet").Subnet;
export const Subnet: typeof import("./subnet").Subnet = null as any;
utilities.lazyLoad(exports, ["Subnet"], () => require("./subnet"));

export { VirtualNetworkArgs } from "./virtualNetwork";
export type VirtualNetwork = import("./virtualNetwork").VirtualNetwork;
export const VirtualNetwork: typeof import("./virtualNetwork").VirtualNetwork = null as any;
utilities.lazyLoad(exports, ["VirtualNetwork"], () => require("./virtualNetwork"));

export { VirtualNetworkGatewayArgs } from "./virtualNetworkGateway";
export type VirtualNetworkGateway = import("./virtualNetworkGateway").VirtualNetworkGateway;
export const VirtualNetworkGateway: typeof import("./virtualNetworkGateway").VirtualNetworkGateway = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkGateway"], () => require("./virtualNetworkGateway"));

export { VirtualNetworkGatewayConnectionArgs } from "./virtualNetworkGatewayConnection";
export type VirtualNetworkGatewayConnection = import("./virtualNetworkGatewayConnection").VirtualNetworkGatewayConnection;
export const VirtualNetworkGatewayConnection: typeof import("./virtualNetworkGatewayConnection").VirtualNetworkGatewayConnection = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkGatewayConnection"], () => require("./virtualNetworkGatewayConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20190801:ApplicationGateway":
                return new ApplicationGateway(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:ExpressRouteCircuitPeering":
                return new ExpressRouteCircuitPeering(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:ExpressRouteCrossConnectionPeering":
                return new ExpressRouteCrossConnectionPeering(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:ExpressRoutePort":
                return new ExpressRoutePort(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:LoadBalancer":
                return new LoadBalancer(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:LocalNetworkGateway":
                return new LocalNetworkGateway(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:NatGateway":
                return new NatGateway(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:NetworkProfile":
                return new NetworkProfile(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:NetworkSecurityGroup":
                return new NetworkSecurityGroup(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:PrivateLinkService":
                return new PrivateLinkService(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:PublicIPAddress":
                return new PublicIPAddress(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:PublicIPPrefix":
                return new PublicIPPrefix(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:RouteFilter":
                return new RouteFilter(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:Subnet":
                return new Subnet(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:VirtualNetworkGateway":
                return new VirtualNetworkGateway(name, <any>undefined, { urn })
            case "azure-native:network/v20190801:VirtualNetworkGatewayConnection":
                return new VirtualNetworkGatewayConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20190801", _module)
