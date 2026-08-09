import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * This connection type covers the AAD auth for any applicable Azure service
 */
export interface AADAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'AAD'.
     */
    authType: pulumi.Input<"AAD">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * A Machine Learning compute based on AKS.
 */
export interface AKSArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'AKS'.
     */
    computeType: pulumi.Input<"AKS">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    /**
     * AKS properties
     */
    properties?: pulumi.Input<AKSSchemaPropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}
/**
 * aksargsProvideDefaults sets the appropriate defaults for AKSArgs
 */
export function aksargsProvideDefaults(val: AKSArgs): AKSArgs {
    return {
        ...val,
        properties: pulumi.output(val.properties).apply(v => v === undefined ? undefined : aksschemaPropertiesArgsProvideDefaults(v)),
    };
}

/**
 * AKS properties
 */
export interface AKSSchemaPropertiesArgs {
    /**
     * Number of agents
     */
    agentCount?: pulumi.Input<number | undefined>;
    /**
     * Agent virtual machine size
     */
    agentVmSize?: pulumi.Input<string | undefined>;
    /**
     * AKS networking configuration for vnet
     */
    aksNetworkingConfiguration?: pulumi.Input<AksNetworkingConfigurationArgs | undefined>;
    /**
     * Cluster full qualified domain name
     */
    clusterFqdn?: pulumi.Input<string | undefined>;
    /**
     * Intended usage of the cluster
     */
    clusterPurpose?: pulumi.Input<string | enums.ClusterPurpose | undefined>;
    /**
     * Load Balancer Subnet
     */
    loadBalancerSubnet?: pulumi.Input<string | undefined>;
    /**
     * Load Balancer Type
     */
    loadBalancerType?: pulumi.Input<string | enums.LoadBalancerType | undefined>;
    /**
     * SSL configuration
     */
    sslConfiguration?: pulumi.Input<SslConfigurationArgs | undefined>;
}
/**
 * aksschemaPropertiesArgsProvideDefaults sets the appropriate defaults for AKSSchemaPropertiesArgs
 */
export function aksschemaPropertiesArgsProvideDefaults(val: AKSSchemaPropertiesArgs): AKSSchemaPropertiesArgs {
    return {
        ...val,
        clusterPurpose: (val.clusterPurpose) ?? "FastProd",
        loadBalancerType: (val.loadBalancerType) ?? "PublicIp",
    };
}

export interface AccessKeyAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'AccessKey'.
     */
    authType: pulumi.Input<"AccessKey">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<WorkspaceConnectionAccessKeyArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * This connection type covers the account key connection for Azure storage
 */
export interface AccountKeyAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'AccountKey'.
     */
    authType: pulumi.Input<"AccountKey">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * Account key object for workspace connection credential.
     */
    credentials?: pulumi.Input<WorkspaceConnectionAccountKeyArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

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
    key?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the datastore secrets type.
     * Expected value is 'AccountKey'.
     */
    secretsType: pulumi.Input<"AccountKey">;
}

/**
 * Details of ACR account to be used for the Registry
 */
export interface AcrDetailsArgs {
    /**
     * Details of system created ACR account to be used for the Registry
     */
    systemCreatedAcrAccount?: pulumi.Input<SystemCreatedAcrAccountArgs | undefined>;
}

/**
 * Advance configuration for AKS networking
 */
export interface AksNetworkingConfigurationArgs {
    /**
     * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
     */
    dnsServiceIP?: pulumi.Input<string | undefined>;
    /**
     * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
     */
    dockerBridgeCidr?: pulumi.Input<string | undefined>;
    /**
     * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
     */
    serviceCidr?: pulumi.Input<string | undefined>;
    /**
     * Virtual network subnet resource ID the compute nodes belong to
     */
    subnetId?: pulumi.Input<string | undefined>;
}

export interface AllFeaturesArgs {
    /**
     * Expected value is 'AllFeatures'.
     */
    filterType: pulumi.Input<"AllFeatures">;
}

/**
 * All nodes means the service will be running on all of the nodes of the job
 */
export interface AllNodesArgs {
    /**
     * The enumerated types for the nodes value
     * Expected value is 'All'.
     */
    nodesValueType: pulumi.Input<"All">;
}

/**
 * An Azure Machine Learning compute.
 */
export interface AmlComputeArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'AmlCompute'.
     */
    computeType: pulumi.Input<"AmlCompute">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    /**
     * Properties of AmlCompute
     */
    properties?: pulumi.Input<AmlComputePropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}
/**
 * amlComputeArgsProvideDefaults sets the appropriate defaults for AmlComputeArgs
 */
export function amlComputeArgsProvideDefaults(val: AmlComputeArgs): AmlComputeArgs {
    return {
        ...val,
        properties: pulumi.output(val.properties).apply(v => v === undefined ? undefined : amlComputePropertiesArgsProvideDefaults(v)),
    };
}

/**
 * AML Compute properties
 */
export interface AmlComputePropertiesArgs {
    /**
     * Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
     */
    enableNodePublicIp?: pulumi.Input<boolean | undefined>;
    /**
     * Network is isolated or not
     */
    isolatedNetwork?: pulumi.Input<boolean | undefined>;
    /**
     * Compute OS Type
     */
    osType?: pulumi.Input<string | enums.OsType | undefined>;
    /**
     * A property bag containing additional properties.
     */
    propertyBag?: any | undefined;
    /**
     * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
     */
    remoteLoginPortPublicAccess?: pulumi.Input<string | enums.RemoteLoginPortPublicAccess | undefined>;
    /**
     * Scale settings for AML Compute
     */
    scaleSettings?: pulumi.Input<ScaleSettingsArgs | undefined>;
    /**
     * Virtual network subnet resource ID the compute nodes belong to.
     */
    subnet?: pulumi.Input<ResourceIdArgs | undefined>;
    /**
     * Credentials for an administrator user account that will be created on each compute node.
     */
    userAccountCredentials?: pulumi.Input<UserAccountCredentialsArgs | undefined>;
    /**
     * Virtual Machine image for AML Compute - windows only
     */
    virtualMachineImage?: pulumi.Input<VirtualMachineImageArgs | undefined>;
    /**
     * Virtual Machine priority
     */
    vmPriority?: pulumi.Input<string | enums.VmPriority | undefined>;
    /**
     * Virtual Machine Size
     */
    vmSize?: pulumi.Input<string | undefined>;
}
/**
 * amlComputePropertiesArgsProvideDefaults sets the appropriate defaults for AmlComputePropertiesArgs
 */
