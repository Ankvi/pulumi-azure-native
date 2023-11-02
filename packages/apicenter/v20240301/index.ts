import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiArgs } from "./api";
export type Api = import("./api").Api;
export const Api: typeof import("./api").Api = null as any;
utilities.lazyLoad(exports, ["Api"], () => require("./api"));

export { ApiDefinitionArgs } from "./apiDefinition";
export type ApiDefinition = import("./apiDefinition").ApiDefinition;
export const ApiDefinition: typeof import("./apiDefinition").ApiDefinition = null as any;
utilities.lazyLoad(exports, ["ApiDefinition"], () => require("./apiDefinition"));

export { ApiVersionArgs } from "./apiVersion";
export type ApiVersion = import("./apiVersion").ApiVersion;
export const ApiVersion: typeof import("./apiVersion").ApiVersion = null as any;
utilities.lazyLoad(exports, ["ApiVersion"], () => require("./apiVersion"));

export { DeploymentArgs } from "./deployment";
export type Deployment = import("./deployment").Deployment;
export const Deployment: typeof import("./deployment").Deployment = null as any;
utilities.lazyLoad(exports, ["Deployment"], () => require("./deployment"));

export { EnvironmentArgs } from "./environment";
export type Environment = import("./environment").Environment;
export const Environment: typeof import("./environment").Environment = null as any;
utilities.lazyLoad(exports, ["Environment"], () => require("./environment"));

export { GetApiArgs, GetApiResult, GetApiOutputArgs } from "./getApi";
export const getApi: typeof import("./getApi").getApi = null as any;
export const getApiOutput: typeof import("./getApi").getApiOutput = null as any;
utilities.lazyLoad(exports, ["getApi","getApiOutput"], () => require("./getApi"));

export { GetApiDefinitionArgs, GetApiDefinitionResult, GetApiDefinitionOutputArgs } from "./getApiDefinition";
export const getApiDefinition: typeof import("./getApiDefinition").getApiDefinition = null as any;
export const getApiDefinitionOutput: typeof import("./getApiDefinition").getApiDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getApiDefinition","getApiDefinitionOutput"], () => require("./getApiDefinition"));

export { GetApiVersionArgs, GetApiVersionResult, GetApiVersionOutputArgs } from "./getApiVersion";
export const getApiVersion: typeof import("./getApiVersion").getApiVersion = null as any;
export const getApiVersionOutput: typeof import("./getApiVersion").getApiVersionOutput = null as any;
utilities.lazyLoad(exports, ["getApiVersion","getApiVersionOutput"], () => require("./getApiVersion"));

export { GetDeploymentArgs, GetDeploymentResult, GetDeploymentOutputArgs } from "./getDeployment";
export const getDeployment: typeof import("./getDeployment").getDeployment = null as any;
export const getDeploymentOutput: typeof import("./getDeployment").getDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getDeployment","getDeploymentOutput"], () => require("./getDeployment"));

export { GetEnvironmentArgs, GetEnvironmentResult, GetEnvironmentOutputArgs } from "./getEnvironment";
export const getEnvironment: typeof import("./getEnvironment").getEnvironment = null as any;
export const getEnvironmentOutput: typeof import("./getEnvironment").getEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironment","getEnvironmentOutput"], () => require("./getEnvironment"));

export { GetMetadataSchemaArgs, GetMetadataSchemaResult, GetMetadataSchemaOutputArgs } from "./getMetadataSchema";
export const getMetadataSchema: typeof import("./getMetadataSchema").getMetadataSchema = null as any;
export const getMetadataSchemaOutput: typeof import("./getMetadataSchema").getMetadataSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getMetadataSchema","getMetadataSchemaOutput"], () => require("./getMetadataSchema"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { MetadataSchemaArgs } from "./metadataSchema";
export type MetadataSchema = import("./metadataSchema").MetadataSchema;
export const MetadataSchema: typeof import("./metadataSchema").MetadataSchema = null as any;
utilities.lazyLoad(exports, ["MetadataSchema"], () => require("./metadataSchema"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apicenter/v20240301:Api":
                return new Api(name, <any>undefined, { urn })
            case "azure-native:apicenter/v20240301:ApiDefinition":
                return new ApiDefinition(name, <any>undefined, { urn })
            case "azure-native:apicenter/v20240301:ApiVersion":
                return new ApiVersion(name, <any>undefined, { urn })
            case "azure-native:apicenter/v20240301:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "azure-native:apicenter/v20240301:Environment":
                return new Environment(name, <any>undefined, { urn })
            case "azure-native:apicenter/v20240301:MetadataSchema":
                return new MetadataSchema(name, <any>undefined, { urn })
            case "azure-native:apicenter/v20240301:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:apicenter/v20240301:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apicenter/v20240301", _module)
