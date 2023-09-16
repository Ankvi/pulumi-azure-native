import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BatchDeploymentArgs } from "./batchDeployment";
export type BatchDeployment = import("./batchDeployment").BatchDeployment;
export const BatchDeployment: typeof import("./batchDeployment").BatchDeployment = null as any;
utilities.lazyLoad(exports, ["BatchDeployment"], () => require("./batchDeployment"));

export { BatchEndpointArgs } from "./batchEndpoint";
export type BatchEndpoint = import("./batchEndpoint").BatchEndpoint;
export const BatchEndpoint: typeof import("./batchEndpoint").BatchEndpoint = null as any;
utilities.lazyLoad(exports, ["BatchEndpoint"], () => require("./batchEndpoint"));

export { CodeContainerArgs } from "./codeContainer";
export type CodeContainer = import("./codeContainer").CodeContainer;
export const CodeContainer: typeof import("./codeContainer").CodeContainer = null as any;
utilities.lazyLoad(exports, ["CodeContainer"], () => require("./codeContainer"));

export { CodeVersionArgs } from "./codeVersion";
export type CodeVersion = import("./codeVersion").CodeVersion;
export const CodeVersion: typeof import("./codeVersion").CodeVersion = null as any;
utilities.lazyLoad(exports, ["CodeVersion"], () => require("./codeVersion"));

export { DataContainerArgs } from "./dataContainer";
export type DataContainer = import("./dataContainer").DataContainer;
export const DataContainer: typeof import("./dataContainer").DataContainer = null as any;
utilities.lazyLoad(exports, ["DataContainer"], () => require("./dataContainer"));

export { DataVersionArgs } from "./dataVersion";
export type DataVersion = import("./dataVersion").DataVersion;
export const DataVersion: typeof import("./dataVersion").DataVersion = null as any;
utilities.lazyLoad(exports, ["DataVersion"], () => require("./dataVersion"));

export { DatastoreArgs } from "./datastore";
export type Datastore = import("./datastore").Datastore;
export const Datastore: typeof import("./datastore").Datastore = null as any;
utilities.lazyLoad(exports, ["Datastore"], () => require("./datastore"));

export { EnvironmentContainerArgs } from "./environmentContainer";
export type EnvironmentContainer = import("./environmentContainer").EnvironmentContainer;
export const EnvironmentContainer: typeof import("./environmentContainer").EnvironmentContainer = null as any;
utilities.lazyLoad(exports, ["EnvironmentContainer"], () => require("./environmentContainer"));

export { EnvironmentSpecificationVersionArgs } from "./environmentSpecificationVersion";
export type EnvironmentSpecificationVersion = import("./environmentSpecificationVersion").EnvironmentSpecificationVersion;
export const EnvironmentSpecificationVersion: typeof import("./environmentSpecificationVersion").EnvironmentSpecificationVersion = null as any;
utilities.lazyLoad(exports, ["EnvironmentSpecificationVersion"], () => require("./environmentSpecificationVersion"));

export { GetBatchDeploymentArgs, GetBatchDeploymentResult, GetBatchDeploymentOutputArgs } from "./getBatchDeployment";
export const getBatchDeployment: typeof import("./getBatchDeployment").getBatchDeployment = null as any;
export const getBatchDeploymentOutput: typeof import("./getBatchDeployment").getBatchDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getBatchDeployment","getBatchDeploymentOutput"], () => require("./getBatchDeployment"));

export { GetBatchEndpointArgs, GetBatchEndpointResult, GetBatchEndpointOutputArgs } from "./getBatchEndpoint";
export const getBatchEndpoint: typeof import("./getBatchEndpoint").getBatchEndpoint = null as any;
export const getBatchEndpointOutput: typeof import("./getBatchEndpoint").getBatchEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getBatchEndpoint","getBatchEndpointOutput"], () => require("./getBatchEndpoint"));

export { GetCodeContainerArgs, GetCodeContainerResult, GetCodeContainerOutputArgs } from "./getCodeContainer";
export const getCodeContainer: typeof import("./getCodeContainer").getCodeContainer = null as any;
export const getCodeContainerOutput: typeof import("./getCodeContainer").getCodeContainerOutput = null as any;
utilities.lazyLoad(exports, ["getCodeContainer","getCodeContainerOutput"], () => require("./getCodeContainer"));

