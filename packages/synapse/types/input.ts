import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Auto-pausing properties of a Big Data pool powered by Apache Spark
 */
export interface AutoPausePropertiesArgs {
    /**
     * Number of minutes of idle time before the Big Data pool is automatically paused.
     */
    delayInMinutes?: pulumi.Input<number>;
    /**
     * Whether auto-pausing is enabled for the Big Data pool.
     */
    enabled?: pulumi.Input<boolean>;
}

/**
 * Auto-scaling properties of a Big Data pool powered by Apache Spark
 */
export interface AutoScalePropertiesArgs {
    /**
     * Whether automatic scaling is enabled for the Big Data pool.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The maximum number of nodes the Big Data pool can support.
     */
    maxNodeCount?: pulumi.Input<number>;
    /**
     * The minimum number of nodes the Big Data pool can support.
     */
    minNodeCount?: pulumi.Input<number>;
}

/**
 * Azure SKU definition.
 */
export interface AzureSkuArgs {
    /**
     * The number of instances of the cluster.
     */
    capacity?: pulumi.Input<number>;
    /**
     * SKU name.
     */
    name: pulumi.Input<string | enums.SkuName>;
    /**
     * SKU size.
     */
    size: pulumi.Input<string | enums.SkuSize>;
}

/**
 * The custom setup of running cmdkey commands.
 */
export interface CmdkeySetupArgs {
    /**
     * The password of data source access.
     */
    password: pulumi.Input<SecureStringArgs>;
    /**
     * The server name of data source access.
     */
    targetName: any;
    /**
     * The type of custom setup.
     * Expected value is 'CmdkeySetup'.
     */
    type: pulumi.Input<"CmdkeySetup">;
    /**
     * The user name of data source access.
     */
    userName: any;
}

/**
 * The custom setup of installing 3rd party components.
 */
export interface ComponentSetupArgs {
    /**
     * The name of the 3rd party component.
     */
    componentName: pulumi.Input<string>;
    /**
     * The license key to activate the component.
     */
    licenseKey?: pulumi.Input<SecureStringArgs>;
    /**
     * The type of custom setup.
     * Expected value is 'ComponentSetup'.
     */
    type: pulumi.Input<"ComponentSetup">;
}

/**
 * Initial workspace AAD admin properties for a CSP subscription
 */
export interface CspWorkspaceAdminPropertiesArgs {
    /**
     * AAD object ID of initial workspace admin
     */
    initialWorkspaceAdminObjectId?: pulumi.Input<string>;
}

/**
 * Details of the customer managed key associated with the workspace
 */
export interface CustomerManagedKeyDetailsArgs {
    /**
     * Key encryption key
     */
    kekIdentity?: pulumi.Input<KekIdentityPropertiesArgs>;
    /**
     * The key object of the workspace
     */
    key?: pulumi.Input<WorkspaceKeyDetailsArgs>;
}

/**
 * Details of the data lake storage account associated with the workspace
 */
export interface DataLakeStorageAccountDetailsArgs {
    /**
     * Account URL
     */
    accountUrl?: pulumi.Input<string>;
    /**
     * Create managed private endpoint to this storage account or not
     */
    createManagedPrivateEndpoint?: pulumi.Input<boolean>;
    /**
     * Filesystem name
     */
    filesystem?: pulumi.Input<string>;
    /**
     * ARM resource Id of this storage account
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Dynamic Executor Allocation Properties
 */
export interface DynamicExecutorAllocationArgs {
    /**
     * Indicates whether Dynamic Executor Allocation is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The maximum number of executors alloted
     */
    maxExecutors?: pulumi.Input<number>;
    /**
     * The minimum number of executors alloted
     */
    minExecutors?: pulumi.Input<number>;
}

/**
 * Details of the encryption associated with the workspace
 */
export interface EncryptionDetailsArgs {
    /**
     * Customer Managed Key Details
     */
    cmk?: pulumi.Input<CustomerManagedKeyDetailsArgs>;
}

/**
 * The entity reference.
 */
export interface EntityReferenceArgs {
    /**
     * The name of this referenced entity.
     */
    referenceName?: pulumi.Input<string>;
    /**
     * The type of this referenced entity.
     */
    type?: pulumi.Input<string | enums.IntegrationRuntimeEntityReferenceType>;
}

/**
 * The custom setup of setting environment variable.
 */
export interface EnvironmentVariableSetupArgs {
    /**
     * The type of custom setup.
     * Expected value is 'EnvironmentVariableSetup'.
     */
    type: pulumi.Input<"EnvironmentVariableSetup">;
    /**
     * The name of the environment variable.
     */
    variableName: pulumi.Input<string>;
    /**
     * The value of the environment variable.
     */
    variableValue: pulumi.Input<string>;
}

/**
 * The compute resource properties for managed integration runtime.
 */
export interface IntegrationRuntimeComputePropertiesArgs {
    /**
     * Data flow properties for managed integration runtime.
     */
    dataFlowProperties?: pulumi.Input<IntegrationRuntimeDataFlowPropertiesArgs>;
    /**
     * The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
     */
    location?: pulumi.Input<string>;
    /**
     * Maximum parallel executions count per node for managed integration runtime.
     */
    maxParallelExecutionsPerNode?: pulumi.Input<number>;
    /**
     * The node size requirement to managed integration runtime.
     */
    nodeSize?: pulumi.Input<string>;
    /**
     * The required number of nodes for managed integration runtime.
     */
    numberOfNodes?: pulumi.Input<number>;
    /**
     * VNet properties for managed integration runtime.
     */
    vNetProperties?: pulumi.Input<IntegrationRuntimeVNetPropertiesArgs>;
}

/**
 * Custom setup script properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeCustomSetupScriptPropertiesArgs {
    /**
     * The URI of the Azure blob container that contains the custom setup script.
     */
    blobContainerUri?: pulumi.Input<string>;
    /**
     * The SAS token of the Azure blob container.
     */
    sasToken?: pulumi.Input<SecureStringArgs>;
}

