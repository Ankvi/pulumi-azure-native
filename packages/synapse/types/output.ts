import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Auto-pausing properties of a Big Data pool powered by Apache Spark
 */
export interface AutoPausePropertiesResponse {
    /**
     * Number of minutes of idle time before the Big Data pool is automatically paused.
     */
    delayInMinutes?: number;
    /**
     * Whether auto-pausing is enabled for the Big Data pool.
     */
    enabled?: boolean;
}

/**
 * Auto-scaling properties of a Big Data pool powered by Apache Spark
 */
export interface AutoScalePropertiesResponse {
    /**
     * Whether automatic scaling is enabled for the Big Data pool.
     */
    enabled?: boolean;
    /**
     * The maximum number of nodes the Big Data pool can support.
     */
    maxNodeCount?: number;
    /**
     * The minimum number of nodes the Big Data pool can support.
     */
    minNodeCount?: number;
}

/**
 * Azure SKU definition.
 */
export interface AzureSkuResponse {
    /**
     * The number of instances of the cluster.
     */
    capacity?: number;
    /**
     * SKU name.
     */
    name: string;
    /**
     * SKU size.
     */
    size: string;
}

/**
 * The custom setup of running cmdkey commands.
 */
export interface CmdkeySetupResponse {
    /**
     * The password of data source access.
     */
    password: SecureStringResponse;
    /**
     * The server name of data source access.
     */
    targetName: any;
    /**
     * The type of custom setup.
     * Expected value is 'CmdkeySetup'.
     */
    type: "CmdkeySetup";
    /**
     * The user name of data source access.
     */
    userName: any;
}

/**
 * The custom setup of installing 3rd party components.
 */
export interface ComponentSetupResponse {
    /**
     * The name of the 3rd party component.
     */
    componentName: string;
    /**
     * The license key to activate the component.
     */
    licenseKey?: SecureStringResponse;
    /**
     * The type of custom setup.
     * Expected value is 'ComponentSetup'.
     */
    type: "ComponentSetup";
}

/**
 * Initial workspace AAD admin properties for a CSP subscription
 */
export interface CspWorkspaceAdminPropertiesResponse {
    /**
     * AAD object ID of initial workspace admin
     */
    initialWorkspaceAdminObjectId?: string;
}

/**
 * Details of the customer managed key associated with the workspace
 */
export interface CustomerManagedKeyDetailsResponse {
    /**
     * Key encryption key
     */
    kekIdentity?: KekIdentityPropertiesResponse;
    /**
     * The key object of the workspace
     */
    key?: WorkspaceKeyDetailsResponse;
    /**
     * The customer managed key status on the workspace
     */
    status: string;
}

/**
 * Details of the data lake storage account associated with the workspace
 */
export interface DataLakeStorageAccountDetailsResponse {
    /**
     * Account URL
     */
    accountUrl?: string;
    /**
     * Create managed private endpoint to this storage account or not
     */
    createManagedPrivateEndpoint?: boolean;
    /**
     * Filesystem name
     */
    filesystem?: string;
    /**
     * ARM resource Id of this storage account
     */
    resourceId?: string;
}

/**
 * A class that contains database statistics information.
 */
export interface DatabaseStatisticsResponse {
    /**
     * The database size - the total size of compressed data and index in bytes.
     */
    size?: number;
}

/**
 * Dynamic Executor Allocation Properties
 */
export interface DynamicExecutorAllocationResponse {
    /**
     * Indicates whether Dynamic Executor Allocation is enabled or not.
     */
    enabled?: boolean;
    /**
     * The maximum number of executors alloted
     */
    maxExecutors?: number;
    /**
     * The minimum number of executors alloted
     */
    minExecutors?: number;
}

/**
 * Details of the encryption associated with the workspace
 */
export interface EncryptionDetailsResponse {
    /**
     * Customer Managed Key Details
     */
    cmk?: CustomerManagedKeyDetailsResponse;
    /**
     * Double Encryption enabled
     */
    doubleEncryptionEnabled: boolean;
}

/**
 * The entity reference.
 */
export interface EntityReferenceResponse {
    /**
     * The name of this referenced entity.
     */
    referenceName?: string;
    /**
     * The type of this referenced entity.
     */
    type?: string;
}

/**
 * The custom setup of setting environment variable.
 */
