import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessControlListArgs } from "./accessControlList";
export type AccessControlList = import("./accessControlList").AccessControlList;
export const AccessControlList: typeof import("./accessControlList").AccessControlList = null as any;
utilities.lazyLoad(exports, ["AccessControlList"], () => require("./accessControlList"));

export { ExternalNetworkArgs } from "./externalNetwork";
export type ExternalNetwork = import("./externalNetwork").ExternalNetwork;
export const ExternalNetwork: typeof import("./externalNetwork").ExternalNetwork = null as any;
utilities.lazyLoad(exports, ["ExternalNetwork"], () => require("./externalNetwork"));

export { GetAccessControlListArgs, GetAccessControlListResult, GetAccessControlListOutputArgs } from "./getAccessControlList";
export const getAccessControlList: typeof import("./getAccessControlList").getAccessControlList = null as any;
export const getAccessControlListOutput: typeof import("./getAccessControlList").getAccessControlListOutput = null as any;
utilities.lazyLoad(exports, ["getAccessControlList","getAccessControlListOutput"], () => require("./getAccessControlList"));

export { GetExternalNetworkArgs, GetExternalNetworkResult, GetExternalNetworkOutputArgs } from "./getExternalNetwork";
export const getExternalNetwork: typeof import("./getExternalNetwork").getExternalNetwork = null as any;
export const getExternalNetworkOutput: typeof import("./getExternalNetwork").getExternalNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getExternalNetwork","getExternalNetworkOutput"], () => require("./getExternalNetwork"));

export { GetInternalNetworkArgs, GetInternalNetworkResult, GetInternalNetworkOutputArgs } from "./getInternalNetwork";
export const getInternalNetwork: typeof import("./getInternalNetwork").getInternalNetwork = null as any;
export const getInternalNetworkOutput: typeof import("./getInternalNetwork").getInternalNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getInternalNetwork","getInternalNetworkOutput"], () => require("./getInternalNetwork"));

export { GetInternetGatewayArgs, GetInternetGatewayResult, GetInternetGatewayOutputArgs } from "./getInternetGateway";
export const getInternetGateway: typeof import("./getInternetGateway").getInternetGateway = null as any;
export const getInternetGatewayOutput: typeof import("./getInternetGateway").getInternetGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getInternetGateway","getInternetGatewayOutput"], () => require("./getInternetGateway"));

export { GetInternetGatewayRuleArgs, GetInternetGatewayRuleResult, GetInternetGatewayRuleOutputArgs } from "./getInternetGatewayRule";
export const getInternetGatewayRule: typeof import("./getInternetGatewayRule").getInternetGatewayRule = null as any;
export const getInternetGatewayRuleOutput: typeof import("./getInternetGatewayRule").getInternetGatewayRuleOutput = null as any;
utilities.lazyLoad(exports, ["getInternetGatewayRule","getInternetGatewayRuleOutput"], () => require("./getInternetGatewayRule"));

export { GetIpCommunityArgs, GetIpCommunityResult, GetIpCommunityOutputArgs } from "./getIpCommunity";
export const getIpCommunity: typeof import("./getIpCommunity").getIpCommunity = null as any;
export const getIpCommunityOutput: typeof import("./getIpCommunity").getIpCommunityOutput = null as any;
utilities.lazyLoad(exports, ["getIpCommunity","getIpCommunityOutput"], () => require("./getIpCommunity"));

export { GetIpExtendedCommunityArgs, GetIpExtendedCommunityResult, GetIpExtendedCommunityOutputArgs } from "./getIpExtendedCommunity";
export const getIpExtendedCommunity: typeof import("./getIpExtendedCommunity").getIpExtendedCommunity = null as any;
export const getIpExtendedCommunityOutput: typeof import("./getIpExtendedCommunity").getIpExtendedCommunityOutput = null as any;
utilities.lazyLoad(exports, ["getIpExtendedCommunity","getIpExtendedCommunityOutput"], () => require("./getIpExtendedCommunity"));

