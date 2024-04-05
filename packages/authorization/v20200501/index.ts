import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetManagementLockAtResourceGroupLevelArgs, GetManagementLockAtResourceGroupLevelResult, GetManagementLockAtResourceGroupLevelOutputArgs } from "./getManagementLockAtResourceGroupLevel";
export const getManagementLockAtResourceGroupLevel: typeof import("./getManagementLockAtResourceGroupLevel").getManagementLockAtResourceGroupLevel = null as any;
export const getManagementLockAtResourceGroupLevelOutput: typeof import("./getManagementLockAtResourceGroupLevel").getManagementLockAtResourceGroupLevelOutput = null as any;
utilities.lazyLoad(exports, ["getManagementLockAtResourceGroupLevel","getManagementLockAtResourceGroupLevelOutput"], () => require("./getManagementLockAtResourceGroupLevel"));

export { GetManagementLockAtResourceLevelArgs, GetManagementLockAtResourceLevelResult, GetManagementLockAtResourceLevelOutputArgs } from "./getManagementLockAtResourceLevel";
export const getManagementLockAtResourceLevel: typeof import("./getManagementLockAtResourceLevel").getManagementLockAtResourceLevel = null as any;
export const getManagementLockAtResourceLevelOutput: typeof import("./getManagementLockAtResourceLevel").getManagementLockAtResourceLevelOutput = null as any;
utilities.lazyLoad(exports, ["getManagementLockAtResourceLevel","getManagementLockAtResourceLevelOutput"], () => require("./getManagementLockAtResourceLevel"));

export { GetManagementLockAtSubscriptionLevelArgs, GetManagementLockAtSubscriptionLevelResult, GetManagementLockAtSubscriptionLevelOutputArgs } from "./getManagementLockAtSubscriptionLevel";
export const getManagementLockAtSubscriptionLevel: typeof import("./getManagementLockAtSubscriptionLevel").getManagementLockAtSubscriptionLevel = null as any;
export const getManagementLockAtSubscriptionLevelOutput: typeof import("./getManagementLockAtSubscriptionLevel").getManagementLockAtSubscriptionLevelOutput = null as any;
utilities.lazyLoad(exports, ["getManagementLockAtSubscriptionLevel","getManagementLockAtSubscriptionLevelOutput"], () => require("./getManagementLockAtSubscriptionLevel"));

export { GetManagementLockByScopeArgs, GetManagementLockByScopeResult, GetManagementLockByScopeOutputArgs } from "./getManagementLockByScope";
export const getManagementLockByScope: typeof import("./getManagementLockByScope").getManagementLockByScope = null as any;
export const getManagementLockByScopeOutput: typeof import("./getManagementLockByScope").getManagementLockByScopeOutput = null as any;
utilities.lazyLoad(exports, ["getManagementLockByScope","getManagementLockByScopeOutput"], () => require("./getManagementLockByScope"));

export { GetPrivateLinkAssociationArgs, GetPrivateLinkAssociationResult, GetPrivateLinkAssociationOutputArgs } from "./getPrivateLinkAssociation";
export const getPrivateLinkAssociation: typeof import("./getPrivateLinkAssociation").getPrivateLinkAssociation = null as any;
export const getPrivateLinkAssociationOutput: typeof import("./getPrivateLinkAssociation").getPrivateLinkAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkAssociation","getPrivateLinkAssociationOutput"], () => require("./getPrivateLinkAssociation"));

export { GetResourceManagementPrivateLinkArgs, GetResourceManagementPrivateLinkResult, GetResourceManagementPrivateLinkOutputArgs } from "./getResourceManagementPrivateLink";
export const getResourceManagementPrivateLink: typeof import("./getResourceManagementPrivateLink").getResourceManagementPrivateLink = null as any;
export const getResourceManagementPrivateLinkOutput: typeof import("./getResourceManagementPrivateLink").getResourceManagementPrivateLinkOutput = null as any;
utilities.lazyLoad(exports, ["getResourceManagementPrivateLink","getResourceManagementPrivateLinkOutput"], () => require("./getResourceManagementPrivateLink"));

