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
         * Storage account secrets.
         */
        secrets?: pulumi.Input<AccountKeyDatastoreSecretsArgs>;
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

    export interface AutoScaleSettingsArgs {
        /**
         * Maximum number of instances for this deployment.
         */
        maxInstances?: pulumi.Input<number>;
        /**
         * Minimum number of instances for this deployment.
         */
        minInstances?: pulumi.Input<number>;
        /**
         * The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
         */
        pollingInterval?: pulumi.Input<string>;
        /**
         *
         * Expected value is 'Auto'.
         */
        scaleType: pulumi.Input<"Auto">;
        /**
         * Target CPU usage for the autoscaler.
         */
        targetUtilizationPercentage?: pulumi.Input<number>;
    }

    /**
     * Azure Blob datastore configuration.
     */
    export interface AzureBlobContentsArgs {
        /**
         * [Required] Storage account name.
         */
        accountName: pulumi.Input<string>;
        /**
         * [Required] Storage account container name.
         */
        containerName: pulumi.Input<string>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureBlob'.
         */
        contentsType: pulumi.Input<"AzureBlob">;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs | SqlAdminDatastoreCredentialsArgs>;
        /**
         * [Required] Azure cloud endpoint for the storage account.
         */
        endpoint: pulumi.Input<string>;
        /**
         * [Required] Protocol used to communicate with the storage account.
         */
        protocol: pulumi.Input<string>;
    }

    /**
     * Azure Data Lake Gen1 datastore configuration.
     */
    export interface AzureDataLakeGen1ContentsArgs {
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen1'.
         */
        contentsType: pulumi.Input<"AzureDataLakeGen1">;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs | SqlAdminDatastoreCredentialsArgs>;
        /**
         * [Required] Azure Data Lake store name.
         */
        storeName: pulumi.Input<string>;
    }

    /**
     * Azure Data Lake Gen2 datastore configuration.
     */
    export interface AzureDataLakeGen2ContentsArgs {
        /**
         * [Required] Storage account name.
         */
        accountName: pulumi.Input<string>;
        /**
         * [Required] Storage account container name.
         */
        containerName: pulumi.Input<string>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureDataLakeGen2'.
         */
        contentsType: pulumi.Input<"AzureDataLakeGen2">;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs | SqlAdminDatastoreCredentialsArgs>;
        /**
         * [Required] Azure cloud endpoint for the storage account.
         */
        endpoint: pulumi.Input<string>;
        /**
         * [Required] Protocol used to communicate with the storage account.
         */
        protocol: pulumi.Input<string>;
    }

    /**
     * Azure File datastore configuration.
     */
    export interface AzureFileContentsArgs {
        /**
         * [Required] Storage account name.
         */
        accountName: pulumi.Input<string>;
        /**
         * [Required] Storage account container name.
         */
        containerName: pulumi.Input<string>;
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureFile'.
         */
        contentsType: pulumi.Input<"AzureFile">;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs | SqlAdminDatastoreCredentialsArgs>;
        /**
         * [Required] Azure cloud endpoint for the storage account.
         */
        endpoint: pulumi.Input<string>;
        /**
         * [Required] Protocol used to communicate with the storage account.
         */
        protocol: pulumi.Input<string>;
    }

    /**
     * Azure Postgre SQL datastore configuration.
     */
    export interface AzurePostgreSqlContentsArgs {
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzurePostgreSql'.
         */
        contentsType: pulumi.Input<"AzurePostgreSql">;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs | SqlAdminDatastoreCredentialsArgs>;
        /**
         * [Required] Azure SQL database name.
         */
        databaseName: pulumi.Input<string>;
        /**
         * Whether the Azure PostgreSQL server requires SSL.
         */
        enableSSL?: pulumi.Input<boolean>;
        /**
         * [Required] Azure cloud endpoint for the database.
         */
        endpoint: pulumi.Input<string>;
        /**
         * [Required] Azure SQL server port.
         */
        portNumber: pulumi.Input<number>;
        /**
         * [Required] Azure SQL server name.
         */
        serverName: pulumi.Input<string>;
    }

    /**
     * Azure SQL Database datastore configuration.
     */
    export interface AzureSqlDatabaseContentsArgs {
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'AzureSqlDatabase'.
         */
        contentsType: pulumi.Input<"AzureSqlDatabase">;
        /**
         * [Required] Account credentials.
         */
        credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs | SqlAdminDatastoreCredentialsArgs>;
        /**
         * [Required] Azure SQL database name.
         */
        databaseName: pulumi.Input<string>;
        /**
         * [Required] Azure cloud endpoint for the database.
         */
        endpoint: pulumi.Input<string>;
        /**
         * [Required] Azure SQL server port.
         */
        portNumber: pulumi.Input<number>;
        /**
         * [Required] Azure SQL server name.
         */
        serverName: pulumi.Input<string>;
    }

    /**
     * Defines an early termination policy based on slack criteria, and a frequency and delay interval for evaluation.
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
     * Batch inference settings per deployment.
     */
    export interface BatchDeploymentArgs {
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: pulumi.Input<CodeConfigurationArgs>;
        /**
         * Configuration for compute binding.
         */
        compute?: pulumi.Input<ComputeConfigurationArgs>;
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
         * Output configuration for the batch inference operation.
         */
        outputConfiguration?: pulumi.Input<BatchOutputConfigurationArgs>;
        /**
         * Partition keys list used for Named partitioning.
         */
        partitionKeys?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Retry Settings for the batch inference operation.
         */
        retrySettings?: pulumi.Input<BatchRetrySettingsArgs>;
    }

    /**
     * Batch endpoint configuration.
     */
    export interface BatchEndpointArgs {
        /**
         * [Required] Inference endpoint authentication mode type
         */
        authMode?: pulumi.Input<string | enums.EndpointAuthMode>;
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
        /**
         * Traffic rules on how the traffic will be routed across deployments.
         */
        traffic?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
    }

    /**
     * Batch inference output configuration.
     */
    export interface BatchOutputConfigurationArgs {
        /**
         * Customized output file name for append_row output action.
         */
        appendRowFileName?: pulumi.Input<string>;
        /**
         * Indicates how the output will be organized.
         */
        outputAction?: pulumi.Input<string | enums.BatchOutputAction>;
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
        resourceUri?: pulumi.Input<string>;
        /**
         * Service principal secrets.
         */
        secrets?: pulumi.Input<CertificateDatastoreSecretsArgs>;
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
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Code asset version details.
     */
    export interface CodeVersionArgs {
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * [Required] The path of the file/directory in the datastore.
         */
        path: pulumi.Input<string>;
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
         * [Required] Compute binding for the job.
         */
        compute: pulumi.Input<ComputeConfigurationArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
         */
        distribution?: pulumi.Input<MpiArgs | PyTorchArgs | TensorFlowArgs>;
        /**
         * The ARM resource ID of the Environment specification for the job.
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
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs>;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputDataBindings?: pulumi.Input<{[key: string]: pulumi.Input<InputDataBindingArgs>}>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Command'.
         */
        jobType: pulumi.Input<"Command">;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputDataBindings?: pulumi.Input<{[key: string]: pulumi.Input<OutputDataBindingArgs>}>;
        /**
         * Job priority for scheduling policy. Only applies to AMLCompute.
         * Private preview feature and only available to users on the allow list.
         */
        priority?: pulumi.Input<number>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
         */
        timeout?: pulumi.Input<string>;
    }

    /**
     * Configuration for compute binding.
     */
    export interface ComputeConfigurationArgs {
        /**
         * Number of instances or nodes.
         */
        instanceCount?: pulumi.Input<number>;
        /**
         * SKU type to run on.
         */
        instanceType?: pulumi.Input<string>;
        /**
         * Set to true for jobs running on local compute.
         */
        isLocal?: pulumi.Input<boolean>;
        /**
         * Location for virtual cluster run.
         */
        location?: pulumi.Input<string>;
        /**
         * Additional properties.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * ARM resource ID of the Compute you are targeting. If not provided the resource will be deployed as Managed.
         */
        target?: pulumi.Input<string>;
    }

    /**
     * The resource requirements for the container (cpu and memory).
     */
    export interface ContainerResourceRequirementsArgs {
        /**
         * The minimum amount of CPU cores to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpu?: pulumi.Input<number>;
        /**
         * The maximum amount of CPU cores allowed to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        cpuLimit?: pulumi.Input<number>;
        /**
         * The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
         */
        fpga?: pulumi.Input<number>;
        /**
         * The number of GPU cores in the container.
         */
        gpu?: pulumi.Input<number>;
        /**
         * The minimum amount of memory (in GB) to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memoryInGB?: pulumi.Input<number>;
        /**
         * The maximum amount of memory (in GB) allowed to be used by the container. More info:
         * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        memoryInGBLimit?: pulumi.Input<number>;
    }

    /**
     * Container for data asset versions.
     */
    export interface DataContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
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

    /**
     * Data asset version details.
     */
    export interface DataVersionArgs {
        /**
         * The Format of dataset.
         */
        datasetType?: pulumi.Input<string | enums.DatasetType>;
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: pulumi.Input<string>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * [Required] The path of the file/directory in the datastore.
         */
        path: pulumi.Input<string>;
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
     * Datastore definition.
     */
    export interface DatastorePropertiesArgs {
        /**
         * [Required] Reference to the datastore storage contents.
         */
        contents: pulumi.Input<AzureBlobContentsArgs | AzureDataLakeGen1ContentsArgs | AzureDataLakeGen2ContentsArgs | AzureFileContentsArgs | AzurePostgreSqlContentsArgs | AzureSqlDatabaseContentsArgs | GlusterFsContentsArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Whether this datastore is the default for the workspace.
         */
        isDefault?: pulumi.Input<boolean>;
        /**
         * Information about the datastore origin, if linked.
         */
        linkedInfo?: pulumi.Input<LinkedInfoArgs>;
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
     * Class to represent configuration settings for Docker Build
     */
    export interface DockerBuildArgs {
        /**
         * Path to a snapshot of the Docker Context. This property is only valid if Dockerfile is specified.
         * The path is relative to the asset path which must contain a single Blob URI value.
         * <seealso href="https://docs.docker.com/engine/context/working-with-contexts/" />
         */
        context?: pulumi.Input<string>;
        /**
         * Enum to determine docker specification type. Must be either Build or Image.
         * Expected value is 'Build'.
         */
        dockerSpecificationType: pulumi.Input<"Build">;
        /**
         * [Required] Docker command line instructions to assemble an image.
         * <seealso href="https://repo2docker.readthedocs.io/en/latest/config_files.html#dockerfile-advanced-environments" />
         */
        dockerfile: pulumi.Input<string>;
        /**
         * The platform information of the docker image.
         */
        platform?: pulumi.Input<DockerImagePlatformArgs>;
    }

    /**
     * Class to represent configuration settings for Docker Build
     */
    export interface DockerImageArgs {
        /**
         * [Required] Image name of a custom base image.
         * <seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
         */
        dockerImageUri: pulumi.Input<string>;
        /**
         * Enum to determine docker specification type. Must be either Build or Image.
         * Expected value is 'Image'.
         */
        dockerSpecificationType: pulumi.Input<"Image">;
        /**
         * The platform information of the docker image.
         */
        platform?: pulumi.Input<DockerImagePlatformArgs>;
    }

    export interface DockerImagePlatformArgs {
        /**
         * The OS type the Environment.
         */
        operatingSystemType?: pulumi.Input<string | enums.OperatingSystemType>;
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
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Environment specification version details.
     * <see href="https://repo2docker.readthedocs.io/en/latest/specification.html" />
     */
    export interface EnvironmentSpecificationVersionArgs {
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
         * Configuration settings for Docker.
         */
        docker?: pulumi.Input<DockerBuildArgs | DockerImageArgs>;
        /**
         * Defines configuration specific to inference.
         */
        inferenceContainerProperties?: pulumi.Input<InferenceContainerPropertiesArgs>;
        /**
         * If the name version are system generated (anonymous registration).
         */
        isAnonymous?: pulumi.Input<boolean>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    export interface FlavorDataArgs {
        /**
         * Model flavor-specific data.
         */
        data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * GlusterFs datastore configuration.
     */
    export interface GlusterFsContentsArgs {
        /**
         * Enum to determine the datastore contents type.
         * Expected value is 'GlusterFs'.
         */
        contentsType: pulumi.Input<"GlusterFs">;
        /**
         * [Required] GlusterFS server address (can be the IP address or server name).
         */
        serverAddress: pulumi.Input<string>;
        /**
         * [Required] GlusterFS volume name.
         */
        volumeName: pulumi.Input<string>;
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

    export interface InputDataBindingArgs {
        /**
         * ARM resource ID of the registered dataVersion.
         */
        dataId?: pulumi.Input<string>;
        /**
         * Mechanism for accessing the data artifact.
         */
        mode?: pulumi.Input<string | enums.DataBindingMode>;
        /**
         * Location of data inside the container process.
         */
        pathOnCompute?: pulumi.Input<string>;
    }

    export interface K8sOnlineDeploymentArgs {
        /**
         * If true, enables Application Insights logging.
         */
        appInsightsEnabled?: pulumi.Input<boolean>;
        /**
         * Code configuration for the endpoint deployment.
         */
        codeConfiguration?: pulumi.Input<CodeConfigurationArgs>;
        /**
         * Resource requirements for each container instance within an online deployment.
         */
        containerResourceRequirements?: pulumi.Input<ContainerResourceRequirementsArgs>;
        /**
         * Description of the endpoint deployment.
         */
        description?: pulumi.Input<string>;
        /**
         * Enum to determine endpoint compute type.
         * Expected value is 'K8S'.
         */
        endpointComputeType: pulumi.Input<"K8S">;
        /**
         * ARM resource ID of the environment specification for the endpoint deployment.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables configuration for the deployment.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Deployment container liveness/readiness probe configuration.
         */
        livenessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * Reference to the model asset for the endpoint deployment.
         */
        model?: pulumi.Input<DataPathAssetReferenceArgs | IdAssetReferenceArgs | OutputPathAssetReferenceArgs>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Online deployment scoring requests configuration.
         */
        requestSettings?: pulumi.Input<OnlineRequestSettingsArgs>;
        /**
         * Online deployment scaling configuration.
         */
        scaleSettings?: pulumi.Input<AutoScaleSettingsArgs | ManualScaleSettingsArgs>;
    }

    /**
     * Label category definition
     */
    export interface LabelCategoryArgs {
        /**
         * Indicates whether it is allowed to select multiple classes in this category.
         */
        allowMultiSelect?: pulumi.Input<boolean>;
        /**
         * Dictionary of label classes in this category.
         */
        classes?: pulumi.Input<{[key: string]: pulumi.Input<LabelClassArgs>}>;
        /**
         * Display name of the label category.
         */
        displayName?: pulumi.Input<string>;
    }

    /**
     * Label class definition
     */
    export interface LabelClassArgs {
        /**
         * Display name of the label class.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Dictionary of subclasses of the label class.
         */
        subclasses?: pulumi.Input<{[key: string]: pulumi.Input<LabelClassArgs>}>;
    }

    /**
     * Labeling dataset configuration definition
     */
    export interface LabelingDatasetConfigurationArgs {
        /**
         * Name of the data asset to perform labeling.
         */
        assetName?: pulumi.Input<string>;
        /**
         * AML dataset version.
         */
        datasetVersion?: pulumi.Input<string>;
        /**
         * Indicates whether to enable incremental dataset refresh.
         */
        incrementalDatasetRefreshEnabled?: pulumi.Input<boolean>;
    }

    /**
     * Labeling job definition
     */
    export interface LabelingJobArgs {
        /**
         * Configuration of dataset used in the job.
         */
        datasetConfiguration?: pulumi.Input<LabelingDatasetConfigurationArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Labeling instructions of the job.
         */
        jobInstructions?: pulumi.Input<LabelingJobInstructionsArgs>;
        /**
         * [Required] Specifies the type of job. This field should always be set to "Labeling".
         */
        jobType: pulumi.Input<string | enums.JobType>;
        /**
         * Label categories of the job.
         */
        labelCategories?: pulumi.Input<{[key: string]: pulumi.Input<LabelCategoryArgs>}>;
        /**
         * Media type specific properties in the job.
         */
        labelingJobMediaProperties?: pulumi.Input<LabelingJobImagePropertiesArgs | LabelingJobTextPropertiesArgs>;
        /**
         * Configuration of MLAssist feature in the job.
         */
        mlAssistConfiguration?: pulumi.Input<MLAssistConfigurationArgs>;
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
     * Properties of a labeling job for image data
     */
    export interface LabelingJobImagePropertiesArgs {
        /**
         * Annotation type of image labeling job.
         */
        annotationType?: pulumi.Input<string | enums.ImageAnnotationType>;
        /**
         * Media type of data asset.
         * Expected value is 'Image'.
         */
        mediaType: pulumi.Input<"Image">;
    }

    /**
     * Instructions for labeling job
     */
    export interface LabelingJobInstructionsArgs {
        /**
         * The link to a page with detailed labeling instructions for labelers.
         */
        uri?: pulumi.Input<string>;
    }

    /**
     * Properties of a labeling job for text data
     */
    export interface LabelingJobTextPropertiesArgs {
        /**
         * Annotation type of text labeling job.
         */
        annotationType?: pulumi.Input<string | enums.TextAnnotationType>;
        /**
         * Media type of data asset.
         * Expected value is 'Text'.
         */
        mediaType: pulumi.Input<"Text">;
    }

    /**
     * Information about a datastore origin, if linked.
     */
    export interface LinkedInfoArgs {
        /**
         * Linked service ID.
         */
        linkedId?: pulumi.Input<string>;
        /**
         * Linked service resource name.
         */
        linkedResourceName?: pulumi.Input<string>;
        /**
         * Type of the linked service.
         */
        origin?: pulumi.Input<string | enums.OriginType>;
    }

    /**
     * Labeling MLAssist configuration definition
     */
    export interface MLAssistConfigurationArgs {
        /**
         * AML compute binding used in inferencing.
         */
        inferencingComputeBinding?: pulumi.Input<ComputeConfigurationArgs>;
        /**
         * Indicates whether MLAssist feature is enabled.
         */
        mlAssistEnabled?: pulumi.Input<boolean>;
        /**
         * AML compute binding used in training.
         */
        trainingComputeBinding?: pulumi.Input<ComputeConfigurationArgs>;
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
         * Deployment container liveness/readiness probe configuration.
         */
        livenessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * Reference to the model asset for the endpoint deployment.
         */
        model?: pulumi.Input<DataPathAssetReferenceArgs | IdAssetReferenceArgs | OutputPathAssetReferenceArgs>;
        /**
         * Property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Deployment container liveness/readiness probe configuration.
         */
        readinessProbe?: pulumi.Input<ProbeSettingsArgs>;
        /**
         * Online deployment scoring requests configuration.
         */
        requestSettings?: pulumi.Input<OnlineRequestSettingsArgs>;
        /**
         * Online deployment scaling configuration.
         */
        scaleSettings?: pulumi.Input<AutoScaleSettingsArgs | ManualScaleSettingsArgs>;
    }

    export interface ManualScaleSettingsArgs {
        /**
         * Fixed number of instances for this deployment.
         */
        instanceCount?: pulumi.Input<number>;
        /**
         * Maximum number of instances for this deployment.
         */
        maxInstances?: pulumi.Input<number>;
        /**
         * Minimum number of instances for this deployment.
         */
        minInstances?: pulumi.Input<number>;
        /**
         *
         * Expected value is 'Manual'.
         */
        scaleType: pulumi.Input<"Manual">;
    }

    /**
     * Defines an early termination policy based on running averages of the primary metric of all runs.
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

    export interface ModelContainerArgs {
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
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
     * Model asset version details.
     */
    export interface ModelVersionArgs {
        /**
         * ARM resource ID of the datastore where the asset is located.
         */
        datastoreId?: pulumi.Input<string>;
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
         * [Required] The path of the file/directory in the datastore.
         */
        path: pulumi.Input<string>;
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
     * Empty/none datastore credentials.
     */
    export interface NoneDatastoreCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'None'.
         */
        credentialsType: pulumi.Input<"None">;
        /**
         * Empty/none datastore secret.
         */
        secrets?: pulumi.Input<NoneDatastoreSecretsArgs>;
    }

    /**
     * Empty/none datastore secret.
     */
    export interface NoneDatastoreSecretsArgs {
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'None'.
         */
        secretsType: pulumi.Input<"None">;
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
         * [Required] Inference endpoint authentication mode type
         */
        authMode: pulumi.Input<string | enums.EndpointAuthMode>;
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
        /**
         * ARM resource ID of the compute if it exists.
         * optional
         */
        target?: pulumi.Input<string>;
        /**
         * Traffic rules on how the traffic will be routed across deployments.
         */
        traffic?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
    }

    /**
     * Online deployment scoring requests configuration.
     */
    export interface OnlineRequestSettingsArgs {
        /**
         * The number of requests allowed to queue at once for this deployment.
         */
        maxConcurrentRequestsPerInstance?: pulumi.Input<number>;
        /**
         * The maximum queue wait time in ISO 8601 format. Supports millisecond precision.
         */
        maxQueueWait?: pulumi.Input<string>;
        /**
         * The request timeout in ISO 8601 format. Supports millisecond precision.
         */
        requestTimeout?: pulumi.Input<string>;
    }

    export interface OutputDataBindingArgs {
        /**
         * ARM resource ID of the datastore where the data output will be stored.
         */
        datastoreId?: pulumi.Input<string>;
        /**
         * Mechanism for data movement to datastore.
         */
        mode?: pulumi.Input<string | enums.DataBindingMode>;
        /**
         * Location of data inside the container process.
         */
        pathOnCompute?: pulumi.Input<string>;
        /**
         * Path within the datastore to the data.
         */
        pathOnDatastore?: pulumi.Input<string>;
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
     * PyTorch distribution configuration.
     */
    export interface PyTorchArgs {
        /**
         * Enum to determine the job distribution type.
         * Expected value is 'PyTorch'.
         */
        distributionType: pulumi.Input<"PyTorch">;
        /**
         * Total process count for the distributed job.
         */
        processCount?: pulumi.Input<number>;
    }

    /**
     * Service identity associated with a resource.
     */
    export interface ResourceIdentityArgs {
        /**
         * Defines values for a ResourceIdentity's type.
         */
        type?: pulumi.Input<string | enums.ResourceIdentityAssignment>;
        /**
         * Dictionary of the user assigned identities, key is ARM resource ID of the UAI.
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserAssignedIdentityMetaArgs>}>;
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
         * Storage container secrets.
         */
        secrets?: pulumi.Input<SasDatastoreSecretsArgs>;
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
        resourceUri?: pulumi.Input<string>;
        /**
         * Service principal secrets.
         */
        secrets?: pulumi.Input<ServicePrincipalDatastoreSecretsArgs>;
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
     * SQL Admin datastore credentials configuration.
     */
    export interface SqlAdminDatastoreCredentialsArgs {
        /**
         * Enum to determine the datastore credentials type.
         * Expected value is 'SqlAdmin'.
         */
        credentialsType: pulumi.Input<"SqlAdmin">;
        /**
         * SQL database secrets.
         */
        secrets?: pulumi.Input<SqlAdminDatastoreSecretsArgs>;
        /**
         * [Required] SQL database user name.
         */
        userId: pulumi.Input<string>;
    }

    /**
     * Datastore SQL Admin secrets.
     */
    export interface SqlAdminDatastoreSecretsArgs {
        /**
         * SQL database password.
         */
        password?: pulumi.Input<string>;
        /**
         * Enum to determine the datastore secrets type.
         * Expected value is 'SqlAdmin'.
         */
        secretsType: pulumi.Input<"SqlAdmin">;
    }

    /**
     * Sweep job definition.
     */
    export interface SweepJobArgs {
        /**
         * [Required] Type of the hyperparameter sampling algorithms
         */
        algorithm: pulumi.Input<string | enums.SamplingAlgorithm>;
        /**
         * [Required] Compute binding for the job.
         */
        compute: pulumi.Input<ComputeConfigurationArgs>;
        /**
         * The asset description text.
         */
        description?: pulumi.Input<string>;
        /**
         * Early termination policies enable canceling poor-performing runs before they complete.
         */
        earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs>;
        /**
         * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
         */
        experimentName?: pulumi.Input<string>;
        /**
         * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity or null.
         * Defaults to AmlToken if null.
         */
        identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs>;
        /**
         * Enum to determine the type of job.
         * Expected value is 'Sweep'.
         */
        jobType: pulumi.Input<"Sweep">;
        /**
         * An upper bound on the number of trials performed in parallel.
         */
        maxConcurrentTrials?: pulumi.Input<number>;
        /**
         * An upper bound on the number of trials to perform.
         */
        maxTotalTrials?: pulumi.Input<number>;
        /**
         * [Required] Optimization objective.
         */
        objective: pulumi.Input<ObjectiveArgs>;
        /**
         * Job priority for scheduling policy. Only applies to AMLCompute.
         * Private preview feature and only available to users on the allow list.
         */
        priority?: pulumi.Input<number>;
        /**
         * The asset property dictionary.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
         */
        searchSpace: pulumi.Input<{[key: string]: any}>;
        /**
         * Tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The total timeout in ISO 8601 format. Only supports duration with precision as low as Minutes.
         */
        timeout?: pulumi.Input<string>;
        /**
         * Trial component definition.
         */
        trial?: pulumi.Input<TrialComponentArgs>;
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
         * Number of workers. Overwrites the node count in compute binding.
         */
        workerCount?: pulumi.Input<number>;
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
         * The ARM resource ID of the Environment specification for the job.
         */
        environmentId?: pulumi.Input<string>;
        /**
         * Environment variables included in the job.
         */
        environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Mapping of input data bindings used in the job.
         */
        inputDataBindings?: pulumi.Input<{[key: string]: pulumi.Input<InputDataBindingArgs>}>;
        /**
         * Mapping of output data bindings used in the job.
         */
        outputDataBindings?: pulumi.Input<{[key: string]: pulumi.Input<OutputDataBindingArgs>}>;
        /**
         * The max run duration in ISO 8601 format, after which the trial component will be cancelled.
         * Only supports duration with precision as low as Seconds.
         */
        timeout?: pulumi.Input<string>;
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
     * User assigned identities associated with a resource.
     */
    export interface UserAssignedIdentityMetaArgs {
        /**
         * Aka application ID, a unique identifier generated by Azure AD that is tied to an application and service principal during its initial provisioning.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The object ID of the service principal object for your managed identity that is used to grant role-based access to an Azure resource.
         */
        principalId?: pulumi.Input<string>;
    }