/**
 * The definition and properties of virtual network to which Azure-SSIS integration runtime will join.
 */
export interface IntegrationRuntimeCustomerVirtualNetworkArgs {
    /**
     * The ID of subnet to which Azure-SSIS integration runtime will join.
     */
    subnetId?: pulumi.Input<string>;
}

/**
 * Data flow properties for managed integration runtime.
 */
export interface IntegrationRuntimeDataFlowPropertiesArgs {
    /**
     * Compute type of the cluster which will execute data flow job.
     */
    computeType?: pulumi.Input<string | enums.DataFlowComputeType>;
    /**
     * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
     */
    coreCount?: pulumi.Input<number>;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job.
     */
    timeToLive?: pulumi.Input<number>;
}

/**
 * Data proxy properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeDataProxyPropertiesArgs {
    /**
     * The self-hosted integration runtime reference.
     */
    connectVia?: pulumi.Input<EntityReferenceArgs>;
    /**
     * The path to contain the staged data in the Blob storage.
     */
    path?: pulumi.Input<string>;
    /**
     * The staging linked service reference.
     */
    stagingLinkedService?: pulumi.Input<EntityReferenceArgs>;
}

/**
 * Catalog information for managed dedicated integration runtime.
 */
export interface IntegrationRuntimeSsisCatalogInfoArgs {
    /**
     * The password of the administrator user account of the catalog database.
     */
    catalogAdminPassword?: pulumi.Input<SecureStringArgs>;
    /**
     * The administrator user name of catalog database.
     */
    catalogAdminUserName?: pulumi.Input<string>;
    /**
     * The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
     */
    catalogPricingTier?: pulumi.Input<string | enums.IntegrationRuntimeSsisCatalogPricingTier>;
    /**
     * The catalog database server URL.
     */
    catalogServerEndpoint?: pulumi.Input<string>;
}

/**
 * SSIS properties for managed integration runtime.
 */
export interface IntegrationRuntimeSsisPropertiesArgs {
    /**
     * Catalog information for managed dedicated integration runtime.
     */
    catalogInfo?: pulumi.Input<IntegrationRuntimeSsisCatalogInfoArgs>;
    /**
     * Custom setup script properties for a managed dedicated integration runtime.
     */
    customSetupScriptProperties?: pulumi.Input<IntegrationRuntimeCustomSetupScriptPropertiesArgs>;
    /**
     * Data proxy properties for a managed dedicated integration runtime.
     */
    dataProxyProperties?: pulumi.Input<IntegrationRuntimeDataProxyPropertiesArgs>;
    /**
     * The edition for the SSIS Integration Runtime
     */
    edition?: pulumi.Input<string | enums.IntegrationRuntimeEdition>;
    /**
     * Custom setup without script properties for a SSIS integration runtime.
     */
    expressCustomSetupProperties?: pulumi.Input<pulumi.Input<CmdkeySetupArgs | ComponentSetupArgs | EnvironmentVariableSetupArgs>[]>;
    /**
     * License type for bringing your own license scenario.
     */
    licenseType?: pulumi.Input<string | enums.IntegrationRuntimeLicenseType>;
}

/**
 * VNet properties for managed integration runtime.
 */
