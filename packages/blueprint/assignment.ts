import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a blueprint assignment.
 *
 * Uses Azure REST API version 2018-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-11-01-preview.
 */
export class Assignment extends pulumi.CustomResource {
    /**
     * Get an existing Assignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Assignment {
        return new Assignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:blueprint:Assignment';

    /**
     * Returns true if the given object is an instance of Assignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Assignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Assignment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * ID of the published version of a blueprint definition.
     */
    public readonly blueprintId!: pulumi.Output<string | undefined>;
    /**
     * Multi-line explain this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * One-liner string explain this resource.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Managed identity for this blueprint assignment.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse>;
    /**
     * The location of this blueprint assignment.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Defines how resources deployed by a blueprint assignment are locked.
     */
    public readonly locks!: pulumi.Output<types.outputs.AssignmentLockSettingsResponse | undefined>;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Blueprint assignment parameter values.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.ParameterValueResponse}>;
    /**
     * State of the blueprint assignment.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Names and locations of resource group placeholders.
     */
    public readonly resourceGroups!: pulumi.Output<{[key: string]: types.outputs.ResourceGroupValueResponse}>;
    /**
     * The target subscription scope of the blueprint assignment (format: '/subscriptions/{subscriptionId}'). For management group level assignments, the property is required.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Status of blueprint assignment. This field is readonly.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.AssignmentStatusResponse>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Assignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.identity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identity'");
            }
            if ((!args || args.parameters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parameters'");
            }
            if ((!args || args.resourceGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroups'");
            }
            if ((!args || args.resourceScope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceScope'");
            }
            resourceInputs["assignmentName"] = args ? args.assignmentName : undefined;
            resourceInputs["blueprintId"] = args ? args.blueprintId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["locks"] = args ? args.locks : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroups"] = args ? args.resourceGroups : undefined;
            resourceInputs["resourceScope"] = args ? args.resourceScope : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["blueprintId"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["locks"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGroups"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:blueprint/v20181101preview:Assignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Assignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Assignment resource.
 */
export interface AssignmentArgs {
    /**
     * Name of the blueprint assignment.
     */
    assignmentName?: pulumi.Input<string>;
    /**
     * ID of the published version of a blueprint definition.
     */
    blueprintId?: pulumi.Input<string>;
    /**
     * Multi-line explain this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * One-liner string explain this resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Managed identity for this blueprint assignment.
     */
    identity: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The location of this blueprint assignment.
     */
    location?: pulumi.Input<string>;
    /**
     * Defines how resources deployed by a blueprint assignment are locked.
     */
    locks?: pulumi.Input<types.inputs.AssignmentLockSettingsArgs>;
    /**
     * Blueprint assignment parameter values.
     */
    parameters: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ParameterValueArgs>}>;
    /**
     * Names and locations of resource group placeholders.
     */
    resourceGroups: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ResourceGroupValueArgs>}>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
    /**
     * The target subscription scope of the blueprint assignment (format: '/subscriptions/{subscriptionId}'). For management group level assignments, the property is required.
     */
    scope?: pulumi.Input<string>;
}