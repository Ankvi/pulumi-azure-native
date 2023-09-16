import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
export class AutomationRule extends pulumi.CustomResource {
    /**
     * Get an existing AutomationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AutomationRule {
        return new AutomationRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230701preview:AutomationRule';

    /**
     * Returns true if the given object is an instance of AutomationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutomationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutomationRule.__pulumiType;
    }

    /**
     * The actions to execute when the automation rule is triggered.
     */
    public readonly actions!: pulumi.Output<(types.outputs.securityinsights.v20230701preview.AutomationRuleAddIncidentTaskActionResponse | types.outputs.securityinsights.v20230701preview.AutomationRuleModifyPropertiesActionResponse | types.outputs.securityinsights.v20230701preview.AutomationRuleRunPlaybookActionResponse)[]>;
    /**
     * Information on the client (user or application) that made some action
     */
    public /*out*/ readonly createdBy!: pulumi.Output<types.outputs.securityinsights.v20230701preview.ClientInfoResponse>;
    /**
     * The time the automation rule was created.
     */
    public /*out*/ readonly createdTimeUtc!: pulumi.Output<string>;
    /**
     * The display name of the automation rule.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Information on the client (user or application) that made some action
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<types.outputs.securityinsights.v20230701preview.ClientInfoResponse>;
    /**
     * The last time the automation rule was updated.
     */
    public /*out*/ readonly lastModifiedTimeUtc!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The order of execution of the automation rule.
     */
    public readonly order!: pulumi.Output<number>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.securityinsights.v20230701preview.SystemDataResponse>;
    /**
     * Describes automation rule triggering logic.
     */
    public readonly triggeringLogic!: pulumi.Output<types.outputs.securityinsights.v20230701preview.AutomationRuleTriggeringLogicResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AutomationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomationRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.actions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actions'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.order === undefined) && !opts.urn) {
                throw new Error("Missing required property 'order'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.triggeringLogic === undefined) && !opts.urn) {
                throw new Error("Missing required property 'triggeringLogic'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["automationRuleId"] = args ? args.automationRuleId : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["triggeringLogic"] = args ? args.triggeringLogic : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["order"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["triggeringLogic"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:AutomationRule" }, { type: "azure-native:securityinsights/v20190101preview:AutomationRule" }, { type: "azure-native:securityinsights/v20210901preview:AutomationRule" }, { type: "azure-native:securityinsights/v20211001:AutomationRule" }, { type: "azure-native:securityinsights/v20211001preview:AutomationRule" }, { type: "azure-native:securityinsights/v20220101preview:AutomationRule" }, { type: "azure-native:securityinsights/v20220401preview:AutomationRule" }, { type: "azure-native:securityinsights/v20220501preview:AutomationRule" }, { type: "azure-native:securityinsights/v20220601preview:AutomationRule" }, { type: "azure-native:securityinsights/v20220701preview:AutomationRule" }, { type: "azure-native:securityinsights/v20220801:AutomationRule" }, { type: "azure-native:securityinsights/v20220801preview:AutomationRule" }, { type: "azure-native:securityinsights/v20220901preview:AutomationRule" }, { type: "azure-native:securityinsights/v20221001preview:AutomationRule" }, { type: "azure-native:securityinsights/v20221101:AutomationRule" }, { type: "azure-native:securityinsights/v20221101preview:AutomationRule" }, { type: "azure-native:securityinsights/v20221201preview:AutomationRule" }, { type: "azure-native:securityinsights/v20230201:AutomationRule" }, { type: "azure-native:securityinsights/v20230201preview:AutomationRule" }, { type: "azure-native:securityinsights/v20230301preview:AutomationRule" }, { type: "azure-native:securityinsights/v20230401preview:AutomationRule" }, { type: "azure-native:securityinsights/v20230501preview:AutomationRule" }, { type: "azure-native:securityinsights/v20230601preview:AutomationRule" }, { type: "azure-native:securityinsights/v20230801preview:AutomationRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AutomationRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AutomationRule resource.
 */
export interface AutomationRuleArgs {
    /**
     * The actions to execute when the automation rule is triggered.
     */
    actions: pulumi.Input<pulumi.Input<types.inputs.securityinsights.v20230701preview.AutomationRuleAddIncidentTaskActionArgs | types.inputs.securityinsights.v20230701preview.AutomationRuleModifyPropertiesActionArgs | types.inputs.securityinsights.v20230701preview.AutomationRuleRunPlaybookActionArgs>[]>;
    /**
     * Automation rule ID
     */
    automationRuleId?: pulumi.Input<string>;
    /**
     * The display name of the automation rule.
     */
    displayName: pulumi.Input<string>;
    /**
     * The order of execution of the automation rule.
     */
    order: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Describes automation rule triggering logic.
     */
    triggeringLogic: pulumi.Input<types.inputs.securityinsights.v20230701preview.AutomationRuleTriggeringLogicArgs>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
