import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Tag Contract details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class TagByProduct extends pulumi.CustomResource {
    /**
     * Get an existing TagByProduct resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TagByProduct {
        return new TagByProduct(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:TagByProduct';

    /**
     * Returns true if the given object is an instance of TagByProduct.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagByProduct {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagByProduct.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Tag name.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TagByProduct resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagByProductArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.productId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'productId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["productId"] = args ? args.productId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tagId"] = args ? args.tagId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:TagByProduct" }, { type: "azure-native:apimanagement/v20180101:TagByProduct" }, { type: "azure-native:apimanagement/v20180601preview:TagByProduct" }, { type: "azure-native:apimanagement/v20190101:TagByProduct" }, { type: "azure-native:apimanagement/v20191201:TagByProduct" }, { type: "azure-native:apimanagement/v20191201preview:TagByProduct" }, { type: "azure-native:apimanagement/v20200601preview:TagByProduct" }, { type: "azure-native:apimanagement/v20201201:TagByProduct" }, { type: "azure-native:apimanagement/v20210101preview:TagByProduct" }, { type: "azure-native:apimanagement/v20210401preview:TagByProduct" }, { type: "azure-native:apimanagement/v20210801:TagByProduct" }, { type: "azure-native:apimanagement/v20211201preview:TagByProduct" }, { type: "azure-native:apimanagement/v20220401preview:TagByProduct" }, { type: "azure-native:apimanagement/v20220801:TagByProduct" }, { type: "azure-native:apimanagement/v20220901preview:TagByProduct" }, { type: "azure-native:apimanagement/v20230301preview:TagByProduct" }, { type: "azure-native:apimanagement/v20230501preview:TagByProduct" }, { type: "azure-native:apimanagement/v20230901preview:TagByProduct" }, { type: "azure-native:apimanagement/v20240501:TagByProduct" }, { type: "azure-native:apimanagement/v20240601preview:TagByProduct" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TagByProduct.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TagByProduct resource.
 */
export interface TagByProductArgs {
    /**
     * Product identifier. Must be unique in the current API Management service instance.
     */
    productId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    tagId?: pulumi.Input<string>;
}