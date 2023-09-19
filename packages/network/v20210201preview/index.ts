import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AdminRuleArgs } from "./adminRule";
export type AdminRule = import("./adminRule").AdminRule;
export const AdminRule: typeof import("./adminRule").AdminRule = null as any;
utilities.lazyLoad(exports, ["AdminRule"], () => require("./adminRule"));

export { AdminRuleCollectionArgs } from "./adminRuleCollection";
export type AdminRuleCollection = import("./adminRuleCollection").AdminRuleCollection;
export const AdminRuleCollection: typeof import("./adminRuleCollection").AdminRuleCollection = null as any;
utilities.lazyLoad(exports, ["AdminRuleCollection"], () => require("./adminRuleCollection"));

export { ConnectivityConfigurationArgs } from "./connectivityConfiguration";
export type ConnectivityConfiguration = import("./connectivityConfiguration").ConnectivityConfiguration;
export const ConnectivityConfiguration: typeof import("./connectivityConfiguration").ConnectivityConfiguration = null as any;
utilities.lazyLoad(exports, ["ConnectivityConfiguration"], () => require("./connectivityConfiguration"));

export { GetAdminRuleArgs, GetAdminRuleResult, GetAdminRuleOutputArgs } from "./getAdminRule";
export const getAdminRule: typeof import("./getAdminRule").getAdminRule = null as any;
export const getAdminRuleOutput: typeof import("./getAdminRule").getAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["getAdminRule","getAdminRuleOutput"], () => require("./getAdminRule"));

export { GetAdminRuleCollectionArgs, GetAdminRuleCollectionResult, GetAdminRuleCollectionOutputArgs } from "./getAdminRuleCollection";
export const getAdminRuleCollection: typeof import("./getAdminRuleCollection").getAdminRuleCollection = null as any;
export const getAdminRuleCollectionOutput: typeof import("./getAdminRuleCollection").getAdminRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getAdminRuleCollection","getAdminRuleCollectionOutput"], () => require("./getAdminRuleCollection"));

export { GetConnectivityConfigurationArgs, GetConnectivityConfigurationResult, GetConnectivityConfigurationOutputArgs } from "./getConnectivityConfiguration";
export const getConnectivityConfiguration: typeof import("./getConnectivityConfiguration").getConnectivityConfiguration = null as any;
export const getConnectivityConfigurationOutput: typeof import("./getConnectivityConfiguration").getConnectivityConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getConnectivityConfiguration","getConnectivityConfigurationOutput"], () => require("./getConnectivityConfiguration"));

export { GetNetworkGroupArgs, GetNetworkGroupResult, GetNetworkGroupOutputArgs } from "./getNetworkGroup";
export const getNetworkGroup: typeof import("./getNetworkGroup").getNetworkGroup = null as any;
export const getNetworkGroupOutput: typeof import("./getNetworkGroup").getNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkGroup","getNetworkGroupOutput"], () => require("./getNetworkGroup"));

export { GetNetworkManagerArgs, GetNetworkManagerResult, GetNetworkManagerOutputArgs } from "./getNetworkManager";
export const getNetworkManager: typeof import("./getNetworkManager").getNetworkManager = null as any;
export const getNetworkManagerOutput: typeof import("./getNetworkManager").getNetworkManagerOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkManager","getNetworkManagerOutput"], () => require("./getNetworkManager"));

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

export { GetUserRuleCollectionArgs, GetUserRuleCollectionResult, GetUserRuleCollectionOutputArgs } from "./getUserRuleCollection";
export const getUserRuleCollection: typeof import("./getUserRuleCollection").getUserRuleCollection = null as any;
export const getUserRuleCollectionOutput: typeof import("./getUserRuleCollection").getUserRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getUserRuleCollection","getUserRuleCollectionOutput"], () => require("./getUserRuleCollection"));

export { ListActiveConnectivityConfigurationArgs, ListActiveConnectivityConfigurationResult, ListActiveConnectivityConfigurationOutputArgs } from "./listActiveConnectivityConfiguration";
export const listActiveConnectivityConfiguration: typeof import("./listActiveConnectivityConfiguration").listActiveConnectivityConfiguration = null as any;
export const listActiveConnectivityConfigurationOutput: typeof import("./listActiveConnectivityConfiguration").listActiveConnectivityConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["listActiveConnectivityConfiguration","listActiveConnectivityConfigurationOutput"], () => require("./listActiveConnectivityConfiguration"));

export { ListActiveSecurityAdminRuleArgs, ListActiveSecurityAdminRuleResult, ListActiveSecurityAdminRuleOutputArgs } from "./listActiveSecurityAdminRule";
export const listActiveSecurityAdminRule: typeof import("./listActiveSecurityAdminRule").listActiveSecurityAdminRule = null as any;
export const listActiveSecurityAdminRuleOutput: typeof import("./listActiveSecurityAdminRule").listActiveSecurityAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["listActiveSecurityAdminRule","listActiveSecurityAdminRuleOutput"], () => require("./listActiveSecurityAdminRule"));

export { ListActiveSecurityUserRuleArgs, ListActiveSecurityUserRuleResult, ListActiveSecurityUserRuleOutputArgs } from "./listActiveSecurityUserRule";
export const listActiveSecurityUserRule: typeof import("./listActiveSecurityUserRule").listActiveSecurityUserRule = null as any;
export const listActiveSecurityUserRuleOutput: typeof import("./listActiveSecurityUserRule").listActiveSecurityUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["listActiveSecurityUserRule","listActiveSecurityUserRuleOutput"], () => require("./listActiveSecurityUserRule"));