export { GetIpPrefixArgs, GetIpPrefixResult, GetIpPrefixOutputArgs } from "./getIpPrefix";
export const getIpPrefix: typeof import("./getIpPrefix").getIpPrefix = null as any;
export const getIpPrefixOutput: typeof import("./getIpPrefix").getIpPrefixOutput = null as any;
utilities.lazyLoad(exports, ["getIpPrefix","getIpPrefixOutput"], () => require("./getIpPrefix"));

export { GetL2IsolationDomainArgs, GetL2IsolationDomainResult, GetL2IsolationDomainOutputArgs } from "./getL2IsolationDomain";
export const getL2IsolationDomain: typeof import("./getL2IsolationDomain").getL2IsolationDomain = null as any;
export const getL2IsolationDomainOutput: typeof import("./getL2IsolationDomain").getL2IsolationDomainOutput = null as any;
utilities.lazyLoad(exports, ["getL2IsolationDomain","getL2IsolationDomainOutput"], () => require("./getL2IsolationDomain"));

export { GetL3IsolationDomainArgs, GetL3IsolationDomainResult, GetL3IsolationDomainOutputArgs } from "./getL3IsolationDomain";
export const getL3IsolationDomain: typeof import("./getL3IsolationDomain").getL3IsolationDomain = null as any;
export const getL3IsolationDomainOutput: typeof import("./getL3IsolationDomain").getL3IsolationDomainOutput = null as any;
utilities.lazyLoad(exports, ["getL3IsolationDomain","getL3IsolationDomainOutput"], () => require("./getL3IsolationDomain"));

export { GetNeighborGroupArgs, GetNeighborGroupResult, GetNeighborGroupOutputArgs } from "./getNeighborGroup";
export const getNeighborGroup: typeof import("./getNeighborGroup").getNeighborGroup = null as any;
export const getNeighborGroupOutput: typeof import("./getNeighborGroup").getNeighborGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNeighborGroup","getNeighborGroupOutput"], () => require("./getNeighborGroup"));

export { GetNetworkDeviceArgs, GetNetworkDeviceResult, GetNetworkDeviceOutputArgs } from "./getNetworkDevice";
export const getNetworkDevice: typeof import("./getNetworkDevice").getNetworkDevice = null as any;
export const getNetworkDeviceOutput: typeof import("./getNetworkDevice").getNetworkDeviceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkDevice","getNetworkDeviceOutput"], () => require("./getNetworkDevice"));

export { GetNetworkDeviceStatusArgs, GetNetworkDeviceStatusResult, GetNetworkDeviceStatusOutputArgs } from "./getNetworkDeviceStatus";
export const getNetworkDeviceStatus: typeof import("./getNetworkDeviceStatus").getNetworkDeviceStatus = null as any;
export const getNetworkDeviceStatusOutput: typeof import("./getNetworkDeviceStatus").getNetworkDeviceStatusOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkDeviceStatus","getNetworkDeviceStatusOutput"], () => require("./getNetworkDeviceStatus"));

export { GetNetworkFabricArgs, GetNetworkFabricResult, GetNetworkFabricOutputArgs } from "./getNetworkFabric";
export const getNetworkFabric: typeof import("./getNetworkFabric").getNetworkFabric = null as any;
export const getNetworkFabricOutput: typeof import("./getNetworkFabric").getNetworkFabricOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkFabric","getNetworkFabricOutput"], () => require("./getNetworkFabric"));

export { GetNetworkFabricControllerArgs, GetNetworkFabricControllerResult, GetNetworkFabricControllerOutputArgs } from "./getNetworkFabricController";
export const getNetworkFabricController: typeof import("./getNetworkFabricController").getNetworkFabricController = null as any;
export const getNetworkFabricControllerOutput: typeof import("./getNetworkFabricController").getNetworkFabricControllerOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkFabricController","getNetworkFabricControllerOutput"], () => require("./getNetworkFabricController"));

