import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a database.
 */
export function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20200202preview:getDatabase", {
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
     * Resource ID.
     */
    readonly id: string;
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
     * The number of readonly secondary replicas associated with the database.
     */
    readonly readReplicaCount?: number;
    /**
     * The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region.
     */
    readonly readScale?: string;
    /**
     * The requested service level objective name of the database.
     */
    readonly requestedServiceObjectiveName: string;
    /**
     * The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
     */
    readonly resumedDate: string;
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
     * The storage account type used to store backups for this database.
     */
    readonly storageAccountType?: string;
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
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
