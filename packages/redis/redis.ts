import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A single Redis item in List or Get Operation.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2015-08-01, 2016-04-01, 2017-02-01, 2017-10-01, 2018-03-01, 2019-07-01, 2020-06-01, 2020-12-01, 2021-06-01, 2022-05-01, 2022-06-01, 2023-04-01, 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Redis extends pulumi.CustomResource {
    /**
     * Get an existing Redis resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Redis {
        return new Redis(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:redis:Redis';

    /**
     * Returns true if the given object is an instance of Redis.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Redis {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Redis.__pulumiType;
    }

    /**
     * The keys of the Redis cache - not set if this object is not the response to Create or Update redis cache
     */
    public /*out*/ readonly accessKeys!: pulumi.Output<types.outputs.RedisAccessKeysResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Authentication to Redis through access keys is disabled when set as true. Default value is false.
     */
    public readonly disableAccessKeyAuthentication!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether the non-ssl Redis server port (6379) is enabled.
     */
    public readonly enableNonSslPort!: pulumi.Output<boolean | undefined>;
    /**
     * Redis host name.
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * List of the Redis instances associated with the cache
     */
    public /*out*/ readonly instances!: pulumi.Output<types.outputs.RedisInstanceDetailsResponse[]>;
    /**
     * List of the linked servers associated with the cache
     */
    public /*out*/ readonly linkedServers!: pulumi.Output<types.outputs.RedisLinkedServerResponse[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
     */
    public readonly minimumTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Redis non-SSL port.
     */
    public /*out*/ readonly port!: pulumi.Output<number>;
    /**
     * List of private endpoint connection associated with the specified redis cache
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Redis instance provisioning status.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta, maxmemory-policy,notify-keyspace-events, aof-backup-enabled, aof-storage-connection-string-0, aof-storage-connection-string-1 etc.
     */
    public readonly redisConfiguration!: pulumi.Output<types.outputs.RedisCommonPropertiesResponseRedisConfiguration | undefined>;
    /**
     * Redis version. This should be in the form 'major[.minor]' (only 'major' is required) or the value 'latest' which refers to the latest stable Redis version that is available. Supported versions: 4.0, 6.0 (latest). Default value is 'latest'.
     */
    public readonly redisVersion!: pulumi.Output<string | undefined>;
    /**
     * The number of replicas to be created per primary.
     */
    public readonly replicasPerMaster!: pulumi.Output<number | undefined>;
    /**
     * The number of replicas to be created per primary.
     */
    public readonly replicasPerPrimary!: pulumi.Output<number | undefined>;
    /**
     * The number of shards to be created on a Premium Cluster Cache.
     */
    public readonly shardCount!: pulumi.Output<number | undefined>;
    /**
     * The SKU of the Redis cache to deploy.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Redis SSL port.
     */
    public /*out*/ readonly sslPort!: pulumi.Output<number>;
    /**
     * Static IP address. Optionally, may be specified when deploying a Redis cache inside an existing Azure Virtual Network; auto assigned by default.
     */
    public readonly staticIP!: pulumi.Output<string | undefined>;
    /**
     * The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
     */
    public readonly subnetId!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A dictionary of tenant settings
     */
    public readonly tenantSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Optional: Specifies the update channel for the monthly Redis updates your Redis Cache will receive. Caches using 'Preview' update channel get latest Redis updates at least 4 weeks ahead of 'Stable' channel caches. Default value is 'Stable'.
     */
    public readonly updateChannel!: pulumi.Output<string | undefined>;
    /**
     * Optional: Specifies how availability zones are allocated to the Redis cache. 'Automatic' enables zone redundancy and Azure will automatically select zones based on regional availability and capacity. 'UserDefined' will select availability zones passed in by you using the 'zones' parameter. 'NoZones' will produce a non-zonal cache. If 'zonalAllocationPolicy' is not passed, it will be set to 'UserDefined' when zones are passed in, otherwise, it will be set to 'Automatic' in regions where zones are supported and 'NoZones' in regions where zones are not supported.
     */
    public readonly zonalAllocationPolicy!: pulumi.Output<string | undefined>;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Redis resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedisArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["disableAccessKeyAuthentication"] = (args ? args.disableAccessKeyAuthentication : undefined) ?? false;
            resourceInputs["enableNonSslPort"] = (args ? args.enableNonSslPort : undefined) ?? false;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minimumTlsVersion"] = args ? args.minimumTlsVersion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["redisConfiguration"] = args ? args.redisConfiguration : undefined;
            resourceInputs["redisVersion"] = args ? args.redisVersion : undefined;
            resourceInputs["replicasPerMaster"] = args ? args.replicasPerMaster : undefined;
            resourceInputs["replicasPerPrimary"] = args ? args.replicasPerPrimary : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shardCount"] = args ? args.shardCount : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["staticIP"] = args ? args.staticIP : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantSettings"] = args ? args.tenantSettings : undefined;
            resourceInputs["updateChannel"] = args ? args.updateChannel : undefined;
            resourceInputs["zonalAllocationPolicy"] = args ? args.zonalAllocationPolicy : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["accessKeys"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["linkedServers"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sslPort"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessKeys"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["disableAccessKeyAuthentication"] = undefined /*out*/;
            resourceInputs["enableNonSslPort"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["linkedServers"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["minimumTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["redisConfiguration"] = undefined /*out*/;
            resourceInputs["redisVersion"] = undefined /*out*/;
            resourceInputs["replicasPerMaster"] = undefined /*out*/;
            resourceInputs["replicasPerPrimary"] = undefined /*out*/;
            resourceInputs["shardCount"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["sslPort"] = undefined /*out*/;
            resourceInputs["staticIP"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantSettings"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updateChannel"] = undefined /*out*/;
            resourceInputs["zonalAllocationPolicy"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache/v20200601:Redis" }, { type: "azure-native:cache/v20230401:Redis" }, { type: "azure-native:cache/v20230501preview:Redis" }, { type: "azure-native:cache/v20230801:Redis" }, { type: "azure-native:cache/v20240301:Redis" }, { type: "azure-native:cache/v20240401preview:Redis" }, { type: "azure-native:cache/v20241101:Redis" }, { type: "azure-native:cache:Redis" }, { type: "azure-native:redis/v20150801:Redis" }, { type: "azure-native:redis/v20160401:Redis" }, { type: "azure-native:redis/v20170201:Redis" }, { type: "azure-native:redis/v20171001:Redis" }, { type: "azure-native:redis/v20180301:Redis" }, { type: "azure-native:redis/v20190701:Redis" }, { type: "azure-native:redis/v20200601:Redis" }, { type: "azure-native:redis/v20201201:Redis" }, { type: "azure-native:redis/v20210601:Redis" }, { type: "azure-native:redis/v20220501:Redis" }, { type: "azure-native:redis/v20220601:Redis" }, { type: "azure-native:redis/v20230401:Redis" }, { type: "azure-native:redis/v20230501preview:Redis" }, { type: "azure-native:redis/v20230801:Redis" }, { type: "azure-native:redis/v20240301:Redis" }, { type: "azure-native:redis/v20240401preview:Redis" }, { type: "azure-native:redis/v20241101:Redis" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Redis.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Redis resource.
 */
export interface RedisArgs {
    /**
     * Authentication to Redis through access keys is disabled when set as true. Default value is false.
     */
    disableAccessKeyAuthentication?: pulumi.Input<boolean>;
    /**
     * Specifies whether the non-ssl Redis server port (6379) is enabled.
     */
    enableNonSslPort?: pulumi.Input<boolean>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
     */
    minimumTlsVersion?: pulumi.Input<string | types.enums.TlsVersion>;
    /**
     * The name of the Redis cache.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta, maxmemory-policy,notify-keyspace-events, aof-backup-enabled, aof-storage-connection-string-0, aof-storage-connection-string-1 etc.
     */
    redisConfiguration?: pulumi.Input<types.inputs.RedisCommonPropertiesRedisConfigurationArgs>;
    /**
     * Redis version. This should be in the form 'major[.minor]' (only 'major' is required) or the value 'latest' which refers to the latest stable Redis version that is available. Supported versions: 4.0, 6.0 (latest). Default value is 'latest'.
     */
    redisVersion?: pulumi.Input<string>;
    /**
     * The number of replicas to be created per primary.
     */
    replicasPerMaster?: pulumi.Input<number>;
    /**
     * The number of replicas to be created per primary.
     */
    replicasPerPrimary?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The number of shards to be created on a Premium Cluster Cache.
     */
    shardCount?: pulumi.Input<number>;
    /**
     * The SKU of the Redis cache to deploy.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Static IP address. Optionally, may be specified when deploying a Redis cache inside an existing Azure Virtual Network; auto assigned by default.
     */
    staticIP?: pulumi.Input<string>;
    /**
     * The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
     */
    subnetId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A dictionary of tenant settings
     */
    tenantSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optional: Specifies the update channel for the monthly Redis updates your Redis Cache will receive. Caches using 'Preview' update channel get latest Redis updates at least 4 weeks ahead of 'Stable' channel caches. Default value is 'Stable'.
     */
    updateChannel?: pulumi.Input<string | types.enums.UpdateChannel>;
    /**
     * Optional: Specifies how availability zones are allocated to the Redis cache. 'Automatic' enables zone redundancy and Azure will automatically select zones based on regional availability and capacity. 'UserDefined' will select availability zones passed in by you using the 'zones' parameter. 'NoZones' will produce a non-zonal cache. If 'zonalAllocationPolicy' is not passed, it will be set to 'UserDefined' when zones are passed in, otherwise, it will be set to 'Automatic' in regions where zones are supported and 'NoZones' in regions where zones are not supported.
     */
    zonalAllocationPolicy?: pulumi.Input<string | types.enums.ZonalAllocationPolicy>;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}