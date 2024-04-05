import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
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


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20210101:WebAppFtpAllowed":
                return new WebAppFtpAllowed(name, <any>undefined, { urn })
            case "azure-native:web/v20210101:WebAppScmAllowed":
                return new WebAppScmAllowed(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20210101", _module)