export interface IntegrationRuntimeVNetPropertiesArgs {
    /**
     * Resource IDs of the public IP addresses that this integration runtime will use.
     */
    publicIPs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the subnet this integration runtime will join.
     */
    subnet?: pulumi.Input<string>;
    /**
     * The ID of subnet, to which this Azure-SSIS integration runtime will be joined.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * The ID of the VNet that this integration runtime will join.
     */
    vNetId?: pulumi.Input<string>;
}

/**
 * Key encryption key properties
 */
export interface KekIdentityPropertiesArgs {
    /**
     * Boolean specifying whether to use system assigned identity or not
     */
    useSystemAssignedIdentity?: any;
    /**
     * User assigned identity resource Id
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * Library/package information of a Big Data pool powered by Apache Spark
 */
export interface LibraryInfoArgs {
    /**
     * Storage blob container name.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Name of the library.
     */
    name?: pulumi.Input<string>;
    /**
     * Storage blob path of library.
     */
    path?: pulumi.Input<string>;
    /**
     * Type of the library.
     */
    type?: pulumi.Input<string>;
}

/**
 * Library requirements for a Big Data pool powered by Apache Spark
 */
export interface LibraryRequirementsArgs {
    /**
     * The library requirements.
     */
    content?: pulumi.Input<string>;
    /**
     * The filename of the library requirements file.
     */
    filename?: pulumi.Input<string>;
}

/**
 * The key authorization type integration runtime.
 */
export interface LinkedIntegrationRuntimeKeyAuthorizationArgs {
    /**
     * The authorization type for integration runtime sharing.
     * Expected value is 'Key'.
     */
    authorizationType: pulumi.Input<"Key">;
    /**
     * The key used for authorization.
     */
    key: pulumi.Input<SecureStringArgs>;
}

/**
 * The role based access control (RBAC) authorization type integration runtime.
 */
export interface LinkedIntegrationRuntimeRbacAuthorizationArgs {
    /**
     * The authorization type for integration runtime sharing.
     * Expected value is 'RBAC'.
     */
    authorizationType: pulumi.Input<"RBAC">;
    /**
     * The resource identifier of the integration runtime to be shared.
     */
    resourceId: pulumi.Input<string>;
}

/**
 * The workspace managed identity
 */
export interface ManagedIdentityArgs {
    /**
     * The type of managed identity for the workspace
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The user assigned managed identities.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
 */
export interface ManagedIntegrationRuntimeArgs {
    /**
     * The compute resource for managed integration runtime.
     */
    computeProperties?: pulumi.Input<IntegrationRuntimeComputePropertiesArgs>;
    /**
     * The name of virtual network to which Azure-SSIS integration runtime will join
     */
    customerVirtualNetwork?: pulumi.Input<IntegrationRuntimeCustomerVirtualNetworkArgs>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The id of the managed virtual network.
     */
    id?: pulumi.Input<string>;
    /**
     * The reference name of the managed virtual network
     */
    referenceName?: pulumi.Input<string>;
    /**
     * SSIS properties for managed integration runtime.
     */
    ssisProperties?: pulumi.Input<IntegrationRuntimeSsisPropertiesArgs>;
    /**
     * The type of integration runtime.
     * Expected value is 'Managed'.
     */
    type: pulumi.Input<"Managed">;
}

/**
 * Managed Virtual Network Settings
 */
export interface ManagedVirtualNetworkSettingsArgs {
    /**
     * Allowed Aad Tenant Ids For Linking
     */
    allowedAadTenantIdsForLinking?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Linked Access Check On Target Resource
     */
    linkedAccessCheckOnTargetResource?: pulumi.Input<boolean>;
    /**
     * Prevent Data Exfiltration
     */
    preventDataExfiltration?: pulumi.Input<boolean>;
}

/**
 * A class that contains the optimized auto scale definition.
 */
export interface OptimizedAutoscaleArgs {
    /**
     * A boolean value that indicate if the optimized autoscale feature is enabled or not.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * Maximum allowed instances count.
     */
    maximum: pulumi.Input<number>;
    /**
     * Minimum allowed instances count.
     */
    minimum: pulumi.Input<number>;
    /**
     * The version of the template defined, for instance 1.
     */
    version: pulumi.Input<number>;
}

/**
 * A private endpoint connection
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * Connection state of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * Connection state details of the private endpoint
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * The private link service connection description.
     */
    description?: pulumi.Input<string>;
    /**
     * The private link service connection status.
     */
    status?: pulumi.Input<string>;
}

/**
 * Purview Configuration
 */
export interface PurviewConfigurationArgs {
    /**
     * Purview Resource ID
     */
    purviewResourceId?: pulumi.Input<string>;
}

/**
 * Azure Synapse secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
 */
export interface SecureStringArgs {
    /**
     * Type of the secret.
     * Expected value is 'SecureString'.
     */
    type: pulumi.Input<"SecureString">;
    /**
     * Value of secure string.
     */
    value: pulumi.Input<string>;
}

/**
 * Self-hosted integration runtime.
 */
export interface SelfHostedIntegrationRuntimeArgs {
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * Linked integration runtime type from data factory
     */
    linkedInfo?: pulumi.Input<LinkedIntegrationRuntimeKeyAuthorizationArgs | LinkedIntegrationRuntimeRbacAuthorizationArgs>;
    /**
     * The type of integration runtime.
     * Expected value is 'SelfHosted'.
     */
    type: pulumi.Input<"SelfHosted">;
}

/**
 * SQL pool SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The SKU name
     */
    name?: pulumi.Input<string>;
    /**
     * The service tier
     */
    tier?: pulumi.Input<string>;
}

