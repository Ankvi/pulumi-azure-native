import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Tag Contract details.
 * Azure REST API version: 2022-08-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export class TagByOperation extends pulumi.CustomResource {
    /**
     * Get an existing TagByOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TagByOperation {
        return new TagByOperation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:TagByOperation';

    /**
     * Returns true if the given object is an instance of TagByOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagByOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagByOperation.__pulumiType;
    }

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
     * Create a TagByOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagByOperationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.operationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operationId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["operationId"] = args ? args.operationId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tagId"] = args ? args.tagId : undefined;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:TagByOperation" }, { type: "azure-native:apimanagement/v20180101:TagByOperation" }, { type: "azure-native:apimanagement/v20180601preview:TagByOperation" }, { type: "azure-native:apimanagement/v20190101:TagByOperation" }, { type: "azure-native:apimanagement/v20191201:TagByOperation" }, { type: "azure-native:apimanagement/v20191201preview:TagByOperation" }, { type: "azure-native:apimanagement/v20200601preview:TagByOperation" }, { type: "azure-native:apimanagement/v20201201:TagByOperation" }, { type: "azure-native:apimanagement/v20210101preview:TagByOperation" }, { type: "azure-native:apimanagement/v20210401preview:TagByOperation" }, { type: "azure-native:apimanagement/v20210801:TagByOperation" }, { type: "azure-native:apimanagement/v20211201preview:TagByOperation" }, { type: "azure-native:apimanagement/v20220401preview:TagByOperation" }, { type: "azure-native:apimanagement/v20220801:TagByOperation" }, { type: "azure-native:apimanagement/v20220901preview:TagByOperation" }, { type: "azure-native:apimanagement/v20230301preview:TagByOperation" }, { type: "azure-native:apimanagement/v20230501preview:TagByOperation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TagByOperation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TagByOperation resource.
 */
export interface TagByOperationArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId: pulumi.Input<string>;
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
