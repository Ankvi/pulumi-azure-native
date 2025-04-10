import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a database.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getDatabase", {
        "databaseName": args.databaseName,
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
     * Failover Group resource identifier that this database belongs to.
     */
    readonly failoverGroupId: string;
    /**
     * The Client id used for cross tenant per database CMK scenario
     */
    readonly federatedClientId?: string;
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
     * The secondary type of the database if it is a secondary.  Valid values are Geo and Named.
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
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Gets a database.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getDatabaseOutput(args: GetDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getDatabase", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDatabaseOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}