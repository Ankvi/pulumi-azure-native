import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AppServiceEnvironmentArgs } from "./appServiceEnvironment";
export type AppServiceEnvironment = import("./appServiceEnvironment").AppServiceEnvironment;
export const AppServiceEnvironment: typeof import("./appServiceEnvironment").AppServiceEnvironment = null as any;
utilities.lazyLoad(exports, ["AppServiceEnvironment"], () => require("./appServiceEnvironment"));

export { GetAppServiceEnvironmentArgs, GetAppServiceEnvironmentResult, GetAppServiceEnvironmentOutputArgs } from "./getAppServiceEnvironment";
export const getAppServiceEnvironment: typeof import("./getAppServiceEnvironment").getAppServiceEnvironment = null as any;
export const getAppServiceEnvironmentOutput: typeof import("./getAppServiceEnvironment").getAppServiceEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getAppServiceEnvironment","getAppServiceEnvironmentOutput"], () => require("./getAppServiceEnvironment"));

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

export { WebAppFtpAllowedArgs } from "./webAppFtpAllowed";
export type WebAppFtpAllowed = import("./webAppFtpAllowed").WebAppFtpAllowed;
export const WebAppFtpAllowed: typeof import("./webAppFtpAllowed").WebAppFtpAllowed = null as any;
utilities.lazyLoad(exports, ["WebAppFtpAllowed"], () => require("./webAppFtpAllowed"));

export { WebAppScmAllowedArgs } from "./webAppScmAllowed";
export type WebAppScmAllowed = import("./webAppScmAllowed").WebAppScmAllowed;
export const WebAppScmAllowed: typeof import("./webAppScmAllowed").WebAppScmAllowed = null as any;
utilities.lazyLoad(exports, ["WebAppScmAllowed"], () => require("./webAppScmAllowed"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20190801:AppServiceEnvironment":
                return new AppServiceEnvironment(name, <any>undefined, { urn })
            case "azure-native:web/v20190801:WebAppFtpAllowed":
                return new WebAppFtpAllowed(name, <any>undefined, { urn })
            case "azure-native:web/v20190801:WebAppScmAllowed":
                return new WebAppScmAllowed(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20190801", _module)