export interface EnvironmentVariableSetupResponse {
    /**
     * The type of custom setup.
     * Expected value is 'EnvironmentVariableSetup'.
     */
    type: "EnvironmentVariableSetup";
    /**
     * The name of the environment variable.
     */
    variableName: string;
    /**
     * The value of the environment variable.
     */
    variableValue: string;
}

/**
 * A class representing follower database request.
 */
export interface FollowerDatabaseDefinitionResponse {
    /**
     * Resource name of the attached database configuration in the follower cluster.
     */
    attachedDatabaseConfigurationName: string;
    /**
     * The database name owned by this cluster that was followed. * in case following all databases.
     */
    databaseName: string;
    /**
     * Resource id of the cluster that follows a database owned by this cluster.
     */
    kustoPoolResourceId: string;
}

/**
 * The compute resource properties for managed integration runtime.
 */
export interface IntegrationRuntimeComputePropertiesResponse {
    /**
     * Data flow properties for managed integration runtime.
     */
    dataFlowProperties?: IntegrationRuntimeDataFlowPropertiesResponse;
    /**
     * The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
     */
    location?: string;
    /**
     * Maximum parallel executions count per node for managed integration runtime.
     */
    maxParallelExecutionsPerNode?: number;
    /**
     * The node size requirement to managed integration runtime.
     */
    nodeSize?: string;
    /**
     * The required number of nodes for managed integration runtime.
     */
    numberOfNodes?: number;
    /**
     * VNet properties for managed integration runtime.
     */
    vNetProperties?: IntegrationRuntimeVNetPropertiesResponse;
}

/**
 * Custom setup script properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeCustomSetupScriptPropertiesResponse {
    /**
     * The URI of the Azure blob container that contains the custom setup script.
     */
    blobContainerUri?: string;
    /**
     * The SAS token of the Azure blob container.
     */
    sasToken?: SecureStringResponse;
}

/**
 * The definition and properties of virtual network to which Azure-SSIS integration runtime will join.
 */
export interface IntegrationRuntimeCustomerVirtualNetworkResponse {
    /**
     * The ID of subnet to which Azure-SSIS integration runtime will join.
     */
    subnetId?: string;
}

/**
 * Data flow properties for managed integration runtime.
 */
export interface IntegrationRuntimeDataFlowPropertiesResponse {
    /**
     * Compute type of the cluster which will execute data flow job.
     */
    computeType?: string;
    /**
     * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
     */
    coreCount?: number;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job.
     */
    timeToLive?: number;
}

/**
 * Data proxy properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeDataProxyPropertiesResponse {
    /**
     * The self-hosted integration runtime reference.
     */
    connectVia?: EntityReferenceResponse;
    /**
     * The path to contain the staged data in the Blob storage.
     */
    path?: string;
    /**
     * The staging linked service reference.
     */
    stagingLinkedService?: EntityReferenceResponse;
}

/**
 * Catalog information for managed dedicated integration runtime.
 */
export interface IntegrationRuntimeSsisCatalogInfoResponse {
    /**
     * The password of the administrator user account of the catalog database.
     */
    catalogAdminPassword?: SecureStringResponse;
    /**
     * The administrator user name of catalog database.
     */
    catalogAdminUserName?: string;
    /**
     * The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
     */
    catalogPricingTier?: string;
    /**
     * The catalog database server URL.
     */
    catalogServerEndpoint?: string;
}

/**
 * SSIS properties for managed integration runtime.
 */
export interface IntegrationRuntimeSsisPropertiesResponse {
    /**
     * Catalog information for managed dedicated integration runtime.
     */
    catalogInfo?: IntegrationRuntimeSsisCatalogInfoResponse;
    /**
     * Custom setup script properties for a managed dedicated integration runtime.
     */
    customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptPropertiesResponse;
    /**
     * Data proxy properties for a managed dedicated integration runtime.
     */
    dataProxyProperties?: IntegrationRuntimeDataProxyPropertiesResponse;
    /**
     * The edition for the SSIS Integration Runtime
     */
    edition?: string;
    /**
     * Custom setup without script properties for a SSIS integration runtime.
     */
    expressCustomSetupProperties?: (CmdkeySetupResponse | ComponentSetupResponse | EnvironmentVariableSetupResponse)[];
    /**
     * License type for bringing your own license scenario.
     */
    licenseType?: string;
}

/**
 * VNet properties for managed integration runtime.
 */
