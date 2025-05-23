import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2023-05-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01-preview, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagecache [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Cache extends pulumi.CustomResource {
    /**
     * Get an existing Cache resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cache {
        return new Cache(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagecache:Cache';

    /**
     * Returns true if the given object is an instance of Cache.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cache {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cache.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The size of this Cache, in GB.
     */
    public readonly cacheSizeGB!: pulumi.Output<number | undefined>;
    /**
     * Specifies Directory Services settings of the cache.
     */
    public readonly directoryServicesSettings!: pulumi.Output<types.outputs.CacheDirectorySettingsResponse | undefined>;
    /**
     * Specifies encryption settings of the cache.
     */
    public readonly encryptionSettings!: pulumi.Output<types.outputs.CacheEncryptionSettingsResponse | undefined>;
    /**
     * Health of the cache.
     */
    public /*out*/ readonly health!: pulumi.Output<types.outputs.CacheHealthResponse>;
    /**
     * The identity of the cache, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.CacheIdentityResponse | undefined>;
    /**
     * Region name string.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Array of IPv4 addresses that can be used by clients mounting this cache.
     */
    public /*out*/ readonly mountAddresses!: pulumi.Output<string[]>;
    /**
     * Name of cache.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies network settings of the cache.
     */
    public readonly networkSettings!: pulumi.Output<types.outputs.CacheNetworkSettingsResponse | undefined>;
    /**
     * Specifies the priming jobs defined in the cache.
     */
    public /*out*/ readonly primingJobs!: pulumi.Output<types.outputs.PrimingJobResponse[]>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specifies security settings of the cache.
     */
    public readonly securitySettings!: pulumi.Output<types.outputs.CacheSecuritySettingsResponse | undefined>;
    /**
     * SKU for the cache.
     */
    public readonly sku!: pulumi.Output<types.outputs.CacheResponseSku | undefined>;
    /**
     * Specifies the space allocation percentage for each storage target in the cache.
     */
    public /*out*/ readonly spaceAllocation!: pulumi.Output<types.outputs.StorageTargetSpaceAllocationResponse[]>;
    /**
     * Subnet used for the cache.
     */
    public readonly subnet!: pulumi.Output<string | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of the cache; Microsoft.StorageCache/Cache
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Upgrade settings of the cache.
     */
    public readonly upgradeSettings!: pulumi.Output<types.outputs.CacheUpgradeSettingsResponse | undefined>;
    /**
     * Upgrade status of the cache.
     */
    public /*out*/ readonly upgradeStatus!: pulumi.Output<types.outputs.CacheUpgradeStatusResponse>;
    /**
     * Availability zones for resources. This field should only contain a single element in the array.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Cache resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CacheArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["cacheSizeGB"] = args ? args.cacheSizeGB : undefined;
            resourceInputs["directoryServicesSettings"] = args ? (args.directoryServicesSettings ? pulumi.output(args.directoryServicesSettings).apply(types.inputs.cacheDirectorySettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["encryptionSettings"] = args ? args.encryptionSettings : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkSettings"] = args ? (args.networkSettings ? pulumi.output(args.networkSettings).apply(types.inputs.cacheNetworkSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securitySettings"] = args ? args.securitySettings : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["subnet"] = args ? args.subnet : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["upgradeSettings"] = args ? args.upgradeSettings : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["mountAddresses"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["primingJobs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["spaceAllocation"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeStatus"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cacheSizeGB"] = undefined /*out*/;
            resourceInputs["directoryServicesSettings"] = undefined /*out*/;
            resourceInputs["encryptionSettings"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mountAddresses"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSettings"] = undefined /*out*/;
            resourceInputs["primingJobs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["securitySettings"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["spaceAllocation"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeSettings"] = undefined /*out*/;
            resourceInputs["upgradeStatus"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagecache/v20190801preview:Cache" }, { type: "azure-native:storagecache/v20191101:Cache" }, { type: "azure-native:storagecache/v20200301:Cache" }, { type: "azure-native:storagecache/v20201001:Cache" }, { type: "azure-native:storagecache/v20210301:Cache" }, { type: "azure-native:storagecache/v20210501:Cache" }, { type: "azure-native:storagecache/v20210901:Cache" }, { type: "azure-native:storagecache/v20220101:Cache" }, { type: "azure-native:storagecache/v20220501:Cache" }, { type: "azure-native:storagecache/v20230101:Cache" }, { type: "azure-native:storagecache/v20230301preview:Cache" }, { type: "azure-native:storagecache/v20230501:Cache" }, { type: "azure-native:storagecache/v20231101preview:Cache" }, { type: "azure-native:storagecache/v20240301:Cache" }, { type: "azure-native:storagecache/v20240701:Cache" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cache.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cache resource.
 */
export interface CacheArgs {
    /**
     * Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
     */
    cacheName?: pulumi.Input<string>;
    /**
     * The size of this Cache, in GB.
     */
    cacheSizeGB?: pulumi.Input<number>;
    /**
     * Specifies Directory Services settings of the cache.
     */
    directoryServicesSettings?: pulumi.Input<types.inputs.CacheDirectorySettingsArgs>;
    /**
     * Specifies encryption settings of the cache.
     */
    encryptionSettings?: pulumi.Input<types.inputs.CacheEncryptionSettingsArgs>;
    /**
     * The identity of the cache, if configured.
     */
    identity?: pulumi.Input<types.inputs.CacheIdentityArgs>;
    /**
     * Region name string.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies network settings of the cache.
     */
    networkSettings?: pulumi.Input<types.inputs.CacheNetworkSettingsArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies security settings of the cache.
     */
    securitySettings?: pulumi.Input<types.inputs.CacheSecuritySettingsArgs>;
    /**
     * SKU for the cache.
     */
    sku?: pulumi.Input<types.inputs.CacheSkuArgs>;
    /**
     * Subnet used for the cache.
     */
    subnet?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Upgrade settings of the cache.
     */
    upgradeSettings?: pulumi.Input<types.inputs.CacheUpgradeSettingsArgs>;
    /**
     * Availability zones for resources. This field should only contain a single element in the array.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}