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

export { ComponentContainerArgs } from "./componentContainer";
export type ComponentContainer = import("./componentContainer").ComponentContainer;
export const ComponentContainer: typeof import("./componentContainer").ComponentContainer = null as any;
utilities.lazyLoad(exports, ["ComponentContainer"], () => require("./componentContainer"));

export { ComponentVersionArgs } from "./componentVersion";
export type ComponentVersion = import("./componentVersion").ComponentVersion;
export const ComponentVersion: typeof import("./componentVersion").ComponentVersion = null as any;
utilities.lazyLoad(exports, ["ComponentVersion"], () => require("./componentVersion"));

export { ComputeArgs } from "./compute";
export type Compute = import("./compute").Compute;
export const Compute: typeof import("./compute").Compute = null as any;
utilities.lazyLoad(exports, ["Compute"], () => require("./compute"));

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

export { EnvironmentVersionArgs } from "./environmentVersion";
export type EnvironmentVersion = import("./environmentVersion").EnvironmentVersion;
export const EnvironmentVersion: typeof import("./environmentVersion").EnvironmentVersion = null as any;
utilities.lazyLoad(exports, ["EnvironmentVersion"], () => require("./environmentVersion"));

export { FeaturesetContainerEntityArgs } from "./featuresetContainerEntity";
export type FeaturesetContainerEntity = import("./featuresetContainerEntity").FeaturesetContainerEntity;
export const FeaturesetContainerEntity: typeof import("./featuresetContainerEntity").FeaturesetContainerEntity = null as any;
utilities.lazyLoad(exports, ["FeaturesetContainerEntity"], () => require("./featuresetContainerEntity"));

export { FeaturesetVersionArgs } from "./featuresetVersion";
export type FeaturesetVersion = import("./featuresetVersion").FeaturesetVersion;
export const FeaturesetVersion: typeof import("./featuresetVersion").FeaturesetVersion = null as any;
utilities.lazyLoad(exports, ["FeaturesetVersion"], () => require("./featuresetVersion"));

export { FeaturestoreEntityContainerEntityArgs } from "./featurestoreEntityContainerEntity";
export type FeaturestoreEntityContainerEntity = import("./featurestoreEntityContainerEntity").FeaturestoreEntityContainerEntity;
export const FeaturestoreEntityContainerEntity: typeof import("./featurestoreEntityContainerEntity").FeaturestoreEntityContainerEntity = null as any;
utilities.lazyLoad(exports, ["FeaturestoreEntityContainerEntity"], () => require("./featurestoreEntityContainerEntity"));

export { FeaturestoreEntityVersionArgs } from "./featurestoreEntityVersion";
export type FeaturestoreEntityVersion = import("./featurestoreEntityVersion").FeaturestoreEntityVersion;
export const FeaturestoreEntityVersion: typeof import("./featurestoreEntityVersion").FeaturestoreEntityVersion = null as any;
utilities.lazyLoad(exports, ["FeaturestoreEntityVersion"], () => require("./featurestoreEntityVersion"));

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

export { GetComponentContainerArgs, GetComponentContainerResult, GetComponentContainerOutputArgs } from "./getComponentContainer";
export const getComponentContainer: typeof import("./getComponentContainer").getComponentContainer = null as any;
export const getComponentContainerOutput: typeof import("./getComponentContainer").getComponentContainerOutput = null as any;
utilities.lazyLoad(exports, ["getComponentContainer","getComponentContainerOutput"], () => require("./getComponentContainer"));

export { GetComponentVersionArgs, GetComponentVersionResult, GetComponentVersionOutputArgs } from "./getComponentVersion";
export const getComponentVersion: typeof import("./getComponentVersion").getComponentVersion = null as any;
export const getComponentVersionOutput: typeof import("./getComponentVersion").getComponentVersionOutput = null as any;
utilities.lazyLoad(exports, ["getComponentVersion","getComponentVersionOutput"], () => require("./getComponentVersion"));

