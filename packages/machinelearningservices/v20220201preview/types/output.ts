import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Account key datastore credentials configuration.
     */
    export interface AccountKeyDatastoreCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'AccountKey'.
         */
        credentialsType: "AccountKey";
    }

    /**
     * AML Token identity configuration.
     */
    export interface AmlTokenResponse {
        /**
         * Enum to determine identity framework.
         * Expected value is 'AMLToken'.
         */
        identityType: "AMLToken";
    }

    /**
     * Forecast horizon determined automatically by system.
     */
    export interface AutoForecastHorizonResponse {
        /**
         * Enum to determine forecast horizon selection mode.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    /**
     * AutoMLJob class.
     * Use this class for executing AutoML tasks like Classification/Regression etc.
     * See TaskType enum for all the tasks supported.
     */
    export interface AutoMLJobResponse {
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * The ARM resource ID of the Environment specification for the job.
         * This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job.
         */
        environmentId?: string;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Enum to determine the type of job.
         * Expected value is 'AutoML'.
         */
        jobType: "AutoML";
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Compute Resource configuration for the job.
         */
        resources?: ResourceConfigurationResponse;
        /**
         * Schedule definition of job.
         * If no schedule is provided, the job is run once and immediately after submission.
         */
        schedule?: CronScheduleResponse | RecurrenceScheduleResponse;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
        /**
         * [Required] This represents scenario which can be one of Tables/NLP/Image
         */
        taskDetails: ClassificationResponse | ForecastingResponse | ImageClassificationResponse | ImageClassificationMultilabelResponse | ImageInstanceSegmentationResponse | ImageObjectDetectionResponse | RegressionResponse | TextClassificationResponse | TextClassificationMultilabelResponse | TextNerResponse;
    }
    /**
     * autoMLJobResponseProvideDefaults sets the appropriate defaults for AutoMLJobResponse
     */
    export function autoMLJobResponseProvideDefaults(val: AutoMLJobResponse): AutoMLJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            resources: (val.resources ? resourceConfigurationResponseProvideDefaults(val.resources) : undefined),
        };
    }

    /**
     * N-Cross validations determined automatically.
     */
    export interface AutoNCrossValidationsResponse {
        /**
         * Determines how N-Cross validations value is determined.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    export interface AutoSeasonalityResponse {
        /**
         * Forecasting seasonality mode.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    export interface AutoTargetLagsResponse {
        /**
         * Target lags selection modes.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    /**
     * Target lags rolling window determined automatically.
     */
    export interface AutoTargetRollingWindowSizeResponse {
        /**
         * Target rolling windows size mode.
         * Expected value is 'Auto'.
         */
        mode: "Auto";
    }

    /**
     * Azure Blob datastore configuration.
     */
    export interface AzureBlobDatastoreResponse {
        /**
         * Storage account name.
         */
        accountName?: string;
        /**
         * Storage account container name.
         */
        containerName?: string;
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureBlob'.
         */
        datastoreType: "AzureBlob";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: string;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * azureBlobDatastoreResponseProvideDefaults sets the appropriate defaults for AzureBlobDatastoreResponse
     */
    export function azureBlobDatastoreResponseProvideDefaults(val: AzureBlobDatastoreResponse): AzureBlobDatastoreResponse {
        return {
            ...val,
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure Data Lake Gen1 datastore configuration.
     */
    export interface AzureDataLakeGen1DatastoreResponse {
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen1'.
         */
        datastoreType: "AzureDataLakeGen1";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * [Required] Azure Data Lake store name.
         */
        storeName: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * azureDataLakeGen1DatastoreResponseProvideDefaults sets the appropriate defaults for AzureDataLakeGen1DatastoreResponse
     */
    export function azureDataLakeGen1DatastoreResponseProvideDefaults(val: AzureDataLakeGen1DatastoreResponse): AzureDataLakeGen1DatastoreResponse {
        return {
            ...val,
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure Data Lake Gen2 datastore configuration.
     */
    export interface AzureDataLakeGen2DatastoreResponse {
        /**
         * [Required] Storage account name.
         */
        accountName: string;
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen2'.
         */
        datastoreType: "AzureDataLakeGen2";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: string;
        /**
         * [Required] The name of the Data Lake Gen2 filesystem.
         */
        filesystem: string;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * azureDataLakeGen2DatastoreResponseProvideDefaults sets the appropriate defaults for AzureDataLakeGen2DatastoreResponse
     */
    export function azureDataLakeGen2DatastoreResponseProvideDefaults(val: AzureDataLakeGen2DatastoreResponse): AzureDataLakeGen2DatastoreResponse {
        return {
            ...val,
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure File datastore configuration.
     */
    export interface AzureFileDatastoreResponse {
        /**
         * [Required] Storage account name.
         */
        accountName: string;
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureFile'.
         */
        datastoreType: "AzureFile";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: string;
        /**
         * [Required] The name of the Azure file share that the datastore points to.
         */
        fileShareName: string;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * azureFileDatastoreResponseProvideDefaults sets the appropriate defaults for AzureFileDatastoreResponse
     */
    export function azureFileDatastoreResponseProvideDefaults(val: AzureFileDatastoreResponse): AzureFileDatastoreResponse {
        return {
            ...val,
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Defines an early termination policy based on slack criteria, and a frequency and delay interval for evaluation
     */
    export interface BanditPolicyResponse {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: number;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: number;
        /**
         *
         * Expected value is 'Bandit'.
         */
        policyType: "Bandit";
        /**
         * Absolute distance allowed from the best performing run.
         */
        slackAmount?: number;
        /**
         * Ratio of the allowed distance from the best performing run.
         */
        slackFactor?: number;
    }
    /**
     * banditPolicyResponseProvideDefaults sets the appropriate defaults for BanditPolicyResponse
     */
    export function banditPolicyResponseProvideDefaults(val: BanditPolicyResponse): BanditPolicyResponse {
        return {
            ...val,
            delayEvaluation: (val.delayEvaluation) ?? 0,
            evaluationInterval: (val.evaluationInterval) ?? 0,
            slackAmount: (val.slackAmount) ?? 0,
            slackFactor: (val.slackFactor) ?? 0,
        };
    }

    /**
     * Batch inference settings per deployment.
     */
    export interface BatchDeploymentResponse {
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: CodeConfigurationResponse;
        /**
         * Compute target for batch inference operation.
         */
        compute?: string;
        /**
         * Description of the endpoint deployment.
         */
        description?: string;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: string;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Error threshold, if the error count for the entire input goes above this value,
         * the batch inference will be aborted. Range is [-1, int.MaxValue].
         * For FileDataset, this value is the count of file failures.
         * For TabularDataset, this value is the count of record failures.
         * If set to -1 (the lower bound), all failures during batch inference will be ignored.
         */
        errorThreshold?: number;
        /**
         * Logging level for batch inference operation.
         */
        loggingLevel?: string;
        /**
         * Indicates maximum number of parallelism per instance.
         */
        maxConcurrencyPerInstance?: number;
        /**
         * Size of the mini-batch passed to each batch invocation.
         * For FileDataset, this is the number of files per mini-batch.
         * For TabularDataset, this is the size of the records in bytes, per mini-batch.
         */
        miniBatchSize?: number;
        /**
         * Reference to the model asset for the endpoint deployment.
         */
        model?: DataPathAssetReferenceResponse | IdAssetReferenceResponse | OutputPathAssetReferenceResponse;
        /**
         * Indicates how the output will be organized.
         */
        outputAction?: string;
        /**
         * Customized output file name for append_row output action.
         */
        outputFileName?: string;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint deployment.
         */
        provisioningState: string;
        /**
         * Indicates compute configuration for the job.
         * If not provided, will default to the defaults defined in ResourceConfiguration.
         */
        resources?: ResourceConfigurationResponse;
        /**
         * Retry Settings for the batch inference operation.
         * If not provided, will default to the defaults defined in BatchRetrySettings.
         */
        retrySettings?: BatchRetrySettingsResponse;
    }
    /**
     * batchDeploymentResponseProvideDefaults sets the appropriate defaults for BatchDeploymentResponse
     */
    export function batchDeploymentResponseProvideDefaults(val: BatchDeploymentResponse): BatchDeploymentResponse {
        return {
            ...val,
            errorThreshold: (val.errorThreshold) ?? -1,
            loggingLevel: (val.loggingLevel) ?? "Info",
            maxConcurrencyPerInstance: (val.maxConcurrencyPerInstance) ?? 1,
            miniBatchSize: (val.miniBatchSize) ?? 10,
            outputAction: (val.outputAction) ?? "AppendRow",
            outputFileName: (val.outputFileName) ?? "predictions.csv",
            resources: (val.resources ? resourceConfigurationResponseProvideDefaults(val.resources) : undefined),
            retrySettings: (val.retrySettings ? batchRetrySettingsResponseProvideDefaults(val.retrySettings) : undefined),
        };
    }

    /**
     * Batch endpoint default values
     */
    export interface BatchEndpointDefaultsResponse {
        /**
         * Name of the deployment that will be default for the endpoint.
         * This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked.
         */
        deploymentName?: string;
    }

    /**
     * Batch endpoint configuration.
     */
    export interface BatchEndpointResponse {
        /**
         * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
         */
        authMode: string;
        /**
         * Default values for Batch Endpoint
         */
        defaults?: BatchEndpointDefaultsResponse;
        /**
         * Description of the inference endpoint.
         */
        description?: string;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint.
         */
        provisioningState: string;
        /**
         * Endpoint URI.
         */
        scoringUri: string;
        /**
         * Endpoint Swagger URI.
         */
        swaggerUri: string;
    }

    /**
     * Retry settings for a batch inference operation.
     */
    export interface BatchRetrySettingsResponse {
        /**
         * Maximum retry count for a mini-batch
         */
        maxRetries?: number;
        /**
         * Invocation timeout for a mini-batch, in ISO 8601 format.
         */
        timeout?: string;
    }
    /**
     * batchRetrySettingsResponseProvideDefaults sets the appropriate defaults for BatchRetrySettingsResponse
     */
    export function batchRetrySettingsResponseProvideDefaults(val: BatchRetrySettingsResponse): BatchRetrySettingsResponse {
        return {
            ...val,
            maxRetries: (val.maxRetries) ?? 3,
            timeout: (val.timeout) ?? "PT30S",
        };
    }

    /**
     * Defines a Sampling Algorithm that generates values based on previous values
     */
    export interface BayesianSamplingAlgorithmResponse {
        /**
         *
         * Expected value is 'Bayesian'.
         */
        samplingAlgorithmType: "Bayesian";
    }

    /**
     * Configuration settings for Docker build context
     */
    export interface BuildContextResponse {
        /**
         * [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.
         * <seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" />
         */
        contextUri: string;
        /**
         * Path to the Dockerfile in the build context.
         * <seealso href="https://docs.docker.com/engine/reference/builder/" />
         */
        dockerfilePath?: string;
    }
    /**
     * buildContextResponseProvideDefaults sets the appropriate defaults for BuildContextResponse
     */
    export function buildContextResponseProvideDefaults(val: BuildContextResponse): BuildContextResponse {
        return {
            ...val,
            dockerfilePath: (val.dockerfilePath) ?? "Dockerfile",
        };
    }

    /**
     * Certificate datastore credentials configuration.
     */
    export interface CertificateDatastoreCredentialsResponse {
        /**
         * Authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * [Required] Service principal client ID.
         */
        clientId: string;
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'Certificate'.
         */
        credentialsType: "Certificate";
        /**
         * Resource the service principal has access to.
         */
        resourceUrl?: string;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: string;
        /**
         * [Required] Thumbprint of the certificate used for authentication.
         */
        thumbprint: string;
    }

    /**
     * Classification task in AutoML Table vertical.
     */
    export interface ClassificationResponse {
        /**
         * Allowed models for classification task.
         */
        allowedModels?: string[];
        /**
         * Blocked models for classification task.
         */
        blockedModels?: string[];
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: TableVerticalDataSettingsResponse;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: TableVerticalFeaturizationSettingsResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: TableVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for the task.
         */
        primaryMetric?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Classification'.
         */
        taskType: "Classification";
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: TrainingSettingsResponse;
    }
    /**
     * classificationResponseProvideDefaults sets the appropriate defaults for ClassificationResponse
     */
    export function classificationResponseProvideDefaults(val: ClassificationResponse): ClassificationResponse {
        return {
            ...val,
            dataSettings: (val.dataSettings ? tableVerticalDataSettingsResponseProvideDefaults(val.dataSettings) : undefined),
            featurizationSettings: (val.featurizationSettings ? tableVerticalFeaturizationSettingsResponseProvideDefaults(val.featurizationSettings) : undefined),
            limitSettings: (val.limitSettings ? tableVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "AUCWeighted",
            trainingSettings: (val.trainingSettings ? trainingSettingsResponseProvideDefaults(val.trainingSettings) : undefined),
        };
    }

    /**
     * Configuration for a scoring code asset.
     */
    export interface CodeConfigurationResponse {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: string;
        /**
         * [Required] The script to execute on startup. eg. "score.py"
         */
        scoringScript: string;
    }

    /**
     * Container for code asset versions.
     */
    export interface CodeContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * codeContainerResponseProvideDefaults sets the appropriate defaults for CodeContainerResponse
     */
    export function codeContainerResponseProvideDefaults(val: CodeContainerResponse): CodeContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Code asset version details.
     */
    export interface CodeVersionResponse {
        /**
         * Uri where code is located
         */
        codeUri?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * codeVersionResponseProvideDefaults sets the appropriate defaults for CodeVersionResponse
     */
    export function codeVersionResponseProvideDefaults(val: CodeVersionResponse): CodeVersionResponse {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Column transformer parameters.
     */
    export interface ColumnTransformerResponse {
        /**
         * Fields to apply transformer logic on.
         */
        fields?: string[];
        /**
         * Different properties to be passed to transformer.
         * Input expected is dictionary of key,value pairs in JSON format.
         */
        parameters?: any;
    }

    /**
     * Command Job limit class.
     */
    export interface CommandJobLimitsResponse {
        /**
         *
         * Expected value is 'Command'.
         */
        jobLimitsType: "Command";
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: string;
    }

    /**
     * Command job definition.
     */
    export interface CommandJobResponse {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: string;
        /**
         * [Required] The command to execute on startup of the job. eg. "python train.py"
         */
        command: string;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        distribution?: MpiResponse | PyTorchResponse | TensorFlowResponse;
        /**
         * [Required] The ARM resource ID of the Environment specification for the job.
         */
        environmentId: string;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: {[key: string]: CustomModelJobInputResponse | LiteralJobInputResponse | MLFlowModelJobInputResponse | MLTableJobInputResponse | TritonModelJobInputResponse | UriFileJobInputResponse | UriFolderJobInputResponse};
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Command'.
         */
        jobType: "Command";
        /**
         * Command Job limit.
         */
        limits?: CommandJobLimitsResponse;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * Input parameters.
         */
        parameters: any;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Compute Resource configuration for the job.
         */
        resources?: ResourceConfigurationResponse;
        /**
         * Schedule definition of job.
         * If no schedule is provided, the job is run once and immediately after submission.
         */
        schedule?: CronScheduleResponse | RecurrenceScheduleResponse;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * commandJobResponseProvideDefaults sets the appropriate defaults for CommandJobResponse
     */
    export function commandJobResponseProvideDefaults(val: CommandJobResponse): CommandJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            resources: (val.resources ? resourceConfigurationResponseProvideDefaults(val.resources) : undefined),
        };
    }

    /**
     * Component container definition.
     * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
     */
    export interface ComponentContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * componentContainerResponseProvideDefaults sets the appropriate defaults for ComponentContainerResponse
     */
    export function componentContainerResponseProvideDefaults(val: ComponentContainerResponse): ComponentContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Definition of a component version: defines resources that span component types.
     */
    export interface ComponentVersionResponse {
        /**
         * Defines Component definition details.
         * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
         */
        componentSpec?: any;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * componentVersionResponseProvideDefaults sets the appropriate defaults for ComponentVersionResponse
     */
    export function componentVersionResponseProvideDefaults(val: ComponentVersionResponse): ComponentVersionResponse {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Resource requirements for each container instance within an online deployment.
     */
    export interface ContainerResourceRequirementsResponse {
        /**
         * Container resource limit info:
         */
        containerResourceLimits?: ContainerResourceSettingsResponse;
        /**
         * Container resource request info:
         */
        containerResourceRequests?: ContainerResourceSettingsResponse;
    }

    export interface ContainerResourceSettingsResponse {
        /**
         * Number of vCPUs request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpu?: string;
        /**
         * Number of Nvidia GPU cards request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        gpu?: string;
        /**
         * Memory size request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memory?: string;
    }

    /**
     * Cron schedule definition
     */
    export interface CronScheduleResponse {
        /**
         * Specifies end time of schedule in ISO 8601 format.
         * If not present, the schedule will run indefinitely
         */
        endTime?: string;
        /**
         * [Required] Specifies cron expression of schedule.
         * The expression should follow NCronTab format.
         */
        expression: string;
        /**
         * Specifies the schedule's status
         */
        scheduleStatus?: string;
        /**
         * Enum to describe type of schedule
         * Expected value is 'Cron'.
         */
        scheduleType: "Cron";
        /**
         * Specifies start time of schedule in ISO 8601 format.
         */
        startTime?: string;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format.
         */
        timeZone?: string;
    }
    /**
     * cronScheduleResponseProvideDefaults sets the appropriate defaults for CronScheduleResponse
     */
    export function cronScheduleResponseProvideDefaults(val: CronScheduleResponse): CronScheduleResponse {
        return {
            ...val,
            scheduleStatus: (val.scheduleStatus) ?? "Enabled",
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    /**
     * The desired maximum forecast horizon in units of time-series frequency.
     */
    export interface CustomForecastHorizonResponse {
        /**
         * Enum to determine forecast horizon selection mode.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] Forecast horizon value.
         */
        value: number;
    }

    export interface CustomModelJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'CustomModel'.
         */
        jobInputType: "CustomModel";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * customModelJobInputResponseProvideDefaults sets the appropriate defaults for CustomModelJobInputResponse
     */
    export function customModelJobInputResponseProvideDefaults(val: CustomModelJobInputResponse): CustomModelJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface CustomModelJobOutputResponse {
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'CustomModel'.
         */
        jobOutputType: "CustomModel";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * customModelJobOutputResponseProvideDefaults sets the appropriate defaults for CustomModelJobOutputResponse
     */
    export function customModelJobOutputResponseProvideDefaults(val: CustomModelJobOutputResponse): CustomModelJobOutputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * N-Cross validations are specified by user.
     */
    export interface CustomNCrossValidationsResponse {
        /**
         * Determines how N-Cross validations value is determined.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] N-Cross validations value.
         */
        value: number;
    }

    export interface CustomSeasonalityResponse {
        /**
         * Forecasting seasonality mode.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] Seasonality value.
         */
        value: number;
    }

    export interface CustomTargetLagsResponse {
        /**
         * Target lags selection modes.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] Set target lags values.
         */
        values: number[];
    }

    export interface CustomTargetRollingWindowSizeResponse {
        /**
         * Target rolling windows size mode.
         * Expected value is 'Custom'.
         */
        mode: "Custom";
        /**
         * [Required] TargetRollingWindowSize value.
         */
        value: number;
    }

    /**
     * Container for data asset versions.
     */
    export interface DataContainerResponse {
        /**
         * [Required] Specifies the type of data.
         */
        dataType: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * dataContainerResponseProvideDefaults sets the appropriate defaults for DataContainerResponse
     */
    export function dataContainerResponseProvideDefaults(val: DataContainerResponse): DataContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Reference to an asset via its path in a datastore.
     */
    export interface DataPathAssetReferenceResponse {
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: string;
        /**
         * The path of the file/directory in the datastore.
         */
        path?: string;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'DataPath'.
         */
        referenceType: "DataPath";
    }

    export interface DefaultScaleSettingsResponse {
        /**
         *
         * Expected value is 'Default'.
         */
        scaleType: "Default";
    }

    /**
     * Container for environment specification versions.
     */
    export interface EnvironmentContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * environmentContainerResponseProvideDefaults sets the appropriate defaults for EnvironmentContainerResponse
     */
    export function environmentContainerResponseProvideDefaults(val: EnvironmentContainerResponse): EnvironmentContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Environment version details.
     */
    export interface EnvironmentVersionResponse {
        /**
         * Configuration settings for Docker build context.
         */
        build?: BuildContextResponse;
        /**
         * Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.
         * <see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" />
         */
        condaFile?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Environment type is either user managed or curated by the Azure ML service
         * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/resource-curated-environments" />
         */
        environmentType: string;
        /**
         * Name of the image that will be used for the environment.
         * <seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
         */
        image?: string;
        /**
         * Defines configuration specific to inference.
         */
        inferenceConfig?: InferenceContainerPropertiesResponse;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The OS type of the environment.
         */
        osType?: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * environmentVersionResponseProvideDefaults sets the appropriate defaults for EnvironmentVersionResponse
     */
    export function environmentVersionResponseProvideDefaults(val: EnvironmentVersionResponse): EnvironmentVersionResponse {
        return {
            ...val,
            build: (val.build ? buildContextResponseProvideDefaults(val.build) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
            osType: (val.osType) ?? "Linux",
        };
    }

    export interface FlavorDataResponse {
        /**
         * Model flavor-specific data.
         */
        data?: {[key: string]: string};
    }

    /**
     * Forecasting task in AutoML Table vertical.
     */
    export interface ForecastingResponse {
        /**
         * Allowed models for forecasting task.
         */
        allowedModels?: string[];
        /**
         * Blocked models for forecasting task.
         */
        blockedModels?: string[];
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: TableVerticalDataSettingsResponse;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: TableVerticalFeaturizationSettingsResponse;
        /**
         * Forecasting task specific inputs.
         */
        forecastingSettings?: ForecastingSettingsResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: TableVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for forecasting task.
         */
        primaryMetric?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Forecasting'.
         */
        taskType: "Forecasting";
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: TrainingSettingsResponse;
    }
    /**
     * forecastingResponseProvideDefaults sets the appropriate defaults for ForecastingResponse
     */
    export function forecastingResponseProvideDefaults(val: ForecastingResponse): ForecastingResponse {
        return {
            ...val,
            dataSettings: (val.dataSettings ? tableVerticalDataSettingsResponseProvideDefaults(val.dataSettings) : undefined),
            featurizationSettings: (val.featurizationSettings ? tableVerticalFeaturizationSettingsResponseProvideDefaults(val.featurizationSettings) : undefined),
            forecastingSettings: (val.forecastingSettings ? forecastingSettingsResponseProvideDefaults(val.forecastingSettings) : undefined),
            limitSettings: (val.limitSettings ? tableVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
            trainingSettings: (val.trainingSettings ? trainingSettingsResponseProvideDefaults(val.trainingSettings) : undefined),
        };
    }

    /**
     * Forecasting specific parameters.
     */
    export interface ForecastingSettingsResponse {
        /**
         * Country or region for holidays for forecasting tasks.
         * These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'.
         */
        countryOrRegionForHolidays?: string;
        /**
         * Number of periods between the origin time of one CV fold and the next fold. For
         * example, if `CVStepSize` = 3 for daily data, the origin time for each fold will be
         * three days apart.
         */
        cvStepSize?: number;
        /**
         * Flag for generating lags for the numeric features with 'auto' or null.
         */
        featureLags?: string;
        /**
         * The desired maximum forecast horizon in units of time-series frequency.
         */
        forecastHorizon?: AutoForecastHorizonResponse | CustomForecastHorizonResponse;
        /**
         * When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default.
         */
        frequency?: string;
        /**
         * Set time series seasonality as an integer multiple of the series frequency.
         * If seasonality is set to 'auto', it will be inferred.
         */
        seasonality?: AutoSeasonalityResponse | CustomSeasonalityResponse;
        /**
         * The parameter defining how if AutoML should handle short time series.
         */
        shortSeriesHandlingConfig?: string;
        /**
         * The function to be used to aggregate the time series target column to conform to a user specified frequency.
         * If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean".
         */
        targetAggregateFunction?: string;
        /**
         * The number of past periods to lag from the target column.
         */
        targetLags?: AutoTargetLagsResponse | CustomTargetLagsResponse;
        /**
         * The number of past periods used to create a rolling window average of the target column.
         */
        targetRollingWindowSize?: AutoTargetRollingWindowSizeResponse | CustomTargetRollingWindowSizeResponse;
        /**
         * The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency.
         */
        timeColumnName?: string;
        /**
         * The names of columns used to group a timeseries. It can be used to create multiple series.
         * If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting.
         */
        timeSeriesIdColumnNames?: string[];
        /**
         * Configure STL Decomposition of the time-series target column.
         */
        useStl?: string;
    }
    /**
     * forecastingSettingsResponseProvideDefaults sets the appropriate defaults for ForecastingSettingsResponse
     */
    export function forecastingSettingsResponseProvideDefaults(val: ForecastingSettingsResponse): ForecastingSettingsResponse {
        return {
            ...val,
            featureLags: (val.featureLags) ?? "None",
            shortSeriesHandlingConfig: (val.shortSeriesHandlingConfig) ?? "Auto",
            targetAggregateFunction: (val.targetAggregateFunction) ?? "None",
            useStl: (val.useStl) ?? "None",
        };
    }

    /**
     * Defines a Sampling Algorithm that exhaustively generates every value combination in the space
     */
    export interface GridSamplingAlgorithmResponse {
        /**
         *
         * Expected value is 'Grid'.
         */
        samplingAlgorithmType: "Grid";
    }

    export interface HdfsDatastoreResponse {
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | KerberosKeytabCredentialsResponse | KerberosPasswordCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'Hdfs'.
         */
        datastoreType: "Hdfs";
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * The TLS cert of the HDFS server. Needs to be a base64 encoded string. Required if "Https" protocol is selected.
         */
        hdfsServerCertificate?: string;
        /**
         * Readonly property to indicate if datastore is the workspace default datastore
         */
        isDefault: boolean;
        /**
         * [Required] IP Address or DNS HostName.
         */
        nameNodeAddress: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Protocol used to communicate with the storage account (Https/Http).
         */
        protocol?: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * hdfsDatastoreResponseProvideDefaults sets the appropriate defaults for HdfsDatastoreResponse
     */
    export function hdfsDatastoreResponseProvideDefaults(val: HdfsDatastoreResponse): HdfsDatastoreResponse {
        return {
            ...val,
            protocol: (val.protocol) ?? "http",
        };
    }

    /**
     * Reference to an asset via its ARM resource ID.
     */
    export interface IdAssetReferenceResponse {
        /**
         * [Required] ARM resource ID of the asset.
         */
        assetId: string;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'Id'.
         */
        referenceType: "Id";
    }

    /**
     * Image Classification Multilabel. Multi-label image classification is used when an image could have one or more labels
     * from a set of labels - e.g. an image could be labeled with both 'cat' and 'dog'.
     */
    export interface ImageClassificationMultilabelResponse {
        /**
         * [Required] Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
         */
        dataSettings: ImageVerticalDataSettingsResponse;
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: ImageLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Settings used for training the model.
         */
        modelSettings?: ImageModelSettingsClassificationResponse;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: ImageModelDistributionSettingsClassificationResponse[];
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: ImageSweepSettingsResponse;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageClassificationMultilabel'.
         */
        taskType: "ImageClassificationMultilabel";
    }
    /**
     * imageClassificationMultilabelResponseProvideDefaults sets the appropriate defaults for ImageClassificationMultilabelResponse
     */
    export function imageClassificationMultilabelResponseProvideDefaults(val: ImageClassificationMultilabelResponse): ImageClassificationMultilabelResponse {
        return {
            ...val,
            dataSettings: imageVerticalDataSettingsResponseProvideDefaults(val.dataSettings),
            limitSettings: imageLimitSettingsResponseProvideDefaults(val.limitSettings),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? imageModelSettingsClassificationResponseProvideDefaults(val.modelSettings) : undefined),
            primaryMetric: (val.primaryMetric) ?? "IOU",
        };
    }

    /**
     * Image Classification. Multi-class image classification is used when an image is classified with only a single label
     * from a set of classes - e.g. each image is classified as either an image of a 'cat' or a 'dog' or a 'duck'.
     */
    export interface ImageClassificationResponse {
        /**
         * [Required] Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
         */
        dataSettings: ImageVerticalDataSettingsResponse;
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: ImageLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Settings used for training the model.
         */
        modelSettings?: ImageModelSettingsClassificationResponse;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: ImageModelDistributionSettingsClassificationResponse[];
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: ImageSweepSettingsResponse;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageClassification'.
         */
        taskType: "ImageClassification";
    }
    /**
     * imageClassificationResponseProvideDefaults sets the appropriate defaults for ImageClassificationResponse
     */
    export function imageClassificationResponseProvideDefaults(val: ImageClassificationResponse): ImageClassificationResponse {
        return {
            ...val,
            dataSettings: imageVerticalDataSettingsResponseProvideDefaults(val.dataSettings),
            limitSettings: imageLimitSettingsResponseProvideDefaults(val.limitSettings),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? imageModelSettingsClassificationResponseProvideDefaults(val.modelSettings) : undefined),
            primaryMetric: (val.primaryMetric) ?? "Accuracy",
        };
    }

    /**
     * Image Instance Segmentation. Instance segmentation is used to identify objects in an image at the pixel level,
     * drawing a polygon around each object in the image.
     */
    export interface ImageInstanceSegmentationResponse {
        /**
         * [Required] Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
         */
        dataSettings: ImageVerticalDataSettingsResponse;
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: ImageLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Settings used for training the model.
         */
        modelSettings?: ImageModelSettingsObjectDetectionResponse;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: ImageModelDistributionSettingsObjectDetectionResponse[];
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: ImageSweepSettingsResponse;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageInstanceSegmentation'.
         */
        taskType: "ImageInstanceSegmentation";
    }
    /**
     * imageInstanceSegmentationResponseProvideDefaults sets the appropriate defaults for ImageInstanceSegmentationResponse
     */
    export function imageInstanceSegmentationResponseProvideDefaults(val: ImageInstanceSegmentationResponse): ImageInstanceSegmentationResponse {
        return {
            ...val,
            dataSettings: imageVerticalDataSettingsResponseProvideDefaults(val.dataSettings),
            limitSettings: imageLimitSettingsResponseProvideDefaults(val.limitSettings),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? imageModelSettingsObjectDetectionResponseProvideDefaults(val.modelSettings) : undefined),
            primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
        };
    }

    /**
     * Limit settings for the AutoML job.
     */
    export interface ImageLimitSettingsResponse {
        /**
         * Maximum number of concurrent AutoML iterations.
         */
        maxConcurrentTrials?: number;
        /**
         * Maximum number of AutoML iterations.
         */
        maxTrials?: number;
        /**
         * AutoML job timeout.
         */
        timeout?: string;
    }
    /**
     * imageLimitSettingsResponseProvideDefaults sets the appropriate defaults for ImageLimitSettingsResponse
     */
    export function imageLimitSettingsResponseProvideDefaults(val: ImageLimitSettingsResponse): ImageLimitSettingsResponse {
        return {
            ...val,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxTrials: (val.maxTrials) ?? 1,
        };
    }

    /**
     * Distribution expressions to sweep over values of model settings.
     * <example>
     * Some examples are:
     * <code>
     * ModelName = "choice('seresnext', 'resnest50')";
     * LearningRate = "uniform(0.001, 0.01)";
     * LayersToFreeze = "choice(0, 2)";
     * </code></example>
     * For more details on how to compose distribution expressions please check the documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-tune-hyperparameters
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelDistributionSettingsClassificationResponse {
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: string;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: string;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: string;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: string;
        /**
         * Whether to use distributer training.
         */
        distributed?: string;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: string;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: string;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: string;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: string;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: string;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: string;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: string;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: string;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: string;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: string;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: string;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: string;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: string;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: string;
        /**
         * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
         */
        optimizer?: string;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: string;
        /**
         * If validation data is not defined, this specifies the split ratio for splitting
         * train data into random train and validation subsets. Must be a float in the range [0, 1].
         */
        splitRatio?: string;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: string;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: string;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: string;
        /**
         * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
         */
        trainingCropSize?: string;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: string;
        /**
         * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
         */
        validationCropSize?: string;
        /**
         * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
         */
        validationResizeSize?: string;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: string;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: string;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: string;
        /**
         * Weighted loss. The accepted values are 0 for no weighted loss.
         * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
         */
        weightedLoss?: string;
    }

    /**
     * Distribution expressions to sweep over values of model settings.
     * <example>
     * Some examples are:
     * <code>
     * ModelName = "choice('seresnext', 'resnest50')";
     * LearningRate = "uniform(0.001, 0.01)";
     * LayersToFreeze = "choice(0, 2)";
     * </code></example>
     * For more details on how to compose distribution expressions please check the documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-tune-hyperparameters
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelDistributionSettingsObjectDetectionResponse {
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: string;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: string;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: string;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: string;
        /**
         * Maximum number of detections per image, for all classes. Must be a positive integer.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        boxDetectionsPerImage?: string;
        /**
         * During inference, only return proposals with a classification score greater than
         * BoxScoreThreshold. Must be a float in the range[0, 1].
         */
        boxScoreThreshold?: string;
        /**
         * Whether to use distributer training.
         */
        distributed?: string;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: string;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: string;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: string;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: string;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: string;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: string;
        /**
         * Image size for train and validation. Must be a positive integer.
         * Note: The training run may get into CUDA OOM if the size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        imageSize?: string;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: string;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: string;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: string;
        /**
         * Maximum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        maxSize?: string;
        /**
         * Minimum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        minSize?: string;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: string;
        /**
         * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
         * Note: training run may get into CUDA OOM if the model size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        modelSize?: string;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: string;
        /**
         * Enable multi-scale image by varying image size by +/- 50%.
         * Note: training run may get into CUDA OOM if no sufficient GPU memory.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        multiScale?: string;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: string;
        /**
         * IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1].
         */
        nmsIouThreshold?: string;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: string;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: string;
        /**
         * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
         */
        optimizer?: string;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: string;
        /**
         * If validation data is not defined, this specifies the split ratio for splitting
         * train data into random train and validation subsets. Must be a float in the range [0, 1].
         */
        splitRatio?: string;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: string;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: string;
        /**
         * The grid size to use for tiling each image. Note: TileGridSize must not be
         * None to enable small object detection logic. A string containing two integers in mxn format.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileGridSize?: string;
        /**
         * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileOverlapRatio?: string;
        /**
         * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
         * Used in validation/ inference. Must be float in the range [0, 1].
         * Note: This settings is not supported for the 'yolov5' algorithm.
         * NMS: Non-maximum suppression
         */
        tilePredictionsNmsThreshold?: string;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: string;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: string;
        /**
         * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
         */
        validationIouThreshold?: string;
        /**
         * Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'.
         */
        validationMetricType?: string;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: string;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: string;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: string;
    }

    /**
     * Settings used for training the model.
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelSettingsClassificationResponse {
        /**
         * Settings for advanced scenarios.
         */
        advancedSettings?: string;
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: boolean;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: string;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: number;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: number;
        /**
         * FileDataset id for pretrained checkpoint(s) for incremental training.
         * Make sure to pass CheckpointFilename along with CheckpointDatasetId.
         */
        checkpointDatasetId?: string;
        /**
         * The pretrained checkpoint filename in FileDataset for incremental training.
         * Make sure to pass CheckpointDatasetId along with CheckpointFilename.
         */
        checkpointFilename?: string;
        /**
         * Frequency to store model checkpoints. Must be a positive integer.
         */
        checkpointFrequency?: number;
        /**
         * The id of a previous run that has a pretrained checkpoint for incremental training.
         */
        checkpointRunId?: string;
        /**
         * Whether to use distributed training.
         */
        distributed?: boolean;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: boolean;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: number;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: number;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: boolean;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: number;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: number;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: number;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: number;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: string;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: string;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: number;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: boolean;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: number;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: number;
        /**
         * Type of optimizer.
         */
        optimizer?: string;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: number;
        /**
         * If validation data is not defined, this specifies the split ratio for splitting
         * train data into random train and validation subsets. Must be a float in the range [0, 1].
         */
        splitRatio?: number;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: number;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: number;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: number;
        /**
         * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
         */
        trainingCropSize?: number;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: number;
        /**
         * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
         */
        validationCropSize?: number;
        /**
         * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
         */
        validationResizeSize?: number;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: number;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: number;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: number;
        /**
         * Weighted loss. The accepted values are 0 for no weighted loss.
         * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
         */
        weightedLoss?: number;
    }
    /**
     * imageModelSettingsClassificationResponseProvideDefaults sets the appropriate defaults for ImageModelSettingsClassificationResponse
     */
    export function imageModelSettingsClassificationResponseProvideDefaults(val: ImageModelSettingsClassificationResponse): ImageModelSettingsClassificationResponse {
        return {
            ...val,
            learningRateScheduler: (val.learningRateScheduler) ?? "None",
            optimizer: (val.optimizer) ?? "None",
        };
    }

    /**
     * Settings used for training the model.
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelSettingsObjectDetectionResponse {
        /**
         * Settings for advanced scenarios.
         */
        advancedSettings?: string;
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: boolean;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: string;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: number;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: number;
        /**
         * Maximum number of detections per image, for all classes. Must be a positive integer.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        boxDetectionsPerImage?: number;
        /**
         * During inference, only return proposals with a classification score greater than
         * BoxScoreThreshold. Must be a float in the range[0, 1].
         */
        boxScoreThreshold?: number;
        /**
         * FileDataset id for pretrained checkpoint(s) for incremental training.
         * Make sure to pass CheckpointFilename along with CheckpointDatasetId.
         */
        checkpointDatasetId?: string;
        /**
         * The pretrained checkpoint filename in FileDataset for incremental training.
         * Make sure to pass CheckpointDatasetId along with CheckpointFilename.
         */
        checkpointFilename?: string;
        /**
         * Frequency to store model checkpoints. Must be a positive integer.
         */
        checkpointFrequency?: number;
        /**
         * The id of a previous run that has a pretrained checkpoint for incremental training.
         */
        checkpointRunId?: string;
        /**
         * Whether to use distributed training.
         */
        distributed?: boolean;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: boolean;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: number;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: number;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: boolean;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: number;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: number;
        /**
         * Image size for train and validation. Must be a positive integer.
         * Note: The training run may get into CUDA OOM if the size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        imageSize?: number;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: number;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: number;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: string;
        /**
         * Maximum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        maxSize?: number;
        /**
         * Minimum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        minSize?: number;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: string;
        /**
         * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
         * Note: training run may get into CUDA OOM if the model size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        modelSize?: string;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: number;
        /**
         * Enable multi-scale image by varying image size by +/- 50%.
         * Note: training run may get into CUDA OOM if no sufficient GPU memory.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        multiScale?: boolean;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: boolean;
        /**
         * IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1].
         */
        nmsIouThreshold?: number;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: number;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: number;
        /**
         * Type of optimizer.
         */
        optimizer?: string;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: number;
        /**
         * If validation data is not defined, this specifies the split ratio for splitting
         * train data into random train and validation subsets. Must be a float in the range [0, 1].
         */
        splitRatio?: number;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: number;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: number;
        /**
         * The grid size to use for tiling each image. Note: TileGridSize must not be
         * None to enable small object detection logic. A string containing two integers in mxn format.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileGridSize?: string;
        /**
         * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileOverlapRatio?: number;
        /**
         * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
         * Used in validation/ inference. Must be float in the range [0, 1].
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tilePredictionsNmsThreshold?: number;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: number;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: number;
        /**
         * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
         */
        validationIouThreshold?: number;
        /**
         * Metric computation method to use for validation metrics.
         */
        validationMetricType?: string;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: number;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: number;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: number;
    }
    /**
     * imageModelSettingsObjectDetectionResponseProvideDefaults sets the appropriate defaults for ImageModelSettingsObjectDetectionResponse
     */
    export function imageModelSettingsObjectDetectionResponseProvideDefaults(val: ImageModelSettingsObjectDetectionResponse): ImageModelSettingsObjectDetectionResponse {
        return {
            ...val,
            learningRateScheduler: (val.learningRateScheduler) ?? "None",
            modelSize: (val.modelSize) ?? "None",
            optimizer: (val.optimizer) ?? "None",
            validationMetricType: (val.validationMetricType) ?? "None",
        };
    }

    /**
     * Image Object Detection. Object detection is used to identify objects in an image and locate each object with a
     * bounding box e.g. locate all dogs and cats in an image and draw a bounding box around each.
     */
    export interface ImageObjectDetectionResponse {
        /**
         * [Required] Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
         */
        dataSettings: ImageVerticalDataSettingsResponse;
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: ImageLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Settings used for training the model.
         */
        modelSettings?: ImageModelSettingsObjectDetectionResponse;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: string;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: ImageModelDistributionSettingsObjectDetectionResponse[];
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: ImageSweepSettingsResponse;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageObjectDetection'.
         */
        taskType: "ImageObjectDetection";
    }
    /**
     * imageObjectDetectionResponseProvideDefaults sets the appropriate defaults for ImageObjectDetectionResponse
     */
    export function imageObjectDetectionResponseProvideDefaults(val: ImageObjectDetectionResponse): ImageObjectDetectionResponse {
        return {
            ...val,
            dataSettings: imageVerticalDataSettingsResponseProvideDefaults(val.dataSettings),
            limitSettings: imageLimitSettingsResponseProvideDefaults(val.limitSettings),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? imageModelSettingsObjectDetectionResponseProvideDefaults(val.modelSettings) : undefined),
            primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
        };
    }

    /**
     * Limit settings for model sweeping and hyperparameter sweeping.
     */
    export interface ImageSweepLimitSettingsResponse {
        /**
         * Maximum number of concurrent iterations for the underlying Sweep job.
         */
        maxConcurrentTrials?: number;
        /**
         * Maximum number of iterations for the underlying Sweep job.
         */
        maxTrials?: number;
    }

    /**
     * Model sweeping and hyperparameter sweeping related settings.
     */
    export interface ImageSweepSettingsResponse {
        /**
         * Type of early termination policy.
         */
        earlyTermination?: BanditPolicyResponse | MedianStoppingPolicyResponse | TruncationSelectionPolicyResponse;
        /**
         * [Required] Limit settings for model sweeping and hyperparameter sweeping.
         */
        limits: ImageSweepLimitSettingsResponse;
        /**
         * [Required] Type of the hyperparameter sampling algorithms.
         */
        samplingAlgorithm: string;
    }

    /**
     * Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
     */
    export interface ImageVerticalDataSettingsResponse {
        /**
         * [Required] Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName: string;
        /**
         * Test data input.
         */
        testData?: TestDataSettingsResponse;
        /**
         * [Required] Training data input.
         */
        trainingData: TrainingDataSettingsResponse;
        /**
         * Settings for the validation dataset.
         */
        validationData?: ImageVerticalValidationDataSettingsResponse;
    }
    /**
     * imageVerticalDataSettingsResponseProvideDefaults sets the appropriate defaults for ImageVerticalDataSettingsResponse
     */
    export function imageVerticalDataSettingsResponseProvideDefaults(val: ImageVerticalDataSettingsResponse): ImageVerticalDataSettingsResponse {
        return {
            ...val,
            testData: (val.testData ? testDataSettingsResponseProvideDefaults(val.testData) : undefined),
            trainingData: trainingDataSettingsResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? imageVerticalValidationDataSettingsResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    export interface ImageVerticalValidationDataSettingsResponse {
        /**
         * Validation data MLTable.
         */
        data?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
    }
    /**
     * imageVerticalValidationDataSettingsResponseProvideDefaults sets the appropriate defaults for ImageVerticalValidationDataSettingsResponse
     */
    export function imageVerticalValidationDataSettingsResponseProvideDefaults(val: ImageVerticalValidationDataSettingsResponse): ImageVerticalValidationDataSettingsResponse {
        return {
            ...val,
            data: (val.data ? mltableJobInputResponseProvideDefaults(val.data) : undefined),
        };
    }

    export interface InferenceContainerPropertiesResponse {
        /**
         * The route to check the liveness of the inference server container.
         */
        livenessRoute?: RouteResponse;
        /**
         * The route to check the readiness of the inference server container.
         */
        readinessRoute?: RouteResponse;
        /**
         * The port to send the scoring requests to, within the inference server container.
         */
        scoringRoute?: RouteResponse;
    }

    /**
     * Job endpoint definition
     */
    export interface JobServiceResponse {
        /**
         * Url for endpoint.
         */
        endpoint?: string;
        /**
         * Any error in the service.
         */
        errorMessage: string;
        /**
         * Endpoint type.
         */
        jobServiceType?: string;
        /**
         * Port for endpoint.
         */
        port?: number;
        /**
         * Additional properties to set on the endpoint.
         */
        properties?: {[key: string]: string};
        /**
         * Status of endpoint.
         */
        status: string;
    }

    export interface KerberosKeytabCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'KerberosKeytab'.
         */
        credentialsType: "KerberosKeytab";
        /**
         * [Required] IP Address or DNS HostName.
         */
        kerberosKdcAddress: string;
        /**
         * [Required] Kerberos Username
         */
        kerberosPrincipal: string;
        /**
         * [Required] Domain over which a Kerberos authentication server has the authority to authenticate a user, host or service.
         */
        kerberosRealm: string;
    }

    export interface KerberosPasswordCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'KerberosPassword'.
         */
        credentialsType: "KerberosPassword";
        /**
         * [Required] IP Address or DNS HostName.
         */
        kerberosKdcAddress: string;
        /**
         * [Required] Kerberos Username
         */
        kerberosPrincipal: string;
        /**
         * [Required] Domain over which a Kerberos authentication server has the authority to authenticate a user, host or service.
         */
        kerberosRealm: string;
    }

    /**
     * Properties specific to a KubernetesOnlineDeployment.
     */
    export interface KubernetesOnlineDeploymentResponse {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: boolean;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: CodeConfigurationResponse;
        /**
         * The resource requirements for the container (cpu and memory).
         */
        containerResourceRequirements?: ContainerResourceRequirementsResponse;
        /**
         * Description of the endpoint deployment.
         */
        description?: string;
        /**
         * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
         */
        egressPublicNetworkAccess?: string;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'Kubernetes'.
         */
        endpointComputeType: "Kubernetes";
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: string;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Compute instance type.
         */
        instanceType?: string;
        /**
         * Liveness probe monitors the health of the container regularly.
         */
        livenessProbe?: ProbeSettingsResponse;
        /**
         * The URI path to the model.
         */
        model?: string;
        /**
         * The path to mount the model in custom container.
         */
        modelMountPath?: string;
        /**
         * If true, enable private network connection.
         * DEPRECATED for future API versions. Use EgressPublicNetworkAccess.
         */
        privateNetworkConnection?: boolean;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint deployment.
         */
        provisioningState: string;
        /**
         * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
         */
        readinessProbe?: ProbeSettingsResponse;
        /**
         * Request settings for the deployment.
         */
        requestSettings?: OnlineRequestSettingsResponse;
        /**
         * Scale settings for the deployment.
         * If it is null or not provided,
         * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
         * and to DefaultScaleSettings for ManagedOnlineDeployment.
         */
        scaleSettings?: DefaultScaleSettingsResponse | TargetUtilizationScaleSettingsResponse;
    }
    /**
     * kubernetesOnlineDeploymentResponseProvideDefaults sets the appropriate defaults for KubernetesOnlineDeploymentResponse
     */
    export function kubernetesOnlineDeploymentResponseProvideDefaults(val: KubernetesOnlineDeploymentResponse): KubernetesOnlineDeploymentResponse {
        return {
            ...val,
            appInsightsEnabled: (val.appInsightsEnabled) ?? false,
            egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
            livenessProbe: (val.livenessProbe ? probeSettingsResponseProvideDefaults(val.livenessProbe) : undefined),
            privateNetworkConnection: (val.privateNetworkConnection) ?? false,
            readinessProbe: (val.readinessProbe ? probeSettingsResponseProvideDefaults(val.readinessProbe) : undefined),
            requestSettings: (val.requestSettings ? onlineRequestSettingsResponseProvideDefaults(val.requestSettings) : undefined),
        };
    }

    /**
     * Literal input type.
     */
    export interface LiteralJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'Literal'.
         */
        jobInputType: "Literal";
        /**
         * [Required] Literal value for the input.
         */
        value: string;
    }

    export interface MLFlowModelJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'MLFlowModel'.
         */
        jobInputType: "MLFlowModel";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * mlflowModelJobInputResponseProvideDefaults sets the appropriate defaults for MLFlowModelJobInputResponse
     */
    export function mlflowModelJobInputResponseProvideDefaults(val: MLFlowModelJobInputResponse): MLFlowModelJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface MLFlowModelJobOutputResponse {
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'MLFlowModel'.
         */
        jobOutputType: "MLFlowModel";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * mlflowModelJobOutputResponseProvideDefaults sets the appropriate defaults for MLFlowModelJobOutputResponse
     */
    export function mlflowModelJobOutputResponseProvideDefaults(val: MLFlowModelJobOutputResponse): MLFlowModelJobOutputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * MLTable data definition
     */
    export interface MLTableDataResponse {
        /**
         * Enum to determine the type of data.
         * Expected value is 'MLTable'.
         */
        dataType: "MLTable";
        /**
         * [Required] Uri of the data. Usage/meaning depends on Microsoft.MachineLearning.ManagementFrontEnd.Contracts.V20220201Preview.Assets.DataVersionBase.DataType
         */
        dataUri: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Uris referenced in the MLTable definition (required for lineage)
         */
        referencedUris?: string[];
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * mltableDataResponseProvideDefaults sets the appropriate defaults for MLTableDataResponse
     */
    export function mltableDataResponseProvideDefaults(val: MLTableDataResponse): MLTableDataResponse {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface MLTableJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'MLTable'.
         */
        jobInputType: "MLTable";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * mltableJobInputResponseProvideDefaults sets the appropriate defaults for MLTableJobInputResponse
     */
    export function mltableJobInputResponseProvideDefaults(val: MLTableJobInputResponse): MLTableJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface MLTableJobOutputResponse {
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'MLTable'.
         */
        jobOutputType: "MLTable";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * mltableJobOutputResponseProvideDefaults sets the appropriate defaults for MLTableJobOutputResponse
     */
    export function mltableJobOutputResponseProvideDefaults(val: MLTableJobOutputResponse): MLTableJobOutputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * Managed identity configuration.
     */
    export interface ManagedIdentityResponse {
        /**
         * Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
         */
        clientId?: string;
        /**
         * Enum to determine identity framework.
         * Expected value is 'Managed'.
         */
        identityType: "Managed";
        /**
         * Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
         */
        objectId?: string;
        /**
         * Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.
         */
        resourceId?: string;
    }

    /**
     * Properties specific to a ManagedOnlineDeployment.
     */
    export interface ManagedOnlineDeploymentResponse {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: boolean;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: CodeConfigurationResponse;
        /**
         * Description of the endpoint deployment.
         */
        description?: string;
        /**
         * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
         */
        egressPublicNetworkAccess?: string;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'Managed'.
         */
        endpointComputeType: "Managed";
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: string;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Compute instance type.
         */
        instanceType?: string;
        /**
         * Liveness probe monitors the health of the container regularly.
         */
        livenessProbe?: ProbeSettingsResponse;
        /**
         * The URI path to the model.
         */
        model?: string;
        /**
         * The path to mount the model in custom container.
         */
        modelMountPath?: string;
        /**
         * If true, enable private network connection.
         * DEPRECATED for future API versions. Use EgressPublicNetworkAccess.
         */
        privateNetworkConnection?: boolean;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint deployment.
         */
        provisioningState: string;
        /**
         * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
         */
        readinessProbe?: ProbeSettingsResponse;
        /**
         * Request settings for the deployment.
         */
        requestSettings?: OnlineRequestSettingsResponse;
        /**
         * Scale settings for the deployment.
         * If it is null or not provided,
         * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
         * and to DefaultScaleSettings for ManagedOnlineDeployment.
         */
        scaleSettings?: DefaultScaleSettingsResponse | TargetUtilizationScaleSettingsResponse;
    }
    /**
     * managedOnlineDeploymentResponseProvideDefaults sets the appropriate defaults for ManagedOnlineDeploymentResponse
     */
    export function managedOnlineDeploymentResponseProvideDefaults(val: ManagedOnlineDeploymentResponse): ManagedOnlineDeploymentResponse {
        return {
            ...val,
            appInsightsEnabled: (val.appInsightsEnabled) ?? false,
            egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
            livenessProbe: (val.livenessProbe ? probeSettingsResponseProvideDefaults(val.livenessProbe) : undefined),
            privateNetworkConnection: (val.privateNetworkConnection) ?? false,
            readinessProbe: (val.readinessProbe ? probeSettingsResponseProvideDefaults(val.readinessProbe) : undefined),
            requestSettings: (val.requestSettings ? onlineRequestSettingsResponseProvideDefaults(val.requestSettings) : undefined),
        };
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Defines an early termination policy based on running averages of the primary metric of all runs
     */
    export interface MedianStoppingPolicyResponse {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: number;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: number;
        /**
         *
         * Expected value is 'MedianStopping'.
         */
        policyType: "MedianStopping";
    }
    /**
     * medianStoppingPolicyResponseProvideDefaults sets the appropriate defaults for MedianStoppingPolicyResponse
     */
    export function medianStoppingPolicyResponseProvideDefaults(val: MedianStoppingPolicyResponse): MedianStoppingPolicyResponse {
        return {
            ...val,
            delayEvaluation: (val.delayEvaluation) ?? 0,
            evaluationInterval: (val.evaluationInterval) ?? 0,
        };
    }

    export interface ModelContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The latest version inside this container.
         */
        latestVersion: string;
        /**
         * The next auto incremental version
         */
        nextVersion: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * modelContainerResponseProvideDefaults sets the appropriate defaults for ModelContainerResponse
     */
    export function modelContainerResponseProvideDefaults(val: ModelContainerResponse): ModelContainerResponse {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Model asset version details.
     */
    export interface ModelVersionResponse {
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Mapping of model flavors to their properties.
         */
        flavors?: {[key: string]: FlavorDataResponse};
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Name of the training job which produced this model
         */
        jobName?: string;
        /**
         * The storage format for this entity. Used for NCD.
         */
        modelType?: string;
        /**
         * The URI path to the model contents.
         */
        modelUri?: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * modelVersionResponseProvideDefaults sets the appropriate defaults for ModelVersionResponse
     */
    export function modelVersionResponseProvideDefaults(val: ModelVersionResponse): ModelVersionResponse {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
            modelType: (val.modelType) ?? "CustomModel",
        };
    }

    /**
     * MPI distribution configuration.
     */
    export interface MpiResponse {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'Mpi'.
         */
        distributionType: "Mpi";
        /**
         * Number of processes per MPI node.
         */
        processCountPerInstance?: number;
    }

    /**
     * Class for data inputs.
     * NLP - Natural Language Processing.
     */
    export interface NlpVerticalDataSettingsResponse {
        /**
         * [Required] Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName: string;
        /**
         * Test data input.
         */
        testData?: TestDataSettingsResponse;
        /**
         * [Required] Training data input.
         */
        trainingData: TrainingDataSettingsResponse;
        /**
         * Validation data inputs.
         */
        validationData?: NlpVerticalValidationDataSettingsResponse;
    }
    /**
     * nlpVerticalDataSettingsResponseProvideDefaults sets the appropriate defaults for NlpVerticalDataSettingsResponse
     */
    export function nlpVerticalDataSettingsResponseProvideDefaults(val: NlpVerticalDataSettingsResponse): NlpVerticalDataSettingsResponse {
        return {
            ...val,
            testData: (val.testData ? testDataSettingsResponseProvideDefaults(val.testData) : undefined),
            trainingData: trainingDataSettingsResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? nlpVerticalValidationDataSettingsResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    export interface NlpVerticalFeaturizationSettingsResponse {
        /**
         * Dataset language, useful for the text data.
         */
        datasetLanguage?: string;
    }

    /**
     * Job execution constraints.
     */
    export interface NlpVerticalLimitSettingsResponse {
        /**
         * Maximum Concurrent AutoML iterations.
         */
        maxConcurrentTrials?: number;
        /**
         * Number of AutoML iterations.
         */
        maxTrials?: number;
        /**
         * AutoML job timeout.
         */
        timeout?: string;
    }
    /**
     * nlpVerticalLimitSettingsResponseProvideDefaults sets the appropriate defaults for NlpVerticalLimitSettingsResponse
     */
    export function nlpVerticalLimitSettingsResponseProvideDefaults(val: NlpVerticalLimitSettingsResponse): NlpVerticalLimitSettingsResponse {
        return {
            ...val,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxTrials: (val.maxTrials) ?? 1,
        };
    }

    export interface NlpVerticalValidationDataSettingsResponse {
        /**
         * Validation data MLTable.
         */
        data?: MLTableJobInputResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
    }
    /**
     * nlpVerticalValidationDataSettingsResponseProvideDefaults sets the appropriate defaults for NlpVerticalValidationDataSettingsResponse
     */
    export function nlpVerticalValidationDataSettingsResponseProvideDefaults(val: NlpVerticalValidationDataSettingsResponse): NlpVerticalValidationDataSettingsResponse {
        return {
            ...val,
            data: (val.data ? mltableJobInputResponseProvideDefaults(val.data) : undefined),
        };
    }

    /**
     * Empty/none datastore credentials.
     */
    export interface NoneDatastoreCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'None'.
         */
        credentialsType: "None";
    }

    /**
     * Optimization objective.
     */
    export interface ObjectiveResponse {
        /**
         * [Required] Defines supported metric goals for hyperparameter tuning
         */
        goal: string;
        /**
         * [Required] Name of the metric to optimize.
         */
        primaryMetric: string;
    }

    /**
     * Online endpoint configuration
     */
    export interface OnlineEndpointResponse {
        /**
         * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
         */
        authMode: string;
        /**
         * ARM resource ID of the compute if it exists.
         * optional
         */
        compute?: string;
        /**
         * Description of the inference endpoint.
         */
        description?: string;
        /**
         * Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50.
         */
        mirrorTraffic?: {[key: string]: number};
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint.
         */
        provisioningState: string;
        /**
         * Set to "Enabled" for endpoints that should allow public access when Private Link is enabled.
         */
        publicNetworkAccess?: string;
        /**
         * Endpoint URI.
         */
        scoringUri: string;
        /**
         * Endpoint Swagger URI.
         */
        swaggerUri: string;
        /**
         * Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100.
         */
        traffic?: {[key: string]: number};
    }
    /**
     * onlineEndpointResponseProvideDefaults sets the appropriate defaults for OnlineEndpointResponse
     */
    export function onlineEndpointResponseProvideDefaults(val: OnlineEndpointResponse): OnlineEndpointResponse {
        return {
            ...val,
            publicNetworkAccess: (val.publicNetworkAccess) ?? "Enabled",
        };
    }

    /**
     * Online deployment scoring requests configuration.
     */
    export interface OnlineRequestSettingsResponse {
        /**
         * The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
         */
        maxConcurrentRequestsPerInstance?: number;
        /**
         * The maximum amount of time a request will stay in the queue in ISO 8601 format.
         * Defaults to 500ms.
         */
        maxQueueWait?: string;
        /**
         * The scoring timeout in ISO 8601 format.
         * Defaults to 5000ms.
         */
        requestTimeout?: string;
    }
    /**
     * onlineRequestSettingsResponseProvideDefaults sets the appropriate defaults for OnlineRequestSettingsResponse
     */
    export function onlineRequestSettingsResponseProvideDefaults(val: OnlineRequestSettingsResponse): OnlineRequestSettingsResponse {
        return {
            ...val,
            maxConcurrentRequestsPerInstance: (val.maxConcurrentRequestsPerInstance) ?? 1,
            maxQueueWait: (val.maxQueueWait) ?? "PT0.5S",
            requestTimeout: (val.requestTimeout) ?? "PT5S",
        };
    }

    /**
     * Reference to an asset via its path in a job output.
     */
    export interface OutputPathAssetReferenceResponse {
        /**
         * ARM resource ID of the job.
         */
        jobId?: string;
        /**
         * The path of the file/directory in the job output.
         */
        path?: string;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'OutputPath'.
         */
        referenceType: "OutputPath";
    }

    /**
     * Pipeline Job definition: defines generic to MFE attributes.
     */
    export interface PipelineJobResponse {
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Inputs for the pipeline job.
         */
        inputs?: {[key: string]: CustomModelJobInputResponse | LiteralJobInputResponse | MLFlowModelJobInputResponse | MLTableJobInputResponse | TritonModelJobInputResponse | UriFileJobInputResponse | UriFolderJobInputResponse};
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Pipeline'.
         */
        jobType: "Pipeline";
        /**
         * Jobs construct the Pipeline Job.
         */
        jobs?: {[key: string]: any};
        /**
         * Outputs for the pipeline job
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Schedule definition of job.
         * If no schedule is provided, the job is run once and immediately after submission.
         */
        schedule?: CronScheduleResponse | RecurrenceScheduleResponse;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Pipeline settings, for things like ContinueRunOnStepFailure etc.
         */
        settings?: any;
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * pipelineJobResponseProvideDefaults sets the appropriate defaults for PipelineJobResponse
     */
    export function pipelineJobResponseProvideDefaults(val: PipelineJobResponse): PipelineJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Deployment container liveness/readiness probe configuration.
     */
    export interface ProbeSettingsResponse {
        /**
         * The number of failures to allow before returning an unhealthy status.
         */
        failureThreshold?: number;
        /**
         * The delay before the first probe in ISO 8601 format.
         */
        initialDelay?: string;
        /**
         * The length of time between probes in ISO 8601 format.
         */
        period?: string;
        /**
         * The number of successful probes before returning a healthy status.
         */
        successThreshold?: number;
        /**
         * The probe timeout in ISO 8601 format.
         */
        timeout?: string;
    }
    /**
     * probeSettingsResponseProvideDefaults sets the appropriate defaults for ProbeSettingsResponse
     */
    export function probeSettingsResponseProvideDefaults(val: ProbeSettingsResponse): ProbeSettingsResponse {
        return {
            ...val,
            failureThreshold: (val.failureThreshold) ?? 30,
            period: (val.period) ?? "PT10S",
            successThreshold: (val.successThreshold) ?? 1,
            timeout: (val.timeout) ?? "PT2S",
        };
    }

    /**
     * PyTorch distribution configuration.
     */
    export interface PyTorchResponse {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'PyTorch'.
         */
        distributionType: "PyTorch";
        /**
         * Number of processes per node.
         */
        processCountPerInstance?: number;
    }

    /**
     * Defines a Sampling Algorithm that generates values randomly
     */
    export interface RandomSamplingAlgorithmResponse {
        /**
         * The specific type of random algorithm
         */
        rule?: string;
        /**
         *
         * Expected value is 'Random'.
         */
        samplingAlgorithmType: "Random";
        /**
         * An optional integer to use as the seed for random number generation
         */
        seed?: number;
    }
    /**
     * randomSamplingAlgorithmResponseProvideDefaults sets the appropriate defaults for RandomSamplingAlgorithmResponse
     */
    export function randomSamplingAlgorithmResponseProvideDefaults(val: RandomSamplingAlgorithmResponse): RandomSamplingAlgorithmResponse {
        return {
            ...val,
            rule: (val.rule) ?? "Random",
        };
    }

    /**
     * Recurrence schedule pattern definition
     */
    export interface RecurrencePatternResponse {
        /**
         * [Required] List of hours for recurrence schedule pattern
         */
        hours: number[];
        /**
         * [Required] List of minutes for recurrence schedule pattern
         */
        minutes: number[];
        /**
         * List of weekdays for recurrence schedule pattern
         */
        weekdays?: string[];
    }

    /**
     * Recurrence schedule definition
     */
    export interface RecurrenceScheduleResponse {
        /**
         * Specifies end time of schedule in ISO 8601 format.
         * If not present, the schedule will run indefinitely
         */
        endTime?: string;
        /**
         * [Required] Specifies frequency with with which to trigger schedule
         */
        frequency: string;
        /**
         * [Required] Specifies schedule interval in conjunction with frequency
         */
        interval: number;
        /**
         * Specifies the recurrence schedule pattern
         */
        pattern?: RecurrencePatternResponse;
        /**
         * Specifies the schedule's status
         */
        scheduleStatus?: string;
        /**
         * Enum to describe type of schedule
         * Expected value is 'Recurrence'.
         */
        scheduleType: "Recurrence";
        /**
         * Specifies start time of schedule in ISO 8601 format.
         */
        startTime?: string;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format.
         */
        timeZone?: string;
    }
    /**
     * recurrenceScheduleResponseProvideDefaults sets the appropriate defaults for RecurrenceScheduleResponse
     */
    export function recurrenceScheduleResponseProvideDefaults(val: RecurrenceScheduleResponse): RecurrenceScheduleResponse {
        return {
            ...val,
            scheduleStatus: (val.scheduleStatus) ?? "Enabled",
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    /**
     * Regression task in AutoML Table vertical.
     */
    export interface RegressionResponse {
        /**
         * Allowed models for regression task.
         */
        allowedModels?: string[];
        /**
         * Blocked models for regression task.
         */
        blockedModels?: string[];
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: TableVerticalDataSettingsResponse;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: TableVerticalFeaturizationSettingsResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: TableVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for regression task.
         */
        primaryMetric?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Regression'.
         */
        taskType: "Regression";
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: TrainingSettingsResponse;
    }
    /**
     * regressionResponseProvideDefaults sets the appropriate defaults for RegressionResponse
     */
    export function regressionResponseProvideDefaults(val: RegressionResponse): RegressionResponse {
        return {
            ...val,
            dataSettings: (val.dataSettings ? tableVerticalDataSettingsResponseProvideDefaults(val.dataSettings) : undefined),
            featurizationSettings: (val.featurizationSettings ? tableVerticalFeaturizationSettingsResponseProvideDefaults(val.featurizationSettings) : undefined),
            limitSettings: (val.limitSettings ? tableVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
            trainingSettings: (val.trainingSettings ? trainingSettingsResponseProvideDefaults(val.trainingSettings) : undefined),
        };
    }

    export interface ResourceConfigurationResponse {
        /**
         * Optional number of instances or nodes used by the compute target.
         */
        instanceCount?: number;
        /**
         * Optional type of VM used as supported by the compute target.
         */
        instanceType?: string;
        /**
         * Additional properties bag.
         */
        properties?: {[key: string]: any};
    }
    /**
     * resourceConfigurationResponseProvideDefaults sets the appropriate defaults for ResourceConfigurationResponse
     */
    export function resourceConfigurationResponseProvideDefaults(val: ResourceConfigurationResponse): ResourceConfigurationResponse {
        return {
            ...val,
            instanceCount: (val.instanceCount) ?? 1,
        };
    }

    export interface RouteResponse {
        /**
         * [Required] The path for the route.
         */
        path: string;
        /**
         * [Required] The port for the route.
         */
        port: number;
    }

    /**
     * SAS datastore credentials configuration.
     */
    export interface SasDatastoreCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'Sas'.
         */
        credentialsType: "Sas";
    }

    /**
     * Service Principal datastore credentials configuration.
     */
    export interface ServicePrincipalDatastoreCredentialsResponse {
        /**
         * Authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * [Required] Service principal client ID.
         */
        clientId: string;
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'ServicePrincipal'.
         */
        credentialsType: "ServicePrincipal";
        /**
         * Resource the service principal has access to.
         */
        resourceUrl?: string;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: string;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuResponse {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: number;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: string;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: string;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: string;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: string;
    }

    /**
     * Advances setting to customize StackEnsemble run.
     */
    export interface StackEnsembleSettingsResponse {
        /**
         * Optional parameters to pass to the initializer of the meta-learner.
         */
        stackMetaLearnerKWargs?: any;
        /**
         * Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2.
         */
        stackMetaLearnerTrainPercentage?: number;
        /**
         * The meta-learner is a model trained on the output of the individual heterogeneous models.
         */
        stackMetaLearnerType?: string;
    }
    /**
     * stackEnsembleSettingsResponseProvideDefaults sets the appropriate defaults for StackEnsembleSettingsResponse
     */
    export function stackEnsembleSettingsResponseProvideDefaults(val: StackEnsembleSettingsResponse): StackEnsembleSettingsResponse {
        return {
            ...val,
            stackMetaLearnerTrainPercentage: (val.stackMetaLearnerTrainPercentage) ?? 0.2,
            stackMetaLearnerType: (val.stackMetaLearnerType) ?? "None",
        };
    }

    /**
     * Sweep Job limit class.
     */
    export interface SweepJobLimitsResponse {
        /**
         *
         * Expected value is 'Sweep'.
         */
        jobLimitsType: "Sweep";
        /**
         * Sweep Job max concurrent trials.
         */
        maxConcurrentTrials?: number;
        /**
         * Sweep Job max total trials.
         */
        maxTotalTrials?: number;
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: string;
        /**
         * Sweep Job Trial timeout value.
         */
        trialTimeout?: string;
    }

    /**
     * Sweep job definition.
     */
    export interface SweepJobResponse {
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Display name of job.
         */
        displayName?: string;
        /**
         * Early termination policies enable canceling poor-performing runs before they complete
         */
        earlyTermination?: BanditPolicyResponse | MedianStoppingPolicyResponse | TruncationSelectionPolicyResponse;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse | UserIdentityResponse;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: {[key: string]: CustomModelJobInputResponse | LiteralJobInputResponse | MLFlowModelJobInputResponse | MLTableJobInputResponse | TritonModelJobInputResponse | UriFileJobInputResponse | UriFolderJobInputResponse};
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Sweep'.
         */
        jobType: "Sweep";
        /**
         * Sweep Job limit.
         */
        limits?: SweepJobLimitsResponse;
        /**
         * [Required] Optimization objective.
         */
        objective: ObjectiveResponse;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: {[key: string]: CustomModelJobOutputResponse | MLFlowModelJobOutputResponse | MLTableJobOutputResponse | TritonModelJobOutputResponse | UriFileJobOutputResponse | UriFolderJobOutputResponse};
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * [Required] The hyperparameter sampling algorithm
         */
        samplingAlgorithm: BayesianSamplingAlgorithmResponse | GridSamplingAlgorithmResponse | RandomSamplingAlgorithmResponse;
        /**
         * Schedule definition of job.
         * If no schedule is provided, the job is run once and immediately after submission.
         */
        schedule?: CronScheduleResponse | RecurrenceScheduleResponse;
        /**
         * [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
         */
        searchSpace: any;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: {[key: string]: JobServiceResponse};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
        /**
         * [Required] Trial component definition.
         */
        trial: TrialComponentResponse;
    }
    /**
     * sweepJobResponseProvideDefaults sets the appropriate defaults for SweepJobResponse
     */
    export function sweepJobResponseProvideDefaults(val: SweepJobResponse): SweepJobResponse {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            trial: trialComponentResponseProvideDefaults(val.trial),
        };
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    /**
     * Class for data inputs.
     */
    export interface TableVerticalDataSettingsResponse {
        /**
         * [Required] Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName: string;
        /**
         * Test data input.
         */
        testData?: TestDataSettingsResponse;
        /**
         * [Required] Training data input.
         */
        trainingData: TrainingDataSettingsResponse;
        /**
         * Validation data inputs.
         */
        validationData?: TableVerticalValidationDataSettingsResponse;
        /**
         * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
         */
        weightColumnName?: string;
    }
    /**
     * tableVerticalDataSettingsResponseProvideDefaults sets the appropriate defaults for TableVerticalDataSettingsResponse
     */
    export function tableVerticalDataSettingsResponseProvideDefaults(val: TableVerticalDataSettingsResponse): TableVerticalDataSettingsResponse {
        return {
            ...val,
            testData: (val.testData ? testDataSettingsResponseProvideDefaults(val.testData) : undefined),
            trainingData: trainingDataSettingsResponseProvideDefaults(val.trainingData),
            validationData: (val.validationData ? tableVerticalValidationDataSettingsResponseProvideDefaults(val.validationData) : undefined),
        };
    }

    /**
     * Featurization Configuration.
     */
    export interface TableVerticalFeaturizationSettingsResponse {
        /**
         * These transformers shall not be used in featurization.
         */
        blockedTransformers?: string[];
        /**
         * Dictionary of column name and its type (int, float, string, datetime etc).
         */
        columnNameAndTypes?: {[key: string]: string};
        /**
         * Dataset language, useful for the text data.
         */
        datasetLanguage?: string;
        /**
         * Columns to be dropped from data during featurization.
         */
        dropColumns?: string[];
        /**
         * Determines whether to use Dnn based featurizers for data featurization.
         */
        enableDnnFeaturization?: boolean;
        /**
         * Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.
         * If 'Off' is selected then no featurization is done.
         * If 'Custom' is selected then user can specify additional inputs to customize how featurization is done.
         */
        mode?: string;
        /**
         * User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor.
         */
        transformerParams?: {[key: string]: ColumnTransformerResponse[]};
    }
    /**
     * tableVerticalFeaturizationSettingsResponseProvideDefaults sets the appropriate defaults for TableVerticalFeaturizationSettingsResponse
     */
    export function tableVerticalFeaturizationSettingsResponseProvideDefaults(val: TableVerticalFeaturizationSettingsResponse): TableVerticalFeaturizationSettingsResponse {
        return {
            ...val,
            enableDnnFeaturization: (val.enableDnnFeaturization) ?? false,
            mode: (val.mode) ?? "Auto",
        };
    }

    /**
     * Job execution constraints.
     */
    export interface TableVerticalLimitSettingsResponse {
        /**
         * Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations.
         */
        enableEarlyTermination?: boolean;
        /**
         * Exit score for the AutoML job.
         */
        exitScore?: number;
        /**
         * Maximum Concurrent iterations.
         */
        maxConcurrentTrials?: number;
        /**
         * Max cores per iteration.
         */
        maxCoresPerTrial?: number;
        /**
         * Number of iterations.
         */
        maxTrials?: number;
        /**
         * AutoML job timeout.
         */
        timeout?: string;
        /**
         * Iteration timeout.
         */
        trialTimeout?: string;
    }
    /**
     * tableVerticalLimitSettingsResponseProvideDefaults sets the appropriate defaults for TableVerticalLimitSettingsResponse
     */
    export function tableVerticalLimitSettingsResponseProvideDefaults(val: TableVerticalLimitSettingsResponse): TableVerticalLimitSettingsResponse {
        return {
            ...val,
            enableEarlyTermination: (val.enableEarlyTermination) ?? true,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxCoresPerTrial: (val.maxCoresPerTrial) ?? -1,
            maxTrials: (val.maxTrials) ?? 1000,
            timeout: (val.timeout) ?? "PT6H",
            trialTimeout: (val.trialTimeout) ?? "PT30M",
        };
    }

    /**
     * Validation settings for AutoML Table vertical tasks - Classification/Regression/Forecasting.
     */
    export interface TableVerticalValidationDataSettingsResponse {
        /**
         * Columns to use for CVSplit data.
         */
        cvSplitColumnNames?: string[];
        /**
         * Validation data MLTable.
         */
        data?: MLTableJobInputResponse;
        /**
         * Number of cross validation folds to be applied on training dataset
         * when validation dataset is not provided.
         */
        nCrossValidations?: AutoNCrossValidationsResponse | CustomNCrossValidationsResponse;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: number;
    }
    /**
     * tableVerticalValidationDataSettingsResponseProvideDefaults sets the appropriate defaults for TableVerticalValidationDataSettingsResponse
     */
    export function tableVerticalValidationDataSettingsResponseProvideDefaults(val: TableVerticalValidationDataSettingsResponse): TableVerticalValidationDataSettingsResponse {
        return {
            ...val,
            data: (val.data ? mltableJobInputResponseProvideDefaults(val.data) : undefined),
        };
    }

    export interface TargetUtilizationScaleSettingsResponse {
        /**
         * The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances.
         */
        maxInstances?: number;
        /**
         * The minimum number of instances to always be present.
         */
        minInstances?: number;
        /**
         * The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
         */
        pollingInterval?: string;
        /**
         *
         * Expected value is 'TargetUtilization'.
         */
        scaleType: "TargetUtilization";
        /**
         * Target CPU usage for the autoscaler.
         */
        targetUtilizationPercentage?: number;
    }
    /**
     * targetUtilizationScaleSettingsResponseProvideDefaults sets the appropriate defaults for TargetUtilizationScaleSettingsResponse
     */
    export function targetUtilizationScaleSettingsResponseProvideDefaults(val: TargetUtilizationScaleSettingsResponse): TargetUtilizationScaleSettingsResponse {
        return {
            ...val,
            maxInstances: (val.maxInstances) ?? 1,
            minInstances: (val.minInstances) ?? 1,
            pollingInterval: (val.pollingInterval) ?? "PT1S",
            targetUtilizationPercentage: (val.targetUtilizationPercentage) ?? 70,
        };
    }

    /**
     * TensorFlow distribution configuration.
     */
    export interface TensorFlowResponse {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'TensorFlow'.
         */
        distributionType: "TensorFlow";
        /**
         * Number of parameter server tasks.
         */
        parameterServerCount?: number;
        /**
         * Number of workers. If not specified, will default to the instance count.
         */
        workerCount?: number;
    }
    /**
     * tensorFlowResponseProvideDefaults sets the appropriate defaults for TensorFlowResponse
     */
    export function tensorFlowResponseProvideDefaults(val: TensorFlowResponse): TensorFlowResponse {
        return {
            ...val,
            parameterServerCount: (val.parameterServerCount) ?? 0,
        };
    }

    /**
     * Test data inputs.
     */
    export interface TestDataSettingsResponse {
        /**
         * Test data MLTable.
         */
        data?: MLTableJobInputResponse;
        /**
         * The fraction of test dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        testDataSize?: number;
    }
    /**
     * testDataSettingsResponseProvideDefaults sets the appropriate defaults for TestDataSettingsResponse
     */
    export function testDataSettingsResponseProvideDefaults(val: TestDataSettingsResponse): TestDataSettingsResponse {
        return {
            ...val,
            data: (val.data ? mltableJobInputResponseProvideDefaults(val.data) : undefined),
        };
    }

    /**
     * Text Classification Multilabel task in AutoML NLP vertical.
     * NLP - Natural Language Processing.
     */
    export interface TextClassificationMultilabelResponse {
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: NlpVerticalDataSettingsResponse;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: NlpVerticalFeaturizationSettingsResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: NlpVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for Text-Classification-Multilabel task.
         * Currently only Accuracy is supported as primary metric, hence user need not set it explicitly.
         */
        primaryMetric: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextClassificationMultilabel'.
         */
        taskType: "TextClassificationMultilabel";
    }
    /**
     * textClassificationMultilabelResponseProvideDefaults sets the appropriate defaults for TextClassificationMultilabelResponse
     */
    export function textClassificationMultilabelResponseProvideDefaults(val: TextClassificationMultilabelResponse): TextClassificationMultilabelResponse {
        return {
            ...val,
            dataSettings: (val.dataSettings ? nlpVerticalDataSettingsResponseProvideDefaults(val.dataSettings) : undefined),
            limitSettings: (val.limitSettings ? nlpVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
        };
    }

    /**
     * Text Classification task in AutoML NLP vertical.
     * NLP - Natural Language Processing.
     */
    export interface TextClassificationResponse {
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: NlpVerticalDataSettingsResponse;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: NlpVerticalFeaturizationSettingsResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: NlpVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for Text-Classification task.
         */
        primaryMetric?: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextClassification'.
         */
        taskType: "TextClassification";
    }
    /**
     * textClassificationResponseProvideDefaults sets the appropriate defaults for TextClassificationResponse
     */
    export function textClassificationResponseProvideDefaults(val: TextClassificationResponse): TextClassificationResponse {
        return {
            ...val,
            dataSettings: (val.dataSettings ? nlpVerticalDataSettingsResponseProvideDefaults(val.dataSettings) : undefined),
            limitSettings: (val.limitSettings ? nlpVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "Accuracy",
        };
    }

    /**
     * Text-NER task in AutoML NLP vertical.
     * NER - Named Entity Recognition.
     * NLP - Natural Language Processing.
     */
    export interface TextNerResponse {
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: NlpVerticalDataSettingsResponse;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: NlpVerticalFeaturizationSettingsResponse;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: NlpVerticalLimitSettingsResponse;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: string;
        /**
         * Primary metric for Text-NER task.
         * Only 'Accuracy' is supported for Text-NER, so user need not set this explicitly.
         */
        primaryMetric: string;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextNER'.
         */
        taskType: "TextNER";
    }
    /**
     * textNerResponseProvideDefaults sets the appropriate defaults for TextNerResponse
     */
    export function textNerResponseProvideDefaults(val: TextNerResponse): TextNerResponse {
        return {
            ...val,
            dataSettings: (val.dataSettings ? nlpVerticalDataSettingsResponseProvideDefaults(val.dataSettings) : undefined),
            limitSettings: (val.limitSettings ? nlpVerticalLimitSettingsResponseProvideDefaults(val.limitSettings) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
        };
    }

    /**
     * Training data input.
     */
    export interface TrainingDataSettingsResponse {
        /**
         * [Required] Training data MLTable.
         */
        data: MLTableJobInputResponse;
    }
    /**
     * trainingDataSettingsResponseProvideDefaults sets the appropriate defaults for TrainingDataSettingsResponse
     */
    export function trainingDataSettingsResponseProvideDefaults(val: TrainingDataSettingsResponse): TrainingDataSettingsResponse {
        return {
            ...val,
            data: mltableJobInputResponseProvideDefaults(val.data),
        };
    }

    /**
     * Training related configuration.
     */
    export interface TrainingSettingsResponse {
        /**
         * Enable recommendation of DNN models.
         */
        enableDnnTraining?: boolean;
        /**
         * Flag to turn on explainability on best model.
         */
        enableModelExplainability?: boolean;
        /**
         * Flag for enabling onnx compatible models.
         */
        enableOnnxCompatibleModels?: boolean;
        /**
         * Enable stack ensemble run.
         */
        enableStackEnsemble?: boolean;
        /**
         * Enable voting ensemble run.
         */
        enableVoteEnsemble?: boolean;
        /**
         * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
         * Configure this parameter with a higher value than 300 secs, if more time is needed.
         */
        ensembleModelDownloadTimeout?: string;
        /**
         * Stack ensemble settings for stack ensemble run.
         */
        stackEnsembleSettings?: StackEnsembleSettingsResponse;
    }
    /**
     * trainingSettingsResponseProvideDefaults sets the appropriate defaults for TrainingSettingsResponse
     */
    export function trainingSettingsResponseProvideDefaults(val: TrainingSettingsResponse): TrainingSettingsResponse {
        return {
            ...val,
            enableDnnTraining: (val.enableDnnTraining) ?? false,
            enableModelExplainability: (val.enableModelExplainability) ?? false,
            enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
            enableStackEnsemble: (val.enableStackEnsemble) ?? true,
            enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
            ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
            stackEnsembleSettings: (val.stackEnsembleSettings ? stackEnsembleSettingsResponseProvideDefaults(val.stackEnsembleSettings) : undefined),
        };
    }

    /**
     * Trial component definition.
     */
    export interface TrialComponentResponse {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: string;
        /**
         * [Required] The command to execute on startup of the job. eg. "python train.py"
         */
        command: string;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        distribution?: MpiResponse | PyTorchResponse | TensorFlowResponse;
        /**
         * [Required] The ARM resource ID of the Environment specification for the job.
         */
        environmentId: string;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Compute Resource configuration for the job.
         */
        resources?: ResourceConfigurationResponse;
    }
    /**
     * trialComponentResponseProvideDefaults sets the appropriate defaults for TrialComponentResponse
     */
    export function trialComponentResponseProvideDefaults(val: TrialComponentResponse): TrialComponentResponse {
        return {
            ...val,
            resources: (val.resources ? resourceConfigurationResponseProvideDefaults(val.resources) : undefined),
        };
    }

    export interface TritonModelJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'TritonModel'.
         */
        jobInputType: "TritonModel";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * tritonModelJobInputResponseProvideDefaults sets the appropriate defaults for TritonModelJobInputResponse
     */
    export function tritonModelJobInputResponseProvideDefaults(val: TritonModelJobInputResponse): TritonModelJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface TritonModelJobOutputResponse {
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'TritonModel'.
         */
        jobOutputType: "TritonModel";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * tritonModelJobOutputResponseProvideDefaults sets the appropriate defaults for TritonModelJobOutputResponse
     */
    export function tritonModelJobOutputResponseProvideDefaults(val: TritonModelJobOutputResponse): TritonModelJobOutputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * Defines an early termination policy that cancels a given percentage of runs at each evaluation interval.
     */
    export interface TruncationSelectionPolicyResponse {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: number;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: number;
        /**
         *
         * Expected value is 'TruncationSelection'.
         */
        policyType: "TruncationSelection";
        /**
         * The percentage of runs to cancel at each evaluation interval.
         */
        truncationPercentage?: number;
    }
    /**
     * truncationSelectionPolicyResponseProvideDefaults sets the appropriate defaults for TruncationSelectionPolicyResponse
     */
    export function truncationSelectionPolicyResponseProvideDefaults(val: TruncationSelectionPolicyResponse): TruncationSelectionPolicyResponse {
        return {
            ...val,
            delayEvaluation: (val.delayEvaluation) ?? 0,
            evaluationInterval: (val.evaluationInterval) ?? 0,
            truncationPercentage: (val.truncationPercentage) ?? 0,
        };
    }

    /**
     * uri-file data version entity
     */
    export interface UriFileDataVersionResponse {
        /**
         * Enum to determine the type of data.
         * Expected value is 'UriFile'.
         */
        dataType: "UriFile";
        /**
         * [Required] Uri of the data. Usage/meaning depends on Microsoft.MachineLearning.ManagementFrontEnd.Contracts.V20220201Preview.Assets.DataVersionBase.DataType
         */
        dataUri: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * uriFileDataVersionResponseProvideDefaults sets the appropriate defaults for UriFileDataVersionResponse
     */
    export function uriFileDataVersionResponseProvideDefaults(val: UriFileDataVersionResponse): UriFileDataVersionResponse {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface UriFileJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'UriFile'.
         */
        jobInputType: "UriFile";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * uriFileJobInputResponseProvideDefaults sets the appropriate defaults for UriFileJobInputResponse
     */
    export function uriFileJobInputResponseProvideDefaults(val: UriFileJobInputResponse): UriFileJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface UriFileJobOutputResponse {
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'UriFile'.
         */
        jobOutputType: "UriFile";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * uriFileJobOutputResponseProvideDefaults sets the appropriate defaults for UriFileJobOutputResponse
     */
    export function uriFileJobOutputResponseProvideDefaults(val: UriFileJobOutputResponse): UriFileJobOutputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * uri-folder data version entity
     */
    export interface UriFolderDataVersionResponse {
        /**
         * Enum to determine the type of data.
         * Expected value is 'UriFolder'.
         */
        dataType: "UriFolder";
        /**
         * [Required] Uri of the data. Usage/meaning depends on Microsoft.MachineLearning.ManagementFrontEnd.Contracts.V20220201Preview.Assets.DataVersionBase.DataType
         */
        dataUri: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * Is the asset archived?
         */
        isArchived?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }
    /**
     * uriFolderDataVersionResponseProvideDefaults sets the appropriate defaults for UriFolderDataVersionResponse
     */
    export function uriFolderDataVersionResponseProvideDefaults(val: UriFolderDataVersionResponse): UriFolderDataVersionResponse {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface UriFolderJobInputResponse {
        /**
         * Description for the input.
         */
        description?: string;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'UriFolder'.
         */
        jobInputType: "UriFolder";
        /**
         * Input Asset Delivery Mode.
         */
        mode?: string;
        /**
         * [Required] Input Asset URI.
         */
        uri: string;
    }
    /**
     * uriFolderJobInputResponseProvideDefaults sets the appropriate defaults for UriFolderJobInputResponse
     */
    export function uriFolderJobInputResponseProvideDefaults(val: UriFolderJobInputResponse): UriFolderJobInputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface UriFolderJobOutputResponse {
        /**
         * Description for the output.
         */
        description?: string;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'UriFolder'.
         */
        jobOutputType: "UriFolder";
        /**
         * Output Asset Delivery Mode.
         */
        mode?: string;
        /**
         * Output Asset URI.
         */
        uri?: string;
    }
    /**
     * uriFolderJobOutputResponseProvideDefaults sets the appropriate defaults for UriFolderJobOutputResponse
     */
    export function uriFolderJobOutputResponseProvideDefaults(val: UriFolderJobOutputResponse): UriFolderJobOutputResponse {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    /**
     * User identity configuration.
     */
    export interface UserIdentityResponse {
        /**
         * Enum to determine identity framework.
         * Expected value is 'UserIdentity'.
         */
        identityType: "UserIdentity";
    }
