import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The metric alert resource.
 *
 * Uses Azure REST API version 2018-03-01.
 */
export class MetricAlert extends pulumi.CustomResource {
    /**
     * Get an existing MetricAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MetricAlert {
        return new MetricAlert(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:monitor:MetricAlert';

    /**
     * Returns true if the given object is an instance of MetricAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetricAlert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetricAlert.__pulumiType;
    }

    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    public readonly actions!: pulumi.Output<types.outputs.MetricAlertActionResponse[] | undefined>;
    /**
     * the flag that indicates whether the alert should be auto resolved or not. The default is true.
     */
    public readonly autoMitigate!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * defines the specific alert criteria information.
     */
    public readonly criteria!: pulumi.Output<types.outputs.MetricAlertMultipleResourceMultipleMetricCriteriaResponse | types.outputs.MetricAlertSingleResourceMultipleMetricCriteriaResponse | types.outputs.WebtestLocationAvailabilityCriteriaResponse>;
    /**
     * the description of the metric alert that will be included in the alert email.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * the flag that indicates whether the metric alert is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * how often the metric alert is evaluated represented in ISO 8601 duration format.
     */
    public readonly evaluationFrequency!: pulumi.Output<string>;
    /**
     * the value indicating whether this alert rule is migrated.
     */
    public /*out*/ readonly isMigrated!: pulumi.Output<boolean>;
    /**
     * Last time the rule was updated in ISO8601 format.
     */
    public /*out*/ readonly lastUpdatedTime!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * the list of resource id's that this metric alert is scoped to. You cannot change the scope of a metric rule based on logs.
     */
    public readonly scopes!: pulumi.Output<string[]>;
    /**
     * Alert severity {0, 1, 2, 3, 4}
     */
    public readonly severity!: pulumi.Output<number>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * the region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
     */
    public readonly targetResourceRegion!: pulumi.Output<string | undefined>;
    /**
     * the resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
     */
    public readonly targetResourceType!: pulumi.Output<string | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
     */
    public readonly windowSize!: pulumi.Output<string>;

    /**
     * Create a MetricAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetricAlertArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.criteria === undefined) && !opts.urn) {
                throw new Error("Missing required property 'criteria'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.evaluationFrequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'evaluationFrequency'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scopes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopes'");
            }
            if ((!args || args.severity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'severity'");
            }
            if ((!args || args.windowSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'windowSize'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["autoMitigate"] = args ? args.autoMitigate : undefined;
            resourceInputs["criteria"] = args ? args.criteria : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["evaluationFrequency"] = args ? args.evaluationFrequency : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetResourceRegion"] = args ? args.targetResourceRegion : undefined;
            resourceInputs["targetResourceType"] = args ? args.targetResourceType : undefined;
            resourceInputs["windowSize"] = args ? args.windowSize : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["isMigrated"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["autoMitigate"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["criteria"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["evaluationFrequency"] = undefined /*out*/;
            resourceInputs["isMigrated"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetResourceRegion"] = undefined /*out*/;
            resourceInputs["targetResourceType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["windowSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20180301:MetricAlert" }, { type: "azure-native:insights:MetricAlert" }, { type: "azure-native:monitor/v20180301:MetricAlert" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MetricAlert.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MetricAlert resource.
 */
export interface MetricAlertArgs {
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    actions?: pulumi.Input<pulumi.Input<types.inputs.MetricAlertActionArgs>[]>;
    /**
     * the flag that indicates whether the alert should be auto resolved or not. The default is true.
     */
    autoMitigate?: pulumi.Input<boolean>;
    /**
     * defines the specific alert criteria information.
     */
    criteria: pulumi.Input<types.inputs.MetricAlertMultipleResourceMultipleMetricCriteriaArgs | types.inputs.MetricAlertSingleResourceMultipleMetricCriteriaArgs | types.inputs.WebtestLocationAvailabilityCriteriaArgs>;
    /**
     * the description of the metric alert that will be included in the alert email.
     */
    description?: pulumi.Input<string>;
    /**
     * the flag that indicates whether the metric alert is enabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * how often the metric alert is evaluated represented in ISO 8601 duration format.
     */
    evaluationFrequency: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * the list of resource id's that this metric alert is scoped to. You cannot change the scope of a metric rule based on logs.
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Alert severity {0, 1, 2, 3, 4}
     */
    severity: pulumi.Input<number>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * the region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
     */
    targetResourceRegion?: pulumi.Input<string>;
    /**
     * the resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
     */
    targetResourceType?: pulumi.Input<string>;
    /**
     * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
     */
    windowSize: pulumi.Input<string>;
}