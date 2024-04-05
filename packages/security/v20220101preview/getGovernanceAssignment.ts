import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific governanceAssignment for the requested scope by AssignmentKey
 */
export function getGovernanceAssignment(args: GetGovernanceAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGovernanceAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20220101preview:getGovernanceAssignment", {
        "assessmentName": args.assessmentName,
        "assignmentKey": args.assignmentKey,
        "scope": args.scope,
    }, opts);
}

export interface GetGovernanceAssignmentArgs {
    /**
     * The Assessment Key - A unique key for the assessment type
     */
    assessmentName: string;
    /**
     * The governance assignment key - the assessment key of the required governance assignment
     */
    assignmentKey: string;
    /**
     * The scope of the Governance assignments. Valid scopes are: subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: string;
}

/**
 * Governance assignment over a given scope
 */
export interface GetGovernanceAssignmentResult {
    /**
     * The additional data for the governance assignment - e.g. links to ticket (optional), see example
     */
    readonly additionalData?: types.outputs.GovernanceAssignmentAdditionalDataResponse;
    /**
     * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
     */
    readonly governanceEmailNotification?: types.outputs.GovernanceEmailNotificationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Defines whether there is a grace period on the governance assignment
     */
    readonly isGracePeriod?: boolean;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The Owner for the governance assignment - e.g. user@contoso.com - see example
     */
    readonly owner?: string;
    /**
     * The remediation due-date - after this date Secure Score will be affected (in case of  active grace-period)
     */
    readonly remediationDueDate: string;
    /**
     * The ETA (estimated time of arrival) for remediation (optional), see example
     */
    readonly remediationEta?: types.outputs.RemediationEtaResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific governanceAssignment for the requested scope by AssignmentKey
 */
export function getGovernanceAssignmentOutput(args: GetGovernanceAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGovernanceAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getGovernanceAssignment(a, opts))
}

export interface GetGovernanceAssignmentOutputArgs {
    /**
     * The Assessment Key - A unique key for the assessment type
     */
    assessmentName: pulumi.Input<string>;
    /**
     * The governance assignment key - the assessment key of the required governance assignment
     */
    assignmentKey: pulumi.Input<string>;
    /**
     * The scope of the Governance assignments. Valid scopes are: subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: pulumi.Input<string>;
}