import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Prometheus rule group resource.
 * Azure REST API version: 2023-03-01.
 */
export class PrometheusRuleGroup extends pulumi.CustomResource {
    /**
     * Get an existing PrometheusRuleGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrometheusRuleGroup {
        return new PrometheusRuleGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:alertsmanagement:PrometheusRuleGroup';

    /**
     * Returns true if the given object is an instance of PrometheusRuleGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrometheusRuleGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrometheusRuleGroup.__pulumiType;
    }

    /**
     * Apply rule to data from a specific cluster.
     */
    public readonly clusterName!: pulumi.Output<string | undefined>;
    /**
     * Rule group description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Enable/disable rule group.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes
     */
    public readonly interval!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the rules in the Prometheus rule group.
     */
    public readonly rules!: pulumi.Output<types.outputs.PrometheusRuleResponse[]>;
    /**
     * Target Azure Monitor workspaces resource ids. This api-version is currently limited to creating with one scope. This may change in future.
     */
    public readonly scopes!: pulumi.Output<string[]>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrometheusRuleGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrometheusRuleGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            if ((!args || args.scopes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopes'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleGroupName"] = args ? args.ruleGroupName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["clusterName"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["interval"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["rules"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:alertsmanagement/v20210722preview:PrometheusRuleGroup" }, { type: "azure-native:alertsmanagement/v20230301:PrometheusRuleGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrometheusRuleGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrometheusRuleGroup resource.
 */
export interface PrometheusRuleGroupArgs {
    /**
     * Apply rule to data from a specific cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Rule group description.
     */
    description?: pulumi.Input<string>;
    /**
     * Enable/disable rule group.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes
     */
    interval?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule group.
     */
    ruleGroupName?: pulumi.Input<string>;
    /**
     * Defines the rules in the Prometheus rule group.
     */
    rules: pulumi.Input<pulumi.Input<types.inputs.PrometheusRuleArgs>[]>;
    /**
     * Target Azure Monitor workspaces resource ids. This api-version is currently limited to creating with one scope. This may change in future.
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}