import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a Cache.
 */
export function getCache(args: GetCacheArgs, opts?: pulumi.InvokeOptions): Promise<GetCacheResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagecache/v20210301:getCache", {
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCacheArgs {
    /**
     * Name of Cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
     */
    cacheName: string;
    /**
     * Target resource group.
     */
    resourceGroupName: string;
}

/**
 * A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
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
     * Health of the Cache.
     */
    readonly health: types.outputs.CacheHealthResponse;
    /**
     * Resource ID of the Cache.
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
     * Array of IP addresses that can be used by clients mounting this Cache.
     */
    readonly mountAddresses: string[];
    /**
     * Name of Cache.
     */
    readonly name: string;
    /**
     * Specifies network settings of the cache.
     */
    readonly networkSettings?: types.outputs.CacheNetworkSettingsResponse;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState?: string;
    /**
     * Specifies security settings of the cache.
     */
    readonly securitySettings?: types.outputs.CacheSecuritySettingsResponse;
    /**
     * SKU for the Cache.
     */
    readonly sku?: types.outputs.CacheResponseSku;
    /**
     * Subnet used for the Cache.
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
     * Type of the Cache; Microsoft.StorageCache/Cache
     */
    readonly type: string;
    /**
     * Upgrade status of the Cache.
     */
    readonly upgradeStatus?: types.outputs.CacheUpgradeStatusResponse;
}
/**
 * Returns a Cache.
 */
export function getCacheOutput(args: GetCacheOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCacheResult> {
    return pulumi.output(args).apply((a: any) => getCache(a, opts))
}

export interface GetCacheOutputArgs {
    /**
     * Name of Cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
     */
    cacheName: pulumi.Input<string>;
    /**
     * Target resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
