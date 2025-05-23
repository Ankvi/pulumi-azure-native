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

export { DnsResolverDomainListArgs } from "./dnsResolverDomainList";
export type DnsResolverDomainList = import("./dnsResolverDomainList").DnsResolverDomainList;
export const DnsResolverDomainList: typeof import("./dnsResolverDomainList").DnsResolverDomainList = null as any;
utilities.lazyLoad(exports, ["DnsResolverDomainList"], () => require("./dnsResolverDomainList"));

export { DnsResolverPolicyArgs } from "./dnsResolverPolicy";
export type DnsResolverPolicy = import("./dnsResolverPolicy").DnsResolverPolicy;
export const DnsResolverPolicy: typeof import("./dnsResolverPolicy").DnsResolverPolicy = null as any;
utilities.lazyLoad(exports, ["DnsResolverPolicy"], () => require("./dnsResolverPolicy"));

export { DnsResolverPolicyVirtualNetworkLinkArgs } from "./dnsResolverPolicyVirtualNetworkLink";
export type DnsResolverPolicyVirtualNetworkLink = import("./dnsResolverPolicyVirtualNetworkLink").DnsResolverPolicyVirtualNetworkLink;
export const DnsResolverPolicyVirtualNetworkLink: typeof import("./dnsResolverPolicyVirtualNetworkLink").DnsResolverPolicyVirtualNetworkLink = null as any;
utilities.lazyLoad(exports, ["DnsResolverPolicyVirtualNetworkLink"], () => require("./dnsResolverPolicyVirtualNetworkLink"));

export { DnsSecurityRuleArgs } from "./dnsSecurityRule";
export type DnsSecurityRule = import("./dnsSecurityRule").DnsSecurityRule;
export const DnsSecurityRule: typeof import("./dnsSecurityRule").DnsSecurityRule = null as any;
utilities.lazyLoad(exports, ["DnsSecurityRule"], () => require("./dnsSecurityRule"));

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

export { GetDnsResolverDomainListArgs, GetDnsResolverDomainListResult, GetDnsResolverDomainListOutputArgs } from "./getDnsResolverDomainList";
export const getDnsResolverDomainList: typeof import("./getDnsResolverDomainList").getDnsResolverDomainList = null as any;
export const getDnsResolverDomainListOutput: typeof import("./getDnsResolverDomainList").getDnsResolverDomainListOutput = null as any;
utilities.lazyLoad(exports, ["getDnsResolverDomainList","getDnsResolverDomainListOutput"], () => require("./getDnsResolverDomainList"));

export { GetDnsResolverPolicyArgs, GetDnsResolverPolicyResult, GetDnsResolverPolicyOutputArgs } from "./getDnsResolverPolicy";
export const getDnsResolverPolicy: typeof import("./getDnsResolverPolicy").getDnsResolverPolicy = null as any;
export const getDnsResolverPolicyOutput: typeof import("./getDnsResolverPolicy").getDnsResolverPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getDnsResolverPolicy","getDnsResolverPolicyOutput"], () => require("./getDnsResolverPolicy"));

export { GetDnsResolverPolicyVirtualNetworkLinkArgs, GetDnsResolverPolicyVirtualNetworkLinkResult, GetDnsResolverPolicyVirtualNetworkLinkOutputArgs } from "./getDnsResolverPolicyVirtualNetworkLink";
export const getDnsResolverPolicyVirtualNetworkLink: typeof import("./getDnsResolverPolicyVirtualNetworkLink").getDnsResolverPolicyVirtualNetworkLink = null as any;
export const getDnsResolverPolicyVirtualNetworkLinkOutput: typeof import("./getDnsResolverPolicyVirtualNetworkLink").getDnsResolverPolicyVirtualNetworkLinkOutput = null as any;
utilities.lazyLoad(exports, ["getDnsResolverPolicyVirtualNetworkLink","getDnsResolverPolicyVirtualNetworkLinkOutput"], () => require("./getDnsResolverPolicyVirtualNetworkLink"));

export { GetDnsSecurityRuleArgs, GetDnsSecurityRuleResult, GetDnsSecurityRuleOutputArgs } from "./getDnsSecurityRule";
export const getDnsSecurityRule: typeof import("./getDnsSecurityRule").getDnsSecurityRule = null as any;
export const getDnsSecurityRuleOutput: typeof import("./getDnsSecurityRule").getDnsSecurityRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDnsSecurityRule","getDnsSecurityRuleOutput"], () => require("./getDnsSecurityRule"));

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

export { ListDnsResolverPolicyByVirtualNetworkArgs, ListDnsResolverPolicyByVirtualNetworkResult, ListDnsResolverPolicyByVirtualNetworkOutputArgs } from "./listDnsResolverPolicyByVirtualNetwork";
export const listDnsResolverPolicyByVirtualNetwork: typeof import("./listDnsResolverPolicyByVirtualNetwork").listDnsResolverPolicyByVirtualNetwork = null as any;
export const listDnsResolverPolicyByVirtualNetworkOutput: typeof import("./listDnsResolverPolicyByVirtualNetwork").listDnsResolverPolicyByVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["listDnsResolverPolicyByVirtualNetwork","listDnsResolverPolicyByVirtualNetworkOutput"], () => require("./listDnsResolverPolicyByVirtualNetwork"));

export { OutboundEndpointArgs } from "./outboundEndpoint";
export type OutboundEndpoint = import("./outboundEndpoint").OutboundEndpoint;
export const OutboundEndpoint: typeof import("./outboundEndpoint").OutboundEndpoint = null as any;
utilities.lazyLoad(exports, ["OutboundEndpoint"], () => require("./outboundEndpoint"));

export { PrivateResolverVirtualNetworkLinkArgs } from "./privateResolverVirtualNetworkLink";
export type PrivateResolverVirtualNetworkLink = import("./privateResolverVirtualNetworkLink").PrivateResolverVirtualNetworkLink;
export const PrivateResolverVirtualNetworkLink: typeof import("./privateResolverVirtualNetworkLink").PrivateResolverVirtualNetworkLink = null as any;
utilities.lazyLoad(exports, ["PrivateResolverVirtualNetworkLink"], () => require("./privateResolverVirtualNetworkLink"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dnsresolver:DnsForwardingRuleset":
                return new DnsForwardingRuleset(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:DnsResolver":
                return new DnsResolver(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:DnsResolverDomainList":
                return new DnsResolverDomainList(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:DnsResolverPolicy":
                return new DnsResolverPolicy(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:DnsResolverPolicyVirtualNetworkLink":
                return new DnsResolverPolicyVirtualNetworkLink(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:DnsSecurityRule":
                return new DnsSecurityRule(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:ForwardingRule":
                return new ForwardingRule(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:InboundEndpoint":
                return new InboundEndpoint(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:OutboundEndpoint":
                return new OutboundEndpoint(name, <any>undefined, { urn })
            case "azure-native:dnsresolver:PrivateResolverVirtualNetworkLink":
                return new PrivateResolverVirtualNetworkLink(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dnsresolver", _module)