import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific governanceAssignment for the requested scope by AssignmentKey
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function getGovernanceAssignment(args: GetGovernanceAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGovernanceAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getGovernanceAssignment", {
        "assessmentName": args.assessmentName,
        "assignmentKey": args.assignmentKey,
        "scope": args.scope,
    }, opts);
}

export interface GetGovernanceAssignmentArgs {
    /**
     * The assessment key of the governance assignment.
     */
    assessmentName: string;
    /**
     * The governance assignment key.
     */
    assignmentKey: string;
    /**
     * The scope of the governance assignment.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
     */
    readonly governanceEmailNotification?: types.outputs.GovernanceEmailNotificationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Defines whether there is a grace period on the governance assignment
     */
    readonly isGracePeriod?: boolean;
    /**
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a specific governanceAssignment for the requested scope by AssignmentKey
 *
 * Uses Azure REST API version 2022-01-01-preview.
 */
export function getGovernanceAssignmentOutput(args: GetGovernanceAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGovernanceAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getGovernanceAssignment", {
        "assessmentName": args.assessmentName,
        "assignmentKey": args.assignmentKey,
        "scope": args.scope,
    }, opts);
}

export interface GetGovernanceAssignmentOutputArgs {
    /**
     * The assessment key of the governance assignment.
     */
    assessmentName: pulumi.Input<string>;
    /**
     * The governance assignment key.
     */
    assignmentKey: pulumi.Input<string>;
    /**
     * The scope of the governance assignment.
     */
    scope: pulumi.Input<string>;
}