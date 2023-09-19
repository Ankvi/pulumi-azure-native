import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Fusion alert rule.
 */
export class FusionAlertRule extends pulumi.CustomResource {
    /**
     * Get an existing FusionAlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FusionAlertRule {
        return new FusionAlertRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20210301preview:FusionAlertRule';

    /**
     * Returns true if the given object is an instance of FusionAlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FusionAlertRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FusionAlertRule.__pulumiType;
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
     * Expected value is 'Fusion'.
     */
    public readonly kind!: pulumi.Output<"Fusion">;
    /**
     * The last time that this alert has been modified.
     */
    public /*out*/ readonly lastModifiedUtc!: pulumi.Output<string>;
    /**
     * Azure resource name
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
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FusionAlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FusionAlertRuleArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.operationalInsightsResourceProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operationalInsightsResourceProvider'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["alertRuleTemplateName"] = args ? args.alertRuleTemplateName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["kind"] = "Fusion";
            resourceInputs["operationalInsightsResourceProvider"] = args ? args.operationalInsightsResourceProvider : undefined;
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
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:FusionAlertRule" }, { type: "azure-native:securityinsights/v20190101preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20200101:FusionAlertRule" }, { type: "azure-native:securityinsights/v20210901preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20211001:FusionAlertRule" }, { type: "azure-native:securityinsights/v20211001preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20220101preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20220401preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20220501preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20220601preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20220701preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20220801:FusionAlertRule" }, { type: "azure-native:securityinsights/v20220801preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20220901preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20221001preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20221101:FusionAlertRule" }, { type: "azure-native:securityinsights/v20221101preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20221201preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20230201:FusionAlertRule" }, { type: "azure-native:securityinsights/v20230201preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20230301preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20230401preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20230501preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20230601preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20230701preview:FusionAlertRule" }, { type: "azure-native:securityinsights/v20230801preview:FusionAlertRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FusionAlertRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FusionAlertRule resource.
 */
export interface FusionAlertRuleArgs {
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
     * Expected value is 'Fusion'.
     */
    kind: pulumi.Input<"Fusion">;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
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
