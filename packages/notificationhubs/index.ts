import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetNamespaceArgs, GetNamespaceResult, GetNamespaceOutputArgs } from "./getNamespace";
export const getNamespace: typeof import("./getNamespace").getNamespace = null as any;
export const getNamespaceOutput: typeof import("./getNamespace").getNamespaceOutput = null as any;
utilities.lazyLoad(exports, ["getNamespace","getNamespaceOutput"], () => require("./getNamespace"));

export { GetNamespaceAuthorizationRuleArgs, GetNamespaceAuthorizationRuleResult, GetNamespaceAuthorizationRuleOutputArgs } from "./getNamespaceAuthorizationRule";
export const getNamespaceAuthorizationRule: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRule = null as any;
export const getNamespaceAuthorizationRuleOutput: typeof import("./getNamespaceAuthorizationRule").getNamespaceAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceAuthorizationRule","getNamespaceAuthorizationRuleOutput"], () => require("./getNamespaceAuthorizationRule"));

export { GetNamespacePnsCredentialsArgs, GetNamespacePnsCredentialsResult, GetNamespacePnsCredentialsOutputArgs } from "./getNamespacePnsCredentials";
export const getNamespacePnsCredentials: typeof import("./getNamespacePnsCredentials").getNamespacePnsCredentials = null as any;
export const getNamespacePnsCredentialsOutput: typeof import("./getNamespacePnsCredentials").getNamespacePnsCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["getNamespacePnsCredentials","getNamespacePnsCredentialsOutput"], () => require("./getNamespacePnsCredentials"));

export { GetNotificationHubArgs, GetNotificationHubResult, GetNotificationHubOutputArgs } from "./getNotificationHub";
export const getNotificationHub: typeof import("./getNotificationHub").getNotificationHub = null as any;
export const getNotificationHubOutput: typeof import("./getNotificationHub").getNotificationHubOutput = null as any;
utilities.lazyLoad(exports, ["getNotificationHub","getNotificationHubOutput"], () => require("./getNotificationHub"));

export { GetNotificationHubAuthorizationRuleArgs, GetNotificationHubAuthorizationRuleResult, GetNotificationHubAuthorizationRuleOutputArgs } from "./getNotificationHubAuthorizationRule";
export const getNotificationHubAuthorizationRule: typeof import("./getNotificationHubAuthorizationRule").getNotificationHubAuthorizationRule = null as any;
export const getNotificationHubAuthorizationRuleOutput: typeof import("./getNotificationHubAuthorizationRule").getNotificationHubAuthorizationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNotificationHubAuthorizationRule","getNotificationHubAuthorizationRuleOutput"], () => require("./getNotificationHubAuthorizationRule"));

export { GetNotificationHubPnsCredentialsArgs, GetNotificationHubPnsCredentialsResult, GetNotificationHubPnsCredentialsOutputArgs } from "./getNotificationHubPnsCredentials";
export const getNotificationHubPnsCredentials: typeof import("./getNotificationHubPnsCredentials").getNotificationHubPnsCredentials = null as any;
export const getNotificationHubPnsCredentialsOutput: typeof import("./getNotificationHubPnsCredentials").getNotificationHubPnsCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["getNotificationHubPnsCredentials","getNotificationHubPnsCredentialsOutput"], () => require("./getNotificationHubPnsCredentials"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { ListNamespaceKeysArgs, ListNamespaceKeysResult, ListNamespaceKeysOutputArgs } from "./listNamespaceKeys";
export const listNamespaceKeys: typeof import("./listNamespaceKeys").listNamespaceKeys = null as any;
export const listNamespaceKeysOutput: typeof import("./listNamespaceKeys").listNamespaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listNamespaceKeys","listNamespaceKeysOutput"], () => require("./listNamespaceKeys"));

export { ListNotificationHubKeysArgs, ListNotificationHubKeysResult, ListNotificationHubKeysOutputArgs } from "./listNotificationHubKeys";
export const listNotificationHubKeys: typeof import("./listNotificationHubKeys").listNotificationHubKeys = null as any;
export const listNotificationHubKeysOutput: typeof import("./listNotificationHubKeys").listNotificationHubKeysOutput = null as any;
utilities.lazyLoad(exports, ["listNotificationHubKeys","listNotificationHubKeysOutput"], () => require("./listNotificationHubKeys"));

export { NamespaceArgs } from "./namespace";
export type Namespace = import("./namespace").Namespace;
export const Namespace: typeof import("./namespace").Namespace = null as any;
utilities.lazyLoad(exports, ["Namespace"], () => require("./namespace"));

export { NamespaceAuthorizationRuleArgs } from "./namespaceAuthorizationRule";
export type NamespaceAuthorizationRule = import("./namespaceAuthorizationRule").NamespaceAuthorizationRule;
export const NamespaceAuthorizationRule: typeof import("./namespaceAuthorizationRule").NamespaceAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["NamespaceAuthorizationRule"], () => require("./namespaceAuthorizationRule"));

export { NotificationHubArgs } from "./notificationHub";
export type NotificationHub = import("./notificationHub").NotificationHub;
export const NotificationHub: typeof import("./notificationHub").NotificationHub = null as any;
utilities.lazyLoad(exports, ["NotificationHub"], () => require("./notificationHub"));

export { NotificationHubAuthorizationRuleArgs } from "./notificationHubAuthorizationRule";
export type NotificationHubAuthorizationRule = import("./notificationHubAuthorizationRule").NotificationHubAuthorizationRule;
export const NotificationHubAuthorizationRule: typeof import("./notificationHubAuthorizationRule").NotificationHubAuthorizationRule = null as any;
utilities.lazyLoad(exports, ["NotificationHubAuthorizationRule"], () => require("./notificationHubAuthorizationRule"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:notificationhubs:Namespace":
                return new Namespace(name, <any>undefined, { urn })
            case "azure-native:notificationhubs:NamespaceAuthorizationRule":
                return new NamespaceAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:notificationhubs:NotificationHub":
                return new NotificationHub(name, <any>undefined, { urn })
            case "azure-native:notificationhubs:NotificationHubAuthorizationRule":
                return new NotificationHubAuthorizationRule(name, <any>undefined, { urn })
            case "azure-native:notificationhubs:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "notificationhubs", _module)