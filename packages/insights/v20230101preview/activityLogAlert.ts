import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Activity Log Alert rule resource.
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
    public static readonly __pulumiType = 'azure-native:insights/v20230101preview:ActivityLogAlert';

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
    public readonly actions!: pulumi.Output<types.outputs.ActionListResponse>;
    /**
     * The condition that will cause this alert to activate.
     */
    public readonly condition!: pulumi.Output<types.outputs.AlertRuleAllOfConditionResponse>;
    /**
     * A description of this Activity Log Alert rule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The location of the resource. Since Azure Activity Log Alerts is a global service, the location of the rules should always be 'global'.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item.
     */
    public readonly scopes!: pulumi.Output<string[] | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The tenant GUID. Must be provided for tenant-level and management group events rules.
     */
    public readonly tenantScope!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
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
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["activityLogAlertName"] = args ? args.activityLogAlertName : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = (args ? args.enabled : undefined) ?? true;
            resourceInputs["location"] = (args ? args.location : undefined) ?? "global";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantScope"] = args ? args.tenantScope : undefined;
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
            resourceInputs["tenantScope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights:ActivityLogAlert" }, { type: "azure-native:insights/v20170401:ActivityLogAlert" }, { type: "azure-native:insights/v20201001:ActivityLogAlert" }] };
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
    actions: pulumi.Input<types.inputs.ActionListArgs>;
    /**
     * The name of the Activity Log Alert rule.
     */
    activityLogAlertName?: pulumi.Input<string>;
    /**
     * The condition that will cause this alert to activate.
     */
    condition: pulumi.Input<types.inputs.AlertRuleAllOfConditionArgs>;
    /**
     * A description of this Activity Log Alert rule.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The location of the resource. Since Azure Activity Log Alerts is a global service, the location of the rules should always be 'global'.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The tenant GUID. Must be provided for tenant-level and management group events rules.
     */
    tenantScope?: pulumi.Input<string>;
}
