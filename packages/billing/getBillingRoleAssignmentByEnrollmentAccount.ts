import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a role assignment for the caller on a enrollment Account. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * Uses Azure REST API version 2019-10-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function getBillingRoleAssignmentByEnrollmentAccount(args: GetBillingRoleAssignmentByEnrollmentAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingRoleAssignmentByEnrollmentAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billing:getBillingRoleAssignmentByEnrollmentAccount", {
        "billingAccountName": args.billingAccountName,
        "billingRoleAssignmentName": args.billingRoleAssignmentName,
        "enrollmentAccountName": args.enrollmentAccountName,
    }, opts);
}

export interface GetBillingRoleAssignmentByEnrollmentAccountArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
    /**
     * The ID that uniquely identifies a role assignment.
     */
    billingRoleAssignmentName: string;
    /**
     * The ID that uniquely identifies an enrollment account.
     */
    enrollmentAccountName: string;
}

/**
 * The role assignment
 */
export interface GetBillingRoleAssignmentByEnrollmentAccountResult {
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
 * Gets a role assignment for the caller on a enrollment Account. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * Uses Azure REST API version 2019-10-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function getBillingRoleAssignmentByEnrollmentAccountOutput(args: GetBillingRoleAssignmentByEnrollmentAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBillingRoleAssignmentByEnrollmentAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:billing:getBillingRoleAssignmentByEnrollmentAccount", {
        "billingAccountName": args.billingAccountName,
        "billingRoleAssignmentName": args.billingRoleAssignmentName,
        "enrollmentAccountName": args.enrollmentAccountName,
    }, opts);
}

export interface GetBillingRoleAssignmentByEnrollmentAccountOutputArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a role assignment.
     */
    billingRoleAssignmentName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies an enrollment account.
     */
    enrollmentAccountName: pulumi.Input<string>;
}