import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Metadata schema entity. Used to define metadata for the entities in API catalog.
 *
 * Uses Azure REST API version 2024-03-15-preview. In version 2.x of the Azure Native provider, it used API version 2024-03-01.
 *
 * Other available API versions: 2024-03-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apicenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MetadataSchema extends pulumi.CustomResource {
    /**
     * Get an existing MetadataSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MetadataSchema {
        return new MetadataSchema(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apicenter:MetadataSchema';

    /**
     * Returns true if the given object is an instance of MetadataSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetadataSchema {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetadataSchema.__pulumiType;
    }

    /**
     * The assignees
     */
    public readonly assignedTo!: pulumi.Output<types.outputs.MetadataAssignmentResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The schema defining the type.
     */
    public readonly schema!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MetadataSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetadataSchemaArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.schema === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schema'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["assignedTo"] = args ? args.assignedTo : undefined;
            resourceInputs["metadataSchemaName"] = args ? args.metadataSchemaName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schema"] = args ? args.schema : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assignedTo"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schema"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apicenter/v20240301:MetadataSchema" }, { type: "azure-native:apicenter/v20240315preview:MetadataSchema" }, { type: "azure-native:apicenter/v20240601preview:MetadataSchema" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MetadataSchema.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MetadataSchema resource.
 */
export interface MetadataSchemaArgs {
    /**
     * The assignees
     */
    assignedTo?: pulumi.Input<pulumi.Input<types.inputs.MetadataAssignmentArgs>[]>;
    /**
     * The name of the metadata schema.
     */
    metadataSchemaName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The schema defining the type.
     */
    schema: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
}