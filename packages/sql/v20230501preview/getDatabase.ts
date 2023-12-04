import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a database.
 */
export function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getDatabase", {
        "databaseName": args.databaseName,
        "expand": args.expand,
        "filter": args.filter,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDatabaseArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The child resources to include in the response.
     */
    expand?: string;
    /**
     * An OData filter expression that filters elements in the collection.
     */
    filter?: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * A database resource.
 */
export interface GetDatabaseResult {
    /**
     * Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled
     */
    readonly autoPauseDelay?: number;
    /**
     * Specifies the availability zone the database is pinned to.
     */
    readonly availabilityZone?: string;
    /**
     * Collation of the metadata catalog.
     */
    readonly catalogCollation?: string;
    /**
     * The collation of the database.
     */
    readonly collation?: string;
    /**
     * The creation date of the database (ISO8601 format).
     */
    readonly creationDate: string;
    /**
     * The storage account type used to store backups for this database.
     */
    readonly currentBackupStorageRedundancy: string;
    /**
     * The current service level objective name of the database.
     */
    readonly currentServiceObjectiveName: string;
    /**
     * The name and tier of the SKU.
     */
    readonly currentSku: types.outputs.SkuResponse;
    /**
     * The ID of the database.
     */
    readonly databaseId: string;
    /**
     * The default secondary region for this database.
     */
    readonly defaultSecondaryLocation: string;
    /**
     * This records the earliest start date and time that restore is available for this database (ISO8601 format).
     */
    readonly earliestRestoreDate: string;
    /**
     * The resource identifier of the elastic pool containing this database.
     */
    readonly elasticPoolId?: string;
    /**
     * The azure key vault URI of the database if it's configured with per Database Customer Managed Keys.
     */
    readonly encryptionProtector?: string;
    /**
     * The flag to enable or disable auto rotation of database encryption protector AKV key.
     */
    readonly encryptionProtectorAutoRotation?: boolean;
    /**
     * Failover Group resource identifier that this database belongs to.
     */
    readonly failoverGroupId: string;
    /**
     * The Client id used for cross tenant per database CMK scenario
     */
    readonly federatedClientId?: string;
    /**
     * Specifies the behavior when monthly free limits are exhausted for the free database.
     * 
     * AutoPause: The database will be auto paused upon exhaustion of free limits for remainder of the month.
     * 
     * BillForUsage: The database will continue to be online upon exhaustion of free limits and any overage will be billed.
     */
    readonly freeLimitExhaustionBehavior?: string;
    /**
     * The number of secondary replicas associated with the database that are used to provide high availability. Not applicable to a Hyperscale database within an elastic pool.
     */
    readonly highAvailabilityReplicaCount?: number;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The Azure Active Directory identity of the database.
     */
    readonly identity?: types.outputs.DatabaseIdentityResponse;
    /**
     * Infra encryption is enabled for this database.
     */
    readonly isInfraEncryptionEnabled: boolean;
    /**
     * Whether or not this database is a ledger database, which means all tables in the database are ledger tables. Note: the value of this property cannot be changed after the database has been created.
     */
    readonly isLedgerOn?: boolean;
    /**
     * The resource ids of the user assigned identities to use
     */
    readonly keys?: {[key: string]: types.outputs.DatabaseKeyResponse};
    /**
     * Kind of database. This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * The license type to apply for this database. `LicenseIncluded` if you need a license, or `BasePrice` if you have a license and are eligible for the Azure Hybrid Benefit.
     */
    readonly licenseType?: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Maintenance configuration id assigned to the database. This configuration defines the period when the maintenance updates will occur.
     */
    readonly maintenanceConfigurationId?: string;
    /**
     * Resource that manages the database.
     */
    readonly managedBy: string;
    /**
     * Whether or not customer controlled manual cutover needs to be done during Update Database operation to Hyperscale tier.
     * 
     * This property is only applicable when scaling database from Business Critical/General Purpose/Premium/Standard tier to Hyperscale tier.
     * 
     * When manualCutover is specified, the scaling operation will wait for user input to trigger cutover to Hyperscale database.
     * 
     * To trigger cutover, please provide 'performCutover' parameter when the Scaling operation is in Waiting state.
     */
    readonly manualCutover?: boolean;
    /**
     * The max log size for this database.
     */
    readonly maxLogSizeBytes: number;
    /**
     * The max size of the database expressed in bytes.
     */
    readonly maxSizeBytes?: number;
    /**
     * Minimal capacity that database will always have allocated, if not paused
     */
    readonly minCapacity?: number;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The date when database was paused by user configuration or action(ISO8601 format). Null if the database is ready.
     */
    readonly pausedDate: string;
    /**
     * To trigger customer controlled manual cutover during the wait state while Scaling operation is in progress.
     * 
     * This property parameter is only applicable for scaling operations that are initiated along with 'manualCutover' parameter.
     * 
     * This property is only applicable when scaling database from Business Critical/General Purpose/Premium/Standard tier to Hyperscale tier is already in progress.
     * 
     * When performCutover is specified, the scaling operation will trigger cutover and perform role-change to Hyperscale database.
     */
    readonly performCutover?: boolean;
    /**
     * Type of enclave requested on the database i.e. Default or VBS enclaves.
     */
    readonly preferredEnclaveType?: string;
    /**
     * The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region. Not applicable to a Hyperscale database within an elastic pool.
     */
    readonly readScale?: string;
    /**
     * The storage account type to be used to store backups for this database.
     */
    readonly requestedBackupStorageRedundancy?: string;
    /**
     * The requested service level objective name of the database.
     */
    readonly requestedServiceObjectiveName: string;
    /**
     * The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
     */
    readonly resumedDate: string;
    /**
     * The secondary type of the database if it is a secondary.  Valid values are Geo, Named and Standby.
     */
    readonly secondaryType?: string;
    /**
     * The database SKU.
     * 
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     * 
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     * 
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The status of the database.
     */
    readonly status: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Whether or not the database uses free monthly limits. Allowed on one database in a subscription.
     */
    readonly useFreeLimit?: boolean;
    /**
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Gets a database.
 */
export function getDatabaseOutput(args: GetDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseResult> {
    return pulumi.output(args).apply((a: any) => getDatabase(a, opts))
}

export interface GetDatabaseOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The child resources to include in the response.
     */
    expand?: pulumi.Input<string>;
    /**
     * An OData filter expression that filters elements in the collection.
     */
    filter?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}