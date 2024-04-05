import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiArgs } from "./api";
export type Api = import("./api").Api;
export const Api: typeof import("./api").Api = null as any;
utilities.lazyLoad(exports, ["Api"], () => require("./api"));

export { ApiDiagnosticLoggerArgs } from "./apiDiagnosticLogger";
export type ApiDiagnosticLogger = import("./apiDiagnosticLogger").ApiDiagnosticLogger;
export const ApiDiagnosticLogger: typeof import("./apiDiagnosticLogger").ApiDiagnosticLogger = null as any;
utilities.lazyLoad(exports, ["ApiDiagnosticLogger"], () => require("./apiDiagnosticLogger"));

export { ApiManagementServiceArgs } from "./apiManagementService";
export type ApiManagementService = import("./apiManagementService").ApiManagementService;
export const ApiManagementService: typeof import("./apiManagementService").ApiManagementService = null as any;
utilities.lazyLoad(exports, ["ApiManagementService"], () => require("./apiManagementService"));

export { DiagnosticLoggerArgs } from "./diagnosticLogger";
export type DiagnosticLogger = import("./diagnosticLogger").DiagnosticLogger;
export const DiagnosticLogger: typeof import("./diagnosticLogger").DiagnosticLogger = null as any;
utilities.lazyLoad(exports, ["DiagnosticLogger"], () => require("./diagnosticLogger"));

export { GetApiArgs, GetApiResult, GetApiOutputArgs } from "./getApi";
export const getApi: typeof import("./getApi").getApi = null as any;
export const getApiOutput: typeof import("./getApi").getApiOutput = null as any;
utilities.lazyLoad(exports, ["getApi","getApiOutput"], () => require("./getApi"));

export { GetApiManagementServiceArgs, GetApiManagementServiceResult, GetApiManagementServiceOutputArgs } from "./getApiManagementService";
export const getApiManagementService: typeof import("./getApiManagementService").getApiManagementService = null as any;
export const getApiManagementServiceOutput: typeof import("./getApiManagementService").getApiManagementServiceOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementService","getApiManagementServiceOutput"], () => require("./getApiManagementService"));

export { GetApiManagementServiceSsoTokenArgs, GetApiManagementServiceSsoTokenResult, GetApiManagementServiceSsoTokenOutputArgs } from "./getApiManagementServiceSsoToken";
export const getApiManagementServiceSsoToken: typeof import("./getApiManagementServiceSsoToken").getApiManagementServiceSsoToken = null as any;
export const getApiManagementServiceSsoTokenOutput: typeof import("./getApiManagementServiceSsoToken").getApiManagementServiceSsoTokenOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementServiceSsoToken","getApiManagementServiceSsoTokenOutput"], () => require("./getApiManagementServiceSsoToken"));

export { GetLoggerArgs, GetLoggerResult, GetLoggerOutputArgs } from "./getLogger";
export const getLogger: typeof import("./getLogger").getLogger = null as any;
export const getLoggerOutput: typeof import("./getLogger").getLoggerOutput = null as any;
utilities.lazyLoad(exports, ["getLogger","getLoggerOutput"], () => require("./getLogger"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { GetUserSharedAccessTokenArgs, GetUserSharedAccessTokenResult, GetUserSharedAccessTokenOutputArgs } from "./getUserSharedAccessToken";
export const getUserSharedAccessToken: typeof import("./getUserSharedAccessToken").getUserSharedAccessToken = null as any;
export const getUserSharedAccessTokenOutput: typeof import("./getUserSharedAccessToken").getUserSharedAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["getUserSharedAccessToken","getUserSharedAccessTokenOutput"], () => require("./getUserSharedAccessToken"));

export { GroupUserArgs } from "./groupUser";
export type GroupUser = import("./groupUser").GroupUser;
export const GroupUser: typeof import("./groupUser").GroupUser = null as any;
utilities.lazyLoad(exports, ["GroupUser"], () => require("./groupUser"));

export { LoggerArgs } from "./logger";
export type Logger = import("./logger").Logger;
export const Logger: typeof import("./logger").Logger = null as any;
utilities.lazyLoad(exports, ["Logger"], () => require("./logger"));

export { ProductApiArgs } from "./productApi";
export type ProductApi = import("./productApi").ProductApi;
export const ProductApi: typeof import("./productApi").ProductApi = null as any;
utilities.lazyLoad(exports, ["ProductApi"], () => require("./productApi"));

export { UserArgs } from "./user";
export type User = import("./user").User;
export const User: typeof import("./user").User = null as any;
utilities.lazyLoad(exports, ["User"], () => require("./user"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apimanagement/v20170301:Api":
                return new Api(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20170301:ApiDiagnosticLogger":
                return new ApiDiagnosticLogger(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20170301:ApiManagementService":
                return new ApiManagementService(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20170301:DiagnosticLogger":
                return new DiagnosticLogger(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20170301:GroupUser":
                return new GroupUser(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20170301:Logger":
                return new Logger(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20170301:ProductApi":
                return new ProductApi(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20170301:User":
                return new User(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement/v20170301", _module)