export function amlComputePropertiesArgsProvideDefaults(val: AmlComputePropertiesArgs): AmlComputePropertiesArgs {
    return {
        ...val,
        enableNodePublicIp: (val.enableNodePublicIp) ?? true,
        osType: (val.osType) ?? "Linux",
        remoteLoginPortPublicAccess: (val.remoteLoginPortPublicAccess) ?? "NotSpecified",
        scaleSettings: pulumi.output(val.scaleSettings).apply(v => v === undefined ? undefined : scaleSettingsArgsProvideDefaults(v)),
    };
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
 * AML token compute identity definition.
 */
export interface AmlTokenComputeIdentityArgs {
    /**
     * Monitor compute identity type enum.
     * Expected value is 'AmlToken'.
     */
    computeIdentityType: pulumi.Input<"AmlToken">;
}

/**
 * This connection type covers the generic ApiKey auth connection categories, for examples:
 * AzureOpenAI:
 * Category:= AzureOpenAI
 * AuthType:= ApiKey (as type discriminator)
 * Credentials:= {ApiKey} as Microsoft.MachineLearning.AccountRP.Contracts.WorkspaceConnection.ApiKey
 * Target:= {ApiBase}
 *
 * CognitiveService:
 * Category:= CognitiveService
 * AuthType:= ApiKey (as type discriminator)
 * Credentials:= {SubscriptionKey} as Microsoft.MachineLearning.AccountRP.Contracts.WorkspaceConnection.ApiKey
 * Target:= ServiceRegion={serviceRegion}
 *
 * CognitiveSearch:
 * Category:= CognitiveSearch
 * AuthType:= ApiKey (as type discriminator)
 * Credentials:= {Key} as Microsoft.MachineLearning.AccountRP.Contracts.WorkspaceConnection.ApiKey
 * Target:= {Endpoint}
 *
 * Use Metadata property bag for ApiType, ApiVersion, Kind and other metadata fields
 */
export interface ApiKeyAuthWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'ApiKey'.
     */
    authType: pulumi.Input<"ApiKey">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * Api key object for workspace connection credential.
     */
    credentials?: pulumi.Input<WorkspaceConnectionApiKeyArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * ARM ResourceId of a resource
 */
export interface ArmResourceIdArgs {
    /**
     * Arm ResourceId is in the format "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Storage/storageAccounts/{StorageAccountName}"
     * or "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{AcrName}"
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * A user that can be assigned to a compute instance.
 */
export interface AssignedUserArgs {
    /**
     * User’s AAD Object Id.
     */
    objectId: pulumi.Input<string>;
    /**
     * User’s AAD Tenant Id.
     */
    tenantId: pulumi.Input<string>;
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
     * ARM resource ID of the component resource.
     */
    componentId?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of the compute resource.
     */
    computeId?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Display name of job.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The ARM resource ID of the Environment specification for the job.
     * This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job.
     */
    environmentId?: pulumi.Input<string | undefined>;
    /**
     * Environment variables included in the job.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
     */
    experimentName?: pulumi.Input<string | undefined>;
    /**
     * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
     * Defaults to AmlToken if null.
     */
    identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * Enum to determine the type of job.
     * Expected value is 'AutoML'.
     */
    jobType: pulumi.Input<"AutoML">;
    /**
     * Notification setting for the job
     */
    notificationSetting?: pulumi.Input<NotificationSettingArgs | undefined>;
    /**
     * Mapping of output data bindings used in the job.
     */
    outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>} | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Queue settings for the job
     */
    queueSettings?: pulumi.Input<QueueSettingsArgs | undefined>;
    /**
     * Compute Resource configuration for the job.
     */
    resources?: pulumi.Input<JobResourceConfigurationArgs | undefined>;
    /**
     * List of JobEndpoints.
     * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
     */
    services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
        queueSettings: pulumi.output(val.queueSettings).apply(v => v === undefined ? undefined : queueSettingsArgsProvideDefaults(v)),
        resources: pulumi.output(val.resources).apply(v => v === undefined ? undefined : jobResourceConfigurationArgsProvideDefaults(v)),
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

/**
 * Auto pause properties
 */
export interface AutoPausePropertiesArgs {
    delayInMinutes?: pulumi.Input<number | undefined>;
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Auto scale properties
 */
export interface AutoScalePropertiesArgs {
    enabled?: pulumi.Input<boolean | undefined>;
    maxNodeCount?: pulumi.Input<number | undefined>;
    minNodeCount?: pulumi.Input<number | undefined>;
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
    accountName?: pulumi.Input<string | undefined>;
    /**
     * Storage account container name.
     */
    containerName?: pulumi.Input<string | undefined>;
    /**
     * [Required] Account credentials.
     */
    credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
    /**
     * Enum to determine the datastore contents type.
     * Expected value is 'AzureBlob'.
     */
    datastoreType: pulumi.Input<"AzureBlob">;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Azure cloud endpoint for the storage account.
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Protocol used to communicate with the storage account.
     */
    protocol?: pulumi.Input<string | undefined>;
    /**
     * Azure Resource Group name
     */
    resourceGroup?: pulumi.Input<string | undefined>;
    /**
     * Indicates which identity to use to authenticate service data access to customer's storage.
     */
    serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity | undefined>;
    /**
     * Azure Subscription Id
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
    /**
     * Enum to determine the datastore contents type.
     * Expected value is 'AzureDataLakeGen1'.
     */
    datastoreType: pulumi.Input<"AzureDataLakeGen1">;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Azure Resource Group name
     */
    resourceGroup?: pulumi.Input<string | undefined>;
    /**
     * Indicates which identity to use to authenticate service data access to customer's storage.
     */
    serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity | undefined>;
    /**
     * [Required] Azure Data Lake store name.
     */
    storeName: pulumi.Input<string>;
    /**
     * Azure Subscription Id
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
    /**
     * Enum to determine the datastore contents type.
     * Expected value is 'AzureDataLakeGen2'.
     */
    datastoreType: pulumi.Input<"AzureDataLakeGen2">;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Azure cloud endpoint for the storage account.
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * [Required] The name of the Data Lake Gen2 filesystem.
     */
    filesystem: pulumi.Input<string>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Protocol used to communicate with the storage account.
     */
    protocol?: pulumi.Input<string | undefined>;
    /**
     * Azure Resource Group name
     */
    resourceGroup?: pulumi.Input<string | undefined>;
    /**
     * Indicates which identity to use to authenticate service data access to customer's storage.
     */
    serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity | undefined>;
    /**
     * Azure Subscription Id
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
 * Webhook details specific for Azure DevOps
 */
export interface AzureDevOpsWebhookArgs {
    /**
     * Send callback on a specified notification event
     */
    eventType?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the webhook callback service type.
     * Expected value is 'AzureDevOps'.
     */
    webhookType: pulumi.Input<"AzureDevOps">;
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
    credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
    /**
     * Enum to determine the datastore contents type.
     * Expected value is 'AzureFile'.
     */
    datastoreType: pulumi.Input<"AzureFile">;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Azure cloud endpoint for the storage account.
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * [Required] The name of the Azure file share that the datastore points to.
     */
    fileShareName: pulumi.Input<string>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Protocol used to communicate with the storage account.
     */
    protocol?: pulumi.Input<string | undefined>;
    /**
     * Azure Resource Group name
     */
    resourceGroup?: pulumi.Input<string | undefined>;
    /**
     * Indicates which identity to use to authenticate service data access to customer's storage.
     */
    serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity | undefined>;
    /**
     * Azure Subscription Id
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    delayEvaluation?: pulumi.Input<number | undefined>;
    /**
     * Interval (number of runs) between policy evaluations.
     */
    evaluationInterval?: pulumi.Input<number | undefined>;
    /**
     * Expected value is 'Bandit'.
     */
    policyType: pulumi.Input<"Bandit">;
    /**
     * Absolute distance allowed from the best performing run.
     */
    slackAmount?: pulumi.Input<number | undefined>;
    /**
     * Ratio of the allowed distance from the best performing run.
     */
    slackFactor?: pulumi.Input<number | undefined>;
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
export interface BatchDeploymentPropertiesArgs {
    /**
     * Code configuration for the endpoint deployment.
     */
    codeConfiguration?: pulumi.Input<CodeConfigurationArgs | undefined>;
    /**
     * Compute target for batch inference operation.
     */
    compute?: pulumi.Input<string | undefined>;
    /**
     * Properties relevant to different deployment types.
     */
    deploymentConfiguration?: pulumi.Input<BatchPipelineComponentDeploymentConfigurationArgs | undefined>;
    /**
     * Description of the endpoint deployment.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID or AssetId of the environment specification for the endpoint deployment.
     */
    environmentId?: pulumi.Input<string | undefined>;
    /**
     * Environment variables configuration for the deployment.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Error threshold, if the error count for the entire input goes above this value,
     * the batch inference will be aborted. Range is [-1, int.MaxValue].
     * For FileDataset, this value is the count of file failures.
     * For TabularDataset, this value is the count of record failures.
     * If set to -1 (the lower bound), all failures during batch inference will be ignored.
     */
    errorThreshold?: pulumi.Input<number | undefined>;
    /**
     * Log verbosity for batch inferencing.
     * Increasing verbosity order for logging is : Warning, Info and Debug.
     * The default value is Info.
     */
    loggingLevel?: pulumi.Input<string | enums.BatchLoggingLevel | undefined>;
    /**
     * Indicates maximum number of parallelism per instance.
     */
    maxConcurrencyPerInstance?: pulumi.Input<number | undefined>;
    /**
     * Size of the mini-batch passed to each batch invocation.
     * For FileDataset, this is the number of files per mini-batch.
     * For TabularDataset, this is the size of the records in bytes, per mini-batch.
     */
    miniBatchSize?: pulumi.Input<number | undefined>;
    /**
     * Reference to the model asset for the endpoint deployment.
     */
    model?: pulumi.Input<DataPathAssetReferenceArgs | IdAssetReferenceArgs | OutputPathAssetReferenceArgs | undefined>;
    /**
     * Enum to determine how batch inferencing will handle output
     */
    outputAction?: pulumi.Input<string | enums.BatchOutputAction | undefined>;
    /**
     * Customized output file name for append_row output action.
     */
    outputFileName?: pulumi.Input<string | undefined>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Indicates compute configuration for the job.
     * If not provided, will default to the defaults defined in ResourceConfiguration.
     */
    resources?: pulumi.Input<DeploymentResourceConfigurationArgs | undefined>;
    /**
     * Retry Settings for the batch inference operation.
     * If not provided, will default to the defaults defined in BatchRetrySettings.
     */
    retrySettings?: pulumi.Input<BatchRetrySettingsArgs | undefined>;
}
/**
 * batchDeploymentPropertiesArgsProvideDefaults sets the appropriate defaults for BatchDeploymentPropertiesArgs
 */
export function batchDeploymentPropertiesArgsProvideDefaults(val: BatchDeploymentPropertiesArgs): BatchDeploymentPropertiesArgs {
    return {
        ...val,
        errorThreshold: (val.errorThreshold) ?? -1,
        loggingLevel: (val.loggingLevel) ?? "Info",
        maxConcurrencyPerInstance: (val.maxConcurrencyPerInstance) ?? 1,
        miniBatchSize: (val.miniBatchSize) ?? 10,
        outputAction: (val.outputAction) ?? "AppendRow",
        outputFileName: (val.outputFileName) ?? "predictions.csv",
        resources: pulumi.output(val.resources).apply(v => v === undefined ? undefined : deploymentResourceConfigurationArgsProvideDefaults(v)),
        retrySettings: pulumi.output(val.retrySettings).apply(v => v === undefined ? undefined : batchRetrySettingsArgsProvideDefaults(v)),
    };
}

/**
 * Batch endpoint default values
 */
export interface BatchEndpointDefaultsArgs {
    /**
     * Name of the deployment that will be default for the endpoint.
     * This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked.
     */
    deploymentName?: pulumi.Input<string | undefined>;
}

/**
 * Batch endpoint configuration.
 */
export interface BatchEndpointPropertiesArgs {
    /**
     * [Required] The authentication method for invoking the endpoint (data plane operation). Use 'Key' for key-based authentication. Use 'AMLToken' for Azure Machine Learning token-based authentication. Use 'AADToken' for Microsoft Entra token-based authentication.
     */
    authMode: pulumi.Input<string | enums.EndpointAuthMode>;
    /**
     * Default values for Batch Endpoint
     */
    defaults?: pulumi.Input<BatchEndpointDefaultsArgs | undefined>;
    /**
     * Description of the inference endpoint.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * EndpointAuthKeys to set initially on an Endpoint.
     * This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
     */
    keys?: pulumi.Input<EndpointAuthKeysArgs | undefined>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Properties for a Batch Pipeline Component Deployment.
 */
export interface BatchPipelineComponentDeploymentConfigurationArgs {
    /**
     * The ARM id of the component to be run.
     */
    componentId?: pulumi.Input<IdAssetReferenceArgs | undefined>;
    /**
     * The enumerated property types for batch deployments.
     * Expected value is 'PipelineComponent'.
     */
    deploymentConfigurationType: pulumi.Input<"PipelineComponent">;
    /**
     * The description which will be applied to the job.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Run-time settings for the pipeline job.
     */
    settings?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The tags which will be applied to the job.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Retry settings for a batch inference operation.
 */
export interface BatchRetrySettingsArgs {
    /**
     * Maximum retry count for a mini-batch
     */
    maxRetries?: pulumi.Input<number | undefined>;
    /**
     * Invocation timeout for a mini-batch, in ISO 8601 format.
     */
    timeout?: pulumi.Input<string | undefined>;
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
     * Expected value is 'Bayesian'.
     */
    samplingAlgorithmType: pulumi.Input<"Bayesian">;
}

export interface BindOptionsArgs {
    /**
     * Indicate whether to create host path.
     */
    createHostPath?: pulumi.Input<boolean | undefined>;
    /**
     * Type of Bind Option
     */
    propagation?: pulumi.Input<string | undefined>;
    /**
     * Mention the selinux options.
     */
    selinux?: pulumi.Input<string | undefined>;
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
    dockerfilePath?: pulumi.Input<string | undefined>;
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

export interface CapabilityHostPropertiesArgs {
    /**
     * List of Aca Environment connections.
     */
    acaEnvironmentConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of AI services connections.
     */
    aiServicesConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Kind of this capability host.
     */
    capabilityHostKind?: pulumi.Input<string | enums.CapabilityHostKind | undefined>;
    /**
     * Customer subnet info to help set up this capability host.
     */
    customerSubnet?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * List of Storage connections.
     */
    storageConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * List of Thread storage connections.
     */
    threadStorageConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of VectorStore connections.
     */
    vectorStoreConnections?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
/**
 * capabilityHostPropertiesArgsProvideDefaults sets the appropriate defaults for CapabilityHostPropertiesArgs
 */
export function capabilityHostPropertiesArgsProvideDefaults(val: CapabilityHostPropertiesArgs): CapabilityHostPropertiesArgs {
    return {
        ...val,
        capabilityHostKind: (val.capabilityHostKind) ?? "Agents",
    };
}

export interface CapacityReservationGroupArgs {
    /**
     * Offer used by this capacity reservation group.
     */
    offer?: pulumi.Input<ServerlessOfferArgs | undefined>;
    /**
     * [Required] Specifies the amount of capacity to reserve.
     */
    reservedCapacity: pulumi.Input<number>;
}

export interface CategoricalDataDriftMetricThresholdArgs {
    /**
     * Expected value is 'Categorical'.
     */
    dataType: pulumi.Input<"Categorical">;
    /**
     * [Required] The categorical data drift metric to calculate.
     */
    metric: pulumi.Input<string | enums.CategoricalDataDriftMetric>;
    /**
     * The threshold value. If null, a default value will be set depending on the selected metric.
     */
    threshold?: pulumi.Input<MonitoringThresholdArgs | undefined>;
}

export interface CategoricalDataQualityMetricThresholdArgs {
    /**
     * Expected value is 'Categorical'.
     */
    dataType: pulumi.Input<"Categorical">;
    /**
     * [Required] The categorical data quality metric to calculate.
     */
    metric: pulumi.Input<string | enums.CategoricalDataQualityMetric>;
    /**
     * The threshold value. If null, a default value will be set depending on the selected metric.
     */
    threshold?: pulumi.Input<MonitoringThresholdArgs | undefined>;
}

export interface CategoricalPredictionDriftMetricThresholdArgs {
    /**
     * Expected value is 'Categorical'.
     */
    dataType: pulumi.Input<"Categorical">;
    /**
     * [Required] The categorical prediction drift metric to calculate.
     */
    metric: pulumi.Input<string | enums.CategoricalPredictionDriftMetric>;
    /**
     * The threshold value. If null, a default value will be set depending on the selected metric.
     */
    threshold?: pulumi.Input<MonitoringThresholdArgs | undefined>;
}

/**
 * Certificate datastore credentials configuration.
 */
export interface CertificateDatastoreCredentialsArgs {
    /**
     * Authority URL used for authentication.
     */
    authorityUrl?: pulumi.Input<string | undefined>;
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
    resourceUrl?: pulumi.Input<string | undefined>;
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
    certificate?: pulumi.Input<string | undefined>;
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
     * Columns to use for CVSplit data.
     */
    cvSplitColumnNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Featurization inputs needed for AutoML job.
     */
    featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs | undefined>;
    /**
     * Execution constraints for AutoMLJob.
     */
    limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs | undefined>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Number of cross validation folds to be applied on training dataset
     * when validation dataset is not provided.
     */
    nCrossValidations?: pulumi.Input<AutoNCrossValidationsArgs | CustomNCrossValidationsArgs | undefined>;
    /**
     * Positive label for binary metrics calculation.
     */
    positiveLabel?: pulumi.Input<string | undefined>;
    /**
     * Primary metrics for classification tasks.
     */
    primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'Classification'.
     */
    taskType: pulumi.Input<"Classification">;
    /**
     * Test data input.
     */
    testData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of test dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    testDataSize?: pulumi.Input<number | undefined>;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Inputs for training phase for an AutoML Job.
     */
    trainingSettings?: pulumi.Input<ClassificationTrainingSettingsArgs | undefined>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of training dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    validationDataSize?: pulumi.Input<number | undefined>;
    /**
     * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
     */
    weightColumnName?: pulumi.Input<string | undefined>;
}
/**
 * classificationArgsProvideDefaults sets the appropriate defaults for ClassificationArgs
 */
export function classificationArgsProvideDefaults(val: ClassificationArgs): ClassificationArgs {
    return {
        ...val,
        featurizationSettings: pulumi.output(val.featurizationSettings).apply(v => v === undefined ? undefined : tableVerticalFeaturizationSettingsArgsProvideDefaults(v)),
        limitSettings: pulumi.output(val.limitSettings).apply(v => v === undefined ? undefined : tableVerticalLimitSettingsArgsProvideDefaults(v)),
        logVerbosity: (val.logVerbosity) ?? "Info",
        primaryMetric: (val.primaryMetric) ?? "AUCWeighted",
        testData: pulumi.output(val.testData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        trainingSettings: pulumi.output(val.trainingSettings).apply(v => v === undefined ? undefined : classificationTrainingSettingsArgsProvideDefaults(v)),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

/**
 * Classification Training related configuration.
 */
export interface ClassificationTrainingSettingsArgs {
    /**
     * Allowed models for classification task.
     */
    allowedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.ClassificationModels>[] | undefined>;
    /**
     * Blocked models for classification task.
     */
    blockedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.ClassificationModels>[] | undefined>;
    /**
     * Enable recommendation of DNN models.
     */
    enableDnnTraining?: pulumi.Input<boolean | undefined>;
    /**
     * Flag to turn on explainability on best model.
     */
    enableModelExplainability?: pulumi.Input<boolean | undefined>;
    /**
     * Flag for enabling onnx compatible models.
     */
    enableOnnxCompatibleModels?: pulumi.Input<boolean | undefined>;
    /**
     * Enable stack ensemble run.
     */
    enableStackEnsemble?: pulumi.Input<boolean | undefined>;
    /**
     * Enable voting ensemble run.
     */
    enableVoteEnsemble?: pulumi.Input<boolean | undefined>;
    /**
     * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
     * Configure this parameter with a higher value than 300 secs, if more time is needed.
     */
    ensembleModelDownloadTimeout?: pulumi.Input<string | undefined>;
    /**
     * Stack ensemble settings for stack ensemble run.
     */
    stackEnsembleSettings?: pulumi.Input<StackEnsembleSettingsArgs | undefined>;
}
/**
 * classificationTrainingSettingsArgsProvideDefaults sets the appropriate defaults for ClassificationTrainingSettingsArgs
 */
export function classificationTrainingSettingsArgsProvideDefaults(val: ClassificationTrainingSettingsArgs): ClassificationTrainingSettingsArgs {
    return {
        ...val,
        enableDnnTraining: (val.enableDnnTraining) ?? false,
        enableModelExplainability: (val.enableModelExplainability) ?? true,
        enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
        enableStackEnsemble: (val.enableStackEnsemble) ?? true,
        enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
        ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
        stackEnsembleSettings: pulumi.output(val.stackEnsembleSettings).apply(v => v === undefined ? undefined : stackEnsembleSettingsArgsProvideDefaults(v)),
    };
}

/**
 * Configuration for a scoring code asset.
 */
export interface CodeConfigurationArgs {
    /**
     * ARM resource ID of the code asset.
     */
    codeId?: pulumi.Input<string | undefined>;
    /**
     * [Required] The script to execute on startup. eg. "score.py"
     */
    scoringScript: pulumi.Input<string>;
}

/**
 * Container for code asset versions.
 */
export interface CodeContainerPropertiesArgs {
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * codeContainerPropertiesArgsProvideDefaults sets the appropriate defaults for CodeContainerPropertiesArgs
 */
export function codeContainerPropertiesArgsProvideDefaults(val: CodeContainerPropertiesArgs): CodeContainerPropertiesArgs {
    return {
        ...val,
        isArchived: (val.isArchived) ?? false,
    };
}

/**
 * Code asset version details.
 */
export interface CodeVersionPropertiesArgs {
    /**
     * Uri where code is located
     */
    codeUri?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * codeVersionPropertiesArgsProvideDefaults sets the appropriate defaults for CodeVersionPropertiesArgs
 */
export function codeVersionPropertiesArgsProvideDefaults(val: CodeVersionPropertiesArgs): CodeVersionPropertiesArgs {
    return {
        ...val,
        isAnonymous: (val.isAnonymous) ?? false,
        isArchived: (val.isArchived) ?? false,
    };
}

export interface CognitiveServicesSkuArgs {
    capacity?: pulumi.Input<number | undefined>;
    family?: pulumi.Input<string | undefined>;
    name?: pulumi.Input<string | undefined>;
    size?: pulumi.Input<string | undefined>;
    tier?: pulumi.Input<string | undefined>;
}

export interface CollectionArgs {
    /**
     * The msi client id used to collect logging to blob storage. If it's null,backend will pick a registered endpoint identity to auth.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Enable or disable data collection.
     */
    dataCollectionMode?: pulumi.Input<string | enums.DataCollectionMode | undefined>;
    /**
     * The data asset arm resource id. Client side will ensure data asset is pointing to the blob storage, and backend will collect data to the blob storage.
     */
    dataId?: pulumi.Input<string | undefined>;
    /**
     * The sampling rate for collection. Sampling rate 1.0 means we collect 100% of data by default.
     */
    samplingRate?: pulumi.Input<number | undefined>;
}
/**
 * collectionArgsProvideDefaults sets the appropriate defaults for CollectionArgs
 */
export function collectionArgsProvideDefaults(val: CollectionArgs): CollectionArgs {
    return {
        ...val,
        dataCollectionMode: (val.dataCollectionMode) ?? "Disabled",
        samplingRate: (val.samplingRate) ?? 1,
    };
}

/**
 * Column transformer parameters.
 */
export interface ColumnTransformerArgs {
    /**
     * Fields to apply transformer logic on.
     */
    fields?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Different properties to be passed to transformer.
     * Input expected is dictionary of key,value pairs in JSON format.
     */
    parameters?: any | undefined;
}

/**
 * Command job definition.
 */
export interface CommandJobArgs {
    /**
     * ARM resource ID of the code asset.
     */
    codeId?: pulumi.Input<string | undefined>;
    /**
     * [Required] The command to execute on startup of the job. eg. "python train.py"
     */
    command: pulumi.Input<string>;
    /**
     * ARM resource ID of the component resource.
     */
    componentId?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of the compute resource.
     */
    computeId?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Display name of job.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
     */
    distribution?: pulumi.Input<MpiArgs | PyTorchArgs | TensorFlowArgs | undefined>;
    /**
     * [Required] The ARM resource ID of the Environment specification for the job.
     */
    environmentId: pulumi.Input<string>;
    /**
     * Environment variables included in the job.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
     */
    experimentName?: pulumi.Input<string | undefined>;
    /**
     * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
     * Defaults to AmlToken if null.
     */
    identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs | undefined>;
    /**
     * Mapping of input data bindings used in the job.
     */
    inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>} | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * Enum to determine the type of job.
     * Expected value is 'Command'.
     */
    jobType: pulumi.Input<"Command">;
    /**
     * Command Job limit.
     */
    limits?: pulumi.Input<CommandJobLimitsArgs | undefined>;
    /**
     * Notification setting for the job
     */
    notificationSetting?: pulumi.Input<NotificationSettingArgs | undefined>;
    /**
     * Mapping of output data bindings used in the job.
     */
    outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>} | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Queue settings for the job
     */
    queueSettings?: pulumi.Input<QueueSettingsArgs | undefined>;
    /**
     * Compute Resource configuration for the job.
     */
    resources?: pulumi.Input<JobResourceConfigurationArgs | undefined>;
    /**
     * List of JobEndpoints.
     * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
     */
    services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * commandJobArgsProvideDefaults sets the appropriate defaults for CommandJobArgs
 */
export function commandJobArgsProvideDefaults(val: CommandJobArgs): CommandJobArgs {
    return {
        ...val,
        experimentName: (val.experimentName) ?? "Default",
        isArchived: (val.isArchived) ?? false,
        queueSettings: pulumi.output(val.queueSettings).apply(v => v === undefined ? undefined : queueSettingsArgsProvideDefaults(v)),
        resources: pulumi.output(val.resources).apply(v => v === undefined ? undefined : jobResourceConfigurationArgsProvideDefaults(v)),
    };
}

/**
 * Command Job limit class.
 */
export interface CommandJobLimitsArgs {
    /**
     * Expected value is 'Command'.
     */
    jobLimitsType: pulumi.Input<"Command">;
    /**
     * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
     */
    timeout?: pulumi.Input<string | undefined>;
}

/**
 * Component container definition.
 * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
 */
export interface ComponentContainerPropertiesArgs {
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * componentContainerPropertiesArgsProvideDefaults sets the appropriate defaults for ComponentContainerPropertiesArgs
 */
export function componentContainerPropertiesArgsProvideDefaults(val: ComponentContainerPropertiesArgs): ComponentContainerPropertiesArgs {
    return {
        ...val,
        isArchived: (val.isArchived) ?? false,
    };
}

/**
 * Definition of a component version: defines resources that span component types.
 */
export interface ComponentVersionPropertiesArgs {
    /**
     * Defines Component definition details.
     * <see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
     */
    componentSpec?: any | undefined;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * componentVersionPropertiesArgsProvideDefaults sets the appropriate defaults for ComponentVersionPropertiesArgs
 */
export function componentVersionPropertiesArgsProvideDefaults(val: ComponentVersionPropertiesArgs): ComponentVersionPropertiesArgs {
    return {
        ...val,
        isAnonymous: (val.isAnonymous) ?? false,
        isArchived: (val.isArchived) ?? false,
    };
}

/**
 * An Azure Machine Learning compute instance.
 */
export interface ComputeInstanceArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'ComputeInstance'.
     */
    computeType: pulumi.Input<"ComputeInstance">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    /**
     * Properties of ComputeInstance
     */
    properties?: pulumi.Input<ComputeInstancePropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}
/**
 * computeInstanceArgsProvideDefaults sets the appropriate defaults for ComputeInstanceArgs
 */
export function computeInstanceArgsProvideDefaults(val: ComputeInstanceArgs): ComputeInstanceArgs {
    return {
        ...val,
        properties: pulumi.output(val.properties).apply(v => v === undefined ? undefined : computeInstancePropertiesArgsProvideDefaults(v)),
    };
}

/**
 * Compute Instance properties
 */
export interface ComputeInstancePropertiesArgs {
    /**
     * Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role.
     */
    applicationSharingPolicy?: pulumi.Input<string | enums.ApplicationSharingPolicy | undefined>;
    /**
     * The Compute Instance Authorization type. Available values are personal (default).
     */
    computeInstanceAuthorizationType?: pulumi.Input<string | enums.ComputeInstanceAuthorizationType | undefined>;
    /**
     * List of Custom Services added to the compute.
     */
    customServices?: pulumi.Input<pulumi.Input<CustomServiceArgs>[] | undefined>;
    /**
     * Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
     */
    enableNodePublicIp?: pulumi.Input<boolean | undefined>;
    /**
     * Enable SSO (single sign on). Possible values are: true, false.
     */
    enableSSO?: pulumi.Input<boolean | undefined>;
    /**
     * Stops compute instance after user defined period of inactivity. Time is defined in ISO8601 format. Minimum is 15 min, maximum is 3 days.
     */
    idleTimeBeforeShutdown?: pulumi.Input<string | undefined>;
    /**
     * Settings for a personal compute instance.
     */
    personalComputeInstanceSettings?: pulumi.Input<PersonalComputeInstanceSettingsArgs | undefined>;
    /**
     * The list of schedules to be applied on the computes.
     */
    schedules?: pulumi.Input<ComputeSchedulesArgs | undefined>;
    /**
     * Details of customized scripts to execute for setting up the cluster.
     */
    setupScripts?: pulumi.Input<SetupScriptsArgs | undefined>;
    /**
     * Specifies policy and settings for SSH access.
     */
    sshSettings?: pulumi.Input<ComputeInstanceSshSettingsArgs | undefined>;
    /**
     * Virtual network subnet resource ID the compute nodes belong to.
     */
    subnet?: pulumi.Input<ResourceIdArgs | undefined>;
    /**
     * Virtual Machine Size
     */
    vmSize?: pulumi.Input<string | undefined>;
}
/**
 * computeInstancePropertiesArgsProvideDefaults sets the appropriate defaults for ComputeInstancePropertiesArgs
 */
export function computeInstancePropertiesArgsProvideDefaults(val: ComputeInstancePropertiesArgs): ComputeInstancePropertiesArgs {
    return {
        ...val,
        applicationSharingPolicy: (val.applicationSharingPolicy) ?? "Shared",
        computeInstanceAuthorizationType: (val.computeInstanceAuthorizationType) ?? "personal",
        enableSSO: (val.enableSSO) ?? true,
        sshSettings: pulumi.output(val.sshSettings).apply(v => v === undefined ? undefined : computeInstanceSshSettingsArgsProvideDefaults(v)),
    };
}

/**
 * Specifies policy and settings for SSH access.
 */
export interface ComputeInstanceSshSettingsArgs {
    /**
     * Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs.
     */
    adminPublicKey?: pulumi.Input<string | undefined>;
    /**
     * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable.
     */
    sshPublicAccess?: pulumi.Input<string | enums.SshPublicAccess | undefined>;
}
/**
 * computeInstanceSshSettingsArgsProvideDefaults sets the appropriate defaults for ComputeInstanceSshSettingsArgs
 */
export function computeInstanceSshSettingsArgsProvideDefaults(val: ComputeInstanceSshSettingsArgs): ComputeInstanceSshSettingsArgs {
    return {
        ...val,
        sshPublicAccess: (val.sshPublicAccess) ?? "Disabled",
    };
}

export interface ComputeRecurrenceScheduleArgs {
    /**
     * [Required] List of hours for the schedule.
     */
    hours: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * [Required] List of minutes for the schedule.
     */
    minutes: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of month days for the schedule
     */
    monthDays?: pulumi.Input<pulumi.Input<number>[] | undefined>;
    /**
     * List of days for the schedule.
     */
    weekDays?: pulumi.Input<pulumi.Input<string | enums.ComputeWeekDay>[] | undefined>;
}

export interface ComputeRuntimeDtoArgs {
    sparkRuntimeVersion?: pulumi.Input<string | undefined>;
}

/**
 * The list of schedules to be applied on the computes
 */
export interface ComputeSchedulesArgs {
    /**
     * The list of compute start stop schedules to be applied.
     */
    computeStartStop?: pulumi.Input<pulumi.Input<ComputeStartStopScheduleArgs>[] | undefined>;
}

/**
 * Compute start stop schedule properties
 */
export interface ComputeStartStopScheduleArgs {
    /**
     * [Required] The compute power action.
     */
    action?: pulumi.Input<string | enums.ComputePowerAction | undefined>;
    /**
     * Required if triggerType is Cron.
     */
    cron?: pulumi.Input<CronArgs | undefined>;
    /**
     * Required if triggerType is Recurrence.
     */
    recurrence?: pulumi.Input<RecurrenceArgs | undefined>;
    /**
     * [Deprecated] Not used any more.
     */
    schedule?: pulumi.Input<ScheduleBaseArgs | undefined>;
    /**
     * Is the schedule enabled or disabled?
     */
    status?: pulumi.Input<string | enums.ScheduleStatus | undefined>;
    /**
     * [Required] The schedule trigger type.
     */
    triggerType?: pulumi.Input<string | enums.ComputeTriggerType | undefined>;
}
/**
 * computeStartStopScheduleArgsProvideDefaults sets the appropriate defaults for ComputeStartStopScheduleArgs
 */
export function computeStartStopScheduleArgsProvideDefaults(val: ComputeStartStopScheduleArgs): ComputeStartStopScheduleArgs {
    return {
        ...val,
        cron: pulumi.output(val.cron).apply(v => v === undefined ? undefined : cronArgsProvideDefaults(v)),
        recurrence: pulumi.output(val.recurrence).apply(v => v === undefined ? undefined : recurrenceArgsProvideDefaults(v)),
    };
}

/**
 * Resource requirements for each container instance within an online deployment.
 */
export interface ContainerResourceRequirementsArgs {
    /**
     * Container resource limit info:
     */
    containerResourceLimits?: pulumi.Input<ContainerResourceSettingsArgs | undefined>;
    /**
     * Container resource request info:
     */
    containerResourceRequests?: pulumi.Input<ContainerResourceSettingsArgs | undefined>;
}

export interface ContainerResourceSettingsArgs {
    /**
     * Number of vCPUs request/limit for container. More info:
     * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     */
    cpu?: pulumi.Input<string | undefined>;
    /**
     * Number of Nvidia GPU cards request/limit for container. More info:
     * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     */
    gpu?: pulumi.Input<string | undefined>;
    /**
     * Memory size request/limit for container. More info:
     * https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     */
    memory?: pulumi.Input<string | undefined>;
}

export interface ContentSafetyArgs {
    /**
     * [Required] Specifies the status of content safety.
     */
    contentSafetyStatus: pulumi.Input<string | enums.ContentSafetyStatus>;
}

export interface ContentSafetyEndpointDeploymentResourcePropertiesArgs {
    /**
     * The failure reason if the creation failed.
     */
    failureReason?: pulumi.Input<string | undefined>;
    /**
     * Model used for the endpoint deployment.
     */
    model: pulumi.Input<EndpointDeploymentModelArgs>;
    /**
     * The name of RAI policy.
     */
    raiPolicyName?: pulumi.Input<string | undefined>;
    sku?: pulumi.Input<CognitiveServicesSkuArgs | undefined>;
    /**
     * Kind of the deployment.
     * Expected value is 'Azure.ContentSafety'.
     */
    type: pulumi.Input<"Azure.ContentSafety">;
    /**
     * Deployment model version upgrade option.
     */
    versionUpgradeOption?: pulumi.Input<string | enums.DeploymentModelVersionUpgradeOption | undefined>;
}

export interface CosmosDbSettingsArgs {
    collectionsThroughput?: pulumi.Input<number | undefined>;
}

export interface CreateMonitorActionArgs {
    /**
     * Expected value is 'CreateMonitor'.
     */
    actionType: pulumi.Input<"CreateMonitor">;
    /**
     * [Required] Defines the monitor.
     */
    monitorDefinition: pulumi.Input<MonitorDefinitionArgs>;
}

/**
 * The workflow trigger cron for ComputeStartStop schedule type.
 */
export interface CronArgs {
    /**
     * [Required] Specifies cron expression of schedule.
     * The expression should follow NCronTab format.
     */
    expression?: pulumi.Input<string | undefined>;
    /**
     * The start time in yyyy-MM-ddTHH:mm:ss format.
     */
    startTime?: pulumi.Input<string | undefined>;
    /**
     * Specifies time zone in which the schedule runs.
     * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
     */
    timeZone?: pulumi.Input<string | undefined>;
}
/**
 * cronArgsProvideDefaults sets the appropriate defaults for CronArgs
 */
export function cronArgsProvideDefaults(val: CronArgs): CronArgs {
    return {
        ...val,
        timeZone: (val.timeZone) ?? "UTC",
    };
}

export interface CronTriggerArgs {
    /**
     * Specifies end time of schedule in ISO 8601, but without a UTC offset. Refer https://en.wikipedia.org/wiki/ISO_8601.
     * Recommented format would be "2022-06-01T00:00:01"
     * If not present, the schedule will run indefinitely
     */
    endTime?: pulumi.Input<string | undefined>;
    /**
     * [Required] Specifies cron expression of schedule.
     * The expression should follow NCronTab format.
     */
    expression: pulumi.Input<string>;
    /**
     * Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
     */
    startTime?: pulumi.Input<string | undefined>;
    /**
     * Specifies time zone in which the schedule runs.
     * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
     */
    timeZone?: pulumi.Input<string | undefined>;
    /**
     * Expected value is 'Cron'.
     */
    triggerType: pulumi.Input<"Cron">;
}
/**
 * cronTriggerArgsProvideDefaults sets the appropriate defaults for CronTriggerArgs
 */
export function cronTriggerArgsProvideDefaults(val: CronTriggerArgs): CronTriggerArgs {
    return {
        ...val,
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

/**
 * Custom Keys credential object
 */
export interface CustomKeysArgs {
    keys?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Category:= CustomKeys
 * AuthType:= CustomKeys (as type discriminator)
 * Credentials:= {CustomKeys} as Microsoft.MachineLearning.AccountRP.Contracts.WorkspaceConnection.CustomKeys
 * Target:= {any value}
 * Use Metadata property bag for ApiVersion and other metadata fields
 */
export interface CustomKeysWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'CustomKeys'.
     */
    authType: pulumi.Input<"CustomKeys">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * Custom Keys credential object
     */
    credentials?: pulumi.Input<CustomKeysArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

export interface CustomMetricThresholdArgs {
    /**
     * [Required] The user-defined metric to calculate.
     */
    metric: pulumi.Input<string>;
    /**
     * The threshold value. If null, a default value will be set depending on the selected metric.
     */
    threshold?: pulumi.Input<MonitoringThresholdArgs | undefined>;
}

export interface CustomModelJobInputArgs {
    /**
     * Description for the input.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Input Type.
     * Expected value is 'custom_model'.
     */
    jobInputType: pulumi.Input<"custom_model">;
    /**
     * Enum to determine the input data delivery mode.
     */
    mode?: pulumi.Input<string | enums.InputDeliveryMode | undefined>;
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
     * Output Asset Name.
     */
    assetName?: pulumi.Input<string | undefined>;
    /**
     * Description for the output.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Output Type.
     * Expected value is 'custom_model'.
     */
    jobOutputType: pulumi.Input<"custom_model">;
    /**
     * Output data delivery mode enums.
     */
    mode?: pulumi.Input<string | enums.OutputDeliveryMode | undefined>;
    /**
     * Output Asset URI.
     */
    uri?: pulumi.Input<string | undefined>;
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

export interface CustomMonitoringSignalArgs {
    /**
     * [Required] Reference to the component asset used to calculate the custom metrics.
     */
    componentId: pulumi.Input<string>;
    /**
     * Monitoring assets to take as input. Key is the component input port name, value is the data asset.
     */
    inputAssets?: pulumi.Input<{[key: string]: pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>} | undefined>;
    /**
     * Extra component parameters to take as input. Key is the component literal input port name, value is the parameter value.
     */
    inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>} | undefined>;
    /**
     * [Required] A list of metrics to calculate and their associated thresholds.
     */
    metricThresholds: pulumi.Input<pulumi.Input<CustomMetricThresholdArgs>[]>;
    /**
     * The current notification mode for this signal.
     */
    notificationTypes?: pulumi.Input<pulumi.Input<string | enums.MonitoringNotificationType>[] | undefined>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Expected value is 'Custom'.
     */
    signalType: pulumi.Input<"Custom">;
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

/**
 * Specifies the custom service configuration
 */
export interface CustomServiceArgs {
    /**
     * Describes the docker settings for the image
     */
    docker?: pulumi.Input<DockerArgs | undefined>;
    /**
     * Configuring the endpoints for the container
     */
    endpoints?: pulumi.Input<pulumi.Input<EndpointArgs>[] | undefined>;
    /**
     * Environment Variable for the container
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<EnvironmentVariableArgs>} | undefined>;
    /**
     * Describes the Image Specifications
     */
    image?: pulumi.Input<ImageArgs | undefined>;
    /**
     * Describes the jupyter kernel settings for the image if its a custom environment
     */
    kernel?: pulumi.Input<JupyterKernelConfigArgs | undefined>;
    /**
     * Name of the Custom Service
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Configuring the volumes for the container
     */
    volumes?: pulumi.Input<pulumi.Input<VolumeDefinitionArgs>[] | undefined>;
}
/**
 * customServiceArgsProvideDefaults sets the appropriate defaults for CustomServiceArgs
 */
export function customServiceArgsProvideDefaults(val: CustomServiceArgs): CustomServiceArgs {
    return {
        ...val,
        image: pulumi.output(val.image).apply(v => v === undefined ? undefined : imageArgsProvideDefaults(v)),
    };
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

export interface DataCollectorArgs {
    /**
     * [Required] The collection configuration. Each collection has it own configuration to collect model data and the name of collection can be arbitrary string.
     * Model data collector can be used for either payload logging or custom logging or both of them. Collection request and response are reserved for payload logging, others are for custom logging.
     */
    collections: pulumi.Input<{[key: string]: pulumi.Input<CollectionArgs>}>;
    /**
     * The request logging configuration for mdc, it includes advanced logging settings for all collections. It's optional.
     */
    requestLogging?: pulumi.Input<RequestLoggingArgs | undefined>;
    /**
     * When model data is collected to blob storage, we need to roll the data to different path to avoid logging all of them in a single blob file.
     * If the rolling rate is hour, all data will be collected in the blob path /yyyy/MM/dd/HH/.
     * If it's day, all data will be collected in blob path /yyyy/MM/dd/.
     * The other benefit of rolling path is that model monitoring ui is able to select a time range of data very quickly.
     */
    rollingRate?: pulumi.Input<string | enums.RollingRateType | undefined>;
}
/**
 * dataCollectorArgsProvideDefaults sets the appropriate defaults for DataCollectorArgs
 */
export function dataCollectorArgsProvideDefaults(val: DataCollectorArgs): DataCollectorArgs {
    return {
        ...val,
        rollingRate: (val.rollingRate) ?? "Hour",
    };
}

/**
 * Container for data asset versions.
 */
export interface DataContainerPropertiesArgs {
    /**
     * [Required] Specifies the type of data.
     */
    dataType: pulumi.Input<string | enums.DataType>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * dataContainerPropertiesArgsProvideDefaults sets the appropriate defaults for DataContainerPropertiesArgs
 */
export function dataContainerPropertiesArgsProvideDefaults(val: DataContainerPropertiesArgs): DataContainerPropertiesArgs {
    return {
        ...val,
        isArchived: (val.isArchived) ?? false,
    };
}

export interface DataDriftMonitoringSignalArgs {
    /**
     * A dictionary that maps feature names to their respective data types.
     */
    featureDataTypeOverride?: pulumi.Input<{[key: string]: pulumi.Input<string | enums.MonitoringFeatureDataType>} | undefined>;
    /**
     * The settings for computing feature importance.
     */
    featureImportanceSettings?: pulumi.Input<FeatureImportanceSettingsArgs | undefined>;
    /**
     * The feature filter which identifies which feature to calculate drift over.
     */
    features?: pulumi.Input<AllFeaturesArgs | FeatureSubsetArgs | TopNFeaturesByAttributionArgs | undefined>;
    /**
     * [Required] A list of metrics to calculate and their associated thresholds.
     */
    metricThresholds: pulumi.Input<pulumi.Input<CategoricalDataDriftMetricThresholdArgs | NumericalDataDriftMetricThresholdArgs>[]>;
    /**
     * The current notification mode for this signal.
     */
    notificationTypes?: pulumi.Input<pulumi.Input<string | enums.MonitoringNotificationType>[] | undefined>;
    /**
     * [Required] The data which drift will be calculated for.
     */
    productionData: pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * [Required] The data to calculate drift against.
     */
    referenceData: pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>;
    /**
     * Expected value is 'DataDrift'.
     */
    signalType: pulumi.Input<"DataDrift">;
}
/**
 * dataDriftMonitoringSignalArgsProvideDefaults sets the appropriate defaults for DataDriftMonitoringSignalArgs
 */
export function dataDriftMonitoringSignalArgsProvideDefaults(val: DataDriftMonitoringSignalArgs): DataDriftMonitoringSignalArgs {
    return {
        ...val,
        featureImportanceSettings: pulumi.output(val.featureImportanceSettings).apply(v => v === undefined ? undefined : featureImportanceSettingsArgsProvideDefaults(v)),
    };
}

/**
 * A DataFactory compute.
 */
export interface DataFactoryArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'DataFactory'.
     */
    computeType: pulumi.Input<"DataFactory">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * A DataLakeAnalytics compute.
 */
export interface DataLakeAnalyticsArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'DataLakeAnalytics'.
     */
    computeType: pulumi.Input<"DataLakeAnalytics">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    properties?: pulumi.Input<DataLakeAnalyticsSchemaPropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}

export interface DataLakeAnalyticsSchemaPropertiesArgs {
    /**
     * DataLake Store Account Name
     */
    dataLakeStoreAccountName?: pulumi.Input<string | undefined>;
}

/**
 * Reference to an asset via its path in a datastore.
 */
export interface DataPathAssetReferenceArgs {
    /**
     * ARM resource ID of the datastore where the asset is located.
     */
    datastoreId?: pulumi.Input<string | undefined>;
    /**
     * The path of the file/directory in the datastore.
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine which reference method to use for an asset.
     * Expected value is 'DataPath'.
     */
    referenceType: pulumi.Input<"DataPath">;
}

export interface DataQualityMonitoringSignalArgs {
    /**
     * A dictionary that maps feature names to their respective data types.
     */
    featureDataTypeOverride?: pulumi.Input<{[key: string]: pulumi.Input<string | enums.MonitoringFeatureDataType>} | undefined>;
    /**
     * The settings for computing feature importance.
     */
    featureImportanceSettings?: pulumi.Input<FeatureImportanceSettingsArgs | undefined>;
    /**
     * The features to calculate drift over.
     */
    features?: pulumi.Input<AllFeaturesArgs | FeatureSubsetArgs | TopNFeaturesByAttributionArgs | undefined>;
    /**
     * [Required] A list of metrics to calculate and their associated thresholds.
     */
    metricThresholds: pulumi.Input<pulumi.Input<CategoricalDataQualityMetricThresholdArgs | NumericalDataQualityMetricThresholdArgs>[]>;
    /**
     * The current notification mode for this signal.
     */
    notificationTypes?: pulumi.Input<pulumi.Input<string | enums.MonitoringNotificationType>[] | undefined>;
    /**
     * [Required] The data produced by the production service which drift will be calculated for.
     */
    productionData: pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * [Required] The data to calculate drift against.
     */
    referenceData: pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>;
    /**
     * Expected value is 'DataQuality'.
     */
    signalType: pulumi.Input<"DataQuality">;
}
/**
 * dataQualityMonitoringSignalArgsProvideDefaults sets the appropriate defaults for DataQualityMonitoringSignalArgs
 */
export function dataQualityMonitoringSignalArgsProvideDefaults(val: DataQualityMonitoringSignalArgs): DataQualityMonitoringSignalArgs {
    return {
        ...val,
        featureImportanceSettings: pulumi.output(val.featureImportanceSettings).apply(v => v === undefined ? undefined : featureImportanceSettingsArgsProvideDefaults(v)),
    };
}

/**
 * A DataFactory compute.
 */
export interface DatabricksArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'Databricks'.
     */
    computeType: pulumi.Input<"Databricks">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    /**
     * Properties of Databricks
     */
    properties?: pulumi.Input<DatabricksPropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * Properties of Databricks
 */
export interface DatabricksPropertiesArgs {
    /**
     * Databricks access token
     */
    databricksAccessToken?: pulumi.Input<string | undefined>;
    /**
     * Workspace Url
     */
    workspaceUrl?: pulumi.Input<string | undefined>;
}

export interface DatasetCreateRequestDataPathArgs {
    /**
     * The datastore name.
     */
    datastoreName?: pulumi.Input<string | undefined>;
    /**
     * Path within the datastore.
     */
    relativePath?: pulumi.Input<string | undefined>;
}

export interface DatasetCreateRequestParametersArgs {
    /**
     * Header type.
     */
    header?: pulumi.Input<string | enums.Header | undefined>;
    /**
     * Boolean to keep path information as column in the dataset. Defaults to False. This is useful when reading multiple files, and want to know which file a particular record originated from, or to keep useful information in file path.
     */
    includePath?: pulumi.Input<boolean | undefined>;
    /**
     * The partition information of each path will be extracted into columns based on the specified format. Format part '{column_name}' creates string column, and '{column_name:yyyy/MM/dd/HH/mm/ss}' creates datetime column, where 'yyyy', 'MM', 'dd', 'HH', 'mm' and 'ss' are used to extract year, month, day, hour, minute and second for the datetime type. The format should start from the position of first partition key until the end of file path. For example, given the path '../USA/2019/01/01/data.parquet' where the partition is by country/region and time, partition_format='/{CountryOrRegion}/{PartitionDate:yyyy/MM/dd}/data.csv' creates a string column 'CountryOrRegion' with the value 'USA' and a datetime column 'PartitionDate' with the value '2019-01-01
     */
    partitionFormat?: pulumi.Input<string | undefined>;
    path?: pulumi.Input<DatasetCreateRequestPathArgs | undefined>;
    query?: pulumi.Input<DatasetCreateRequestQueryArgs | undefined>;
    /**
     * The separator used to split columns for 'delimited_files' sourceType.
     */
    separator?: pulumi.Input<string | undefined>;
    /**
     * Data source type.
     */
    sourceType?: pulumi.Input<string | enums.SourceType | undefined>;
}
/**
 * datasetCreateRequestParametersArgsProvideDefaults sets the appropriate defaults for DatasetCreateRequestParametersArgs
 */
export function datasetCreateRequestParametersArgsProvideDefaults(val: DatasetCreateRequestParametersArgs): DatasetCreateRequestParametersArgs {
    return {
        ...val,
        includePath: (val.includePath) ?? false,
    };
}

export interface DatasetCreateRequestPathArgs {
    dataPath?: pulumi.Input<DatasetCreateRequestDataPathArgs | undefined>;
    /**
     * The Http URL.
     */
    httpUrl?: pulumi.Input<string | undefined>;
}

export interface DatasetCreateRequestQueryArgs {
    /**
     * The SQL/PostgreSQL/MySQL datastore name.
     */
    datastoreName?: pulumi.Input<string | undefined>;
    /**
     * SQL Quey.
     */
    query?: pulumi.Input<string | undefined>;
}

export interface DatasetCreateRequestRegistrationArgs {
    /**
     * The description for the dataset.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The name of the dataset.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Tags associated with the dataset.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

export interface DatasetCreateRequestTimeSeriesArgs {
    /**
     * Column name to be used as CoarseGrainTimestamp. Can only be used if 'fineGrainTimestamp' is specified and cannot be same as 'fineGrainTimestamp'.
     */
    coarseGrainTimestamp?: pulumi.Input<string | undefined>;
    /**
     *  Column name to be used as FineGrainTimestamp
     */
    fineGrainTimestamp?: pulumi.Input<string | undefined>;
}

/**
 * Dataset reference object.
 */
export interface DatasetReferenceArgs {
    /**
     * The fully qualified ARM id of the dataset reference.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The name of the dataset reference.
     */
    name?: pulumi.Input<string | undefined>;
}

export interface DefaultScaleSettingsArgs {
    /**
     * Expected value is 'Default'.
     */
    scaleType: pulumi.Input<"Default">;
}

export interface DeploymentResourceConfigurationArgs {
    /**
     * Optional number of instances or nodes used by the compute target.
     */
    instanceCount?: pulumi.Input<number | undefined>;
    /**
     * Optional type of VM used as supported by the compute target.
     */
    instanceType?: pulumi.Input<string | undefined>;
    /**
     * Additional properties bag.
     */
    properties?: pulumi.Input<{[key: string]: any} | undefined>;
}
/**
 * deploymentResourceConfigurationArgsProvideDefaults sets the appropriate defaults for DeploymentResourceConfigurationArgs
 */
export function deploymentResourceConfigurationArgsProvideDefaults(val: DeploymentResourceConfigurationArgs): DeploymentResourceConfigurationArgs {
    return {
        ...val,
        instanceCount: (val.instanceCount) ?? 1,
    };
}

export interface DockerArgs {
    /**
     * Indicate whether container shall run in privileged or non-privileged mode.
     */
    privileged?: pulumi.Input<boolean | undefined>;
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
    context?: pulumi.Input<string | undefined>;
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
    platform?: pulumi.Input<DockerImagePlatformArgs | undefined>;
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
    platform?: pulumi.Input<DockerImagePlatformArgs | undefined>;
}

export interface DockerImagePlatformArgs {
    /**
     * The OS type the Environment.
     */
    operatingSystemType?: pulumi.Input<string | enums.OperatingSystemType | undefined>;
}

export interface EncryptionPropertyArgs {
    /**
     * The byok cosmosdb account that customer brings to store customer's data
     * with encryption
     */
    cosmosDbResourceId?: pulumi.Input<string | undefined>;
    /**
     * Identity to be used with the keyVault
     */
    identity?: pulumi.Input<IdentityForCmkArgs | undefined>;
    /**
     * KeyVault details to do the encryption
     */
    keyVaultProperties: pulumi.Input<KeyVaultPropertiesArgs>;
    /**
     * The byok search account that customer brings to store customer's data
     * with encryption
     */
    searchAccountResourceId?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether or not the encryption is enabled for the workspace.
     */
    status: pulumi.Input<string | enums.EncryptionStatus>;
    /**
     * The byok storage account that customer brings to store customer's data
     * with encryption
     */
    storageAccountResourceId?: pulumi.Input<string | undefined>;
}

export interface EndpointArgs {
    /**
     * Host IP over which the application is exposed from the container
     */
    hostIp?: pulumi.Input<string | undefined>;
    /**
     * Name of the Endpoint
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Protocol over which communication will happen over this endpoint
     */
    protocol?: pulumi.Input<string | enums.Protocol | undefined>;
    /**
     * Port over which the application is exposed from container.
     */
    published?: pulumi.Input<number | undefined>;
    /**
     * Application port inside the container.
     */
    target?: pulumi.Input<number | undefined>;
}
/**
 * endpointArgsProvideDefaults sets the appropriate defaults for EndpointArgs
 */
export function endpointArgsProvideDefaults(val: EndpointArgs): EndpointArgs {
    return {
        ...val,
        protocol: (val.protocol) ?? "tcp",
    };
}

/**
 * Keys for endpoint authentication.
 */
export interface EndpointAuthKeysArgs {
    /**
     * The primary key.
     */
    primaryKey?: pulumi.Input<string | undefined>;
    /**
     * The secondary key.
     */
    secondaryKey?: pulumi.Input<string | undefined>;
}

export interface EndpointDeploymentModelArgs {
    /**
     * Model format
     */
    format?: pulumi.Input<string | undefined>;
    /**
     * Model name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Optional. Deployment model source ARM resource ID.
     */
    source?: pulumi.Input<string | undefined>;
    /**
     * Model version.
     */
    version?: pulumi.Input<string | undefined>;
}

export interface EndpointScheduleActionArgs {
    /**
     * Expected value is 'InvokeBatchEndpoint'.
     */
    actionType: pulumi.Input<"InvokeBatchEndpoint">;
    /**
     * [Required] Defines Schedule action definition details.
     * <see href="TBD" />
     */
    endpointInvocationDefinition: any;
}

/**
 * Container for environment specification versions.
 */
export interface EnvironmentContainerPropertiesArgs {
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * environmentContainerPropertiesArgsProvideDefaults sets the appropriate defaults for EnvironmentContainerPropertiesArgs
 */
export function environmentContainerPropertiesArgsProvideDefaults(val: EnvironmentContainerPropertiesArgs): EnvironmentContainerPropertiesArgs {
    return {
        ...val,
        isArchived: (val.isArchived) ?? false,
    };
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
    condaFile?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Configuration settings for Docker.
     */
    docker?: pulumi.Input<DockerBuildArgs | DockerImageArgs | undefined>;
    /**
     * Defines configuration specific to inference.
     */
    inferenceContainerProperties?: pulumi.Input<InferenceContainerPropertiesArgs | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

export interface EnvironmentVariableArgs {
    /**
     * Type of the Environment Variable. Possible values are: local - For local variable
     */
    type?: pulumi.Input<string | enums.EnvironmentVariableType | undefined>;
    /**
     * Value of the Environment variable
     */
    value?: pulumi.Input<string | undefined>;
}
/**
 * environmentVariableArgsProvideDefaults sets the appropriate defaults for EnvironmentVariableArgs
 */
export function environmentVariableArgsProvideDefaults(val: EnvironmentVariableArgs): EnvironmentVariableArgs {
    return {
        ...val,
        type: (val.type) ?? "local",
    };
}

/**
 * Environment version details.
 */
export interface EnvironmentVersionPropertiesArgs {
    /**
     * AutoRebuild setting for the derived image
     */
    autoRebuild?: pulumi.Input<string | enums.AutoRebuildSetting | undefined>;
    /**
     * Configuration settings for Docker build context.
     */
    build?: pulumi.Input<BuildContextArgs | undefined>;
    /**
     * Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.
     * <see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" />
     */
    condaFile?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Name of the image that will be used for the environment.
     * <seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
     */
    image?: pulumi.Input<string | undefined>;
    /**
     * Defines configuration specific to inference.
     */
    inferenceConfig?: pulumi.Input<InferenceContainerPropertiesArgs | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The type of operating system.
     */
    osType?: pulumi.Input<string | enums.OperatingSystemType | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Stage in the environment lifecycle assigned to this environment
     */
    stage?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * environmentVersionPropertiesArgsProvideDefaults sets the appropriate defaults for EnvironmentVersionPropertiesArgs
 */
export function environmentVersionPropertiesArgsProvideDefaults(val: EnvironmentVersionPropertiesArgs): EnvironmentVersionPropertiesArgs {
    return {
        ...val,
        autoRebuild: (val.autoRebuild) ?? "Disabled",
        build: pulumi.output(val.build).apply(v => v === undefined ? undefined : buildContextArgsProvideDefaults(v)),
        isAnonymous: (val.isAnonymous) ?? false,
        isArchived: (val.isArchived) ?? false,
        osType: (val.osType) ?? "Linux",
    };
}

export interface FeatureAttributionDriftMonitoringSignalArgs {
    /**
     * A dictionary that maps feature names to their respective data types.
     */
    featureDataTypeOverride?: pulumi.Input<{[key: string]: pulumi.Input<string | enums.MonitoringFeatureDataType>} | undefined>;
    /**
     * [Required] The settings for computing feature importance.
     */
    featureImportanceSettings: pulumi.Input<FeatureImportanceSettingsArgs>;
    /**
     * [Required] A list of metrics to calculate and their associated thresholds.
     */
    metricThreshold: pulumi.Input<FeatureAttributionMetricThresholdArgs>;
    /**
     * The current notification mode for this signal.
     */
    notificationTypes?: pulumi.Input<pulumi.Input<string | enums.MonitoringNotificationType>[] | undefined>;
    /**
     * [Required] The data which drift will be calculated for.
     */
    productionData: pulumi.Input<pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>[]>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * [Required] The data to calculate drift against.
     */
    referenceData: pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>;
    /**
     * Expected value is 'FeatureAttributionDrift'.
     */
    signalType: pulumi.Input<"FeatureAttributionDrift">;
}
/**
 * featureAttributionDriftMonitoringSignalArgsProvideDefaults sets the appropriate defaults for FeatureAttributionDriftMonitoringSignalArgs
 */
export function featureAttributionDriftMonitoringSignalArgsProvideDefaults(val: FeatureAttributionDriftMonitoringSignalArgs): FeatureAttributionDriftMonitoringSignalArgs {
    return {
        ...val,
        featureImportanceSettings: pulumi.output(val.featureImportanceSettings).apply(featureImportanceSettingsArgsProvideDefaults),
    };
}

export interface FeatureAttributionMetricThresholdArgs {
    /**
     * [Required] The feature attribution metric to calculate.
     */
    metric: pulumi.Input<string | enums.FeatureAttributionMetric>;
    /**
     * The threshold value. If null, a default value will be set depending on the selected metric.
     */
    threshold?: pulumi.Input<MonitoringThresholdArgs | undefined>;
}

export interface FeatureImportanceSettingsArgs {
    /**
     * The mode of operation for computing feature importance.
     */
    mode?: pulumi.Input<string | enums.FeatureImportanceMode | undefined>;
    /**
     * The name of the target column within the input data asset.
     */
    targetColumn?: pulumi.Input<string | undefined>;
}
/**
 * featureImportanceSettingsArgsProvideDefaults sets the appropriate defaults for FeatureImportanceSettingsArgs
 */
export function featureImportanceSettingsArgsProvideDefaults(val: FeatureImportanceSettingsArgs): FeatureImportanceSettingsArgs {
    return {
        ...val,
        mode: (val.mode) ?? "Disabled",
    };
}

export interface FeatureStoreSettingsArgs {
    computeRuntime?: pulumi.Input<ComputeRuntimeDtoArgs | undefined>;
    offlineStoreConnectionName?: pulumi.Input<string | undefined>;
    onlineStoreConnectionName?: pulumi.Input<string | undefined>;
}

export interface FeatureSubsetArgs {
    /**
     * [Required] The list of features to include.
     */
    features: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Expected value is 'FeatureSubset'.
     */
    filterType: pulumi.Input<"FeatureSubset">;
}

/**
 * DTO object representing feature set
 */
export interface FeaturesetContainerPropertiesArgs {
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * featuresetContainerPropertiesArgsProvideDefaults sets the appropriate defaults for FeaturesetContainerPropertiesArgs
 */
export function featuresetContainerPropertiesArgsProvideDefaults(val: FeaturesetContainerPropertiesArgs): FeaturesetContainerPropertiesArgs {
    return {
        ...val,
        isArchived: (val.isArchived) ?? false,
    };
}

/**
 * DTO object representing specification
 */
export interface FeaturesetSpecificationArgs {
    /**
     * Specifies the spec path
     */
    path?: pulumi.Input<string | undefined>;
}

/**
 * DTO object representing feature set version
 */
export interface FeaturesetVersionPropertiesArgs {
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Specifies list of entities
     */
    entities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the materialization settings
     */
    materializationSettings?: pulumi.Input<MaterializationSettingsArgs | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies the feature spec details
     */
    specification?: pulumi.Input<FeaturesetSpecificationArgs | undefined>;
    /**
     * Specifies the asset stage
     */
    stage?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * featuresetVersionPropertiesArgsProvideDefaults sets the appropriate defaults for FeaturesetVersionPropertiesArgs
 */
export function featuresetVersionPropertiesArgsProvideDefaults(val: FeaturesetVersionPropertiesArgs): FeaturesetVersionPropertiesArgs {
    return {
        ...val,
        isAnonymous: (val.isAnonymous) ?? false,
        isArchived: (val.isArchived) ?? false,
        materializationSettings: pulumi.output(val.materializationSettings).apply(v => v === undefined ? undefined : materializationSettingsArgsProvideDefaults(v)),
    };
}

/**
 * DTO object representing feature entity
 */
export interface FeaturestoreEntityContainerPropertiesArgs {
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * featurestoreEntityContainerPropertiesArgsProvideDefaults sets the appropriate defaults for FeaturestoreEntityContainerPropertiesArgs
 */
export function featurestoreEntityContainerPropertiesArgsProvideDefaults(val: FeaturestoreEntityContainerPropertiesArgs): FeaturestoreEntityContainerPropertiesArgs {
    return {
        ...val,
        isArchived: (val.isArchived) ?? false,
    };
}

/**
 * DTO object representing feature entity version
 */
export interface FeaturestoreEntityVersionPropertiesArgs {
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Specifies index columns
     */
    indexColumns?: pulumi.Input<pulumi.Input<IndexColumnArgs>[] | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies the asset stage
     */
    stage?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * featurestoreEntityVersionPropertiesArgsProvideDefaults sets the appropriate defaults for FeaturestoreEntityVersionPropertiesArgs
 */
export function featurestoreEntityVersionPropertiesArgsProvideDefaults(val: FeaturestoreEntityVersionPropertiesArgs): FeaturestoreEntityVersionPropertiesArgs {
    return {
        ...val,
        isAnonymous: (val.isAnonymous) ?? false,
        isArchived: (val.isArchived) ?? false,
    };
}

/**
 * Fixed input data definition.
 */
export interface FixedInputDataArgs {
    /**
     * Mapping of column names to special uses.
     */
    columns?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The context metadata of the data source.
     */
    dataContext?: pulumi.Input<string | undefined>;
    /**
     * Monitoring input data type enum.
     * Expected value is 'Fixed'.
     */
    inputDataType: pulumi.Input<"Fixed">;
    /**
     * [Required] Specifies the type of job.
     */
    jobInputType: pulumi.Input<string | enums.JobInputType>;
    /**
     * [Required] Input Asset URI.
     */
    uri: pulumi.Input<string>;
}

export interface FlavorDataArgs {
    /**
     * Model flavor-specific data.
     */
    data?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Forecasting task in AutoML Table vertical.
 */
export interface ForecastingArgs {
    /**
     * Columns to use for CVSplit data.
     */
    cvSplitColumnNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Featurization inputs needed for AutoML job.
     */
    featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs | undefined>;
    /**
     * Forecasting task specific inputs.
     */
    forecastingSettings?: pulumi.Input<ForecastingSettingsArgs | undefined>;
    /**
     * Execution constraints for AutoMLJob.
     */
    limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs | undefined>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Number of cross validation folds to be applied on training dataset
     * when validation dataset is not provided.
     */
    nCrossValidations?: pulumi.Input<AutoNCrossValidationsArgs | CustomNCrossValidationsArgs | undefined>;
    /**
     * Primary metrics for Forecasting task.
     */
    primaryMetric?: pulumi.Input<string | enums.ForecastingPrimaryMetrics | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'Forecasting'.
     */
    taskType: pulumi.Input<"Forecasting">;
    /**
     * Test data input.
     */
    testData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of test dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    testDataSize?: pulumi.Input<number | undefined>;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Inputs for training phase for an AutoML Job.
     */
    trainingSettings?: pulumi.Input<ForecastingTrainingSettingsArgs | undefined>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of training dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    validationDataSize?: pulumi.Input<number | undefined>;
    /**
     * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
     */
    weightColumnName?: pulumi.Input<string | undefined>;
}
/**
 * forecastingArgsProvideDefaults sets the appropriate defaults for ForecastingArgs
 */
export function forecastingArgsProvideDefaults(val: ForecastingArgs): ForecastingArgs {
    return {
        ...val,
        featurizationSettings: pulumi.output(val.featurizationSettings).apply(v => v === undefined ? undefined : tableVerticalFeaturizationSettingsArgsProvideDefaults(v)),
        forecastingSettings: pulumi.output(val.forecastingSettings).apply(v => v === undefined ? undefined : forecastingSettingsArgsProvideDefaults(v)),
        limitSettings: pulumi.output(val.limitSettings).apply(v => v === undefined ? undefined : tableVerticalLimitSettingsArgsProvideDefaults(v)),
        logVerbosity: (val.logVerbosity) ?? "Info",
        primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
        testData: pulumi.output(val.testData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        trainingSettings: pulumi.output(val.trainingSettings).apply(v => v === undefined ? undefined : forecastingTrainingSettingsArgsProvideDefaults(v)),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
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
    countryOrRegionForHolidays?: pulumi.Input<string | undefined>;
    /**
     * Number of periods between the origin time of one CV fold and the next fold. For
     * example, if `CVStepSize` = 3 for daily data, the origin time for each fold will be
     * three days apart.
     */
    cvStepSize?: pulumi.Input<number | undefined>;
    /**
     * Flag for generating lags for the numeric features.
     */
    featureLags?: pulumi.Input<string | enums.FeatureLags | undefined>;
    /**
     * The desired maximum forecast horizon in units of time-series frequency.
     */
    forecastHorizon?: pulumi.Input<AutoForecastHorizonArgs | CustomForecastHorizonArgs | undefined>;
    /**
     * When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default.
     */
    frequency?: pulumi.Input<string | undefined>;
    /**
     * Set time series seasonality as an integer multiple of the series frequency.
     * If seasonality is set to 'auto', it will be inferred.
     */
    seasonality?: pulumi.Input<AutoSeasonalityArgs | CustomSeasonalityArgs | undefined>;
    /**
     * The parameter defining how if AutoML should handle short time series.
     */
    shortSeriesHandlingConfig?: pulumi.Input<string | enums.ShortSeriesHandlingConfiguration | undefined>;
    /**
     * Target aggregate function.
     */
    targetAggregateFunction?: pulumi.Input<string | enums.TargetAggregationFunction | undefined>;
    /**
     * The number of past periods to lag from the target column.
     */
    targetLags?: pulumi.Input<AutoTargetLagsArgs | CustomTargetLagsArgs | undefined>;
    /**
     * The number of past periods used to create a rolling window average of the target column.
     */
    targetRollingWindowSize?: pulumi.Input<AutoTargetRollingWindowSizeArgs | CustomTargetRollingWindowSizeArgs | undefined>;
    /**
     * The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency.
     */
    timeColumnName?: pulumi.Input<string | undefined>;
    /**
     * The names of columns used to group a timeseries. It can be used to create multiple series.
     * If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting.
     */
    timeSeriesIdColumnNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Configure STL Decomposition of the time-series target column.
     */
    useStl?: pulumi.Input<string | enums.UseStl | undefined>;
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
 * Forecasting Training related configuration.
 */
export interface ForecastingTrainingSettingsArgs {
    /**
     * Allowed models for forecasting task.
     */
    allowedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.ForecastingModels>[] | undefined>;
    /**
     * Blocked models for forecasting task.
     */
    blockedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.ForecastingModels>[] | undefined>;
    /**
     * Enable recommendation of DNN models.
     */
    enableDnnTraining?: pulumi.Input<boolean | undefined>;
    /**
     * Flag to turn on explainability on best model.
     */
    enableModelExplainability?: pulumi.Input<boolean | undefined>;
    /**
     * Flag for enabling onnx compatible models.
     */
    enableOnnxCompatibleModels?: pulumi.Input<boolean | undefined>;
    /**
     * Enable stack ensemble run.
     */
    enableStackEnsemble?: pulumi.Input<boolean | undefined>;
    /**
     * Enable voting ensemble run.
     */
    enableVoteEnsemble?: pulumi.Input<boolean | undefined>;
    /**
     * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
     * Configure this parameter with a higher value than 300 secs, if more time is needed.
     */
    ensembleModelDownloadTimeout?: pulumi.Input<string | undefined>;
    /**
     * Stack ensemble settings for stack ensemble run.
     */
    stackEnsembleSettings?: pulumi.Input<StackEnsembleSettingsArgs | undefined>;
}
/**
 * forecastingTrainingSettingsArgsProvideDefaults sets the appropriate defaults for ForecastingTrainingSettingsArgs
 */
export function forecastingTrainingSettingsArgsProvideDefaults(val: ForecastingTrainingSettingsArgs): ForecastingTrainingSettingsArgs {
    return {
        ...val,
        enableDnnTraining: (val.enableDnnTraining) ?? false,
        enableModelExplainability: (val.enableModelExplainability) ?? true,
        enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
        enableStackEnsemble: (val.enableStackEnsemble) ?? true,
        enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
        ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
        stackEnsembleSettings: pulumi.output(val.stackEnsembleSettings).apply(v => v === undefined ? undefined : stackEnsembleSettingsArgsProvideDefaults(v)),
    };
}

/**
 * FQDN Outbound Rule for the managed network of a machine learning workspace.
 */
export interface FqdnOutboundRuleArgs {
    /**
     * Category of a managed network Outbound Rule of a machine learning workspace.
     */
    category?: pulumi.Input<string | enums.RuleCategory | undefined>;
    destination?: pulumi.Input<string | undefined>;
    /**
     * Type of a managed network Outbound Rule of a machine learning workspace.
     */
    status?: pulumi.Input<string | enums.RuleStatus | undefined>;
    /**
     * Type of a managed network Outbound Rule of a machine learning workspace.
     * Expected value is 'FQDN'.
     */
    type: pulumi.Input<"FQDN">;
}

/**
 * Defines a Sampling Algorithm that exhaustively generates every value combination in the space
 */
export interface GridSamplingAlgorithmArgs {
    /**
     * Expected value is 'Grid'.
     */
    samplingAlgorithmType: pulumi.Input<"Grid">;
}

/**
 * Environment configuration options.
 */
export interface GroupEnvironmentConfigurationArgs {
    /**
     * ARM resource ID of the environment specification for the inference pool.
     */
    environmentId?: pulumi.Input<string | undefined>;
    /**
     * Environment variables configuration for the inference pool.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<StringStringKeyValuePairArgs>[] | undefined>;
    /**
     * Liveness probe monitors the health of the container regularly.
     */
    livenessProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
    /**
     * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
     */
    readinessProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
    /**
     * This verifies whether the application within a container is started. Startup probes run before any other probe, and, unless it finishes successfully, disables other probes.
     */
    startupProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
}
/**
 * groupEnvironmentConfigurationArgsProvideDefaults sets the appropriate defaults for GroupEnvironmentConfigurationArgs
 */
export function groupEnvironmentConfigurationArgsProvideDefaults(val: GroupEnvironmentConfigurationArgs): GroupEnvironmentConfigurationArgs {
    return {
        ...val,
        livenessProbe: pulumi.output(val.livenessProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
        readinessProbe: pulumi.output(val.readinessProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
        startupProbe: pulumi.output(val.startupProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
    };
}

/**
 * Model configuration options.
 */
export interface GroupModelConfigurationArgs {
    /**
     * The URI path to the model.
     */
    modelId?: pulumi.Input<string | undefined>;
}

/**
 * A HDInsight compute.
 */
export interface HDInsightArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'HDInsight'.
     */
    computeType: pulumi.Input<"HDInsight">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    /**
     * HDInsight compute properties
     */
    properties?: pulumi.Input<HDInsightPropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * HDInsight compute properties
 */
export interface HDInsightPropertiesArgs {
    /**
     * Public IP address of the master node of the cluster.
     */
    address?: pulumi.Input<string | undefined>;
    /**
     * Admin credentials for master node of the cluster
     */
    administratorAccount?: pulumi.Input<VirtualMachineSshCredentialsArgs | undefined>;
    /**
     * Port open for ssh connections on the master node of the cluster.
     */
    sshPort?: pulumi.Input<number | undefined>;
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
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
    /**
     * The user assigned identities associated with the resource.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Identity object used for encryption.
 */
export interface IdentityForCmkArgs {
    /**
     * UserAssignedIdentity to be used to fetch the encryption key from keyVault
     */
    userAssignedIdentity?: pulumi.Input<string | undefined>;
}

export interface ImageArgs {
    /**
     * Image reference URL if type is docker. Environment name if type is azureml
     */
    reference?: pulumi.Input<string | undefined>;
    /**
     * Type of the image. Possible values are: docker - For docker images. azureml - For AzureML Environment images (custom and curated)
     */
    type?: pulumi.Input<string | enums.ImageType | undefined>;
    /**
     * Version of image being used. If latest then skip this field
     */
    version?: pulumi.Input<string | undefined>;
}
/**
 * imageArgsProvideDefaults sets the appropriate defaults for ImageArgs
 */
export function imageArgsProvideDefaults(val: ImageArgs): ImageArgs {
    return {
        ...val,
        type: (val.type) ?? "docker",
    };
}

/**
 * Image Classification. Multi-class image classification is used when an image is classified with only a single label
 * from a set of classes - e.g. each image is classified as either an image of a 'cat' or a 'dog' or a 'duck'.
 */
export interface ImageClassificationArgs {
    /**
     * [Required] Limit settings for the AutoML job.
     */
    limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Settings used for training the model.
     */
    modelSettings?: pulumi.Input<ImageModelSettingsClassificationArgs | undefined>;
    /**
     * Primary metrics for classification tasks.
     */
    primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics | undefined>;
    /**
     * Search space for sampling different combinations of models and their hyperparameters.
     */
    searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsClassificationArgs>[] | undefined>;
    /**
     * Model sweeping and hyperparameter sweeping related settings.
     */
    sweepSettings?: pulumi.Input<ImageSweepSettingsArgs | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'ImageClassification'.
     */
    taskType: pulumi.Input<"ImageClassification">;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of training dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    validationDataSize?: pulumi.Input<number | undefined>;
}
/**
 * imageClassificationArgsProvideDefaults sets the appropriate defaults for ImageClassificationArgs
 */
export function imageClassificationArgsProvideDefaults(val: ImageClassificationArgs): ImageClassificationArgs {
    return {
        ...val,
        limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
        logVerbosity: (val.logVerbosity) ?? "Info",
        modelSettings: pulumi.output(val.modelSettings).apply(v => v === undefined ? undefined : imageModelSettingsClassificationArgsProvideDefaults(v)),
        primaryMetric: (val.primaryMetric) ?? "Accuracy",
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

/**
 * Image Classification Multilabel. Multi-label image classification is used when an image could have one or more labels
 * from a set of labels - e.g. an image could be labeled with both 'cat' and 'dog'.
 */
export interface ImageClassificationMultilabelArgs {
    /**
     * [Required] Limit settings for the AutoML job.
     */
    limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Settings used for training the model.
     */
    modelSettings?: pulumi.Input<ImageModelSettingsClassificationArgs | undefined>;
    /**
     * Primary metrics for classification multilabel tasks.
     */
    primaryMetric?: pulumi.Input<string | enums.ClassificationMultilabelPrimaryMetrics | undefined>;
    /**
     * Search space for sampling different combinations of models and their hyperparameters.
     */
    searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsClassificationArgs>[] | undefined>;
    /**
     * Model sweeping and hyperparameter sweeping related settings.
     */
    sweepSettings?: pulumi.Input<ImageSweepSettingsArgs | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'ImageClassificationMultilabel'.
     */
    taskType: pulumi.Input<"ImageClassificationMultilabel">;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of training dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    validationDataSize?: pulumi.Input<number | undefined>;
}
/**
 * imageClassificationMultilabelArgsProvideDefaults sets the appropriate defaults for ImageClassificationMultilabelArgs
 */
export function imageClassificationMultilabelArgsProvideDefaults(val: ImageClassificationMultilabelArgs): ImageClassificationMultilabelArgs {
    return {
        ...val,
        limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
        logVerbosity: (val.logVerbosity) ?? "Info",
        modelSettings: pulumi.output(val.modelSettings).apply(v => v === undefined ? undefined : imageModelSettingsClassificationArgsProvideDefaults(v)),
        primaryMetric: (val.primaryMetric) ?? "IOU",
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

/**
 * Image Instance Segmentation. Instance segmentation is used to identify objects in an image at the pixel level,
 * drawing a polygon around each object in the image.
 */
export interface ImageInstanceSegmentationArgs {
    /**
     * [Required] Limit settings for the AutoML job.
     */
    limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Settings used for training the model.
     */
    modelSettings?: pulumi.Input<ImageModelSettingsObjectDetectionArgs | undefined>;
    /**
     * Primary metrics for InstanceSegmentation tasks.
     */
    primaryMetric?: pulumi.Input<string | enums.InstanceSegmentationPrimaryMetrics | undefined>;
    /**
     * Search space for sampling different combinations of models and their hyperparameters.
     */
    searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsObjectDetectionArgs>[] | undefined>;
    /**
     * Model sweeping and hyperparameter sweeping related settings.
     */
    sweepSettings?: pulumi.Input<ImageSweepSettingsArgs | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'ImageInstanceSegmentation'.
     */
    taskType: pulumi.Input<"ImageInstanceSegmentation">;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of training dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    validationDataSize?: pulumi.Input<number | undefined>;
}
/**
 * imageInstanceSegmentationArgsProvideDefaults sets the appropriate defaults for ImageInstanceSegmentationArgs
 */
export function imageInstanceSegmentationArgsProvideDefaults(val: ImageInstanceSegmentationArgs): ImageInstanceSegmentationArgs {
    return {
        ...val,
        limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
        logVerbosity: (val.logVerbosity) ?? "Info",
        modelSettings: pulumi.output(val.modelSettings).apply(v => v === undefined ? undefined : imageModelSettingsObjectDetectionArgsProvideDefaults(v)),
        primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

/**
 * Limit settings for the AutoML job.
 */
export interface ImageLimitSettingsArgs {
    /**
     * Maximum number of concurrent AutoML iterations.
     */
    maxConcurrentTrials?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of AutoML iterations.
     */
    maxTrials?: pulumi.Input<number | undefined>;
    /**
     * AutoML job timeout.
     */
    timeout?: pulumi.Input<string | undefined>;
}
/**
 * imageLimitSettingsArgsProvideDefaults sets the appropriate defaults for ImageLimitSettingsArgs
 */
export function imageLimitSettingsArgsProvideDefaults(val: ImageLimitSettingsArgs): ImageLimitSettingsArgs {
    return {
        ...val,
        maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
        maxTrials: (val.maxTrials) ?? 1,
        timeout: (val.timeout) ?? "P7D",
    };
}

/**
 * Distribution expressions to sweep over values of model settings.
 * <example>
 * Some examples are:
 * ```
 * ModelName = "choice('seresnext', 'resnest50')";
 * LearningRate = "uniform(0.001, 0.01)";
 * LayersToFreeze = "choice(0, 2)";
 * ```</example>
 * For more details on how to compose distribution expressions please check the documentation:
 * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-tune-hyperparameters
 * For more information on the available settings please visit the official documentation:
 * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.```
 */
export interface ImageModelDistributionSettingsClassificationArgs {
    /**
     * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
     */
    amsGradient?: pulumi.Input<string | undefined>;
    /**
     * Settings for using Augmentations.
     */
    augmentations?: pulumi.Input<string | undefined>;
    /**
     * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
     */
    beta1?: pulumi.Input<string | undefined>;
    /**
     * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
     */
    beta2?: pulumi.Input<string | undefined>;
    /**
     * Whether to use distributer training.
     */
    distributed?: pulumi.Input<string | undefined>;
    /**
     * Enable early stopping logic during training.
     */
    earlyStopping?: pulumi.Input<string | undefined>;
    /**
     * Minimum number of epochs or validation evaluations to wait before primary metric improvement
     * is tracked for early stopping. Must be a positive integer.
     */
    earlyStoppingDelay?: pulumi.Input<string | undefined>;
    /**
     * Minimum number of epochs or validation evaluations with no primary metric improvement before
     * the run is stopped. Must be a positive integer.
     */
    earlyStoppingPatience?: pulumi.Input<string | undefined>;
    /**
     * Enable normalization when exporting ONNX model.
     */
    enableOnnxNormalization?: pulumi.Input<string | undefined>;
    /**
     * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
     */
    evaluationFrequency?: pulumi.Input<string | undefined>;
    /**
     * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
     * updating the model weights while accumulating the gradients of those steps, and then using
     * the accumulated gradients to compute the weight updates. Must be a positive integer.
     */
    gradientAccumulationStep?: pulumi.Input<string | undefined>;
    /**
     * Number of layers to freeze for the model. Must be a positive integer.
     * For instance, passing 2 as value for 'seresnext' means
     * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
     * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    layersToFreeze?: pulumi.Input<string | undefined>;
    /**
     * Initial learning rate. Must be a float in the range [0, 1].
     */
    learningRate?: pulumi.Input<string | undefined>;
    /**
     * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
     */
    learningRateScheduler?: pulumi.Input<string | undefined>;
    /**
     * Name of the model to use for training.
     * For more information on the available models please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    modelName?: pulumi.Input<string | undefined>;
    /**
     * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
     */
    momentum?: pulumi.Input<string | undefined>;
    /**
     * Enable nesterov when optimizer is 'sgd'.
     */
    nesterov?: pulumi.Input<string | undefined>;
    /**
     * Number of training epochs. Must be a positive integer.
     */
    numberOfEpochs?: pulumi.Input<string | undefined>;
    /**
     * Number of data loader workers. Must be a non-negative integer.
     */
    numberOfWorkers?: pulumi.Input<string | undefined>;
    /**
     * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
     */
    optimizer?: pulumi.Input<string | undefined>;
    /**
     * Random seed to be used when using deterministic training.
     */
    randomSeed?: pulumi.Input<string | undefined>;
    /**
     * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
     */
    stepLRGamma?: pulumi.Input<string | undefined>;
    /**
     * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
     */
    stepLRStepSize?: pulumi.Input<string | undefined>;
    /**
     * Training batch size. Must be a positive integer.
     */
    trainingBatchSize?: pulumi.Input<string | undefined>;
    /**
     * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
     */
    trainingCropSize?: pulumi.Input<string | undefined>;
    /**
     * Validation batch size. Must be a positive integer.
     */
    validationBatchSize?: pulumi.Input<string | undefined>;
    /**
     * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
     */
    validationCropSize?: pulumi.Input<string | undefined>;
    /**
     * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
     */
    validationResizeSize?: pulumi.Input<string | undefined>;
    /**
     * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
     */
    warmupCosineLRCycles?: pulumi.Input<string | undefined>;
    /**
     * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
     */
    warmupCosineLRWarmupEpochs?: pulumi.Input<string | undefined>;
    /**
     * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
     */
    weightDecay?: pulumi.Input<string | undefined>;
    /**
     * Weighted loss. The accepted values are 0 for no weighted loss.
     * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
     */
    weightedLoss?: pulumi.Input<string | undefined>;
}

/**
 * Distribution expressions to sweep over values of model settings.
 * <example>
 * Some examples are:
 * ```
 * ModelName = "choice('seresnext', 'resnest50')";
 * LearningRate = "uniform(0.001, 0.01)";
 * LayersToFreeze = "choice(0, 2)";
 * ```</example>
 * For more details on how to compose distribution expressions please check the documentation:
 * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-tune-hyperparameters
 * For more information on the available settings please visit the official documentation:
 * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.```
 */
export interface ImageModelDistributionSettingsObjectDetectionArgs {
    /**
     * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
     */
    amsGradient?: pulumi.Input<string | undefined>;
    /**
     * Settings for using Augmentations.
     */
    augmentations?: pulumi.Input<string | undefined>;
    /**
     * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
     */
    beta1?: pulumi.Input<string | undefined>;
    /**
     * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
     */
    beta2?: pulumi.Input<string | undefined>;
    /**
     * Maximum number of detections per image, for all classes. Must be a positive integer.
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    boxDetectionsPerImage?: pulumi.Input<string | undefined>;
    /**
     * During inference, only return proposals with a classification score greater than
     * BoxScoreThreshold. Must be a float in the range[0, 1].
     */
    boxScoreThreshold?: pulumi.Input<string | undefined>;
    /**
     * Whether to use distributer training.
     */
    distributed?: pulumi.Input<string | undefined>;
    /**
     * Enable early stopping logic during training.
     */
    earlyStopping?: pulumi.Input<string | undefined>;
    /**
     * Minimum number of epochs or validation evaluations to wait before primary metric improvement
     * is tracked for early stopping. Must be a positive integer.
     */
    earlyStoppingDelay?: pulumi.Input<string | undefined>;
    /**
     * Minimum number of epochs or validation evaluations with no primary metric improvement before
     * the run is stopped. Must be a positive integer.
     */
    earlyStoppingPatience?: pulumi.Input<string | undefined>;
    /**
     * Enable normalization when exporting ONNX model.
     */
    enableOnnxNormalization?: pulumi.Input<string | undefined>;
    /**
     * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
     */
    evaluationFrequency?: pulumi.Input<string | undefined>;
    /**
     * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
     * updating the model weights while accumulating the gradients of those steps, and then using
     * the accumulated gradients to compute the weight updates. Must be a positive integer.
     */
    gradientAccumulationStep?: pulumi.Input<string | undefined>;
    /**
     * Image size for train and validation. Must be a positive integer.
     * Note: The training run may get into CUDA OOM if the size is too big.
     * Note: This settings is only supported for the 'yolov5' algorithm.
     */
    imageSize?: pulumi.Input<string | undefined>;
    /**
     * Number of layers to freeze for the model. Must be a positive integer.
     * For instance, passing 2 as value for 'seresnext' means
     * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
     * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    layersToFreeze?: pulumi.Input<string | undefined>;
    /**
     * Initial learning rate. Must be a float in the range [0, 1].
     */
    learningRate?: pulumi.Input<string | undefined>;
    /**
     * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
     */
    learningRateScheduler?: pulumi.Input<string | undefined>;
    /**
     * Maximum size of the image to be rescaled before feeding it to the backbone.
     * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    maxSize?: pulumi.Input<string | undefined>;
    /**
     * Minimum size of the image to be rescaled before feeding it to the backbone.
     * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    minSize?: pulumi.Input<string | undefined>;
    /**
     * Name of the model to use for training.
     * For more information on the available models please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    modelName?: pulumi.Input<string | undefined>;
    /**
     * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.
     * Note: training run may get into CUDA OOM if the model size is too big.
     * Note: This settings is only supported for the 'yolov5' algorithm.
     */
    modelSize?: pulumi.Input<string | undefined>;
    /**
     * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
     */
    momentum?: pulumi.Input<string | undefined>;
    /**
     * Enable multi-scale image by varying image size by +/- 50%.
     * Note: training run may get into CUDA OOM if no sufficient GPU memory.
     * Note: This settings is only supported for the 'yolov5' algorithm.
     */
    multiScale?: pulumi.Input<string | undefined>;
    /**
     * Enable nesterov when optimizer is 'sgd'.
     */
    nesterov?: pulumi.Input<string | undefined>;
    /**
     * IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1].
     */
    nmsIouThreshold?: pulumi.Input<string | undefined>;
    /**
     * Number of training epochs. Must be a positive integer.
     */
    numberOfEpochs?: pulumi.Input<string | undefined>;
    /**
     * Number of data loader workers. Must be a non-negative integer.
     */
    numberOfWorkers?: pulumi.Input<string | undefined>;
    /**
     * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
     */
    optimizer?: pulumi.Input<string | undefined>;
    /**
     * Random seed to be used when using deterministic training.
     */
    randomSeed?: pulumi.Input<string | undefined>;
    /**
     * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
     */
    stepLRGamma?: pulumi.Input<string | undefined>;
    /**
     * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
     */
    stepLRStepSize?: pulumi.Input<string | undefined>;
    /**
     * The grid size to use for tiling each image. Note: TileGridSize must not be
     * None to enable small object detection logic. A string containing two integers in mxn format.
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    tileGridSize?: pulumi.Input<string | undefined>;
    /**
     * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    tileOverlapRatio?: pulumi.Input<string | undefined>;
    /**
     * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
     * Used in validation/ inference. Must be float in the range [0, 1].
     * Note: This settings is not supported for the 'yolov5' algorithm.
     * NMS: Non-maximum suppression
     */
    tilePredictionsNmsThreshold?: pulumi.Input<string | undefined>;
    /**
     * Training batch size. Must be a positive integer.
     */
    trainingBatchSize?: pulumi.Input<string | undefined>;
    /**
     * Validation batch size. Must be a positive integer.
     */
    validationBatchSize?: pulumi.Input<string | undefined>;
    /**
     * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
     */
    validationIouThreshold?: pulumi.Input<string | undefined>;
    /**
     * Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'.
     */
    validationMetricType?: pulumi.Input<string | undefined>;
    /**
     * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
     */
    warmupCosineLRCycles?: pulumi.Input<string | undefined>;
    /**
     * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
     */
    warmupCosineLRWarmupEpochs?: pulumi.Input<string | undefined>;
    /**
     * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
     */
    weightDecay?: pulumi.Input<string | undefined>;
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
    advancedSettings?: pulumi.Input<string | undefined>;
    /**
     * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
     */
    amsGradient?: pulumi.Input<boolean | undefined>;
    /**
     * Settings for using Augmentations.
     */
    augmentations?: pulumi.Input<string | undefined>;
    /**
     * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
     */
    beta1?: pulumi.Input<number | undefined>;
    /**
     * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
     */
    beta2?: pulumi.Input<number | undefined>;
    /**
     * Frequency to store model checkpoints. Must be a positive integer.
     */
    checkpointFrequency?: pulumi.Input<number | undefined>;
    /**
     * The pretrained checkpoint model for incremental training.
     */
    checkpointModel?: pulumi.Input<MLFlowModelJobInputArgs | undefined>;
    /**
     * The id of a previous run that has a pretrained checkpoint for incremental training.
     */
    checkpointRunId?: pulumi.Input<string | undefined>;
    /**
     * Whether to use distributed training.
     */
    distributed?: pulumi.Input<boolean | undefined>;
    /**
     * Enable early stopping logic during training.
     */
    earlyStopping?: pulumi.Input<boolean | undefined>;
    /**
     * Minimum number of epochs or validation evaluations to wait before primary metric improvement
     * is tracked for early stopping. Must be a positive integer.
     */
    earlyStoppingDelay?: pulumi.Input<number | undefined>;
    /**
     * Minimum number of epochs or validation evaluations with no primary metric improvement before
     * the run is stopped. Must be a positive integer.
     */
    earlyStoppingPatience?: pulumi.Input<number | undefined>;
    /**
     * Enable normalization when exporting ONNX model.
     */
    enableOnnxNormalization?: pulumi.Input<boolean | undefined>;
    /**
     * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
     */
    evaluationFrequency?: pulumi.Input<number | undefined>;
    /**
     * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
     * updating the model weights while accumulating the gradients of those steps, and then using
     * the accumulated gradients to compute the weight updates. Must be a positive integer.
     */
    gradientAccumulationStep?: pulumi.Input<number | undefined>;
    /**
     * Number of layers to freeze for the model. Must be a positive integer.
     * For instance, passing 2 as value for 'seresnext' means
     * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
     * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    layersToFreeze?: pulumi.Input<number | undefined>;
    /**
     * Initial learning rate. Must be a float in the range [0, 1].
     */
    learningRate?: pulumi.Input<number | undefined>;
    /**
     * Learning rate scheduler enum.
     */
    learningRateScheduler?: pulumi.Input<string | enums.LearningRateScheduler | undefined>;
    /**
     * Name of the model to use for training.
     * For more information on the available models please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    modelName?: pulumi.Input<string | undefined>;
    /**
     * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
     */
    momentum?: pulumi.Input<number | undefined>;
    /**
     * Enable nesterov when optimizer is 'sgd'.
     */
    nesterov?: pulumi.Input<boolean | undefined>;
    /**
     * Number of training epochs. Must be a positive integer.
     */
    numberOfEpochs?: pulumi.Input<number | undefined>;
    /**
     * Number of data loader workers. Must be a non-negative integer.
     */
    numberOfWorkers?: pulumi.Input<number | undefined>;
    /**
     * Stochastic optimizer for image models.
     */
    optimizer?: pulumi.Input<string | enums.StochasticOptimizer | undefined>;
    /**
     * Random seed to be used when using deterministic training.
     */
    randomSeed?: pulumi.Input<number | undefined>;
    /**
     * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
     */
    stepLRGamma?: pulumi.Input<number | undefined>;
    /**
     * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
     */
    stepLRStepSize?: pulumi.Input<number | undefined>;
    /**
     * Training batch size. Must be a positive integer.
     */
    trainingBatchSize?: pulumi.Input<number | undefined>;
    /**
     * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
     */
    trainingCropSize?: pulumi.Input<number | undefined>;
    /**
     * Validation batch size. Must be a positive integer.
     */
    validationBatchSize?: pulumi.Input<number | undefined>;
    /**
     * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
     */
    validationCropSize?: pulumi.Input<number | undefined>;
    /**
     * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
     */
    validationResizeSize?: pulumi.Input<number | undefined>;
    /**
     * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
     */
    warmupCosineLRCycles?: pulumi.Input<number | undefined>;
    /**
     * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
     */
    warmupCosineLRWarmupEpochs?: pulumi.Input<number | undefined>;
    /**
     * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
     */
    weightDecay?: pulumi.Input<number | undefined>;
    /**
     * Weighted loss. The accepted values are 0 for no weighted loss.
     * 1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
     */
    weightedLoss?: pulumi.Input<number | undefined>;
}
/**
 * imageModelSettingsClassificationArgsProvideDefaults sets the appropriate defaults for ImageModelSettingsClassificationArgs
 */
export function imageModelSettingsClassificationArgsProvideDefaults(val: ImageModelSettingsClassificationArgs): ImageModelSettingsClassificationArgs {
    return {
        ...val,
        checkpointModel: pulumi.output(val.checkpointModel).apply(v => v === undefined ? undefined : mlflowModelJobInputArgsProvideDefaults(v)),
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
    advancedSettings?: pulumi.Input<string | undefined>;
    /**
     * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
     */
    amsGradient?: pulumi.Input<boolean | undefined>;
    /**
     * Settings for using Augmentations.
     */
    augmentations?: pulumi.Input<string | undefined>;
    /**
     * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
     */
    beta1?: pulumi.Input<number | undefined>;
    /**
     * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
     */
    beta2?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of detections per image, for all classes. Must be a positive integer.
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    boxDetectionsPerImage?: pulumi.Input<number | undefined>;
    /**
     * During inference, only return proposals with a classification score greater than
     * BoxScoreThreshold. Must be a float in the range[0, 1].
     */
    boxScoreThreshold?: pulumi.Input<number | undefined>;
    /**
     * Frequency to store model checkpoints. Must be a positive integer.
     */
    checkpointFrequency?: pulumi.Input<number | undefined>;
    /**
     * The pretrained checkpoint model for incremental training.
     */
    checkpointModel?: pulumi.Input<MLFlowModelJobInputArgs | undefined>;
    /**
     * The id of a previous run that has a pretrained checkpoint for incremental training.
     */
    checkpointRunId?: pulumi.Input<string | undefined>;
    /**
     * Whether to use distributed training.
     */
    distributed?: pulumi.Input<boolean | undefined>;
    /**
     * Enable early stopping logic during training.
     */
    earlyStopping?: pulumi.Input<boolean | undefined>;
    /**
     * Minimum number of epochs or validation evaluations to wait before primary metric improvement
     * is tracked for early stopping. Must be a positive integer.
     */
    earlyStoppingDelay?: pulumi.Input<number | undefined>;
    /**
     * Minimum number of epochs or validation evaluations with no primary metric improvement before
     * the run is stopped. Must be a positive integer.
     */
    earlyStoppingPatience?: pulumi.Input<number | undefined>;
    /**
     * Enable normalization when exporting ONNX model.
     */
    enableOnnxNormalization?: pulumi.Input<boolean | undefined>;
    /**
     * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
     */
    evaluationFrequency?: pulumi.Input<number | undefined>;
    /**
     * Gradient accumulation means running a configured number of "GradAccumulationStep" steps without
     * updating the model weights while accumulating the gradients of those steps, and then using
     * the accumulated gradients to compute the weight updates. Must be a positive integer.
     */
    gradientAccumulationStep?: pulumi.Input<number | undefined>;
    /**
     * Image size for train and validation. Must be a positive integer.
     * Note: The training run may get into CUDA OOM if the size is too big.
     * Note: This settings is only supported for the 'yolov5' algorithm.
     */
    imageSize?: pulumi.Input<number | undefined>;
    /**
     * Number of layers to freeze for the model. Must be a positive integer.
     * For instance, passing 2 as value for 'seresnext' means
     * freezing layer0 and layer1. For a full list of models supported and details on layer freeze, please
     * see: https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    layersToFreeze?: pulumi.Input<number | undefined>;
    /**
     * Initial learning rate. Must be a float in the range [0, 1].
     */
    learningRate?: pulumi.Input<number | undefined>;
    /**
     * Learning rate scheduler enum.
     */
    learningRateScheduler?: pulumi.Input<string | enums.LearningRateScheduler | undefined>;
    /**
     * Maximum size of the image to be rescaled before feeding it to the backbone.
     * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    maxSize?: pulumi.Input<number | undefined>;
    /**
     * Minimum size of the image to be rescaled before feeding it to the backbone.
     * Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    minSize?: pulumi.Input<number | undefined>;
    /**
     * Name of the model to use for training.
     * For more information on the available models please visit the official documentation:
     * https://docs.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-image-models.
     */
    modelName?: pulumi.Input<string | undefined>;
    /**
     * Image model size.
     */
    modelSize?: pulumi.Input<string | enums.ModelSize | undefined>;
    /**
     * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
     */
    momentum?: pulumi.Input<number | undefined>;
    /**
     * Enable multi-scale image by varying image size by +/- 50%.
     * Note: training run may get into CUDA OOM if no sufficient GPU memory.
     * Note: This settings is only supported for the 'yolov5' algorithm.
     */
    multiScale?: pulumi.Input<boolean | undefined>;
    /**
     * Enable nesterov when optimizer is 'sgd'.
     */
    nesterov?: pulumi.Input<boolean | undefined>;
    /**
     * IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1].
     */
    nmsIouThreshold?: pulumi.Input<number | undefined>;
    /**
     * Number of training epochs. Must be a positive integer.
     */
    numberOfEpochs?: pulumi.Input<number | undefined>;
    /**
     * Number of data loader workers. Must be a non-negative integer.
     */
    numberOfWorkers?: pulumi.Input<number | undefined>;
    /**
     * Stochastic optimizer for image models.
     */
    optimizer?: pulumi.Input<string | enums.StochasticOptimizer | undefined>;
    /**
     * Random seed to be used when using deterministic training.
     */
    randomSeed?: pulumi.Input<number | undefined>;
    /**
     * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
     */
    stepLRGamma?: pulumi.Input<number | undefined>;
    /**
     * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
     */
    stepLRStepSize?: pulumi.Input<number | undefined>;
    /**
     * The grid size to use for tiling each image. Note: TileGridSize must not be
     * None to enable small object detection logic. A string containing two integers in mxn format.
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    tileGridSize?: pulumi.Input<string | undefined>;
    /**
     * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    tileOverlapRatio?: pulumi.Input<number | undefined>;
    /**
     * The IOU threshold to use to perform NMS while merging predictions from tiles and image.
     * Used in validation/ inference. Must be float in the range [0, 1].
     * Note: This settings is not supported for the 'yolov5' algorithm.
     */
    tilePredictionsNmsThreshold?: pulumi.Input<number | undefined>;
    /**
     * Training batch size. Must be a positive integer.
     */
    trainingBatchSize?: pulumi.Input<number | undefined>;
    /**
     * Validation batch size. Must be a positive integer.
     */
    validationBatchSize?: pulumi.Input<number | undefined>;
    /**
     * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
     */
    validationIouThreshold?: pulumi.Input<number | undefined>;
    /**
     * Metric computation method to use for validation metrics in image tasks.
     */
    validationMetricType?: pulumi.Input<string | enums.ValidationMetricType | undefined>;
    /**
     * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
     */
    warmupCosineLRCycles?: pulumi.Input<number | undefined>;
    /**
     * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
     */
    warmupCosineLRWarmupEpochs?: pulumi.Input<number | undefined>;
    /**
     * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
     */
    weightDecay?: pulumi.Input<number | undefined>;
}
/**
 * imageModelSettingsObjectDetectionArgsProvideDefaults sets the appropriate defaults for ImageModelSettingsObjectDetectionArgs
 */
export function imageModelSettingsObjectDetectionArgsProvideDefaults(val: ImageModelSettingsObjectDetectionArgs): ImageModelSettingsObjectDetectionArgs {
    return {
        ...val,
        checkpointModel: pulumi.output(val.checkpointModel).apply(v => v === undefined ? undefined : mlflowModelJobInputArgsProvideDefaults(v)),
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
     * [Required] Limit settings for the AutoML job.
     */
    limitSettings: pulumi.Input<ImageLimitSettingsArgs>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Settings used for training the model.
     */
    modelSettings?: pulumi.Input<ImageModelSettingsObjectDetectionArgs | undefined>;
    /**
     * Primary metrics for Image ObjectDetection task.
     */
    primaryMetric?: pulumi.Input<string | enums.ObjectDetectionPrimaryMetrics | undefined>;
    /**
     * Search space for sampling different combinations of models and their hyperparameters.
     */
    searchSpace?: pulumi.Input<pulumi.Input<ImageModelDistributionSettingsObjectDetectionArgs>[] | undefined>;
    /**
     * Model sweeping and hyperparameter sweeping related settings.
     */
    sweepSettings?: pulumi.Input<ImageSweepSettingsArgs | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'ImageObjectDetection'.
     */
    taskType: pulumi.Input<"ImageObjectDetection">;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of training dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    validationDataSize?: pulumi.Input<number | undefined>;
}
/**
 * imageObjectDetectionArgsProvideDefaults sets the appropriate defaults for ImageObjectDetectionArgs
 */
export function imageObjectDetectionArgsProvideDefaults(val: ImageObjectDetectionArgs): ImageObjectDetectionArgs {
    return {
        ...val,
        limitSettings: pulumi.output(val.limitSettings).apply(imageLimitSettingsArgsProvideDefaults),
        logVerbosity: (val.logVerbosity) ?? "Info",
        modelSettings: pulumi.output(val.modelSettings).apply(v => v === undefined ? undefined : imageModelSettingsObjectDetectionArgsProvideDefaults(v)),
        primaryMetric: (val.primaryMetric) ?? "MeanAveragePrecision",
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

/**
 * Model sweeping and hyperparameter sweeping related settings.
 */
export interface ImageSweepSettingsArgs {
    /**
     * Type of early termination policy.
     */
    earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs | undefined>;
    /**
     * [Required] Type of the hyperparameter sampling algorithms.
     */
    samplingAlgorithm: pulumi.Input<string | enums.SamplingAlgorithmType>;
}

/**
 * DTO object representing index column
 */
export interface IndexColumnArgs {
    /**
     * Specifies the column name
     */
    columnName?: pulumi.Input<string | undefined>;
    /**
     * Specifies the data type
     */
    dataType?: pulumi.Input<string | enums.FeatureDataType | undefined>;
}
/**
 * indexColumnArgsProvideDefaults sets the appropriate defaults for IndexColumnArgs
 */
export function indexColumnArgsProvideDefaults(val: IndexColumnArgs): IndexColumnArgs {
    return {
        ...val,
        dataType: (val.dataType) ?? "String",
    };
}

export interface InferenceContainerPropertiesArgs {
    /**
     * The route to check the liveness of the inference server container.
     */
    livenessRoute?: pulumi.Input<RouteArgs | undefined>;
    /**
     * The route to check the readiness of the inference server container.
     */
    readinessRoute?: pulumi.Input<RouteArgs | undefined>;
    /**
     * The port to send the scoring requests to, within the inference server container.
     */
    scoringRoute?: pulumi.Input<RouteArgs | undefined>;
    /**
     * The route to check the startup of the application in the container.
     */
    startupRoute?: pulumi.Input<RouteArgs | undefined>;
}

/**
 * InferenceEndpoint configuration
 */
export interface InferenceEndpointArgs {
    /**
     * [Required] Authentication mode for the endpoint.
     */
    authMode: pulumi.Input<string | enums.AuthMode>;
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * [Required] Group within the same pool with which this endpoint needs to be associated with.
     */
    groupName: pulumi.Input<string>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<pulumi.Input<StringStringKeyValuePairArgs>[] | undefined>;
    /**
     * RequestConfiguration for endpoint.
     */
    requestConfiguration?: pulumi.Input<RequestConfigurationArgs | undefined>;
}
/**
 * inferenceEndpointArgsProvideDefaults sets the appropriate defaults for InferenceEndpointArgs
 */
export function inferenceEndpointArgsProvideDefaults(val: InferenceEndpointArgs): InferenceEndpointArgs {
    return {
        ...val,
        requestConfiguration: pulumi.output(val.requestConfiguration).apply(v => v === undefined ? undefined : requestConfigurationArgsProvideDefaults(v)),
    };
}

/**
 * Inference group configuration
 */
export interface InferenceGroupArgs {
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets environment configuration for the inference group. Used if PoolType=ScaleUnit.
     */
    environmentConfiguration?: pulumi.Input<GroupEnvironmentConfigurationArgs | undefined>;
    /**
     * Gets or sets model configuration for the inference group. Used if PoolType=ScaleUnit.
     */
    modelConfiguration?: pulumi.Input<GroupModelConfigurationArgs | undefined>;
    /**
     * Gets or sets compute instance type.
     */
    nodeSkuType?: pulumi.Input<string | undefined>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<pulumi.Input<StringStringKeyValuePairArgs>[] | undefined>;
    /**
     * Gets or sets Scale Unit size.
     */
    scaleUnitSize?: pulumi.Input<number | undefined>;
}
/**
 * inferenceGroupArgsProvideDefaults sets the appropriate defaults for InferenceGroupArgs
 */
export function inferenceGroupArgsProvideDefaults(val: InferenceGroupArgs): InferenceGroupArgs {
    return {
        ...val,
        environmentConfiguration: pulumi.output(val.environmentConfiguration).apply(v => v === undefined ? undefined : groupEnvironmentConfigurationArgsProvideDefaults(v)),
    };
}

/**
 * Inference pool configuration
 */
export interface InferencePoolArgs {
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<pulumi.Input<StringStringKeyValuePairArgs>[] | undefined>;
    /**
     * Gets or sets ScaleUnitConfiguration for the inference pool. Used if PoolType=ScaleUnit.
     */
    scaleUnitConfiguration?: pulumi.Input<ScaleUnitConfigurationArgs | undefined>;
}
/**
 * inferencePoolArgsProvideDefaults sets the appropriate defaults for InferencePoolArgs
 */
export function inferencePoolArgsProvideDefaults(val: InferencePoolArgs): InferencePoolArgs {
    return {
        ...val,
        scaleUnitConfiguration: pulumi.output(val.scaleUnitConfiguration).apply(v => v === undefined ? undefined : scaleUnitConfigurationArgsProvideDefaults(v)),
    };
}

/**
 * Instance type schema.
 */
export interface InstanceTypeSchemaArgs {
    /**
     * Node Selector
     */
    nodeSelector?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Resource requests/limits for this instance type
     */
    resources?: pulumi.Input<InstanceTypeSchemaResourcesArgs | undefined>;
}

/**
 * Resource requests/limits for this instance type
 */
export interface InstanceTypeSchemaResourcesArgs {
    /**
     * Resource limits for this instance type
     */
    limits?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Resource requests for this instance type
     */
    requests?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

export interface JobResourceConfigurationArgs {
    /**
     * Extra arguments to pass to the Docker run command. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types.
     */
    dockerArgs?: pulumi.Input<string | undefined>;
    /**
     * Extra arguments to pass to the Docker run command, as a collection. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types.
     */
    dockerArgsList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Optional number of instances or nodes used by the compute target.
     */
    instanceCount?: pulumi.Input<number | undefined>;
    /**
     * Optional type of VM used as supported by the compute target.
     */
    instanceType?: pulumi.Input<string | undefined>;
    /**
     * Additional properties bag.
     */
    properties?: pulumi.Input<{[key: string]: any} | undefined>;
    /**
     * Size of the docker container's shared memory block. This should be in the format of (number)(unit) where number as to be greater than 0 and the unit can be one of b(bytes), k(kilobytes), m(megabytes), or g(gigabytes).
     */
    shmSize?: pulumi.Input<string | undefined>;
}
/**
 * jobResourceConfigurationArgsProvideDefaults sets the appropriate defaults for JobResourceConfigurationArgs
 */
export function jobResourceConfigurationArgsProvideDefaults(val: JobResourceConfigurationArgs): JobResourceConfigurationArgs {
    return {
        ...val,
        instanceCount: (val.instanceCount) ?? 1,
        shmSize: (val.shmSize) ?? "2g",
    };
}

export interface JobScheduleActionArgs {
    /**
     * Expected value is 'CreateJob'.
     */
    actionType: pulumi.Input<"CreateJob">;
    /**
     * [Required] Defines Schedule action definition details.
     */
    jobDefinition: pulumi.Input<AutoMLJobArgs | CommandJobArgs | PipelineJobArgs | SparkJobArgs | SweepJobArgs>;
}

/**
 * Job endpoint definition
 */
export interface JobServiceArgs {
    /**
     * Url for endpoint.
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * Endpoint type.
     */
    jobServiceType?: pulumi.Input<string | undefined>;
    /**
     * Nodes that user would like to start the service on.
     * If Nodes is not set or set to null, the service will only be started on leader node.
     */
    nodes?: pulumi.Input<AllNodesArgs | undefined>;
    /**
     * Port for endpoint.
     */
    port?: pulumi.Input<number | undefined>;
    /**
     * Additional properties to set on the endpoint.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Jupyter kernel configuration.
 */
export interface JupyterKernelConfigArgs {
    /**
     * Argument to the the runtime
     */
    argv?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Display name of the kernel
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Language of the kernel [Example value: python]
     */
    language?: pulumi.Input<string | undefined>;
}

/**
 * Customer Key vault properties.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * Currently, we support only SystemAssigned MSI.
     * We need this when we support UserAssignedIdentities
     */
    identityClientId?: pulumi.Input<string | undefined>;
    /**
     * KeyVault key identifier to encrypt the data
     */
    keyIdentifier: pulumi.Input<string>;
    /**
     * KeyVault Arm Id that contains the data encryption key
     */
    keyVaultArmId: pulumi.Input<string>;
}

/**
 * A Machine Learning compute based on Kubernetes Compute.
 */
export interface KubernetesArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'Kubernetes'.
     */
    computeType: pulumi.Input<"Kubernetes">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    /**
     * Properties of Kubernetes
     */
    properties?: pulumi.Input<KubernetesPropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}
/**
 * kubernetesArgsProvideDefaults sets the appropriate defaults for KubernetesArgs
 */
export function kubernetesArgsProvideDefaults(val: KubernetesArgs): KubernetesArgs {
    return {
        ...val,
        properties: pulumi.output(val.properties).apply(v => v === undefined ? undefined : kubernetesPropertiesArgsProvideDefaults(v)),
    };
}

/**
 * Properties specific to a KubernetesOnlineDeployment.
 */
export interface KubernetesOnlineDeploymentArgs {
    /**
     * If true, enables Application Insights logging.
     */
    appInsightsEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Code configuration for the endpoint deployment.
     */
    codeConfiguration?: pulumi.Input<CodeConfigurationArgs | undefined>;
    /**
     * The resource requirements for the container (cpu and memory).
     */
    containerResourceRequirements?: pulumi.Input<ContainerResourceRequirementsArgs | undefined>;
    /**
     * The mdc configuration, we disable mdc when it's null.
     */
    dataCollector?: pulumi.Input<DataCollectorArgs | undefined>;
    /**
     * Description of the endpoint deployment.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine whether PublicNetworkAccess is Enabled or Disabled for egress of a deployment.
     */
    egressPublicNetworkAccess?: pulumi.Input<string | enums.EgressPublicNetworkAccessType | undefined>;
    /**
     * Enum to determine endpoint compute type.
     * Expected value is 'Kubernetes'.
     */
    endpointComputeType: pulumi.Input<"Kubernetes">;
    /**
     * ARM resource ID or AssetId of the environment specification for the endpoint deployment.
     */
    environmentId?: pulumi.Input<string | undefined>;
    /**
     * Environment variables configuration for the deployment.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Compute instance type. Default: Standard_F4s_v2.
     */
    instanceType?: pulumi.Input<string | undefined>;
    /**
     * Liveness probe monitors the health of the container regularly.
     */
    livenessProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
    /**
     * The URI path to the model.
     */
    model?: pulumi.Input<string | undefined>;
    /**
     * The path to mount the model in custom container.
     */
    modelMountPath?: pulumi.Input<string | undefined>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
     */
    readinessProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
    /**
     * Request settings for the deployment.
     */
    requestSettings?: pulumi.Input<OnlineRequestSettingsArgs | undefined>;
    /**
     * Scale settings for the deployment.
     * If it is null or not provided,
     * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
     * and to DefaultScaleSettings for ManagedOnlineDeployment.
     */
    scaleSettings?: pulumi.Input<DefaultScaleSettingsArgs | TargetUtilizationScaleSettingsArgs | undefined>;
    /**
     * Startup probe verify whether an application within a container has started successfully.
     */
    startupProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
}
/**
 * kubernetesOnlineDeploymentArgsProvideDefaults sets the appropriate defaults for KubernetesOnlineDeploymentArgs
 */
export function kubernetesOnlineDeploymentArgsProvideDefaults(val: KubernetesOnlineDeploymentArgs): KubernetesOnlineDeploymentArgs {
    return {
        ...val,
        appInsightsEnabled: (val.appInsightsEnabled) ?? false,
        dataCollector: pulumi.output(val.dataCollector).apply(v => v === undefined ? undefined : dataCollectorArgsProvideDefaults(v)),
        egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
        instanceType: (val.instanceType) ?? "Standard_F4s_v2",
        livenessProbe: pulumi.output(val.livenessProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
        readinessProbe: pulumi.output(val.readinessProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
        requestSettings: pulumi.output(val.requestSettings).apply(v => v === undefined ? undefined : onlineRequestSettingsArgsProvideDefaults(v)),
        startupProbe: pulumi.output(val.startupProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
    };
}

/**
 * Kubernetes properties
 */
export interface KubernetesPropertiesArgs {
    /**
     * Default instance type
     */
    defaultInstanceType?: pulumi.Input<string | undefined>;
    /**
     * Extension instance release train.
     */
    extensionInstanceReleaseTrain?: pulumi.Input<string | undefined>;
    /**
     * Extension principal-id.
     */
    extensionPrincipalId?: pulumi.Input<string | undefined>;
    /**
     * Instance Type Schema
     */
    instanceTypes?: pulumi.Input<{[key: string]: pulumi.Input<InstanceTypeSchemaArgs>} | undefined>;
    /**
     * Compute namespace
     */
    namespace?: pulumi.Input<string | undefined>;
    /**
     * Relay connection string.
     */
    relayConnectionString?: pulumi.Input<string | undefined>;
    /**
     * ServiceBus connection string.
     */
    serviceBusConnectionString?: pulumi.Input<string | undefined>;
    /**
     * VC name.
     */
    vcName?: pulumi.Input<string | undefined>;
}
/**
 * kubernetesPropertiesArgsProvideDefaults sets the appropriate defaults for KubernetesPropertiesArgs
 */
export function kubernetesPropertiesArgsProvideDefaults(val: KubernetesPropertiesArgs): KubernetesPropertiesArgs {
    return {
        ...val,
        namespace: (val.namespace) ?? "default",
    };
}

/**
 * Label category definition
 */
export interface LabelCategoryArgs {
    /**
     * Dictionary of label classes in this category.
     */
    classes?: pulumi.Input<{[key: string]: pulumi.Input<LabelClassArgs>} | undefined>;
    /**
     * Display name of the label category.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether it is allowed to select multiple classes in this category.
     */
    multiSelect?: pulumi.Input<string | enums.MultiSelect | undefined>;
}
/**
 * labelCategoryArgsProvideDefaults sets the appropriate defaults for LabelCategoryArgs
 */
export function labelCategoryArgsProvideDefaults(val: LabelCategoryArgs): LabelCategoryArgs {
    return {
        ...val,
        multiSelect: (val.multiSelect) ?? "Disabled",
    };
}

/**
 * Label class definition
 */
export interface LabelClassArgs {
    /**
     * Display name of the label class.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Dictionary of subclasses of the label class.
     */
    subclasses?: pulumi.Input<{[key: string]: pulumi.Input<LabelClassArgs>} | undefined>;
}

/**
 * Labeling data configuration definition
 */
export interface LabelingDataConfigurationArgs {
    /**
     * Resource Id of the data asset to perform labeling.
     */
    dataId?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether to enable incremental data refresh.
     */
    incrementalDataRefresh?: pulumi.Input<string | enums.IncrementalDataRefresh | undefined>;
}
/**
 * labelingDataConfigurationArgsProvideDefaults sets the appropriate defaults for LabelingDataConfigurationArgs
 */
export function labelingDataConfigurationArgsProvideDefaults(val: LabelingDataConfigurationArgs): LabelingDataConfigurationArgs {
    return {
        ...val,
        incrementalDataRefresh: (val.incrementalDataRefresh) ?? "Disabled",
    };
}

/**
 * Labeling job definition
 */
export interface LabelingJobArgs {
    /**
     * ARM resource ID of the component resource.
     */
    componentId?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of the compute resource.
     */
    computeId?: pulumi.Input<string | undefined>;
    /**
     * Configuration of data used in the job.
     */
    dataConfiguration?: pulumi.Input<LabelingDataConfigurationArgs | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Display name of job.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
     */
    experimentName?: pulumi.Input<string | undefined>;
    /**
     * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
     * Defaults to AmlToken if null.
     */
    identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * Labeling instructions of the job.
     */
    jobInstructions?: pulumi.Input<LabelingJobInstructionsArgs | undefined>;
    /**
     * Enum to determine the type of job.
     * Expected value is 'Labeling'.
     */
    jobType: pulumi.Input<"Labeling">;
    /**
     * Label categories of the job.
     */
    labelCategories?: pulumi.Input<{[key: string]: pulumi.Input<LabelCategoryArgs>} | undefined>;
    /**
     * Media type specific properties in the job.
     */
    labelingJobMediaProperties?: pulumi.Input<LabelingJobImagePropertiesArgs | LabelingJobTextPropertiesArgs | undefined>;
    /**
     * Configuration of MLAssist feature in the job.
     */
    mlAssistConfiguration?: pulumi.Input<MLAssistConfigurationDisabledArgs | MLAssistConfigurationEnabledArgs | undefined>;
    /**
     * Notification setting for the job
     */
    notificationSetting?: pulumi.Input<NotificationSettingArgs | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Configuration for secrets to be made available during runtime.
     */
    secretsConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<SecretConfigurationArgs>} | undefined>;
    /**
     * List of JobEndpoints.
     * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
     */
    services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * labelingJobArgsProvideDefaults sets the appropriate defaults for LabelingJobArgs
 */
export function labelingJobArgsProvideDefaults(val: LabelingJobArgs): LabelingJobArgs {
    return {
        ...val,
        dataConfiguration: pulumi.output(val.dataConfiguration).apply(v => v === undefined ? undefined : labelingDataConfigurationArgsProvideDefaults(v)),
        experimentName: (val.experimentName) ?? "Default",
        isArchived: (val.isArchived) ?? false,
    };
}

/**
 * Properties of a labeling job for image data
 */
export interface LabelingJobImagePropertiesArgs {
    /**
     * Annotation type of image labeling job.
     */
    annotationType?: pulumi.Input<string | enums.ImageAnnotationType | undefined>;
    /**
     * Media type of data asset.
     * Expected value is 'Image'.
     */
    mediaType: pulumi.Input<"Image">;
}
/**
 * labelingJobImagePropertiesArgsProvideDefaults sets the appropriate defaults for LabelingJobImagePropertiesArgs
 */
export function labelingJobImagePropertiesArgsProvideDefaults(val: LabelingJobImagePropertiesArgs): LabelingJobImagePropertiesArgs {
    return {
        ...val,
        annotationType: (val.annotationType) ?? "Classification",
    };
}

/**
 * Instructions for labeling job
 */
export interface LabelingJobInstructionsArgs {
    /**
     * The link to a page with detailed labeling instructions for labelers.
     */
    uri?: pulumi.Input<string | undefined>;
}

/**
 * Properties of a labeling job for text data
 */
export interface LabelingJobTextPropertiesArgs {
    /**
     * Annotation type of text labeling job.
     */
    annotationType?: pulumi.Input<string | enums.TextAnnotationType | undefined>;
    /**
     * Media type of data asset.
     * Expected value is 'Text'.
     */
    mediaType: pulumi.Input<"Text">;
}
/**
 * labelingJobTextPropertiesArgsProvideDefaults sets the appropriate defaults for LabelingJobTextPropertiesArgs
 */
export function labelingJobTextPropertiesArgsProvideDefaults(val: LabelingJobTextPropertiesArgs): LabelingJobTextPropertiesArgs {
    return {
        ...val,
        annotationType: (val.annotationType) ?? "Classification",
    };
}

export interface LakeHouseArtifactArgs {
    /**
     * [Required] OneLake artifact name
     */
    artifactName: pulumi.Input<string>;
    /**
     * Enum to determine OneLake artifact type.
     * Expected value is 'LakeHouse'.
     */
    artifactType: pulumi.Input<"LakeHouse">;
}

/**
 * LinkedService specific properties.
 */
export interface LinkedServicePropsArgs {
    /**
     * The creation time of the linked service.
     */
    createdTime?: pulumi.Input<string | undefined>;
    /**
     * Type of the link target.
     */
    linkType?: pulumi.Input<enums.LinkedServiceLinkType | undefined>;
    /**
     * ResourceId of the link target of the linked service.
     */
    linkedServiceResourceId: pulumi.Input<string>;
    /**
     * The last modified time of the linked service.
     */
    modifiedTime?: pulumi.Input<string | undefined>;
}

/**
 * LinkedWorkspace specific properties.
 */
export interface LinkedWorkspacePropsArgs {
    /**
     * ResourceId of the link target of the linked workspace.
     */
    linkedWorkspaceResourceId?: pulumi.Input<string | undefined>;
    /**
     * ResourceId of the user assigned identity for the linked workspace.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Literal input type.
 */
export interface LiteralJobInputArgs {
    /**
     * Description for the input.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Input Type.
     * Expected value is 'literal'.
     */
    jobInputType: pulumi.Input<"literal">;
    /**
     * [Required] Literal value for the input.
     */
    value: pulumi.Input<string>;
}

/**
 * Labeling MLAssist configuration definition when MLAssist is disabled
 */
export interface MLAssistConfigurationDisabledArgs {
    /**
     * Expected value is 'Disabled'.
     */
    mlAssist: pulumi.Input<"Disabled">;
}

/**
 * Labeling MLAssist configuration definition when MLAssist is enabled
 */
export interface MLAssistConfigurationEnabledArgs {
    /**
     * [Required] AML compute binding used in inferencing.
     */
    inferencingComputeBinding: pulumi.Input<string>;
    /**
     * Expected value is 'Enabled'.
     */
    mlAssist: pulumi.Input<"Enabled">;
    /**
     * [Required] AML compute binding used in training.
     */
    trainingComputeBinding: pulumi.Input<string>;
}

export interface MLFlowModelJobInputArgs {
    /**
     * Description for the input.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Input Type.
     * Expected value is 'mlflow_model'.
     */
    jobInputType: pulumi.Input<"mlflow_model">;
    /**
     * Enum to determine the input data delivery mode.
     */
    mode?: pulumi.Input<string | enums.InputDeliveryMode | undefined>;
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
     * Output Asset Name.
     */
    assetName?: pulumi.Input<string | undefined>;
    /**
     * Description for the output.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Output Type.
     * Expected value is 'mlflow_model'.
     */
    jobOutputType: pulumi.Input<"mlflow_model">;
    /**
     * Output data delivery mode enums.
     */
    mode?: pulumi.Input<string | enums.OutputDeliveryMode | undefined>;
    /**
     * Output Asset URI.
     */
    uri?: pulumi.Input<string | undefined>;
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
     * Expected value is 'mltable'.
     */
    dataType: pulumi.Input<"mltable">;
    /**
     * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
     */
    dataUri: pulumi.Input<string>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Uris referenced in the MLTable definition (required for lineage)
     */
    referencedUris?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Input Type.
     * Expected value is 'mltable'.
     */
    jobInputType: pulumi.Input<"mltable">;
    /**
     * Enum to determine the input data delivery mode.
     */
    mode?: pulumi.Input<string | enums.InputDeliveryMode | undefined>;
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
     * Output Asset Name.
     */
    assetName?: pulumi.Input<string | undefined>;
    /**
     * Description for the output.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Output Type.
     * Expected value is 'mltable'.
     */
    jobOutputType: pulumi.Input<"mltable">;
    /**
     * Output data delivery mode enums.
     */
    mode?: pulumi.Input<string | enums.OutputDeliveryMode | undefined>;
    /**
     * Output Asset URI.
     */
    uri?: pulumi.Input<string | undefined>;
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
 * Managed compute identity definition.
 */
export interface ManagedComputeIdentityArgs {
    /**
     * Monitor compute identity type enum.
     * Expected value is 'ManagedIdentity'.
     */
    computeIdentityType: pulumi.Input<"ManagedIdentity">;
    /**
     * The identity which will be leveraged by the monitoring jobs.
     */
    identity?: pulumi.Input<ManagedServiceIdentityArgs | undefined>;
}

/**
 * Managed identity configuration.
 */
export interface ManagedIdentityArgs {
    /**
     * Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine identity framework.
     * Expected value is 'Managed'.
     */
    identityType: pulumi.Input<"Managed">;
    /**
     * Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.
     */
    resourceId?: pulumi.Input<string | undefined>;
}

export interface ManagedIdentityAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'ManagedIdentity'.
     */
    authType: pulumi.Input<"ManagedIdentity">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<WorkspaceConnectionManagedIdentityArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Status of the Provisioning for the managed network of a machine learning workspace.
 */
export interface ManagedNetworkProvisionStatusArgs {
    sparkReady?: pulumi.Input<boolean | undefined>;
    /**
     * Status for the managed network of a machine learning workspace.
     */
    status?: pulumi.Input<string | enums.ManagedNetworkStatus | undefined>;
}

/**
 * Managed Network settings for a machine learning workspace.
 */
export interface ManagedNetworkSettingsArgs {
    /**
     * A flag to indicate if monitoring needs to be enabled for the managed network.
     */
    enableNetworkMonitor?: pulumi.Input<boolean | undefined>;
    /**
     * Firewall Sku used for FQDN Rules
     */
    firewallSku?: pulumi.Input<string | enums.FirewallSku | undefined>;
    /**
     * Isolation mode for the managed network of a machine learning workspace.
     */
    isolationMode?: pulumi.Input<string | enums.IsolationMode | undefined>;
    /**
     * The Kind of the managed network. Users can switch from V1 to V2 for granular access controls, but cannot switch back to V1 once V2 is enabled.
     */
    managedNetworkKind?: pulumi.Input<string | enums.ManagedNetworkKind | undefined>;
    /**
     * Dictionary of <OutboundRule>
     */
    outboundRules?: pulumi.Input<{[key: string]: pulumi.Input<FqdnOutboundRuleArgs | PrivateEndpointOutboundRuleArgs | ServiceTagOutboundRuleArgs>} | undefined>;
    /**
     * Status of the Provisioning for the managed network of a machine learning workspace.
     */
    status?: pulumi.Input<ManagedNetworkProvisionStatusArgs | undefined>;
}
/**
 * managedNetworkSettingsArgsProvideDefaults sets the appropriate defaults for ManagedNetworkSettingsArgs
 */
export function managedNetworkSettingsArgsProvideDefaults(val: ManagedNetworkSettingsArgs): ManagedNetworkSettingsArgs {
    return {
        ...val,
        enableNetworkMonitor: (val.enableNetworkMonitor) ?? false,
    };
}

/**
 * Properties specific to a ManagedOnlineDeployment.
 */
export interface ManagedOnlineDeploymentArgs {
    /**
     * If true, enables Application Insights logging.
     */
    appInsightsEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Code configuration for the endpoint deployment.
     */
    codeConfiguration?: pulumi.Input<CodeConfigurationArgs | undefined>;
    /**
     * The mdc configuration, we disable mdc when it's null.
     */
    dataCollector?: pulumi.Input<DataCollectorArgs | undefined>;
    /**
     * Description of the endpoint deployment.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine whether PublicNetworkAccess is Enabled or Disabled for egress of a deployment.
     */
    egressPublicNetworkAccess?: pulumi.Input<string | enums.EgressPublicNetworkAccessType | undefined>;
    /**
     * Enum to determine endpoint compute type.
     * Expected value is 'Managed'.
     */
    endpointComputeType: pulumi.Input<"Managed">;
    /**
     * ARM resource ID or AssetId of the environment specification for the endpoint deployment.
     */
    environmentId?: pulumi.Input<string | undefined>;
    /**
     * Environment variables configuration for the deployment.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Compute instance type. Default: Standard_F4s_v2.
     */
    instanceType?: pulumi.Input<string | undefined>;
    /**
     * Liveness probe monitors the health of the container regularly.
     */
    livenessProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
    /**
     * The URI path to the model.
     */
    model?: pulumi.Input<string | undefined>;
    /**
     * The path to mount the model in custom container.
     */
    modelMountPath?: pulumi.Input<string | undefined>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
     */
    readinessProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
    /**
     * Request settings for the deployment.
     */
    requestSettings?: pulumi.Input<OnlineRequestSettingsArgs | undefined>;
    /**
     * Scale settings for the deployment.
     * If it is null or not provided,
     * it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeployment
     * and to DefaultScaleSettings for ManagedOnlineDeployment.
     */
    scaleSettings?: pulumi.Input<DefaultScaleSettingsArgs | TargetUtilizationScaleSettingsArgs | undefined>;
    /**
     * Startup probe verify whether an application within a container has started successfully.
     */
    startupProbe?: pulumi.Input<ProbeSettingsArgs | undefined>;
}
/**
 * managedOnlineDeploymentArgsProvideDefaults sets the appropriate defaults for ManagedOnlineDeploymentArgs
 */
export function managedOnlineDeploymentArgsProvideDefaults(val: ManagedOnlineDeploymentArgs): ManagedOnlineDeploymentArgs {
    return {
        ...val,
        appInsightsEnabled: (val.appInsightsEnabled) ?? false,
        dataCollector: pulumi.output(val.dataCollector).apply(v => v === undefined ? undefined : dataCollectorArgsProvideDefaults(v)),
        egressPublicNetworkAccess: (val.egressPublicNetworkAccess) ?? "Enabled",
        instanceType: (val.instanceType) ?? "Standard_F4s_v2",
        livenessProbe: pulumi.output(val.livenessProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
        readinessProbe: pulumi.output(val.readinessProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
        requestSettings: pulumi.output(val.requestSettings).apply(v => v === undefined ? undefined : onlineRequestSettingsArgsProvideDefaults(v)),
        startupProbe: pulumi.output(val.startupProbe).apply(v => v === undefined ? undefined : probeSettingsArgsProvideDefaults(v)),
    };
}

export interface ManagedOnlineEndpointDeploymentResourcePropertiesArgs {
    endpointComputeType?: pulumi.Input<string | enums.EndpointComputeType | undefined>;
    /**
     * The failure reason if the creation failed.
     */
    failureReason?: pulumi.Input<string | undefined>;
    model?: pulumi.Input<string | undefined>;
    /**
     * Kind of the deployment.
     * Expected value is 'managedOnlineEndpoint'.
     */
    type: pulumi.Input<"managedOnlineEndpoint">;
}

/**
 * Details for managed resource group assigned identities.
 */
export interface ManagedResourceGroupAssignedIdentitiesArgs {
    /**
     * Identity principal Id
     */
    principalId?: pulumi.Input<string | undefined>;
}

/**
 * Managed resource group settings
 */
export interface ManagedResourceGroupSettingsArgs {
    /**
     * List of assigned identities for the managed resource group
     */
    assignedIdentities?: pulumi.Input<pulumi.Input<ManagedResourceGroupAssignedIdentitiesArgs>[] | undefined>;
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
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

export interface MarketplaceSubscriptionPropertiesArgs {
    /**
     * [Required] Target Marketplace Model ID to create a Marketplace Subscription for.
     */
    modelId: pulumi.Input<string>;
}

/**
 * DTO object representing compute resource
 */
export interface MaterializationComputeResourceArgs {
    /**
     * Specifies the instance type
     */
    instanceType?: pulumi.Input<string | undefined>;
}

export interface MaterializationSettingsArgs {
    /**
     * Specifies the notification details
     */
    notification?: pulumi.Input<NotificationSettingArgs | undefined>;
    /**
     * Specifies the compute resource settings
     */
    resource?: pulumi.Input<MaterializationComputeResourceArgs | undefined>;
    /**
     * Specifies the schedule details
     */
    schedule?: pulumi.Input<RecurrenceTriggerArgs | undefined>;
    /**
     * Specifies the spark compute settings
     */
    sparkConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Specifies the stores to which materialization should happen
     */
    storeType?: pulumi.Input<string | enums.MaterializationStoreType | undefined>;
}
/**
 * materializationSettingsArgsProvideDefaults sets the appropriate defaults for MaterializationSettingsArgs
 */
export function materializationSettingsArgsProvideDefaults(val: MaterializationSettingsArgs): MaterializationSettingsArgs {
    return {
        ...val,
        schedule: pulumi.output(val.schedule).apply(v => v === undefined ? undefined : recurrenceTriggerArgsProvideDefaults(v)),
        storeType: (val.storeType) ?? "None",
    };
}

/**
 * Defines an early termination policy based on running averages of the primary metric of all runs
 */
export interface MedianStoppingPolicyArgs {
    /**
     * Number of intervals by which to delay the first evaluation.
     */
    delayEvaluation?: pulumi.Input<number | undefined>;
    /**
     * Interval (number of runs) between policy evaluations.
     */
    evaluationInterval?: pulumi.Input<number | undefined>;
    /**
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

export interface ModelContainerPropertiesArgs {
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * modelContainerPropertiesArgsProvideDefaults sets the appropriate defaults for ModelContainerPropertiesArgs
 */
export function modelContainerPropertiesArgsProvideDefaults(val: ModelContainerPropertiesArgs): ModelContainerPropertiesArgs {
    return {
        ...val,
        isArchived: (val.isArchived) ?? false,
    };
}

export interface ModelSettingsArgs {
    /**
     * The unique model identifier that this ServerlessEndpoint should provision.
     */
    modelId?: pulumi.Input<string | undefined>;
}

/**
 * Model asset version details.
 */
export interface ModelVersionPropertiesArgs {
    /**
     * Array of dataset references
     */
    datasets?: pulumi.Input<pulumi.Input<DatasetReferenceArgs>[] | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Mapping of model flavors to their properties.
     */
    flavors?: pulumi.Input<{[key: string]: pulumi.Input<FlavorDataArgs>} | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * Name of the training job which produced this model
     */
    jobName?: pulumi.Input<string | undefined>;
    /**
     * The storage format for this entity. Used for NCD.
     */
    modelType?: pulumi.Input<string | undefined>;
    /**
     * The URI path to the model contents.
     */
    modelUri?: pulumi.Input<string | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Stage in the model lifecycle assigned to this model
     */
    stage?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * modelVersionPropertiesArgsProvideDefaults sets the appropriate defaults for ModelVersionPropertiesArgs
 */
export function modelVersionPropertiesArgsProvideDefaults(val: ModelVersionPropertiesArgs): ModelVersionPropertiesArgs {
    return {
        ...val,
        isAnonymous: (val.isAnonymous) ?? false,
        isArchived: (val.isArchived) ?? false,
    };
}

export interface MonitorDefinitionArgs {
    /**
     * The monitor's notification settings.
     */
    alertNotificationSettings?: pulumi.Input<MonitorNotificationSettingsArgs | undefined>;
    /**
     * [Required] The ARM resource ID of the compute resource to run the monitoring job on.
     */
    computeConfiguration: pulumi.Input<MonitorServerlessSparkComputeArgs>;
    /**
     * The entities targeted by the monitor.
     */
    monitoringTarget?: pulumi.Input<MonitoringTargetArgs | undefined>;
    /**
     * [Required] The signals to monitor.
     */
    signals: pulumi.Input<{[key: string]: pulumi.Input<CustomMonitoringSignalArgs | DataDriftMonitoringSignalArgs | DataQualityMonitoringSignalArgs | FeatureAttributionDriftMonitoringSignalArgs | PredictionDriftMonitoringSignalArgs>}>;
}

export interface MonitorEmailNotificationSettingsArgs {
    /**
     * The email recipient list which has a limitation of 499 characters in total.
     */
    emails?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

export interface MonitorNotificationSettingsArgs {
    /**
     * The AML notification email settings.
     */
    emailNotificationSettings?: pulumi.Input<MonitorEmailNotificationSettingsArgs | undefined>;
}

/**
 * Monitor serverless spark compute definition.
 */
export interface MonitorServerlessSparkComputeArgs {
    /**
     * [Required] The identity scheme leveraged to by the spark jobs running on serverless Spark.
     */
    computeIdentity: pulumi.Input<AmlTokenComputeIdentityArgs | ManagedComputeIdentityArgs>;
    /**
     * Monitor compute type enum.
     * Expected value is 'ServerlessSpark'.
     */
    computeType: pulumi.Input<"ServerlessSpark">;
    /**
     * [Required] The instance type running the Spark job.
     */
    instanceType: pulumi.Input<string>;
    /**
     * [Required] The Spark runtime version.
     */
    runtimeVersion: pulumi.Input<string>;
}

/**
 * Monitoring target definition.
 */
export interface MonitoringTargetArgs {
    /**
     * Reference to the deployment asset targeted by this monitor.
     */
    deploymentId?: pulumi.Input<string | undefined>;
    /**
     * Reference to the model asset targeted by this monitor.
     */
    modelId?: pulumi.Input<string | undefined>;
    /**
     * [Required] The machine learning task type of the monitored model.
     */
    taskType: pulumi.Input<string | enums.ModelTaskType>;
}

export interface MonitoringThresholdArgs {
    /**
     * The threshold value. If null, the set default is dependent on the metric type.
     */
    value?: pulumi.Input<number | undefined>;
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
    processCountPerInstance?: pulumi.Input<number | undefined>;
}

export interface NlpVerticalFeaturizationSettingsArgs {
    /**
     * Dataset language, useful for the text data.
     */
    datasetLanguage?: pulumi.Input<string | undefined>;
}

/**
 * Job execution constraints.
 */
export interface NlpVerticalLimitSettingsArgs {
    /**
     * Maximum Concurrent AutoML iterations.
     */
    maxConcurrentTrials?: pulumi.Input<number | undefined>;
    /**
     * Number of AutoML iterations.
     */
    maxTrials?: pulumi.Input<number | undefined>;
    /**
     * AutoML job timeout.
     */
    timeout?: pulumi.Input<string | undefined>;
}
/**
 * nlpVerticalLimitSettingsArgsProvideDefaults sets the appropriate defaults for NlpVerticalLimitSettingsArgs
 */
export function nlpVerticalLimitSettingsArgsProvideDefaults(val: NlpVerticalLimitSettingsArgs): NlpVerticalLimitSettingsArgs {
    return {
        ...val,
        maxConcurrentTrials: (val.maxConcurrentTrials) ?? 1,
        maxTrials: (val.maxTrials) ?? 1,
        timeout: (val.timeout) ?? "P7D",
    };
}

export interface NoneAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'None'.
     */
    authType: pulumi.Input<"None">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
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
 * Configuration for notification.
 */
export interface NotificationSettingArgs {
    /**
     * Send email notification to user on specified notification type
     */
    emailOn?: pulumi.Input<pulumi.Input<string | enums.EmailNotificationEnableType>[] | undefined>;
    /**
     * This is the email recipient list which has a limitation of 499 characters in total concat with comma separator
     */
    emails?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Send webhook callback to a service. Key is a user-provided name for the webhook.
     */
    webhooks?: pulumi.Input<{[key: string]: pulumi.Input<AzureDevOpsWebhookArgs>} | undefined>;
}

export interface NumericalDataDriftMetricThresholdArgs {
    /**
     * Expected value is 'Numerical'.
     */
    dataType: pulumi.Input<"Numerical">;
    /**
     * [Required] The numerical data drift metric to calculate.
     */
    metric: pulumi.Input<string | enums.NumericalDataDriftMetric>;
    /**
     * The threshold value. If null, a default value will be set depending on the selected metric.
     */
    threshold?: pulumi.Input<MonitoringThresholdArgs | undefined>;
}

export interface NumericalDataQualityMetricThresholdArgs {
    /**
     * Expected value is 'Numerical'.
     */
    dataType: pulumi.Input<"Numerical">;
    /**
     * [Required] The numerical data quality metric to calculate.
     */
    metric: pulumi.Input<string | enums.NumericalDataQualityMetric>;
    /**
     * The threshold value. If null, a default value will be set depending on the selected metric.
     */
    threshold?: pulumi.Input<MonitoringThresholdArgs | undefined>;
}

export interface NumericalPredictionDriftMetricThresholdArgs {
    /**
     * Expected value is 'Numerical'.
     */
    dataType: pulumi.Input<"Numerical">;
    /**
     * [Required] The numerical prediction drift metric to calculate.
     */
    metric: pulumi.Input<string | enums.NumericalPredictionDriftMetric>;
    /**
     * The threshold value. If null, a default value will be set depending on the selected metric.
     */
    threshold?: pulumi.Input<MonitoringThresholdArgs | undefined>;
}

export interface OAuth2AuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'OAuth2'.
     */
    authType: pulumi.Input<"OAuth2">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    /**
     * ClientId and ClientSecret are required. Other properties are optional
     * depending on each OAuth2 provider's implementation.
     */
    credentials?: pulumi.Input<WorkspaceConnectionOAuth2Args | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
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
 * OneLake (Trident) datastore configuration.
 */
export interface OneLakeDatastoreArgs {
    /**
     * [Required] OneLake artifact backing the datastore.
     */
    artifact: pulumi.Input<LakeHouseArtifactArgs>;
    /**
     * [Required] Account credentials.
     */
    credentials: pulumi.Input<AccountKeyDatastoreCredentialsArgs | CertificateDatastoreCredentialsArgs | NoneDatastoreCredentialsArgs | SasDatastoreCredentialsArgs | ServicePrincipalDatastoreCredentialsArgs>;
    /**
     * Enum to determine the datastore contents type.
     * Expected value is 'OneLake'.
     */
    datastoreType: pulumi.Input<"OneLake">;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * OneLake endpoint to use for the datastore.
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * [Required] OneLake workspace name.
     */
    oneLakeWorkspaceName: pulumi.Input<string>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Indicates which identity to use to authenticate service data access to customer's storage.
     */
    serviceDataAccessAuthIdentity?: pulumi.Input<string | enums.ServiceDataAccessAuthIdentity | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * oneLakeDatastoreArgsProvideDefaults sets the appropriate defaults for OneLakeDatastoreArgs
 */
export function oneLakeDatastoreArgsProvideDefaults(val: OneLakeDatastoreArgs): OneLakeDatastoreArgs {
    return {
        ...val,
        serviceDataAccessAuthIdentity: (val.serviceDataAccessAuthIdentity) ?? "None",
    };
}

/**
 * Online endpoint configuration
 */
export interface OnlineEndpointPropertiesArgs {
    /**
     * [Required] The authentication method for invoking the endpoint (data plane operation). Use 'Key' for key-based authentication. Use 'AMLToken' for Azure Machine Learning token-based authentication. Use 'AADToken' for Microsoft Entra token-based authentication.
     */
    authMode: pulumi.Input<string | enums.EndpointAuthMode>;
    /**
     * ARM resource ID of the compute if it exists.
     * optional
     */
    compute?: pulumi.Input<string | undefined>;
    /**
     * Description of the inference endpoint.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * EndpointAuthKeys to set initially on an Endpoint.
     * This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
     */
    keys?: pulumi.Input<EndpointAuthKeysArgs | undefined>;
    /**
     * Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50.
     */
    mirrorTraffic?: pulumi.Input<{[key: string]: pulumi.Input<number>} | undefined>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Enum to determine whether PublicNetworkAccess is Enabled or Disabled.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessType | undefined>;
    /**
     * Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100.
     */
    traffic?: pulumi.Input<{[key: string]: pulumi.Input<number>} | undefined>;
}
/**
 * onlineEndpointPropertiesArgsProvideDefaults sets the appropriate defaults for OnlineEndpointPropertiesArgs
 */
export function onlineEndpointPropertiesArgsProvideDefaults(val: OnlineEndpointPropertiesArgs): OnlineEndpointPropertiesArgs {
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
    maxConcurrentRequestsPerInstance?: pulumi.Input<number | undefined>;
    /**
     * (Deprecated for Managed Online Endpoints) The maximum amount of time a request will stay in the queue in ISO 8601 format.
     * Defaults to 500ms.
     * (Now increase `request_timeout_ms` to account for any networking/queue delays)
     */
    maxQueueWait?: pulumi.Input<string | undefined>;
    /**
     * The scoring timeout in ISO 8601 format.
     * Defaults to 5000ms.
     */
    requestTimeout?: pulumi.Input<string | undefined>;
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

export interface OpenAIEndpointDeploymentResourcePropertiesArgs {
    /**
     * The failure reason if the creation failed.
     */
    failureReason?: pulumi.Input<string | undefined>;
    /**
     * Model used for the endpoint deployment.
     */
    model: pulumi.Input<EndpointDeploymentModelArgs>;
    /**
     * The name of RAI policy.
     */
    raiPolicyName?: pulumi.Input<string | undefined>;
    sku?: pulumi.Input<CognitiveServicesSkuArgs | undefined>;
    /**
     * Kind of the deployment.
     * Expected value is 'Azure.OpenAI'.
     */
    type: pulumi.Input<"Azure.OpenAI">;
    /**
     * Deployment model version upgrade option.
     */
    versionUpgradeOption?: pulumi.Input<string | enums.DeploymentModelVersionUpgradeOption | undefined>;
}

/**
 * Reference to an asset via its path in a job output.
 */
export interface OutputPathAssetReferenceArgs {
    /**
     * ARM resource ID of the job.
     */
    jobId?: pulumi.Input<string | undefined>;
    /**
     * The path of the file/directory in the job output.
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine which reference method to use for an asset.
     * Expected value is 'OutputPath'.
     */
    referenceType: pulumi.Input<"OutputPath">;
}

export interface PATAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'PAT'.
     */
    authType: pulumi.Input<"PAT">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<WorkspaceConnectionPersonalAccessTokenArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Settings for a personal compute instance.
 */
export interface PersonalComputeInstanceSettingsArgs {
    /**
     * A user explicitly assigned to a personal compute instance.
     */
    assignedUser?: pulumi.Input<AssignedUserArgs | undefined>;
}

/**
 * Pipeline Job definition: defines generic to MFE attributes.
 */
export interface PipelineJobArgs {
    /**
     * ARM resource ID of the component resource.
     */
    componentId?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of the compute resource.
     */
    computeId?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Display name of job.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
     */
    experimentName?: pulumi.Input<string | undefined>;
    /**
     * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
     * Defaults to AmlToken if null.
     */
    identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs | undefined>;
    /**
     * Inputs for the pipeline job.
     */
    inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>} | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * Enum to determine the type of job.
     * Expected value is 'Pipeline'.
     */
    jobType: pulumi.Input<"Pipeline">;
    /**
     * Jobs construct the Pipeline Job.
     */
    jobs?: pulumi.Input<{[key: string]: any} | undefined>;
    /**
     * Notification setting for the job
     */
    notificationSetting?: pulumi.Input<NotificationSettingArgs | undefined>;
    /**
     * Outputs for the pipeline job
     */
    outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>} | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * List of JobEndpoints.
     * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
     */
    services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>} | undefined>;
    /**
     * Pipeline settings, for things like ContinueRunOnStepFailure etc.
     */
    settings?: any | undefined;
    /**
     * ARM resource ID of source job.
     */
    sourceJobId?: pulumi.Input<string | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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

export interface PredictionDriftMonitoringSignalArgs {
    /**
     * A dictionary that maps feature names to their respective data types.
     */
    featureDataTypeOverride?: pulumi.Input<{[key: string]: pulumi.Input<string | enums.MonitoringFeatureDataType>} | undefined>;
    /**
     * [Required] A list of metrics to calculate and their associated thresholds.
     */
    metricThresholds: pulumi.Input<pulumi.Input<CategoricalPredictionDriftMetricThresholdArgs | NumericalPredictionDriftMetricThresholdArgs>[]>;
    /**
     * The current notification mode for this signal.
     */
    notificationTypes?: pulumi.Input<pulumi.Input<string | enums.MonitoringNotificationType>[] | undefined>;
    /**
     * [Required] The data which drift will be calculated for.
     */
    productionData: pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>;
    /**
     * Property dictionary. Properties can be added, but not removed or altered.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * [Required] The data to calculate drift against.
     */
    referenceData: pulumi.Input<FixedInputDataArgs | RollingInputDataArgs | StaticInputDataArgs>;
    /**
     * Expected value is 'PredictionDrift'.
     */
    signalType: pulumi.Input<"PredictionDrift">;
}

/**
 * Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
 */
export interface PrivateEndpointDestinationArgs {
    /**
     * A type definition that refers the id to an Azure Resource Manager resource.
     */
    serviceResourceId?: pulumi.Input<string | undefined>;
    sparkEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Type of a managed network Outbound Rule of a machine learning workspace.
     */
    sparkStatus?: pulumi.Input<string | enums.RuleStatus | undefined>;
    subresourceTarget?: pulumi.Input<string | undefined>;
}

/**
 * Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
 */
export interface PrivateEndpointOutboundRuleArgs {
    /**
     * Category of a managed network Outbound Rule of a machine learning workspace.
     */
    category?: pulumi.Input<string | enums.RuleCategory | undefined>;
    /**
     * Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
     */
    destination?: pulumi.Input<PrivateEndpointDestinationArgs | undefined>;
    fqdns?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Type of a managed network Outbound Rule of a machine learning workspace.
     */
    status?: pulumi.Input<string | enums.RuleStatus | undefined>;
    /**
     * Type of a managed network Outbound Rule of a machine learning workspace.
     * Expected value is 'PrivateEndpoint'.
     */
    type: pulumi.Input<"PrivateEndpoint">;
}

/**
 * The PE network resource that is linked to this PE connection.
 */
export interface PrivateEndpointResourceArgs {
    /**
     * The subnetId that the private endpoint is connected to.
     */
    subnetArmId?: pulumi.Input<string | undefined>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Some RP chose "None". Other RPs use this for region expansion.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * User-defined message that, per NRP doc, may be used for approval-related message.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Connection status of the service consumer with the service provider\r\nPossible state transitions\r\nPending -> Approved (Service provider approves the connection request)\r\nPending -> Rejected (Service provider rejects the connection request)\r\nPending -> Disconnected (Service provider deletes the connection)\r\nApproved -> Rejected (Service provider rejects the approved connection)\r\nApproved -> Disconnected (Service provider deletes the connection)\r\nRejected -> Pending (Service consumer re-initiates the connection request that was rejected)\r\nRejected -> Disconnected (Service provider deletes the connection)
     */
    status?: pulumi.Input<string | enums.EndpointServiceConnectionStatus | undefined>;
}

/**
 * Deployment container liveness/readiness probe configuration.
 */
export interface ProbeSettingsArgs {
    /**
     * The number of failures to allow before returning an unhealthy status.
     */
    failureThreshold?: pulumi.Input<number | undefined>;
    /**
     * The delay before the first probe in ISO 8601 format.
     */
    initialDelay?: pulumi.Input<string | undefined>;
    /**
     * The length of time between probes in ISO 8601 format.
     */
    period?: pulumi.Input<string | undefined>;
    /**
     * The number of successful probes before returning a healthy status.
     */
    successThreshold?: pulumi.Input<number | undefined>;
    /**
     * The probe timeout in ISO 8601 format.
     */
    timeout?: pulumi.Input<string | undefined>;
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
    processCountPerInstance?: pulumi.Input<number | undefined>;
}

export interface QueueSettingsArgs {
    /**
     * Enum to determine the job tier.
     */
    jobTier?: pulumi.Input<string | enums.JobTier | undefined>;
}
/**
 * queueSettingsArgsProvideDefaults sets the appropriate defaults for QueueSettingsArgs
 */
export function queueSettingsArgsProvideDefaults(val: QueueSettingsArgs): QueueSettingsArgs {
    return {
        ...val,
        jobTier: (val.jobTier) ?? "Null",
    };
}

/**
 * Azure OpenAI blocklist config.
 */
export interface RaiBlocklistConfigArgs {
    /**
     * If blocking would occur.
     */
    blocking?: pulumi.Input<boolean | undefined>;
    /**
     * Name of ContentFilter.
     */
    blocklistName?: pulumi.Input<string | undefined>;
}

/**
 * RAI Custom Blocklist Item properties.
 */
export interface RaiBlocklistItemPropertiesArgs {
    /**
     * If the pattern is a regex pattern.
     */
    isRegex?: pulumi.Input<boolean | undefined>;
    /**
     * Pattern to match against.
     */
    pattern?: pulumi.Input<string | undefined>;
}

/**
 * RAI Custom Blocklist properties.
 */
export interface RaiBlocklistPropertiesArgs {
    /**
     * Description of the block list.
     */
    description?: pulumi.Input<string | undefined>;
}

/**
 * Azure OpenAI Content Filter.
 */
export interface RaiPolicyContentFilterArgs {
    /**
     * Level at which content is filtered.
     */
    allowedContentLevel?: pulumi.Input<string | enums.AllowedContentLevel | undefined>;
    /**
     * If blocking would occur.
     */
    blocking?: pulumi.Input<boolean | undefined>;
    /**
     * If the ContentFilter is enabled.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Name of ContentFilter.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Content source to apply the Content Filters.
     */
    source?: pulumi.Input<string | enums.RaiPolicyContentSource | undefined>;
}

/**
 * Azure OpenAI Content Filters properties.
 */
export interface RaiPolicyPropertiesArgs {
    /**
     * Name of the base Content Filters.
     */
    basePolicyName?: pulumi.Input<string | undefined>;
    completionBlocklists?: pulumi.Input<pulumi.Input<RaiBlocklistConfigArgs>[] | undefined>;
    contentFilters?: pulumi.Input<pulumi.Input<RaiPolicyContentFilterArgs>[] | undefined>;
    /**
     * Content Filters mode.
     */
    mode?: pulumi.Input<string | enums.RaiPolicyMode | undefined>;
    promptBlocklists?: pulumi.Input<pulumi.Input<RaiBlocklistConfigArgs>[] | undefined>;
    /**
     * Content Filters policy type.
     */
    type?: pulumi.Input<string | enums.RaiPolicyType | undefined>;
}

/**
 * Defines a Sampling Algorithm that generates values randomly
 */
export interface RandomSamplingAlgorithmArgs {
    /**
     * The specific type of random algorithm
     */
    rule?: pulumi.Input<string | enums.RandomSamplingAlgorithmRule | undefined>;
    /**
     * Expected value is 'Random'.
     */
    samplingAlgorithmType: pulumi.Input<"Random">;
    /**
     * An optional integer to use as the seed for random number generation
     */
    seed?: pulumi.Input<number | undefined>;
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
 * The workflow trigger recurrence for ComputeStartStop schedule type.
 */
export interface RecurrenceArgs {
    /**
     * [Required] The frequency to trigger schedule.
     */
    frequency?: pulumi.Input<string | enums.ComputeRecurrenceFrequency | undefined>;
    /**
     * [Required] Specifies schedule interval in conjunction with frequency
     */
    interval?: pulumi.Input<number | undefined>;
    /**
     * [Required] The recurrence schedule.
     */
    schedule?: pulumi.Input<ComputeRecurrenceScheduleArgs | undefined>;
    /**
     * The start time in yyyy-MM-ddTHH:mm:ss format.
     */
    startTime?: pulumi.Input<string | undefined>;
    /**
     * Specifies time zone in which the schedule runs.
     * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
     */
    timeZone?: pulumi.Input<string | undefined>;
}
/**
 * recurrenceArgsProvideDefaults sets the appropriate defaults for RecurrenceArgs
 */
export function recurrenceArgsProvideDefaults(val: RecurrenceArgs): RecurrenceArgs {
    return {
        ...val,
        timeZone: (val.timeZone) ?? "UTC",
    };
}

export interface RecurrenceScheduleArgs {
    /**
     * [Required] List of hours for the schedule.
     */
    hours: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * [Required] List of minutes for the schedule.
     */
    minutes: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of month days for the schedule
     */
    monthDays?: pulumi.Input<pulumi.Input<number>[] | undefined>;
    /**
     * List of days for the schedule.
     */
    weekDays?: pulumi.Input<pulumi.Input<string | enums.WeekDay>[] | undefined>;
}

export interface RecurrenceTriggerArgs {
    /**
     * Specifies end time of schedule in ISO 8601, but without a UTC offset. Refer https://en.wikipedia.org/wiki/ISO_8601.
     * Recommented format would be "2022-06-01T00:00:01"
     * If not present, the schedule will run indefinitely
     */
    endTime?: pulumi.Input<string | undefined>;
    /**
     * [Required] The frequency to trigger schedule.
     */
    frequency: pulumi.Input<string | enums.RecurrenceFrequency>;
    /**
     * [Required] Specifies schedule interval in conjunction with frequency
     */
    interval: pulumi.Input<number>;
    /**
     * The recurrence schedule.
     */
    schedule?: pulumi.Input<RecurrenceScheduleArgs | undefined>;
    /**
     * Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
     */
    startTime?: pulumi.Input<string | undefined>;
    /**
     * Specifies time zone in which the schedule runs.
     * TimeZone should follow Windows time zone format. Refer: https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11
     */
    timeZone?: pulumi.Input<string | undefined>;
    /**
     * Expected value is 'Recurrence'.
     */
    triggerType: pulumi.Input<"Recurrence">;
}
/**
 * recurrenceTriggerArgsProvideDefaults sets the appropriate defaults for RecurrenceTriggerArgs
 */
export function recurrenceTriggerArgsProvideDefaults(val: RecurrenceTriggerArgs): RecurrenceTriggerArgs {
    return {
        ...val,
        timeZone: (val.timeZone) ?? "UTC",
    };
}

/**
 * Private endpoint connection definition.
 */
export interface RegistryPrivateEndpointConnectionArgs {
    /**
     * The group ids
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * This is the private endpoint connection name created on SRP
     * Full resource id: /subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.MachineLearningServices/{resourceType}/{resourceName}/registryPrivateEndpointConnections/{peConnectionName}
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Same as workspace location.
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * The PE network resource that is linked to this PE connection.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointResourceArgs | undefined>;
    /**
     * One of null, "Succeeded", "Provisioning", "Failed". While not approved, it's null.
     */
    provisioningState?: pulumi.Input<string | undefined>;
    /**
     * The connection state.
     */
    registryPrivateLinkServiceConnectionState?: pulumi.Input<RegistryPrivateLinkServiceConnectionStateArgs | undefined>;
}

/**
 * The connection state.
 */
export interface RegistryPrivateLinkServiceConnectionStateArgs {
    /**
     * Some RP chose "None". Other RPs use this for region expansion.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * User-defined message that, per NRP doc, may be used for approval-related message.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Connection status of the service consumer with the service provider
     */
    status?: pulumi.Input<string | enums.EndpointServiceConnectionStatus | undefined>;
}

/**
 * Details for each region the registry is in
 */
export interface RegistryRegionArmDetailsArgs {
    /**
     * List of ACR accounts
     */
    acrDetails?: pulumi.Input<pulumi.Input<AcrDetailsArgs>[] | undefined>;
    /**
     * The location where the registry exists
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * List of storage accounts
     */
    storageAccountDetails?: pulumi.Input<pulumi.Input<StorageAccountDetailsArgs>[] | undefined>;
}

/**
 * Regression task in AutoML Table vertical.
 */
export interface RegressionArgs {
    /**
     * Columns to use for CVSplit data.
     */
    cvSplitColumnNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Featurization inputs needed for AutoML job.
     */
    featurizationSettings?: pulumi.Input<TableVerticalFeaturizationSettingsArgs | undefined>;
    /**
     * Execution constraints for AutoMLJob.
     */
    limitSettings?: pulumi.Input<TableVerticalLimitSettingsArgs | undefined>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Number of cross validation folds to be applied on training dataset
     * when validation dataset is not provided.
     */
    nCrossValidations?: pulumi.Input<AutoNCrossValidationsArgs | CustomNCrossValidationsArgs | undefined>;
    /**
     * Primary metrics for Regression task.
     */
    primaryMetric?: pulumi.Input<string | enums.RegressionPrimaryMetrics | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'Regression'.
     */
    taskType: pulumi.Input<"Regression">;
    /**
     * Test data input.
     */
    testData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of test dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    testDataSize?: pulumi.Input<number | undefined>;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Inputs for training phase for an AutoML Job.
     */
    trainingSettings?: pulumi.Input<RegressionTrainingSettingsArgs | undefined>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
    /**
     * The fraction of training dataset that needs to be set aside for validation purpose.
     * Values between (0.0 , 1.0)
     * Applied when validation dataset is not provided.
     */
    validationDataSize?: pulumi.Input<number | undefined>;
    /**
     * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
     */
    weightColumnName?: pulumi.Input<string | undefined>;
}
/**
 * regressionArgsProvideDefaults sets the appropriate defaults for RegressionArgs
 */
export function regressionArgsProvideDefaults(val: RegressionArgs): RegressionArgs {
    return {
        ...val,
        featurizationSettings: pulumi.output(val.featurizationSettings).apply(v => v === undefined ? undefined : tableVerticalFeaturizationSettingsArgsProvideDefaults(v)),
        limitSettings: pulumi.output(val.limitSettings).apply(v => v === undefined ? undefined : tableVerticalLimitSettingsArgsProvideDefaults(v)),
        logVerbosity: (val.logVerbosity) ?? "Info",
        primaryMetric: (val.primaryMetric) ?? "NormalizedRootMeanSquaredError",
        testData: pulumi.output(val.testData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        trainingSettings: pulumi.output(val.trainingSettings).apply(v => v === undefined ? undefined : regressionTrainingSettingsArgsProvideDefaults(v)),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

/**
 * Regression Training related configuration.
 */
export interface RegressionTrainingSettingsArgs {
    /**
     * Allowed models for regression task.
     */
    allowedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.RegressionModels>[] | undefined>;
    /**
     * Blocked models for regression task.
     */
    blockedTrainingAlgorithms?: pulumi.Input<pulumi.Input<string | enums.RegressionModels>[] | undefined>;
    /**
     * Enable recommendation of DNN models.
     */
    enableDnnTraining?: pulumi.Input<boolean | undefined>;
    /**
     * Flag to turn on explainability on best model.
     */
    enableModelExplainability?: pulumi.Input<boolean | undefined>;
    /**
     * Flag for enabling onnx compatible models.
     */
    enableOnnxCompatibleModels?: pulumi.Input<boolean | undefined>;
    /**
     * Enable stack ensemble run.
     */
    enableStackEnsemble?: pulumi.Input<boolean | undefined>;
    /**
     * Enable voting ensemble run.
     */
    enableVoteEnsemble?: pulumi.Input<boolean | undefined>;
    /**
     * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.
     * Configure this parameter with a higher value than 300 secs, if more time is needed.
     */
    ensembleModelDownloadTimeout?: pulumi.Input<string | undefined>;
    /**
     * Stack ensemble settings for stack ensemble run.
     */
    stackEnsembleSettings?: pulumi.Input<StackEnsembleSettingsArgs | undefined>;
}
/**
 * regressionTrainingSettingsArgsProvideDefaults sets the appropriate defaults for RegressionTrainingSettingsArgs
 */
export function regressionTrainingSettingsArgsProvideDefaults(val: RegressionTrainingSettingsArgs): RegressionTrainingSettingsArgs {
    return {
        ...val,
        enableDnnTraining: (val.enableDnnTraining) ?? false,
        enableModelExplainability: (val.enableModelExplainability) ?? true,
        enableOnnxCompatibleModels: (val.enableOnnxCompatibleModels) ?? false,
        enableStackEnsemble: (val.enableStackEnsemble) ?? true,
        enableVoteEnsemble: (val.enableVoteEnsemble) ?? true,
        ensembleModelDownloadTimeout: (val.ensembleModelDownloadTimeout) ?? "PT5M",
        stackEnsembleSettings: pulumi.output(val.stackEnsembleSettings).apply(v => v === undefined ? undefined : stackEnsembleSettingsArgsProvideDefaults(v)),
    };
}

/**
 * Scoring requests configuration.
 */
export interface RequestConfigurationArgs {
    /**
     * The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
     */
    maxConcurrentRequestsPerInstance?: pulumi.Input<number | undefined>;
    /**
     * The scoring timeout in ISO 8601 format.
     * Defaults to 5000ms.
     */
    requestTimeout?: pulumi.Input<string | undefined>;
}
/**
 * requestConfigurationArgsProvideDefaults sets the appropriate defaults for RequestConfigurationArgs
 */
export function requestConfigurationArgsProvideDefaults(val: RequestConfigurationArgs): RequestConfigurationArgs {
    return {
        ...val,
        maxConcurrentRequestsPerInstance: (val.maxConcurrentRequestsPerInstance) ?? 1,
        requestTimeout: (val.requestTimeout) ?? "PT5S",
    };
}

export interface RequestLoggingArgs {
    /**
     * For payload logging, we only collect payload by default. If customers also want to collect the specified headers, they can set them in captureHeaders so that backend will collect those headers along with payload.
     */
    captureHeaders?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
 */
export interface ResourceIdArgs {
    /**
     * The ID of the resource
     */
    id: pulumi.Input<string>;
}

/**
 * Rolling input data definition.
 */
export interface RollingInputDataArgs {
    /**
     * Mapping of column names to special uses.
     */
    columns?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The context metadata of the data source.
     */
    dataContext?: pulumi.Input<string | undefined>;
    /**
     * Monitoring input data type enum.
     * Expected value is 'Rolling'.
     */
    inputDataType: pulumi.Input<"Rolling">;
    /**
     * [Required] Specifies the type of job.
     */
    jobInputType: pulumi.Input<string | enums.JobInputType>;
    /**
     * Reference to the component asset used to preprocess the data.
     */
    preprocessingComponentId?: pulumi.Input<string | undefined>;
    /**
     * [Required] Input Asset URI.
     */
    uri: pulumi.Input<string>;
    /**
     * [Required] The time offset between the end of the data window and the monitor's current run time.
     */
    windowOffset: pulumi.Input<string>;
    /**
     * [Required] The size of the rolling data window.
     */
    windowSize: pulumi.Input<string>;
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

export interface SASAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'SAS'.
     */
    authType: pulumi.Input<"SAS">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<WorkspaceConnectionSharedAccessSignatureArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
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
    sasToken?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the datastore secrets type.
     * Expected value is 'Sas'.
     */
    secretsType: pulumi.Input<"Sas">;
}

/**
 * scale settings for AML Compute
 */
export interface ScaleSettingsArgs {
    /**
     * Max number of nodes to use
     */
    maxNodeCount: pulumi.Input<number>;
    /**
     * Min number of nodes to use
     */
    minNodeCount?: pulumi.Input<number | undefined>;
    /**
     * Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.
     */
    nodeIdleTimeBeforeScaleDown?: pulumi.Input<string | undefined>;
}
/**
 * scaleSettingsArgsProvideDefaults sets the appropriate defaults for ScaleSettingsArgs
 */
export function scaleSettingsArgsProvideDefaults(val: ScaleSettingsArgs): ScaleSettingsArgs {
    return {
        ...val,
        minNodeCount: (val.minNodeCount) ?? 0,
    };
}

/**
 * Configuration for ScaleUnit pool.
 */
export interface ScaleUnitConfigurationArgs {
    /**
     * Gets or sets a value indicating whether PublicEgress is disabled.
     */
    disablePublicEgress?: pulumi.Input<boolean | undefined>;
    /**
     * Gets or sets a list of Registry sources that will be used to confirm identity, storage, ACR.
     */
    registries?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
/**
 * scaleUnitConfigurationArgsProvideDefaults sets the appropriate defaults for ScaleUnitConfigurationArgs
 */
export function scaleUnitConfigurationArgsProvideDefaults(val: ScaleUnitConfigurationArgs): ScaleUnitConfigurationArgs {
    return {
        ...val,
        disablePublicEgress: (val.disablePublicEgress) ?? false,
    };
}

export interface ScheduleBaseArgs {
    /**
     * A system assigned id for the schedule.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The current deployment state of schedule.
     */
    provisioningStatus?: pulumi.Input<string | enums.ScheduleProvisioningState | undefined>;
    /**
     * Is the schedule enabled or disabled?
     */
    status?: pulumi.Input<string | enums.ScheduleStatus | undefined>;
}

/**
 * Base definition of a schedule
 */
export interface SchedulePropertiesArgs {
    /**
     * [Required] Specifies the action of the schedule
     */
    action: pulumi.Input<CreateMonitorActionArgs | EndpointScheduleActionArgs | JobScheduleActionArgs>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Display name of schedule.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Is the schedule enabled?
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * [Required] Specifies the trigger details
     */
    trigger: pulumi.Input<CronTriggerArgs | RecurrenceTriggerArgs>;
}
/**
 * schedulePropertiesArgsProvideDefaults sets the appropriate defaults for SchedulePropertiesArgs
 */
export function schedulePropertiesArgsProvideDefaults(val: SchedulePropertiesArgs): SchedulePropertiesArgs {
    return {
        ...val,
        isEnabled: (val.isEnabled) ?? true,
    };
}

/**
 * Script reference
 */
export interface ScriptReferenceArgs {
    /**
     * Optional command line arguments passed to the script to run.
     */
    scriptArguments?: pulumi.Input<string | undefined>;
    /**
     * The location of scripts in the mounted volume.
     */
    scriptData?: pulumi.Input<string | undefined>;
    /**
     * The storage source of the script: inline, workspace.
     */
    scriptSource?: pulumi.Input<string | undefined>;
    /**
     * Optional time period passed to timeout command.
     */
    timeout?: pulumi.Input<string | undefined>;
}

/**
 * Customized setup scripts
 */
export interface ScriptsToExecuteArgs {
    /**
     * Script that's run only once during provision of the compute.
     */
    creationScript?: pulumi.Input<ScriptReferenceArgs | undefined>;
    /**
     * Script that's run every time the machine starts.
     */
    startupScript?: pulumi.Input<ScriptReferenceArgs | undefined>;
}

/**
 * Secret Configuration definition.
 */
export interface SecretConfigurationArgs {
    /**
     * Secret Uri.
     * Sample Uri : https://myvault.vault.azure.net/secrets/mysecretname/secretversion
     */
    uri?: pulumi.Input<string | undefined>;
    /**
     * Name of secret in workspace key vault.
     */
    workspaceSecretName?: pulumi.Input<string | undefined>;
}

export interface ServerlessComputeSettingsArgs {
    /**
     * The resource ID of an existing virtual network subnet in which serverless compute nodes should be deployed
     */
    serverlessComputeCustomSubnet?: pulumi.Input<string | undefined>;
    /**
     * The flag to signal if serverless compute nodes deployed in custom vNet would have no public IP addresses for a workspace with private endpoint
     */
    serverlessComputeNoPublicIP?: pulumi.Input<boolean | undefined>;
}

export interface ServerlessEndpointPropertiesArgs {
    /**
     * [Required] Specifies the authentication mode for the Serverless endpoint.
     */
    authMode: pulumi.Input<string | enums.ServerlessInferenceEndpointAuthMode>;
    /**
     * Specifies the content safety options. If omitted, the default content safety settings will be configured
     */
    contentSafety?: pulumi.Input<ContentSafetyArgs | undefined>;
    /**
     * The model settings (model id) for the model being serviced on the ServerlessEndpoint.
     */
    modelSettings?: pulumi.Input<ModelSettingsArgs | undefined>;
}

export interface ServerlessOfferArgs {
    /**
     * [Required] The name of the Serverless Offer
     */
    offerName: pulumi.Input<string>;
    /**
     * [Required] Publisher name of the Serverless Offer
     */
    publisher: pulumi.Input<string>;
}

export interface ServiceManagedResourcesSettingsArgs {
    cosmosDb?: pulumi.Input<CosmosDbSettingsArgs | undefined>;
}

export interface ServicePrincipalAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'ServicePrincipal'.
     */
    authType: pulumi.Input<"ServicePrincipal">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<WorkspaceConnectionServicePrincipalArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * Service Principal datastore credentials configuration.
 */
export interface ServicePrincipalDatastoreCredentialsArgs {
    /**
     * Authority URL used for authentication.
     */
    authorityUrl?: pulumi.Input<string | undefined>;
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
    resourceUrl?: pulumi.Input<string | undefined>;
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
    clientSecret?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the datastore secrets type.
     * Expected value is 'ServicePrincipal'.
     */
    secretsType: pulumi.Input<"ServicePrincipal">;
}

/**
 * Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
 */
export interface ServiceTagDestinationArgs {
    /**
     * The action enum for networking rule.
     */
    action?: pulumi.Input<string | enums.RuleAction | undefined>;
    /**
     * Optional, if provided, the ServiceTag property will be ignored.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    portRanges?: pulumi.Input<string | undefined>;
    protocol?: pulumi.Input<string | undefined>;
    serviceTag?: pulumi.Input<string | undefined>;
}

/**
 * Service Tag Outbound Rule for the managed network of a machine learning workspace.
 */
export interface ServiceTagOutboundRuleArgs {
    /**
     * Category of a managed network Outbound Rule of a machine learning workspace.
     */
    category?: pulumi.Input<string | enums.RuleCategory | undefined>;
    /**
     * Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
     */
    destination?: pulumi.Input<ServiceTagDestinationArgs | undefined>;
    /**
     * Type of a managed network Outbound Rule of a machine learning workspace.
     */
    status?: pulumi.Input<string | enums.RuleStatus | undefined>;
    /**
     * Type of a managed network Outbound Rule of a machine learning workspace.
     * Expected value is 'ServiceTag'.
     */
    type: pulumi.Input<"ServiceTag">;
}

/**
 * Details of customized scripts to execute for setting up the cluster.
 */
export interface SetupScriptsArgs {
    /**
     * Customized setup scripts
     */
    scripts?: pulumi.Input<ScriptsToExecuteArgs | undefined>;
}

export interface SharedPrivateLinkResourceArgs {
    /**
     * group id of the private link
     */
    groupId?: pulumi.Input<string | undefined>;
    /**
     * Unique name of the private link
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * the resource id that private link links to
     */
    privateLinkResourceId?: pulumi.Input<string | undefined>;
    /**
     * Request message
     */
    requestMessage?: pulumi.Input<string | undefined>;
    /**
     * Connection status of the service consumer with the service provider\r\nPossible state transitions\r\nPending -> Approved (Service provider approves the connection request)\r\nPending -> Rejected (Service provider rejects the connection request)\r\nPending -> Disconnected (Service provider deletes the connection)\r\nApproved -> Rejected (Service provider rejects the approved connection)\r\nApproved -> Disconnected (Service provider deletes the connection)\r\nRejected -> Pending (Service consumer re-initiates the connection request that was rejected)\r\nRejected -> Disconnected (Service provider deletes the connection)
     */
    status?: pulumi.Input<string | enums.EndpointServiceConnectionStatus | undefined>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the SKU. Ex - P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier | undefined>;
}

/**
 * Spark job definition.
 */
export interface SparkJobArgs {
    /**
     * Archive files used in the job.
     */
    archives?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Arguments for the job.
     */
    args?: pulumi.Input<string | undefined>;
    /**
     * [Required] arm-id of the code asset.
     */
    codeId: pulumi.Input<string>;
    /**
     * ARM resource ID of the component resource.
     */
    componentId?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of the compute resource.
     */
    computeId?: pulumi.Input<string | undefined>;
    /**
     * Spark configured properties.
     */
    conf?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Display name of job.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * [Required] The entry to execute on startup of the job.
     */
    entry: pulumi.Input<SparkJobPythonEntryArgs | SparkJobScalaEntryArgs>;
    /**
     * The ARM resource ID of the Environment specification for the job.
     */
    environmentId?: pulumi.Input<string | undefined>;
    /**
     * Environment variables included in the job.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
     */
    experimentName?: pulumi.Input<string | undefined>;
    /**
     * Files used in the job.
     */
    files?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
     * Defaults to AmlToken if null.
     */
    identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs | undefined>;
    /**
     * Mapping of input data bindings used in the job.
     */
    inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>} | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * Jar files used in the job.
     */
    jars?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Enum to determine the type of job.
     * Expected value is 'Spark'.
     */
    jobType: pulumi.Input<"Spark">;
    /**
     * Notification setting for the job
     */
    notificationSetting?: pulumi.Input<NotificationSettingArgs | undefined>;
    /**
     * Mapping of output data bindings used in the job.
     */
    outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>} | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Python files used in the job.
     */
    pyFiles?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Queue settings for the job
     */
    queueSettings?: pulumi.Input<QueueSettingsArgs | undefined>;
    /**
     * Compute Resource configuration for the job.
     */
    resources?: pulumi.Input<SparkResourceConfigurationArgs | undefined>;
    /**
     * List of JobEndpoints.
     * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
     */
    services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * sparkJobArgsProvideDefaults sets the appropriate defaults for SparkJobArgs
 */
export function sparkJobArgsProvideDefaults(val: SparkJobArgs): SparkJobArgs {
    return {
        ...val,
        experimentName: (val.experimentName) ?? "Default",
        isArchived: (val.isArchived) ?? false,
        queueSettings: pulumi.output(val.queueSettings).apply(v => v === undefined ? undefined : queueSettingsArgsProvideDefaults(v)),
        resources: pulumi.output(val.resources).apply(v => v === undefined ? undefined : sparkResourceConfigurationArgsProvideDefaults(v)),
    };
}

export interface SparkJobPythonEntryArgs {
    /**
     * [Required] Relative python file path for job entry point.
     */
    file: pulumi.Input<string>;
    /**
     * Expected value is 'SparkJobPythonEntry'.
     */
    sparkJobEntryType: pulumi.Input<"SparkJobPythonEntry">;
}

export interface SparkJobScalaEntryArgs {
    /**
     * [Required] Scala class name used as entry point.
     */
    className: pulumi.Input<string>;
    /**
     * Expected value is 'SparkJobScalaEntry'.
     */
    sparkJobEntryType: pulumi.Input<"SparkJobScalaEntry">;
}

export interface SparkResourceConfigurationArgs {
    /**
     * Optional type of VM used as supported by the compute target.
     */
    instanceType?: pulumi.Input<string | undefined>;
    /**
     * Version of spark runtime used for the job.
     */
    runtimeVersion?: pulumi.Input<string | undefined>;
}
/**
 * sparkResourceConfigurationArgsProvideDefaults sets the appropriate defaults for SparkResourceConfigurationArgs
 */
export function sparkResourceConfigurationArgsProvideDefaults(val: SparkResourceConfigurationArgs): SparkResourceConfigurationArgs {
    return {
        ...val,
        runtimeVersion: (val.runtimeVersion) ?? "3.1",
    };
}

export interface SpeechEndpointDeploymentResourcePropertiesArgs {
    /**
     * The failure reason if the creation failed.
     */
    failureReason?: pulumi.Input<string | undefined>;
    /**
     * Model used for the endpoint deployment.
     */
    model: pulumi.Input<EndpointDeploymentModelArgs>;
    /**
     * The name of RAI policy.
     */
    raiPolicyName?: pulumi.Input<string | undefined>;
    sku?: pulumi.Input<CognitiveServicesSkuArgs | undefined>;
    /**
     * Kind of the deployment.
     * Expected value is 'Azure.Speech'.
     */
    type: pulumi.Input<"Azure.Speech">;
    /**
     * Deployment model version upgrade option.
     */
    versionUpgradeOption?: pulumi.Input<string | enums.DeploymentModelVersionUpgradeOption | undefined>;
}

/**
 * The ssl configuration for scoring
 */
export interface SslConfigurationArgs {
    /**
     * Cert data
     */
    cert?: pulumi.Input<string | undefined>;
    /**
     * CNAME of the cert
     */
    cname?: pulumi.Input<string | undefined>;
    /**
     * Key data
     */
    key?: pulumi.Input<string | undefined>;
    /**
     * Leaf domain label of public endpoint
     */
    leafDomainLabel?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether to overwrite existing domain label.
     */
    overwriteExistingDomain?: pulumi.Input<boolean | undefined>;
    /**
     * Enable or disable ssl for scoring
     */
    status?: pulumi.Input<string | enums.SslConfigStatus | undefined>;
}

/**
 * Advances setting to customize StackEnsemble run.
 */
export interface StackEnsembleSettingsArgs {
    /**
     * Optional parameters to pass to the initializer of the meta-learner.
     */
    stackMetaLearnerKWargs?: any | undefined;
    /**
     * Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2.
     */
    stackMetaLearnerTrainPercentage?: pulumi.Input<number | undefined>;
    /**
     * The meta-learner is a model trained on the output of the individual heterogeneous models.\r\nDefault meta-learners are LogisticRegression for classification tasks (or LogisticRegressionCV if cross-validation is enabled) and ElasticNet for regression/forecasting tasks (or ElasticNetCV if cross-validation is enabled).\r\nThis parameter can be one of the following strings: LogisticRegression, LogisticRegressionCV, LightGBMClassifier, ElasticNet, ElasticNetCV, LightGBMRegressor, or LinearRegression
     */
    stackMetaLearnerType?: pulumi.Input<string | enums.StackMetaLearnerType | undefined>;
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
 * Static input data definition.
 */
export interface StaticInputDataArgs {
    /**
     * Mapping of column names to special uses.
     */
    columns?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The context metadata of the data source.
     */
    dataContext?: pulumi.Input<string | undefined>;
    /**
     * Monitoring input data type enum.
     * Expected value is 'Static'.
     */
    inputDataType: pulumi.Input<"Static">;
    /**
     * [Required] Specifies the type of job.
     */
    jobInputType: pulumi.Input<string | enums.JobInputType>;
    /**
     * Reference to the component asset used to preprocess the data.
     */
    preprocessingComponentId?: pulumi.Input<string | undefined>;
    /**
     * [Required] Input Asset URI.
     */
    uri: pulumi.Input<string>;
    /**
     * [Required] The end date of the data window.
     */
    windowEnd: pulumi.Input<string>;
    /**
     * [Required] The start date of the data window.
     */
    windowStart: pulumi.Input<string>;
}

/**
 * Details of storage account to be used for the Registry
 */
export interface StorageAccountDetailsArgs {
    /**
     * Details of system created storage account to be used for the registry
     */
    systemCreatedStorageAccount?: pulumi.Input<SystemCreatedStorageAccountArgs | undefined>;
}

export interface StringStringKeyValuePairArgs {
    key?: pulumi.Input<string | undefined>;
    value?: pulumi.Input<string | undefined>;
}

/**
 * Sweep job definition.
 */
export interface SweepJobArgs {
    /**
     * ARM resource ID of the component resource.
     */
    componentId?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of the compute resource.
     */
    computeId?: pulumi.Input<string | undefined>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Display name of job.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Early termination policies enable canceling poor-performing runs before they complete
     */
    earlyTermination?: pulumi.Input<BanditPolicyArgs | MedianStoppingPolicyArgs | TruncationSelectionPolicyArgs | undefined>;
    /**
     * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
     */
    experimentName?: pulumi.Input<string | undefined>;
    /**
     * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.
     * Defaults to AmlToken if null.
     */
    identity?: pulumi.Input<AmlTokenArgs | ManagedIdentityArgs | UserIdentityArgs | undefined>;
    /**
     * Mapping of input data bindings used in the job.
     */
    inputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobInputArgs | LiteralJobInputArgs | MLFlowModelJobInputArgs | MLTableJobInputArgs | TritonModelJobInputArgs | UriFileJobInputArgs | UriFolderJobInputArgs>} | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * Enum to determine the type of job.
     * Expected value is 'Sweep'.
     */
    jobType: pulumi.Input<"Sweep">;
    /**
     * Sweep Job limit.
     */
    limits?: pulumi.Input<SweepJobLimitsArgs | undefined>;
    /**
     * Notification setting for the job
     */
    notificationSetting?: pulumi.Input<NotificationSettingArgs | undefined>;
    /**
     * [Required] Optimization objective.
     */
    objective: pulumi.Input<ObjectiveArgs>;
    /**
     * Mapping of output data bindings used in the job.
     */
    outputs?: pulumi.Input<{[key: string]: pulumi.Input<CustomModelJobOutputArgs | MLFlowModelJobOutputArgs | MLTableJobOutputArgs | TritonModelJobOutputArgs | UriFileJobOutputArgs | UriFolderJobOutputArgs>} | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Queue settings for the job
     */
    queueSettings?: pulumi.Input<QueueSettingsArgs | undefined>;
    /**
     * [Required] The hyperparameter sampling algorithm
     */
    samplingAlgorithm: pulumi.Input<BayesianSamplingAlgorithmArgs | GridSamplingAlgorithmArgs | RandomSamplingAlgorithmArgs>;
    /**
     * [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
     */
    searchSpace: any;
    /**
     * List of JobEndpoints.
     * For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
     */
    services?: pulumi.Input<{[key: string]: pulumi.Input<JobServiceArgs>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
        queueSettings: pulumi.output(val.queueSettings).apply(v => v === undefined ? undefined : queueSettingsArgsProvideDefaults(v)),
        trial: pulumi.output(val.trial).apply(trialComponentArgsProvideDefaults),
    };
}

/**
 * Sweep Job limit class.
 */
export interface SweepJobLimitsArgs {
    /**
     * Expected value is 'Sweep'.
     */
    jobLimitsType: pulumi.Input<"Sweep">;
    /**
     * Sweep Job max concurrent trials.
     */
    maxConcurrentTrials?: pulumi.Input<number | undefined>;
    /**
     * Sweep Job max total trials.
     */
    maxTotalTrials?: pulumi.Input<number | undefined>;
    /**
     * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
     */
    timeout?: pulumi.Input<string | undefined>;
    /**
     * Sweep Job Trial timeout value.
     */
    trialTimeout?: pulumi.Input<string | undefined>;
}

/**
 * A SynapseSpark compute.
 */
export interface SynapseSparkArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'SynapseSpark'.
     */
    computeType: pulumi.Input<"SynapseSpark">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    properties?: pulumi.Input<SynapseSparkPropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}

export interface SynapseSparkPropertiesArgs {
    /**
     * Auto pause properties.
     */
    autoPauseProperties?: pulumi.Input<AutoPausePropertiesArgs | undefined>;
    /**
     * Auto scale properties.
     */
    autoScaleProperties?: pulumi.Input<AutoScalePropertiesArgs | undefined>;
    /**
     * The number of compute nodes currently assigned to the compute.
     */
    nodeCount?: pulumi.Input<number | undefined>;
    /**
     * Node size.
     */
    nodeSize?: pulumi.Input<string | undefined>;
    /**
     * Node size family.
     */
    nodeSizeFamily?: pulumi.Input<string | undefined>;
    /**
     * Pool name.
     */
    poolName?: pulumi.Input<string | undefined>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroup?: pulumi.Input<string | undefined>;
    /**
     * Spark version.
     */
    sparkVersion?: pulumi.Input<string | undefined>;
    /**
     * Azure subscription identifier.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName?: pulumi.Input<string | undefined>;
}

export interface SystemCreatedAcrAccountArgs {
    /**
     * Name of the ACR account
     */
    acrAccountName?: pulumi.Input<string | undefined>;
    /**
     * SKU of the ACR account
     */
    acrAccountSku?: pulumi.Input<string | undefined>;
    /**
     * This is populated once the ACR account is created.
     */
    armResourceId?: pulumi.Input<ArmResourceIdArgs | undefined>;
}

export interface SystemCreatedStorageAccountArgs {
    /**
     * Public blob access allowed
     */
    allowBlobPublicAccess?: pulumi.Input<boolean | undefined>;
    /**
     * This is populated once the storage account is created.
     */
    armResourceId?: pulumi.Input<ArmResourceIdArgs | undefined>;
    /**
     * HNS enabled for storage account
     */
    storageAccountHnsEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Name of the storage account
     */
    storageAccountName?: pulumi.Input<string | undefined>;
    /**
     * Allowed values:
     * "Standard_LRS",
     * "Standard_GRS",
     * "Standard_RAGRS",
     * "Standard_ZRS",
     * "Standard_GZRS",
     * "Standard_RAGZRS",
     * "Premium_LRS",
     * "Premium_ZRS"
     */
    storageAccountType?: pulumi.Input<string | undefined>;
}

/**
 * Featurization Configuration.
 */
export interface TableVerticalFeaturizationSettingsArgs {
    /**
     * These transformers shall not be used in featurization.
     */
    blockedTransformers?: pulumi.Input<pulumi.Input<string | enums.BlockedTransformers>[] | undefined>;
    /**
     * Dictionary of column name and its type (int, float, string, datetime etc).
     */
    columnNameAndTypes?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Dataset language, useful for the text data.
     */
    datasetLanguage?: pulumi.Input<string | undefined>;
    /**
     * Determines whether to use Dnn based featurizers for data featurization.
     */
    enableDnnFeaturization?: pulumi.Input<boolean | undefined>;
    /**
     * Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.
     * If 'Off' is selected then no featurization is done.
     * If 'Custom' is selected then user can specify additional inputs to customize how featurization is done.
     */
    mode?: pulumi.Input<string | enums.FeaturizationMode | undefined>;
    /**
     * User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor.
     */
    transformerParams?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<ColumnTransformerArgs>[]>} | undefined>;
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
    enableEarlyTermination?: pulumi.Input<boolean | undefined>;
    /**
     * Exit score for the AutoML job.
     */
    exitScore?: pulumi.Input<number | undefined>;
    /**
     * Maximum Concurrent iterations.
     */
    maxConcurrentTrials?: pulumi.Input<number | undefined>;
    /**
     * Max cores per iteration.
     */
    maxCoresPerTrial?: pulumi.Input<number | undefined>;
    /**
     * Number of iterations.
     */
    maxTrials?: pulumi.Input<number | undefined>;
    /**
     * AutoML job timeout.
     */
    timeout?: pulumi.Input<string | undefined>;
    /**
     * Iteration timeout.
     */
    trialTimeout?: pulumi.Input<string | undefined>;
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

export interface TargetUtilizationScaleSettingsArgs {
    /**
     * The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances.
     */
    maxInstances?: pulumi.Input<number | undefined>;
    /**
     * The minimum number of instances to always be present.
     */
    minInstances?: pulumi.Input<number | undefined>;
    /**
     * The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
     */
    pollingInterval?: pulumi.Input<string | undefined>;
    /**
     * Expected value is 'TargetUtilization'.
     */
    scaleType: pulumi.Input<"TargetUtilization">;
    /**
     * Target CPU usage for the autoscaler.
     */
    targetUtilizationPercentage?: pulumi.Input<number | undefined>;
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
    parameterServerCount?: pulumi.Input<number | undefined>;
    /**
     * Number of workers. If not specified, will default to the instance count.
     */
    workerCount?: pulumi.Input<number | undefined>;
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
 * Text Classification task in AutoML NLP vertical.
 * NLP - Natural Language Processing.
 */
export interface TextClassificationArgs {
    /**
     * Featurization inputs needed for AutoML job.
     */
    featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs | undefined>;
    /**
     * Execution constraints for AutoMLJob.
     */
    limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs | undefined>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Primary metrics for classification tasks.
     */
    primaryMetric?: pulumi.Input<string | enums.ClassificationPrimaryMetrics | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'TextClassification'.
     */
    taskType: pulumi.Input<"TextClassification">;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
}
/**
 * textClassificationArgsProvideDefaults sets the appropriate defaults for TextClassificationArgs
 */
export function textClassificationArgsProvideDefaults(val: TextClassificationArgs): TextClassificationArgs {
    return {
        ...val,
        limitSettings: pulumi.output(val.limitSettings).apply(v => v === undefined ? undefined : nlpVerticalLimitSettingsArgsProvideDefaults(v)),
        logVerbosity: (val.logVerbosity) ?? "Info",
        primaryMetric: (val.primaryMetric) ?? "Accuracy",
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

/**
 * Text Classification Multilabel task in AutoML NLP vertical.
 * NLP - Natural Language Processing.
 */
export interface TextClassificationMultilabelArgs {
    /**
     * Featurization inputs needed for AutoML job.
     */
    featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs | undefined>;
    /**
     * Execution constraints for AutoMLJob.
     */
    limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs | undefined>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'TextClassificationMultilabel'.
     */
    taskType: pulumi.Input<"TextClassificationMultilabel">;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
}
/**
 * textClassificationMultilabelArgsProvideDefaults sets the appropriate defaults for TextClassificationMultilabelArgs
 */
export function textClassificationMultilabelArgsProvideDefaults(val: TextClassificationMultilabelArgs): TextClassificationMultilabelArgs {
    return {
        ...val,
        limitSettings: pulumi.output(val.limitSettings).apply(v => v === undefined ? undefined : nlpVerticalLimitSettingsArgsProvideDefaults(v)),
        logVerbosity: (val.logVerbosity) ?? "Info",
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

/**
 * Text-NER task in AutoML NLP vertical.
 * NER - Named Entity Recognition.
 * NLP - Natural Language Processing.
 */
export interface TextNerArgs {
    /**
     * Featurization inputs needed for AutoML job.
     */
    featurizationSettings?: pulumi.Input<NlpVerticalFeaturizationSettingsArgs | undefined>;
    /**
     * Execution constraints for AutoMLJob.
     */
    limitSettings?: pulumi.Input<NlpVerticalLimitSettingsArgs | undefined>;
    /**
     * Enum for setting log verbosity.
     */
    logVerbosity?: pulumi.Input<string | enums.LogVerbosity | undefined>;
    /**
     * Target column name: This is prediction values column.
     * Also known as label column name in context of classification tasks.
     */
    targetColumnName?: pulumi.Input<string | undefined>;
    /**
     * AutoMLJob Task type.
     * Expected value is 'TextNER'.
     */
    taskType: pulumi.Input<"TextNER">;
    /**
     * [Required] Training data input.
     */
    trainingData: pulumi.Input<MLTableJobInputArgs>;
    /**
     * Validation data inputs.
     */
    validationData?: pulumi.Input<MLTableJobInputArgs | undefined>;
}
/**
 * textNerArgsProvideDefaults sets the appropriate defaults for TextNerArgs
 */
export function textNerArgsProvideDefaults(val: TextNerArgs): TextNerArgs {
    return {
        ...val,
        limitSettings: pulumi.output(val.limitSettings).apply(v => v === undefined ? undefined : nlpVerticalLimitSettingsArgsProvideDefaults(v)),
        logVerbosity: (val.logVerbosity) ?? "Info",
        trainingData: pulumi.output(val.trainingData).apply(mltableJobInputArgsProvideDefaults),
        validationData: pulumi.output(val.validationData).apply(v => v === undefined ? undefined : mltableJobInputArgsProvideDefaults(v)),
    };
}

export interface TmpfsOptionsArgs {
    /**
     * Mention the Tmpfs size
     */
    size?: pulumi.Input<number | undefined>;
}

export interface TopNFeaturesByAttributionArgs {
    /**
     * Expected value is 'TopNByAttribution'.
     */
    filterType: pulumi.Input<"TopNByAttribution">;
    /**
     * The number of top features to include.
     */
    top?: pulumi.Input<number | undefined>;
}
/**
 * topNFeaturesByAttributionArgsProvideDefaults sets the appropriate defaults for TopNFeaturesByAttributionArgs
 */
export function topNFeaturesByAttributionArgsProvideDefaults(val: TopNFeaturesByAttributionArgs): TopNFeaturesByAttributionArgs {
    return {
        ...val,
        top: (val.top) ?? 10,
    };
}

/**
 * Trial component definition.
 */
export interface TrialComponentArgs {
    /**
     * ARM resource ID of the code asset.
     */
    codeId?: pulumi.Input<string | undefined>;
    /**
     * [Required] The command to execute on startup of the job. eg. "python train.py"
     */
    command: pulumi.Input<string>;
    /**
     * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
     */
    distribution?: pulumi.Input<MpiArgs | PyTorchArgs | TensorFlowArgs | undefined>;
    /**
     * [Required] The ARM resource ID of the Environment specification for the job.
     */
    environmentId: pulumi.Input<string>;
    /**
     * Environment variables included in the job.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Compute Resource configuration for the job.
     */
    resources?: pulumi.Input<JobResourceConfigurationArgs | undefined>;
}
/**
 * trialComponentArgsProvideDefaults sets the appropriate defaults for TrialComponentArgs
 */
export function trialComponentArgsProvideDefaults(val: TrialComponentArgs): TrialComponentArgs {
    return {
        ...val,
        resources: pulumi.output(val.resources).apply(v => v === undefined ? undefined : jobResourceConfigurationArgsProvideDefaults(v)),
    };
}

export interface TritonModelJobInputArgs {
    /**
     * Description for the input.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Input Type.
     * Expected value is 'triton_model'.
     */
    jobInputType: pulumi.Input<"triton_model">;
    /**
     * Enum to determine the input data delivery mode.
     */
    mode?: pulumi.Input<string | enums.InputDeliveryMode | undefined>;
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
     * Output Asset Name.
     */
    assetName?: pulumi.Input<string | undefined>;
    /**
     * Description for the output.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Output Type.
     * Expected value is 'triton_model'.
     */
    jobOutputType: pulumi.Input<"triton_model">;
    /**
     * Output data delivery mode enums.
     */
    mode?: pulumi.Input<string | enums.OutputDeliveryMode | undefined>;
    /**
     * Output Asset URI.
     */
    uri?: pulumi.Input<string | undefined>;
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
    delayEvaluation?: pulumi.Input<number | undefined>;
    /**
     * Interval (number of runs) between policy evaluations.
     */
    evaluationInterval?: pulumi.Input<number | undefined>;
    /**
     * Expected value is 'TruncationSelection'.
     */
    policyType: pulumi.Input<"TruncationSelection">;
    /**
     * The percentage of runs to cancel at each evaluation interval.
     */
    truncationPercentage?: pulumi.Input<number | undefined>;
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
     * Expected value is 'uri_file'.
     */
    dataType: pulumi.Input<"uri_file">;
    /**
     * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
     */
    dataUri: pulumi.Input<string>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Input Type.
     * Expected value is 'uri_file'.
     */
    jobInputType: pulumi.Input<"uri_file">;
    /**
     * Enum to determine the input data delivery mode.
     */
    mode?: pulumi.Input<string | enums.InputDeliveryMode | undefined>;
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
     * Output Asset Name.
     */
    assetName?: pulumi.Input<string | undefined>;
    /**
     * Description for the output.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Output Type.
     * Expected value is 'uri_file'.
     */
    jobOutputType: pulumi.Input<"uri_file">;
    /**
     * Output data delivery mode enums.
     */
    mode?: pulumi.Input<string | enums.OutputDeliveryMode | undefined>;
    /**
     * Output Asset URI.
     */
    uri?: pulumi.Input<string | undefined>;
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
     * Expected value is 'uri_folder'.
     */
    dataType: pulumi.Input<"uri_folder">;
    /**
     * [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330
     */
    dataUri: pulumi.Input<string>;
    /**
     * The asset description text.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * If the name version are system generated (anonymous registration).
     */
    isAnonymous?: pulumi.Input<boolean | undefined>;
    /**
     * Is the asset archived?
     */
    isArchived?: pulumi.Input<boolean | undefined>;
    /**
     * The asset property dictionary.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Tag dictionary. Tags can be added, removed, and updated.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Input Type.
     * Expected value is 'uri_folder'.
     */
    jobInputType: pulumi.Input<"uri_folder">;
    /**
     * Enum to determine the input data delivery mode.
     */
    mode?: pulumi.Input<string | enums.InputDeliveryMode | undefined>;
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
     * Output Asset Name.
     */
    assetName?: pulumi.Input<string | undefined>;
    /**
     * Description for the output.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Enum to determine the Job Output Type.
     * Expected value is 'uri_folder'.
     */
    jobOutputType: pulumi.Input<"uri_folder">;
    /**
     * Output data delivery mode enums.
     */
    mode?: pulumi.Input<string | enums.OutputDeliveryMode | undefined>;
    /**
     * Output Asset URI.
     */
    uri?: pulumi.Input<string | undefined>;
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
 * Settings for user account that gets created on each on the nodes of a compute.
 */
export interface UserAccountCredentialsArgs {
    /**
     * Name of the administrator user account which can be used to SSH to nodes.
     */
    adminUserName: pulumi.Input<string>;
    /**
     * Password of the administrator user account.
     */
    adminUserPassword?: pulumi.Input<string | undefined>;
    /**
     * SSH public key of the administrator user account.
     */
    adminUserSshPublicKey?: pulumi.Input<string | undefined>;
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

export interface UsernamePasswordAuthTypeWorkspaceConnectionPropertiesArgs {
    /**
     * Authentication type of the connection target
     * Expected value is 'UsernamePassword'.
     */
    authType: pulumi.Input<"UsernamePassword">;
    /**
     * Category of the connection
     */
    category?: pulumi.Input<string | enums.ConnectionCategory | undefined>;
    credentials?: pulumi.Input<WorkspaceConnectionUsernamePasswordArgs | undefined>;
    error?: pulumi.Input<string | undefined>;
    expiryTime?: pulumi.Input<string | undefined>;
    isSharedToAll?: pulumi.Input<boolean | undefined>;
    /**
     * Store user metadata for this connection
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    peRequirement?: pulumi.Input<string | enums.ManagedPERequirement | undefined>;
    peStatus?: pulumi.Input<string | enums.ManagedPEStatus | undefined>;
    sharedUserList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    target?: pulumi.Input<string | undefined>;
    useWorkspaceManagedIdentity?: pulumi.Input<boolean | undefined>;
}

/**
 * A Machine Learning compute based on Azure Virtual Machines.
 */
export interface VirtualMachineArgs {
    /**
     * Location for the underlying compute
     */
    computeLocation?: pulumi.Input<string | undefined>;
    /**
     * The type of compute
     * Expected value is 'VirtualMachine'.
     */
    computeType: pulumi.Input<"VirtualMachine">;
    /**
     * The description of the Machine Learning compute.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
     */
    disableLocalAuth?: pulumi.Input<boolean | undefined>;
    properties?: pulumi.Input<VirtualMachineSchemaPropertiesArgs | undefined>;
    /**
     * ARM resource id of the underlying compute
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * Virtual Machine image for Windows AML Compute
 */
export interface VirtualMachineImageArgs {
    /**
     * Virtual Machine image path
     */
    id: pulumi.Input<string>;
}

export interface VirtualMachineSchemaPropertiesArgs {
    /**
     * Public IP address of the virtual machine.
     */
    address?: pulumi.Input<string | undefined>;
    /**
     * Admin credentials for virtual machine
     */
    administratorAccount?: pulumi.Input<VirtualMachineSshCredentialsArgs | undefined>;
    /**
     * Indicates whether this compute will be used for running notebooks.
     */
    isNotebookInstanceCompute?: pulumi.Input<boolean | undefined>;
    /**
     * Notebook server port open for ssh connections.
     */
    notebookServerPort?: pulumi.Input<number | undefined>;
    /**
     * Port open for ssh connections.
     */
    sshPort?: pulumi.Input<number | undefined>;
    /**
     * Virtual Machine size
     */
    virtualMachineSize?: pulumi.Input<string | undefined>;
}

/**
 * Admin credentials for virtual machine
 */
export interface VirtualMachineSshCredentialsArgs {
    /**
     * Password of admin account
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * Private key data
     */
    privateKeyData?: pulumi.Input<string | undefined>;
    /**
     * Public key data
     */
    publicKeyData?: pulumi.Input<string | undefined>;
    /**
     * Username of admin account
     */
    username?: pulumi.Input<string | undefined>;
}

export interface VolumeDefinitionArgs {
    /**
     * Bind Options of the mount
     */
    bind?: pulumi.Input<BindOptionsArgs | undefined>;
    /**
     * Consistency of the volume
     */
    consistency?: pulumi.Input<string | undefined>;
    /**
     * Indicate whether to mount volume as readOnly. Default value for this is false.
     */
    readOnly?: pulumi.Input<boolean | undefined>;
    /**
     * Source of the mount. For bind mounts this is the host path.
     */
    source?: pulumi.Input<string | undefined>;
    /**
     * Target of the mount. For bind mounts this is the path in the container.
     */
    target?: pulumi.Input<string | undefined>;
    /**
     * tmpfs option of the mount
     */
    tmpfs?: pulumi.Input<TmpfsOptionsArgs | undefined>;
    /**
     * Type of Volume Definition. Possible Values: bind,volume,tmpfs,npipe
     */
    type?: pulumi.Input<string | enums.VolumeDefinitionType | undefined>;
    /**
     * Volume Options of the mount
     */
    volume?: pulumi.Input<VolumeOptionsArgs | undefined>;
}
/**
 * volumeDefinitionArgsProvideDefaults sets the appropriate defaults for VolumeDefinitionArgs
 */
export function volumeDefinitionArgsProvideDefaults(val: VolumeDefinitionArgs): VolumeDefinitionArgs {
    return {
        ...val,
        type: (val.type) ?? "bind",
    };
}

export interface VolumeOptionsArgs {
    /**
     * Indicate whether volume is nocopy
     */
    nocopy?: pulumi.Input<boolean | undefined>;
}

export interface WorkspaceConnectionAccessKeyArgs {
    accessKeyId?: pulumi.Input<string | undefined>;
    secretAccessKey?: pulumi.Input<string | undefined>;
}

/**
 * Account key object for workspace connection credential.
 */
export interface WorkspaceConnectionAccountKeyArgs {
    key?: pulumi.Input<string | undefined>;
}

/**
 * Api key object for workspace connection credential.
 */
export interface WorkspaceConnectionApiKeyArgs {
    key?: pulumi.Input<string | undefined>;
}

export interface WorkspaceConnectionManagedIdentityArgs {
    clientId?: pulumi.Input<string | undefined>;
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * ClientId and ClientSecret are required. Other properties are optional
 * depending on each OAuth2 provider's implementation.
 */
export interface WorkspaceConnectionOAuth2Args {
    /**
     * Required by Concur connection category
     */
    authUrl?: pulumi.Input<string | undefined>;
    /**
     * Client id in the format of UUID
     */
    clientId?: pulumi.Input<string | undefined>;
    clientSecret?: pulumi.Input<string | undefined>;
    /**
     * Required by GoogleAdWords connection category
     */
    developerToken?: pulumi.Input<string | undefined>;
    password?: pulumi.Input<string | undefined>;
    /**
     * Required by GoogleBigQuery, GoogleAdWords, Hubspot, QuickBooks, Square, Xero, Zoho
     * where user needs to get RefreshToken offline
     */
    refreshToken?: pulumi.Input<string | undefined>;
    /**
     * Required by QuickBooks and Xero connection categories
     */
    tenantId?: pulumi.Input<string | undefined>;
    /**
     * Concur, ServiceNow auth server AccessToken grant type is 'Password'
     * which requires UsernamePassword
     */
    username?: pulumi.Input<string | undefined>;
}

export interface WorkspaceConnectionPersonalAccessTokenArgs {
    pat?: pulumi.Input<string | undefined>;
}

export interface WorkspaceConnectionServicePrincipalArgs {
    clientId?: pulumi.Input<string | undefined>;
    clientSecret?: pulumi.Input<string | undefined>;
    tenantId?: pulumi.Input<string | undefined>;
}

export interface WorkspaceConnectionSharedAccessSignatureArgs {
    sas?: pulumi.Input<string | undefined>;
}

export interface WorkspaceConnectionUsernamePasswordArgs {
    password?: pulumi.Input<string | undefined>;
    /**
     * Optional, required by connections like SalesForce for extra security in addition to UsernamePassword
     */
    securityToken?: pulumi.Input<string | undefined>;
    username?: pulumi.Input<string | undefined>;
}

/**
 * WorkspaceHub's configuration object.
 */
export interface WorkspaceHubConfigArgs {
    additionalWorkspaceStorageAccounts?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    defaultWorkspaceResourceGroup?: pulumi.Input<string | undefined>;
}
