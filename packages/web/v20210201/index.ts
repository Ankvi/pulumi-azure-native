import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetStaticSiteArgs, GetStaticSiteResult, GetStaticSiteOutputArgs } from "./getStaticSite";
export const getStaticSite: typeof import("./getStaticSite").getStaticSite = null as any;
export const getStaticSiteOutput: typeof import("./getStaticSite").getStaticSiteOutput = null as any;
utilities.lazyLoad(exports, ["getStaticSite","getStaticSiteOutput"], () => require("./getStaticSite"));

export { GetWebAppFtpAllowedArgs, GetWebAppFtpAllowedResult, GetWebAppFtpAllowedOutputArgs } from "./getWebAppFtpAllowed";
export const getWebAppFtpAllowed: typeof import("./getWebAppFtpAllowed").getWebAppFtpAllowed = null as any;
export const getWebAppFtpAllowedOutput: typeof import("./getWebAppFtpAllowed").getWebAppFtpAllowedOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppFtpAllowed","getWebAppFtpAllowedOutput"], () => require("./getWebAppFtpAllowed"));

export { GetWebAppScmAllowedArgs, GetWebAppScmAllowedResult, GetWebAppScmAllowedOutputArgs } from "./getWebAppScmAllowed";
export const getWebAppScmAllowed: typeof import("./getWebAppScmAllowed").getWebAppScmAllowed = null as any;
export const getWebAppScmAllowedOutput: typeof import("./getWebAppScmAllowed").getWebAppScmAllowedOutput = null as any;
utilities.lazyLoad(exports, ["getWebAppScmAllowed","getWebAppScmAllowedOutput"], () => require("./getWebAppScmAllowed"));

export { ListSiteIdentifiersAssignedToHostNameArgs, ListSiteIdentifiersAssignedToHostNameResult, ListSiteIdentifiersAssignedToHostNameOutputArgs } from "./listSiteIdentifiersAssignedToHostName";
export const listSiteIdentifiersAssignedToHostName: typeof import("./listSiteIdentifiersAssignedToHostName").listSiteIdentifiersAssignedToHostName = null as any;
export const listSiteIdentifiersAssignedToHostNameOutput: typeof import("./listSiteIdentifiersAssignedToHostName").listSiteIdentifiersAssignedToHostNameOutput = null as any;
utilities.lazyLoad(exports, ["listSiteIdentifiersAssignedToHostName","listSiteIdentifiersAssignedToHostNameOutput"], () => require("./listSiteIdentifiersAssignedToHostName"));

export { ListStaticSiteAppSettingsArgs, ListStaticSiteAppSettingsResult, ListStaticSiteAppSettingsOutputArgs } from "./listStaticSiteAppSettings";
export const listStaticSiteAppSettings: typeof import("./listStaticSiteAppSettings").listStaticSiteAppSettings = null as any;
export const listStaticSiteAppSettingsOutput: typeof import("./listStaticSiteAppSettings").listStaticSiteAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteAppSettings","listStaticSiteAppSettingsOutput"], () => require("./listStaticSiteAppSettings"));

export { ListStaticSiteBuildAppSettingsArgs, ListStaticSiteBuildAppSettingsResult, ListStaticSiteBuildAppSettingsOutputArgs } from "./listStaticSiteBuildAppSettings";
export const listStaticSiteBuildAppSettings: typeof import("./listStaticSiteBuildAppSettings").listStaticSiteBuildAppSettings = null as any;
export const listStaticSiteBuildAppSettingsOutput: typeof import("./listStaticSiteBuildAppSettings").listStaticSiteBuildAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteBuildAppSettings","listStaticSiteBuildAppSettingsOutput"], () => require("./listStaticSiteBuildAppSettings"));

export { ListStaticSiteBuildFunctionAppSettingsArgs, ListStaticSiteBuildFunctionAppSettingsResult, ListStaticSiteBuildFunctionAppSettingsOutputArgs } from "./listStaticSiteBuildFunctionAppSettings";
export const listStaticSiteBuildFunctionAppSettings: typeof import("./listStaticSiteBuildFunctionAppSettings").listStaticSiteBuildFunctionAppSettings = null as any;
export const listStaticSiteBuildFunctionAppSettingsOutput: typeof import("./listStaticSiteBuildFunctionAppSettings").listStaticSiteBuildFunctionAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteBuildFunctionAppSettings","listStaticSiteBuildFunctionAppSettingsOutput"], () => require("./listStaticSiteBuildFunctionAppSettings"));

export { ListStaticSiteConfiguredRolesArgs, ListStaticSiteConfiguredRolesResult, ListStaticSiteConfiguredRolesOutputArgs } from "./listStaticSiteConfiguredRoles";
export const listStaticSiteConfiguredRoles: typeof import("./listStaticSiteConfiguredRoles").listStaticSiteConfiguredRoles = null as any;
export const listStaticSiteConfiguredRolesOutput: typeof import("./listStaticSiteConfiguredRoles").listStaticSiteConfiguredRolesOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteConfiguredRoles","listStaticSiteConfiguredRolesOutput"], () => require("./listStaticSiteConfiguredRoles"));

