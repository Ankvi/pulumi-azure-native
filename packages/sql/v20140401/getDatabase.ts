import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a database.
 */
export function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20140401:getDatabase", {
        "databaseName": args.databaseName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDatabaseArgs {
    /**
     * The name of the database to be retrieved.
     */
    databaseName: string;
    /**
     * A comma separated list of child objects to expand in the response. Possible properties: serviceTierAdvisors, transparentDataEncryption.
     */
    expand?: string;
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
 * Represents a database.
 */
export interface GetDatabaseResult {
    /**
     * The collation of the database. If createMode is not Default, this value is ignored.
     */
    readonly collation?: string;
    /**
     * The containment state of the database.
     */
    readonly containmentState: number;
    /**
     * The creation date of the database (ISO8601 format).
     */
    readonly creationDate: string;
    /**
     * The current service level objective ID of the database. This is the ID of the service level objective that is currently active.
     */
    readonly currentServiceObjectiveId: string;
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
     * The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
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
    readonly edition?: string;
    /**
     * The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition.
     */
    readonly elasticPoolName?: string;
    /**
     * The resource identifier of the failover group containing this database.
     */
    readonly failoverGroupId: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Kind of database.  This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: "Capabilities_ListByLocation."
     */
    readonly maxSizeBytes?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
     */
    readonly readScale?: string;
    /**
     * The recommended indices for this database.
     */
    readonly recommendedIndex: types.outputs.RecommendedIndexResponse[];
    /**
     * The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.
     * 
     * The list of SKUs may vary by region and support offer. To determine the service objective ids that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API.
     */
    readonly requestedServiceObjectiveId?: string;
    /**
     * The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property. 
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
    readonly requestedServiceObjectiveName?: string;
    /**
     * The current service level objective of the database.
     */
    readonly serviceLevelObjective: string;
    /**
     * The list of service tier advisors for this database. Expanded property
     */
    readonly serviceTierAdvisors: types.outputs.ServiceTierAdvisorResponse[];
    /**
     * The status of the database.
     */
    readonly status: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The transparent data encryption info for this database.
     */
    readonly transparentDataEncryption: types.outputs.TransparentDataEncryptionResponse[];
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
     * The name of the database to be retrieved.
     */
    databaseName: pulumi.Input<string>;
    /**
     * A comma separated list of child objects to expand in the response. Possible properties: serviceTierAdvisors, transparentDataEncryption.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
