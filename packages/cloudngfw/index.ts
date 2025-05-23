import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CertificateObjectGlobalRulestackArgs } from "./certificateObjectGlobalRulestack";
export type CertificateObjectGlobalRulestack = import("./certificateObjectGlobalRulestack").CertificateObjectGlobalRulestack;
export const CertificateObjectGlobalRulestack: typeof import("./certificateObjectGlobalRulestack").CertificateObjectGlobalRulestack = null as any;
utilities.lazyLoad(exports, ["CertificateObjectGlobalRulestack"], () => require("./certificateObjectGlobalRulestack"));

export { CertificateObjectLocalRulestackArgs } from "./certificateObjectLocalRulestack";
export type CertificateObjectLocalRulestack = import("./certificateObjectLocalRulestack").CertificateObjectLocalRulestack;
export const CertificateObjectLocalRulestack: typeof import("./certificateObjectLocalRulestack").CertificateObjectLocalRulestack = null as any;
utilities.lazyLoad(exports, ["CertificateObjectLocalRulestack"], () => require("./certificateObjectLocalRulestack"));

export { FirewallArgs } from "./firewall";
export type Firewall = import("./firewall").Firewall;
export const Firewall: typeof import("./firewall").Firewall = null as any;
utilities.lazyLoad(exports, ["Firewall"], () => require("./firewall"));

export { FqdnListGlobalRulestackArgs } from "./fqdnListGlobalRulestack";
export type FqdnListGlobalRulestack = import("./fqdnListGlobalRulestack").FqdnListGlobalRulestack;
export const FqdnListGlobalRulestack: typeof import("./fqdnListGlobalRulestack").FqdnListGlobalRulestack = null as any;
utilities.lazyLoad(exports, ["FqdnListGlobalRulestack"], () => require("./fqdnListGlobalRulestack"));

export { FqdnListLocalRulestackArgs } from "./fqdnListLocalRulestack";
export type FqdnListLocalRulestack = import("./fqdnListLocalRulestack").FqdnListLocalRulestack;
export const FqdnListLocalRulestack: typeof import("./fqdnListLocalRulestack").FqdnListLocalRulestack = null as any;
utilities.lazyLoad(exports, ["FqdnListLocalRulestack"], () => require("./fqdnListLocalRulestack"));

export { GetCertificateObjectGlobalRulestackArgs, GetCertificateObjectGlobalRulestackResult, GetCertificateObjectGlobalRulestackOutputArgs } from "./getCertificateObjectGlobalRulestack";
export const getCertificateObjectGlobalRulestack: typeof import("./getCertificateObjectGlobalRulestack").getCertificateObjectGlobalRulestack = null as any;
export const getCertificateObjectGlobalRulestackOutput: typeof import("./getCertificateObjectGlobalRulestack").getCertificateObjectGlobalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getCertificateObjectGlobalRulestack","getCertificateObjectGlobalRulestackOutput"], () => require("./getCertificateObjectGlobalRulestack"));

export { GetCertificateObjectLocalRulestackArgs, GetCertificateObjectLocalRulestackResult, GetCertificateObjectLocalRulestackOutputArgs } from "./getCertificateObjectLocalRulestack";
export const getCertificateObjectLocalRulestack: typeof import("./getCertificateObjectLocalRulestack").getCertificateObjectLocalRulestack = null as any;
export const getCertificateObjectLocalRulestackOutput: typeof import("./getCertificateObjectLocalRulestack").getCertificateObjectLocalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getCertificateObjectLocalRulestack","getCertificateObjectLocalRulestackOutput"], () => require("./getCertificateObjectLocalRulestack"));

export { GetFirewallArgs, GetFirewallResult, GetFirewallOutputArgs } from "./getFirewall";
export const getFirewall: typeof import("./getFirewall").getFirewall = null as any;
export const getFirewallOutput: typeof import("./getFirewall").getFirewallOutput = null as any;
utilities.lazyLoad(exports, ["getFirewall","getFirewallOutput"], () => require("./getFirewall"));

