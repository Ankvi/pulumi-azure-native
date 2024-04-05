import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
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
    public static readonly __pulumiType = 'azure-native:storagecache/v20210301:Cache';

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
     * Health of the Cache.
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
     * Array of IP addresses that can be used by clients mounting this Cache.
     */
    public /*out*/ readonly mountAddresses!: pulumi.Output<string[]>;
    /**
     * Name of Cache.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies network settings of the cache.
     */
    public readonly networkSettings!: pulumi.Output<types.outputs.CacheNetworkSettingsResponse | undefined>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Specifies security settings of the cache.
     */
    public readonly securitySettings!: pulumi.Output<types.outputs.CacheSecuritySettingsResponse | undefined>;
    /**
     * SKU for the Cache.
     */
    public readonly sku!: pulumi.Output<types.outputs.CacheResponseSku | undefined>;
    /**
     * Subnet used for the Cache.
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
     * Type of the Cache; Microsoft.StorageCache/Cache
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Upgrade status of the Cache.
     */
    public /*out*/ readonly upgradeStatus!: pulumi.Output<types.outputs.CacheUpgradeStatusResponse | undefined>;

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
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securitySettings"] = args ? args.securitySettings : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["subnet"] = args ? args.subnet : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["mountAddresses"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeStatus"] = undefined /*out*/;
        } else {
            resourceInputs["cacheSizeGB"] = undefined /*out*/;
            resourceInputs["directoryServicesSettings"] = undefined /*out*/;
            resourceInputs["encryptionSettings"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mountAddresses"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSettings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["securitySettings"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeStatus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagecache:Cache" }, { type: "azure-native:storagecache/v20190801preview:Cache" }, { type: "azure-native:storagecache/v20191101:Cache" }, { type: "azure-native:storagecache/v20200301:Cache" }, { type: "azure-native:storagecache/v20201001:Cache" }, { type: "azure-native:storagecache/v20210501:Cache" }, { type: "azure-native:storagecache/v20210901:Cache" }, { type: "azure-native:storagecache/v20220101:Cache" }, { type: "azure-native:storagecache/v20220501:Cache" }, { type: "azure-native:storagecache/v20230101:Cache" }, { type: "azure-native:storagecache/v20230301preview:Cache" }, { type: "azure-native:storagecache/v20230501:Cache" }, { type: "azure-native:storagecache/v20231101preview:Cache" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cache.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cache resource.
 */
export interface CacheArgs {
    /**
     * Name of Cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
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
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningStateType>;
    /**
     * Target resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies security settings of the cache.
     */
    securitySettings?: pulumi.Input<types.inputs.CacheSecuritySettingsArgs>;
    /**
     * SKU for the Cache.
     */
    sku?: pulumi.Input<types.inputs.CacheSkuArgs>;
    /**
     * Subnet used for the Cache.
     */
    subnet?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}