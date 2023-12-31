import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Account key datastore credentials configuration.
     */
    export interface AccountKeyDatastoreCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'AccountKey'.
         */
        credentialsType: pulumi.Input<"AccountKey">;
        /**
         * [Required] Storage account secrets.
         */
        secrets: pulumi.Input<AccountKeyDatastoreSecretsArgs>;
    }

    /**
     * Datastore account key secrets.
     */
    export interface AccountKeyDatastoreSecretsArgs {
        /**
         * Storage account key.
         */
        key?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'AccountKey'.
         */
        secretsType: pulumi.Input<"AccountKey">;
    }

    /**
     * AML Token identity configuration.
     */
    export interface AmlTokenArgs {
        /**
         * Enum to determine identity framework.
         * Expected value is 'AMLToken'.
         */
        identityType: pulumi.Input<"AMLToken">;
    }

    /**
     * Forecast horizon determined automatically by system.
     */
    export interface AutoForecastHorizonArgs {
        /**
         * Enum to determine forecast horizon selection mode.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    /**
     * AutoMLJob class.
     * Use this class for executing AutoML tasks like Classification/Regression etc.
     * See TaskType enum for all the tasks supported.
     */
    export interface AutoMLJobArgs {
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * The ARM resource ID of the Environment specification for the job.
         * This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'AutoML'.
         */
        jobType: pulumi.Input<"AutoML">;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: pulumi.Input<ResourceConfigurationArgs>;
        /**
         * Schedule definition of job.
         * If no schedule is provided, the job is run once and immediately after submission.
         */
        schedule?: pulumi.Input<CronScheduleArgs | RecurrenceScheduleArgs>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] This represents scenario which can be one of Tables/NLP/Image
         */
        taskDetails: pulumi.Input<ClassificationArgs | ForecastingArgs | ImageClassificationArgs | ImageClassificationMultilabelArgs | ImageInstanceSegmentationArgs | ImageObjectDetectionArgs | RegressionArgs | TextClassificationArgs | TextClassificationMultilabelArgs | TextNerArgs>;
    }
    /**
     * autoMLJobArgsProvideDefaults sets the appropriate defaults for AutoMLJobArgs
     */
    export function autoMLJobArgsProvideDefaults(val: AutoMLJobArgs): AutoMLJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            resources: (val.resources ? pulumi.output(val.resources).apply(resourceConfigurationArgsProvideDefaults) : undefined),
        };
    }

    /**
     * N-Cross validations determined automatically.
     */
    export interface AutoNCrossValidationsArgs {
        /**
         * Determines how N-Cross validations value is determined.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    export interface AutoSeasonalityArgs {
        /**
         * Forecasting seasonality mode.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    export interface AutoTargetLagsArgs {
        /**
         * Target lags selection modes.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    /**
     * Target lags rolling window determined automatically.
     */
    export interface AutoTargetRollingWindowSizeArgs {
        /**
         * Target rolling windows size mode.
         * Expected value is 'Auto'.
         */
        mode: pulumi.Input<"Auto">;
    }

    /**
     * Azure Blob datastore configuration.
     */
    export interface AzureBlobDatastoreArgs {
        /**
         * Storage account name.
         */
        accountName?: pulumi.Input<string>;
        /**
         * Storage account container name.
         */
        containerName?: pulumi.Input<string>;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureBlob'.
         */
        datastoreType: pulumi.Input<"AzureBlob">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: pulumi.Input<string>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * azureBlobDatastoreArgsProvideDefaults sets the appropriate defaults for AzureBlobDatastoreArgs
     */
    export function azureBlobDatastoreArgsProvideDefaults(val: AzureBlobDatastoreArgs): AzureBlobDatastoreArgs {
        return {
            ...val,
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure Data Lake Gen1 datastore configuration.
     */
    export interface AzureDataLakeGen1DatastoreArgs {
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen1'.
         */
        datastoreType: pulumi.Input<"AzureDataLakeGen1">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * [Required] Azure Data Lake store name.
         */
        storeName: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * azureDataLakeGen1DatastoreArgsProvideDefaults sets the appropriate defaults for AzureDataLakeGen1DatastoreArgs
     */
    export function azureDataLakeGen1DatastoreArgsProvideDefaults(val: AzureDataLakeGen1DatastoreArgs): AzureDataLakeGen1DatastoreArgs {
        return {
            ...val,
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure Data Lake Gen2 datastore configuration.
     */
    export interface AzureDataLakeGen2DatastoreArgs {
        /**
         * [Required] Storage account name.
         */
        accountName: pulumi.Input<string>;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen2'.
         */
        datastoreType: pulumi.Input<"AzureDataLakeGen2">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * [Required] The name of the Data Lake Gen2 filesystem.
         */
        filesystem: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: pulumi.Input<string>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * azureDataLakeGen2DatastoreArgsProvideDefaults sets the appropriate defaults for AzureDataLakeGen2DatastoreArgs
     */
    export function azureDataLakeGen2DatastoreArgsProvideDefaults(val: AzureDataLakeGen2DatastoreArgs): AzureDataLakeGen2DatastoreArgs {
        return {
            ...val,
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Azure File datastore configuration.
     */
    export interface AzureFileDatastoreArgs {
        /**
         * [Required] Storage account name.
         */
        accountName: pulumi.Input<string>;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureFile'.
         */
        datastoreType: pulumi.Input<"AzureFile">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Azure cloud endpoint for the storage account.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * [Required] The name of the Azure file share that the datastore points to.
         */
        fileShareName: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Protocol used to communicate with the storage account.
         */
        protocol?: pulumi.Input<string>;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * azureFileDatastoreArgsProvideDefaults sets the appropriate defaults for AzureFileDatastoreArgs
     */
    export function azureFileDatastoreArgsProvideDefaults(val: AzureFileDatastoreArgs): AzureFileDatastoreArgs {
        return {
            ...val,
            serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
        };
    }

    /**
     * Defines an early termination policy based on slack criteria, and a frequency and delay interval for evaluation
     */
    export interface BanditPolicyArgs {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: pulumi.Input<number>;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: pulumi.Input<number>;
        /**
         *
         * Expected value is 'Bandit'.
         */
        policyType: pulumi.Input<"Bandit">;
        /**
         * Absolute distance allowed from the best performing run.
         */
        slackAmount?: pulumi.Input<number>;
        /**
         * Ratio of the allowed distance from the best performing run.
         */
        slackFactor?: pulumi.Input<number>;
    }
    /**
     * banditPolicyArgsProvideDefaults sets the appropriate defaults for BanditPolicyArgs
     */
    export function banditPolicyArgsProvideDefaults(val: BanditPolicyArgs): BanditPolicyArgs {
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
    export interface BatchDeploymentArgs {
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: pulumi.Input<CodeConfigurationArgs>;
        /**
         * Compute target for batch inference operation.
         */
        compute?: pulumi.Input<string>;
        /**
         * Description of the endpoint deployment.
         */
        description?: pulumi.Input<string>;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Error threshold, if the error count for the entire input goes above this value,
         * the batch inference will be aborted. Range is [-1, int.MaxValue].
         * For FileDataset, this value is the count of file failures.
         * For TabularDataset, this value is the count of record failures.
         * If set to -1 (the lower bound), all failures during batch inference will be ignored.
         */
        errorThreshold?: pulumi.Input<number>;
        /**
         * Logging level for batch inference operation.
         */
        loggingLevel?: pulumi.Input<string | enums.BatchLoggingLevel>;
        /**
         * Indicates maximum number of parallelism per instance.
         */
        maxConcurrencyPerInstance?: pulumi.Input<number>;
        /**
         * Size of the mini-batch passed to each batch invocation.
         * For FileDataset, this is the number of files per mini-batch.
         * For TabularDataset, this is the size of the records in bytes, per mini-batch.
         */
        miniBatchSize?: pulumi.Input<number>;
        /**
         * Reference to the model asset for the endpoint deployment.
         */
        model?: pulumi.Input<DataPathAssetReferenceArgs | IdAssetReferenceArgs | OutputPathAssetReferenceArgs>;
        /**
         * Indicates how the output will be organized.
         */
        outputAction?: pulumi.Input<string | enums.BatchOutputAction>;
        /**
         * Customized output file name for append_row output action.
         */
        outputFileName?: pulumi.Input<string>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Indicates compute configuration for the job.
         * If not provided, will default to the defaults defined in ResourceConfiguration.
         */
        resources?: pulumi.Input<ResourceConfigurationArgs>;
        /**
         * Retry Settings for the batch inference operation.
         * If not provided, will default to the defaults defined in BatchRetrySettings.
         */
        retrySettings?: pulumi.Input<BatchRetrySettingsArgs>;
    }
    /**
     * batchDeploymentArgsProvideDefaults sets the appropriate defaults for BatchDeploymentArgs
     */
    export function batchDeploymentArgsProvideDefaults(val: BatchDeploymentArgs): BatchDeploymentArgs {
        return {
            ...val,
            errorThreshold: (val.errorThreshold) ?? -1,
            loggingLevel: (val.loggingLevel) ?? "Info",
            maxConcurrencyPerInstance: (val.maxConcurrencyPerInstance) ?? 1,
            miniBatchSize: (val.miniBatchSize) ?? 10,
            outputAction: (val.outputAction) ?? "AppendRow",
            outputFileName: (val.outputFileName) ?? "predictions.csv",
            resources: (val.resources ? pulumi.output(val.resources).apply(resourceConfigurationArgsProvideDefaults) : undefined),
            retrySettings: (val.retrySettings ? pulumi.output(val.retrySettings).apply(batchRetrySettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Batch endpoint configuration.
     */
    export interface BatchEndpointArgs {
        /**
         * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
         */
        authMode: pulumi.Input<string | enums.EndpointAuthMode>;
        /**
         * Default values for Batch Endpoint
         */
        defaults?: pulumi.Input<BatchEndpointDefaultsArgs>;
        /**
         * Description of the inference endpoint.
         */
        description?: pulumi.Input<string>;
        /**
         * EndpointAuthKeys to set initially on an Endpoint.
         * This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
         */
        keys?: pulumi.Input<EndpointAuthKeysArgs>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Batch endpoint default values
     */
    export interface BatchEndpointDefaultsArgs {
        /**
         * Name of the deployment that will be default for the endpoint.
         * This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked.
         */
        deploymentName?: pulumi.Input<string>;
    }

    /**
     * Retry settings for a batch inference operation.
     */
    export interface BatchRetrySettingsArgs {
        /**
         * Maximum retry count for a mini-batch
         */
        maxRetries?: pulumi.Input<number>;
        /**
         * Invocation timeout for a mini-batch, in ISO 8601 format.
         */
        timeout?: pulumi.Input<string>;
    }
    /**
     * batchRetrySettingsArgsProvideDefaults sets the appropriate defaults for BatchRetrySettingsArgs
     */
    export function batchRetrySettingsArgsProvideDefaults(val: BatchRetrySettingsArgs): BatchRetrySettingsArgs {
        return {
            ...val,
            maxRetries: (val.maxRetries) ?? 3,
            timeout: (val.timeout) ?? "PT30S",
        };
    }

    /**
     * Defines a Sampling Algorithm that generates values based on previous values
     */
    export interface BayesianSamplingAlgorithmArgs {
        /**
         *
         * Expected value is 'Bayesian'.
         */
        samplingAlgorithmType: pulumi.Input<"Bayesian">;
    }

    /**
     * Configuration settings for Docker build context
     */
    export interface BuildContextArgs {
        /**
         * [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.
         * <seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" />
         */
        contextUri: pulumi.Input<string>;
        /**
         * Path to the Dockerfile in the build context.
         * <seealso href="https://docs.docker.com/engine/reference/builder/" />
         */
        dockerfilePath?: pulumi.Input<string>;
    }
    /**
     * buildContextArgsProvideDefaults sets the appropriate defaults for BuildContextArgs
     */
    export function buildContextArgsProvideDefaults(val: BuildContextArgs): BuildContextArgs {
        return {
            ...val,
            dockerfilePath: (val.dockerfilePath) ?? "Dockerfile",
        };
    }

    /**
     * Certificate datastore credentials configuration.
     */
    export interface CertificateDatastoreCredentialsArgs {
        /**
         * Authority URL used for authentication.
         */
        authorityUrl?: pulumi.Input<string>;
        /**
         * [Required] Service principal client ID.
         */
        clientId: pulumi.Input<string>;
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'Certificate'.
         */
        credentialsType: pulumi.Input<"Certificate">;
        /**
         * Resource the service principal has access to.
         */
        resourceUrl?: pulumi.Input<string>;
        /**
         * [Required] Service principal secrets.
         */
        secrets: pulumi.Input<CertificateDatastoreSecretsArgs>;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: pulumi.Input<string>;
        /**
         * [Required] Thumbprint of the certificate used for authentication.
         */
        thumbprint: pulumi.Input<string>;
    }

    /**
     * Datastore certificate secrets.
     */
    export interface CertificateDatastoreSecretsArgs {
        /**
         * Service principal certificate.
         */
        certificate?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'Certificate'.
         */
        secretsType: pulumi.Input<"Certificate">;
    }

    /**
     * Classification task in AutoML Table vertical.
     */
    export interface ClassificationArgs {
        /**
         * Allowed models for classification task.
         */
        allowedModels?: pulumi.Input<pulumi.Input<string | enums.ClassificationModels>[]>;
        /**
         * Blocked models for classification task.
         */
        blockedModels?: pulumi.Input<pulumi.Input<string | enums.ClassificationModels>[]>;
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: pulumi.Input<TableVerticalDataSettingsArgs>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Primary metric for the task.
         */
        primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Classification'.
         */
        taskType: pulumi.Input<"Classification">;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: pulumi.Input<TrainingSettingsArgs>;
    }
    /**
     * classificationArgsProvideDefaults sets the appropriate defaults for ClassificationArgs
     */
    export function classificationArgsProvideDefaults(val: ClassificationArgs): ClassificationArgs {
        return {
            ...val,
            dataSettings: (val.dataSettings ? pulumi.output(val.dataSettings).apply(tableVerticalDataSettingsArgsProvideDefaults) : undefined),
            featurizationSettings: (val.featurizationSettings ? pulumi.output(val.featurizationSettings).apply(tableVerticalFeaturizationSettingsArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(tableVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "AUCWeighted",
            trainingSettings: (val.trainingSettings ? pulumi.output(val.trainingSettings).apply(trainingSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Configuration for a scoring code asset.
     */
    export interface CodeConfigurationArgs {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: pulumi.Input<string>;
        /**
         * [Required] The script to execute on startup. eg. "score.py"
         */
        scoringScript: pulumi.Input<string>;
    }

    /**
     * Container for code asset versions.
     */
    export interface CodeContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * codeContainerArgsProvideDefaults sets the appropriate defaults for CodeContainerArgs
     */
    export function codeContainerArgsProvideDefaults(val: CodeContainerArgs): CodeContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Code asset version details.
     */
    export interface CodeVersionArgs {
        /**
         * Uri where code is located
         */
        codeUri?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * codeVersionArgsProvideDefaults sets the appropriate defaults for CodeVersionArgs
     */
    export function codeVersionArgsProvideDefaults(val: CodeVersionArgs): CodeVersionArgs {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Column transformer parameters.
     */
    export interface ColumnTransformerArgs {
        /**
         * Fields to apply transformer logic on.
         */
        fields?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Different properties to be passed to transformer.
         * Input expected is dictionary of key,value pairs in JSON format.
         */
        parameters?: any;
    }

    /**
     * Command job definition.
     */
    export interface CommandJobArgs {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: pulumi.Input<string>;
        /**
         * [Required] The command to execute on startup of the job. eg. "python train.py"
         */
        command: pulumi.Input<string>;
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        distribution?: pulumi.Input<MpiArgs | PyTorchArgs | TensorFlowArgs>;
        /**
         * [Required] The ARM resource ID of the Environment specification for the job.
         */
        environmentId: pulumi.Input<string>;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>}>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Command'.
         */
        jobType: pulumi.Input<"Command">;
        /**
         * Command Job limit.
         */
        limits?: pulumi.Input<CommandJobLimitsArgs>;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: pulumi.Input<ResourceConfigurationArgs>;
        /**
         * Schedule definition of job.
         * If no schedule is provided, the job is run once and immediately after submission.
         */
        schedule?: pulumi.Input<CronScheduleArgs | RecurrenceScheduleArgs>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * commandJobArgsProvideDefaults sets the appropriate defaults for CommandJobArgs
     */
    export function commandJobArgsProvideDefaults(val: CommandJobArgs): CommandJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            resources: (val.resources ? pulumi.output(val.resources).apply(resourceConfigurationArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Command Job limit class.
     */
    export interface CommandJobLimitsArgs {
        /**
         *
         * Expected value is 'Command'.
         */
        jobLimitsType: pulumi.Input<"Command">;
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: pulumi.Input<string>;
    }

    /**
     * Component container definition.
     * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
     */
    export interface ComponentContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * componentContainerArgsProvideDefaults sets the appropriate defaults for ComponentContainerArgs
     */
    export function componentContainerArgsProvideDefaults(val: ComponentContainerArgs): ComponentContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Definition of a component version: defines resources that span component types.
     */
    export interface ComponentVersionArgs {
        /**
         * Defines Component definition details.
         * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
         */
        componentSpec?: any;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * componentVersionArgsProvideDefaults sets the appropriate defaults for ComponentVersionArgs
     */
    export function componentVersionArgsProvideDefaults(val: ComponentVersionArgs): ComponentVersionArgs {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Resource requirements for each container instance within an online deployment.
     */
    export interface ContainerResourceRequirementsArgs {
        /**
         * Container resource limit info:
         */
        containerResourceLimits?: pulumi.Input<ContainerResourceSettingsArgs>;
        /**
         * Container resource request info:
         */
        containerResourceRequests?: pulumi.Input<ContainerResourceSettingsArgs>;
    }

    export interface ContainerResourceSettingsArgs {
        /**
         * Number of vCPUs request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpu?: pulumi.Input<string>;
        /**
         * Number of Nvidia GPU cards request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        gpu?: pulumi.Input<string>;
        /**
         * Memory size request/limit for container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memory?: pulumi.Input<string>;
    }

    /**
     * Cron schedule definition
     */
    export interface CronScheduleArgs {
        /**
         * Specifies end time of schedule in ISO 8601 format.
         * If not present, the schedule will run indefinitely
         */
        endTime?: pulumi.Input<string>;
        /**
         * [Required] Specifies cron expression of schedule.
         * The expression should follow NCronTab format.
         */
        expression: pulumi.Input<string>;
        /**
         * Specifies the schedule's status
         */
        scheduleStatus?: pulumi.Input<string | enums.ScheduleStatus>;
        /**
         * Enum to describe type of schedule
         * Expected value is 'Cron'.
         */
        scheduleType: pulumi.Input<"Cron">;
        /**
         * Specifies start time of schedule in ISO 8601 format.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format.
         */
        timeZone?: pulumi.Input<string>;
    }
    /**
     * cronScheduleArgsProvideDefaults sets the appropriate defaults for CronScheduleArgs
     */
    export function cronScheduleArgsProvideDefaults(val: CronScheduleArgs): CronScheduleArgs {
        return {
            ...val,
            scheduleStatus: (val.scheduleStatus) ?? "Enabled",
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    /**
     * The desired maximum forecast horizon in units of time-series frequency.
     */
    export interface CustomForecastHorizonArgs {
        /**
         * Enum to determine forecast horizon selection mode.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] Forecast horizon value.
         */
        value: pulumi.Input<number>;
    }

    export interface CustomModelJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'CustomModel'.
         */
        jobInputType: pulumi.Input<"CustomModel">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * customModelJobInputArgsProvideDefaults sets the appropriate defaults for CustomModelJobInputArgs
     */
    export function customModelJobInputArgsProvideDefaults(val: CustomModelJobInputArgs): CustomModelJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface CustomModelJobOutputArgs {
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'CustomModel'.
         */
        jobOutputType: pulumi.Input<"CustomModel">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * customModelJobOutputArgsProvideDefaults sets the appropriate defaults for CustomModelJobOutputArgs
     */
    export function customModelJobOutputArgsProvideDefaults(val: CustomModelJobOutputArgs): CustomModelJobOutputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * N-Cross validations are specified by user.
     */
    export interface CustomNCrossValidationsArgs {
        /**
         * Determines how N-Cross validations value is determined.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] N-Cross validations value.
         */
        value: pulumi.Input<number>;
    }

    export interface CustomSeasonalityArgs {
        /**
         * Forecasting seasonality mode.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] Seasonality value.
         */
        value: pulumi.Input<number>;
    }

    export interface CustomTargetLagsArgs {
        /**
         * Target lags selection modes.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] Set target lags values.
         */
        values: pulumi.Input<pulumi.Input<number>[]>;
    }

    export interface CustomTargetRollingWindowSizeArgs {
        /**
         * Target rolling windows size mode.
         * Expected value is 'Custom'.
         */
        mode: pulumi.Input<"Custom">;
        /**
         * [Required] TargetRollingWindowSize value.
         */
        value: pulumi.Input<number>;
    }

    /**
     * Container for data asset versions.
     */
    export interface DataContainerArgs {
        /**
         * [Required] Specifies the type of data.
         */
        dataType: pulumi.Input<string | enums.DataType>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * dataContainerArgsProvideDefaults sets the appropriate defaults for DataContainerArgs
     */
    export function dataContainerArgsProvideDefaults(val: DataContainerArgs): DataContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Reference to an asset via its path in a datastore.
     */
    export interface DataPathAssetReferenceArgs {
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: pulumi.Input<string>;
        /**
         * The path of the file/directory in the datastore.
         */
        path?: pulumi.Input<string>;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'DataPath'.
         */
        referenceType: pulumi.Input<"DataPath">;
    }

    export interface DefaultScaleSettingsArgs {
        /**
         *
         * Expected value is 'Default'.
         */
        scaleType: pulumi.Input<"Default">;
    }

    /**
     * Keys for endpoint authentication.
     */
    export interface EndpointAuthKeysArgs {
        /**
         * The primary key.
         */
        primaryKey?: pulumi.Input<string>;
        /**
         * The secondary key.
         */
        secondaryKey?: pulumi.Input<string>;
    }

    /**
     * Container for environment specification versions.
     */
    export interface EnvironmentContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * environmentContainerArgsProvideDefaults sets the appropriate defaults for EnvironmentContainerArgs
     */
    export function environmentContainerArgsProvideDefaults(val: EnvironmentContainerArgs): EnvironmentContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Environment version details.
     */
    export interface EnvironmentVersionArgs {
        /**
         * Configuration settings for Docker build context.
         */
        build?: pulumi.Input<BuildContextArgs>;
        /**
         * Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.
         * <see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" />
         */
        condaFile?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Name of the image that will be used for the environment.
         * <seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
         */
        image?: pulumi.Input<string>;
        /**
         * Defines configuration specific to inference.
         */
        inferenceConfig?: pulumi.Input<InferenceContainerPropertiesArgs>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The OS type of the environment.
         */
        osType?: pulumi.Input<string | enums.OperatingSystemType>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * environmentVersionArgsProvideDefaults sets the appropriate defaults for EnvironmentVersionArgs
     */
    export function environmentVersionArgsProvideDefaults(val: EnvironmentVersionArgs): EnvironmentVersionArgs {
        return {
            ...val,
            build: (val.build ? pulumi.output(val.build).apply(buildContextArgsProvideDefaults) : undefined),
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
            osType: (val.osType) ?? "Linux",
        };
    }

    export interface FlavorDataArgs {
        /**
         * Model flavor-specific data.
         */
        data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Forecasting task in AutoML Table vertical.
     */
    export interface ForecastingArgs {
        /**
         * Allowed models for forecasting task.
         */
        allowedModels?: pulumi.Input<pulumi.Input<string | enums.ForecastingModels>[]>;
        /**
         * Blocked models for forecasting task.
         */
        blockedModels?: pulumi.Input<pulumi.Input<string | enums.ForecastingModels>[]>;
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: pulumi.Input<TableVerticalDataSettingsArgs>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs>;
        /**
         * Forecasting task specific inputs.
         */
        forecastingSettings?: pulumi.Input<ForecastingSettingsArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Primary metric for forecasting task.
         */
        primaryMetric?: pulumi.Input<string | enums.ForecastingPrimaryMetrics>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Forecasting'.
         */
        taskType: pulumi.Input<"Forecasting">;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: pulumi.Input<TrainingSettingsArgs>;
    }
    /**
     * forecastingArgsProvideDefaults sets the appropriate defaults for ForecastingArgs
     */
    export function forecastingArgsProvideDefaults(val: ForecastingArgs): ForecastingArgs {
        return {
            ...val,
            dataSettings: (val.dataSettings ? pulumi.output(val.dataSettings).apply(tableVerticalDataSettingsArgsProvideDefaults) : undefined),
            featurizationSettings: (val.featurizationSettings ? pulumi.output(val.featurizationSettings).apply(tableVerticalFeaturizationSettingsArgsProvideDefaults) : undefined),
            forecastingSettings: (val.forecastingSettings ? pulumi.output(val.forecastingSettings).apply(forecastingSettingsArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(tableVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
            trainingSettings: (val.trainingSettings ? pulumi.output(val.trainingSettings).apply(trainingSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Forecasting specific parameters.
     */
    export interface ForecastingSettingsArgs {
        /**
         * Country or region for holidays for forecasting tasks.
         * These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'.
         */
        countryOrRegionForHolidays?: pulumi.Input<string>;
        /**
         * Number of periods between the origin time of one CV fold and the next fold. For
         * example, if `CVStepSize` = 3 for daily data, the origin time for each fold will be
         * three days apart.
         */
        cvStepSize?: pulumi.Input<number>;
        /**
         * Flag for generating lags for the numeric features with 'auto' or null.
         */
        featureLags?: pulumi.Input<string | enums.FeatureLags>;
        /**
         * The desired maximum forecast horizon in units of time-series frequency.
         */
        forecastHorizon?: pulumi.Input<AutoForecastHorizonArgs | CustomForecastHorizonArgs>;
        /**
         * When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default.
         */
        frequency?: pulumi.Input<string>;
        /**
         * Set time series seasonality as an integer multiple of the series frequency.
         * If seasonality is set to 'auto', it will be inferred.
         */
        seasonality?: pulumi.Input<AutoSeasonalityArgs | CustomSeasonalityArgs>;
        /**
         * The parameter defining how if AutoML should handle short time series.
         */
        shortSeriesHandlingConfig?: pulumi.Input<string | enums.ShortSeriesHandlingConfiguration>;
        /**
         * The function to be used to aggregate the time series target column to conform to a user specified frequency.
         * If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean".
         */
        targetAggregateFunction?: pulumi.Input<string | enums.TargetAggregationFunction>;
        /**
         * The number of past periods to lag from the target column.
         */
        targetLags?: pulumi.Input<AutoTargetLagsArgs | CustomTargetLagsArgs>;
        /**
         * The number of past periods used to create a rolling window average of the target column.
         */
        targetRollingWindowSize?: pulumi.Input<AutoTargetRollingWindowSizeArgs | CustomTargetRollingWindowSizeArgs>;
        /**
         * The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency.
         */
        timeColumnName?: pulumi.Input<string>;
        /**
         * The names of columns used to group a timeseries. It can be used to create multiple series.
         * If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting.
         */
        timeSeriesIdColumnNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Configure STL Decomposition of the time-series target column.
         */
        useStl?: pulumi.Input<string | enums.UseStl>;
    }
    /**
     * forecastingSettingsArgsProvideDefaults sets the appropriate defaults for ForecastingSettingsArgs
     */
    export function forecastingSettingsArgsProvideDefaults(val: ForecastingSettingsArgs): ForecastingSettingsArgs {
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
    export interface GridSamplingAlgorithmArgs {
        /**
         *
         * Expected value is 'Grid'.
         */
        samplingAlgorithmType: pulumi.Input<"Grid">;
    }

    export interface HdfsDatastoreArgs {
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | KerberosKeytabCredentialsArgs | KerberosPasswordCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'Hdfs'.
         */
        datastoreType: pulumi.Input<"Hdfs">;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * The TLS cert of the HDFS server. Needs to be a base64 encoded string. Required if "Https" protocol is selected.
         */
        hdfsServerCertificate?: pulumi.Input<string>;
        /**
         * [Required] IP Address or DNS HostName.
         */
        nameNodeAddress: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Protocol used to communicate with the storage account (Https/Http).
         */
        protocol?: pulumi.Input<string>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * hdfsDatastoreArgsProvideDefaults sets the appropriate defaults for HdfsDatastoreArgs
     */
    export function hdfsDatastoreArgsProvideDefaults(val: HdfsDatastoreArgs): HdfsDatastoreArgs {
        return {
            ...val,
            protocol: (val.protocol) ?? "http",
        };
    }

    /**
     * Reference to an asset via its ARM resource ID.
     */
    export interface IdAssetReferenceArgs {
        /**
         * [Required] ARM resource ID of the asset.
         */
        assetId: pulumi.Input<string>;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'Id'.
         */
        referenceType: pulumi.Input<"Id">;
    }

    /**
     * Image Classification. Multi-class image classification is used when an image is classified with only a single label
     * from a set of classes - e.g. each image is classified as either an image of a 'cat' or a 'dog' or a 'duck'.
     */
    export interface ImageClassificationArgs {
        /**
         * [Required] Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
         */
        dataSettings: pulumi.Input<ImageVerticalDataSettingsArgs>;
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Settings used for training the model.
         */
        modelSettings?: pulumi.Input<ImageModelSettingsClassificationArgs>;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsClassificationArgs>[]>;
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: pulumi.Input<ImageSweepSettingsArgs>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageClassification'.
         */
        taskType: pulumi.Input<"ImageClassification">;
    }
    /**
     * imageClassificationArgsProvideDefaults sets the appropriate defaults for ImageClassificationArgs
     */
    export function imageClassificationArgsProvideDefaults(val: ImageClassificationArgs): ImageClassificationArgs {
        return {
            ...val,
            dataSettings: pulumi.output(val.dataSettings).apply(imageVerticalDataSettingsArgsProvideDefaults),
            limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? pulumi.output(val.modelSettings).apply(imageModelSettingsClassificationArgsProvideDefaults) : undefined),
            primaryMetric: (val.primaryMetric) ?? "Accuracy",
        };
    }

    /**
     * Image Classification Multilabel. Multi-label image classification is used when an image could have one or more labels
     * from a set of labels - e.g. an image could be labeled with both 'cat' and 'dog'.
     */
    export interface ImageClassificationMultilabelArgs {
        /**
         * [Required] Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
         */
        dataSettings: pulumi.Input<ImageVerticalDataSettingsArgs>;
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Settings used for training the model.
         */
        modelSettings?: pulumi.Input<ImageModelSettingsClassificationArgs>;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: pulumi.Input<string | enums.ClassificationMultilabelPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsClassificationArgs>[]>;
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: pulumi.Input<ImageSweepSettingsArgs>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageClassificationMultilabel'.
         */
        taskType: pulumi.Input<"ImageClassificationMultilabel">;
    }
    /**
     * imageClassificationMultilabelArgsProvideDefaults sets the appropriate defaults for ImageClassificationMultilabelArgs
     */
    export function imageClassificationMultilabelArgsProvideDefaults(val: ImageClassificationMultilabelArgs): ImageClassificationMultilabelArgs {
        return {
            ...val,
            dataSettings: pulumi.output(val.dataSettings).apply(imageVerticalDataSettingsArgsProvideDefaults),
            limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? pulumi.output(val.modelSettings).apply(imageModelSettingsClassificationArgsProvideDefaults) : undefined),
            primaryMetric: (val.primaryMetric) ?? "IOU",
        };
    }

    /**
     * Image Instance Segmentation. Instance segmentation is used to identify objects in an image at the pixel level,
     * drawing a polygon around each object in the image.
     */
    export interface ImageInstanceSegmentationArgs {
        /**
         * [Required] Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
         */
        dataSettings: pulumi.Input<ImageVerticalDataSettingsArgs>;
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Settings used for training the model.
         */
        modelSettings?: pulumi.Input<ImageModelSettingsObjectDetectionArgs>;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: pulumi.Input<string | enums.InstanceSegmentationPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsObjectDetectionArgs>[]>;
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: pulumi.Input<ImageSweepSettingsArgs>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageInstanceSegmentation'.
         */
        taskType: pulumi.Input<"ImageInstanceSegmentation">;
    }
    /**
     * imageInstanceSegmentationArgsProvideDefaults sets the appropriate defaults for ImageInstanceSegmentationArgs
     */
    export function imageInstanceSegmentationArgsProvideDefaults(val: ImageInstanceSegmentationArgs): ImageInstanceSegmentationArgs {
        return {
            ...val,
            dataSettings: pulumi.output(val.dataSettings).apply(imageVerticalDataSettingsArgsProvideDefaults),
            limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? pulumi.output(val.modelSettings).apply(imageModelSettingsObjectDetectionArgsProvideDefaults) : undefined),
            primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
        };
    }

    /**
     * Limit settings for the AutoML job.
     */
    export interface ImageLimitSettingsArgs {
        /**
         * Maximum number of concurrent AutoML iterations.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Maximum number of AutoML iterations.
         */
        maxTrials?: pulumi.Input<number>;
        /**
         * AutoML job timeout.
         */
        timeout?: pulumi.Input<string>;
    }
    /**
     * imageLimitSettingsArgsProvideDefaults sets the appropriate defaults for ImageLimitSettingsArgs
     */
    export function imageLimitSettingsArgsProvideDefaults(val: ImageLimitSettingsArgs): ImageLimitSettingsArgs {
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
    export interface ImageModelDistributionSettingsClassificationArgs {
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: pulumi.Input<string>;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: pulumi.Input<string>;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: pulumi.Input<string>;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: pulumi.Input<string>;
        /**
         * Whether to use distributer training.
         */
        distributed?: pulumi.Input<string>;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: pulumi.Input<string>;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: pulumi.Input<string>;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: pulumi.Input<string>;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: pulumi.Input<string>;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: pulumi.Input<string>;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: pulumi.Input<string>;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: pulumi.Input<string>;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: pulumi.Input<string>;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: pulumi.Input<string>;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: pulumi.Input<string>;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: pulumi.Input<string>;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: pulumi.Input<string>;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: pulumi.Input<string>;
        /**
         * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
         */
        optimizer?: pulumi.Input<string>;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: pulumi.Input<string>;
        /**
         * If validation data is not defined, this specifies the split ratio for splitting
         * train data into random train and validation subsets. Must be a float in the range [0, 1].
         */
        splitRatio?: pulumi.Input<string>;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: pulumi.Input<string>;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: pulumi.Input<string>;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: pulumi.Input<string>;
        /**
         * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
         */
        trainingCropSize?: pulumi.Input<string>;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: pulumi.Input<string>;
        /**
         * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
         */
        validationCropSize?: pulumi.Input<string>;
        /**
         * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
         */
        validationResizeSize?: pulumi.Input<string>;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: pulumi.Input<string>;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: pulumi.Input<string>;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: pulumi.Input<string>;
        /**
         * Weighted loss. The accepted values are 0 for no weighted loss.
         * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
         */
        weightedLoss?: pulumi.Input<string>;
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
    export interface ImageModelDistributionSettingsObjectDetectionArgs {
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: pulumi.Input<string>;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: pulumi.Input<string>;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: pulumi.Input<string>;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: pulumi.Input<string>;
        /**
         * Maximum number of detections per image, for all classes. Must be a positive integer.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        boxDetectionsPerImage?: pulumi.Input<string>;
        /**
         * During inference, only return proposals with a classification score greater than
         * BoxScoreThreshold. Must be a float in the range[0, 1].
         */
        boxScoreThreshold?: pulumi.Input<string>;
        /**
         * Whether to use distributer training.
         */
        distributed?: pulumi.Input<string>;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: pulumi.Input<string>;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: pulumi.Input<string>;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: pulumi.Input<string>;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: pulumi.Input<string>;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: pulumi.Input<string>;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: pulumi.Input<string>;
        /**
         * Image size for train and validation. Must be a positive integer.
         * Note: The training run may get into CUDA OOM if the size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        imageSize?: pulumi.Input<string>;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: pulumi.Input<string>;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: pulumi.Input<string>;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: pulumi.Input<string>;
        /**
         * Maximum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        maxSize?: pulumi.Input<string>;
        /**
         * Minimum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        minSize?: pulumi.Input<string>;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
         * Note: training run may get into CUDA OOM if the model size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        modelSize?: pulumi.Input<string>;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: pulumi.Input<string>;
        /**
         * Enable multi-scale image by varying image size by +/- 50%.
         * Note: training run may get into CUDA OOM if no sufficient GPU memory.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        multiScale?: pulumi.Input<string>;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: pulumi.Input<string>;
        /**
         * IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1].
         */
        nmsIouThreshold?: pulumi.Input<string>;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: pulumi.Input<string>;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: pulumi.Input<string>;
        /**
         * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
         */
        optimizer?: pulumi.Input<string>;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: pulumi.Input<string>;
        /**
         * If validation data is not defined, this specifies the split ratio for splitting
         * train data into random train and validation subsets. Must be a float in the range [0, 1].
         */
        splitRatio?: pulumi.Input<string>;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: pulumi.Input<string>;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: pulumi.Input<string>;
        /**
         * The grid size to use for tiling each image. Note: TileGridSize must not be
         * None to enable small object detection logic. A string containing two integers in mxn format.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileGridSize?: pulumi.Input<string>;
        /**
         * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileOverlapRatio?: pulumi.Input<string>;
        /**
         * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
         * Used in validation/ inference. Must be float in the range [0, 1].
         * Note: This settings is not supported for the 'yolov5' algorithm.
         * NMS: Non-maximum suppression
         */
        tilePredictionsNmsThreshold?: pulumi.Input<string>;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: pulumi.Input<string>;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: pulumi.Input<string>;
        /**
         * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
         */
        validationIouThreshold?: pulumi.Input<string>;
        /**
         * Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'.
         */
        validationMetricType?: pulumi.Input<string>;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: pulumi.Input<string>;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: pulumi.Input<string>;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: pulumi.Input<string>;
    }

    /**
     * Settings used for training the model.
     * For more information on the available settings please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    export interface ImageModelSettingsClassificationArgs {
        /**
         * Settings for advanced scenarios.
         */
        advancedSettings?: pulumi.Input<string>;
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: pulumi.Input<boolean>;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: pulumi.Input<string>;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: pulumi.Input<number>;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: pulumi.Input<number>;
        /**
         * FileDataset id for pretrained checkpoint(s) for incremental training.
         * Make sure to pass CheckpointFilename along with CheckpointDatasetId.
         */
        checkpointDatasetId?: pulumi.Input<string>;
        /**
         * The pretrained checkpoint filename in FileDataset for incremental training.
         * Make sure to pass CheckpointDatasetId along with CheckpointFilename.
         */
        checkpointFilename?: pulumi.Input<string>;
        /**
         * Frequency to store model checkpoints. Must be a positive integer.
         */
        checkpointFrequency?: pulumi.Input<number>;
        /**
         * The id of a previous run that has a pretrained checkpoint for incremental training.
         */
        checkpointRunId?: pulumi.Input<string>;
        /**
         * Whether to use distributed training.
         */
        distributed?: pulumi.Input<boolean>;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: pulumi.Input<boolean>;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: pulumi.Input<number>;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: pulumi.Input<number>;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: pulumi.Input<boolean>;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: pulumi.Input<number>;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: pulumi.Input<number>;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: pulumi.Input<number>;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: pulumi.Input<number>;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: pulumi.Input<string | enums.LearningRateScheduler>;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: pulumi.Input<number>;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: pulumi.Input<boolean>;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: pulumi.Input<number>;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: pulumi.Input<number>;
        /**
         * Type of optimizer.
         */
        optimizer?: pulumi.Input<string | enums.StochasticOptimizer>;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: pulumi.Input<number>;
        /**
         * If validation data is not defined, this specifies the split ratio for splitting
         * train data into random train and validation subsets. Must be a float in the range [0, 1].
         */
        splitRatio?: pulumi.Input<number>;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: pulumi.Input<number>;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: pulumi.Input<number>;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: pulumi.Input<number>;
        /**
         * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
         */
        trainingCropSize?: pulumi.Input<number>;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: pulumi.Input<number>;
        /**
         * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
         */
        validationCropSize?: pulumi.Input<number>;
        /**
         * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
         */
        validationResizeSize?: pulumi.Input<number>;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: pulumi.Input<number>;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: pulumi.Input<number>;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: pulumi.Input<number>;
        /**
         * Weighted loss. The accepted values are 0 for no weighted loss.
         * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
         */
        weightedLoss?: pulumi.Input<number>;
    }
    /**
     * imageModelSettingsClassificationArgsProvideDefaults sets the appropriate defaults for ImageModelSettingsClassificationArgs
     */
    export function imageModelSettingsClassificationArgsProvideDefaults(val: ImageModelSettingsClassificationArgs): ImageModelSettingsClassificationArgs {
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
    export interface ImageModelSettingsObjectDetectionArgs {
        /**
         * Settings for advanced scenarios.
         */
        advancedSettings?: pulumi.Input<string>;
        /**
         * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
         */
        amsGradient?: pulumi.Input<boolean>;
        /**
         * Settings for using Augmentations.
         */
        augmentations?: pulumi.Input<string>;
        /**
         * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta1?: pulumi.Input<number>;
        /**
         * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
         */
        beta2?: pulumi.Input<number>;
        /**
         * Maximum number of detections per image, for all classes. Must be a positive integer.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        boxDetectionsPerImage?: pulumi.Input<number>;
        /**
         * During inference, only return proposals with a classification score greater than
         * BoxScoreThreshold. Must be a float in the range[0, 1].
         */
        boxScoreThreshold?: pulumi.Input<number>;
        /**
         * FileDataset id for pretrained checkpoint(s) for incremental training.
         * Make sure to pass CheckpointFilename along with CheckpointDatasetId.
         */
        checkpointDatasetId?: pulumi.Input<string>;
        /**
         * The pretrained checkpoint filename in FileDataset for incremental training.
         * Make sure to pass CheckpointDatasetId along with CheckpointFilename.
         */
        checkpointFilename?: pulumi.Input<string>;
        /**
         * Frequency to store model checkpoints. Must be a positive integer.
         */
        checkpointFrequency?: pulumi.Input<number>;
        /**
         * The id of a previous run that has a pretrained checkpoint for incremental training.
         */
        checkpointRunId?: pulumi.Input<string>;
        /**
         * Whether to use distributed training.
         */
        distributed?: pulumi.Input<boolean>;
        /**
         * Enable early stopping logic during training.
         */
        earlyStopping?: pulumi.Input<boolean>;
        /**
         * Minimum number of epochs or validation evaluations to wait before primary metric improvement
         * is tracked for early stopping. Must be a positive integer.
         */
        earlyStoppingDelay?: pulumi.Input<number>;
        /**
         * Minimum number of epochs or validation evaluations with no primary metric improvement before
         * the run is stopped. Must be a positive integer.
         */
        earlyStoppingPatience?: pulumi.Input<number>;
        /**
         * Enable normalization when exporting ONNX model.
         */
        enableOnnxNormalization?: pulumi.Input<boolean>;
        /**
         * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
         */
        evaluationFrequency?: pulumi.Input<number>;
        /**
         * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
         * updating the model weights while accumulating the gradients of those steps, and then using
         * the accumulated gradients to compute the weight updates. Must be a positive integer.
         */
        gradientAccumulationStep?: pulumi.Input<number>;
        /**
         * Image size for train and validation. Must be a positive integer.
         * Note: The training run may get into CUDA OOM if the size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        imageSize?: pulumi.Input<number>;
        /**
         * Number of layers to freeze for the model. Must be a positive integer.
         * For instance, passing 2 as value for 'seresnext' means
         * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
         * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        layersToFreeze?: pulumi.Input<number>;
        /**
         * Initial learning rate. Must be a float in the range [0, 1].
         */
        learningRate?: pulumi.Input<number>;
        /**
         * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
         */
        learningRateScheduler?: pulumi.Input<string | enums.LearningRateScheduler>;
        /**
         * Maximum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        maxSize?: pulumi.Input<number>;
        /**
         * Minimum size of the image to be rescaled before feeding it to the backbone.
         * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        minSize?: pulumi.Input<number>;
        /**
         * Name of the model to use for training.
         * For more information on the available models please visit the official documentation:
         * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
         */
        modelName?: pulumi.Input<string>;
        /**
         * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
         * Note: training run may get into CUDA OOM if the model size is too big.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        modelSize?: pulumi.Input<string | enums.ModelSize>;
        /**
         * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
         */
        momentum?: pulumi.Input<number>;
        /**
         * Enable multi-scale image by varying image size by +/- 50%.
         * Note: training run may get into CUDA OOM if no sufficient GPU memory.
         * Note: This settings is only supported for the 'yolov5' algorithm.
         */
        multiScale?: pulumi.Input<boolean>;
        /**
         * Enable nesterov when optimizer is 'sgd'.
         */
        nesterov?: pulumi.Input<boolean>;
        /**
         * IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1].
         */
        nmsIouThreshold?: pulumi.Input<number>;
        /**
         * Number of training epochs. Must be a positive integer.
         */
        numberOfEpochs?: pulumi.Input<number>;
        /**
         * Number of data loader workers. Must be a non-negative integer.
         */
        numberOfWorkers?: pulumi.Input<number>;
        /**
         * Type of optimizer.
         */
        optimizer?: pulumi.Input<string | enums.StochasticOptimizer>;
        /**
         * Random seed to be used when using deterministic training.
         */
        randomSeed?: pulumi.Input<number>;
        /**
         * If validation data is not defined, this specifies the split ratio for splitting
         * train data into random train and validation subsets. Must be a float in the range [0, 1].
         */
        splitRatio?: pulumi.Input<number>;
        /**
         * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
         */
        stepLRGamma?: pulumi.Input<number>;
        /**
         * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
         */
        stepLRStepSize?: pulumi.Input<number>;
        /**
         * The grid size to use for tiling each image. Note: TileGridSize must not be
         * None to enable small object detection logic. A string containing two integers in mxn format.
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileGridSize?: pulumi.Input<string>;
        /**
         * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tileOverlapRatio?: pulumi.Input<number>;
        /**
         * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
         * Used in validation/ inference. Must be float in the range [0, 1].
         * Note: This settings is not supported for the 'yolov5' algorithm.
         */
        tilePredictionsNmsThreshold?: pulumi.Input<number>;
        /**
         * Training batch size. Must be a positive integer.
         */
        trainingBatchSize?: pulumi.Input<number>;
        /**
         * Validation batch size. Must be a positive integer.
         */
        validationBatchSize?: pulumi.Input<number>;
        /**
         * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
         */
        validationIouThreshold?: pulumi.Input<number>;
        /**
         * Metric computation method to use for validation metrics.
         */
        validationMetricType?: pulumi.Input<string | enums.ValidationMetricType>;
        /**
         * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
         */
        warmupCosineLRCycles?: pulumi.Input<number>;
        /**
         * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
         */
        warmupCosineLRWarmupEpochs?: pulumi.Input<number>;
        /**
         * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
         */
        weightDecay?: pulumi.Input<number>;
    }
    /**
     * imageModelSettingsObjectDetectionArgsProvideDefaults sets the appropriate defaults for ImageModelSettingsObjectDetectionArgs
     */
    export function imageModelSettingsObjectDetectionArgsProvideDefaults(val: ImageModelSettingsObjectDetectionArgs): ImageModelSettingsObjectDetectionArgs {
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
    export interface ImageObjectDetectionArgs {
        /**
         * [Required] Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
         */
        dataSettings: pulumi.Input<ImageVerticalDataSettingsArgs>;
        /**
         * [Required] Limit settings for the AutoML job.
         */
        limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Settings used for training the model.
         */
        modelSettings?: pulumi.Input<ImageModelSettingsObjectDetectionArgs>;
        /**
         * Primary metric to optimize for this task.
         */
        primaryMetric?: pulumi.Input<string | enums.ObjectDetectionPrimaryMetrics>;
        /**
         * Search space for sampling different combinations of models and their hyperparameters.
         */
        searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsObjectDetectionArgs>[]>;
        /**
         * Model sweeping and hyperparameter sweeping related settings.
         */
        sweepSettings?: pulumi.Input<ImageSweepSettingsArgs>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'ImageObjectDetection'.
         */
        taskType: pulumi.Input<"ImageObjectDetection">;
    }
    /**
     * imageObjectDetectionArgsProvideDefaults sets the appropriate defaults for ImageObjectDetectionArgs
     */
    export function imageObjectDetectionArgsProvideDefaults(val: ImageObjectDetectionArgs): ImageObjectDetectionArgs {
        return {
            ...val,
            dataSettings: pulumi.output(val.dataSettings).apply(imageVerticalDataSettingsArgsProvideDefaults),
            limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
            logVerbosity: (val.logVerbosity) ?? "Info",
            modelSettings: (val.modelSettings ? pulumi.output(val.modelSettings).apply(imageModelSettingsObjectDetectionArgsProvideDefaults) : undefined),
            primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
        };
    }

    /**
     * Limit settings for model sweeping and hyperparameter sweeping.
     */
    export interface ImageSweepLimitSettingsArgs {
        /**
         * Maximum number of concurrent iterations for the underlying Sweep job.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Maximum number of iterations for the underlying Sweep job.
         */
        maxTrials?: pulumi.Input<number>;
    }

    /**
     * Model sweeping and hyperparameter sweeping related settings.
     */
    export interface ImageSweepSettingsArgs {
        /**
         * Type of early termination policy.
         */
        earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs>;
        /**
         * [Required] Limit settings for model sweeping and hyperparameter sweeping.
         */
        limits: pulumi.Input<ImageSweepLimitSettingsArgs>;
        /**
         * [Required] Type of the hyperparameter sampling algorithms.
         */
        samplingAlgorithm: pulumi.Input<string | enums.SamplingAlgorithmType>;
    }

    /**
     * Collection of registered Tabular Dataset Ids and other data settings required for training and validating models.
     */
    export interface ImageVerticalDataSettingsArgs {
        /**
         * [Required] Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName: pulumi.Input<string>;
        /**
         * Test data input.
         */
        testData?: pulumi.Input<TestDataSettingsArgs>;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<TrainingDataSettingsArgs>;
        /**
         * Settings for the validation dataset.
         */
        validationData?: pulumi.Input<ImageVerticalValidationDataSettingsArgs>;
    }
    /**
     * imageVerticalDataSettingsArgsProvideDefaults sets the appropriate defaults for ImageVerticalDataSettingsArgs
     */
    export function imageVerticalDataSettingsArgsProvideDefaults(val: ImageVerticalDataSettingsArgs): ImageVerticalDataSettingsArgs {
        return {
            ...val,
            testData: (val.testData ? pulumi.output(val.testData).apply(testDataSettingsArgsProvideDefaults) : undefined),
            trainingData: pulumi.output(val.trainingData).apply(trainingDataSettingsArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(imageVerticalValidationDataSettingsArgsProvideDefaults) : undefined),
        };
    }

    export interface ImageVerticalValidationDataSettingsArgs {
        /**
         * Validation data MLTable.
         */
        data?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
    }
    /**
     * imageVerticalValidationDataSettingsArgsProvideDefaults sets the appropriate defaults for ImageVerticalValidationDataSettingsArgs
     */
    export function imageVerticalValidationDataSettingsArgsProvideDefaults(val: ImageVerticalValidationDataSettingsArgs): ImageVerticalValidationDataSettingsArgs {
        return {
            ...val,
            data: (val.data ? pulumi.output(val.data).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    export interface InferenceContainerPropertiesArgs {
        /**
         * The route to check the liveness of the inference server container.
         */
        livenessRoute?: pulumi.Input<RouteArgs>;
        /**
         * The route to check the readiness of the inference server container.
         */
        readinessRoute?: pulumi.Input<RouteArgs>;
        /**
         * The port to send the scoring requests to, within the inference server container.
         */
        scoringRoute?: pulumi.Input<RouteArgs>;
    }

    /**
     * Job endpoint definition
     */
    export interface JobServiceArgs {
        /**
         * Url for endpoint.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * Endpoint type.
         */
        jobServiceType?: pulumi.Input<string>;
        /**
         * Port for endpoint.
         */
        port?: pulumi.Input<number>;
        /**
         * Additional properties to set on the endpoint.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    export interface KerberosKeytabCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'KerberosKeytab'.
         */
        credentialsType: pulumi.Input<"KerberosKeytab">;
        /**
         * [Required] IP Address or DNS HostName.
         */
        kerberosKdcAddress: pulumi.Input<string>;
        /**
         * [Required] Kerberos Username
         */
        kerberosPrincipal: pulumi.Input<string>;
        /**
         * [Required] Domain over which a Kerberos authentication server has the authority to authenticate a user, host or service.
         */
        kerberosRealm: pulumi.Input<string>;
        /**
         * [Required] Keytab secrets.
         */
        secrets: pulumi.Input<KerberosKeytabSecretsArgs>;
    }

    export interface KerberosKeytabSecretsArgs {
        /**
         * Kerberos keytab secret.
         */
        kerberosKeytab?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'KerberosKeytab'.
         */
        secretsType: pulumi.Input<"KerberosKeytab">;
    }

    export interface KerberosPasswordCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'KerberosPassword'.
         */
        credentialsType: pulumi.Input<"KerberosPassword">;
        /**
         * [Required] IP Address or DNS HostName.
         */
        kerberosKdcAddress: pulumi.Input<string>;
        /**
         * [Required] Kerberos Username
         */
        kerberosPrincipal: pulumi.Input<string>;
        /**
         * [Required] Domain over which a Kerberos authentication server has the authority to authenticate a user, host or service.
         */
        kerberosRealm: pulumi.Input<string>;
        /**
         * [Required] Kerberos password secrets.
         */
        secrets: pulumi.Input<KerberosPasswordSecretsArgs>;
    }

    export interface KerberosPasswordSecretsArgs {
        /**
         * Kerberos password secret.
         */
        kerberosPassword?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'KerberosPassword'.
         */
        secretsType: pulumi.Input<"KerberosPassword">;
    }

    /**
     * Properties specific to a KubernetesOnlineDeployment.
     */
    export interface KubernetesOnlineDeploymentArgs {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: pulumi.Input<boolean>;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: pulumi.Input<CodeConfigurationArgs>;
        /**
         * The resource requirements for the container (cpu and memory).
         */
        containerResourceRequirements?: pulumi.Input<ContainerResourceRequirementsArgs>;
        /**
         * Description of the endpoint deployment.
         */
        description?: pulumi.Input<string>;
        /**
         * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
         */
        egressPublicNetworkAccess?: pulumi.Input<string | enums.EgressPublicNetworkAccessType>;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'Kubernetes'.
         */
        endpointComputeType: pulumi.Input<"Kubernetes">;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Compute instance type.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Liveness probe monitors the health of the container regularly.
         */
        livenessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * The URI path to the model.
         */
        model?: pulumi.Input<string>;
        /**
         * The path to mount the model in custom container.
         */
        modelMountPath?: pulumi.Input<string>;
        /**
         * If true, enable private network connection.
         * DEPRECATED for future API versions. Use EgressPublicNetworkAccess.
         */
        privateNetworkConnection?: pulumi.Input<boolean>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
         */
        readinessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * Request settings for the deployment.
         */
        requestSettings?: pulumi.Input<OnlineRequestSettingsArgs>;
        /**
         * Scale settings for the deployment.
         * If it is null or not provided,
         * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
         * and to DefaultScaleSettings for ManagedOnlineDeployment.
         */
        scaleSettings?: pulumi.Input<DefaultScaleSettingsArgs | TargetUtilizationScaleSettingsArgs>;
    }
    /**
     * kubernetesOnlineDeploymentArgsProvideDefaults sets the appropriate defaults for KubernetesOnlineDeploymentArgs
     */
    export function kubernetesOnlineDeploymentArgsProvideDefaults(val: KubernetesOnlineDeploymentArgs): KubernetesOnlineDeploymentArgs {
        return {
            ...val,
            appInsightsEnabled: (val.appInsightsEnabled) ?? false,
            egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
            livenessProbe: (val.livenessProbe ? pulumi.output(val.livenessProbe).apply(probeSettingsArgsProvideDefaults) : undefined),
            privateNetworkConnection: (val.privateNetworkConnection) ?? false,
            readinessProbe: (val.readinessProbe ? pulumi.output(val.readinessProbe).apply(probeSettingsArgsProvideDefaults) : undefined),
            requestSettings: (val.requestSettings ? pulumi.output(val.requestSettings).apply(onlineRequestSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Literal input type.
     */
    export interface LiteralJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'Literal'.
         */
        jobInputType: pulumi.Input<"Literal">;
        /**
         * [Required] Literal value for the input.
         */
        value: pulumi.Input<string>;
    }

    export interface MLFlowModelJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'MLFlowModel'.
         */
        jobInputType: pulumi.Input<"MLFlowModel">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * mlflowModelJobInputArgsProvideDefaults sets the appropriate defaults for MLFlowModelJobInputArgs
     */
    export function mlflowModelJobInputArgsProvideDefaults(val: MLFlowModelJobInputArgs): MLFlowModelJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface MLFlowModelJobOutputArgs {
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'MLFlowModel'.
         */
        jobOutputType: pulumi.Input<"MLFlowModel">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * mlflowModelJobOutputArgsProvideDefaults sets the appropriate defaults for MLFlowModelJobOutputArgs
     */
    export function mlflowModelJobOutputArgsProvideDefaults(val: MLFlowModelJobOutputArgs): MLFlowModelJobOutputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * MLTable data definition
     */
    export interface MLTableDataArgs {
        /**
         * Enum to determine the type of data.
         * Expected value is 'MLTable'.
         */
        dataType: pulumi.Input<"MLTable">;
        /**
         * [Required] Uri of the data. Usage/meaning depends on Microsoft.MachineLearning.ManagementFrontEnd.Contracts.V20220201Preview.Assets.DataVersionBase.DataType
         */
        dataUri: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Uris referenced in the MLTable definition (required for lineage)
         */
        referencedUris?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * mltableDataArgsProvideDefaults sets the appropriate defaults for MLTableDataArgs
     */
    export function mltableDataArgsProvideDefaults(val: MLTableDataArgs): MLTableDataArgs {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface MLTableJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'MLTable'.
         */
        jobInputType: pulumi.Input<"MLTable">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * mltableJobInputArgsProvideDefaults sets the appropriate defaults for MLTableJobInputArgs
     */
    export function mltableJobInputArgsProvideDefaults(val: MLTableJobInputArgs): MLTableJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface MLTableJobOutputArgs {
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'MLTable'.
         */
        jobOutputType: pulumi.Input<"MLTable">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * mltableJobOutputArgsProvideDefaults sets the appropriate defaults for MLTableJobOutputArgs
     */
    export function mltableJobOutputArgsProvideDefaults(val: MLTableJobOutputArgs): MLTableJobOutputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * Managed identity configuration.
     */
    export interface ManagedIdentityArgs {
        /**
         * Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
         */
        clientId?: pulumi.Input<string>;
        /**
         * Enum to determine identity framework.
         * Expected value is 'Managed'.
         */
        identityType: pulumi.Input<"Managed">;
        /**
         * Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
         */
        objectId?: pulumi.Input<string>;
        /**
         * Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Properties specific to a ManagedOnlineDeployment.
     */
    export interface ManagedOnlineDeploymentArgs {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: pulumi.Input<boolean>;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: pulumi.Input<CodeConfigurationArgs>;
        /**
         * Description of the endpoint deployment.
         */
        description?: pulumi.Input<string>;
        /**
         * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
         */
        egressPublicNetworkAccess?: pulumi.Input<string | enums.EgressPublicNetworkAccessType>;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'Managed'.
         */
        endpointComputeType: pulumi.Input<"Managed">;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Compute instance type.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Liveness probe monitors the health of the container regularly.
         */
        livenessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * The URI path to the model.
         */
        model?: pulumi.Input<string>;
        /**
         * The path to mount the model in custom container.
         */
        modelMountPath?: pulumi.Input<string>;
        /**
         * If true, enable private network connection.
         * DEPRECATED for future API versions. Use EgressPublicNetworkAccess.
         */
        privateNetworkConnection?: pulumi.Input<boolean>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
         */
        readinessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * Request settings for the deployment.
         */
        requestSettings?: pulumi.Input<OnlineRequestSettingsArgs>;
        /**
         * Scale settings for the deployment.
         * If it is null or not provided,
         * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
         * and to DefaultScaleSettings for ManagedOnlineDeployment.
         */
        scaleSettings?: pulumi.Input<DefaultScaleSettingsArgs | TargetUtilizationScaleSettingsArgs>;
    }
    /**
     * managedOnlineDeploymentArgsProvideDefaults sets the appropriate defaults for ManagedOnlineDeploymentArgs
     */
    export function managedOnlineDeploymentArgsProvideDefaults(val: ManagedOnlineDeploymentArgs): ManagedOnlineDeploymentArgs {
        return {
            ...val,
            appInsightsEnabled: (val.appInsightsEnabled) ?? false,
            egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
            livenessProbe: (val.livenessProbe ? pulumi.output(val.livenessProbe).apply(probeSettingsArgsProvideDefaults) : undefined),
            privateNetworkConnection: (val.privateNetworkConnection) ?? false,
            readinessProbe: (val.readinessProbe ? pulumi.output(val.readinessProbe).apply(probeSettingsArgsProvideDefaults) : undefined),
            requestSettings: (val.requestSettings ? pulumi.output(val.requestSettings).apply(onlineRequestSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Defines an early termination policy based on running averages of the primary metric of all runs
     */
    export interface MedianStoppingPolicyArgs {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: pulumi.Input<number>;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: pulumi.Input<number>;
        /**
         *
         * Expected value is 'MedianStopping'.
         */
        policyType: pulumi.Input<"MedianStopping">;
    }
    /**
     * medianStoppingPolicyArgsProvideDefaults sets the appropriate defaults for MedianStoppingPolicyArgs
     */
    export function medianStoppingPolicyArgsProvideDefaults(val: MedianStoppingPolicyArgs): MedianStoppingPolicyArgs {
        return {
            ...val,
            delayEvaluation: (val.delayEvaluation) ?? 0,
            evaluationInterval: (val.evaluationInterval) ?? 0,
        };
    }

    export interface ModelContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * modelContainerArgsProvideDefaults sets the appropriate defaults for ModelContainerArgs
     */
    export function modelContainerArgsProvideDefaults(val: ModelContainerArgs): ModelContainerArgs {
        return {
            ...val,
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Model asset version details.
     */
    export interface ModelVersionArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Mapping of model flavors to their properties.
         */
        flavors?: pulumi.Input<{[key: string]: pulumi.Input<FlavorDataArgs>}>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Name of the training job which produced this model
         */
        jobName?: pulumi.Input<string>;
        /**
         * The storage format for this entity. Used for NCD.
         */
        modelType?: pulumi.Input<string | enums.ModelType>;
        /**
         * The URI path to the model contents.
         */
        modelUri?: pulumi.Input<string>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * modelVersionArgsProvideDefaults sets the appropriate defaults for ModelVersionArgs
     */
    export function modelVersionArgsProvideDefaults(val: ModelVersionArgs): ModelVersionArgs {
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
    export interface MpiArgs {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'Mpi'.
         */
        distributionType: pulumi.Input<"Mpi">;
        /**
         * Number of processes per MPI node.
         */
        processCountPerInstance?: pulumi.Input<number>;
    }

    /**
     * Class for data inputs.
     * NLP - Natural Language Processing.
     */
    export interface NlpVerticalDataSettingsArgs {
        /**
         * [Required] Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName: pulumi.Input<string>;
        /**
         * Test data input.
         */
        testData?: pulumi.Input<TestDataSettingsArgs>;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<TrainingDataSettingsArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<NlpVerticalValidationDataSettingsArgs>;
    }
    /**
     * nlpVerticalDataSettingsArgsProvideDefaults sets the appropriate defaults for NlpVerticalDataSettingsArgs
     */
    export function nlpVerticalDataSettingsArgsProvideDefaults(val: NlpVerticalDataSettingsArgs): NlpVerticalDataSettingsArgs {
        return {
            ...val,
            testData: (val.testData ? pulumi.output(val.testData).apply(testDataSettingsArgsProvideDefaults) : undefined),
            trainingData: pulumi.output(val.trainingData).apply(trainingDataSettingsArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(nlpVerticalValidationDataSettingsArgsProvideDefaults) : undefined),
        };
    }

    export interface NlpVerticalFeaturizationSettingsArgs {
        /**
         * Dataset language, useful for the text data.
         */
        datasetLanguage?: pulumi.Input<string>;
    }

    /**
     * Job execution constraints.
     */
    export interface NlpVerticalLimitSettingsArgs {
        /**
         * Maximum Concurrent AutoML iterations.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Number of AutoML iterations.
         */
        maxTrials?: pulumi.Input<number>;
        /**
         * AutoML job timeout.
         */
        timeout?: pulumi.Input<string>;
    }
    /**
     * nlpVerticalLimitSettingsArgsProvideDefaults sets the appropriate defaults for NlpVerticalLimitSettingsArgs
     */
    export function nlpVerticalLimitSettingsArgsProvideDefaults(val: NlpVerticalLimitSettingsArgs): NlpVerticalLimitSettingsArgs {
        return {
            ...val,
            maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
            maxTrials: (val.maxTrials) ?? 1,
        };
    }

    export interface NlpVerticalValidationDataSettingsArgs {
        /**
         * Validation data MLTable.
         */
        data?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
    }
    /**
     * nlpVerticalValidationDataSettingsArgsProvideDefaults sets the appropriate defaults for NlpVerticalValidationDataSettingsArgs
     */
    export function nlpVerticalValidationDataSettingsArgsProvideDefaults(val: NlpVerticalValidationDataSettingsArgs): NlpVerticalValidationDataSettingsArgs {
        return {
            ...val,
            data: (val.data ? pulumi.output(val.data).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Empty/none datastore credentials.
     */
    export interface NoneDatastoreCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'None'.
         */
        credentialsType: pulumi.Input<"None">;
    }

    /**
     * Optimization objective.
     */
    export interface ObjectiveArgs {
        /**
         * [Required] Defines supported metric goals for hyperparameter tuning
         */
        goal: pulumi.Input<string | enums.Goal>;
        /**
         * [Required] Name of the metric to optimize.
         */
        primaryMetric: pulumi.Input<string>;
    }

    /**
     * Online endpoint configuration
     */
    export interface OnlineEndpointArgs {
        /**
         * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
         */
        authMode: pulumi.Input<string | enums.EndpointAuthMode>;
        /**
         * ARM resource ID of the compute if it exists.
         * optional
         */
        compute?: pulumi.Input<string>;
        /**
         * Description of the inference endpoint.
         */
        description?: pulumi.Input<string>;
        /**
         * EndpointAuthKeys to set initially on an Endpoint.
         * This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
         */
        keys?: pulumi.Input<EndpointAuthKeysArgs>;
        /**
         * Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50.
         */
        mirrorTraffic?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Set to "Enabled" for endpoints that should allow public access when Private Link is enabled.
         */
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessType>;
        /**
         * Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100.
         */
        traffic?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
    }
    /**
     * onlineEndpointArgsProvideDefaults sets the appropriate defaults for OnlineEndpointArgs
     */
    export function onlineEndpointArgsProvideDefaults(val: OnlineEndpointArgs): OnlineEndpointArgs {
        return {
            ...val,
            publicNetworkAccess: (val.publicNetworkAccess) ?? "Enabled",
        };
    }

    /**
     * Online deployment scoring requests configuration.
     */
    export interface OnlineRequestSettingsArgs {
        /**
         * The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
         */
        maxConcurrentRequestsPerInstance?: pulumi.Input<number>;
        /**
         * The maximum amount of time a request will stay in the queue in ISO 8601 format.
         * Defaults to 500ms.
         */
        maxQueueWait?: pulumi.Input<string>;
        /**
         * The scoring timeout in ISO 8601 format.
         * Defaults to 5000ms.
         */
        requestTimeout?: pulumi.Input<string>;
    }
    /**
     * onlineRequestSettingsArgsProvideDefaults sets the appropriate defaults for OnlineRequestSettingsArgs
     */
    export function onlineRequestSettingsArgsProvideDefaults(val: OnlineRequestSettingsArgs): OnlineRequestSettingsArgs {
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
    export interface OutputPathAssetReferenceArgs {
        /**
         * ARM resource ID of the job.
         */
        jobId?: pulumi.Input<string>;
        /**
         * The path of the file/directory in the job output.
         */
        path?: pulumi.Input<string>;
        /**
         * Enum to determine which reference method to use for an asset.
         * Expected value is 'OutputPath'.
         */
        referenceType: pulumi.Input<"OutputPath">;
    }

    /**
     * Pipeline Job definition: defines generic to MFE attributes.
     */
    export interface PipelineJobArgs {
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Inputs for the pipeline job.
         */
        inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>}>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Pipeline'.
         */
        jobType: pulumi.Input<"Pipeline">;
        /**
         * Jobs construct the Pipeline Job.
         */
        jobs?: pulumi.Input<{[key: string]: any}>;
        /**
         * Outputs for the pipeline job
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Schedule definition of job.
         * If no schedule is provided, the job is run once and immediately after submission.
         */
        schedule?: pulumi.Input<CronScheduleArgs | RecurrenceScheduleArgs>;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Pipeline settings, for things like ContinueRunOnStepFailure etc.
         */
        settings?: any;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * pipelineJobArgsProvideDefaults sets the appropriate defaults for PipelineJobArgs
     */
    export function pipelineJobArgsProvideDefaults(val: PipelineJobArgs): PipelineJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
        };
    }

    /**
     * Deployment container liveness/readiness probe configuration.
     */
    export interface ProbeSettingsArgs {
        /**
         * The number of failures to allow before returning an unhealthy status.
         */
        failureThreshold?: pulumi.Input<number>;
        /**
         * The delay before the first probe in ISO 8601 format.
         */
        initialDelay?: pulumi.Input<string>;
        /**
         * The length of time between probes in ISO 8601 format.
         */
        period?: pulumi.Input<string>;
        /**
         * The number of successful probes before returning a healthy status.
         */
        successThreshold?: pulumi.Input<number>;
        /**
         * The probe timeout in ISO 8601 format.
         */
        timeout?: pulumi.Input<string>;
    }
    /**
     * probeSettingsArgsProvideDefaults sets the appropriate defaults for ProbeSettingsArgs
     */
    export function probeSettingsArgsProvideDefaults(val: ProbeSettingsArgs): ProbeSettingsArgs {
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
    export interface PyTorchArgs {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'PyTorch'.
         */
        distributionType: pulumi.Input<"PyTorch">;
        /**
         * Number of processes per node.
         */
        processCountPerInstance?: pulumi.Input<number>;
    }

    /**
     * Defines a Sampling Algorithm that generates values randomly
     */
    export interface RandomSamplingAlgorithmArgs {
        /**
         * The specific type of random algorithm
         */
        rule?: pulumi.Input<string | enums.RandomSamplingAlgorithmRule>;
        /**
         *
         * Expected value is 'Random'.
         */
        samplingAlgorithmType: pulumi.Input<"Random">;
        /**
         * An optional integer to use as the seed for random number generation
         */
        seed?: pulumi.Input<number>;
    }
    /**
     * randomSamplingAlgorithmArgsProvideDefaults sets the appropriate defaults for RandomSamplingAlgorithmArgs
     */
    export function randomSamplingAlgorithmArgsProvideDefaults(val: RandomSamplingAlgorithmArgs): RandomSamplingAlgorithmArgs {
        return {
            ...val,
            rule: (val.rule) ?? "Random",
        };
    }

    /**
     * Recurrence schedule pattern definition
     */
    export interface RecurrencePatternArgs {
        /**
         * [Required] List of hours for recurrence schedule pattern
         */
        hours: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * [Required] List of minutes for recurrence schedule pattern
         */
        minutes: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * List of weekdays for recurrence schedule pattern
         */
        weekdays?: pulumi.Input<pulumi.Input<string | enums.Weekday>[]>;
    }

    /**
     * Recurrence schedule definition
     */
    export interface RecurrenceScheduleArgs {
        /**
         * Specifies end time of schedule in ISO 8601 format.
         * If not present, the schedule will run indefinitely
         */
        endTime?: pulumi.Input<string>;
        /**
         * [Required] Specifies frequency with with which to trigger schedule
         */
        frequency: pulumi.Input<string | enums.RecurrenceFrequency>;
        /**
         * [Required] Specifies schedule interval in conjunction with frequency
         */
        interval: pulumi.Input<number>;
        /**
         * Specifies the recurrence schedule pattern
         */
        pattern?: pulumi.Input<RecurrencePatternArgs>;
        /**
         * Specifies the schedule's status
         */
        scheduleStatus?: pulumi.Input<string | enums.ScheduleStatus>;
        /**
         * Enum to describe type of schedule
         * Expected value is 'Recurrence'.
         */
        scheduleType: pulumi.Input<"Recurrence">;
        /**
         * Specifies start time of schedule in ISO 8601 format.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Specifies time zone in which the schedule runs.
         * TimeZone should follow Windows time zone format.
         */
        timeZone?: pulumi.Input<string>;
    }
    /**
     * recurrenceScheduleArgsProvideDefaults sets the appropriate defaults for RecurrenceScheduleArgs
     */
    export function recurrenceScheduleArgsProvideDefaults(val: RecurrenceScheduleArgs): RecurrenceScheduleArgs {
        return {
            ...val,
            scheduleStatus: (val.scheduleStatus) ?? "Enabled",
            timeZone: (val.timeZone) ?? "UTC",
        };
    }

    /**
     * Regression task in AutoML Table vertical.
     */
    export interface RegressionArgs {
        /**
         * Allowed models for regression task.
         */
        allowedModels?: pulumi.Input<pulumi.Input<string | enums.RegressionModels>[]>;
        /**
         * Blocked models for regression task.
         */
        blockedModels?: pulumi.Input<pulumi.Input<string | enums.RegressionModels>[]>;
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: pulumi.Input<TableVerticalDataSettingsArgs>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Primary metric for regression task.
         */
        primaryMetric?: pulumi.Input<string | enums.RegressionPrimaryMetrics>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'Regression'.
         */
        taskType: pulumi.Input<"Regression">;
        /**
         * Inputs for training phase for an AutoML Job.
         */
        trainingSettings?: pulumi.Input<TrainingSettingsArgs>;
    }
    /**
     * regressionArgsProvideDefaults sets the appropriate defaults for RegressionArgs
     */
    export function regressionArgsProvideDefaults(val: RegressionArgs): RegressionArgs {
        return {
            ...val,
            dataSettings: (val.dataSettings ? pulumi.output(val.dataSettings).apply(tableVerticalDataSettingsArgsProvideDefaults) : undefined),
            featurizationSettings: (val.featurizationSettings ? pulumi.output(val.featurizationSettings).apply(tableVerticalFeaturizationSettingsArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(tableVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
            trainingSettings: (val.trainingSettings ? pulumi.output(val.trainingSettings).apply(trainingSettingsArgsProvideDefaults) : undefined),
        };
    }

    export interface ResourceConfigurationArgs {
        /**
         * Optional number of instances or nodes used by the compute target.
         */
        instanceCount?: pulumi.Input<number>;
        /**
         * Optional type of VM used as supported by the compute target.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Additional properties bag.
         */
        properties?: pulumi.Input<{[key: string]: any}>;
    }
    /**
     * resourceConfigurationArgsProvideDefaults sets the appropriate defaults for ResourceConfigurationArgs
     */
    export function resourceConfigurationArgsProvideDefaults(val: ResourceConfigurationArgs): ResourceConfigurationArgs {
        return {
            ...val,
            instanceCount: (val.instanceCount) ?? 1,
        };
    }

    export interface RouteArgs {
        /**
         * [Required] The path for the route.
         */
        path: pulumi.Input<string>;
        /**
         * [Required] The port for the route.
         */
        port: pulumi.Input<number>;
    }

    /**
     * SAS datastore credentials configuration.
     */
    export interface SasDatastoreCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'Sas'.
         */
        credentialsType: pulumi.Input<"Sas">;
        /**
         * [Required] Storage container secrets.
         */
        secrets: pulumi.Input<SasDatastoreSecretsArgs>;
    }

    /**
     * Datastore SAS secrets.
     */
    export interface SasDatastoreSecretsArgs {
        /**
         * Storage container SAS token.
         */
        sasToken?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'Sas'.
         */
        secretsType: pulumi.Input<"Sas">;
    }

    /**
     * Service Principal datastore credentials configuration.
     */
    export interface ServicePrincipalDatastoreCredentialsArgs {
        /**
         * Authority URL used for authentication.
         */
        authorityUrl?: pulumi.Input<string>;
        /**
         * [Required] Service principal client ID.
         */
        clientId: pulumi.Input<string>;
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'ServicePrincipal'.
         */
        credentialsType: pulumi.Input<"ServicePrincipal">;
        /**
         * Resource the service principal has access to.
         */
        resourceUrl?: pulumi.Input<string>;
        /**
         * [Required] Service principal secrets.
         */
        secrets: pulumi.Input<ServicePrincipalDatastoreSecretsArgs>;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: pulumi.Input<string>;
    }

    /**
     * Datastore Service Principal secrets.
     */
    export interface ServicePrincipalDatastoreSecretsArgs {
        /**
         * Service principal secret.
         */
        clientSecret?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'ServicePrincipal'.
         */
        secretsType: pulumi.Input<"ServicePrincipal">;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuArgs {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: pulumi.Input<number>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: pulumi.Input<string>;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: pulumi.Input<string>;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: pulumi.Input<enums.SkuTier>;
    }

    /**
     * Advances setting to customize StackEnsemble run.
     */
    export interface StackEnsembleSettingsArgs {
        /**
         * Optional parameters to pass to the initializer of the meta-learner.
         */
        stackMetaLearnerKWargs?: any;
        /**
         * Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2.
         */
        stackMetaLearnerTrainPercentage?: pulumi.Input<number>;
        /**
         * The meta-learner is a model trained on the output of the individual heterogeneous models.
         */
        stackMetaLearnerType?: pulumi.Input<string | enums.StackMetaLearnerType>;
    }
    /**
     * stackEnsembleSettingsArgsProvideDefaults sets the appropriate defaults for StackEnsembleSettingsArgs
     */
    export function stackEnsembleSettingsArgsProvideDefaults(val: StackEnsembleSettingsArgs): StackEnsembleSettingsArgs {
        return {
            ...val,
            stackMetaLearnerTrainPercentage: (val.stackMetaLearnerTrainPercentage) ?? 0.2,
            stackMetaLearnerType: (val.stackMetaLearnerType) ?? "None",
        };
    }

    /**
     * Sweep job definition.
     */
    export interface SweepJobArgs {
        /**
         * ARM resource ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Display name of job.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Early termination policies enable canceling poor-performing runs before they complete
         */
        earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs>;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>}>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Sweep'.
         */
        jobType: pulumi.Input<"Sweep">;
        /**
         * Sweep Job limit.
         */
        limits?: pulumi.Input<SweepJobLimitsArgs>;
        /**
         * [Required] Optimization objective.
         */
        objective: pulumi.Input<ObjectiveArgs>;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>}>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] The hyperparameter sampling algorithm
         */
        samplingAlgorithm: pulumi.Input<BayesianSamplingAlgorithmArgs | GridSamplingAlgorithmArgs | RandomSamplingAlgorithmArgs>;
        /**
         * Schedule definition of job.
         * If no schedule is provided, the job is run once and immediately after submission.
         */
        schedule?: pulumi.Input<CronScheduleArgs | RecurrenceScheduleArgs>;
        /**
         * [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
         */
        searchSpace: any;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] Trial component definition.
         */
        trial: pulumi.Input<TrialComponentArgs>;
    }
    /**
     * sweepJobArgsProvideDefaults sets the appropriate defaults for SweepJobArgs
     */
    export function sweepJobArgsProvideDefaults(val: SweepJobArgs): SweepJobArgs {
        return {
            ...val,
            experimentName: (val.experimentName) ?? "Default",
            isArchived: (val.isArchived) ?? false,
            trial: pulumi.output(val.trial).apply(trialComponentArgsProvideDefaults),
        };
    }

    /**
     * Sweep Job limit class.
     */
    export interface SweepJobLimitsArgs {
        /**
         *
         * Expected value is 'Sweep'.
         */
        jobLimitsType: pulumi.Input<"Sweep">;
        /**
         * Sweep Job max concurrent trials.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Sweep Job max total trials.
         */
        maxTotalTrials?: pulumi.Input<number>;
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: pulumi.Input<string>;
        /**
         * Sweep Job Trial timeout value.
         */
        trialTimeout?: pulumi.Input<string>;
    }

    /**
     * Class for data inputs.
     */
    export interface TableVerticalDataSettingsArgs {
        /**
         * [Required] Target column name: This is prediction values column.
         * Also known as label column name in context of classification tasks.
         */
        targetColumnName: pulumi.Input<string>;
        /**
         * Test data input.
         */
        testData?: pulumi.Input<TestDataSettingsArgs>;
        /**
         * [Required] Training data input.
         */
        trainingData: pulumi.Input<TrainingDataSettingsArgs>;
        /**
         * Validation data inputs.
         */
        validationData?: pulumi.Input<TableVerticalValidationDataSettingsArgs>;
        /**
         * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
         */
        weightColumnName?: pulumi.Input<string>;
    }
    /**
     * tableVerticalDataSettingsArgsProvideDefaults sets the appropriate defaults for TableVerticalDataSettingsArgs
     */
    export function tableVerticalDataSettingsArgsProvideDefaults(val: TableVerticalDataSettingsArgs): TableVerticalDataSettingsArgs {
        return {
            ...val,
            testData: (val.testData ? pulumi.output(val.testData).apply(testDataSettingsArgsProvideDefaults) : undefined),
            trainingData: pulumi.output(val.trainingData).apply(trainingDataSettingsArgsProvideDefaults),
            validationData: (val.validationData ? pulumi.output(val.validationData).apply(tableVerticalValidationDataSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Featurization Configuration.
     */
    export interface TableVerticalFeaturizationSettingsArgs {
        /**
         * These transformers shall not be used in featurization.
         */
        blockedTransformers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Dictionary of column name and its type (int, float, string, datetime etc).
         */
        columnNameAndTypes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Dataset language, useful for the text data.
         */
        datasetLanguage?: pulumi.Input<string>;
        /**
         * Columns to be dropped from data during featurization.
         */
        dropColumns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Determines whether to use Dnn based featurizers for data featurization.
         */
        enableDnnFeaturization?: pulumi.Input<boolean>;
        /**
         * Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.
         * If 'Off' is selected then no featurization is done.
         * If 'Custom' is selected then user can specify additional inputs to customize how featurization is done.
         */
        mode?: pulumi.Input<string | enums.FeaturizationMode>;
        /**
         * User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor.
         */
        transformerParams?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<ColumnTransformerArgs>[]>}>;
    }
    /**
     * tableVerticalFeaturizationSettingsArgsProvideDefaults sets the appropriate defaults for TableVerticalFeaturizationSettingsArgs
     */
    export function tableVerticalFeaturizationSettingsArgsProvideDefaults(val: TableVerticalFeaturizationSettingsArgs): TableVerticalFeaturizationSettingsArgs {
        return {
            ...val,
            enableDnnFeaturization: (val.enableDnnFeaturization) ?? false,
            mode: (val.mode) ?? "Auto",
        };
    }

    /**
     * Job execution constraints.
     */
    export interface TableVerticalLimitSettingsArgs {
        /**
         * Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations.
         */
        enableEarlyTermination?: pulumi.Input<boolean>;
        /**
         * Exit score for the AutoML job.
         */
        exitScore?: pulumi.Input<number>;
        /**
         * Maximum Concurrent iterations.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * Max cores per iteration.
         */
        maxCoresPerTrial?: pulumi.Input<number>;
        /**
         * Number of iterations.
         */
        maxTrials?: pulumi.Input<number>;
        /**
         * AutoML job timeout.
         */
        timeout?: pulumi.Input<string>;
        /**
         * Iteration timeout.
         */
        trialTimeout?: pulumi.Input<string>;
    }
    /**
     * tableVerticalLimitSettingsArgsProvideDefaults sets the appropriate defaults for TableVerticalLimitSettingsArgs
     */
    export function tableVerticalLimitSettingsArgsProvideDefaults(val: TableVerticalLimitSettingsArgs): TableVerticalLimitSettingsArgs {
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
    export interface TableVerticalValidationDataSettingsArgs {
        /**
         * Columns to use for CVSplit data.
         */
        cvSplitColumnNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Validation data MLTable.
         */
        data?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * Number of cross validation folds to be applied on training dataset
         * when validation dataset is not provided.
         */
        nCrossValidations?: pulumi.Input<AutoNCrossValidationsArgs | CustomNCrossValidationsArgs>;
        /**
         * The fraction of training dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        validationDataSize?: pulumi.Input<number>;
    }
    /**
     * tableVerticalValidationDataSettingsArgsProvideDefaults sets the appropriate defaults for TableVerticalValidationDataSettingsArgs
     */
    export function tableVerticalValidationDataSettingsArgsProvideDefaults(val: TableVerticalValidationDataSettingsArgs): TableVerticalValidationDataSettingsArgs {
        return {
            ...val,
            data: (val.data ? pulumi.output(val.data).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    export interface TargetUtilizationScaleSettingsArgs {
        /**
         * The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances.
         */
        maxInstances?: pulumi.Input<number>;
        /**
         * The minimum number of instances to always be present.
         */
        minInstances?: pulumi.Input<number>;
        /**
         * The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
         */
        pollingInterval?: pulumi.Input<string>;
        /**
         *
         * Expected value is 'TargetUtilization'.
         */
        scaleType: pulumi.Input<"TargetUtilization">;
        /**
         * Target CPU usage for the autoscaler.
         */
        targetUtilizationPercentage?: pulumi.Input<number>;
    }
    /**
     * targetUtilizationScaleSettingsArgsProvideDefaults sets the appropriate defaults for TargetUtilizationScaleSettingsArgs
     */
    export function targetUtilizationScaleSettingsArgsProvideDefaults(val: TargetUtilizationScaleSettingsArgs): TargetUtilizationScaleSettingsArgs {
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
    export interface TensorFlowArgs {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'TensorFlow'.
         */
        distributionType: pulumi.Input<"TensorFlow">;
        /**
         * Number of parameter server tasks.
         */
        parameterServerCount?: pulumi.Input<number>;
        /**
         * Number of workers. If not specified, will default to the instance count.
         */
        workerCount?: pulumi.Input<number>;
    }
    /**
     * tensorFlowArgsProvideDefaults sets the appropriate defaults for TensorFlowArgs
     */
    export function tensorFlowArgsProvideDefaults(val: TensorFlowArgs): TensorFlowArgs {
        return {
            ...val,
            parameterServerCount: (val.parameterServerCount) ?? 0,
        };
    }

    /**
     * Test data inputs.
     */
    export interface TestDataSettingsArgs {
        /**
         * Test data MLTable.
         */
        data?: pulumi.Input<MLTableJobInputArgs>;
        /**
         * The fraction of test dataset that needs to be set aside for validation purpose.
         * Values between (0.0 , 1.0)
         * Applied when validation dataset is not provided.
         */
        testDataSize?: pulumi.Input<number>;
    }
    /**
     * testDataSettingsArgsProvideDefaults sets the appropriate defaults for TestDataSettingsArgs
     */
    export function testDataSettingsArgsProvideDefaults(val: TestDataSettingsArgs): TestDataSettingsArgs {
        return {
            ...val,
            data: (val.data ? pulumi.output(val.data).apply(mltableJobInputArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Text Classification task in AutoML NLP vertical.
     * NLP - Natural Language Processing.
     */
    export interface TextClassificationArgs {
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: pulumi.Input<NlpVerticalDataSettingsArgs>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * Primary metric for Text-Classification task.
         */
        primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextClassification'.
         */
        taskType: pulumi.Input<"TextClassification">;
    }
    /**
     * textClassificationArgsProvideDefaults sets the appropriate defaults for TextClassificationArgs
     */
    export function textClassificationArgsProvideDefaults(val: TextClassificationArgs): TextClassificationArgs {
        return {
            ...val,
            dataSettings: (val.dataSettings ? pulumi.output(val.dataSettings).apply(nlpVerticalDataSettingsArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(nlpVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
            primaryMetric: (val.primaryMetric) ?? "Accuracy",
        };
    }

    /**
     * Text Classification Multilabel task in AutoML NLP vertical.
     * NLP - Natural Language Processing.
     */
    export interface TextClassificationMultilabelArgs {
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: pulumi.Input<NlpVerticalDataSettingsArgs>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextClassificationMultilabel'.
         */
        taskType: pulumi.Input<"TextClassificationMultilabel">;
    }
    /**
     * textClassificationMultilabelArgsProvideDefaults sets the appropriate defaults for TextClassificationMultilabelArgs
     */
    export function textClassificationMultilabelArgsProvideDefaults(val: TextClassificationMultilabelArgs): TextClassificationMultilabelArgs {
        return {
            ...val,
            dataSettings: (val.dataSettings ? pulumi.output(val.dataSettings).apply(nlpVerticalDataSettingsArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(nlpVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
        };
    }

    /**
     * Text-NER task in AutoML NLP vertical.
     * NER - Named Entity Recognition.
     * NLP - Natural Language Processing.
     */
    export interface TextNerArgs {
        /**
         * Data inputs for AutoMLJob.
         */
        dataSettings?: pulumi.Input<NlpVerticalDataSettingsArgs>;
        /**
         * Featurization inputs needed for AutoML job.
         */
        featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs>;
        /**
         * Execution constraints for AutoMLJob.
         */
        limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs>;
        /**
         * Log verbosity for the job.
         */
        logVerbosity?: pulumi.Input<string | enums.LogVerbosity>;
        /**
         * AutoMLJob Task type.
         * Expected value is 'TextNER'.
         */
        taskType: pulumi.Input<"TextNER">;
    }
    /**
     * textNerArgsProvideDefaults sets the appropriate defaults for TextNerArgs
     */
    export function textNerArgsProvideDefaults(val: TextNerArgs): TextNerArgs {
        return {
            ...val,
            dataSettings: (val.dataSettings ? pulumi.output(val.dataSettings).apply(nlpVerticalDataSettingsArgsProvideDefaults) : undefined),
            limitSettings: (val.limitSettings ? pulumi.output(val.limitSettings).apply(nlpVerticalLimitSettingsArgsProvideDefaults) : undefined),
            logVerbosity: (val.logVerbosity) ?? "Info",
        };
    }

    /**
     * Training data input.
     */
    export interface TrainingDataSettingsArgs {
        /**
         * [Required] Training data MLTable.
         */
        data: pulumi.Input<MLTableJobInputArgs>;
    }
    /**
     * trainingDataSettingsArgsProvideDefaults sets the appropriate defaults for TrainingDataSettingsArgs
     */
    export function trainingDataSettingsArgsProvideDefaults(val: TrainingDataSettingsArgs): TrainingDataSettingsArgs {
        return {
            ...val,
            data: pulumi.output(val.data).apply(mltableJobInputArgsProvideDefaults),
        };
    }

    /**
     * Training related configuration.
     */
    export interface TrainingSettingsArgs {
        /**
         * Enable recommendation of DNN models.
         */
        enableDnnTraining?: pulumi.Input<boolean>;
        /**
         * Flag to turn on explainability on best model.
         */
        enableModelExplainability?: pulumi.Input<boolean>;
        /**
         * Flag for enabling onnx compatible models.
         */
        enableOnnxCompatibleModels?: pulumi.Input<boolean>;
        /**
         * Enable stack ensemble run.
         */
        enableStackEnsemble?: pulumi.Input<boolean>;
        /**
         * Enable voting ensemble run.
         */
        enableVoteEnsemble?: pulumi.Input<boolean>;
        /**
         * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
         * Configure this parameter with a higher value than 300 secs, if more time is needed.
         */
        ensembleModelDownloadTimeout?: pulumi.Input<string>;
        /**
         * Stack ensemble settings for stack ensemble run.
         */
        stackEnsembleSettings?: pulumi.Input<StackEnsembleSettingsArgs>;
    }
    /**
     * trainingSettingsArgsProvideDefaults sets the appropriate defaults for TrainingSettingsArgs
     */
    export function trainingSettingsArgsProvideDefaults(val: TrainingSettingsArgs): TrainingSettingsArgs {
        return {
            ...val,
            enableDnnTraining: (val.enableDnnTraining) ?? false,
            enableModelExplainability: (val.enableModelExplainability) ?? false,
            enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
            enableStackEnsemble: (val.enableStackEnsemble) ?? true,
            enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
            ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
            stackEnsembleSettings: (val.stackEnsembleSettings ? pulumi.output(val.stackEnsembleSettings).apply(stackEnsembleSettingsArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Trial component definition.
     */
    export interface TrialComponentArgs {
        /**
         * ARM resource ID of the code asset.
         */
        codeId?: pulumi.Input<string>;
        /**
         * [Required] The command to execute on startup of the job. eg. "python train.py"
         */
        command: pulumi.Input<string>;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        distribution?: pulumi.Input<MpiArgs | PyTorchArgs | TensorFlowArgs>;
        /**
         * [Required] The ARM resource ID of the Environment specification for the job.
         */
        environmentId: pulumi.Input<string>;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Compute Resource configuration for the job.
         */
        resources?: pulumi.Input<ResourceConfigurationArgs>;
    }
    /**
     * trialComponentArgsProvideDefaults sets the appropriate defaults for TrialComponentArgs
     */
    export function trialComponentArgsProvideDefaults(val: TrialComponentArgs): TrialComponentArgs {
        return {
            ...val,
            resources: (val.resources ? pulumi.output(val.resources).apply(resourceConfigurationArgsProvideDefaults) : undefined),
        };
    }

    export interface TritonModelJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'TritonModel'.
         */
        jobInputType: pulumi.Input<"TritonModel">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * tritonModelJobInputArgsProvideDefaults sets the appropriate defaults for TritonModelJobInputArgs
     */
    export function tritonModelJobInputArgsProvideDefaults(val: TritonModelJobInputArgs): TritonModelJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface TritonModelJobOutputArgs {
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'TritonModel'.
         */
        jobOutputType: pulumi.Input<"TritonModel">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * tritonModelJobOutputArgsProvideDefaults sets the appropriate defaults for TritonModelJobOutputArgs
     */
    export function tritonModelJobOutputArgsProvideDefaults(val: TritonModelJobOutputArgs): TritonModelJobOutputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * Defines an early termination policy that cancels a given percentage of runs at each evaluation interval.
     */
    export interface TruncationSelectionPolicyArgs {
        /**
         * Number of intervals by which to delay the first evaluation.
         */
        delayEvaluation?: pulumi.Input<number>;
        /**
         * Interval (number of runs) between policy evaluations.
         */
        evaluationInterval?: pulumi.Input<number>;
        /**
         *
         * Expected value is 'TruncationSelection'.
         */
        policyType: pulumi.Input<"TruncationSelection">;
        /**
         * The percentage of runs to cancel at each evaluation interval.
         */
        truncationPercentage?: pulumi.Input<number>;
    }
    /**
     * truncationSelectionPolicyArgsProvideDefaults sets the appropriate defaults for TruncationSelectionPolicyArgs
     */
    export function truncationSelectionPolicyArgsProvideDefaults(val: TruncationSelectionPolicyArgs): TruncationSelectionPolicyArgs {
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
    export interface UriFileDataVersionArgs {
        /**
         * Enum to determine the type of data.
         * Expected value is 'UriFile'.
         */
        dataType: pulumi.Input<"UriFile">;
        /**
         * [Required] Uri of the data. Usage/meaning depends on Microsoft.MachineLearning.ManagementFrontEnd.Contracts.V20220201Preview.Assets.DataVersionBase.DataType
         */
        dataUri: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * uriFileDataVersionArgsProvideDefaults sets the appropriate defaults for UriFileDataVersionArgs
     */
    export function uriFileDataVersionArgsProvideDefaults(val: UriFileDataVersionArgs): UriFileDataVersionArgs {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface UriFileJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'UriFile'.
         */
        jobInputType: pulumi.Input<"UriFile">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * uriFileJobInputArgsProvideDefaults sets the appropriate defaults for UriFileJobInputArgs
     */
    export function uriFileJobInputArgsProvideDefaults(val: UriFileJobInputArgs): UriFileJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface UriFileJobOutputArgs {
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'UriFile'.
         */
        jobOutputType: pulumi.Input<"UriFile">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * uriFileJobOutputArgsProvideDefaults sets the appropriate defaults for UriFileJobOutputArgs
     */
    export function uriFileJobOutputArgsProvideDefaults(val: UriFileJobOutputArgs): UriFileJobOutputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * uri-folder data version entity
     */
    export interface UriFolderDataVersionArgs {
        /**
         * Enum to determine the type of data.
         * Expected value is 'UriFolder'.
         */
        dataType: pulumi.Input<"UriFolder">;
        /**
         * [Required] Uri of the data. Usage/meaning depends on Microsoft.MachineLearning.ManagementFrontEnd.Contracts.V20220201Preview.Assets.DataVersionBase.DataType
         */
        dataUri: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * Is the asset archived?
         */
        isArchived?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
    /**
     * uriFolderDataVersionArgsProvideDefaults sets the appropriate defaults for UriFolderDataVersionArgs
     */
    export function uriFolderDataVersionArgsProvideDefaults(val: UriFolderDataVersionArgs): UriFolderDataVersionArgs {
        return {
            ...val,
            isAnonymous: (val.isAnonymous) ?? false,
            isArchived: (val.isArchived) ?? false,
        };
    }

    export interface UriFolderJobInputArgs {
        /**
         * Description for the input.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Input Type.
         * Expected value is 'UriFolder'.
         */
        jobInputType: pulumi.Input<"UriFolder">;
        /**
         * Input Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.InputDeliveryMode>;
        /**
         * [Required] Input Asset URI.
         */
        uri: pulumi.Input<string>;
    }
    /**
     * uriFolderJobInputArgsProvideDefaults sets the appropriate defaults for UriFolderJobInputArgs
     */
    export function uriFolderJobInputArgsProvideDefaults(val: UriFolderJobInputArgs): UriFolderJobInputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadOnlyMount",
        };
    }

    export interface UriFolderJobOutputArgs {
        /**
         * Description for the output.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine the Job Output Type.
         * Expected value is 'UriFolder'.
         */
        jobOutputType: pulumi.Input<"UriFolder">;
        /**
         * Output Asset Delivery Mode.
         */
        mode?: pulumi.Input<string | enums.OutputDeliveryMode>;
        /**
         * Output Asset URI.
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * uriFolderJobOutputArgsProvideDefaults sets the appropriate defaults for UriFolderJobOutputArgs
     */
    export function uriFolderJobOutputArgsProvideDefaults(val: UriFolderJobOutputArgs): UriFolderJobOutputArgs {
        return {
            ...val,
            mode: (val.mode) ?? "ReadWriteMount",
        };
    }

    /**
     * User identity configuration.
     */
    export interface UserIdentityArgs {
        /**
         * Enum to determine identity framework.
         * Expected value is 'UserIdentity'.
         */
        identityType: pulumi.Input<"UserIdentity">;
    }
