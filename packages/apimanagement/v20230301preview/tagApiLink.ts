import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Tag-API link details.
 */
export class TagApiLink extends pulumi.CustomResource {
    /**
     * Get an existing TagApiLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TagApiLink {
        return new TagApiLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20230301preview:TagApiLink';

    /**
     * Returns true if the given object is an instance of TagApiLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagApiLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagApiLink.__pulumiType;
    }

    /**
     * Full resource Id of an API.
     */
    public readonly apiId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TagApiLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagApiLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.tagId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tagId'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["apiLinkId"] = args ? args.apiLinkId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tagId"] = args ? args.tagId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:TagApiLink" }, { type: "azure-native:apimanagement/v20220901preview:TagApiLink" }, { type: "azure-native:apimanagement/v20230501preview:TagApiLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TagApiLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TagApiLink resource.
 */
export interface TagApiLinkArgs {
    /**
     * Full resource Id of an API.
     */
    apiId: pulumi.Input<string>;
    /**
     * Tag-API link identifier. Must be unique in the current API Management service instance.
     */
    apiLinkId?: pulumi.Input<string>;
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
    tagId: pulumi.Input<string>;
}