export { ListStaticSiteFunctionAppSettingsArgs, ListStaticSiteFunctionAppSettingsResult, ListStaticSiteFunctionAppSettingsOutputArgs } from "./listStaticSiteFunctionAppSettings";
export const listStaticSiteFunctionAppSettings: typeof import("./listStaticSiteFunctionAppSettings").listStaticSiteFunctionAppSettings = null as any;
export const listStaticSiteFunctionAppSettingsOutput: typeof import("./listStaticSiteFunctionAppSettings").listStaticSiteFunctionAppSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteFunctionAppSettings","listStaticSiteFunctionAppSettingsOutput"], () => require("./listStaticSiteFunctionAppSettings"));

export { ListStaticSiteSecretsArgs, ListStaticSiteSecretsResult, ListStaticSiteSecretsOutputArgs } from "./listStaticSiteSecrets";
export const listStaticSiteSecrets: typeof import("./listStaticSiteSecrets").listStaticSiteSecrets = null as any;
export const listStaticSiteSecretsOutput: typeof import("./listStaticSiteSecrets").listStaticSiteSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteSecrets","listStaticSiteSecretsOutput"], () => require("./listStaticSiteSecrets"));

export { ListStaticSiteUsersArgs, ListStaticSiteUsersResult, ListStaticSiteUsersOutputArgs } from "./listStaticSiteUsers";
export const listStaticSiteUsers: typeof import("./listStaticSiteUsers").listStaticSiteUsers = null as any;
export const listStaticSiteUsersOutput: typeof import("./listStaticSiteUsers").listStaticSiteUsersOutput = null as any;
utilities.lazyLoad(exports, ["listStaticSiteUsers","listStaticSiteUsersOutput"], () => require("./listStaticSiteUsers"));

export { StaticSiteArgs } from "./staticSite";
export type StaticSite = import("./staticSite").StaticSite;
export const StaticSite: typeof import("./staticSite").StaticSite = null as any;
utilities.lazyLoad(exports, ["StaticSite"], () => require("./staticSite"));

export { WebAppAuthSettingsV2Args } from "./webAppAuthSettingsV2";
export type WebAppAuthSettingsV2 = import("./webAppAuthSettingsV2").WebAppAuthSettingsV2;
export const WebAppAuthSettingsV2: typeof import("./webAppAuthSettingsV2").WebAppAuthSettingsV2 = null as any;
utilities.lazyLoad(exports, ["WebAppAuthSettingsV2"], () => require("./webAppAuthSettingsV2"));

export { WebAppAuthSettingsV2SlotArgs } from "./webAppAuthSettingsV2Slot";
export type WebAppAuthSettingsV2Slot = import("./webAppAuthSettingsV2Slot").WebAppAuthSettingsV2Slot;
export const WebAppAuthSettingsV2Slot: typeof import("./webAppAuthSettingsV2Slot").WebAppAuthSettingsV2Slot = null as any;
utilities.lazyLoad(exports, ["WebAppAuthSettingsV2Slot"], () => require("./webAppAuthSettingsV2Slot"));

export { WebAppFtpAllowedArgs } from "./webAppFtpAllowed";
export type WebAppFtpAllowed = import("./webAppFtpAllowed").WebAppFtpAllowed;
export const WebAppFtpAllowed: typeof import("./webAppFtpAllowed").WebAppFtpAllowed = null as any;
utilities.lazyLoad(exports, ["WebAppFtpAllowed"], () => require("./webAppFtpAllowed"));

export { WebAppScmAllowedArgs } from "./webAppScmAllowed";
export type WebAppScmAllowed = import("./webAppScmAllowed").WebAppScmAllowed;
export const WebAppScmAllowed: typeof import("./webAppScmAllowed").WebAppScmAllowed = null as any;
utilities.lazyLoad(exports, ["WebAppScmAllowed"], () => require("./webAppScmAllowed"));


// Export enums:
export * from "../types/enums/v20210201";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20210201:StaticSite":
                return new StaticSite(name, <any>undefined, { urn })
            case "azure-native:web/v20210201:WebAppAuthSettingsV2":
                return new WebAppAuthSettingsV2(name, <any>undefined, { urn })
            case "azure-native:web/v20210201:WebAppAuthSettingsV2Slot":
                return new WebAppAuthSettingsV2Slot(name, <any>undefined, { urn })
            case "azure-native:web/v20210201:WebAppFtpAllowed":
                return new WebAppFtpAllowed(name, <any>undefined, { urn })
            case "azure-native:web/v20210201:WebAppScmAllowed":
                return new WebAppScmAllowed(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20210201", _module)
