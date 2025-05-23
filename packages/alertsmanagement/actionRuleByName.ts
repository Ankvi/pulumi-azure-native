import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Action rule object containing target scope, conditions and suppression logic
 *
 * Uses Azure REST API version 2019-05-05-preview. In version 2.x of the Azure Native provider, it used API version 2019-05-05-preview.
 */
export class ActionRuleByName extends pulumi.CustomResource {
    /**
     * Get an existing ActionRuleByName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ActionRuleByName {
        return new ActionRuleByName(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:alertsmanagement:ActionRuleByName';

    /**
     * Returns true if the given object is an instance of ActionRuleByName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActionRuleByName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActionRuleByName.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * action rule properties
     */
    public readonly properties!: pulumi.Output<types.outputs.ActionGroupResponse | types.outputs.DiagnosticsResponse | types.outputs.SuppressionResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ActionRuleByName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionRuleByNameArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["actionRuleName"] = args ? args.actionRuleName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:alertsmanagement/v20181102privatepreview:ActionRuleByName" }, { type: "azure-native:alertsmanagement/v20190505preview:ActionRuleByName" }, { type: "azure-native:alertsmanagement/v20210808:ActionRuleByName" }, { type: "azure-native:alertsmanagement/v20210808:AlertProcessingRuleByName" }, { type: "azure-native:alertsmanagement/v20210808preview:ActionRuleByName" }, { type: "azure-native:alertsmanagement:AlertProcessingRuleByName" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ActionRuleByName.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ActionRuleByName resource.
 */
export interface ActionRuleByNameArgs {
    /**
     * The name of action rule that needs to be created/updated
     */
    actionRuleName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * action rule properties
     */
    properties?: pulumi.Input<types.inputs.ActionGroupArgs | types.inputs.DiagnosticsArgs | types.inputs.SuppressionArgs>;
    /**
     * Resource group name where the resource is created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}