export { GetComputeArgs, GetComputeResult, GetComputeOutputArgs } from "./getCompute";
export const getCompute: typeof import("./getCompute").getCompute = null as any;
export const getComputeOutput: typeof import("./getCompute").getComputeOutput = null as any;
utilities.lazyLoad(exports, ["getCompute","getComputeOutput"], () => require("./getCompute"));

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

export { GetEnvironmentVersionArgs, GetEnvironmentVersionResult, GetEnvironmentVersionOutputArgs } from "./getEnvironmentVersion";
export const getEnvironmentVersion: typeof import("./getEnvironmentVersion").getEnvironmentVersion = null as any;
export const getEnvironmentVersionOutput: typeof import("./getEnvironmentVersion").getEnvironmentVersionOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironmentVersion","getEnvironmentVersionOutput"], () => require("./getEnvironmentVersion"));

export { GetFeaturesetContainerEntityArgs, GetFeaturesetContainerEntityResult, GetFeaturesetContainerEntityOutputArgs } from "./getFeaturesetContainerEntity";
export const getFeaturesetContainerEntity: typeof import("./getFeaturesetContainerEntity").getFeaturesetContainerEntity = null as any;
export const getFeaturesetContainerEntityOutput: typeof import("./getFeaturesetContainerEntity").getFeaturesetContainerEntityOutput = null as any;
utilities.lazyLoad(exports, ["getFeaturesetContainerEntity","getFeaturesetContainerEntityOutput"], () => require("./getFeaturesetContainerEntity"));

export { GetFeaturesetVersionArgs, GetFeaturesetVersionResult, GetFeaturesetVersionOutputArgs } from "./getFeaturesetVersion";
export const getFeaturesetVersion: typeof import("./getFeaturesetVersion").getFeaturesetVersion = null as any;
export const getFeaturesetVersionOutput: typeof import("./getFeaturesetVersion").getFeaturesetVersionOutput = null as any;
utilities.lazyLoad(exports, ["getFeaturesetVersion","getFeaturesetVersionOutput"], () => require("./getFeaturesetVersion"));

export { GetFeaturestoreEntityContainerEntityArgs, GetFeaturestoreEntityContainerEntityResult, GetFeaturestoreEntityContainerEntityOutputArgs } from "./getFeaturestoreEntityContainerEntity";
export const getFeaturestoreEntityContainerEntity: typeof import("./getFeaturestoreEntityContainerEntity").getFeaturestoreEntityContainerEntity = null as any;
export const getFeaturestoreEntityContainerEntityOutput: typeof import("./getFeaturestoreEntityContainerEntity").getFeaturestoreEntityContainerEntityOutput = null as any;
utilities.lazyLoad(exports, ["getFeaturestoreEntityContainerEntity","getFeaturestoreEntityContainerEntityOutput"], () => require("./getFeaturestoreEntityContainerEntity"));

export { GetFeaturestoreEntityVersionArgs, GetFeaturestoreEntityVersionResult, GetFeaturestoreEntityVersionOutputArgs } from "./getFeaturestoreEntityVersion";
export const getFeaturestoreEntityVersion: typeof import("./getFeaturestoreEntityVersion").getFeaturestoreEntityVersion = null as any;
export const getFeaturestoreEntityVersionOutput: typeof import("./getFeaturestoreEntityVersion").getFeaturestoreEntityVersionOutput = null as any;
utilities.lazyLoad(exports, ["getFeaturestoreEntityVersion","getFeaturestoreEntityVersionOutput"], () => require("./getFeaturestoreEntityVersion"));

export { GetJobArgs, GetJobResult, GetJobOutputArgs } from "./getJob";
export const getJob: typeof import("./getJob").getJob = null as any;
export const getJobOutput: typeof import("./getJob").getJobOutput = null as any;
utilities.lazyLoad(exports, ["getJob","getJobOutput"], () => require("./getJob"));

