import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Schema version's definition.
 * Azure REST API version: 2024-09-01-preview.
 */
export class SchemaVersion extends pulumi.CustomResource {
    /**
     * Get an existing SchemaVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SchemaVersion {
        return new SchemaVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deviceregistry:SchemaVersion';

    /**
     * Returns true if the given object is an instance of SchemaVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SchemaVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SchemaVersion.__pulumiType;
    }

    /**
     * Human-readable description of the schema.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Hash of the schema content.
     */
    public /*out*/ readonly hash!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Schema content.
     */
    public readonly schemaContent!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Globally unique, immutable, non-reusable id.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SchemaVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SchemaVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.schemaContent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaContent'");
            }
            if ((!args || args.schemaName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaName'");
            }
            if ((!args || args.schemaRegistryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaRegistryName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaContent"] = args ? args.schemaContent : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["schemaRegistryName"] = args ? args.schemaRegistryName : undefined;
            resourceInputs["schemaVersionName"] = args ? args.schemaVersionName : undefined;
            resourceInputs["hash"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["hash"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["schemaContent"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deviceregistry/v20240901preview:SchemaVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SchemaVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SchemaVersion resource.
 */
export interface SchemaVersionArgs {
    /**
     * Human-readable description of the schema.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema content.
     */
    schemaContent: pulumi.Input<string>;
    /**
     * Schema name parameter.
     */
    schemaName: pulumi.Input<string>;
    /**
     * Schema registry name parameter.
     */
    schemaRegistryName: pulumi.Input<string>;
    /**
     * Schema version name parameter.
     */
    schemaVersionName?: pulumi.Input<string>;
}