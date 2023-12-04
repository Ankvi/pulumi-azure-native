import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an elastic pool.
 */
export function getElasticPool(args: GetElasticPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getElasticPool", {
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
     * Time in minutes after which elastic pool is automatically paused. A value of -1 means that automatic pause is disabled
     */
    readonly autoPauseDelay?: number;
    /**
     * Specifies the availability zone the pool's primary replica is pinned to.
     */
    readonly availabilityZone?: string;
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
     * Type of enclave requested on the elastic pool.
     */
    readonly preferredEnclaveType?: string;
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
 */
export function getElasticPoolOutput(args: GetElasticPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticPoolResult> {
    return pulumi.output(args).apply((a: any) => getElasticPool(a, opts))
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