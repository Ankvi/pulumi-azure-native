import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a role assignment for the caller on a enrollment Account. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2019-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native billing [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The name of the enrollment account.
     */
    enrollmentAccountName: string;
}

/**
 * The properties of the billing role assignment.
 */
export interface GetBillingRoleAssignmentByEnrollmentAccountResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of the billing role assignment.
     */
    readonly properties: types.outputs.BillingRoleAssignmentPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a role assignment for the caller on a enrollment Account. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2019-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native billing [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The name of the enrollment account.
     */
    enrollmentAccountName: pulumi.Input<string>;
}