export { GetFirewallGlobalRulestackArgs, GetFirewallGlobalRulestackResult, GetFirewallGlobalRulestackOutputArgs } from "./getFirewallGlobalRulestack";
export const getFirewallGlobalRulestack: typeof import("./getFirewallGlobalRulestack").getFirewallGlobalRulestack = null as any;
export const getFirewallGlobalRulestackOutput: typeof import("./getFirewallGlobalRulestack").getFirewallGlobalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallGlobalRulestack","getFirewallGlobalRulestackOutput"], () => require("./getFirewallGlobalRulestack"));

export { GetFirewallLogProfileArgs, GetFirewallLogProfileResult, GetFirewallLogProfileOutputArgs } from "./getFirewallLogProfile";
export const getFirewallLogProfile: typeof import("./getFirewallLogProfile").getFirewallLogProfile = null as any;
export const getFirewallLogProfileOutput: typeof import("./getFirewallLogProfile").getFirewallLogProfileOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallLogProfile","getFirewallLogProfileOutput"], () => require("./getFirewallLogProfile"));

export { GetFirewallSupportInfoArgs, GetFirewallSupportInfoResult, GetFirewallSupportInfoOutputArgs } from "./getFirewallSupportInfo";
export const getFirewallSupportInfo: typeof import("./getFirewallSupportInfo").getFirewallSupportInfo = null as any;
export const getFirewallSupportInfoOutput: typeof import("./getFirewallSupportInfo").getFirewallSupportInfoOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallSupportInfo","getFirewallSupportInfoOutput"], () => require("./getFirewallSupportInfo"));

export { GetFqdnListGlobalRulestackArgs, GetFqdnListGlobalRulestackResult, GetFqdnListGlobalRulestackOutputArgs } from "./getFqdnListGlobalRulestack";
export const getFqdnListGlobalRulestack: typeof import("./getFqdnListGlobalRulestack").getFqdnListGlobalRulestack = null as any;
export const getFqdnListGlobalRulestackOutput: typeof import("./getFqdnListGlobalRulestack").getFqdnListGlobalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getFqdnListGlobalRulestack","getFqdnListGlobalRulestackOutput"], () => require("./getFqdnListGlobalRulestack"));

export { GetFqdnListLocalRulestackArgs, GetFqdnListLocalRulestackResult, GetFqdnListLocalRulestackOutputArgs } from "./getFqdnListLocalRulestack";
export const getFqdnListLocalRulestack: typeof import("./getFqdnListLocalRulestack").getFqdnListLocalRulestack = null as any;
export const getFqdnListLocalRulestackOutput: typeof import("./getFqdnListLocalRulestack").getFqdnListLocalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getFqdnListLocalRulestack","getFqdnListLocalRulestackOutput"], () => require("./getFqdnListLocalRulestack"));

export { GetGlobalRulestackArgs, GetGlobalRulestackResult, GetGlobalRulestackOutputArgs } from "./getGlobalRulestack";
export const getGlobalRulestack: typeof import("./getGlobalRulestack").getGlobalRulestack = null as any;
export const getGlobalRulestackOutput: typeof import("./getGlobalRulestack").getGlobalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalRulestack","getGlobalRulestackOutput"], () => require("./getGlobalRulestack"));

export { GetGlobalRulestackChangeLogArgs, GetGlobalRulestackChangeLogResult, GetGlobalRulestackChangeLogOutputArgs } from "./getGlobalRulestackChangeLog";
export const getGlobalRulestackChangeLog: typeof import("./getGlobalRulestackChangeLog").getGlobalRulestackChangeLog = null as any;
export const getGlobalRulestackChangeLogOutput: typeof import("./getGlobalRulestackChangeLog").getGlobalRulestackChangeLogOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalRulestackChangeLog","getGlobalRulestackChangeLogOutput"], () => require("./getGlobalRulestackChangeLog"));

export { GetLocalRuleArgs, GetLocalRuleResult, GetLocalRuleOutputArgs } from "./getLocalRule";
export const getLocalRule: typeof import("./getLocalRule").getLocalRule = null as any;
export const getLocalRuleOutput: typeof import("./getLocalRule").getLocalRuleOutput = null as any;
utilities.lazyLoad(exports, ["getLocalRule","getLocalRuleOutput"], () => require("./getLocalRule"));

