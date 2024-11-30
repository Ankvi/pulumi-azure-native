import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Global Schema Contract details.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export class GlobalSchema extends pulumi.CustomResource {
    /**
     * Get an existing GlobalSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GlobalSchema {
        return new GlobalSchema(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:GlobalSchema';

    /**
     * Returns true if the given object is an instance of GlobalSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GlobalSchema {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GlobalSchema.__pulumiType;
    }

    /**
     * Free-form schema entity description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Schema Type. Immutable.
     */
    public readonly schemaType!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Json-encoded string for non json-based schema.
     */
    public readonly value!: pulumi.Output<any | undefined>;

    /**
     * Create a GlobalSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GlobalSchemaArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.schemaType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaType'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaId"] = args ? args.schemaId : undefined;
            resourceInputs["schemaType"] = args ? args.schemaType : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schemaType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20210401preview:GlobalSchema" }, { type: "azure-native:apimanagement/v20210801:GlobalSchema" }, { type: "azure-native:apimanagement/v20211201preview:GlobalSchema" }, { type: "azure-native:apimanagement/v20220401preview:GlobalSchema" }, { type: "azure-native:apimanagement/v20220801:GlobalSchema" }, { type: "azure-native:apimanagement/v20220901preview:GlobalSchema" }, { type: "azure-native:apimanagement/v20230301preview:GlobalSchema" }, { type: "azure-native:apimanagement/v20230501preview:GlobalSchema" }, { type: "azure-native:apimanagement/v20230901preview:GlobalSchema" }, { type: "azure-native:apimanagement/v20240501:GlobalSchema" }, { type: "azure-native:apimanagement/v20240601preview:GlobalSchema" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GlobalSchema.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GlobalSchema resource.
 */
export interface GlobalSchemaArgs {
    /**
     * Free-form schema entity description.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema id identifier. Must be unique in the current API Management service instance.
     */
    schemaId?: pulumi.Input<string>;
    /**
     * Schema Type. Immutable.
     */
    schemaType: pulumi.Input<string | types.enums.SchemaType>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Json-encoded string for non json-based schema.
     */
    value?: any;
}