import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AFDCustomDomainArgs } from "./afdcustomDomain";
export type AFDCustomDomain = import("./afdcustomDomain").AFDCustomDomain;
export const AFDCustomDomain: typeof import("./afdcustomDomain").AFDCustomDomain = null as any;
utilities.lazyLoad(exports, ["AFDCustomDomain"], () => require("./afdcustomDomain"));

export { AFDEndpointArgs } from "./afdendpoint";
export type AFDEndpoint = import("./afdendpoint").AFDEndpoint;
export const AFDEndpoint: typeof import("./afdendpoint").AFDEndpoint = null as any;
utilities.lazyLoad(exports, ["AFDEndpoint"], () => require("./afdendpoint"));

export { AFDOriginArgs } from "./afdorigin";
export type AFDOrigin = import("./afdorigin").AFDOrigin;
export const AFDOrigin: typeof import("./afdorigin").AFDOrigin = null as any;
utilities.lazyLoad(exports, ["AFDOrigin"], () => require("./afdorigin"));

export { AFDOriginGroupArgs } from "./afdoriginGroup";
export type AFDOriginGroup = import("./afdoriginGroup").AFDOriginGroup;
export const AFDOriginGroup: typeof import("./afdoriginGroup").AFDOriginGroup = null as any;
utilities.lazyLoad(exports, ["AFDOriginGroup"], () => require("./afdoriginGroup"));

export { AFDTargetGroupArgs } from "./afdtargetGroup";
export type AFDTargetGroup = import("./afdtargetGroup").AFDTargetGroup;
export const AFDTargetGroup: typeof import("./afdtargetGroup").AFDTargetGroup = null as any;
utilities.lazyLoad(exports, ["AFDTargetGroup"], () => require("./afdtargetGroup"));

export { CustomDomainArgs } from "./customDomain";
export type CustomDomain = import("./customDomain").CustomDomain;
export const CustomDomain: typeof import("./customDomain").CustomDomain = null as any;
utilities.lazyLoad(exports, ["CustomDomain"], () => require("./customDomain"));

export { EndpointArgs } from "./endpoint";
export type Endpoint = import("./endpoint").Endpoint;
export const Endpoint: typeof import("./endpoint").Endpoint = null as any;
utilities.lazyLoad(exports, ["Endpoint"], () => require("./endpoint"));

export { GetAFDCustomDomainArgs, GetAFDCustomDomainResult, GetAFDCustomDomainOutputArgs } from "./getAFDCustomDomain";
export const getAFDCustomDomain: typeof import("./getAFDCustomDomain").getAFDCustomDomain = null as any;
export const getAFDCustomDomainOutput: typeof import("./getAFDCustomDomain").getAFDCustomDomainOutput = null as any;
utilities.lazyLoad(exports, ["getAFDCustomDomain","getAFDCustomDomainOutput"], () => require("./getAFDCustomDomain"));

export { GetAFDEndpointArgs, GetAFDEndpointResult, GetAFDEndpointOutputArgs } from "./getAFDEndpoint";
export const getAFDEndpoint: typeof import("./getAFDEndpoint").getAFDEndpoint = null as any;
export const getAFDEndpointOutput: typeof import("./getAFDEndpoint").getAFDEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getAFDEndpoint","getAFDEndpointOutput"], () => require("./getAFDEndpoint"));

export { GetAFDOriginArgs, GetAFDOriginResult, GetAFDOriginOutputArgs } from "./getAFDOrigin";
export const getAFDOrigin: typeof import("./getAFDOrigin").getAFDOrigin = null as any;
export const getAFDOriginOutput: typeof import("./getAFDOrigin").getAFDOriginOutput = null as any;
utilities.lazyLoad(exports, ["getAFDOrigin","getAFDOriginOutput"], () => require("./getAFDOrigin"));

