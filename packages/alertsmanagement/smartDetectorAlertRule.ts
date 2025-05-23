import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The alert rule information
 *
 * Uses Azure REST API version 2021-04-01. In version 2.x of the Azure Native provider, it used API version 2021-04-01.
 *
 * Other available API versions: 2019-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native alertsmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SmartDetectorAlertRule extends pulumi.CustomResource {
    /**
     * Get an existing SmartDetectorAlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SmartDetectorAlertRule {
        return new SmartDetectorAlertRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:alertsmanagement:SmartDetectorAlertRule';

    /**
     * Returns true if the given object is an instance of SmartDetectorAlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SmartDetectorAlertRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SmartDetectorAlertRule.__pulumiType;
    }

    /**
     * The alert rule actions.
     */
    public readonly actionGroups!: pulumi.Output<types.outputs.ActionGroupsInformationResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The alert rule description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The alert rule's detector.
     */
    public readonly detector!: pulumi.Output<types.outputs.DetectorResponse>;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 1 minute, depending on the detector.
     */
    public readonly frequency!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The alert rule resources scope.
     */
    public readonly scope!: pulumi.Output<string[]>;
    /**
     * The alert rule severity.
     */
    public readonly severity!: pulumi.Output<string>;
    /**
     * The alert rule state.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The alert rule throttling information.
     */
    public readonly throttling!: pulumi.Output<types.outputs.ThrottlingInformationResponse | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SmartDetectorAlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmartDetectorAlertRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.actionGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actionGroups'");
            }
            if ((!args || args.detector === undefined) && !opts.urn) {
                throw new Error("Missing required property 'detector'");
            }
            if ((!args || args.frequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frequency'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.severity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'severity'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["actionGroups"] = args ? args.actionGroups : undefined;
            resourceInputs["alertRuleName"] = args ? args.alertRuleName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["detector"] = args ? args.detector : undefined;
            resourceInputs["frequency"] = args ? args.frequency : undefined;
            resourceInputs["location"] = (args ? args.location : undefined) ?? "global";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["throttling"] = args ? args.throttling : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actionGroups"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["detector"] = undefined /*out*/;
            resourceInputs["frequency"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["throttling"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:alertsmanagement/v20190301:SmartDetectorAlertRule" }, { type: "azure-native:alertsmanagement/v20190601:SmartDetectorAlertRule" }, { type: "azure-native:alertsmanagement/v20210401:SmartDetectorAlertRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SmartDetectorAlertRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SmartDetectorAlertRule resource.
 */
export interface SmartDetectorAlertRuleArgs {
    /**
     * The alert rule actions.
     */
    actionGroups: pulumi.Input<types.inputs.ActionGroupsInformationArgs>;
    /**
     * The name of the alert rule.
     */
    alertRuleName?: pulumi.Input<string>;
    /**
     * The alert rule description.
     */
    description?: pulumi.Input<string>;
    /**
     * The alert rule's detector.
     */
    detector: pulumi.Input<types.inputs.DetectorArgs>;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 1 minute, depending on the detector.
     */
    frequency: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The alert rule resources scope.
     */
    scope: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The alert rule severity.
     */
    severity: pulumi.Input<string | types.enums.Severity>;
    /**
     * The alert rule state.
     */
    state: pulumi.Input<string | types.enums.AlertRuleState>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The alert rule throttling information.
     */
    throttling?: pulumi.Input<types.inputs.ThrottlingInformationArgs>;
}