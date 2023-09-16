import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a Redis cache (resource description).
 */
export function getRedis(args: GetRedisArgs, opts?: pulumi.InvokeOptions): Promise<GetRedisResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache/v20200601:getRedis", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRedisArgs {
    /**
     * The name of the Redis cache.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A single Redis item in List or Get Operation.
 */
export interface GetRedisResult {
    /**
     * The keys of the Redis cache - not set if this object is not the response to Create or Update redis cache
     */
    readonly accessKeys: types.outputs.cache.v20200601.RedisAccessKeysResponse;
    /**
     * Specifies whether the non-ssl Redis server port (6379) is enabled.
     */
    readonly enableNonSslPort?: boolean;
    /**
     * Redis host name.
     */
    readonly hostName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * List of the Redis instances associated with the cache
     */
    readonly instances: types.outputs.cache.v20200601.RedisInstanceDetailsResponse[];
    /**
     * List of the linked servers associated with the cache
     */
    readonly linkedServers: types.outputs.cache.v20200601.RedisLinkedServerResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
     */
    readonly minimumTlsVersion?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Redis non-SSL port.
     */
    readonly port: number;
    /**
     * List of private endpoint connection associated with the specified redis cache
     */
    readonly privateEndpointConnections: types.outputs.cache.v20200601.PrivateEndpointConnectionResponse[];
    /**
     * Redis instance provisioning status.
     */
    readonly provisioningState: string;
    /**
     * Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
     */
    readonly publicNetworkAccess?: string;
    /**
     * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
     */
    readonly redisConfiguration?: types.outputs.cache.v20200601.RedisCommonPropertiesResponseRedisConfiguration;
    /**
     * Redis version.
     */
    readonly redisVersion: string;
    /**
     * The number of replicas to be created per master.
     */
    readonly replicasPerMaster?: number;
    /**
     * The number of shards to be created on a Premium Cluster Cache.
     */
    readonly shardCount?: number;
    /**
     * The SKU of the Redis cache to deploy.
     */
    readonly sku: types.outputs.cache.v20200601.SkuResponse;
    /**
     * Redis SSL port.
     */
    readonly sslPort: number;
    /**
     * Static IP address. Optionally, may be specified when deploying a Redis cache inside an existing Azure Virtual Network; auto assigned by default.
     */
    readonly staticIP?: string;
    /**
     * The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
     */
    readonly subnetId?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * A dictionary of tenant settings
     */
    readonly tenantSettings?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets a Redis cache (resource description).
 */
export function getRedisOutput(args: GetRedisOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRedisResult> {
    return pulumi.output(args).apply((a: any) => getRedis(a, opts))
}

export interface GetRedisOutputArgs {
    /**
     * The name of the Redis cache.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
