import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The batch configuration resource definition.
 */
export class IntegrationAccountBatchConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountBatchConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccountBatchConfiguration {
        return new IntegrationAccountBatchConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic/v20190501:IntegrationAccountBatchConfiguration';

    /**
     * Returns true if the given object is an instance of IntegrationAccountBatchConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationAccountBatchConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationAccountBatchConfiguration.__pulumiType;
    }

    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The batch configuration properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.BatchConfigurationPropertiesResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IntegrationAccountBatchConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountBatchConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.integrationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["batchConfigurationName"] = args ? args.batchConfigurationName : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic:IntegrationAccountBatchConfiguration" }, { type: "azure-native:logic/v20160601:IntegrationAccountBatchConfiguration" }, { type: "azure-native:logic/v20180701preview:IntegrationAccountBatchConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IntegrationAccountBatchConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IntegrationAccountBatchConfiguration resource.
 */
export interface IntegrationAccountBatchConfigurationArgs {
    /**
     * The batch configuration name.
     */
    batchConfigurationName?: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The batch configuration properties.
     */
    properties: pulumi.Input<types.inputs.BatchConfigurationPropertiesArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}