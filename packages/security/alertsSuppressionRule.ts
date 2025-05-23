import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes the suppression rule
 *
 * Uses Azure REST API version 2019-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2019-01-01-preview.
 */
export class AlertsSuppressionRule extends pulumi.CustomResource {
    /**
     * Get an existing AlertsSuppressionRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AlertsSuppressionRule {
        return new AlertsSuppressionRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:AlertsSuppressionRule';

    /**
     * Returns true if the given object is an instance of AlertsSuppressionRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertsSuppressionRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertsSuppressionRule.__pulumiType;
    }

    /**
     * Type of the alert to automatically suppress. For all alert types, use '*'
     */
    public readonly alertType!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Any comment regarding the rule
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Expiration date of the rule, if value is not provided or provided as null there will no expiration at all
     */
    public readonly expirationDateUtc!: pulumi.Output<string | undefined>;
    /**
     * The last time this rule was modified
     */
    public /*out*/ readonly lastModifiedUtc!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The reason for dismissing the alert
     */
    public readonly reason!: pulumi.Output<string>;
    /**
     * Possible states of the rule
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * The suppression conditions
     */
    public readonly suppressionAlertsScope!: pulumi.Output<types.outputs.SuppressionAlertsScopeResponse | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AlertsSuppressionRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertsSuppressionRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.alertType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertType'");
            }
            if ((!args || args.reason === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reason'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["alertType"] = args ? args.alertType : undefined;
            resourceInputs["alertsSuppressionRuleName"] = args ? args.alertsSuppressionRuleName : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["expirationDateUtc"] = args ? args.expirationDateUtc : undefined;
            resourceInputs["reason"] = args ? args.reason : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["suppressionAlertsScope"] = args ? args.suppressionAlertsScope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alertType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["comment"] = undefined /*out*/;
            resourceInputs["expirationDateUtc"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["reason"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["suppressionAlertsScope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20190101preview:AlertsSuppressionRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AlertsSuppressionRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AlertsSuppressionRule resource.
 */
export interface AlertsSuppressionRuleArgs {
    /**
     * Type of the alert to automatically suppress. For all alert types, use '*'
     */
    alertType: pulumi.Input<string>;
    /**
     * The unique name of the suppression alert rule
     */
    alertsSuppressionRuleName?: pulumi.Input<string>;
    /**
     * Any comment regarding the rule
     */
    comment?: pulumi.Input<string>;
    /**
     * Expiration date of the rule, if value is not provided or provided as null there will no expiration at all
     */
    expirationDateUtc?: pulumi.Input<string>;
    /**
     * The reason for dismissing the alert
     */
    reason: pulumi.Input<string>;
    /**
     * Possible states of the rule
     */
    state: pulumi.Input<string | types.enums.RuleState>;
    /**
     * The suppression conditions
     */
    suppressionAlertsScope?: pulumi.Input<types.inputs.SuppressionAlertsScopeArgs>;
}