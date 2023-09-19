import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CacheRuleArgs } from "./cacheRule";
export type CacheRule = import("./cacheRule").CacheRule;
export const CacheRule: typeof import("./cacheRule").CacheRule = null as any;
utilities.lazyLoad(exports, ["CacheRule"], () => require("./cacheRule"));

export { CredentialSetArgs } from "./credentialSet";
export type CredentialSet = import("./credentialSet").CredentialSet;
export const CredentialSet: typeof import("./credentialSet").CredentialSet = null as any;
utilities.lazyLoad(exports, ["CredentialSet"], () => require("./credentialSet"));

export { GetCacheRuleArgs, GetCacheRuleResult, GetCacheRuleOutputArgs } from "./getCacheRule";
export const getCacheRule: typeof import("./getCacheRule").getCacheRule = null as any;
export const getCacheRuleOutput: typeof import("./getCacheRule").getCacheRuleOutput = null as any;
utilities.lazyLoad(exports, ["getCacheRule","getCacheRuleOutput"], () => require("./getCacheRule"));

export { GetCredentialSetArgs, GetCredentialSetResult, GetCredentialSetOutputArgs } from "./getCredentialSet";
export const getCredentialSet: typeof import("./getCredentialSet").getCredentialSet = null as any;
export const getCredentialSetOutput: typeof import("./getCredentialSet").getCredentialSetOutput = null as any;
utilities.lazyLoad(exports, ["getCredentialSet","getCredentialSetOutput"], () => require("./getCredentialSet"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetRegistryArgs, GetRegistryResult, GetRegistryOutputArgs } from "./getRegistry";
export const getRegistry: typeof import("./getRegistry").getRegistry = null as any;
export const getRegistryOutput: typeof import("./getRegistry").getRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getRegistry","getRegistryOutput"], () => require("./getRegistry"));

export { GetReplicationArgs, GetReplicationResult, GetReplicationOutputArgs } from "./getReplication";
export const getReplication: typeof import("./getReplication").getReplication = null as any;
export const getReplicationOutput: typeof import("./getReplication").getReplicationOutput = null as any;
utilities.lazyLoad(exports, ["getReplication","getReplicationOutput"], () => require("./getReplication"));

export { GetScopeMapArgs, GetScopeMapResult, GetScopeMapOutputArgs } from "./getScopeMap";
export const getScopeMap: typeof import("./getScopeMap").getScopeMap = null as any;
export const getScopeMapOutput: typeof import("./getScopeMap").getScopeMapOutput = null as any;
utilities.lazyLoad(exports, ["getScopeMap","getScopeMapOutput"], () => require("./getScopeMap"));

export { GetTokenArgs, GetTokenResult, GetTokenOutputArgs } from "./getToken";
export const getToken: typeof import("./getToken").getToken = null as any;
export const getTokenOutput: typeof import("./getToken").getTokenOutput = null as any;
utilities.lazyLoad(exports, ["getToken","getTokenOutput"], () => require("./getToken"));

export { GetWebhookArgs, GetWebhookResult, GetWebhookOutputArgs } from "./getWebhook";
export const getWebhook: typeof import("./getWebhook").getWebhook = null as any;
export const getWebhookOutput: typeof import("./getWebhook").getWebhookOutput = null as any;
utilities.lazyLoad(exports, ["getWebhook","getWebhookOutput"], () => require("./getWebhook"));

export { GetWebhookCallbackConfigArgs, GetWebhookCallbackConfigResult, GetWebhookCallbackConfigOutputArgs } from "./getWebhookCallbackConfig";
export const getWebhookCallbackConfig: typeof import("./getWebhookCallbackConfig").getWebhookCallbackConfig = null as any;
export const getWebhookCallbackConfigOutput: typeof import("./getWebhookCallbackConfig").getWebhookCallbackConfigOutput = null as any;
utilities.lazyLoad(exports, ["getWebhookCallbackConfig","getWebhookCallbackConfigOutput"], () => require("./getWebhookCallbackConfig"));

export { ListRegistryCredentialsArgs, ListRegistryCredentialsResult, ListRegistryCredentialsOutputArgs } from "./listRegistryCredentials";
export const listRegistryCredentials: typeof import("./listRegistryCredentials").listRegistryCredentials = null as any;
export const listRegistryCredentialsOutput: typeof import("./listRegistryCredentials").listRegistryCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listRegistryCredentials","listRegistryCredentialsOutput"], () => require("./listRegistryCredentials"));

export { ListWebhookEventsArgs, ListWebhookEventsResult, ListWebhookEventsOutputArgs } from "./listWebhookEvents";
export const listWebhookEvents: typeof import("./listWebhookEvents").listWebhookEvents = null as any;
export const listWebhookEventsOutput: typeof import("./listWebhookEvents").listWebhookEventsOutput = null as any;
utilities.lazyLoad(exports, ["listWebhookEvents","listWebhookEventsOutput"], () => require("./listWebhookEvents"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { RegistryArgs } from "./registry";
export type Registry = import("./registry").Registry;
export const Registry: typeof import("./registry").Registry = null as any;
utilities.lazyLoad(exports, ["Registry"], () => require("./registry"));

export { ReplicationArgs } from "./replication";
export type Replication = import("./replication").Replication;
export const Replication: typeof import("./replication").Replication = null as any;
utilities.lazyLoad(exports, ["Replication"], () => require("./replication"));

export { ScopeMapArgs } from "./scopeMap";
export type ScopeMap = import("./scopeMap").ScopeMap;
export const ScopeMap: typeof import("./scopeMap").ScopeMap = null as any;
utilities.lazyLoad(exports, ["ScopeMap"], () => require("./scopeMap"));

export { TokenArgs } from "./token";
export type Token = import("./token").Token;
export const Token: typeof import("./token").Token = null as any;
utilities.lazyLoad(exports, ["Token"], () => require("./token"));

export { WebhookArgs } from "./webhook";
export type Webhook = import("./webhook").Webhook;
export const Webhook: typeof import("./webhook").Webhook = null as any;
utilities.lazyLoad(exports, ["Webhook"], () => require("./webhook"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerregistry/v20230701:CacheRule":
                return new CacheRule(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20230701:CredentialSet":
                return new CredentialSet(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20230701:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20230701:Registry":
                return new Registry(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20230701:Replication":
                return new Replication(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20230701:ScopeMap":
                return new ScopeMap(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20230701:Token":
                return new Token(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20230701:Webhook":
                return new Webhook(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerregistry/v20230701", _module)