export { GetLocalRuleCountersArgs, GetLocalRuleCountersResult, GetLocalRuleCountersOutputArgs } from "./getLocalRuleCounters";
export const getLocalRuleCounters: typeof import("./getLocalRuleCounters").getLocalRuleCounters = null as any;
export const getLocalRuleCountersOutput: typeof import("./getLocalRuleCounters").getLocalRuleCountersOutput = null as any;
utilities.lazyLoad(exports, ["getLocalRuleCounters","getLocalRuleCountersOutput"], () => require("./getLocalRuleCounters"));

export { GetLocalRulestackArgs, GetLocalRulestackResult, GetLocalRulestackOutputArgs } from "./getLocalRulestack";
export const getLocalRulestack: typeof import("./getLocalRulestack").getLocalRulestack = null as any;
export const getLocalRulestackOutput: typeof import("./getLocalRulestack").getLocalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getLocalRulestack","getLocalRulestackOutput"], () => require("./getLocalRulestack"));

export { GetLocalRulestackChangeLogArgs, GetLocalRulestackChangeLogResult, GetLocalRulestackChangeLogOutputArgs } from "./getLocalRulestackChangeLog";
export const getLocalRulestackChangeLog: typeof import("./getLocalRulestackChangeLog").getLocalRulestackChangeLog = null as any;
export const getLocalRulestackChangeLogOutput: typeof import("./getLocalRulestackChangeLog").getLocalRulestackChangeLogOutput = null as any;
utilities.lazyLoad(exports, ["getLocalRulestackChangeLog","getLocalRulestackChangeLogOutput"], () => require("./getLocalRulestackChangeLog"));

export { GetLocalRulestackSupportInfoArgs, GetLocalRulestackSupportInfoResult, GetLocalRulestackSupportInfoOutputArgs } from "./getLocalRulestackSupportInfo";
export const getLocalRulestackSupportInfo: typeof import("./getLocalRulestackSupportInfo").getLocalRulestackSupportInfo = null as any;
export const getLocalRulestackSupportInfoOutput: typeof import("./getLocalRulestackSupportInfo").getLocalRulestackSupportInfoOutput = null as any;
utilities.lazyLoad(exports, ["getLocalRulestackSupportInfo","getLocalRulestackSupportInfoOutput"], () => require("./getLocalRulestackSupportInfo"));

export { GetPostRuleArgs, GetPostRuleResult, GetPostRuleOutputArgs } from "./getPostRule";
export const getPostRule: typeof import("./getPostRule").getPostRule = null as any;
export const getPostRuleOutput: typeof import("./getPostRule").getPostRuleOutput = null as any;
utilities.lazyLoad(exports, ["getPostRule","getPostRuleOutput"], () => require("./getPostRule"));

export { GetPostRuleCountersArgs, GetPostRuleCountersResult, GetPostRuleCountersOutputArgs } from "./getPostRuleCounters";
export const getPostRuleCounters: typeof import("./getPostRuleCounters").getPostRuleCounters = null as any;
export const getPostRuleCountersOutput: typeof import("./getPostRuleCounters").getPostRuleCountersOutput = null as any;
utilities.lazyLoad(exports, ["getPostRuleCounters","getPostRuleCountersOutput"], () => require("./getPostRuleCounters"));

export { GetPreRuleArgs, GetPreRuleResult, GetPreRuleOutputArgs } from "./getPreRule";
export const getPreRule: typeof import("./getPreRule").getPreRule = null as any;
export const getPreRuleOutput: typeof import("./getPreRule").getPreRuleOutput = null as any;
utilities.lazyLoad(exports, ["getPreRule","getPreRuleOutput"], () => require("./getPreRule"));

export { GetPreRuleCountersArgs, GetPreRuleCountersResult, GetPreRuleCountersOutputArgs } from "./getPreRuleCounters";
export const getPreRuleCounters: typeof import("./getPreRuleCounters").getPreRuleCounters = null as any;
export const getPreRuleCountersOutput: typeof import("./getPreRuleCounters").getPreRuleCountersOutput = null as any;
utilities.lazyLoad(exports, ["getPreRuleCounters","getPreRuleCountersOutput"], () => require("./getPreRuleCounters"));

