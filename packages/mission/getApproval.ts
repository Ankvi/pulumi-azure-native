import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ApprovalResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApproval(args: GetApprovalArgs, opts?: pulumi.InvokeOptions): Promise<GetApprovalResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mission:getApproval", {
        "approvalName": args.approvalName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetApprovalArgs {
    /**
     * The name of the approvals resource.
     */
    approvalName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * Approval Model Resource
 */
export interface GetApprovalResult {
    /**
     * List of approvers for the approval request
     */
    readonly approvers?: types.outputs.ApproverResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Approval request creation time
     */
    readonly createdAt?: string;
    /**
     * Parameter for optimizing query results
     */
    readonly grandparentResourceId?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Parameter for optimizing query results
     */
    readonly parentResourceId?: string;
    /**
     * Provisioning State.
     */
    readonly provisioningState: string;
    /**
     * Request metadata for the approval request.
     */
    readonly requestMetadata: types.outputs.RequestMetadataResponse;
    /**
     * Approval request state change time, time at which approval request state changed from pending to approved or rejected.
     */
    readonly stateChangedAt?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Ticket ID for the approval request
     */
    readonly ticketId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a ApprovalResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApprovalOutput(args: GetApprovalOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApprovalResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mission:getApproval", {
        "approvalName": args.approvalName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetApprovalOutputArgs {
    /**
     * The name of the approvals resource.
     */
    approvalName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}