export { GetAFDOriginGroupArgs, GetAFDOriginGroupResult, GetAFDOriginGroupOutputArgs } from "./getAFDOriginGroup";
export const getAFDOriginGroup: typeof import("./getAFDOriginGroup").getAFDOriginGroup = null as any;
export const getAFDOriginGroupOutput: typeof import("./getAFDOriginGroup").getAFDOriginGroupOutput = null as any;
utilities.lazyLoad(exports, ["getAFDOriginGroup","getAFDOriginGroupOutput"], () => require("./getAFDOriginGroup"));

export { GetAFDTargetGroupArgs, GetAFDTargetGroupResult, GetAFDTargetGroupOutputArgs } from "./getAFDTargetGroup";
export const getAFDTargetGroup: typeof import("./getAFDTargetGroup").getAFDTargetGroup = null as any;
export const getAFDTargetGroupOutput: typeof import("./getAFDTargetGroup").getAFDTargetGroupOutput = null as any;
utilities.lazyLoad(exports, ["getAFDTargetGroup","getAFDTargetGroupOutput"], () => require("./getAFDTargetGroup"));

export { GetCustomDomainArgs, GetCustomDomainResult, GetCustomDomainOutputArgs } from "./getCustomDomain";
export const getCustomDomain: typeof import("./getCustomDomain").getCustomDomain = null as any;
export const getCustomDomainOutput: typeof import("./getCustomDomain").getCustomDomainOutput = null as any;
utilities.lazyLoad(exports, ["getCustomDomain","getCustomDomainOutput"], () => require("./getCustomDomain"));

export { GetEndpointArgs, GetEndpointResult, GetEndpointOutputArgs } from "./getEndpoint";
export const getEndpoint: typeof import("./getEndpoint").getEndpoint = null as any;
export const getEndpointOutput: typeof import("./getEndpoint").getEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getEndpoint","getEndpointOutput"], () => require("./getEndpoint"));

export { GetKeyGroupArgs, GetKeyGroupResult, GetKeyGroupOutputArgs } from "./getKeyGroup";
export const getKeyGroup: typeof import("./getKeyGroup").getKeyGroup = null as any;
export const getKeyGroupOutput: typeof import("./getKeyGroup").getKeyGroupOutput = null as any;
utilities.lazyLoad(exports, ["getKeyGroup","getKeyGroupOutput"], () => require("./getKeyGroup"));

export { GetOriginArgs, GetOriginResult, GetOriginOutputArgs } from "./getOrigin";
export const getOrigin: typeof import("./getOrigin").getOrigin = null as any;
export const getOriginOutput: typeof import("./getOrigin").getOriginOutput = null as any;
utilities.lazyLoad(exports, ["getOrigin","getOriginOutput"], () => require("./getOrigin"));

export { GetOriginGroupArgs, GetOriginGroupResult, GetOriginGroupOutputArgs } from "./getOriginGroup";
export const getOriginGroup: typeof import("./getOriginGroup").getOriginGroup = null as any;
export const getOriginGroupOutput: typeof import("./getOriginGroup").getOriginGroupOutput = null as any;
utilities.lazyLoad(exports, ["getOriginGroup","getOriginGroupOutput"], () => require("./getOriginGroup"));

export { GetPolicyArgs, GetPolicyResult, GetPolicyOutputArgs } from "./getPolicy";
export const getPolicy: typeof import("./getPolicy").getPolicy = null as any;
export const getPolicyOutput: typeof import("./getPolicy").getPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getPolicy","getPolicyOutput"], () => require("./getPolicy"));

export { GetProfileArgs, GetProfileResult, GetProfileOutputArgs } from "./getProfile";
export const getProfile: typeof import("./getProfile").getProfile = null as any;
export const getProfileOutput: typeof import("./getProfile").getProfileOutput = null as any;
utilities.lazyLoad(exports, ["getProfile","getProfileOutput"], () => require("./getProfile"));

