import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes the RedisEnterprise cluster
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2020-10-01-preview, 2021-02-01-preview, 2021-03-01, 2021-08-01, 2022-01-01, 2022-11-01-preview, 2023-03-01-preview, 2023-07-01, 2023-08-01-preview, 2023-10-01-preview, 2023-11-01, 2024-02-01, 2024-06-01-preview, 2024-09-01-preview, 2024-10-01, 2025-04-01, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redisenterprise [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class RedisEnterprise extends pulumi.CustomResource {
    /**
     * Get an existing RedisEnterprise resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RedisEnterprise {
        return new RedisEnterprise(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:redisenterprise:RedisEnterprise';

    /**
     * Returns true if the given object is an instance of RedisEnterprise.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RedisEnterprise {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RedisEnterprise.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Encryption-at-rest configuration for the cluster.
     */
    public readonly encryption!: pulumi.Output<types.outputs.ClusterPropertiesResponseEncryption | undefined>;
    /**
     * DNS name of the cluster endpoint
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The minimum TLS version for the cluster to support, e.g. '1.2'
     */
    public readonly minimumTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of private endpoint connections associated with the specified RedisEnterprise cluster
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Current provisioning status of the cluster
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Version of redis the cluster supports, e.g. '6'
     */
    public /*out*/ readonly redisVersion!: pulumi.Output<string>;
    /**
     * Current resource status of the cluster
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The SKU to create, which affects price, performance, and features.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The Availability Zones where this cluster will be deployed.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a RedisEnterprise resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedisEnterpriseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minimumTlsVersion"] = args ? args.minimumTlsVersion : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["redisVersion"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["minimumTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["redisVersion"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache/v20201001preview:RedisEnterprise" }, { type: "azure-native:cache/v20230301preview:RedisEnterprise" }, { type: "azure-native:cache/v20230701:RedisEnterprise" }, { type: "azure-native:cache/v20230801preview:RedisEnterprise" }, { type: "azure-native:cache/v20231001preview:RedisEnterprise" }, { type: "azure-native:cache/v20231101:RedisEnterprise" }, { type: "azure-native:cache/v20240201:RedisEnterprise" }, { type: "azure-native:cache/v20240301preview:RedisEnterprise" }, { type: "azure-native:cache/v20240601preview:RedisEnterprise" }, { type: "azure-native:cache/v20240901preview:RedisEnterprise" }, { type: "azure-native:cache/v20241001:RedisEnterprise" }, { type: "azure-native:cache:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20201001preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20210201preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20210301:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20210801:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20220101:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20221101preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20230301preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20230701:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20230801preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20231001preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20231101:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20240201:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20240301preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20240601preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20240901preview:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20241001:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20250401:RedisEnterprise" }, { type: "azure-native:redisenterprise/v20250501preview:RedisEnterprise" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RedisEnterprise.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RedisEnterprise resource.
 */
export interface RedisEnterpriseArgs {
    /**
     * The name of the Redis Enterprise cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Encryption-at-rest configuration for the cluster.
     */
    encryption?: pulumi.Input<types.inputs.ClusterPropertiesEncryptionArgs>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The minimum TLS version for the cluster to support, e.g. '1.2'
     */
    minimumTlsVersion?: pulumi.Input<string | types.enums.TlsVersion>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU to create, which affects price, performance, and features.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Availability Zones where this cluster will be deployed.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}