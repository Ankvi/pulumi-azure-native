import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Contract details.
 */
export class TagDescription extends pulumi.CustomResource {
    /**
     * Get an existing TagDescription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TagDescription {
        return new TagDescription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20180601preview:TagDescription';

    /**
     * Returns true if the given object is an instance of TagDescription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagDescription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagDescription.__pulumiType;
    }

    /**
     * Description of the Tag.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Tag name.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Description of the external resources describing the tag.
     */
    public readonly externalDocsDescription!: pulumi.Output<string | undefined>;
    /**
     * Absolute URL of external resources describing the tag.
     */
    public readonly externalDocsUrl!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TagDescription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagDescriptionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["externalDocsDescription"] = args ? args.externalDocsDescription : undefined;
            resourceInputs["externalDocsUrl"] = args ? args.externalDocsUrl : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tagId"] = args ? args.tagId : undefined;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["externalDocsDescription"] = undefined /*out*/;
            resourceInputs["externalDocsUrl"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:TagDescription" }, { type: "azure-native:apimanagement/v20170301:TagDescription" }, { type: "azure-native:apimanagement/v20180101:TagDescription" }, { type: "azure-native:apimanagement/v20190101:TagDescription" }, { type: "azure-native:apimanagement/v20191201:TagDescription" }, { type: "azure-native:apimanagement/v20191201preview:TagDescription" }, { type: "azure-native:apimanagement/v20200601preview:TagDescription" }, { type: "azure-native:apimanagement/v20201201:TagDescription" }, { type: "azure-native:apimanagement/v20210101preview:TagDescription" }, { type: "azure-native:apimanagement/v20210401preview:TagDescription" }, { type: "azure-native:apimanagement/v20210801:TagDescription" }, { type: "azure-native:apimanagement/v20211201preview:TagDescription" }, { type: "azure-native:apimanagement/v20220401preview:TagDescription" }, { type: "azure-native:apimanagement/v20220801:TagDescription" }, { type: "azure-native:apimanagement/v20220901preview:TagDescription" }, { type: "azure-native:apimanagement/v20230301preview:TagDescription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TagDescription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TagDescription resource.
 */
export interface TagDescriptionArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Description of the Tag.
     */
    description?: pulumi.Input<string>;
    /**
     * Description of the external resources describing the tag.
     */
    externalDocsDescription?: pulumi.Input<string>;
    /**
     * Absolute URL of external resources describing the tag.
     */
    externalDocsUrl?: pulumi.Input<string>;
    /**
     * The name of the resource group.
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
