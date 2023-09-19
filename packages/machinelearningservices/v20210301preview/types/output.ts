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

    export interface AutoScaleSettingsResponse {
        /**
         * Maximum number of instances for this deployment.
         */
        maxInstances?: number;
        /**
         * Minimum number of instances for this deployment.
         */
        minInstances?: number;
        /**
         * The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
         */
        pollingInterval?: string;
        /**
         *
         * Expected value is 'Auto'.
         */
        scaleType: "Auto";
        /**
         * Target CPU usage for the autoscaler.
         */
        targetUtilizationPercentage?: number;
    }

    /**
     * Azure Blob datastore configuration.
     */
    export interface AzureBlobContentsResponse {
        /**
         * [Required] Storage account name.
         */
        accountName: string;
        /**
         * [Required] Storage account container name.
         */
        containerName: string;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureBlob'.
         */
        contentsType: "AzureBlob";
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse | SqlAdminDatastoreCredentialsResponse;
        /**
         * [Required] Azure cloud endpoint for the storage account.
         */
        endpoint: string;
        /**
         * [Required] Protocol used to communicate with the storage account.
         */
        protocol: string;
    }

    /**
     * Azure Data Lake Gen1 datastore configuration.
     */
    export interface AzureDataLakeGen1ContentsResponse {
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen1'.
         */
        contentsType: "AzureDataLakeGen1";
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse | SqlAdminDatastoreCredentialsResponse;
        /**
         * [Required] Azure Data Lake store name.
         */
        storeName: string;
    }

    /**
     * Azure Data Lake Gen2 datastore configuration.
     */
    export interface AzureDataLakeGen2ContentsResponse {
        /**
         * [Required] Storage account name.
         */
        accountName: string;
        /**
         * [Required] Storage account container name.
         */
        containerName: string;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen2'.
         */
        contentsType: "AzureDataLakeGen2";
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse | SqlAdminDatastoreCredentialsResponse;
        /**
         * [Required] Azure cloud endpoint for the storage account.
         */
        endpoint: string;
        /**
         * [Required] Protocol used to communicate with the storage account.
         */
        protocol: string;
    }

    /**
     * Azure File datastore configuration.
     */
    export interface AzureFileContentsResponse {
        /**
         * [Required] Storage account name.
         */
        accountName: string;
        /**
         * [Required] Storage account container name.
         */
        containerName: string;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureFile'.
         */
        contentsType: "AzureFile";
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse | SqlAdminDatastoreCredentialsResponse;
        /**
         * [Required] Azure cloud endpoint for the storage account.
         */
        endpoint: string;
        /**
         * [Required] Protocol used to communicate with the storage account.
         */
        protocol: string;
    }

    /**
     * Azure Postgre SQL datastore configuration.
     */
    export interface AzurePostgreSqlContentsResponse {
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzurePostgreSql'.
         */
        contentsType: "AzurePostgreSql";
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse | SqlAdminDatastoreCredentialsResponse;
        /**
         * [Required] Azure SQL database name.
         */
        databaseName: string;
        /**
         * Whether the Azure PostgreSQL server requires SSL.
         */
        enableSSL?: boolean;
        /**
         * [Required] Azure cloud endpoint for the database.
         */
        endpoint: string;
        /**
         * [Required] Azure SQL server port.
         */
        portNumber: number;
        /**
         * [Required] Azure SQL server name.
         */
        serverName: string;
    }

    /**
     * Azure SQL Database datastore configuration.
     */
    export interface AzureSqlDatabaseContentsResponse {
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureSqlDatabase'.
         */
        contentsType: "AzureSqlDatabase";
        /**
         * [Required] Account credentials.
         */
        credentials: AccountKeyDatastoreCredentialsResponse | CertificateDatastoreCredentialsResponse | NoneDatastoreCredentialsResponse | SasDatastoreCredentialsResponse | ServicePrincipalDatastoreCredentialsResponse | SqlAdminDatastoreCredentialsResponse;
        /**
         * [Required] Azure SQL database name.
         */
        databaseName: string;
        /**
         * [Required] Azure cloud endpoint for the database.
         */
        endpoint: string;
        /**
         * [Required] Azure SQL server port.
         */
        portNumber: number;
        /**
         * [Required] Azure SQL server name.
         */
        serverName: string;
    }

    /**
     * Defines an early termination policy based on slack criteria, and a frequency and delay interval for evaluation.
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
     * Batch inference settings per deployment.
     */
    export interface BatchDeploymentResponse {
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: CodeConfigurationResponse;
        /**
         * Configuration for compute binding.
         */
        compute?: ComputeConfigurationResponse;
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
         * Output configuration for the batch inference operation.
         */
        outputConfiguration?: BatchOutputConfigurationResponse;
        /**
         * Partition keys list used for Named partitioning.
         */
        partitionKeys?: string[];
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Retry Settings for the batch inference operation.
         */
        retrySettings?: BatchRetrySettingsResponse;
    }

    /**
     * Batch endpoint configuration.
     */
    export interface BatchEndpointResponse {
        /**
         * [Required] Inference endpoint authentication mode type
         */
        authMode?: string;
        /**
         * Description of the inference endpoint.
         */
        description?: string;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Endpoint URI.
         */
        scoringUri: string;
        /**
         * Endpoint Swagger URI.
         */
        swaggerUri: string;
        /**
         * Traffic rules on how the traffic will be routed across deployments.
         */
        traffic?: {[key: string]: number};
    }

    /**
     * Batch inference output configuration.
     */
    export interface BatchOutputConfigurationResponse {
        /**
         * Customized output file name for append_row output action.
         */
        appendRowFileName?: string;
        /**
         * Indicates how the output will be organized.
         */
        outputAction?: string;
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
        resourceUri?: string;
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
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }

    /**
     * Code asset version details.
     */
    export interface CodeVersionResponse {
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * [Required] The path of the file/directory in the datastore.
         */
        path: string;
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
         * [Required] Compute binding for the job.
         */
        compute: ComputeConfigurationResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        distribution?: MpiResponse | PyTorchResponse | TensorFlowResponse;
        /**
         * The ARM resource ID of the Environment specification for the job.
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
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputDataBindings?: {[key: string]: InputDataBindingResponse};
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        interactionEndpoints: {[key: string]: JobEndpointResponse};
        /**
         * Enum to determine the type of job.
         * Expected value is 'Command'.
         */
        jobType: "Command";
        /**
         * Location of the job output logs and artifacts.
         */
        output: JobOutputResponse;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputDataBindings?: {[key: string]: OutputDataBindingResponse};
        /**
         * Input parameters.
         */
        parameters: any;
        /**
         * Job priority for scheduling policy. Only applies to AMLCompute.
         * Private preview feature and only available to users on the allow list.
         */
        priority?: number;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Specifies the job provisioning state.
         */
        provisioningState: string;
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: string;
    }

    /**
     * Configuration for compute binding.
     */
    export interface ComputeConfigurationResponse {
        /**
         * Number of instances or nodes.
         */
        instanceCount?: number;
        /**
         * SKU type to run on.
         */
        instanceType?: string;
        /**
         * Set to true for jobs running on local compute.
         */
        isLocal?: boolean;
        /**
         * Location for virtual cluster run.
         */
        location?: string;
        /**
         * Additional properties.
         */
        properties?: {[key: string]: string};
        /**
         * ARM resource ID of the Compute you are targeting. If not provided the resource will be deployed as Managed.
         */
        target?: string;
    }

    /**
     * The resource requirements for the container (cpu and memory).
     */
    export interface ContainerResourceRequirementsResponse {
        /**
         * The minimum amount of CPU cores to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpu?: number;
        /**
         * The maximum amount of CPU cores allowed to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpuLimit?: number;
        /**
         * The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
         */
        fpga?: number;
        /**
         * The number of GPU cores in the container.
         */
        gpu?: number;
        /**
         * The minimum amount of memory (in GB) to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memoryInGB?: number;
        /**
         * The maximum amount of memory (in GB) allowed to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memoryInGBLimit?: number;
    }

    /**
     * Container for data asset versions.
     */
    export interface DataContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
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

    /**
     * Data asset version details.
     */
    export interface DataVersionResponse {
        /**
         * The Format of dataset.
         */
        datasetType?: string;
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: string;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * [Required] The path of the file/directory in the datastore.
         */
        path: string;
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
     * Datastore definition.
     */
    export interface DatastorePropertiesResponse {
        /**
         * [Required] Reference to the datastore storage contents.
         */
        contents: AzureBlobContentsResponse | AzureDataLakeGen1ContentsResponse | AzureDataLakeGen2ContentsResponse | AzureFileContentsResponse | AzurePostgreSqlContentsResponse | AzureSqlDatabaseContentsResponse | GlusterFsContentsResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Whether the service has validated access to the datastore with the provided credentials.
         */
        hasBeenValidated: boolean;
        /**
         * Whether this datastore is the default for the workspace.
         */
        isDefault?: boolean;
        /**
         * Information about the datastore origin, if linked.
         */
        linkedInfo?: LinkedInfoResponse;
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
     * Class to represent configuration settings for Docker Build
     */
    export interface DockerBuildResponse {
        /**
         * Path to a snapshot of the Docker Context. This property is only valid if Dockerfile is specified.
         * The path is relative to the asset path which must contain a single Blob URI value.
         * <seealso href="https://docs.docker.com/engine/context/working-with-contexts/" />
         */
        context?: string;
        /**
         * Enum to determine docker specification type. Must be either Build or Image.
         * Expected value is 'Build'.
         */
        dockerSpecificationType: "Build";
        /**
         * [Required] Docker command line instructions to assemble an image.
         * <seealso href="https://repo2docker.readthedocs.io/en/latest/config_files.html#dockerfile-advanced-environments" />
         */
        dockerfile: string;
        /**
         * The platform information of the docker image.
         */
        platform?: DockerImagePlatformResponse;
    }

    export interface DockerImagePlatformResponse {
        /**
         * The OS type the Environment.
         */
        operatingSystemType?: string;
    }

    /**
     * Class to represent configuration settings for Docker Build
     */
    export interface DockerImageResponse {
        /**
         * [Required] Image name of a custom base image.
         * <seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
         */
        dockerImageUri: string;
        /**
         * Enum to determine docker specification type. Must be either Build or Image.
         * Expected value is 'Image'.
         */
        dockerSpecificationType: "Image";
        /**
         * The platform information of the docker image.
         */
        platform?: DockerImagePlatformResponse;
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
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }

    /**
     * Environment specification version details.
     * <see href="https://repo2docker.readthedocs.io/en/latest/specification.html" />
     */
    export interface EnvironmentSpecificationVersionResponse {
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
         * Configuration settings for Docker.
         */
        docker?: DockerBuildResponse | DockerImageResponse;
        /**
         * Environment specification is either user managed or curated by the Azure ML service
         * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/resource-curated-environments" />
         */
        environmentSpecificationType: string;
        /**
         * Defines configuration specific to inference.
         */
        inferenceContainerProperties?: InferenceContainerPropertiesResponse;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: boolean;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }

    export interface FlavorDataResponse {
        /**
         * Model flavor-specific data.
         */
        data?: {[key: string]: string};
    }

    /**
     * GlusterFs datastore configuration.
     */
    export interface GlusterFsContentsResponse {
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'GlusterFs'.
         */
        contentsType: "GlusterFs";
        /**
         * [Required] GlusterFS server address (can be the IP address or server name).
         */
        serverAddress: string;
        /**
         * [Required] GlusterFS volume name.
         */
        volumeName: string;
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

    export interface InputDataBindingResponse {
        /**
         * ARM resource ID of the registered dataVersion.
         */
        dataId?: string;
        /**
         * Mechanism for accessing the data artifact.
         */
        mode?: string;
        /**
         * Location of data inside the container process.
         */
        pathOnCompute?: string;
    }

    /**
     * Job endpoint definition
     */
    export interface JobEndpointResponse {
        /**
         * Url for endpoint.
         */
        endpoint?: string;
        /**
         * Endpoint type.
         */
        jobEndpointType?: string;
        /**
         * Port for endpoint.
         */
        port?: number;
        /**
         * Additional properties to set on the endpoint.
         */
        properties?: {[key: string]: string};
    }

    /**
     * Job output definition container information on where to find job output/logs.
     */
    export interface JobOutputResponse {
        /**
         * ARM ID of the datastore where the job logs and artifacts are stored, or null for the default container ("azureml") in the workspace's storage account.
         */
        datastoreId: string;
        /**
         * Path within the datastore to the job logs and artifacts.
         */
        path: string;
    }

    export interface K8sOnlineDeploymentResponse {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: boolean;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: CodeConfigurationResponse;
        /**
         * Resource requirements for each container instance within an online deployment.
         */
        containerResourceRequirements?: ContainerResourceRequirementsResponse;
        /**
         * Description of the endpoint deployment.
         */
        description?: string;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'K8S'.
         */
        endpointComputeType: "K8S";
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: string;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Deployment container liveness/readiness probe configuration.
         */
        livenessProbe?: ProbeSettingsResponse;
        /**
         * Reference to the model asset for the endpoint deployment.
         */
        model?: DataPathAssetReferenceResponse | IdAssetReferenceResponse | OutputPathAssetReferenceResponse;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint deployment.
         */
        provisioningState: string;
        /**
         * Online deployment scoring requests configuration.
         */
        requestSettings?: OnlineRequestSettingsResponse;
        /**
         * Online deployment scaling configuration.
         */
        scaleSettings?: AutoScaleSettingsResponse | ManualScaleSettingsResponse;
    }

    /**
     * Label category definition
     */
    export interface LabelCategoryResponse {
        /**
         * Indicates whether it is allowed to select multiple classes in this category.
         */
        allowMultiSelect?: boolean;
        /**
         * Dictionary of label classes in this category.
         */
        classes?: {[key: string]: LabelClassResponse};
        /**
         * Display name of the label category.
         */
        displayName?: string;
    }

    /**
     * Label class definition
     */
    export interface LabelClassResponse {
        /**
         * Display name of the label class.
         */
        displayName?: string;
        /**
         * Dictionary of subclasses of the label class.
         */
        subclasses?: {[key: string]: LabelClassResponse};
    }

    /**
     * Labeling dataset configuration definition
     */
    export interface LabelingDatasetConfigurationResponse {
        /**
         * Name of the data asset to perform labeling.
         */
        assetName?: string;
        /**
         * AML dataset version.
         */
        datasetVersion?: string;
        /**
         * Indicates whether to enable incremental dataset refresh.
         */
        incrementalDatasetRefreshEnabled?: boolean;
    }

    /**
     * Properties of a labeling job for image data
     */
    export interface LabelingJobImagePropertiesResponse {
        /**
         * Annotation type of image labeling job.
         */
        annotationType?: string;
        /**
         * Media type of data asset.
         * Expected value is 'Image'.
         */
        mediaType: "Image";
    }

    /**
     * Instructions for labeling job
     */
    export interface LabelingJobInstructionsResponse {
        /**
         * The link to a page with detailed labeling instructions for labelers.
         */
        uri?: string;
    }

    /**
     * Labeling job definition
     */
    export interface LabelingJobResponse {
        /**
         * Created time of the job in UTC timezone.
         */
        createdTimeUtc: string;
        /**
         * Configuration of dataset used in the job.
         */
        datasetConfiguration?: LabelingDatasetConfigurationResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        interactionEndpoints: {[key: string]: JobEndpointResponse};
        /**
         * Labeling instructions of the job.
         */
        jobInstructions?: LabelingJobInstructionsResponse;
        /**
         * [Required] Specifies the type of job. This field should always be set to "Labeling".
         */
        jobType: string;
        /**
         * Label categories of the job.
         */
        labelCategories?: {[key: string]: LabelCategoryResponse};
        /**
         * Media type specific properties in the job.
         */
        labelingJobMediaProperties?: LabelingJobImagePropertiesResponse | LabelingJobTextPropertiesResponse;
        /**
         * Configuration of MLAssist feature in the job.
         */
        mlAssistConfiguration?: MLAssistConfigurationResponse;
        /**
         * Progress metrics of the job.
         */
        progressMetrics: ProgressMetricsResponse;
        /**
         * Internal id of the job(Previously called project).
         */
        projectId: string;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Specifies the labeling job provisioning state.
         */
        provisioningState: string;
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Status messages of the job.
         */
        statusMessages: StatusMessageResponse[];
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }

    /**
     * Properties of a labeling job for text data
     */
    export interface LabelingJobTextPropertiesResponse {
        /**
         * Annotation type of text labeling job.
         */
        annotationType?: string;
        /**
         * Media type of data asset.
         * Expected value is 'Text'.
         */
        mediaType: "Text";
    }

    /**
     * Information about a datastore origin, if linked.
     */
    export interface LinkedInfoResponse {
        /**
         * Linked service ID.
         */
        linkedId?: string;
        /**
         * Linked service resource name.
         */
        linkedResourceName?: string;
        /**
         * Type of the linked service.
         */
        origin?: string;
    }

    /**
     * Labeling MLAssist configuration definition
     */
    export interface MLAssistConfigurationResponse {
        /**
         * AML compute binding used in inferencing.
         */
        inferencingComputeBinding?: ComputeConfigurationResponse;
        /**
         * Indicates whether MLAssist feature is enabled.
         */
        mlAssistEnabled?: boolean;
        /**
         * AML compute binding used in training.
         */
        trainingComputeBinding?: ComputeConfigurationResponse;
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
         * Deployment container liveness/readiness probe configuration.
         */
        livenessProbe?: ProbeSettingsResponse;
        /**
         * Reference to the model asset for the endpoint deployment.
         */
        model?: DataPathAssetReferenceResponse | IdAssetReferenceResponse | OutputPathAssetReferenceResponse;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Provisioning state for the endpoint deployment.
         */
        provisioningState: string;
        /**
         * Deployment container liveness/readiness probe configuration.
         */
        readinessProbe?: ProbeSettingsResponse;
        /**
         * Online deployment scoring requests configuration.
         */
        requestSettings?: OnlineRequestSettingsResponse;
        /**
         * Online deployment scaling configuration.
         */
        scaleSettings?: AutoScaleSettingsResponse | ManualScaleSettingsResponse;
    }

    export interface ManualScaleSettingsResponse {
        /**
         * Fixed number of instances for this deployment.
         */
        instanceCount?: number;
        /**
         * Maximum number of instances for this deployment.
         */
        maxInstances?: number;
        /**
         * Minimum number of instances for this deployment.
         */
        minInstances?: number;
        /**
         *
         * Expected value is 'Manual'.
         */
        scaleType: "Manual";
    }

    /**
     * Defines an early termination policy based on running averages of the primary metric of all runs.
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

    export interface ModelContainerResponse {
        /**
         * The asset description text.
         */
        description?: string;
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
     * Model asset version details.
     */
    export interface ModelVersionResponse {
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: string;
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
         * [Required] The path of the file/directory in the datastore.
         */
        path: string;
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
         * [Required] Inference endpoint authentication mode type
         */
        authMode: string;
        /**
         * Description of the inference endpoint.
         */
        description?: string;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * State of endpoint provisioning.
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
        /**
         * ARM resource ID of the compute if it exists.
         * optional
         */
        target?: string;
        /**
         * Traffic rules on how the traffic will be routed across deployments.
         */
        traffic?: {[key: string]: number};
    }

    /**
     * Online deployment scoring requests configuration.
     */
    export interface OnlineRequestSettingsResponse {
        /**
         * The number of requests allowed to queue at once for this deployment.
         */
        maxConcurrentRequestsPerInstance?: number;
        /**
         * The maximum queue wait time in ISO 8601 format. Supports millisecond precision.
         */
        maxQueueWait?: string;
        /**
         * The request timeout in ISO 8601 format. Supports millisecond precision.
         */
        requestTimeout?: string;
    }

    export interface OutputDataBindingResponse {
        /**
         * ARM resource ID of the datastore where the data output will be stored.
         */
        datastoreId?: string;
        /**
         * Mechanism for data movement to datastore.
         */
        mode?: string;
        /**
         * Location of data inside the container process.
         */
        pathOnCompute?: string;
        /**
         * Path within the datastore to the data.
         */
        pathOnDatastore?: string;
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
     * Progress metrics definition
     */
    export interface ProgressMetricsResponse {
        /**
         * The completed datapoint count.
         */
        completedDatapointCount: number;
        /**
         * The time of last successful incremental dataset refresh in UTC.
         */
        incrementalDatasetLastRefreshTime: string;
        /**
         * The skipped datapoint count.
         */
        skippedDatapointCount: number;
        /**
         * The total datapoint count.
         */
        totalDatapointCount: number;
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
         * Total process count for the distributed job.
         */
        processCount?: number;
    }

    /**
     * Service identity associated with a resource.
     */
    export interface ResourceIdentityResponse {
        /**
         * Client ID that is used when authenticating.
         */
        principalId: string;
        /**
         * AAD Tenant where this identity lives.
         */
        tenantId: string;
        /**
         * Defines values for a ResourceIdentity's type.
         */
        type?: string;
        /**
         * Dictionary of the user assigned identities, key is ARM resource ID of the UAI.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityMetaResponse};
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
        resourceUri?: string;
        /**
         * [Required] ID of the tenant to which the service principal belongs.
         */
        tenantId: string;
    }

    /**
     * SQL Admin datastore credentials configuration.
     */
    export interface SqlAdminDatastoreCredentialsResponse {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'SqlAdmin'.
         */
        credentialsType: "SqlAdmin";
        /**
         * [Required] SQL database user name.
         */
        userId: string;
    }

    /**
     * Active message associated with project
     */
    export interface StatusMessageResponse {
        /**
         * Service-defined message code.
         */
        code: string;
        /**
         * Time in UTC at which the message was created.
         */
        createdTimeUtc: string;
        /**
         * Severity level of message.
         */
        level: string;
        /**
         * A human-readable representation of the message code.
         */
        message: string;
    }

    /**
     * Sweep job definition.
     */
    export interface SweepJobResponse {
        /**
         * [Required] Type of the hyperparameter sampling algorithms
         */
        algorithm: string;
        /**
         * [Required] Compute binding for the job.
         */
        compute: ComputeConfigurationResponse;
        /**
         * The asset description text.
         */
        description?: string;
        /**
         * Early termination policies enable canceling poor-performing runs before they complete.
         */
        earlyTermination?: BanditPolicyResponse | MedianStoppingPolicyResponse | TruncationSelectionPolicyResponse;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: string;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: AmlTokenResponse | ManagedIdentityResponse;
        /**
         * List of JobEndpoints.
         * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
         */
        interactionEndpoints: {[key: string]: JobEndpointResponse};
        /**
         * Enum to determine the type of job.
         * Expected value is 'Sweep'.
         */
        jobType: "Sweep";
        /**
         * An upper bound on the number of trials performed in parallel.
         */
        maxConcurrentTrials?: number;
        /**
         * An upper bound on the number of trials to perform.
         */
        maxTotalTrials?: number;
        /**
         * [Required] Optimization objective.
         */
        objective: ObjectiveResponse;
        /**
         * Location of the job output logs and artifacts.
         */
        output: JobOutputResponse;
        /**
         * Job priority for scheduling policy. Only applies to AMLCompute.
         * Private preview feature and only available to users on the allow list.
         */
        priority?: number;
        /**
         * The asset property dictionary.
         */
        properties?: {[key: string]: string};
        /**
         * Specifies the job provisioning state.
         */
        provisioningState: string;
        /**
         * [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
         */
        searchSpace: {[key: string]: any};
        /**
         * The status of a job.
         */
        status: string;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
        /**
         * The total timeout in ISO 8601 format. Only supports duration with precision as low as Minutes.
         */
        timeout?: string;
        /**
         * Trial component definition.
         */
        trial?: TrialComponentResponse;
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
         * Number of workers. Overwrites the node count in compute binding.
         */
        workerCount?: number;
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
         * The ARM resource ID of the Environment specification for the job.
         */
        environmentId?: string;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: {[key: string]: string};
        /**
         * Mapping of input data bindings used in the job.
         */
        inputDataBindings?: {[key: string]: InputDataBindingResponse};
        /**
         * Mapping of output data bindings used in the job.
         */
        outputDataBindings?: {[key: string]: OutputDataBindingResponse};
        /**
         * The max run duration in ISO 8601 format, after which the trial component will be cancelled.
         * Only supports duration with precision as low as Seconds.
         */
        timeout?: string;
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
     * User assigned identities associated with a resource.
     */
    export interface UserAssignedIdentityMetaResponse {
        /**
         * Aka application ID, a unique identifier generated by Azure AD that is tied to an application and service principal during its initial provisioning.
         */
        clientId?: string;
        /**
         * The object ID of the service principal object for your managed identity that is used to grant role-based access to an Azure resource.
         */
        principalId?: string;
    }
