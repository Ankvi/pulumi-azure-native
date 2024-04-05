import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Contract details.
 */
export class ProductGroup extends pulumi.CustomResource {
    /**
     * Get an existing ProductGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProductGroup {
        return new ProductGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20230501preview:ProductGroup';

    /**
     * Returns true if the given object is an instance of ProductGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProductGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProductGroup.__pulumiType;
    }

    /**
     * true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
     */
    public /*out*/ readonly builtIn!: pulumi.Output<boolean>;
    /**
     * Group description. Can contain HTML formatting tags.
     */
    public /*out*/ readonly description!: pulumi.Output<string | undefined>;
    /**
     * Group name.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
     */
    public /*out*/ readonly externalId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProductGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProductGroupArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["productId"] = args ? args.productId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["builtIn"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["externalId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["builtIn"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["externalId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:ProductGroup" }, { type: "azure-native:apimanagement/v20170301:ProductGroup" }, { type: "azure-native:apimanagement/v20180101:ProductGroup" }, { type: "azure-native:apimanagement/v20180601preview:ProductGroup" }, { type: "azure-native:apimanagement/v20190101:ProductGroup" }, { type: "azure-native:apimanagement/v20191201:ProductGroup" }, { type: "azure-native:apimanagement/v20191201preview:ProductGroup" }, { type: "azure-native:apimanagement/v20200601preview:ProductGroup" }, { type: "azure-native:apimanagement/v20201201:ProductGroup" }, { type: "azure-native:apimanagement/v20210101preview:ProductGroup" }, { type: "azure-native:apimanagement/v20210401preview:ProductGroup" }, { type: "azure-native:apimanagement/v20210801:ProductGroup" }, { type: "azure-native:apimanagement/v20211201preview:ProductGroup" }, { type: "azure-native:apimanagement/v20220401preview:ProductGroup" }, { type: "azure-native:apimanagement/v20220801:ProductGroup" }, { type: "azure-native:apimanagement/v20220901preview:ProductGroup" }, { type: "azure-native:apimanagement/v20230301preview:ProductGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProductGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProductGroup resource.
 */
export interface ProductGroupArgs {
    /**
     * Group identifier. Must be unique in the current API Management service instance.
     */
    groupId?: pulumi.Input<string>;
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
}