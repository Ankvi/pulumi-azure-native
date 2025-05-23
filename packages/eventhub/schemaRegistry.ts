import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Single item in List or Get Schema Group operation
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2022-10-01-preview.
 *
 * Other available API versions: 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SchemaRegistry extends pulumi.CustomResource {
    /**
     * Get an existing SchemaRegistry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SchemaRegistry {
        return new SchemaRegistry(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventhub:SchemaRegistry';

    /**
     * Returns true if the given object is an instance of SchemaRegistry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SchemaRegistry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SchemaRegistry.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Exact time the Schema Group was created.
     */
    public /*out*/ readonly createdAtUtc!: pulumi.Output<string>;
    /**
     * The ETag value.
     */
    public /*out*/ readonly eTag!: pulumi.Output<string>;
    /**
     * dictionary object for SchemaGroup group properties
     */
    public readonly groupProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly schemaCompatibility!: pulumi.Output<string | undefined>;
    public readonly schemaType!: pulumi.Output<string | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Exact time the Schema Group was updated
     */
    public /*out*/ readonly updatedAtUtc!: pulumi.Output<string>;

    /**
     * Create a SchemaRegistry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SchemaRegistryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["groupProperties"] = args ? args.groupProperties : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaCompatibility"] = args ? args.schemaCompatibility : undefined;
            resourceInputs["schemaGroupName"] = args ? args.schemaGroupName : undefined;
            resourceInputs["schemaType"] = args ? args.schemaType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAtUtc"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAtUtc"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAtUtc"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["groupProperties"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schemaCompatibility"] = undefined /*out*/;
            resourceInputs["schemaType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAtUtc"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventhub/v20211101:SchemaRegistry" }, { type: "azure-native:eventhub/v20220101preview:SchemaRegistry" }, { type: "azure-native:eventhub/v20221001preview:SchemaRegistry" }, { type: "azure-native:eventhub/v20230101preview:SchemaRegistry" }, { type: "azure-native:eventhub/v20240101:SchemaRegistry" }, { type: "azure-native:eventhub/v20240501preview:SchemaRegistry" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SchemaRegistry.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SchemaRegistry resource.
 */
export interface SchemaRegistryArgs {
    /**
     * dictionary object for SchemaGroup group properties
     */
    groupProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    schemaCompatibility?: pulumi.Input<string | types.enums.SchemaCompatibility>;
    /**
     * The Schema Group name 
     */
    schemaGroupName?: pulumi.Input<string>;
    schemaType?: pulumi.Input<string | types.enums.SchemaType>;
}