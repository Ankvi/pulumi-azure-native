import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a role assignment for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * Uses Azure REST API version 2019-10-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function getBillingRoleAssignmentByBillingAccount(args: GetBillingRoleAssignmentByBillingAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingRoleAssignmentByBillingAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billing:getBillingRoleAssignmentByBillingAccount", {
        "billingAccountName": args.billingAccountName,
        "billingRoleAssignmentName": args.billingRoleAssignmentName,
    }, opts);
}

export interface GetBillingRoleAssignmentByBillingAccountArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
    /**
     * The ID that uniquely identifies a role assignment.
     */
    billingRoleAssignmentName: string;
}

/**
 * The role assignment
 */
export interface GetBillingRoleAssignmentByBillingAccountResult {
    /**
     * The principal Id of the user who created the role assignment.
     */
    readonly createdByPrincipalId: string;
    /**
     * The tenant Id of the user who created the role assignment.
     */
    readonly createdByPrincipalTenantId: string;
    /**
     * The email address of the user who created the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    readonly createdByUserEmailAddress: string;
    /**
     * The date the role assignment was created.
     */
    readonly createdOn: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The principal id of the user to whom the role was assigned.
     */
    readonly principalId?: string;
    /**
     * The principal tenant id of the user to whom the role was assigned.
     */
    readonly principalTenantId?: string;
    /**
     * The ID of the role definition.
     */
    readonly roleDefinitionId?: string;
    /**
     * The scope at which the role was assigned.
     */
    readonly scope: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    readonly userAuthenticationType?: string;
    /**
     * The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    readonly userEmailAddress?: string;
}
/**
 * Gets a role assignment for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * Uses Azure REST API version 2019-10-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function getBillingRoleAssignmentByBillingAccountOutput(args: GetBillingRoleAssignmentByBillingAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBillingRoleAssignmentByBillingAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:billing:getBillingRoleAssignmentByBillingAccount", {
        "billingAccountName": args.billingAccountName,
        "billingRoleAssignmentName": args.billingRoleAssignmentName,
    }, opts);
}

export interface GetBillingRoleAssignmentByBillingAccountOutputArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a role assignment.
     */
    billingRoleAssignmentName: pulumi.Input<string>;
}