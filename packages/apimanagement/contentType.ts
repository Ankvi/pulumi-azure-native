import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Content type contract details.
 * Azure REST API version: 2022-08-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export class ContentType extends pulumi.CustomResource {
    /**
     * Get an existing ContentType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContentType {
        return new ContentType(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ContentType';

    /**
     * Returns true if the given object is an instance of ContentType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContentType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContentType.__pulumiType;
    }

    /**
     * Content type description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Content type schema.
     */
    public readonly schema!: pulumi.Output<any | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Content type version.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a ContentType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContentTypeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["contentTypeId"] = args ? args.contentTypeId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schema"] = args ? args.schema : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schema"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20191201:ContentType" }, { type: "azure-native:apimanagement/v20200601preview:ContentType" }, { type: "azure-native:apimanagement/v20201201:ContentType" }, { type: "azure-native:apimanagement/v20210101preview:ContentType" }, { type: "azure-native:apimanagement/v20210401preview:ContentType" }, { type: "azure-native:apimanagement/v20210801:ContentType" }, { type: "azure-native:apimanagement/v20211201preview:ContentType" }, { type: "azure-native:apimanagement/v20220401preview:ContentType" }, { type: "azure-native:apimanagement/v20220801:ContentType" }, { type: "azure-native:apimanagement/v20220901preview:ContentType" }, { type: "azure-native:apimanagement/v20230301preview:ContentType" }, { type: "azure-native:apimanagement/v20230501preview:ContentType" }, { type: "azure-native:apimanagement/v20230901preview:ContentType" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContentType.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContentType resource.
 */
export interface ContentTypeArgs {
    /**
     * Content type identifier.
     */
    contentTypeId?: pulumi.Input<string>;
    /**
     * Content type description.
     */
    description?: pulumi.Input<string>;
    /**
     * Content type identifier
     */
    id?: pulumi.Input<string>;
    /**
     * Content type name. Must be 1 to 250 characters long.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Content type schema.
     */
    schema?: any;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Content type version.
     */
    version?: pulumi.Input<string>;
}