export { GetPrefixListGlobalRulestackArgs, GetPrefixListGlobalRulestackResult, GetPrefixListGlobalRulestackOutputArgs } from "./getPrefixListGlobalRulestack";
export const getPrefixListGlobalRulestack: typeof import("./getPrefixListGlobalRulestack").getPrefixListGlobalRulestack = null as any;
export const getPrefixListGlobalRulestackOutput: typeof import("./getPrefixListGlobalRulestack").getPrefixListGlobalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getPrefixListGlobalRulestack","getPrefixListGlobalRulestackOutput"], () => require("./getPrefixListGlobalRulestack"));

export { GetPrefixListLocalRulestackArgs, GetPrefixListLocalRulestackResult, GetPrefixListLocalRulestackOutputArgs } from "./getPrefixListLocalRulestack";
export const getPrefixListLocalRulestack: typeof import("./getPrefixListLocalRulestack").getPrefixListLocalRulestack = null as any;
export const getPrefixListLocalRulestackOutput: typeof import("./getPrefixListLocalRulestack").getPrefixListLocalRulestackOutput = null as any;
utilities.lazyLoad(exports, ["getPrefixListLocalRulestack","getPrefixListLocalRulestackOutput"], () => require("./getPrefixListLocalRulestack"));

export { GlobalRulestackArgs } from "./globalRulestack";
export type GlobalRulestack = import("./globalRulestack").GlobalRulestack;
export const GlobalRulestack: typeof import("./globalRulestack").GlobalRulestack = null as any;
utilities.lazyLoad(exports, ["GlobalRulestack"], () => require("./globalRulestack"));

export { ListGlobalRulestackAdvancedSecurityObjectsArgs, ListGlobalRulestackAdvancedSecurityObjectsResult, ListGlobalRulestackAdvancedSecurityObjectsOutputArgs } from "./listGlobalRulestackAdvancedSecurityObjects";
export const listGlobalRulestackAdvancedSecurityObjects: typeof import("./listGlobalRulestackAdvancedSecurityObjects").listGlobalRulestackAdvancedSecurityObjects = null as any;
export const listGlobalRulestackAdvancedSecurityObjectsOutput: typeof import("./listGlobalRulestackAdvancedSecurityObjects").listGlobalRulestackAdvancedSecurityObjectsOutput = null as any;
utilities.lazyLoad(exports, ["listGlobalRulestackAdvancedSecurityObjects","listGlobalRulestackAdvancedSecurityObjectsOutput"], () => require("./listGlobalRulestackAdvancedSecurityObjects"));

export { ListGlobalRulestackAppIdsArgs, ListGlobalRulestackAppIdsResult, ListGlobalRulestackAppIdsOutputArgs } from "./listGlobalRulestackAppIds";
export const listGlobalRulestackAppIds: typeof import("./listGlobalRulestackAppIds").listGlobalRulestackAppIds = null as any;
export const listGlobalRulestackAppIdsOutput: typeof import("./listGlobalRulestackAppIds").listGlobalRulestackAppIdsOutput = null as any;
utilities.lazyLoad(exports, ["listGlobalRulestackAppIds","listGlobalRulestackAppIdsOutput"], () => require("./listGlobalRulestackAppIds"));

export { ListGlobalRulestackCountriesArgs, ListGlobalRulestackCountriesResult, ListGlobalRulestackCountriesOutputArgs } from "./listGlobalRulestackCountries";
export const listGlobalRulestackCountries: typeof import("./listGlobalRulestackCountries").listGlobalRulestackCountries = null as any;
export const listGlobalRulestackCountriesOutput: typeof import("./listGlobalRulestackCountries").listGlobalRulestackCountriesOutput = null as any;
utilities.lazyLoad(exports, ["listGlobalRulestackCountries","listGlobalRulestackCountriesOutput"], () => require("./listGlobalRulestackCountries"));

