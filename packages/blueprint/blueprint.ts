import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Blueprint definition.
 *
 * Uses Azure REST API version 2018-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-11-01-preview.
 */
export class Blueprint extends pulumi.CustomResource {
    /**
     * Get an existing Blueprint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Blueprint {
        return new Blueprint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:blueprint:Blueprint';

    /**
     * Returns true if the given object is an instance of Blueprint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Blueprint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Blueprint.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Multi-line explain this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * One-liner string explain this resource.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Layout view of the blueprint definition for UI reference.
     */
    public /*out*/ readonly layout!: pulumi.Output<any>;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Parameters required by this blueprint definition.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.ParameterDefinitionResponse} | undefined>;
    /**
     * Resource group placeholders defined by this blueprint definition.
     */
    public readonly resourceGroups!: pulumi.Output<{[key: string]: types.outputs.ResourceGroupDefinitionResponse} | undefined>;
    /**
     * Status of the blueprint. This field is readonly.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.BlueprintStatusResponse>;
    /**
     * The scope where this blueprint definition can be assigned.
     */
    public readonly targetScope!: pulumi.Output<string>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Published versions of this blueprint definition.
     */
    public readonly versions!: pulumi.Output<any | undefined>;

    /**
     * Create a Blueprint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlueprintArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceScope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceScope'");
            }
            if ((!args || args.targetScope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetScope'");
            }
            resourceInputs["blueprintName"] = args ? args.blueprintName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroups"] = args ? args.resourceGroups : undefined;
            resourceInputs["resourceScope"] = args ? args.resourceScope : undefined;
            resourceInputs["targetScope"] = args ? args.targetScope : undefined;
            resourceInputs["versions"] = args ? args.versions : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["layout"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["layout"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["resourceGroups"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["targetScope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["versions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:blueprint/v20181101preview:Blueprint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Blueprint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Blueprint resource.
 */
export interface BlueprintArgs {
    /**
     * Name of the blueprint definition.
     */
    blueprintName?: pulumi.Input<string>;
    /**
     * Multi-line explain this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * One-liner string explain this resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Parameters required by this blueprint definition.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ParameterDefinitionArgs>}>;
    /**
     * Resource group placeholders defined by this blueprint definition.
     */
    resourceGroups?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ResourceGroupDefinitionArgs>}>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
    /**
     * The scope where this blueprint definition can be assigned.
     */
    targetScope: pulumi.Input<string | types.enums.BlueprintTargetScope>;
    /**
     * Published versions of this blueprint definition.
     */
    versions?: any;
}