export { GetProfileSupportedOptimizationTypesArgs, GetProfileSupportedOptimizationTypesResult, GetProfileSupportedOptimizationTypesOutputArgs } from "./getProfileSupportedOptimizationTypes";
export const getProfileSupportedOptimizationTypes: typeof import("./getProfileSupportedOptimizationTypes").getProfileSupportedOptimizationTypes = null as any;
export const getProfileSupportedOptimizationTypesOutput: typeof import("./getProfileSupportedOptimizationTypes").getProfileSupportedOptimizationTypesOutput = null as any;
utilities.lazyLoad(exports, ["getProfileSupportedOptimizationTypes","getProfileSupportedOptimizationTypesOutput"], () => require("./getProfileSupportedOptimizationTypes"));

export { GetRouteArgs, GetRouteResult, GetRouteOutputArgs } from "./getRoute";
export const getRoute: typeof import("./getRoute").getRoute = null as any;
export const getRouteOutput: typeof import("./getRoute").getRouteOutput = null as any;
utilities.lazyLoad(exports, ["getRoute","getRouteOutput"], () => require("./getRoute"));

export { GetRuleArgs, GetRuleResult, GetRuleOutputArgs } from "./getRule";
export const getRule: typeof import("./getRule").getRule = null as any;
export const getRuleOutput: typeof import("./getRule").getRuleOutput = null as any;
utilities.lazyLoad(exports, ["getRule","getRuleOutput"], () => require("./getRule"));

export { GetRuleSetArgs, GetRuleSetResult, GetRuleSetOutputArgs } from "./getRuleSet";
export const getRuleSet: typeof import("./getRuleSet").getRuleSet = null as any;
export const getRuleSetOutput: typeof import("./getRuleSet").getRuleSetOutput = null as any;
utilities.lazyLoad(exports, ["getRuleSet","getRuleSetOutput"], () => require("./getRuleSet"));

export { GetSecretArgs, GetSecretResult, GetSecretOutputArgs } from "./getSecret";
export const getSecret: typeof import("./getSecret").getSecret = null as any;
export const getSecretOutput: typeof import("./getSecret").getSecretOutput = null as any;
utilities.lazyLoad(exports, ["getSecret","getSecretOutput"], () => require("./getSecret"));

export { GetSecurityPolicyArgs, GetSecurityPolicyResult, GetSecurityPolicyOutputArgs } from "./getSecurityPolicy";
export const getSecurityPolicy: typeof import("./getSecurityPolicy").getSecurityPolicy = null as any;
export const getSecurityPolicyOutput: typeof import("./getSecurityPolicy").getSecurityPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityPolicy","getSecurityPolicyOutput"], () => require("./getSecurityPolicy"));

export { GetTunnelPolicyArgs, GetTunnelPolicyResult, GetTunnelPolicyOutputArgs } from "./getTunnelPolicy";
export const getTunnelPolicy: typeof import("./getTunnelPolicy").getTunnelPolicy = null as any;
export const getTunnelPolicyOutput: typeof import("./getTunnelPolicy").getTunnelPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getTunnelPolicy","getTunnelPolicyOutput"], () => require("./getTunnelPolicy"));

export { KeyGroupArgs } from "./keyGroup";
export type KeyGroup = import("./keyGroup").KeyGroup;
export const KeyGroup: typeof import("./keyGroup").KeyGroup = null as any;
utilities.lazyLoad(exports, ["KeyGroup"], () => require("./keyGroup"));

export { OriginArgs } from "./origin";
export type Origin = import("./origin").Origin;
export const Origin: typeof import("./origin").Origin = null as any;
utilities.lazyLoad(exports, ["Origin"], () => require("./origin"));

export { OriginGroupArgs } from "./originGroup";
export type OriginGroup = import("./originGroup").OriginGroup;
export const OriginGroup: typeof import("./originGroup").OriginGroup = null as any;
utilities.lazyLoad(exports, ["OriginGroup"], () => require("./originGroup"));

