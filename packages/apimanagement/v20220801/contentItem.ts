import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Content type contract details.
 */
export class ContentItem extends pulumi.CustomResource {
    /**
     * Get an existing ContentItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContentItem {
        return new ContentItem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20220801:ContentItem';

    /**
     * Returns true if the given object is an instance of ContentItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContentItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContentItem.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the content item.
     */
    public readonly properties!: pulumi.Output<any>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ContentItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContentItemArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.contentTypeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentTypeId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["contentItemId"] = args ? args.contentItemId : undefined;
            resourceInputs["contentTypeId"] = args ? args.contentTypeId : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:ContentItem" }, { type: "azure-native:apimanagement/v20191201:ContentItem" }, { type: "azure-native:apimanagement/v20200601preview:ContentItem" }, { type: "azure-native:apimanagement/v20201201:ContentItem" }, { type: "azure-native:apimanagement/v20210101preview:ContentItem" }, { type: "azure-native:apimanagement/v20210401preview:ContentItem" }, { type: "azure-native:apimanagement/v20210801:ContentItem" }, { type: "azure-native:apimanagement/v20211201preview:ContentItem" }, { type: "azure-native:apimanagement/v20220401preview:ContentItem" }, { type: "azure-native:apimanagement/v20220901preview:ContentItem" }, { type: "azure-native:apimanagement/v20230301preview:ContentItem" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContentItem.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContentItem resource.
 */
export interface ContentItemArgs {
    /**
     * Content item identifier.
     */
    contentItemId?: pulumi.Input<string>;
    /**
     * Content type identifier.
     */
    contentTypeId: pulumi.Input<string>;
    /**
     * Properties of the content item.
     */
    properties?: any;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