export interface IntegrationRuntimeVNetPropertiesResponse {
    /**
     * Resource IDs of the public IP addresses that this integration runtime will use.
     */
    publicIPs?: string[];
    /**
     * The name of the subnet this integration runtime will join.
     */
    subnet?: string;
    /**
     * The ID of subnet, to which this Azure-SSIS integration runtime will be joined.
     */
    subnetId?: string;
    /**
     * The ID of the VNet that this integration runtime will join.
     */
    vNetId?: string;
}

/**
 * Key encryption key properties
 */
export interface KekIdentityPropertiesResponse {
    /**
     * Boolean specifying whether to use system assigned identity or not
     */
    useSystemAssignedIdentity?: any;
    /**
     * User assigned identity resource Id
     */
    userAssignedIdentity?: string;
}

/**
 * The language extension object.
 */
export interface LanguageExtensionResponse {
    /**
     * The language extension name.
     */
    languageExtensionName?: string;
}

/**
 * The list of language extension objects.
 */
export interface LanguageExtensionsListResponse {
    /**
     * The list of language extensions.
     */
    value?: LanguageExtensionResponse[];
}

/**
 * Library/package information of a Big Data pool powered by Apache Spark
 */
export interface LibraryInfoResponse {
    /**
     * Storage blob container name.
     */
    containerName?: string;
    /**
     * Creator Id of the library/package.
     */
    creatorId: string;
    /**
     * Name of the library.
     */
    name?: string;
    /**
     * Storage blob path of library.
     */
    path?: string;
    /**
     * Provisioning status of the library/package.
     */
    provisioningStatus: string;
    /**
     * Type of the library.
     */
    type?: string;
    /**
     * The last update time of the library.
     */
    uploadedTimestamp: string;
}

/**
 * Library requirements for a Big Data pool powered by Apache Spark
 */
export interface LibraryRequirementsResponse {
    /**
     * The library requirements.
     */
    content?: string;
    /**
     * The filename of the library requirements file.
     */
    filename?: string;
    /**
     * The last update time of the library requirements file.
     */
    time: string;
}

/**
 * The key authorization type integration runtime.
 */
export interface LinkedIntegrationRuntimeKeyAuthorizationResponse {
    /**
     * The authorization type for integration runtime sharing.
     * Expected value is 'Key'.
     */
    authorizationType: "Key";
    /**
     * The key used for authorization.
     */
    key: SecureStringResponse;
}

/**
 * The role based access control (RBAC) authorization type integration runtime.
 */
export interface LinkedIntegrationRuntimeRbacAuthorizationResponse {
    /**
     * The authorization type for integration runtime sharing.
     * Expected value is 'RBAC'.
     */
    authorizationType: "RBAC";
    /**
     * The resource identifier of the integration runtime to be shared.
     */
    resourceId: string;
}

/**
 * The linked integration runtime information.
 */
export interface LinkedIntegrationRuntimeResponse {
    /**
     * The creating time of the linked integration runtime.
     */
    createTime: string;
    /**
     * The location of the workspace for which the linked integration runtime belong to.
     */
    dataFactoryLocation: string;
    /**
     * The name of the workspace for which the linked integration runtime belong to.
     */
    dataFactoryName: string;
    /**
     * The name of the linked integration runtime.
     */
    name: string;
    /**
     * The subscription ID for which the linked integration runtime belong to.
     */
    subscriptionId: string;
}

/**
 * The workspace managed identity
 */
