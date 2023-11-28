import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents NRT alert rule.
 */
export class NrtAlertRule extends pulumi.CustomResource {
    /**
     * Get an existing NrtAlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NrtAlertRule {
        return new NrtAlertRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20211001preview:NrtAlertRule';

    /**
     * Returns true if the given object is an instance of NrtAlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NrtAlertRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NrtAlertRule.__pulumiType;
    }

    /**
     * The alert details override settings
     */
    public readonly alertDetailsOverride!: pulumi.Output<types.outputs.AlertDetailsOverrideResponse | undefined>;
    /**
     * The Name of the alert rule template used to create this rule.
     */
    public readonly alertRuleTemplateName!: pulumi.Output<string | undefined>;
    /**
     * Dictionary of string key-value pairs of columns to be attached to the alert
     */
    public readonly customDetails!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The description of the alert rule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name for alerts created by this alert rule.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Determines whether this alert rule is enabled or disabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Array of the entity mappings of the alert rule
     */
    public readonly entityMappings!: pulumi.Output<types.outputs.EntityMappingResponse[] | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The settings of the incidents that created from alerts triggered by this analytics rule
     */
    public readonly incidentConfiguration!: pulumi.Output<types.outputs.IncidentConfigurationResponse | undefined>;
    /**
     * The kind of the alert rule
     * Expected value is 'NRT'.
     */
    public readonly kind!: pulumi.Output<"NRT">;
    /**
     * The last time that this alert rule has been modified.
     */
    public /*out*/ readonly lastModifiedUtc!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The query that creates alerts for this rule.
     */
    public readonly query!: pulumi.Output<string | undefined>;
    /**
     * The severity for alerts created by this alert rule.
     */
    public readonly severity!: pulumi.Output<string | undefined>;
    /**
     * The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
     */
    public readonly suppressionDuration!: pulumi.Output<string>;
    /**
     * Determines whether the suppression for this alert rule is enabled or disabled.
     */
    public readonly suppressionEnabled!: pulumi.Output<boolean>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tactics of the alert rule
     */
    public readonly tactics!: pulumi.Output<string[] | undefined>;
    /**
     * The techniques of the alert rule
     */
    public readonly techniques!: pulumi.Output<string[] | undefined>;
    /**
     * The version of the alert rule template used to create this rule - in format <a.b.c>, where all are numbers, for example 0 <1.0.2>
     */
    public readonly templateVersion!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NrtAlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NrtAlertRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
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
            if ((!args || args.suppressionDuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'suppressionDuration'");
            }
            if ((!args || args.suppressionEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'suppressionEnabled'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["alertDetailsOverride"] = args ? args.alertDetailsOverride : undefined;
            resourceInputs["alertRuleTemplateName"] = args ? args.alertRuleTemplateName : undefined;
            resourceInputs["customDetails"] = args ? args.customDetails : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["entityMappings"] = args ? args.entityMappings : undefined;
            resourceInputs["incidentConfiguration"] = args ? args.incidentConfiguration : undefined;
            resourceInputs["kind"] = "NRT";
            resourceInputs["query"] = args ? args.query : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleId"] = args ? args.ruleId : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["suppressionDuration"] = args ? args.suppressionDuration : undefined;
            resourceInputs["suppressionEnabled"] = args ? args.suppressionEnabled : undefined;
            resourceInputs["tactics"] = args ? args.tactics : undefined;
            resourceInputs["techniques"] = args ? args.techniques : undefined;
            resourceInputs["templateVersion"] = args ? args.templateVersion : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alertDetailsOverride"] = undefined /*out*/;
            resourceInputs["alertRuleTemplateName"] = undefined /*out*/;
            resourceInputs["customDetails"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["entityMappings"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["incidentConfiguration"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["query"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["suppressionDuration"] = undefined /*out*/;
            resourceInputs["suppressionEnabled"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tactics"] = undefined /*out*/;
            resourceInputs["techniques"] = undefined /*out*/;
            resourceInputs["templateVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:NrtAlertRule" }, { type: "azure-native:securityinsights/v20190101preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20200101:NrtAlertRule" }, { type: "azure-native:securityinsights/v20210301preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20210901preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20211001:NrtAlertRule" }, { type: "azure-native:securityinsights/v20220101preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20220401preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20220501preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20220601preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20220701preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20220801:NrtAlertRule" }, { type: "azure-native:securityinsights/v20220801preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20220901preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20221001preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20221101:NrtAlertRule" }, { type: "azure-native:securityinsights/v20221101preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20221201preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230201:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230201preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230301preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230401preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230501preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230601preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230701preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230801preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20230901preview:NrtAlertRule" }, { type: "azure-native:securityinsights/v20231001preview:NrtAlertRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NrtAlertRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NrtAlertRule resource.
 */
export interface NrtAlertRuleArgs {
    /**
     * The alert details override settings
     */
    alertDetailsOverride?: pulumi.Input<types.inputs.AlertDetailsOverrideArgs>;
    /**
     * The Name of the alert rule template used to create this rule.
     */
    alertRuleTemplateName?: pulumi.Input<string>;
    /**
     * Dictionary of string key-value pairs of columns to be attached to the alert
     */
    customDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The description of the alert rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name for alerts created by this alert rule.
     */
    displayName: pulumi.Input<string>;
    /**
     * Determines whether this alert rule is enabled or disabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Array of the entity mappings of the alert rule
     */
    entityMappings?: pulumi.Input<pulumi.Input<types.inputs.EntityMappingArgs>[]>;
    /**
     * The settings of the incidents that created from alerts triggered by this analytics rule
     */
    incidentConfiguration?: pulumi.Input<types.inputs.IncidentConfigurationArgs>;
    /**
     * The kind of the alert rule
     * Expected value is 'NRT'.
     */
    kind: pulumi.Input<"NRT">;
    /**
     * The query that creates alerts for this rule.
     */
    query?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Alert rule ID
     */
    ruleId?: pulumi.Input<string>;
    /**
     * The severity for alerts created by this alert rule.
     */
    severity?: pulumi.Input<string | types.enums.AlertSeverity>;
    /**
     * The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
     */
    suppressionDuration: pulumi.Input<string>;
    /**
     * Determines whether the suppression for this alert rule is enabled or disabled.
     */
    suppressionEnabled: pulumi.Input<boolean>;
    /**
     * The tactics of the alert rule
     */
    tactics?: pulumi.Input<pulumi.Input<string | types.enums.AttackTactic>[]>;
    /**
     * The techniques of the alert rule
     */
    techniques?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The version of the alert rule template used to create this rule - in format <a.b.c>, where all are numbers, for example 0 <1.0.2>
     */
    templateVersion?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