export { PolicyArgs } from "./policy";
export type Policy = import("./policy").Policy;
export const Policy: typeof import("./policy").Policy = null as any;
utilities.lazyLoad(exports, ["Policy"], () => require("./policy"));

export { ProfileArgs } from "./profile";
export type Profile = import("./profile").Profile;
export const Profile: typeof import("./profile").Profile = null as any;
utilities.lazyLoad(exports, ["Profile"], () => require("./profile"));

export { RouteArgs } from "./route";
export type Route = import("./route").Route;
export const Route: typeof import("./route").Route = null as any;
utilities.lazyLoad(exports, ["Route"], () => require("./route"));

export { RuleArgs } from "./rule";
export type Rule = import("./rule").Rule;
export const Rule: typeof import("./rule").Rule = null as any;
utilities.lazyLoad(exports, ["Rule"], () => require("./rule"));

export { RuleSetArgs } from "./ruleSet";
export type RuleSet = import("./ruleSet").RuleSet;
export const RuleSet: typeof import("./ruleSet").RuleSet = null as any;
utilities.lazyLoad(exports, ["RuleSet"], () => require("./ruleSet"));

export { SecretArgs } from "./secret";
export type Secret = import("./secret").Secret;
export const Secret: typeof import("./secret").Secret = null as any;
utilities.lazyLoad(exports, ["Secret"], () => require("./secret"));

export { SecurityPolicyArgs } from "./securityPolicy";
export type SecurityPolicy = import("./securityPolicy").SecurityPolicy;
export const SecurityPolicy: typeof import("./securityPolicy").SecurityPolicy = null as any;
utilities.lazyLoad(exports, ["SecurityPolicy"], () => require("./securityPolicy"));

export { TunnelPolicyArgs } from "./tunnelPolicy";
export type TunnelPolicy = import("./tunnelPolicy").TunnelPolicy;
export const TunnelPolicy: typeof import("./tunnelPolicy").TunnelPolicy = null as any;
utilities.lazyLoad(exports, ["TunnelPolicy"], () => require("./tunnelPolicy"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:cdn:AFDCustomDomain":
                return new AFDCustomDomain(name, <any>undefined, { urn })
            case "azure-native:cdn:AFDEndpoint":
                return new AFDEndpoint(name, <any>undefined, { urn })
            case "azure-native:cdn:AFDOrigin":
                return new AFDOrigin(name, <any>undefined, { urn })
            case "azure-native:cdn:AFDOriginGroup":
                return new AFDOriginGroup(name, <any>undefined, { urn })
            case "azure-native:cdn:AFDTargetGroup":
                return new AFDTargetGroup(name, <any>undefined, { urn })
            case "azure-native:cdn:CustomDomain":
                return new CustomDomain(name, <any>undefined, { urn })
            case "azure-native:cdn:Endpoint":
                return new Endpoint(name, <any>undefined, { urn })
            case "azure-native:cdn:KeyGroup":
                return new KeyGroup(name, <any>undefined, { urn })
            case "azure-native:cdn:Origin":
                return new Origin(name, <any>undefined, { urn })
            case "azure-native:cdn:OriginGroup":
                return new OriginGroup(name, <any>undefined, { urn })
            case "azure-native:cdn:Policy":
                return new Policy(name, <any>undefined, { urn })
            case "azure-native:cdn:Profile":
                return new Profile(name, <any>undefined, { urn })
            case "azure-native:cdn:Route":
                return new Route(name, <any>undefined, { urn })
            case "azure-native:cdn:Rule":
                return new Rule(name, <any>undefined, { urn })
            case "azure-native:cdn:RuleSet":
                return new RuleSet(name, <any>undefined, { urn })
            case "azure-native:cdn:Secret":
                return new Secret(name, <any>undefined, { urn })
            case "azure-native:cdn:SecurityPolicy":
                return new SecurityPolicy(name, <any>undefined, { urn })
            case "azure-native:cdn:TunnelPolicy":
                return new TunnelPolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cdn", _module)