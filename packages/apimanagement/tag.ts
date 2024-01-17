import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Tag Contract details.
 * Azure REST API version: 2022-08-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export class Tag extends pulumi.CustomResource {
    /**
     * Get an existing Tag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Tag {
        return new Tag(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:Tag';

    /**
     * Returns true if the given object is an instance of Tag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Tag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Tag.__pulumiType;
    }

    /**
     * Tag name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Tag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tagId"] = args ? args.tagId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:Tag" }, { type: "azure-native:apimanagement/v20180101:Tag" }, { type: "azure-native:apimanagement/v20180601preview:Tag" }, { type: "azure-native:apimanagement/v20190101:Tag" }, { type: "azure-native:apimanagement/v20191201:Tag" }, { type: "azure-native:apimanagement/v20191201preview:Tag" }, { type: "azure-native:apimanagement/v20200601preview:Tag" }, { type: "azure-native:apimanagement/v20201201:Tag" }, { type: "azure-native:apimanagement/v20210101preview:Tag" }, { type: "azure-native:apimanagement/v20210401preview:Tag" }, { type: "azure-native:apimanagement/v20210801:Tag" }, { type: "azure-native:apimanagement/v20211201preview:Tag" }, { type: "azure-native:apimanagement/v20220401preview:Tag" }, { type: "azure-native:apimanagement/v20220801:Tag" }, { type: "azure-native:apimanagement/v20220901preview:Tag" }, { type: "azure-native:apimanagement/v20230301preview:Tag" }, { type: "azure-native:apimanagement/v20230501preview:Tag" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Tag.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Tag resource.
 */
export interface TagArgs {
    /**
     * Tag name.
     */
    displayName: pulumi.Input<string>;
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