export { GetNetworkFabricTopologyArgs, GetNetworkFabricTopologyResult, GetNetworkFabricTopologyOutputArgs } from "./getNetworkFabricTopology";
export const getNetworkFabricTopology: typeof import("./getNetworkFabricTopology").getNetworkFabricTopology = null as any;
export const getNetworkFabricTopologyOutput: typeof import("./getNetworkFabricTopology").getNetworkFabricTopologyOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkFabricTopology","getNetworkFabricTopologyOutput"], () => require("./getNetworkFabricTopology"));

export { GetNetworkInterfaceArgs, GetNetworkInterfaceResult, GetNetworkInterfaceOutputArgs } from "./getNetworkInterface";
export const getNetworkInterface: typeof import("./getNetworkInterface").getNetworkInterface = null as any;
export const getNetworkInterfaceOutput: typeof import("./getNetworkInterface").getNetworkInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterface","getNetworkInterfaceOutput"], () => require("./getNetworkInterface"));

export { GetNetworkInterfaceStatusArgs, GetNetworkInterfaceStatusResult, GetNetworkInterfaceStatusOutputArgs } from "./getNetworkInterfaceStatus";
export const getNetworkInterfaceStatus: typeof import("./getNetworkInterfaceStatus").getNetworkInterfaceStatus = null as any;
export const getNetworkInterfaceStatusOutput: typeof import("./getNetworkInterfaceStatus").getNetworkInterfaceStatusOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterfaceStatus","getNetworkInterfaceStatusOutput"], () => require("./getNetworkInterfaceStatus"));

export { GetNetworkPacketBrokerArgs, GetNetworkPacketBrokerResult, GetNetworkPacketBrokerOutputArgs } from "./getNetworkPacketBroker";
export const getNetworkPacketBroker: typeof import("./getNetworkPacketBroker").getNetworkPacketBroker = null as any;
export const getNetworkPacketBrokerOutput: typeof import("./getNetworkPacketBroker").getNetworkPacketBrokerOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkPacketBroker","getNetworkPacketBrokerOutput"], () => require("./getNetworkPacketBroker"));

export { GetNetworkRackArgs, GetNetworkRackResult, GetNetworkRackOutputArgs } from "./getNetworkRack";
export const getNetworkRack: typeof import("./getNetworkRack").getNetworkRack = null as any;
export const getNetworkRackOutput: typeof import("./getNetworkRack").getNetworkRackOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkRack","getNetworkRackOutput"], () => require("./getNetworkRack"));

export { GetNetworkTapArgs, GetNetworkTapResult, GetNetworkTapOutputArgs } from "./getNetworkTap";
export const getNetworkTap: typeof import("./getNetworkTap").getNetworkTap = null as any;
export const getNetworkTapOutput: typeof import("./getNetworkTap").getNetworkTapOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkTap","getNetworkTapOutput"], () => require("./getNetworkTap"));

export { GetNetworkTapRuleArgs, GetNetworkTapRuleResult, GetNetworkTapRuleOutputArgs } from "./getNetworkTapRule";
export const getNetworkTapRule: typeof import("./getNetworkTapRule").getNetworkTapRule = null as any;
export const getNetworkTapRuleOutput: typeof import("./getNetworkTapRule").getNetworkTapRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkTapRule","getNetworkTapRuleOutput"], () => require("./getNetworkTapRule"));

export { GetNetworkToNetworkInterconnectArgs, GetNetworkToNetworkInterconnectResult, GetNetworkToNetworkInterconnectOutputArgs } from "./getNetworkToNetworkInterconnect";
export const getNetworkToNetworkInterconnect: typeof import("./getNetworkToNetworkInterconnect").getNetworkToNetworkInterconnect = null as any;
export const getNetworkToNetworkInterconnectOutput: typeof import("./getNetworkToNetworkInterconnect").getNetworkToNetworkInterconnectOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkToNetworkInterconnect","getNetworkToNetworkInterconnectOutput"], () => require("./getNetworkToNetworkInterconnect"));

