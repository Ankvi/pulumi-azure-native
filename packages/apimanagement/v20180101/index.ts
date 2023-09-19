import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiDiagnosticArgs } from "./apiDiagnostic";
export type ApiDiagnostic = import("./apiDiagnostic").ApiDiagnostic;
export const ApiDiagnostic: typeof import("./apiDiagnostic").ApiDiagnostic = null as any;
utilities.lazyLoad(exports, ["ApiDiagnostic"], () => require("./apiDiagnostic"));

export { ApiDiagnosticLoggerArgs } from "./apiDiagnosticLogger";
export type ApiDiagnosticLogger = import("./apiDiagnosticLogger").ApiDiagnosticLogger;
export const ApiDiagnosticLogger: typeof import("./apiDiagnosticLogger").ApiDiagnosticLogger = null as any;
utilities.lazyLoad(exports, ["ApiDiagnosticLogger"], () => require("./apiDiagnosticLogger"));

export { BackendArgs } from "./backend";
export type Backend = import("./backend").Backend;
export const Backend: typeof import("./backend").Backend = null as any;
utilities.lazyLoad(exports, ["Backend"], () => require("./backend"));

export { DiagnosticArgs } from "./diagnostic";
export type Diagnostic = import("./diagnostic").Diagnostic;
export const Diagnostic: typeof import("./diagnostic").Diagnostic = null as any;
utilities.lazyLoad(exports, ["Diagnostic"], () => require("./diagnostic"));

export { DiagnosticLoggerArgs } from "./diagnosticLogger";
export type DiagnosticLogger = import("./diagnosticLogger").DiagnosticLogger;
export const DiagnosticLogger: typeof import("./diagnosticLogger").DiagnosticLogger = null as any;
utilities.lazyLoad(exports, ["DiagnosticLogger"], () => require("./diagnosticLogger"));

export { GetApiDiagnosticArgs, GetApiDiagnosticResult, GetApiDiagnosticOutputArgs } from "./getApiDiagnostic";
export const getApiDiagnostic: typeof import("./getApiDiagnostic").getApiDiagnostic = null as any;
export const getApiDiagnosticOutput: typeof import("./getApiDiagnostic").getApiDiagnosticOutput = null as any;
utilities.lazyLoad(exports, ["getApiDiagnostic","getApiDiagnosticOutput"], () => require("./getApiDiagnostic"));

export { GetBackendArgs, GetBackendResult, GetBackendOutputArgs } from "./getBackend";
export const getBackend: typeof import("./getBackend").getBackend = null as any;
export const getBackendOutput: typeof import("./getBackend").getBackendOutput = null as any;
utilities.lazyLoad(exports, ["getBackend","getBackendOutput"], () => require("./getBackend"));

export { GetDiagnosticArgs, GetDiagnosticResult, GetDiagnosticOutputArgs } from "./getDiagnostic";
export const getDiagnostic: typeof import("./getDiagnostic").getDiagnostic = null as any;
export const getDiagnosticOutput: typeof import("./getDiagnostic").getDiagnosticOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnostic","getDiagnosticOutput"], () => require("./getDiagnostic"));

export { GetLoggerArgs, GetLoggerResult, GetLoggerOutputArgs } from "./getLogger";
export const getLogger: typeof import("./getLogger").getLogger = null as any;
export const getLoggerOutput: typeof import("./getLogger").getLoggerOutput = null as any;
utilities.lazyLoad(exports, ["getLogger","getLoggerOutput"], () => require("./getLogger"));

export { GetSubscriptionArgs, GetSubscriptionResult, GetSubscriptionOutputArgs } from "./getSubscription";
export const getSubscription: typeof import("./getSubscription").getSubscription = null as any;
export const getSubscriptionOutput: typeof import("./getSubscription").getSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getSubscription","getSubscriptionOutput"], () => require("./getSubscription"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { GroupUserArgs } from "./groupUser";
export type GroupUser = import("./groupUser").GroupUser;
export const GroupUser: typeof import("./groupUser").GroupUser = null as any;
utilities.lazyLoad(exports, ["GroupUser"], () => require("./groupUser"));

export { LoggerArgs } from "./logger";
export type Logger = import("./logger").Logger;
export const Logger: typeof import("./logger").Logger = null as any;
utilities.lazyLoad(exports, ["Logger"], () => require("./logger"));

export { NotificationRecipientUserArgs } from "./notificationRecipientUser";
export type NotificationRecipientUser = import("./notificationRecipientUser").NotificationRecipientUser;
export const NotificationRecipientUser: typeof import("./notificationRecipientUser").NotificationRecipientUser = null as any;
utilities.lazyLoad(exports, ["NotificationRecipientUser"], () => require("./notificationRecipientUser"));

export { SubscriptionArgs } from "./subscription";
export type Subscription = import("./subscription").Subscription;
export const Subscription: typeof import("./subscription").Subscription = null as any;
utilities.lazyLoad(exports, ["Subscription"], () => require("./subscription"));

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
            case "azure-native:apimanagement/v20180101:ApiDiagnostic":
                return new ApiDiagnostic(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:ApiDiagnosticLogger":
                return new ApiDiagnosticLogger(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:Backend":
                return new Backend(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:Diagnostic":
                return new Diagnostic(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:DiagnosticLogger":
                return new DiagnosticLogger(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:GroupUser":
                return new GroupUser(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:Logger":
                return new Logger(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:NotificationRecipientUser":
                return new NotificationRecipientUser(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:Subscription":
                return new Subscription(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180101:User":
                return new User(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement/v20180101", _module)
