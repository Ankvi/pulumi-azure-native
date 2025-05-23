import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Cache details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:apimanagement:Cache';

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
     * Runtime connection string to cache
     */
    public readonly connectionString!: pulumi.Output<string>;
    /**
     * Cache description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Original uri of entity in external system cache points to
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Location identifier to use cache from (should be either 'default' or valid Azure region identifier)
     */
    public readonly useFromLocation!: pulumi.Output<string>;

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
            if ((!args || args.connectionString === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionString'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.useFromLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'useFromLocation'");
            }
            resourceInputs["cacheId"] = args ? args.cacheId : undefined;
            resourceInputs["connectionString"] = args ? args.connectionString : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["useFromLocation"] = args ? args.useFromLocation : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useFromLocation"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20180601preview:Cache" }, { type: "azure-native:apimanagement/v20190101:Cache" }, { type: "azure-native:apimanagement/v20191201:Cache" }, { type: "azure-native:apimanagement/v20191201preview:Cache" }, { type: "azure-native:apimanagement/v20200601preview:Cache" }, { type: "azure-native:apimanagement/v20201201:Cache" }, { type: "azure-native:apimanagement/v20210101preview:Cache" }, { type: "azure-native:apimanagement/v20210401preview:Cache" }, { type: "azure-native:apimanagement/v20210801:Cache" }, { type: "azure-native:apimanagement/v20211201preview:Cache" }, { type: "azure-native:apimanagement/v20220401preview:Cache" }, { type: "azure-native:apimanagement/v20220801:Cache" }, { type: "azure-native:apimanagement/v20220901preview:Cache" }, { type: "azure-native:apimanagement/v20230301preview:Cache" }, { type: "azure-native:apimanagement/v20230501preview:Cache" }, { type: "azure-native:apimanagement/v20230901preview:Cache" }, { type: "azure-native:apimanagement/v20240501:Cache" }, { type: "azure-native:apimanagement/v20240601preview:Cache" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cache.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cache resource.
 */
export interface CacheArgs {
    /**
     * Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
     */
    cacheId?: pulumi.Input<string>;
    /**
     * Runtime connection string to cache
     */
    connectionString: pulumi.Input<string>;
    /**
     * Cache description
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Original uri of entity in external system cache points to
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Location identifier to use cache from (should be either 'default' or valid Azure region identifier)
     */
    useFromLocation: pulumi.Input<string>;
}