export { GetRoutePolicyArgs, GetRoutePolicyResult, GetRoutePolicyOutputArgs } from "./getRoutePolicy";
export const getRoutePolicy: typeof import("./getRoutePolicy").getRoutePolicy = null as any;
export const getRoutePolicyOutput: typeof import("./getRoutePolicy").getRoutePolicyOutput = null as any;
utilities.lazyLoad(exports, ["getRoutePolicy","getRoutePolicyOutput"], () => require("./getRoutePolicy"));

export { InternalNetworkArgs } from "./internalNetwork";
export type InternalNetwork = import("./internalNetwork").InternalNetwork;
export const InternalNetwork: typeof import("./internalNetwork").InternalNetwork = null as any;
utilities.lazyLoad(exports, ["InternalNetwork"], () => require("./internalNetwork"));

export { InternetGatewayArgs } from "./internetGateway";
export type InternetGateway = import("./internetGateway").InternetGateway;
export const InternetGateway: typeof import("./internetGateway").InternetGateway = null as any;
utilities.lazyLoad(exports, ["InternetGateway"], () => require("./internetGateway"));

export { InternetGatewayRuleArgs } from "./internetGatewayRule";
export type InternetGatewayRule = import("./internetGatewayRule").InternetGatewayRule;
export const InternetGatewayRule: typeof import("./internetGatewayRule").InternetGatewayRule = null as any;
utilities.lazyLoad(exports, ["InternetGatewayRule"], () => require("./internetGatewayRule"));

export { IpCommunityArgs } from "./ipCommunity";
export type IpCommunity = import("./ipCommunity").IpCommunity;
export const IpCommunity: typeof import("./ipCommunity").IpCommunity = null as any;
utilities.lazyLoad(exports, ["IpCommunity"], () => require("./ipCommunity"));

export { IpExtendedCommunityArgs } from "./ipExtendedCommunity";
export type IpExtendedCommunity = import("./ipExtendedCommunity").IpExtendedCommunity;
export const IpExtendedCommunity: typeof import("./ipExtendedCommunity").IpExtendedCommunity = null as any;
utilities.lazyLoad(exports, ["IpExtendedCommunity"], () => require("./ipExtendedCommunity"));

export { IpPrefixArgs } from "./ipPrefix";
export type IpPrefix = import("./ipPrefix").IpPrefix;
export const IpPrefix: typeof import("./ipPrefix").IpPrefix = null as any;
utilities.lazyLoad(exports, ["IpPrefix"], () => require("./ipPrefix"));

export { L2IsolationDomainArgs } from "./l2isolationDomain";
export type L2IsolationDomain = import("./l2isolationDomain").L2IsolationDomain;
export const L2IsolationDomain: typeof import("./l2isolationDomain").L2IsolationDomain = null as any;
utilities.lazyLoad(exports, ["L2IsolationDomain"], () => require("./l2isolationDomain"));

export { L3IsolationDomainArgs } from "./l3isolationDomain";
export type L3IsolationDomain = import("./l3isolationDomain").L3IsolationDomain;
export const L3IsolationDomain: typeof import("./l3isolationDomain").L3IsolationDomain = null as any;
utilities.lazyLoad(exports, ["L3IsolationDomain"], () => require("./l3isolationDomain"));

export { NeighborGroupArgs } from "./neighborGroup";
export type NeighborGroup = import("./neighborGroup").NeighborGroup;
export const NeighborGroup: typeof import("./neighborGroup").NeighborGroup = null as any;
utilities.lazyLoad(exports, ["NeighborGroup"], () => require("./neighborGroup"));

export { NetworkDeviceArgs } from "./networkDevice";
export type NetworkDevice = import("./networkDevice").NetworkDevice;
export const NetworkDevice: typeof import("./networkDevice").NetworkDevice = null as any;
utilities.lazyLoad(exports, ["NetworkDevice"], () => require("./networkDevice"));