export { GetLabelingJobArgs, GetLabelingJobResult, GetLabelingJobOutputArgs } from "./getLabelingJob";
export const getLabelingJob: typeof import("./getLabelingJob").getLabelingJob = null as any;
export const getLabelingJobOutput: typeof import("./getLabelingJob").getLabelingJobOutput = null as any;
utilities.lazyLoad(exports, ["getLabelingJob","getLabelingJobOutput"], () => require("./getLabelingJob"));

export { GetManagedNetworkSettingsRuleArgs, GetManagedNetworkSettingsRuleResult, GetManagedNetworkSettingsRuleOutputArgs } from "./getManagedNetworkSettingsRule";
export const getManagedNetworkSettingsRule: typeof import("./getManagedNetworkSettingsRule").getManagedNetworkSettingsRule = null as any;
export const getManagedNetworkSettingsRuleOutput: typeof import("./getManagedNetworkSettingsRule").getManagedNetworkSettingsRuleOutput = null as any;
utilities.lazyLoad(exports, ["getManagedNetworkSettingsRule","getManagedNetworkSettingsRuleOutput"], () => require("./getManagedNetworkSettingsRule"));

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

export { GetOnlineDeploymentLogsArgs, GetOnlineDeploymentLogsResult, GetOnlineDeploymentLogsOutputArgs } from "./getOnlineDeploymentLogs";
export const getOnlineDeploymentLogs: typeof import("./getOnlineDeploymentLogs").getOnlineDeploymentLogs = null as any;
export const getOnlineDeploymentLogsOutput: typeof import("./getOnlineDeploymentLogs").getOnlineDeploymentLogsOutput = null as any;
utilities.lazyLoad(exports, ["getOnlineDeploymentLogs","getOnlineDeploymentLogsOutput"], () => require("./getOnlineDeploymentLogs"));

export { GetOnlineEndpointArgs, GetOnlineEndpointResult, GetOnlineEndpointOutputArgs } from "./getOnlineEndpoint";
export const getOnlineEndpoint: typeof import("./getOnlineEndpoint").getOnlineEndpoint = null as any;
export const getOnlineEndpointOutput: typeof import("./getOnlineEndpoint").getOnlineEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getOnlineEndpoint","getOnlineEndpointOutput"], () => require("./getOnlineEndpoint"));