export { ListGlobalRulestackFirewallsArgs, ListGlobalRulestackFirewallsResult, ListGlobalRulestackFirewallsOutputArgs } from "./listGlobalRulestackFirewalls";
export const listGlobalRulestackFirewalls: typeof import("./listGlobalRulestackFirewalls").listGlobalRulestackFirewalls = null as any;
export const listGlobalRulestackFirewallsOutput: typeof import("./listGlobalRulestackFirewalls").listGlobalRulestackFirewallsOutput = null as any;
utilities.lazyLoad(exports, ["listGlobalRulestackFirewalls","listGlobalRulestackFirewallsOutput"], () => require("./listGlobalRulestackFirewalls"));

export { ListGlobalRulestackPredefinedUrlCategoriesArgs, ListGlobalRulestackPredefinedUrlCategoriesResult, ListGlobalRulestackPredefinedUrlCategoriesOutputArgs } from "./listGlobalRulestackPredefinedUrlCategories";
export const listGlobalRulestackPredefinedUrlCategories: typeof import("./listGlobalRulestackPredefinedUrlCategories").listGlobalRulestackPredefinedUrlCategories = null as any;
export const listGlobalRulestackPredefinedUrlCategoriesOutput: typeof import("./listGlobalRulestackPredefinedUrlCategories").listGlobalRulestackPredefinedUrlCategoriesOutput = null as any;
utilities.lazyLoad(exports, ["listGlobalRulestackPredefinedUrlCategories","listGlobalRulestackPredefinedUrlCategoriesOutput"], () => require("./listGlobalRulestackPredefinedUrlCategories"));

export { ListGlobalRulestackSecurityServicesArgs, ListGlobalRulestackSecurityServicesResult, ListGlobalRulestackSecurityServicesOutputArgs } from "./listGlobalRulestackSecurityServices";
export const listGlobalRulestackSecurityServices: typeof import("./listGlobalRulestackSecurityServices").listGlobalRulestackSecurityServices = null as any;
export const listGlobalRulestackSecurityServicesOutput: typeof import("./listGlobalRulestackSecurityServices").listGlobalRulestackSecurityServicesOutput = null as any;
utilities.lazyLoad(exports, ["listGlobalRulestackSecurityServices","listGlobalRulestackSecurityServicesOutput"], () => require("./listGlobalRulestackSecurityServices"));

export { ListLocalRulestackAdvancedSecurityObjectsArgs, ListLocalRulestackAdvancedSecurityObjectsResult, ListLocalRulestackAdvancedSecurityObjectsOutputArgs } from "./listLocalRulestackAdvancedSecurityObjects";
export const listLocalRulestackAdvancedSecurityObjects: typeof import("./listLocalRulestackAdvancedSecurityObjects").listLocalRulestackAdvancedSecurityObjects = null as any;
export const listLocalRulestackAdvancedSecurityObjectsOutput: typeof import("./listLocalRulestackAdvancedSecurityObjects").listLocalRulestackAdvancedSecurityObjectsOutput = null as any;
utilities.lazyLoad(exports, ["listLocalRulestackAdvancedSecurityObjects","listLocalRulestackAdvancedSecurityObjectsOutput"], () => require("./listLocalRulestackAdvancedSecurityObjects"));

export { ListLocalRulestackAppIdsArgs, ListLocalRulestackAppIdsResult, ListLocalRulestackAppIdsOutputArgs } from "./listLocalRulestackAppIds";
export const listLocalRulestackAppIds: typeof import("./listLocalRulestackAppIds").listLocalRulestackAppIds = null as any;
export const listLocalRulestackAppIdsOutput: typeof import("./listLocalRulestackAppIds").listLocalRulestackAppIdsOutput = null as any;
utilities.lazyLoad(exports, ["listLocalRulestackAppIds","listLocalRulestackAppIdsOutput"], () => require("./listLocalRulestackAppIds"));

export { ListLocalRulestackCountriesArgs, ListLocalRulestackCountriesResult, ListLocalRulestackCountriesOutputArgs } from "./listLocalRulestackCountries";
export const listLocalRulestackCountries: typeof import("./listLocalRulestackCountries").listLocalRulestackCountries = null as any;
export const listLocalRulestackCountriesOutput: typeof import("./listLocalRulestackCountries").listLocalRulestackCountriesOutput = null as any;
utilities.lazyLoad(exports, ["listLocalRulestackCountries","listLocalRulestackCountriesOutput"], () => require("./listLocalRulestackCountries"));

