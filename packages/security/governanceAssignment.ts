import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Governance assignment over a given scope
 *
 * Uses Azure REST API version 2022-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-01-01-preview.
 */
export class GovernanceAssignment extends pulumi.CustomResource {
    /**
     * Get an existing GovernanceAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GovernanceAssignment {
        return new GovernanceAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:GovernanceAssignment';

    /**
     * Returns true if the given object is an instance of GovernanceAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GovernanceAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GovernanceAssignment.__pulumiType;
    }

    /**
     * The additional data for the governance assignment - e.g. links to ticket (optional), see example
     */
    declare public readonly additionalData: pulumi.Output<types.outputs.GovernanceAssignmentAdditionalDataResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
     */
    declare public readonly governanceEmailNotification: pulumi.Output<types.outputs.GovernanceEmailNotificationResponse | undefined>;
    /**
     * Defines whether there is a grace period on the governance assignment
     */
    declare public readonly isGracePeriod: pulumi.Output<boolean | undefined>;
    /**
     * Resource name
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * The Owner for the governance assignment - e.g. user@contoso.com - see example
     */
    declare public readonly owner: pulumi.Output<string | undefined>;
    /**
     * The remediation due-date - after this date Secure Score will be affected (in case of  active grace-period)
     */
    declare public readonly remediationDueDate: pulumi.Output<string>;
    /**
     * The ETA (estimated time of arrival) for remediation (optional), see example
     */
    declare public readonly remediationEta: pulumi.Output<types.outputs.RemediationEtaResponse | undefined>;
    /**
     * Resource type
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a GovernanceAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GovernanceAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.assessmentName === undefined && !opts.urn) {
                throw new Error("Missing required property 'assessmentName'");
            }
            if (args?.remediationDueDate === undefined && !opts.urn) {
                throw new Error("Missing required property 'remediationDueDate'");
            }
            if (args?.scope === undefined && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["additionalData"] = args?.additionalData;
            resourceInputs["assessmentName"] = args?.assessmentName;
            resourceInputs["assignmentKey"] = args?.assignmentKey;
            resourceInputs["governanceEmailNotification"] = args?.governanceEmailNotification;
            resourceInputs["isGracePeriod"] = args?.isGracePeriod;
            resourceInputs["owner"] = args?.owner;
            resourceInputs["remediationDueDate"] = args?.remediationDueDate;
            resourceInputs["remediationEta"] = args?.remediationEta;
            resourceInputs["scope"] = args?.scope;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalData"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["governanceEmailNotification"] = undefined /*out*/;
            resourceInputs["isGracePeriod"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["remediationDueDate"] = undefined /*out*/;
            resourceInputs["remediationEta"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20220101preview:GovernanceAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GovernanceAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GovernanceAssignment resource.
 */
export interface GovernanceAssignmentArgs {
    /**
     * The additional data for the governance assignment - e.g. links to ticket (optional), see example
     */
    additionalData?: pulumi.Input<types.inputs.GovernanceAssignmentAdditionalDataArgs>;
    /**
     * The Assessment Key - A unique key for the assessment type
     */
    assessmentName: pulumi.Input<string>;
    /**
     * The governance assignment key - the assessment key of the required governance assignment
     */
    assignmentKey?: pulumi.Input<string>;
    /**
     * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
     */
    governanceEmailNotification?: pulumi.Input<types.inputs.GovernanceEmailNotificationArgs>;
    /**
     * Defines whether there is a grace period on the governance assignment
     */
    isGracePeriod?: pulumi.Input<boolean>;
    /**
     * The Owner for the governance assignment - e.g. user@contoso.com - see example
     */
    owner?: pulumi.Input<string>;
    /**
     * The remediation due-date - after this date Secure Score will be affected (in case of  active grace-period)
     */
    remediationDueDate: pulumi.Input<string>;
    /**
     * The ETA (estimated time of arrival) for remediation (optional), see example
     */
    remediationEta?: pulumi.Input<types.inputs.RemediationEtaArgs>;
    /**
     * The scope of the Governance assignments. Valid scopes are: subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: pulumi.Input<string>;
}