export { ListEffectiveConnectivityConfigurationArgs, ListEffectiveConnectivityConfigurationResult, ListEffectiveConnectivityConfigurationOutputArgs } from "./listEffectiveConnectivityConfiguration";
export const listEffectiveConnectivityConfiguration: typeof import("./listEffectiveConnectivityConfiguration").listEffectiveConnectivityConfiguration = null as any;
export const listEffectiveConnectivityConfigurationOutput: typeof import("./listEffectiveConnectivityConfiguration").listEffectiveConnectivityConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["listEffectiveConnectivityConfiguration","listEffectiveConnectivityConfigurationOutput"], () => require("./listEffectiveConnectivityConfiguration"));

export { ListEffectiveVirtualNetworkByNetworkGroupArgs, ListEffectiveVirtualNetworkByNetworkGroupResult, ListEffectiveVirtualNetworkByNetworkGroupOutputArgs } from "./listEffectiveVirtualNetworkByNetworkGroup";
export const listEffectiveVirtualNetworkByNetworkGroup: typeof import("./listEffectiveVirtualNetworkByNetworkGroup").listEffectiveVirtualNetworkByNetworkGroup = null as any;
export const listEffectiveVirtualNetworkByNetworkGroupOutput: typeof import("./listEffectiveVirtualNetworkByNetworkGroup").listEffectiveVirtualNetworkByNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["listEffectiveVirtualNetworkByNetworkGroup","listEffectiveVirtualNetworkByNetworkGroupOutput"], () => require("./listEffectiveVirtualNetworkByNetworkGroup"));

export { ListEffectiveVirtualNetworkByNetworkManagerArgs, ListEffectiveVirtualNetworkByNetworkManagerResult, ListEffectiveVirtualNetworkByNetworkManagerOutputArgs } from "./listEffectiveVirtualNetworkByNetworkManager";
export const listEffectiveVirtualNetworkByNetworkManager: typeof import("./listEffectiveVirtualNetworkByNetworkManager").listEffectiveVirtualNetworkByNetworkManager = null as any;
export const listEffectiveVirtualNetworkByNetworkManagerOutput: typeof import("./listEffectiveVirtualNetworkByNetworkManager").listEffectiveVirtualNetworkByNetworkManagerOutput = null as any;
utilities.lazyLoad(exports, ["listEffectiveVirtualNetworkByNetworkManager","listEffectiveVirtualNetworkByNetworkManagerOutput"], () => require("./listEffectiveVirtualNetworkByNetworkManager"));

export { ListNetworkManagerDeploymentStatusArgs, ListNetworkManagerDeploymentStatusResult, ListNetworkManagerDeploymentStatusOutputArgs } from "./listNetworkManagerDeploymentStatus";
export const listNetworkManagerDeploymentStatus: typeof import("./listNetworkManagerDeploymentStatus").listNetworkManagerDeploymentStatus = null as any;
export const listNetworkManagerDeploymentStatusOutput: typeof import("./listNetworkManagerDeploymentStatus").listNetworkManagerDeploymentStatusOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerDeploymentStatus","listNetworkManagerDeploymentStatusOutput"], () => require("./listNetworkManagerDeploymentStatus"));

export { ListNetworkManagerEffectiveSecurityAdminRuleArgs, ListNetworkManagerEffectiveSecurityAdminRuleResult, ListNetworkManagerEffectiveSecurityAdminRuleOutputArgs } from "./listNetworkManagerEffectiveSecurityAdminRule";
export const listNetworkManagerEffectiveSecurityAdminRule: typeof import("./listNetworkManagerEffectiveSecurityAdminRule").listNetworkManagerEffectiveSecurityAdminRule = null as any;
export const listNetworkManagerEffectiveSecurityAdminRuleOutput: typeof import("./listNetworkManagerEffectiveSecurityAdminRule").listNetworkManagerEffectiveSecurityAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerEffectiveSecurityAdminRule","listNetworkManagerEffectiveSecurityAdminRuleOutput"], () => require("./listNetworkManagerEffectiveSecurityAdminRule"));

export { NetworkGroupArgs } from "./networkGroup";
export type NetworkGroup = import("./networkGroup").NetworkGroup;
export const NetworkGroup: typeof import("./networkGroup").NetworkGroup = null as any;
utilities.lazyLoad(exports, ["NetworkGroup"], () => require("./networkGroup"));

export { NetworkManagerArgs } from "./networkManager";
export type NetworkManager = import("./networkManager").NetworkManager;
export const NetworkManager: typeof import("./networkManager").NetworkManager = null as any;
utilities.lazyLoad(exports, ["NetworkManager"], () => require("./networkManager"));

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

export { UserRuleCollectionArgs } from "./userRuleCollection";
export type UserRuleCollection = import("./userRuleCollection").UserRuleCollection;
export const UserRuleCollection: typeof import("./userRuleCollection").UserRuleCollection = null as any;
utilities.lazyLoad(exports, ["UserRuleCollection"], () => require("./userRuleCollection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20210201preview:AdminRule":
                return new AdminRule(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:AdminRuleCollection":
                return new AdminRuleCollection(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:ConnectivityConfiguration":
                return new ConnectivityConfiguration(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:NetworkGroup":
                return new NetworkGroup(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:NetworkManager":
                return new NetworkManager(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:NetworkSecurityPerimeter":
                return new NetworkSecurityPerimeter(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:NspAccessRule":
                return new NspAccessRule(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:NspAssociation":
                return new NspAssociation(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:NspLink":
                return new NspLink(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:NspProfile":
                return new NspProfile(name, <any>undefined, { urn })
            case "azure-native:network/v20210201preview:UserRuleCollection":
                return new UserRuleCollection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20210201preview", _module)