export { ListLocalRulestackFirewallsArgs, ListLocalRulestackFirewallsResult, ListLocalRulestackFirewallsOutputArgs } from "./listLocalRulestackFirewalls";
export const listLocalRulestackFirewalls: typeof import("./listLocalRulestackFirewalls").listLocalRulestackFirewalls = null as any;
export const listLocalRulestackFirewallsOutput: typeof import("./listLocalRulestackFirewalls").listLocalRulestackFirewallsOutput = null as any;
utilities.lazyLoad(exports, ["listLocalRulestackFirewalls","listLocalRulestackFirewallsOutput"], () => require("./listLocalRulestackFirewalls"));

export { ListLocalRulestackPredefinedUrlCategoriesArgs, ListLocalRulestackPredefinedUrlCategoriesResult, ListLocalRulestackPredefinedUrlCategoriesOutputArgs } from "./listLocalRulestackPredefinedUrlCategories";
export const listLocalRulestackPredefinedUrlCategories: typeof import("./listLocalRulestackPredefinedUrlCategories").listLocalRulestackPredefinedUrlCategories = null as any;
export const listLocalRulestackPredefinedUrlCategoriesOutput: typeof import("./listLocalRulestackPredefinedUrlCategories").listLocalRulestackPredefinedUrlCategoriesOutput = null as any;
utilities.lazyLoad(exports, ["listLocalRulestackPredefinedUrlCategories","listLocalRulestackPredefinedUrlCategoriesOutput"], () => require("./listLocalRulestackPredefinedUrlCategories"));

export { ListLocalRulestackSecurityServicesArgs, ListLocalRulestackSecurityServicesResult, ListLocalRulestackSecurityServicesOutputArgs } from "./listLocalRulestackSecurityServices";
export const listLocalRulestackSecurityServices: typeof import("./listLocalRulestackSecurityServices").listLocalRulestackSecurityServices = null as any;
export const listLocalRulestackSecurityServicesOutput: typeof import("./listLocalRulestackSecurityServices").listLocalRulestackSecurityServicesOutput = null as any;
utilities.lazyLoad(exports, ["listLocalRulestackSecurityServices","listLocalRulestackSecurityServicesOutput"], () => require("./listLocalRulestackSecurityServices"));

export { ListPaloAltoNetworksCloudngfwCloudManagerTenantsArgs, ListPaloAltoNetworksCloudngfwCloudManagerTenantsResult } from "./listPaloAltoNetworksCloudngfwCloudManagerTenants";
export const listPaloAltoNetworksCloudngfwCloudManagerTenants: typeof import("./listPaloAltoNetworksCloudngfwCloudManagerTenants").listPaloAltoNetworksCloudngfwCloudManagerTenants = null as any;
export const listPaloAltoNetworksCloudngfwCloudManagerTenantsOutput: typeof import("./listPaloAltoNetworksCloudngfwCloudManagerTenants").listPaloAltoNetworksCloudngfwCloudManagerTenantsOutput = null as any;
utilities.lazyLoad(exports, ["listPaloAltoNetworksCloudngfwCloudManagerTenants","listPaloAltoNetworksCloudngfwCloudManagerTenantsOutput"], () => require("./listPaloAltoNetworksCloudngfwCloudManagerTenants"));

export { ListPaloAltoNetworksCloudngfwProductSerialNumberStatusArgs, ListPaloAltoNetworksCloudngfwProductSerialNumberStatusResult } from "./listPaloAltoNetworksCloudngfwProductSerialNumberStatus";
export const listPaloAltoNetworksCloudngfwProductSerialNumberStatus: typeof import("./listPaloAltoNetworksCloudngfwProductSerialNumberStatus").listPaloAltoNetworksCloudngfwProductSerialNumberStatus = null as any;
export const listPaloAltoNetworksCloudngfwProductSerialNumberStatusOutput: typeof import("./listPaloAltoNetworksCloudngfwProductSerialNumberStatus").listPaloAltoNetworksCloudngfwProductSerialNumberStatusOutput = null as any;
utilities.lazyLoad(exports, ["listPaloAltoNetworksCloudngfwProductSerialNumberStatus","listPaloAltoNetworksCloudngfwProductSerialNumberStatusOutput"], () => require("./listPaloAltoNetworksCloudngfwProductSerialNumberStatus"));