export { GetCodeVersionArgs, GetCodeVersionResult, GetCodeVersionOutputArgs } from "./getCodeVersion";
export const getCodeVersion: typeof import("./getCodeVersion").getCodeVersion = null as any;
export const getCodeVersionOutput: typeof import("./getCodeVersion").getCodeVersionOutput = null as any;
utilities.lazyLoad(exports, ["getCodeVersion","getCodeVersionOutput"], () => require("./getCodeVersion"));

export { GetDataContainerArgs, GetDataContainerResult, GetDataContainerOutputArgs } from "./getDataContainer";
export const getDataContainer: typeof import("./getDataContainer").getDataContainer = null as any;
export const getDataContainerOutput: typeof import("./getDataContainer").getDataContainerOutput = null as any;
utilities.lazyLoad(exports, ["getDataContainer","getDataContainerOutput"], () => require("./getDataContainer"));

export { GetDataVersionArgs, GetDataVersionResult, GetDataVersionOutputArgs } from "./getDataVersion";
export const getDataVersion: typeof import("./getDataVersion").getDataVersion = null as any;
export const getDataVersionOutput: typeof import("./getDataVersion").getDataVersionOutput = null as any;
utilities.lazyLoad(exports, ["getDataVersion","getDataVersionOutput"], () => require("./getDataVersion"));

export { GetDatastoreArgs, GetDatastoreResult, GetDatastoreOutputArgs } from "./getDatastore";
export const getDatastore: typeof import("./getDatastore").getDatastore = null as any;
export const getDatastoreOutput: typeof import("./getDatastore").getDatastoreOutput = null as any;
utilities.lazyLoad(exports, ["getDatastore","getDatastoreOutput"], () => require("./getDatastore"));

export { GetEnvironmentContainerArgs, GetEnvironmentContainerResult, GetEnvironmentContainerOutputArgs } from "./getEnvironmentContainer";
export const getEnvironmentContainer: typeof import("./getEnvironmentContainer").getEnvironmentContainer = null as any;
export const getEnvironmentContainerOutput: typeof import("./getEnvironmentContainer").getEnvironmentContainerOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironmentContainer","getEnvironmentContainerOutput"], () => require("./getEnvironmentContainer"));

export { GetEnvironmentSpecificationVersionArgs, GetEnvironmentSpecificationVersionResult, GetEnvironmentSpecificationVersionOutputArgs } from "./getEnvironmentSpecificationVersion";
export const getEnvironmentSpecificationVersion: typeof import("./getEnvironmentSpecificationVersion").getEnvironmentSpecificationVersion = null as any;
export const getEnvironmentSpecificationVersionOutput: typeof import("./getEnvironmentSpecificationVersion").getEnvironmentSpecificationVersionOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironmentSpecificationVersion","getEnvironmentSpecificationVersionOutput"], () => require("./getEnvironmentSpecificationVersion"));

export { GetJobArgs, GetJobResult, GetJobOutputArgs } from "./getJob";
export const getJob: typeof import("./getJob").getJob = null as any;
export const getJobOutput: typeof import("./getJob").getJobOutput = null as any;
utilities.lazyLoad(exports, ["getJob","getJobOutput"], () => require("./getJob"));

export { GetLabelingJobArgs, GetLabelingJobResult, GetLabelingJobOutputArgs } from "./getLabelingJob";
export const getLabelingJob: typeof import("./getLabelingJob").getLabelingJob = null as any;
export const getLabelingJobOutput: typeof import("./getLabelingJob").getLabelingJobOutput = null as any;
utilities.lazyLoad(exports, ["getLabelingJob","getLabelingJobOutput"], () => require("./getLabelingJob"));

export { GetModelContainerArgs, GetModelContainerResult, GetModelContainerOutputArgs } from "./getModelContainer";
export const getModelContainer: typeof import("./getModelContainer").getModelContainer = null as any;
export const getModelContainerOutput: typeof import("./getModelContainer").getModelContainerOutput = null as any;
utilities.lazyLoad(exports, ["getModelContainer","getModelContainerOutput"], () => require("./getModelContainer"));

