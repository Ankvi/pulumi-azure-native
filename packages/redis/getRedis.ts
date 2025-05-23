import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Redis cache (resource description).
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2015-08-01, 2016-04-01, 2017-02-01, 2017-10-01, 2018-03-01, 2019-07-01, 2020-06-01, 2020-12-01, 2021-06-01, 2022-05-01, 2022-06-01, 2023-04-01, 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRedis(args: GetRedisArgs, opts?: pulumi.InvokeOptions): Promise<GetRedisResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redis:getRedis", {
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
     * The name of the resource group. The name is case insensitive.
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
    readonly accessKeys: types.outputs.RedisAccessKeysResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Authentication to Redis through access keys is disabled when set as true. Default value is false.
     */
    readonly disableAccessKeyAuthentication?: boolean;
    /**
     * Specifies whether the non-ssl Redis server port (6379) is enabled.
     */
    readonly enableNonSslPort?: boolean;
    /**
     * Redis host name.
     */
    readonly hostName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * List of the Redis instances associated with the cache
     */
    readonly instances: types.outputs.RedisInstanceDetailsResponse[];
    /**
     * List of the linked servers associated with the cache
     */
    readonly linkedServers: types.outputs.RedisLinkedServerResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
     */
    readonly minimumTlsVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Redis non-SSL port.
     */
    readonly port: number;
    /**
     * List of private endpoint connection associated with the specified redis cache
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Redis instance provisioning status.
     */
    readonly provisioningState: string;
    /**
     * Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
     */
    readonly publicNetworkAccess?: string;
    /**
     * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta, maxmemory-policy,notify-keyspace-events, aof-backup-enabled, aof-storage-connection-string-0, aof-storage-connection-string-1 etc.
     */
    readonly redisConfiguration?: types.outputs.RedisCommonPropertiesResponseRedisConfiguration;
    /**
     * Redis version. This should be in the form 'major[.minor]' (only 'major' is required) or the value 'latest' which refers to the latest stable Redis version that is available. Supported versions: 4.0, 6.0 (latest). Default value is 'latest'.
     */
    readonly redisVersion?: string;
    /**
     * The number of replicas to be created per primary.
     */
    readonly replicasPerMaster?: number;
    /**
     * The number of replicas to be created per primary.
     */
    readonly replicasPerPrimary?: number;
    /**
     * The number of shards to be created on a Premium Cluster Cache.
     */
    readonly shardCount?: number;
    /**
     * The SKU of the Redis cache to deploy.
     */
    readonly sku: types.outputs.SkuResponse;
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Optional: Specifies the update channel for the monthly Redis updates your Redis Cache will receive. Caches using 'Preview' update channel get latest Redis updates at least 4 weeks ahead of 'Stable' channel caches. Default value is 'Stable'.
     */
    readonly updateChannel?: string;
    /**
     * Optional: Specifies how availability zones are allocated to the Redis cache. 'Automatic' enables zone redundancy and Azure will automatically select zones based on regional availability and capacity. 'UserDefined' will select availability zones passed in by you using the 'zones' parameter. 'NoZones' will produce a non-zonal cache. If 'zonalAllocationPolicy' is not passed, it will be set to 'UserDefined' when zones are passed in, otherwise, it will be set to 'Automatic' in regions where zones are supported and 'NoZones' in regions where zones are not supported.
     */
    readonly zonalAllocationPolicy?: string;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets a Redis cache (resource description).
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2015-08-01, 2016-04-01, 2017-02-01, 2017-10-01, 2018-03-01, 2019-07-01, 2020-06-01, 2020-12-01, 2021-06-01, 2022-05-01, 2022-06-01, 2023-04-01, 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRedisOutput(args: GetRedisOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRedisResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redis:getRedis", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRedisOutputArgs {
    /**
     * The name of the Redis cache.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}