export interface ManagedIdentityResponse {
    /**
     * The principal ID of the workspace managed identity
     */
    principalId: string;
    /**
     * The tenant ID of the workspace managed identity
     */
    tenantId: string;
    /**
     * The type of managed identity for the workspace
     */
    type?: string;
    /**
     * The user assigned managed identities.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedManagedIdentityResponse};
}

/**
 * Error definition for managed integration runtime.
 */
export interface ManagedIntegrationRuntimeErrorResponse {
    /**
     * Error code.
     */
    code: string;
    /**
     * Error message.
     */
    message: string;
    /**
     * Managed integration runtime error parameters.
     */
    parameters: string[];
    /**
     * The time when the error occurred.
     */
    time: string;
}

/**
 * Properties of integration runtime node.
 */
export interface ManagedIntegrationRuntimeNodeResponse {
    /**
     * The errors that occurred on this integration runtime node.
     */
    errors?: ManagedIntegrationRuntimeErrorResponse[];
    /**
     * The managed integration runtime node id.
     */
    nodeId: string;
    /**
     * The managed integration runtime node status.
     */
    status: string;
}

/**
 * Properties of managed integration runtime operation result.
 */
export interface ManagedIntegrationRuntimeOperationResultResponse {
    /**
     * The activity id for the operation request.
     */
    activityId: string;
    /**
     * The error code.
     */
    errorCode: string;
    /**
     * Managed integration runtime error parameters.
     */
    parameters: string[];
    /**
     * The operation result.
     */
    result: string;
    /**
     * The start time of the operation.
     */
    startTime: string;
    /**
     * The operation type. Could be start or stop.
     */
    type: string;
}

/**
 * Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
 */
export interface ManagedIntegrationRuntimeResponse {
    /**
     * The compute resource for managed integration runtime.
     */
    computeProperties?: IntegrationRuntimeComputePropertiesResponse;
    /**
     * The name of virtual network to which Azure-SSIS integration runtime will join
     */
    customerVirtualNetwork?: IntegrationRuntimeCustomerVirtualNetworkResponse;
    /**
     * Integration runtime description.
     */
    description?: string;
    /**
     * The id of the managed virtual network.
     */
    id?: string;
    /**
     * Integration runtime state, only valid for managed dedicated integration runtime.
     */
    provisioningState: string;
    /**
     * The reference name of the managed virtual network
     */
    referenceName?: string;
    /**
     * SSIS properties for managed integration runtime.
     */
    ssisProperties?: IntegrationRuntimeSsisPropertiesResponse;
    /**
     * The type of integration runtime.
     * Expected value is 'Managed'.
     */
    type: "Managed";
}

/**
 * Managed integration runtime status.
 */
export interface ManagedIntegrationRuntimeStatusResponse {
    /**
     * The time at which the integration runtime was created, in ISO8601 format.
     */
    createTime: string;
    /**
     * The workspace name which the integration runtime belong to.
     */
    dataFactoryName: string;
    /**
     * The last operation result that occurred on this integration runtime.
     */
    lastOperation: ManagedIntegrationRuntimeOperationResultResponse;
    /**
     * The list of nodes for managed integration runtime.
     */
    nodes: ManagedIntegrationRuntimeNodeResponse[];
    /**
     * The errors that occurred on this integration runtime.
     */
    otherErrors: ManagedIntegrationRuntimeErrorResponse[];
    /**
     * The state of integration runtime.
     */
    state: string;
    /**
     * The type of integration runtime.
     * Expected value is 'Managed'.
     */
    type: "Managed";
}

/**
 * Managed Virtual Network Settings
 */
export interface ManagedVirtualNetworkSettingsResponse {
    /**
     * Allowed Aad Tenant Ids For Linking
     */
    allowedAadTenantIdsForLinking?: string[];
    /**
     * Linked Access Check On Target Resource
     */
    linkedAccessCheckOnTargetResource?: boolean;
    /**
     * Prevent Data Exfiltration
     */
    preventDataExfiltration?: boolean;
}

/**
 * A class that contains the optimized auto scale definition.
 */
export interface OptimizedAutoscaleResponse {
    /**
     * A boolean value that indicate if the optimized autoscale feature is enabled or not.
     */
    isEnabled: boolean;
    /**
     * Maximum allowed instances count.
     */
    maximum: number;
    /**
     * Minimum allowed instances count.
     */
    minimum: number;
    /**
     * The version of the template defined, for instance 1.
     */
    version: number;
}

/**
 * Private Endpoint Connection For Private Link Hub - Basic
 */
export interface PrivateEndpointConnectionForPrivateLinkHubBasicResponse {
    /**
     * identifier
     */
    id: string;
    /**
     * The private endpoint which the connection belongs to.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * Connection state of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    provisioningState: string;
}

/**
 * A private endpoint connection
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The private endpoint which the connection belongs to.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * Connection state of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Private endpoint details
 */
export interface PrivateEndpointResponse {
    /**
     * Resource id of the private endpoint.
     */
    id: string;
}

/**
 * Connection state details of the private endpoint
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * The actions required for private link service connection.
     */
    actionsRequired: string;
    /**
     * The private link service connection description.
     */
    description?: string;
    /**
     * The private link service connection status.
     */
    status?: string;
}

/**
 * Purview Configuration
 */
export interface PurviewConfigurationResponse {
    /**
     * Purview Resource ID
     */
    purviewResourceId?: string;
}

/**
 * Azure Synapse secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
 */
export interface SecureStringResponse {
    /**
     * Type of the secret.
     * Expected value is 'SecureString'.
     */
    type: "SecureString";
    /**
     * Value of secure string.
     */
    value: string;
}

/**
 * Properties of Self-hosted integration runtime node.
 */
export interface SelfHostedIntegrationRuntimeNodeResponse {
    /**
     * The integration runtime capabilities dictionary
     */
    capabilities: {[key: string]: string};
    /**
     * Maximum concurrent jobs on the integration runtime node.
     */
    concurrentJobsLimit: number;
    /**
     * The time at which the integration runtime will expire in ISO8601 format.
     */
    expiryTime: string;
    /**
     * URI for the host machine of the integration runtime.
     */
    hostServiceUri: string;
    /**
     * Indicates whether this node is the active dispatcher for integration runtime requests.
     */
    isActiveDispatcher: boolean;
    /**
     * The most recent time at which the integration runtime was connected in ISO8601 format.
     */
    lastConnectTime: string;
    /**
     * The last time for the integration runtime node update end.
     */
    lastEndUpdateTime: string;
    /**
     * The time the node last started up.
     */
    lastStartTime: string;
    /**
     * The last time for the integration runtime node update start.
     */
    lastStartUpdateTime: string;
    /**
     * The integration runtime node last stop time.
     */
    lastStopTime: string;
    /**
     * The result of the last integration runtime node update.
     */
    lastUpdateResult: string;
    /**
     * Machine name of the integration runtime node.
     */
    machineName: string;
    /**
     * The maximum concurrent jobs in this integration runtime.
     */
    maxConcurrentJobs: number;
    /**
     * Name of the integration runtime node.
     */
    nodeName: string;
    /**
     * The time at which the integration runtime node was registered in ISO8601 format.
     */
    registerTime: string;
    /**
     * Status of the integration runtime node.
     */
    status: string;
    /**
     * Version of the integration runtime node.
     */
    version: string;
    /**
     * Status of the integration runtime node version.
     */
    versionStatus: string;
}

/**
 * Self-hosted integration runtime.
 */
export interface SelfHostedIntegrationRuntimeResponse {
    /**
     * Integration runtime description.
     */
    description?: string;
    /**
     * Linked integration runtime type from data factory
     */
    linkedInfo?: LinkedIntegrationRuntimeKeyAuthorizationResponse | LinkedIntegrationRuntimeRbacAuthorizationResponse;
    /**
     * The type of integration runtime.
     * Expected value is 'SelfHosted'.
     */
    type: "SelfHosted";
}

/**
 * Self-hosted integration runtime status.
 */
export interface SelfHostedIntegrationRuntimeStatusResponse {
    /**
     * Whether Self-hosted integration runtime auto update has been turned on.
     */
    autoUpdate: string;
    /**
     * The estimated time when the self-hosted integration runtime will be updated.
     */
    autoUpdateETA: string;
    /**
     * Object with additional information about integration runtime capabilities.
     */
    capabilities: {[key: string]: string};
    /**
     * The time at which the integration runtime was created, in ISO8601 format.
     */
    createTime: string;
    /**
     * The workspace name which the integration runtime belong to.
     */
    dataFactoryName: string;
    /**
     * It is used to set the encryption mode for node-node communication channel (when more than 2 self-hosted integration runtime nodes exist).
     */
    internalChannelEncryption: string;
    /**
     * The latest version on download center.
     */
    latestVersion: string;
    /**
     * The list of linked integration runtimes that are created to share with this integration runtime.
     */
    links?: LinkedIntegrationRuntimeResponse[];
    /**
     * The local time zone offset in hours.
     */
    localTimeZoneOffset: string;
    /**
     * The node communication Channel encryption mode
     */
    nodeCommunicationChannelEncryptionMode: string;
    /**
     * The list of nodes for this integration runtime.
     */
    nodes?: SelfHostedIntegrationRuntimeNodeResponse[];
    /**
     * The version that the integration runtime is going to update to.
     */
    pushedVersion: string;
    /**
     * The date at which the integration runtime will be scheduled to update, in ISO8601 format.
     */
    scheduledUpdateDate: string;
    /**
     * The URLs for the services used in integration runtime backend service.
     */
    serviceUrls: string[];
    /**
     * The state of integration runtime.
     */
    state: string;
    /**
     * The task queue id of the integration runtime.
     */
    taskQueueId: string;
    /**
     * The type of integration runtime.
     * Expected value is 'SelfHosted'.
     */
    type: "SelfHosted";
    /**
     * The time in the date scheduled by service to update the integration runtime, e.g., PT03H is 3 hours
     */
    updateDelayOffset: string;
    /**
     * Version of the integration runtime.
     */
    version: string;
    /**
     * Status of the integration runtime version.
     */
    versionStatus: string;
}

/**
 * SQL pool SKU
 */
export interface SkuResponse {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * The SKU name
     */
    name?: string;
    /**
     * The service tier
     */
    tier?: string;
}

/**
 * SparkConfig Properties for a Big Data pool powered by Apache Spark
 */
export interface SparkConfigPropertiesResponse {
    /**
     * The type of the spark config properties file.
     */
    configurationType?: string;
    /**
     * The spark config properties.
     */
    content?: string;
    /**
     * The filename of the spark config properties file.
     */
    filename?: string;
    /**
     * The last update time of the spark config properties file.
     */
    time: string;
}

/**
 * Properties for an Sql pool vulnerability assessment rule baseline's result.
 */
export interface SqlPoolVulnerabilityAssessmentRuleBaselineItemResponse {
    /**
     * The rule baseline result
     */
    result: string[];
}

/**
 * Ssis environment reference.
 */
export interface SsisEnvironmentReferenceResponse {
    /**
     * Environment folder name.
     */
    environmentFolderName?: string;
    /**
     * Environment name.
     */
    environmentName?: string;
    /**
     * Environment reference id.
     */
    id?: number;
    /**
     * Reference type
     */
    referenceType?: string;
}

/**
 * Ssis environment.
 */
export interface SsisEnvironmentResponse {
    /**
     * Metadata description.
     */
    description?: string;
    /**
     * Folder id which contains environment.
     */
    folderId?: number;
    /**
     * Metadata id.
     */
    id?: number;
    /**
     * Metadata name.
     */
    name?: string;
    /**
     * The type of SSIS object metadata.
     * Expected value is 'Environment'.
     */
    type: "Environment";
    /**
     * Variable in environment
     */
    variables?: SsisVariableResponse[];
}

/**
 * Ssis folder.
 */
export interface SsisFolderResponse {
    /**
     * Metadata description.
     */
    description?: string;
    /**
     * Metadata id.
     */
    id?: number;
    /**
     * Metadata name.
     */
    name?: string;
    /**
     * The type of SSIS object metadata.
     * Expected value is 'Folder'.
     */
    type: "Folder";
}

/**
 * Ssis Package.
 */
export interface SsisPackageResponse {
    /**
     * Metadata description.
     */
    description?: string;
    /**
     * Folder id which contains package.
     */
    folderId?: number;
    /**
     * Metadata id.
     */
    id?: number;
    /**
     * Metadata name.
     */
    name?: string;
    /**
     * Parameters in package
     */
    parameters?: SsisParameterResponse[];
    /**
     * Project id which contains package.
     */
    projectId?: number;
    /**
     * Project version which contains package.
     */
    projectVersion?: number;
    /**
     * The type of SSIS object metadata.
     * Expected value is 'Package'.
     */
    type: "Package";
}

/**
 * Ssis parameter.
 */
export interface SsisParameterResponse {
    /**
     * Parameter type.
     */
    dataType?: string;
    /**
     * Default value of parameter.
     */
    defaultValue?: string;
    /**
     * Parameter description.
     */
    description?: string;
    /**
     * Design default value of parameter.
     */
    designDefaultValue?: string;
    /**
     * Parameter id.
     */
    id?: number;
    /**
     * Parameter name.
     */
    name?: string;
    /**
     * Whether parameter is required.
     */
    required?: boolean;
    /**
     * Whether parameter is sensitive.
     */
    sensitive?: boolean;
    /**
     * Default sensitive value of parameter.
     */
    sensitiveDefaultValue?: string;
    /**
     * Parameter value set.
     */
    valueSet?: boolean;
    /**
     * Parameter value type.
     */
    valueType?: string;
    /**
     * Parameter reference variable.
     */
    variable?: string;
}

/**
 * Ssis project.
 */
export interface SsisProjectResponse {
    /**
     * Metadata description.
     */
    description?: string;
    /**
     * Environment reference in project
     */
    environmentRefs?: SsisEnvironmentReferenceResponse[];
    /**
     * Folder id which contains project.
     */
    folderId?: number;
    /**
     * Metadata id.
     */
    id?: number;
    /**
     * Metadata name.
     */
    name?: string;
    /**
     * Parameters in project
     */
    parameters?: SsisParameterResponse[];
    /**
     * The type of SSIS object metadata.
     * Expected value is 'Project'.
     */
    type: "Project";
    /**
     * Project version.
     */
    version?: number;
}

/**
 * Ssis variable.
 */
export interface SsisVariableResponse {
    /**
     * Variable type.
     */
    dataType?: string;
    /**
     * Variable description.
     */
    description?: string;
    /**
     * Variable id.
     */
    id?: number;
    /**
     * Variable name.
     */
    name?: string;
    /**
     * Whether variable is sensitive.
     */
    sensitive?: boolean;
    /**
     * Variable sensitive value.
     */
    sensitiveValue?: string;
    /**
     * Variable value.
     */
    value?: string;
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
 * Tables that will be included and excluded in the follower database
 */
export interface TableLevelSharingPropertiesResponse {
    /**
     * List of external tables exclude from the follower database
     */
    externalTablesToExclude?: string[];
    /**
     * List of external tables to include in the follower database
     */
    externalTablesToInclude?: string[];
    /**
     * List of materialized views exclude from the follower database
     */
    materializedViewsToExclude?: string[];
    /**
     * List of materialized views to include in the follower database
     */
    materializedViewsToInclude?: string[];
    /**
     * List of tables to exclude from the follower database
     */
    tablesToExclude?: string[];
    /**
     * List of tables to include in the follower database
     */
    tablesToInclude?: string[];
}

/**
 * User Assigned Managed Identity
 */
export interface UserAssignedManagedIdentityResponse {
    /**
     * The client ID.
     */
    clientId: string;
    /**
     * The principal ID.
     */
    principalId: string;
}

/**
 * Virtual Network Profile
 */
export interface VirtualNetworkProfileResponse {
    /**
     * Subnet ID used for computes in workspace
     */
    computeSubnetId?: string;
}

/**
 * Properties of a Vulnerability Assessment recurring scans.
 */
export interface VulnerabilityAssessmentRecurringScansPropertiesResponse {
    /**
     * Specifies that the schedule scan notification will be is sent to the subscription administrators.
     */
    emailSubscriptionAdmins?: boolean;
    /**
     * Specifies an array of e-mail addresses to which the scan notification is sent.
     */
    emails?: string[];
    /**
     * Recurring scans state.
     */
    isEnabled?: boolean;
}
/**
 * vulnerabilityAssessmentRecurringScansPropertiesResponseProvideDefaults sets the appropriate defaults for VulnerabilityAssessmentRecurringScansPropertiesResponse
 */
export function vulnerabilityAssessmentRecurringScansPropertiesResponseProvideDefaults(val: VulnerabilityAssessmentRecurringScansPropertiesResponse): VulnerabilityAssessmentRecurringScansPropertiesResponse {
    return {
        ...val,
        emailSubscriptionAdmins: (val.emailSubscriptionAdmins) ?? true,
    };
}

/**
 * Details of the customer managed key associated with the workspace
 */
export interface WorkspaceKeyDetailsResponse {
    /**
     * Workspace Key sub-resource key vault url
     */
    keyVaultUrl?: string;
    /**
     * Workspace Key sub-resource name
     */
    name?: string;
}

/**
 * Git integration settings
 */
export interface WorkspaceRepositoryConfigurationResponse {
    /**
     * Account name
     */
    accountName?: string;
    /**
     * Collaboration branch
     */
    collaborationBranch?: string;
    /**
     * GitHub Enterprise host name. For example: `https://github.mydomain.com`
     */
    hostName?: string;
    /**
     * The last commit ID
     */
    lastCommitId?: string;
    /**
     * VSTS project name
     */
    projectName?: string;
    /**
     * Repository name
     */
    repositoryName?: string;
    /**
     * Root folder to use in the repository
     */
    rootFolder?: string;
    /**
     * The VSTS tenant ID
     */
    tenantId?: string;
    /**
     * Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration
     */
    type?: string;
}
