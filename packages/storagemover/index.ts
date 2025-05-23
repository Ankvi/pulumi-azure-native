import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AgentArgs } from "./agent";
export type Agent = import("./agent").Agent;
export const Agent: typeof import("./agent").Agent = null as any;
utilities.lazyLoad(exports, ["Agent"], () => require("./agent"));

export { EndpointArgs } from "./endpoint";
export type Endpoint = import("./endpoint").Endpoint;
export const Endpoint: typeof import("./endpoint").Endpoint = null as any;
utilities.lazyLoad(exports, ["Endpoint"], () => require("./endpoint"));

export { GetAgentArgs, GetAgentResult, GetAgentOutputArgs } from "./getAgent";
export const getAgent: typeof import("./getAgent").getAgent = null as any;
export const getAgentOutput: typeof import("./getAgent").getAgentOutput = null as any;
utilities.lazyLoad(exports, ["getAgent","getAgentOutput"], () => require("./getAgent"));

export { GetEndpointArgs, GetEndpointResult, GetEndpointOutputArgs } from "./getEndpoint";
export const getEndpoint: typeof import("./getEndpoint").getEndpoint = null as any;
export const getEndpointOutput: typeof import("./getEndpoint").getEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getEndpoint","getEndpointOutput"], () => require("./getEndpoint"));

export { GetJobDefinitionArgs, GetJobDefinitionResult, GetJobDefinitionOutputArgs } from "./getJobDefinition";
export const getJobDefinition: typeof import("./getJobDefinition").getJobDefinition = null as any;
export const getJobDefinitionOutput: typeof import("./getJobDefinition").getJobDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getJobDefinition","getJobDefinitionOutput"], () => require("./getJobDefinition"));

export { GetProjectArgs, GetProjectResult, GetProjectOutputArgs } from "./getProject";
export const getProject: typeof import("./getProject").getProject = null as any;
export const getProjectOutput: typeof import("./getProject").getProjectOutput = null as any;
utilities.lazyLoad(exports, ["getProject","getProjectOutput"], () => require("./getProject"));

export { GetStorageMoverArgs, GetStorageMoverResult, GetStorageMoverOutputArgs } from "./getStorageMover";
export const getStorageMover: typeof import("./getStorageMover").getStorageMover = null as any;
export const getStorageMoverOutput: typeof import("./getStorageMover").getStorageMoverOutput = null as any;
utilities.lazyLoad(exports, ["getStorageMover","getStorageMoverOutput"], () => require("./getStorageMover"));

export { JobDefinitionArgs } from "./jobDefinition";
export type JobDefinition = import("./jobDefinition").JobDefinition;
export const JobDefinition: typeof import("./jobDefinition").JobDefinition = null as any;
utilities.lazyLoad(exports, ["JobDefinition"], () => require("./jobDefinition"));

export { ProjectArgs } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));

export { StorageMoverArgs } from "./storageMover";
export type StorageMover = import("./storageMover").StorageMover;
export const StorageMover: typeof import("./storageMover").StorageMover = null as any;
utilities.lazyLoad(exports, ["StorageMover"], () => require("./storageMover"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storagemover:Agent":
                return new Agent(name, <any>undefined, { urn })
            case "azure-native:storagemover:Endpoint":
                return new Endpoint(name, <any>undefined, { urn })
            case "azure-native:storagemover:JobDefinition":
                return new JobDefinition(name, <any>undefined, { urn })
            case "azure-native:storagemover:Project":
                return new Project(name, <any>undefined, { urn })
            case "azure-native:storagemover:StorageMover":
                return new StorageMover(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storagemover", _module)