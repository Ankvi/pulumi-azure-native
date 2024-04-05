import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DnsForwardingRulesetArgs } from "./dnsForwardingRuleset";
export type DnsForwardingRuleset = import("./dnsForwardingRuleset").DnsForwardingRuleset;
export const DnsForwardingRuleset: typeof import("./dnsForwardingRuleset").DnsForwardingRuleset = null as any;
utilities.lazyLoad(exports, ["DnsForwardingRuleset"], () => require("./dnsForwardingRuleset"));

export { DnsResolverArgs } from "./dnsResolver";
export type DnsResolver = import("./dnsResolver").DnsResolver;
export const DnsResolver: typeof import("./dnsResolver").DnsResolver = null as any;
utilities.lazyLoad(exports, ["DnsResolver"], () => require("./dnsResolver"));

export { ForwardingRuleArgs } from "./forwardingRule";
export type ForwardingRule = import("./forwardingRule").ForwardingRule;
export const ForwardingRule: typeof import("./forwardingRule").ForwardingRule = null as any;
utilities.lazyLoad(exports, ["ForwardingRule"], () => require("./forwardingRule"));

export { GetDnsForwardingRulesetArgs, GetDnsForwardingRulesetResult, GetDnsForwardingRulesetOutputArgs } from "./getDnsForwardingRuleset";
export const getDnsForwardingRuleset: typeof import("./getDnsForwardingRuleset").getDnsForwardingRuleset = null as any;
export const getDnsForwardingRulesetOutput: typeof import("./getDnsForwardingRuleset").getDnsForwardingRulesetOutput = null as any;
utilities.lazyLoad(exports, ["getDnsForwardingRuleset","getDnsForwardingRulesetOutput"], () => require("./getDnsForwardingRuleset"));

export { GetDnsResolverArgs, GetDnsResolverResult, GetDnsResolverOutputArgs } from "./getDnsResolver";
export const getDnsResolver: typeof import("./getDnsResolver").getDnsResolver = null as any;
export const getDnsResolverOutput: typeof import("./getDnsResolver").getDnsResolverOutput = null as any;
utilities.lazyLoad(exports, ["getDnsResolver","getDnsResolverOutput"], () => require("./getDnsResolver"));

export { GetForwardingRuleArgs, GetForwardingRuleResult, GetForwardingRuleOutputArgs } from "./getForwardingRule";
export const getForwardingRule: typeof import("./getForwardingRule").getForwardingRule = null as any;
export const getForwardingRuleOutput: typeof import("./getForwardingRule").getForwardingRuleOutput = null as any;
utilities.lazyLoad(exports, ["getForwardingRule","getForwardingRuleOutput"], () => require("./getForwardingRule"));

export { GetInboundEndpointArgs, GetInboundEndpointResult, GetInboundEndpointOutputArgs } from "./getInboundEndpoint";
export const getInboundEndpoint: typeof import("./getInboundEndpoint").getInboundEndpoint = null as any;
export const getInboundEndpointOutput: typeof import("./getInboundEndpoint").getInboundEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getInboundEndpoint","getInboundEndpointOutput"], () => require("./getInboundEndpoint"));

export { GetOutboundEndpointArgs, GetOutboundEndpointResult, GetOutboundEndpointOutputArgs } from "./getOutboundEndpoint";
export const getOutboundEndpoint: typeof import("./getOutboundEndpoint").getOutboundEndpoint = null as any;
export const getOutboundEndpointOutput: typeof import("./getOutboundEndpoint").getOutboundEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getOutboundEndpoint","getOutboundEndpointOutput"], () => require("./getOutboundEndpoint"));

export { GetPrivateResolverVirtualNetworkLinkArgs, GetPrivateResolverVirtualNetworkLinkResult, GetPrivateResolverVirtualNetworkLinkOutputArgs } from "./getPrivateResolverVirtualNetworkLink";
export const getPrivateResolverVirtualNetworkLink: typeof import("./getPrivateResolverVirtualNetworkLink").getPrivateResolverVirtualNetworkLink = null as any;
export const getPrivateResolverVirtualNetworkLinkOutput: typeof import("./getPrivateResolverVirtualNetworkLink").getPrivateResolverVirtualNetworkLinkOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateResolverVirtualNetworkLink","getPrivateResolverVirtualNetworkLinkOutput"], () => require("./getPrivateResolverVirtualNetworkLink"));

export { GetSecurityRuleArgs, GetSecurityRuleResult, GetSecurityRuleOutputArgs } from "./getSecurityRule";
export const getSecurityRule: typeof import("./getSecurityRule").getSecurityRule = null as any;
export const getSecurityRuleOutput: typeof import("./getSecurityRule").getSecurityRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityRule","getSecurityRuleOutput"], () => require("./getSecurityRule"));

