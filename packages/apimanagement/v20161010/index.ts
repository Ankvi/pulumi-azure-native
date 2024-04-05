import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiManagementServiceArgs } from "./apiManagementService";
export type ApiManagementService = import("./apiManagementService").ApiManagementService;
export const ApiManagementService: typeof import("./apiManagementService").ApiManagementService = null as any;
utilities.lazyLoad(exports, ["ApiManagementService"], () => require("./apiManagementService"));

export { GetApiManagementServiceArgs, GetApiManagementServiceResult, GetApiManagementServiceOutputArgs } from "./getApiManagementService";
export const getApiManagementService: typeof import("./getApiManagementService").getApiManagementService = null as any;
export const getApiManagementServiceOutput: typeof import("./getApiManagementService").getApiManagementServiceOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementService","getApiManagementServiceOutput"], () => require("./getApiManagementService"));

export { GetApiManagementServiceSsoTokenArgs, GetApiManagementServiceSsoTokenResult, GetApiManagementServiceSsoTokenOutputArgs } from "./getApiManagementServiceSsoToken";
export const getApiManagementServiceSsoToken: typeof import("./getApiManagementServiceSsoToken").getApiManagementServiceSsoToken = null as any;
export const getApiManagementServiceSsoTokenOutput: typeof import("./getApiManagementServiceSsoToken").getApiManagementServiceSsoTokenOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementServiceSsoToken","getApiManagementServiceSsoTokenOutput"], () => require("./getApiManagementServiceSsoToken"));

export { GetUserSharedAccessTokenArgs, GetUserSharedAccessTokenResult, GetUserSharedAccessTokenOutputArgs } from "./getUserSharedAccessToken";
export const getUserSharedAccessToken: typeof import("./getUserSharedAccessToken").getUserSharedAccessToken = null as any;
export const getUserSharedAccessTokenOutput: typeof import("./getUserSharedAccessToken").getUserSharedAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["getUserSharedAccessToken","getUserSharedAccessTokenOutput"], () => require("./getUserSharedAccessToken"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apimanagement/v20161010:ApiManagementService":
                return new ApiManagementService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement/v20161010", _module)