export { NetworkFabricArgs } from "./networkFabric";
export type NetworkFabric = import("./networkFabric").NetworkFabric;
export const NetworkFabric: typeof import("./networkFabric").NetworkFabric = null as any;
utilities.lazyLoad(exports, ["NetworkFabric"], () => require("./networkFabric"));

export { NetworkFabricControllerArgs } from "./networkFabricController";
export type NetworkFabricController = import("./networkFabricController").NetworkFabricController;
export const NetworkFabricController: typeof import("./networkFabricController").NetworkFabricController = null as any;
utilities.lazyLoad(exports, ["NetworkFabricController"], () => require("./networkFabricController"));

export { NetworkInterfaceArgs } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

export { NetworkPacketBrokerArgs } from "./networkPacketBroker";
export type NetworkPacketBroker = import("./networkPacketBroker").NetworkPacketBroker;
export const NetworkPacketBroker: typeof import("./networkPacketBroker").NetworkPacketBroker = null as any;
utilities.lazyLoad(exports, ["NetworkPacketBroker"], () => require("./networkPacketBroker"));

export { NetworkRackArgs } from "./networkRack";
export type NetworkRack = import("./networkRack").NetworkRack;
export const NetworkRack: typeof import("./networkRack").NetworkRack = null as any;
utilities.lazyLoad(exports, ["NetworkRack"], () => require("./networkRack"));

export { NetworkTapArgs } from "./networkTap";
export type NetworkTap = import("./networkTap").NetworkTap;
export const NetworkTap: typeof import("./networkTap").NetworkTap = null as any;
utilities.lazyLoad(exports, ["NetworkTap"], () => require("./networkTap"));

export { NetworkTapRuleArgs } from "./networkTapRule";
export type NetworkTapRule = import("./networkTapRule").NetworkTapRule;
export const NetworkTapRule: typeof import("./networkTapRule").NetworkTapRule = null as any;
utilities.lazyLoad(exports, ["NetworkTapRule"], () => require("./networkTapRule"));

export { NetworkToNetworkInterconnectArgs } from "./networkToNetworkInterconnect";
export type NetworkToNetworkInterconnect = import("./networkToNetworkInterconnect").NetworkToNetworkInterconnect;
export const NetworkToNetworkInterconnect: typeof import("./networkToNetworkInterconnect").NetworkToNetworkInterconnect = null as any;
utilities.lazyLoad(exports, ["NetworkToNetworkInterconnect"], () => require("./networkToNetworkInterconnect"));

export { RoutePolicyArgs } from "./routePolicy";
export type RoutePolicy = import("./routePolicy").RoutePolicy;
export const RoutePolicy: typeof import("./routePolicy").RoutePolicy = null as any;
utilities.lazyLoad(exports, ["RoutePolicy"], () => require("./routePolicy"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:managednetworkfabric:AccessControlList":
                return new AccessControlList(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:ExternalNetwork":
                return new ExternalNetwork(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:InternalNetwork":
                return new InternalNetwork(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:InternetGateway":
                return new InternetGateway(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:InternetGatewayRule":
                return new InternetGatewayRule(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:IpCommunity":
                return new IpCommunity(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:IpExtendedCommunity":
                return new IpExtendedCommunity(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:IpPrefix":
                return new IpPrefix(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:L2IsolationDomain":
                return new L2IsolationDomain(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:L3IsolationDomain":
                return new L3IsolationDomain(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NeighborGroup":
                return new NeighborGroup(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkDevice":
                return new NetworkDevice(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkFabric":
                return new NetworkFabric(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkFabricController":
                return new NetworkFabricController(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkPacketBroker":
                return new NetworkPacketBroker(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkRack":
                return new NetworkRack(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkTap":
                return new NetworkTap(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkTapRule":
                return new NetworkTapRule(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:NetworkToNetworkInterconnect":
                return new NetworkToNetworkInterconnect(name, <any>undefined, { urn })
            case "azure-native:managednetworkfabric:RoutePolicy":
                return new RoutePolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "managednetworkfabric", _module)