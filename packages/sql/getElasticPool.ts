import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an elastic pool.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getElasticPool(args: GetElasticPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getElasticPool", {
        "elasticPoolName": args.elasticPoolName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetElasticPoolArgs {
    /**
     * The name of the elastic pool.
     */
    elasticPoolName: string;
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
 * An elastic pool.
 */
export interface GetElasticPoolResult {
    /**
     * The creation date of the elastic pool (ISO8601 format).
     */
    readonly creationDate: string;
    /**
     * The number of secondary replicas associated with the elastic pool that are used to provide high availability. Applicable only to Hyperscale elastic pools.
     */
    readonly highAvailabilityReplicaCount?: number;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Kind of elastic pool. This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * The license type to apply for this elastic pool.
     */
    readonly licenseType?: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur.
     */
    readonly maintenanceConfigurationId?: string;
    /**
     * The storage limit for the database elastic pool in bytes.
     */
    readonly maxSizeBytes?: number;
    /**
     * Minimal capacity that serverless pool will not shrink below, if not paused
     */
    readonly minCapacity?: number;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The per database settings for the elastic pool.
     */
    readonly perDatabaseSettings?: types.outputs.ElasticPoolPerDatabaseSettingsResponse;
    /**
     * The elastic pool SKU.
     * 
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or the following command:
     * 
     * ```azurecli
     * az sql elastic-pool list-editions -l <location> -o table
     * ````
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The state of the elastic pool.
     */
    readonly state: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Gets an elastic pool.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getElasticPoolOutput(args: GetElasticPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetElasticPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getElasticPool", {
        "elasticPoolName": args.elasticPoolName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetElasticPoolOutputArgs {
    /**
     * The name of the elastic pool.
     */
    elasticPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}