/**
 * SparkConfig Properties for a Big Data pool powered by Apache Spark
 */
export interface SparkConfigPropertiesArgs {
    /**
     * The type of the spark config properties file.
     */
    configurationType?: pulumi.Input<string | enums.ConfigurationType>;
    /**
     * The spark config properties.
     */
    content?: pulumi.Input<string>;
    /**
     * The filename of the spark config properties file.
     */
    filename?: pulumi.Input<string>;
}

/**
 * Properties for an Sql pool vulnerability assessment rule baseline's result.
 */
export interface SqlPoolVulnerabilityAssessmentRuleBaselineItemArgs {
    /**
     * The rule baseline result
     */
    result: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Tables that will be included and excluded in the follower database
 */
export interface TableLevelSharingPropertiesArgs {
    /**
     * List of external tables exclude from the follower database
     */
    externalTablesToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of external tables to include in the follower database
     */
    externalTablesToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of materialized views exclude from the follower database
     */
    materializedViewsToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of materialized views to include in the follower database
     */
    materializedViewsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tables to exclude from the follower database
     */
    tablesToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tables to include in the follower database
     */
    tablesToInclude?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Virtual Network Profile
 */
export interface VirtualNetworkProfileArgs {
    /**
     * Subnet ID used for computes in workspace
     */
    computeSubnetId?: pulumi.Input<string>;
}

/**
 * Properties of a Vulnerability Assessment recurring scans.
 */
export interface VulnerabilityAssessmentRecurringScansPropertiesArgs {
    /**
     * Specifies that the schedule scan notification will be is sent to the subscription administrators.
     */
    emailSubscriptionAdmins?: pulumi.Input<boolean>;
    /**
     * Specifies an array of e-mail addresses to which the scan notification is sent.
     */
    emails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Recurring scans state.
     */
    isEnabled?: pulumi.Input<boolean>;
}
/**
 * vulnerabilityAssessmentRecurringScansPropertiesArgsProvideDefaults sets the appropriate defaults for VulnerabilityAssessmentRecurringScansPropertiesArgs
 */
export function vulnerabilityAssessmentRecurringScansPropertiesArgsProvideDefaults(val: VulnerabilityAssessmentRecurringScansPropertiesArgs): VulnerabilityAssessmentRecurringScansPropertiesArgs {
    return {
        ...val,
        emailSubscriptionAdmins: (val.emailSubscriptionAdmins) ?? true,
    };
}

/**
 * Details of the customer managed key associated with the workspace
 */
export interface WorkspaceKeyDetailsArgs {
    /**
     * Workspace Key sub-resource key vault url
     */
    keyVaultUrl?: pulumi.Input<string>;
    /**
     * Workspace Key sub-resource name
     */
    name?: pulumi.Input<string>;
}

/**
 * Git integration settings
 */
export interface WorkspaceRepositoryConfigurationArgs {
    /**
     * Account name
     */
    accountName?: pulumi.Input<string>;
    /**
     * Collaboration branch
     */
    collaborationBranch?: pulumi.Input<string>;
    /**
     * GitHub Enterprise host name. For example: `https://github.mydomain.com`
     */
    hostName?: pulumi.Input<string>;
    /**
     * The last commit ID
     */
    lastCommitId?: pulumi.Input<string>;
    /**
     * VSTS project name
     */
    projectName?: pulumi.Input<string>;
    /**
     * Repository name
     */
    repositoryName?: pulumi.Input<string>;
    /**
     * Root folder to use in the repository
     */
    rootFolder?: pulumi.Input<string>;
    /**
     * The VSTS tenant ID
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration
     */
    type?: pulumi.Input<string>;
}