export { GetSubnetArgs, GetSubnetResult, GetSubnetOutputArgs } from "./getSubnet";
export const getSubnet: typeof import("./getSubnet").getSubnet = null as any;
export const getSubnetOutput: typeof import("./getSubnet").getSubnetOutput = null as any;
utilities.lazyLoad(exports, ["getSubnet","getSubnetOutput"], () => require("./getSubnet"));

export { InboundEndpointArgs } from "./inboundEndpoint";
export type InboundEndpoint = import("./inboundEndpoint").InboundEndpoint;
export const InboundEndpoint: typeof import("./inboundEndpoint").InboundEndpoint = null as any;
utilities.lazyLoad(exports, ["InboundEndpoint"], () => require("./inboundEndpoint"));

export { ListDnsForwardingRulesetByVirtualNetworkArgs, ListDnsForwardingRulesetByVirtualNetworkResult, ListDnsForwardingRulesetByVirtualNetworkOutputArgs } from "./listDnsForwardingRulesetByVirtualNetwork";
export const listDnsForwardingRulesetByVirtualNetwork: typeof import("./listDnsForwardingRulesetByVirtualNetwork").listDnsForwardingRulesetByVirtualNetwork = null as any;
export const listDnsForwardingRulesetByVirtualNetworkOutput: typeof import("./listDnsForwardingRulesetByVirtualNetwork").listDnsForwardingRulesetByVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["listDnsForwardingRulesetByVirtualNetwork","listDnsForwardingRulesetByVirtualNetworkOutput"], () => require("./listDnsForwardingRulesetByVirtualNetwork"));

export { ListDnsResolverByVirtualNetworkArgs, ListDnsResolverByVirtualNetworkResult, ListDnsResolverByVirtualNetworkOutputArgs } from "./listDnsResolverByVirtualNetwork";
export const listDnsResolverByVirtualNetwork: typeof import("./listDnsResolverByVirtualNetwork").listDnsResolverByVirtualNetwork = null as any;
export const listDnsResolverByVirtualNetworkOutput: typeof import("./listDnsResolverByVirtualNetwork").listDnsResolverByVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["listDnsResolverByVirtualNetwork","listDnsResolverByVirtualNetworkOutput"], () => require("./listDnsResolverByVirtualNetwork"));

export { OutboundEndpointArgs } from "./outboundEndpoint";
export type OutboundEndpoint = import("./outboundEndpoint").OutboundEndpoint;
export const OutboundEndpoint: typeof import("./outboundEndpoint").OutboundEndpoint = null as any;
utilities.lazyLoad(exports, ["OutboundEndpoint"], () => require("./outboundEndpoint"));

export { PrivateResolverVirtualNetworkLinkArgs } from "./privateResolverVirtualNetworkLink";
export type PrivateResolverVirtualNetworkLink = import("./privateResolverVirtualNetworkLink").PrivateResolverVirtualNetworkLink;
export const PrivateResolverVirtualNetworkLink: typeof import("./privateResolverVirtualNetworkLink").PrivateResolverVirtualNetworkLink = null as any;
utilities.lazyLoad(exports, ["PrivateResolverVirtualNetworkLink"], () => require("./privateResolverVirtualNetworkLink"));

export { SecurityRuleArgs } from "./securityRule";
export type SecurityRule = import("./securityRule").SecurityRule;
export const SecurityRule: typeof import("./securityRule").SecurityRule = null as any;
utilities.lazyLoad(exports, ["SecurityRule"], () => require("./securityRule"));

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
            case "azure-native:network/v20220701:DnsForwardingRuleset":
                return new DnsForwardingRuleset(name, <any>undefined, { urn })
            case "azure-native:network/v20220701:DnsResolver":
                return new DnsResolver(name, <any>undefined, { urn })
            case "azure-native:network/v20220701:ForwardingRule":
                return new ForwardingRule(name, <any>undefined, { urn })
            case "azure-native:network/v20220701:InboundEndpoint":
                return new InboundEndpoint(name, <any>undefined, { urn })
            case "azure-native:network/v20220701:OutboundEndpoint":
                return new OutboundEndpoint(name, <any>undefined, { urn })
            case "azure-native:network/v20220701:PrivateResolverVirtualNetworkLink":
                return new PrivateResolverVirtualNetworkLink(name, <any>undefined, { urn })
            case "azure-native:network/v20220701:SecurityRule":
                return new SecurityRule(name, <any>undefined, { urn })
            case "azure-native:network/v20220701:Subnet":
                return new Subnet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20220701", _module)