import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DnssecConfigArgs } from "./dnssecConfig";
export type DnssecConfig = import("./dnssecConfig").DnssecConfig;
export const DnssecConfig: typeof import("./dnssecConfig").DnssecConfig = null as any;
utilities.lazyLoad(exports, ["DnssecConfig"], () => require("./dnssecConfig"));

export { GetDnsResourceReferenceByTarResourcesArgs, GetDnsResourceReferenceByTarResourcesResult, GetDnsResourceReferenceByTarResourcesOutputArgs } from "./getDnsResourceReferenceByTarResources";
export const getDnsResourceReferenceByTarResources: typeof import("./getDnsResourceReferenceByTarResources").getDnsResourceReferenceByTarResources = null as any;
export const getDnsResourceReferenceByTarResourcesOutput: typeof import("./getDnsResourceReferenceByTarResources").getDnsResourceReferenceByTarResourcesOutput = null as any;
utilities.lazyLoad(exports, ["getDnsResourceReferenceByTarResources","getDnsResourceReferenceByTarResourcesOutput"], () => require("./getDnsResourceReferenceByTarResources"));

export { GetDnssecConfigArgs, GetDnssecConfigResult, GetDnssecConfigOutputArgs } from "./getDnssecConfig";
export const getDnssecConfig: typeof import("./getDnssecConfig").getDnssecConfig = null as any;
export const getDnssecConfigOutput: typeof import("./getDnssecConfig").getDnssecConfigOutput = null as any;
utilities.lazyLoad(exports, ["getDnssecConfig","getDnssecConfigOutput"], () => require("./getDnssecConfig"));

export { GetNetworkSecurityPerimeterArgs, GetNetworkSecurityPerimeterResult, GetNetworkSecurityPerimeterOutputArgs } from "./getNetworkSecurityPerimeter";
export const getNetworkSecurityPerimeter: typeof import("./getNetworkSecurityPerimeter").getNetworkSecurityPerimeter = null as any;
export const getNetworkSecurityPerimeterOutput: typeof import("./getNetworkSecurityPerimeter").getNetworkSecurityPerimeterOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkSecurityPerimeter","getNetworkSecurityPerimeterOutput"], () => require("./getNetworkSecurityPerimeter"));

export { GetNspAccessRuleArgs, GetNspAccessRuleResult, GetNspAccessRuleOutputArgs } from "./getNspAccessRule";
export const getNspAccessRule: typeof import("./getNspAccessRule").getNspAccessRule = null as any;
export const getNspAccessRuleOutput: typeof import("./getNspAccessRule").getNspAccessRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNspAccessRule","getNspAccessRuleOutput"], () => require("./getNspAccessRule"));

export { GetNspAssociationArgs, GetNspAssociationResult, GetNspAssociationOutputArgs } from "./getNspAssociation";
export const getNspAssociation: typeof import("./getNspAssociation").getNspAssociation = null as any;
export const getNspAssociationOutput: typeof import("./getNspAssociation").getNspAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getNspAssociation","getNspAssociationOutput"], () => require("./getNspAssociation"));

export { GetNspLinkArgs, GetNspLinkResult, GetNspLinkOutputArgs } from "./getNspLink";
export const getNspLink: typeof import("./getNspLink").getNspLink = null as any;
export const getNspLinkOutput: typeof import("./getNspLink").getNspLinkOutput = null as any;
utilities.lazyLoad(exports, ["getNspLink","getNspLinkOutput"], () => require("./getNspLink"));

export { GetNspProfileArgs, GetNspProfileResult, GetNspProfileOutputArgs } from "./getNspProfile";
export const getNspProfile: typeof import("./getNspProfile").getNspProfile = null as any;
export const getNspProfileOutput: typeof import("./getNspProfile").getNspProfileOutput = null as any;
utilities.lazyLoad(exports, ["getNspProfile","getNspProfileOutput"], () => require("./getNspProfile"));

export { GetRecordSetArgs, GetRecordSetResult, GetRecordSetOutputArgs } from "./getRecordSet";
export const getRecordSet: typeof import("./getRecordSet").getRecordSet = null as any;
export const getRecordSetOutput: typeof import("./getRecordSet").getRecordSetOutput = null as any;
utilities.lazyLoad(exports, ["getRecordSet","getRecordSetOutput"], () => require("./getRecordSet"));

export { GetZoneArgs, GetZoneResult, GetZoneOutputArgs } from "./getZone";
export const getZone: typeof import("./getZone").getZone = null as any;
export const getZoneOutput: typeof import("./getZone").getZoneOutput = null as any;
utilities.lazyLoad(exports, ["getZone","getZoneOutput"], () => require("./getZone"));

export { NetworkSecurityPerimeterArgs } from "./networkSecurityPerimeter";
export type NetworkSecurityPerimeter = import("./networkSecurityPerimeter").NetworkSecurityPerimeter;
export const NetworkSecurityPerimeter: typeof import("./networkSecurityPerimeter").NetworkSecurityPerimeter = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityPerimeter"], () => require("./networkSecurityPerimeter"));

export { NspAccessRuleArgs } from "./nspAccessRule";
export type NspAccessRule = import("./nspAccessRule").NspAccessRule;
export const NspAccessRule: typeof import("./nspAccessRule").NspAccessRule = null as any;
utilities.lazyLoad(exports, ["NspAccessRule"], () => require("./nspAccessRule"));

export { NspAssociationArgs } from "./nspAssociation";
export type NspAssociation = import("./nspAssociation").NspAssociation;
export const NspAssociation: typeof import("./nspAssociation").NspAssociation = null as any;
utilities.lazyLoad(exports, ["NspAssociation"], () => require("./nspAssociation"));

export { NspLinkArgs } from "./nspLink";
export type NspLink = import("./nspLink").NspLink;
export const NspLink: typeof import("./nspLink").NspLink = null as any;
utilities.lazyLoad(exports, ["NspLink"], () => require("./nspLink"));

export { NspProfileArgs } from "./nspProfile";
export type NspProfile = import("./nspProfile").NspProfile;
export const NspProfile: typeof import("./nspProfile").NspProfile = null as any;
utilities.lazyLoad(exports, ["NspProfile"], () => require("./nspProfile"));

export { RecordSetArgs } from "./recordSet";
export type RecordSet = import("./recordSet").RecordSet;
export const RecordSet: typeof import("./recordSet").RecordSet = null as any;
utilities.lazyLoad(exports, ["RecordSet"], () => require("./recordSet"));

export { ZoneArgs } from "./zone";
export type Zone = import("./zone").Zone;
export const Zone: typeof import("./zone").Zone = null as any;
utilities.lazyLoad(exports, ["Zone"], () => require("./zone"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20230701preview:DnssecConfig":
                return new DnssecConfig(name, <any>undefined, { urn })
            case "azure-native:network/v20230701preview:NetworkSecurityPerimeter":
                return new NetworkSecurityPerimeter(name, <any>undefined, { urn })
            case "azure-native:network/v20230701preview:NspAccessRule":
                return new NspAccessRule(name, <any>undefined, { urn })
            case "azure-native:network/v20230701preview:NspAssociation":
                return new NspAssociation(name, <any>undefined, { urn })
            case "azure-native:network/v20230701preview:NspLink":
                return new NspLink(name, <any>undefined, { urn })
            case "azure-native:network/v20230701preview:NspProfile":
                return new NspProfile(name, <any>undefined, { urn })
            case "azure-native:network/v20230701preview:RecordSet":
                return new RecordSet(name, <any>undefined, { urn })
            case "azure-native:network/v20230701preview:Zone":
                return new Zone(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20230701preview", _module)