export { ListPaloAltoNetworksCloudngfwSupportInfoArgs, ListPaloAltoNetworksCloudngfwSupportInfoResult } from "./listPaloAltoNetworksCloudngfwSupportInfo";
export const listPaloAltoNetworksCloudngfwSupportInfo: typeof import("./listPaloAltoNetworksCloudngfwSupportInfo").listPaloAltoNetworksCloudngfwSupportInfo = null as any;
export const listPaloAltoNetworksCloudngfwSupportInfoOutput: typeof import("./listPaloAltoNetworksCloudngfwSupportInfo").listPaloAltoNetworksCloudngfwSupportInfoOutput = null as any;
utilities.lazyLoad(exports, ["listPaloAltoNetworksCloudngfwSupportInfo","listPaloAltoNetworksCloudngfwSupportInfoOutput"], () => require("./listPaloAltoNetworksCloudngfwSupportInfo"));

export { LocalRuleArgs } from "./localRule";
export type LocalRule = import("./localRule").LocalRule;
export const LocalRule: typeof import("./localRule").LocalRule = null as any;
utilities.lazyLoad(exports, ["LocalRule"], () => require("./localRule"));

export { LocalRulestackArgs } from "./localRulestack";
export type LocalRulestack = import("./localRulestack").LocalRulestack;
export const LocalRulestack: typeof import("./localRulestack").LocalRulestack = null as any;
utilities.lazyLoad(exports, ["LocalRulestack"], () => require("./localRulestack"));

export { PostRuleArgs } from "./postRule";
export type PostRule = import("./postRule").PostRule;
export const PostRule: typeof import("./postRule").PostRule = null as any;
utilities.lazyLoad(exports, ["PostRule"], () => require("./postRule"));

export { PreRuleArgs } from "./preRule";
export type PreRule = import("./preRule").PreRule;
export const PreRule: typeof import("./preRule").PreRule = null as any;
utilities.lazyLoad(exports, ["PreRule"], () => require("./preRule"));

export { PrefixListGlobalRulestackArgs } from "./prefixListGlobalRulestack";
export type PrefixListGlobalRulestack = import("./prefixListGlobalRulestack").PrefixListGlobalRulestack;
export const PrefixListGlobalRulestack: typeof import("./prefixListGlobalRulestack").PrefixListGlobalRulestack = null as any;
utilities.lazyLoad(exports, ["PrefixListGlobalRulestack"], () => require("./prefixListGlobalRulestack"));

export { PrefixListLocalRulestackArgs } from "./prefixListLocalRulestack";
export type PrefixListLocalRulestack = import("./prefixListLocalRulestack").PrefixListLocalRulestack;
export const PrefixListLocalRulestack: typeof import("./prefixListLocalRulestack").PrefixListLocalRulestack = null as any;
utilities.lazyLoad(exports, ["PrefixListLocalRulestack"], () => require("./prefixListLocalRulestack"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:cloudngfw:CertificateObjectGlobalRulestack":
                return new CertificateObjectGlobalRulestack(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:CertificateObjectLocalRulestack":
                return new CertificateObjectLocalRulestack(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:Firewall":
                return new Firewall(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:FqdnListGlobalRulestack":
                return new FqdnListGlobalRulestack(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:FqdnListLocalRulestack":
                return new FqdnListLocalRulestack(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:GlobalRulestack":
                return new GlobalRulestack(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:LocalRule":
                return new LocalRule(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:LocalRulestack":
                return new LocalRulestack(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:PostRule":
                return new PostRule(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:PreRule":
                return new PreRule(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:PrefixListGlobalRulestack":
                return new PrefixListGlobalRulestack(name, <any>undefined, { urn })
            case "azure-native:cloudngfw:PrefixListLocalRulestack":
                return new PrefixListLocalRulestack(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cloudngfw", _module)