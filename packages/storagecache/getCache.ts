import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a cache.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2020-10-01, 2021-03-01, 2023-03-01-preview, 2023-11-01-preview.
 */
export function getCache(args: GetCacheArgs, opts?: pulumi.InvokeOptions): Promise<GetCacheResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagecache:getCache", {
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCacheArgs {
    /**
     * Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
     */
    cacheName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 */
export interface GetCacheResult {
    /**
     * The size of this Cache, in GB.
     */
    readonly cacheSizeGB?: number;
    /**
     * Specifies Directory Services settings of the cache.
     */
    readonly directoryServicesSettings?: types.outputs.CacheDirectorySettingsResponse;
    /**
     * Specifies encryption settings of the cache.
     */
    readonly encryptionSettings?: types.outputs.CacheEncryptionSettingsResponse;
    /**
     * Health of the cache.
     */
    readonly health: types.outputs.CacheHealthResponse;
    /**
     * Resource ID of the cache.
     */
    readonly id: string;
    /**
     * The identity of the cache, if configured.
     */
    readonly identity?: types.outputs.CacheIdentityResponse;
    /**
     * Region name string.
     */
    readonly location?: string;
    /**
     * Array of IPv4 addresses that can be used by clients mounting this cache.
     */
    readonly mountAddresses: string[];
    /**
     * Name of cache.
     */
    readonly name: string;
    /**
     * Specifies network settings of the cache.
     */
    readonly networkSettings?: types.outputs.CacheNetworkSettingsResponse;
    /**
     * Specifies the priming jobs defined in the cache.
     */
    readonly primingJobs: types.outputs.PrimingJobResponse[];
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState: string;
    /**
     * Specifies security settings of the cache.
     */
    readonly securitySettings?: types.outputs.CacheSecuritySettingsResponse;
    /**
     * SKU for the cache.
     */
    readonly sku?: types.outputs.CacheResponseSku;
    /**
     * Specifies the space allocation percentage for each storage target in the cache.
     */
    readonly spaceAllocation: types.outputs.StorageTargetSpaceAllocationResponse[];
    /**
     * Subnet used for the cache.
     */
    readonly subnet?: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of the cache; Microsoft.StorageCache/Cache
     */
    readonly type: string;
    /**
     * Upgrade settings of the cache.
     */
    readonly upgradeSettings?: types.outputs.CacheUpgradeSettingsResponse;
    /**
     * Upgrade status of the cache.
     */
    readonly upgradeStatus: types.outputs.CacheUpgradeStatusResponse;
    /**
     * Availability zones for resources. This field should only contain a single element in the array.
     */
    readonly zones?: string[];
}
/**
 * Returns a cache.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2020-10-01, 2021-03-01, 2023-03-01-preview, 2023-11-01-preview.
 */
export function getCacheOutput(args: GetCacheOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCacheResult> {
    return pulumi.output(args).apply((a: any) => getCache(a, opts))
}

export interface GetCacheOutputArgs {
    /**
     * Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
