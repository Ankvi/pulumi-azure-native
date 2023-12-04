import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ArchifeArgs } from "./archife";
export type Archife = import("./archife").Archife;
export const Archife: typeof import("./archife").Archife = null as any;
utilities.lazyLoad(exports, ["Archife"], () => require("./archife"));

export { ArchiveVersionArgs } from "./archiveVersion";
export type ArchiveVersion = import("./archiveVersion").ArchiveVersion;
export const ArchiveVersion: typeof import("./archiveVersion").ArchiveVersion = null as any;
utilities.lazyLoad(exports, ["ArchiveVersion"], () => require("./archiveVersion"));

export { CacheRuleArgs } from "./cacheRule";
export type CacheRule = import("./cacheRule").CacheRule;
export const CacheRule: typeof import("./cacheRule").CacheRule = null as any;
utilities.lazyLoad(exports, ["CacheRule"], () => require("./cacheRule"));

export { ConnectedRegistryArgs } from "./connectedRegistry";
export type ConnectedRegistry = import("./connectedRegistry").ConnectedRegistry;
export const ConnectedRegistry: typeof import("./connectedRegistry").ConnectedRegistry = null as any;
utilities.lazyLoad(exports, ["ConnectedRegistry"], () => require("./connectedRegistry"));

export { CredentialSetArgs } from "./credentialSet";
export type CredentialSet = import("./credentialSet").CredentialSet;
export const CredentialSet: typeof import("./credentialSet").CredentialSet = null as any;
utilities.lazyLoad(exports, ["CredentialSet"], () => require("./credentialSet"));

export { ExportPipelineArgs } from "./exportPipeline";
export type ExportPipeline = import("./exportPipeline").ExportPipeline;
export const ExportPipeline: typeof import("./exportPipeline").ExportPipeline = null as any;
utilities.lazyLoad(exports, ["ExportPipeline"], () => require("./exportPipeline"));

export { GetArchifeArgs, GetArchifeResult, GetArchifeOutputArgs } from "./getArchife";
export const getArchife: typeof import("./getArchife").getArchife = null as any;
export const getArchifeOutput: typeof import("./getArchife").getArchifeOutput = null as any;
utilities.lazyLoad(exports, ["getArchife","getArchifeOutput"], () => require("./getArchife"));

export { GetArchiveVersionArgs, GetArchiveVersionResult, GetArchiveVersionOutputArgs } from "./getArchiveVersion";
export const getArchiveVersion: typeof import("./getArchiveVersion").getArchiveVersion = null as any;
export const getArchiveVersionOutput: typeof import("./getArchiveVersion").getArchiveVersionOutput = null as any;
utilities.lazyLoad(exports, ["getArchiveVersion","getArchiveVersionOutput"], () => require("./getArchiveVersion"));

export { GetCacheRuleArgs, GetCacheRuleResult, GetCacheRuleOutputArgs } from "./getCacheRule";
export const getCacheRule: typeof import("./getCacheRule").getCacheRule = null as any;
export const getCacheRuleOutput: typeof import("./getCacheRule").getCacheRuleOutput = null as any;
utilities.lazyLoad(exports, ["getCacheRule","getCacheRuleOutput"], () => require("./getCacheRule"));

export { GetConnectedRegistryArgs, GetConnectedRegistryResult, GetConnectedRegistryOutputArgs } from "./getConnectedRegistry";
export const getConnectedRegistry: typeof import("./getConnectedRegistry").getConnectedRegistry = null as any;
export const getConnectedRegistryOutput: typeof import("./getConnectedRegistry").getConnectedRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getConnectedRegistry","getConnectedRegistryOutput"], () => require("./getConnectedRegistry"));

export { GetCredentialSetArgs, GetCredentialSetResult, GetCredentialSetOutputArgs } from "./getCredentialSet";
export const getCredentialSet: typeof import("./getCredentialSet").getCredentialSet = null as any;
export const getCredentialSetOutput: typeof import("./getCredentialSet").getCredentialSetOutput = null as any;
utilities.lazyLoad(exports, ["getCredentialSet","getCredentialSetOutput"], () => require("./getCredentialSet"));

