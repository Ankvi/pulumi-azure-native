import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * An activity log alert resource.
 */
export class ActivityLogAlert extends pulumi.CustomResource {
    /**
     * Get an existing ActivityLogAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ActivityLogAlert {
        return new ActivityLogAlert(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights/v20170401:ActivityLogAlert';

    /**
     * Returns true if the given object is an instance of ActivityLogAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActivityLogAlert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActivityLogAlert.__pulumiType;
    }

    /**
     * The actions that will activate when the condition is met.
     */
    public readonly actions!: pulumi.Output<types.outputs.insights.v20170401.ActivityLogAlertActionListResponse>;
    /**
     * The condition that will cause this alert to activate.
     */
    public readonly condition!: pulumi.Output<types.outputs.insights.v20170401.ActivityLogAlertAllOfConditionResponse>;
    /**
     * A description of this activity log alert.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.
     */
    public readonly scopes!: pulumi.Output<string[]>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ActivityLogAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActivityLogAlertArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.actions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actions'");
            }
            if ((!args || args.condition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'condition'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scopes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopes'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["activityLogAlertName"] = args ? args.activityLogAlertName : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = (args ? args.enabled : undefined) ?? true;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["condition"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights:ActivityLogAlert" }, { type: "azure-native:insights/v20201001:ActivityLogAlert" }, { type: "azure-native:insights/v20230101preview:ActivityLogAlert" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ActivityLogAlert.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ActivityLogAlert resource.
 */
export interface ActivityLogAlertArgs {
    /**
     * The actions that will activate when the condition is met.
     */
    actions: pulumi.Input<types.inputs.insights.v20170401.ActivityLogAlertActionListArgs>;
    /**
     * The name of the activity log alert.
     */
    activityLogAlertName?: pulumi.Input<string>;
    /**
     * The condition that will cause this alert to activate.
     */
    condition: pulumi.Input<types.inputs.insights.v20170401.ActivityLogAlertAllOfConditionArgs>;
    /**
     * A description of this activity log alert.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
