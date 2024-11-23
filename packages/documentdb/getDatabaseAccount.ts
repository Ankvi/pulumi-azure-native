import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB database account.
 * Azure REST API version: 2023-04-15.
 *
 * Other available API versions: 2020-03-01, 2020-06-01-preview, 2020-09-01, 2021-04-01-preview, 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function getDatabaseAccount(args: GetDatabaseAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getDatabaseAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseAccountArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB database account.
 */
export interface GetDatabaseAccountResult {
    /**
     * Analytical storage specific properties.
     */
    readonly analyticalStorageConfiguration?: types.outputs.AnalyticalStorageConfigurationResponse;
    /**
     * API specific properties.
     */
    readonly apiProperties?: types.outputs.ApiPropertiesResponse;
    /**
     * The object representing the policy for taking backups on an account.
     */
    readonly backupPolicy?: types.outputs.ContinuousModeBackupPolicyResponse | types.outputs.PeriodicModeBackupPolicyResponse;
    /**
     * List of Cosmos DB capabilities for the account
     */
    readonly capabilities?: types.outputs.CapabilityResponse[];
    /**
     * The object that represents all properties related to capacity enforcement on an account.
     */
    readonly capacity?: types.outputs.CapacityResponse;
    /**
     * The cassandra connector offer type for the Cosmos DB database C* account.
     */
    readonly connectorOffer?: string;
    /**
     * The consistency policy for the Cosmos DB database account.
     */
    readonly consistencyPolicy?: types.outputs.ConsistencyPolicyResponse;
    /**
     * The CORS policy for the Cosmos DB database account.
     */
    readonly cors?: types.outputs.CorsPolicyResponse[];
    /**
     * Enum to indicate the mode of account creation.
     */
    readonly createMode?: string;
    /**
     * The offer type for the Cosmos DB database account. Default value: Standard.
     */
    readonly databaseAccountOfferType: string;
    /**
     * The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
     */
    readonly defaultIdentity?: string;
    /**
     * Disable write operations on metadata resources (databases, containers, throughput) via account keys
     */
    readonly disableKeyBasedMetadataWriteAccess?: boolean;
    /**
     * Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * The connection endpoint for the Cosmos DB database account.
     */
    readonly documentEndpoint: string;
    /**
     * Flag to indicate whether to enable storage analytics.
     */
    readonly enableAnalyticalStorage?: boolean;
    /**
     * Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
     */
    readonly enableAutomaticFailover?: boolean;
    /**
     * Enables the cassandra connector on the Cosmos DB C* account
     */
    readonly enableCassandraConnector?: boolean;
    /**
     * Flag to indicate whether Free Tier is enabled.
     */
    readonly enableFreeTier?: boolean;
    /**
     * Enables the account to write in multiple locations
     */
    readonly enableMultipleWriteLocations?: boolean;
    /**
     * Flag to indicate enabling/disabling of Partition Merge feature on the account
     */
    readonly enablePartitionMerge?: boolean;
    /**
     * An array that contains the regions ordered by their failover priorities.
     */
    readonly failoverPolicies: types.outputs.FailoverPolicyResponse[];
    /**
     * The unique resource identifier of the ARM resource.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * A unique identifier assigned to the database account
     */
    readonly instanceId: string;
    /**
     * List of IpRules.
     */
    readonly ipRules?: types.outputs.IpAddressOrRangeResponse[];
    /**
     * Flag to indicate whether to enable/disable Virtual Network ACL rules.
     */
    readonly isVirtualNetworkFilterEnabled?: boolean;
    /**
     * The URI of the key vault
     */
    readonly keyVaultKeyUri?: string;
    /**
     * The object that represents the metadata for the Account Keys of the Cosmos DB account.
     */
    readonly keysMetadata: types.outputs.DatabaseAccountKeysMetadataResponse;
    /**
     * Indicates the type of database account. This can only be set at database account creation.
     */
    readonly kind?: string;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * An array that contains all of the locations enabled for the Cosmos DB account.
     */
    readonly locations: types.outputs.LocationResponse[];
    /**
     * Indicates the minimum allowed Tls version. The default value is Tls 1.2. Cassandra and Mongo APIs only work with Tls 1.2.
     */
    readonly minimalTlsVersion?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    /**
     * Indicates what services are allowed to bypass firewall checks.
     */
    readonly networkAclBypass?: string;
    /**
     * An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
     */
    readonly networkAclBypassResourceIds?: string[];
    /**
     * List of Private Endpoint Connections configured for the Cosmos DB account.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'DeletionFailed' – the Cosmos DB account deletion failed.
     */
    readonly provisioningState: string;
    /**
     * Whether requests from Public Network are allowed
     */
    readonly publicNetworkAccess?: string;
    /**
     * An array that contains of the read locations enabled for the Cosmos DB account.
     */
    readonly readLocations: types.outputs.LocationResponse[];
    /**
     * Parameters to indicate the information about the restore.
     */
    readonly restoreParameters?: types.outputs.RestoreParametersResponse;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of Azure resource.
     */
    readonly type: string;
    /**
     * List of Virtual Network ACL rules configured for the Cosmos DB account.
     */
    readonly virtualNetworkRules?: types.outputs.VirtualNetworkRuleResponse[];
    /**
     * An array that contains the write location for the Cosmos DB account.
     */
    readonly writeLocations: types.outputs.LocationResponse[];
}
/**
 * Retrieves the properties of an existing Azure Cosmos DB database account.
 * Azure REST API version: 2023-04-15.
 *
 * Other available API versions: 2020-03-01, 2020-06-01-preview, 2020-09-01, 2021-04-01-preview, 2023-03-15-preview, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function getDatabaseAccountOutput(args: GetDatabaseAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:getDatabaseAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseAccountOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}