export { GetModelVersionArgs, GetModelVersionResult, GetModelVersionOutputArgs } from "./getModelVersion";
export const getModelVersion: typeof import("./getModelVersion").getModelVersion = null as any;
export const getModelVersionOutput: typeof import("./getModelVersion").getModelVersionOutput = null as any;
utilities.lazyLoad(exports, ["getModelVersion","getModelVersionOutput"], () => require("./getModelVersion"));

export { GetOnlineDeploymentArgs, GetOnlineDeploymentResult, GetOnlineDeploymentOutputArgs } from "./getOnlineDeployment";
export const getOnlineDeployment: typeof import("./getOnlineDeployment").getOnlineDeployment = null as any;
export const getOnlineDeploymentOutput: typeof import("./getOnlineDeployment").getOnlineDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getOnlineDeployment","getOnlineDeploymentOutput"], () => require("./getOnlineDeployment"));

export { GetOnlineEndpointArgs, GetOnlineEndpointResult, GetOnlineEndpointOutputArgs } from "./getOnlineEndpoint";
export const getOnlineEndpoint: typeof import("./getOnlineEndpoint").getOnlineEndpoint = null as any;
export const getOnlineEndpointOutput: typeof import("./getOnlineEndpoint").getOnlineEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getOnlineEndpoint","getOnlineEndpointOutput"], () => require("./getOnlineEndpoint"));

export { JobArgs } from "./job";
export type Job = import("./job").Job;
export const Job: typeof import("./job").Job = null as any;
utilities.lazyLoad(exports, ["Job"], () => require("./job"));

export { LabelingJobArgs } from "./labelingJob";
export type LabelingJob = import("./labelingJob").LabelingJob;
export const LabelingJob: typeof import("./labelingJob").LabelingJob = null as any;
utilities.lazyLoad(exports, ["LabelingJob"], () => require("./labelingJob"));

export { ModelContainerArgs } from "./modelContainer";
export type ModelContainer = import("./modelContainer").ModelContainer;
export const ModelContainer: typeof import("./modelContainer").ModelContainer = null as any;
utilities.lazyLoad(exports, ["ModelContainer"], () => require("./modelContainer"));

export { ModelVersionArgs } from "./modelVersion";
export type ModelVersion = import("./modelVersion").ModelVersion;
export const ModelVersion: typeof import("./modelVersion").ModelVersion = null as any;
utilities.lazyLoad(exports, ["ModelVersion"], () => require("./modelVersion"));

export { OnlineDeploymentArgs } from "./onlineDeployment";
export type OnlineDeployment = import("./onlineDeployment").OnlineDeployment;
export const OnlineDeployment: typeof import("./onlineDeployment").OnlineDeployment = null as any;
utilities.lazyLoad(exports, ["OnlineDeployment"], () => require("./onlineDeployment"));

export { OnlineEndpointArgs } from "./onlineEndpoint";
export type OnlineEndpoint = import("./onlineEndpoint").OnlineEndpoint;
export const OnlineEndpoint: typeof import("./onlineEndpoint").OnlineEndpoint = null as any;
utilities.lazyLoad(exports, ["OnlineEndpoint"], () => require("./onlineEndpoint"));


// Export enums:
export * from "../types/enums/v20210301preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearningservices/v20210301preview:BatchDeployment":
                return new BatchDeployment(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:BatchEndpoint":
                return new BatchEndpoint(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:CodeContainer":
                return new CodeContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:CodeVersion":
                return new CodeVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:DataContainer":
                return new DataContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:DataVersion":
                return new DataVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:Datastore":
                return new Datastore(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:EnvironmentContainer":
                return new EnvironmentContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:EnvironmentSpecificationVersion":
                return new EnvironmentSpecificationVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:Job":
                return new Job(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:LabelingJob":
                return new LabelingJob(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:ModelContainer":
                return new ModelContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:ModelVersion":
                return new ModelVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:OnlineDeployment":
                return new OnlineDeployment(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20210301preview:OnlineEndpoint":
                return new OnlineEndpoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearningservices/v20210301preview", _module)