export { GetOnlineEndpointTokenArgs, GetOnlineEndpointTokenResult, GetOnlineEndpointTokenOutputArgs } from "./getOnlineEndpointToken";
export const getOnlineEndpointToken: typeof import("./getOnlineEndpointToken").getOnlineEndpointToken = null as any;
export const getOnlineEndpointTokenOutput: typeof import("./getOnlineEndpointToken").getOnlineEndpointTokenOutput = null as any;
utilities.lazyLoad(exports, ["getOnlineEndpointToken","getOnlineEndpointTokenOutput"], () => require("./getOnlineEndpointToken"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetRegistryArgs, GetRegistryResult, GetRegistryOutputArgs } from "./getRegistry";
export const getRegistry: typeof import("./getRegistry").getRegistry = null as any;
export const getRegistryOutput: typeof import("./getRegistry").getRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getRegistry","getRegistryOutput"], () => require("./getRegistry"));

export { GetRegistryCodeContainerArgs, GetRegistryCodeContainerResult, GetRegistryCodeContainerOutputArgs } from "./getRegistryCodeContainer";
export const getRegistryCodeContainer: typeof import("./getRegistryCodeContainer").getRegistryCodeContainer = null as any;
export const getRegistryCodeContainerOutput: typeof import("./getRegistryCodeContainer").getRegistryCodeContainerOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryCodeContainer","getRegistryCodeContainerOutput"], () => require("./getRegistryCodeContainer"));

export { GetRegistryCodeVersionArgs, GetRegistryCodeVersionResult, GetRegistryCodeVersionOutputArgs } from "./getRegistryCodeVersion";
export const getRegistryCodeVersion: typeof import("./getRegistryCodeVersion").getRegistryCodeVersion = null as any;
export const getRegistryCodeVersionOutput: typeof import("./getRegistryCodeVersion").getRegistryCodeVersionOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryCodeVersion","getRegistryCodeVersionOutput"], () => require("./getRegistryCodeVersion"));

export { GetRegistryComponentContainerArgs, GetRegistryComponentContainerResult, GetRegistryComponentContainerOutputArgs } from "./getRegistryComponentContainer";
export const getRegistryComponentContainer: typeof import("./getRegistryComponentContainer").getRegistryComponentContainer = null as any;
export const getRegistryComponentContainerOutput: typeof import("./getRegistryComponentContainer").getRegistryComponentContainerOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryComponentContainer","getRegistryComponentContainerOutput"], () => require("./getRegistryComponentContainer"));

export { GetRegistryComponentVersionArgs, GetRegistryComponentVersionResult, GetRegistryComponentVersionOutputArgs } from "./getRegistryComponentVersion";
export const getRegistryComponentVersion: typeof import("./getRegistryComponentVersion").getRegistryComponentVersion = null as any;
export const getRegistryComponentVersionOutput: typeof import("./getRegistryComponentVersion").getRegistryComponentVersionOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryComponentVersion","getRegistryComponentVersionOutput"], () => require("./getRegistryComponentVersion"));

export { GetRegistryDataContainerArgs, GetRegistryDataContainerResult, GetRegistryDataContainerOutputArgs } from "./getRegistryDataContainer";
export const getRegistryDataContainer: typeof import("./getRegistryDataContainer").getRegistryDataContainer = null as any;
export const getRegistryDataContainerOutput: typeof import("./getRegistryDataContainer").getRegistryDataContainerOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryDataContainer","getRegistryDataContainerOutput"], () => require("./getRegistryDataContainer"));

export { GetRegistryDataVersionArgs, GetRegistryDataVersionResult, GetRegistryDataVersionOutputArgs } from "./getRegistryDataVersion";
export const getRegistryDataVersion: typeof import("./getRegistryDataVersion").getRegistryDataVersion = null as any;
export const getRegistryDataVersionOutput: typeof import("./getRegistryDataVersion").getRegistryDataVersionOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryDataVersion","getRegistryDataVersionOutput"], () => require("./getRegistryDataVersion"));

export { GetRegistryEnvironmentContainerArgs, GetRegistryEnvironmentContainerResult, GetRegistryEnvironmentContainerOutputArgs } from "./getRegistryEnvironmentContainer";
export const getRegistryEnvironmentContainer: typeof import("./getRegistryEnvironmentContainer").getRegistryEnvironmentContainer = null as any;
export const getRegistryEnvironmentContainerOutput: typeof import("./getRegistryEnvironmentContainer").getRegistryEnvironmentContainerOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryEnvironmentContainer","getRegistryEnvironmentContainerOutput"], () => require("./getRegistryEnvironmentContainer"));

export { GetRegistryEnvironmentVersionArgs, GetRegistryEnvironmentVersionResult, GetRegistryEnvironmentVersionOutputArgs } from "./getRegistryEnvironmentVersion";
export const getRegistryEnvironmentVersion: typeof import("./getRegistryEnvironmentVersion").getRegistryEnvironmentVersion = null as any;
export const getRegistryEnvironmentVersionOutput: typeof import("./getRegistryEnvironmentVersion").getRegistryEnvironmentVersionOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryEnvironmentVersion","getRegistryEnvironmentVersionOutput"], () => require("./getRegistryEnvironmentVersion"));

export { GetRegistryModelContainerArgs, GetRegistryModelContainerResult, GetRegistryModelContainerOutputArgs } from "./getRegistryModelContainer";
export const getRegistryModelContainer: typeof import("./getRegistryModelContainer").getRegistryModelContainer = null as any;
export const getRegistryModelContainerOutput: typeof import("./getRegistryModelContainer").getRegistryModelContainerOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryModelContainer","getRegistryModelContainerOutput"], () => require("./getRegistryModelContainer"));

export { GetRegistryModelVersionArgs, GetRegistryModelVersionResult, GetRegistryModelVersionOutputArgs } from "./getRegistryModelVersion";
export const getRegistryModelVersion: typeof import("./getRegistryModelVersion").getRegistryModelVersion = null as any;
export const getRegistryModelVersionOutput: typeof import("./getRegistryModelVersion").getRegistryModelVersionOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryModelVersion","getRegistryModelVersionOutput"], () => require("./getRegistryModelVersion"));

export { GetScheduleArgs, GetScheduleResult, GetScheduleOutputArgs } from "./getSchedule";
export const getSchedule: typeof import("./getSchedule").getSchedule = null as any;
export const getScheduleOutput: typeof import("./getSchedule").getScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getSchedule","getScheduleOutput"], () => require("./getSchedule"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { GetWorkspaceConnectionArgs, GetWorkspaceConnectionResult, GetWorkspaceConnectionOutputArgs } from "./getWorkspaceConnection";
export const getWorkspaceConnection: typeof import("./getWorkspaceConnection").getWorkspaceConnection = null as any;
export const getWorkspaceConnectionOutput: typeof import("./getWorkspaceConnection").getWorkspaceConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceConnection","getWorkspaceConnectionOutput"], () => require("./getWorkspaceConnection"));

export { JobArgs } from "./job";
export type Job = import("./job").Job;
export const Job: typeof import("./job").Job = null as any;
utilities.lazyLoad(exports, ["Job"], () => require("./job"));

export { LabelingJobArgs } from "./labelingJob";
export type LabelingJob = import("./labelingJob").LabelingJob;
export const LabelingJob: typeof import("./labelingJob").LabelingJob = null as any;
utilities.lazyLoad(exports, ["LabelingJob"], () => require("./labelingJob"));

export { ListBatchEndpointKeysArgs, ListBatchEndpointKeysResult, ListBatchEndpointKeysOutputArgs } from "./listBatchEndpointKeys";
export const listBatchEndpointKeys: typeof import("./listBatchEndpointKeys").listBatchEndpointKeys = null as any;
export const listBatchEndpointKeysOutput: typeof import("./listBatchEndpointKeys").listBatchEndpointKeysOutput = null as any;
utilities.lazyLoad(exports, ["listBatchEndpointKeys","listBatchEndpointKeysOutput"], () => require("./listBatchEndpointKeys"));

export { ListComputeKeysArgs, ListComputeKeysResult, ListComputeKeysOutputArgs } from "./listComputeKeys";
export const listComputeKeys: typeof import("./listComputeKeys").listComputeKeys = null as any;
export const listComputeKeysOutput: typeof import("./listComputeKeys").listComputeKeysOutput = null as any;
utilities.lazyLoad(exports, ["listComputeKeys","listComputeKeysOutput"], () => require("./listComputeKeys"));

export { ListComputeNodesArgs, ListComputeNodesResult, ListComputeNodesOutputArgs } from "./listComputeNodes";
export const listComputeNodes: typeof import("./listComputeNodes").listComputeNodes = null as any;
export const listComputeNodesOutput: typeof import("./listComputeNodes").listComputeNodesOutput = null as any;
utilities.lazyLoad(exports, ["listComputeNodes","listComputeNodesOutput"], () => require("./listComputeNodes"));

export { ListDatastoreSecretsArgs, ListDatastoreSecretsResult, ListDatastoreSecretsOutputArgs } from "./listDatastoreSecrets";
export const listDatastoreSecrets: typeof import("./listDatastoreSecrets").listDatastoreSecrets = null as any;
export const listDatastoreSecretsOutput: typeof import("./listDatastoreSecrets").listDatastoreSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listDatastoreSecrets","listDatastoreSecretsOutput"], () => require("./listDatastoreSecrets"));

export { ListFeaturesetVersionMaterializationJobsArgs, ListFeaturesetVersionMaterializationJobsResult, ListFeaturesetVersionMaterializationJobsOutputArgs } from "./listFeaturesetVersionMaterializationJobs";
export const listFeaturesetVersionMaterializationJobs: typeof import("./listFeaturesetVersionMaterializationJobs").listFeaturesetVersionMaterializationJobs = null as any;
export const listFeaturesetVersionMaterializationJobsOutput: typeof import("./listFeaturesetVersionMaterializationJobs").listFeaturesetVersionMaterializationJobsOutput = null as any;
utilities.lazyLoad(exports, ["listFeaturesetVersionMaterializationJobs","listFeaturesetVersionMaterializationJobsOutput"], () => require("./listFeaturesetVersionMaterializationJobs"));

export { ListOnlineEndpointKeysArgs, ListOnlineEndpointKeysResult, ListOnlineEndpointKeysOutputArgs } from "./listOnlineEndpointKeys";
export const listOnlineEndpointKeys: typeof import("./listOnlineEndpointKeys").listOnlineEndpointKeys = null as any;
export const listOnlineEndpointKeysOutput: typeof import("./listOnlineEndpointKeys").listOnlineEndpointKeysOutput = null as any;
utilities.lazyLoad(exports, ["listOnlineEndpointKeys","listOnlineEndpointKeysOutput"], () => require("./listOnlineEndpointKeys"));

export { ListWorkspaceConnectionSecretsArgs, ListWorkspaceConnectionSecretsResult, ListWorkspaceConnectionSecretsOutputArgs } from "./listWorkspaceConnectionSecrets";
export const listWorkspaceConnectionSecrets: typeof import("./listWorkspaceConnectionSecrets").listWorkspaceConnectionSecrets = null as any;
export const listWorkspaceConnectionSecretsOutput: typeof import("./listWorkspaceConnectionSecrets").listWorkspaceConnectionSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceConnectionSecrets","listWorkspaceConnectionSecretsOutput"], () => require("./listWorkspaceConnectionSecrets"));

export { ListWorkspaceKeysArgs, ListWorkspaceKeysResult, ListWorkspaceKeysOutputArgs } from "./listWorkspaceKeys";
export const listWorkspaceKeys: typeof import("./listWorkspaceKeys").listWorkspaceKeys = null as any;
export const listWorkspaceKeysOutput: typeof import("./listWorkspaceKeys").listWorkspaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceKeys","listWorkspaceKeysOutput"], () => require("./listWorkspaceKeys"));

export { ListWorkspaceNotebookAccessTokenArgs, ListWorkspaceNotebookAccessTokenResult, ListWorkspaceNotebookAccessTokenOutputArgs } from "./listWorkspaceNotebookAccessToken";
export const listWorkspaceNotebookAccessToken: typeof import("./listWorkspaceNotebookAccessToken").listWorkspaceNotebookAccessToken = null as any;
export const listWorkspaceNotebookAccessTokenOutput: typeof import("./listWorkspaceNotebookAccessToken").listWorkspaceNotebookAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceNotebookAccessToken","listWorkspaceNotebookAccessTokenOutput"], () => require("./listWorkspaceNotebookAccessToken"));

export { ListWorkspaceNotebookKeysArgs, ListWorkspaceNotebookKeysResult, ListWorkspaceNotebookKeysOutputArgs } from "./listWorkspaceNotebookKeys";
export const listWorkspaceNotebookKeys: typeof import("./listWorkspaceNotebookKeys").listWorkspaceNotebookKeys = null as any;
export const listWorkspaceNotebookKeysOutput: typeof import("./listWorkspaceNotebookKeys").listWorkspaceNotebookKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceNotebookKeys","listWorkspaceNotebookKeysOutput"], () => require("./listWorkspaceNotebookKeys"));

export { ListWorkspaceStorageAccountKeysArgs, ListWorkspaceStorageAccountKeysResult, ListWorkspaceStorageAccountKeysOutputArgs } from "./listWorkspaceStorageAccountKeys";
export const listWorkspaceStorageAccountKeys: typeof import("./listWorkspaceStorageAccountKeys").listWorkspaceStorageAccountKeys = null as any;
export const listWorkspaceStorageAccountKeysOutput: typeof import("./listWorkspaceStorageAccountKeys").listWorkspaceStorageAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceStorageAccountKeys","listWorkspaceStorageAccountKeysOutput"], () => require("./listWorkspaceStorageAccountKeys"));

export { ManagedNetworkSettingsRuleArgs } from "./managedNetworkSettingsRule";
export type ManagedNetworkSettingsRule = import("./managedNetworkSettingsRule").ManagedNetworkSettingsRule;
export const ManagedNetworkSettingsRule: typeof import("./managedNetworkSettingsRule").ManagedNetworkSettingsRule = null as any;
utilities.lazyLoad(exports, ["ManagedNetworkSettingsRule"], () => require("./managedNetworkSettingsRule"));

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

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { RegistryArgs } from "./registry";
export type Registry = import("./registry").Registry;
export const Registry: typeof import("./registry").Registry = null as any;
utilities.lazyLoad(exports, ["Registry"], () => require("./registry"));

export { RegistryCodeContainerArgs } from "./registryCodeContainer";
export type RegistryCodeContainer = import("./registryCodeContainer").RegistryCodeContainer;
export const RegistryCodeContainer: typeof import("./registryCodeContainer").RegistryCodeContainer = null as any;
utilities.lazyLoad(exports, ["RegistryCodeContainer"], () => require("./registryCodeContainer"));

export { RegistryCodeVersionArgs } from "./registryCodeVersion";
export type RegistryCodeVersion = import("./registryCodeVersion").RegistryCodeVersion;
export const RegistryCodeVersion: typeof import("./registryCodeVersion").RegistryCodeVersion = null as any;
utilities.lazyLoad(exports, ["RegistryCodeVersion"], () => require("./registryCodeVersion"));

export { RegistryComponentContainerArgs } from "./registryComponentContainer";
export type RegistryComponentContainer = import("./registryComponentContainer").RegistryComponentContainer;
export const RegistryComponentContainer: typeof import("./registryComponentContainer").RegistryComponentContainer = null as any;
utilities.lazyLoad(exports, ["RegistryComponentContainer"], () => require("./registryComponentContainer"));

export { RegistryComponentVersionArgs } from "./registryComponentVersion";
export type RegistryComponentVersion = import("./registryComponentVersion").RegistryComponentVersion;
export const RegistryComponentVersion: typeof import("./registryComponentVersion").RegistryComponentVersion = null as any;
utilities.lazyLoad(exports, ["RegistryComponentVersion"], () => require("./registryComponentVersion"));

export { RegistryDataContainerArgs } from "./registryDataContainer";
export type RegistryDataContainer = import("./registryDataContainer").RegistryDataContainer;
export const RegistryDataContainer: typeof import("./registryDataContainer").RegistryDataContainer = null as any;
utilities.lazyLoad(exports, ["RegistryDataContainer"], () => require("./registryDataContainer"));

export { RegistryDataVersionArgs } from "./registryDataVersion";
export type RegistryDataVersion = import("./registryDataVersion").RegistryDataVersion;
export const RegistryDataVersion: typeof import("./registryDataVersion").RegistryDataVersion = null as any;
utilities.lazyLoad(exports, ["RegistryDataVersion"], () => require("./registryDataVersion"));

export { RegistryEnvironmentContainerArgs } from "./registryEnvironmentContainer";
export type RegistryEnvironmentContainer = import("./registryEnvironmentContainer").RegistryEnvironmentContainer;
export const RegistryEnvironmentContainer: typeof import("./registryEnvironmentContainer").RegistryEnvironmentContainer = null as any;
utilities.lazyLoad(exports, ["RegistryEnvironmentContainer"], () => require("./registryEnvironmentContainer"));

export { RegistryEnvironmentVersionArgs } from "./registryEnvironmentVersion";
export type RegistryEnvironmentVersion = import("./registryEnvironmentVersion").RegistryEnvironmentVersion;
export const RegistryEnvironmentVersion: typeof import("./registryEnvironmentVersion").RegistryEnvironmentVersion = null as any;
utilities.lazyLoad(exports, ["RegistryEnvironmentVersion"], () => require("./registryEnvironmentVersion"));

export { RegistryModelContainerArgs } from "./registryModelContainer";
export type RegistryModelContainer = import("./registryModelContainer").RegistryModelContainer;
export const RegistryModelContainer: typeof import("./registryModelContainer").RegistryModelContainer = null as any;
utilities.lazyLoad(exports, ["RegistryModelContainer"], () => require("./registryModelContainer"));

export { RegistryModelVersionArgs } from "./registryModelVersion";
export type RegistryModelVersion = import("./registryModelVersion").RegistryModelVersion;
export const RegistryModelVersion: typeof import("./registryModelVersion").RegistryModelVersion = null as any;
utilities.lazyLoad(exports, ["RegistryModelVersion"], () => require("./registryModelVersion"));

export { ScheduleArgs } from "./schedule";
export type Schedule = import("./schedule").Schedule;
export const Schedule: typeof import("./schedule").Schedule = null as any;
utilities.lazyLoad(exports, ["Schedule"], () => require("./schedule"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));

export { WorkspaceConnectionArgs } from "./workspaceConnection";
export type WorkspaceConnection = import("./workspaceConnection").WorkspaceConnection;
export const WorkspaceConnection: typeof import("./workspaceConnection").WorkspaceConnection = null as any;
utilities.lazyLoad(exports, ["WorkspaceConnection"], () => require("./workspaceConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearningservices/v20230601preview:BatchDeployment":
                return new BatchDeployment(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:BatchEndpoint":
                return new BatchEndpoint(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:CodeContainer":
                return new CodeContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:CodeVersion":
                return new CodeVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:ComponentContainer":
                return new ComponentContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:ComponentVersion":
                return new ComponentVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:Compute":
                return new Compute(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:DataContainer":
                return new DataContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:DataVersion":
                return new DataVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:Datastore":
                return new Datastore(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:EnvironmentContainer":
                return new EnvironmentContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:EnvironmentVersion":
                return new EnvironmentVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:FeaturesetContainerEntity":
                return new FeaturesetContainerEntity(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:FeaturesetVersion":
                return new FeaturesetVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:FeaturestoreEntityContainerEntity":
                return new FeaturestoreEntityContainerEntity(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:FeaturestoreEntityVersion":
                return new FeaturestoreEntityVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:Job":
                return new Job(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:LabelingJob":
                return new LabelingJob(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:ManagedNetworkSettingsRule":
                return new ManagedNetworkSettingsRule(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:ModelContainer":
                return new ModelContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:ModelVersion":
                return new ModelVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:OnlineDeployment":
                return new OnlineDeployment(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:OnlineEndpoint":
                return new OnlineEndpoint(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:Registry":
                return new Registry(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryCodeContainer":
                return new RegistryCodeContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryCodeVersion":
                return new RegistryCodeVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryComponentContainer":
                return new RegistryComponentContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryComponentVersion":
                return new RegistryComponentVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryDataContainer":
                return new RegistryDataContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryDataVersion":
                return new RegistryDataVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryEnvironmentContainer":
                return new RegistryEnvironmentContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryEnvironmentVersion":
                return new RegistryEnvironmentVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryModelContainer":
                return new RegistryModelContainer(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:RegistryModelVersion":
                return new RegistryModelVersion(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:Schedule":
                return new Schedule(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20230601preview:WorkspaceConnection":
                return new WorkspaceConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearningservices/v20230601preview", _module)