export { ManagementLockAtResourceGroupLevelArgs } from "./managementLockAtResourceGroupLevel";
export type ManagementLockAtResourceGroupLevel = import("./managementLockAtResourceGroupLevel").ManagementLockAtResourceGroupLevel;
export const ManagementLockAtResourceGroupLevel: typeof import("./managementLockAtResourceGroupLevel").ManagementLockAtResourceGroupLevel = null as any;
utilities.lazyLoad(exports, ["ManagementLockAtResourceGroupLevel"], () => require("./managementLockAtResourceGroupLevel"));

export { ManagementLockAtResourceLevelArgs } from "./managementLockAtResourceLevel";
export type ManagementLockAtResourceLevel = import("./managementLockAtResourceLevel").ManagementLockAtResourceLevel;
export const ManagementLockAtResourceLevel: typeof import("./managementLockAtResourceLevel").ManagementLockAtResourceLevel = null as any;
utilities.lazyLoad(exports, ["ManagementLockAtResourceLevel"], () => require("./managementLockAtResourceLevel"));

export { ManagementLockAtSubscriptionLevelArgs } from "./managementLockAtSubscriptionLevel";
export type ManagementLockAtSubscriptionLevel = import("./managementLockAtSubscriptionLevel").ManagementLockAtSubscriptionLevel;
export const ManagementLockAtSubscriptionLevel: typeof import("./managementLockAtSubscriptionLevel").ManagementLockAtSubscriptionLevel = null as any;
utilities.lazyLoad(exports, ["ManagementLockAtSubscriptionLevel"], () => require("./managementLockAtSubscriptionLevel"));

export { ManagementLockByScopeArgs } from "./managementLockByScope";
export type ManagementLockByScope = import("./managementLockByScope").ManagementLockByScope;
export const ManagementLockByScope: typeof import("./managementLockByScope").ManagementLockByScope = null as any;
utilities.lazyLoad(exports, ["ManagementLockByScope"], () => require("./managementLockByScope"));

export { PrivateLinkAssociationArgs } from "./privateLinkAssociation";
export type PrivateLinkAssociation = import("./privateLinkAssociation").PrivateLinkAssociation;
export const PrivateLinkAssociation: typeof import("./privateLinkAssociation").PrivateLinkAssociation = null as any;
utilities.lazyLoad(exports, ["PrivateLinkAssociation"], () => require("./privateLinkAssociation"));

export { ResourceManagementPrivateLinkArgs } from "./resourceManagementPrivateLink";
export type ResourceManagementPrivateLink = import("./resourceManagementPrivateLink").ResourceManagementPrivateLink;
export const ResourceManagementPrivateLink: typeof import("./resourceManagementPrivateLink").ResourceManagementPrivateLink = null as any;
utilities.lazyLoad(exports, ["ResourceManagementPrivateLink"], () => require("./resourceManagementPrivateLink"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:authorization/v20200501:ManagementLockAtResourceGroupLevel":
                return new ManagementLockAtResourceGroupLevel(name, <any>undefined, { urn })
            case "azure-native:authorization/v20200501:ManagementLockAtResourceLevel":
                return new ManagementLockAtResourceLevel(name, <any>undefined, { urn })
            case "azure-native:authorization/v20200501:ManagementLockAtSubscriptionLevel":
                return new ManagementLockAtSubscriptionLevel(name, <any>undefined, { urn })
            case "azure-native:authorization/v20200501:ManagementLockByScope":
                return new ManagementLockByScope(name, <any>undefined, { urn })
            case "azure-native:authorization/v20200501:PrivateLinkAssociation":
                return new PrivateLinkAssociation(name, <any>undefined, { urn })
            case "azure-native:authorization/v20200501:ResourceManagementPrivateLink":
                return new ResourceManagementPrivateLink(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "authorization/v20200501", _module)