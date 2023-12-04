import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents MLBehaviorAnalytics alert rule.
 */
export class MLBehaviorAnalyticsAlertRule extends pulumi.CustomResource {
    /**
     * Get an existing MLBehaviorAnalyticsAlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MLBehaviorAnalyticsAlertRule {
        return new MLBehaviorAnalyticsAlertRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20231001preview:MLBehaviorAnalyticsAlertRule';

    /**
     * Returns true if the given object is an instance of MLBehaviorAnalyticsAlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MLBehaviorAnalyticsAlertRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MLBehaviorAnalyticsAlertRule.__pulumiType;
    }

    /**
     * The Name of the alert rule template used to create this rule.
     */
    public readonly alertRuleTemplateName!: pulumi.Output<string>;
    /**
     * The description of the alert rule.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * The display name for alerts created by this alert rule.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * Determines whether this alert rule is enabled or disabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the alert rule
     * Expected value is 'MLBehaviorAnalytics'.
     */
    public readonly kind!: pulumi.Output<"MLBehaviorAnalytics">;
    /**
     * The last time that this alert rule has been modified.
     */
    public /*out*/ readonly lastModifiedUtc!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The severity for alerts created by this alert rule.
     */
    public /*out*/ readonly severity!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tactics of the alert rule
     */
    public /*out*/ readonly tactics!: pulumi.Output<string[]>;
    /**
     * The techniques of the alert rule
     */
    public /*out*/ readonly techniques!: pulumi.Output<string[]>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MLBehaviorAnalyticsAlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MLBehaviorAnalyticsAlertRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.alertRuleTemplateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertRuleTemplateName'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["alertRuleTemplateName"] = args ? args.alertRuleTemplateName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["kind"] = "MLBehaviorAnalytics";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleId"] = args ? args.ruleId : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tactics"] = undefined /*out*/;
            resourceInputs["techniques"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alertRuleTemplateName"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tactics"] = undefined /*out*/;
            resourceInputs["techniques"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20190101preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20200101:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20210301preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20210901preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20211001:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20211001preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20220101preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20220401preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20220501preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20220601preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20220701preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20220801:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20220801preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20220901preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20221001preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20221101:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20221101preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20221201preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230201:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230201preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230301preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230401preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230501preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230601preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230701preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230801preview:MLBehaviorAnalyticsAlertRule" }, { type: "azure-native:securityinsights/v20230901preview:MLBehaviorAnalyticsAlertRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MLBehaviorAnalyticsAlertRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MLBehaviorAnalyticsAlertRule resource.
 */
export interface MLBehaviorAnalyticsAlertRuleArgs {
    /**
     * The Name of the alert rule template used to create this rule.
     */
    alertRuleTemplateName: pulumi.Input<string>;
    /**
     * Determines whether this alert rule is enabled or disabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The kind of the alert rule
     * Expected value is 'MLBehaviorAnalytics'.
     */
    kind: pulumi.Input<"MLBehaviorAnalytics">;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Alert rule ID
     */
    ruleId?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}