export { GetExportPipelineArgs, GetExportPipelineResult, GetExportPipelineOutputArgs } from "./getExportPipeline";
export const getExportPipeline: typeof import("./getExportPipeline").getExportPipeline = null as any;
export const getExportPipelineOutput: typeof import("./getExportPipeline").getExportPipelineOutput = null as any;
utilities.lazyLoad(exports, ["getExportPipeline","getExportPipelineOutput"], () => require("./getExportPipeline"));

export { GetImportPipelineArgs, GetImportPipelineResult, GetImportPipelineOutputArgs } from "./getImportPipeline";
export const getImportPipeline: typeof import("./getImportPipeline").getImportPipeline = null as any;
export const getImportPipelineOutput: typeof import("./getImportPipeline").getImportPipelineOutput = null as any;
utilities.lazyLoad(exports, ["getImportPipeline","getImportPipelineOutput"], () => require("./getImportPipeline"));

export { GetPipelineRunArgs, GetPipelineRunResult, GetPipelineRunOutputArgs } from "./getPipelineRun";
export const getPipelineRun: typeof import("./getPipelineRun").getPipelineRun = null as any;
export const getPipelineRunOutput: typeof import("./getPipelineRun").getPipelineRunOutput = null as any;
utilities.lazyLoad(exports, ["getPipelineRun","getPipelineRunOutput"], () => require("./getPipelineRun"));

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

export { ImportPipelineArgs } from "./importPipeline";
export type ImportPipeline = import("./importPipeline").ImportPipeline;
export const ImportPipeline: typeof import("./importPipeline").ImportPipeline = null as any;
utilities.lazyLoad(exports, ["ImportPipeline"], () => require("./importPipeline"));

export { ListRegistryCredentialsArgs, ListRegistryCredentialsResult, ListRegistryCredentialsOutputArgs } from "./listRegistryCredentials";
export const listRegistryCredentials: typeof import("./listRegistryCredentials").listRegistryCredentials = null as any;
export const listRegistryCredentialsOutput: typeof import("./listRegistryCredentials").listRegistryCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listRegistryCredentials","listRegistryCredentialsOutput"], () => require("./listRegistryCredentials"));

export { ListWebhookEventsArgs, ListWebhookEventsResult, ListWebhookEventsOutputArgs } from "./listWebhookEvents";
export const listWebhookEvents: typeof import("./listWebhookEvents").listWebhookEvents = null as any;
export const listWebhookEventsOutput: typeof import("./listWebhookEvents").listWebhookEventsOutput = null as any;
utilities.lazyLoad(exports, ["listWebhookEvents","listWebhookEventsOutput"], () => require("./listWebhookEvents"));

export { PipelineRunArgs } from "./pipelineRun";
export type PipelineRun = import("./pipelineRun").PipelineRun;
export const PipelineRun: typeof import("./pipelineRun").PipelineRun = null as any;
utilities.lazyLoad(exports, ["PipelineRun"], () => require("./pipelineRun"));

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
            case "azure-native:containerregistry/v20231101preview:Archife":
                return new Archife(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:ArchiveVersion":
                return new ArchiveVersion(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:CacheRule":
                return new CacheRule(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:ConnectedRegistry":
                return new ConnectedRegistry(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:CredentialSet":
                return new CredentialSet(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:ExportPipeline":
                return new ExportPipeline(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:ImportPipeline":
                return new ImportPipeline(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:PipelineRun":
                return new PipelineRun(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:Registry":
                return new Registry(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:Replication":
                return new Replication(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:ScopeMap":
                return new ScopeMap(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:Token":
                return new Token(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20231101preview:Webhook":
                return new Webhook(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerregistry/v20231101preview", _module)