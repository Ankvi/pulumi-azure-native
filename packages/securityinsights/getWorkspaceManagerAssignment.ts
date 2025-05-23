import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workspace manager assignment
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkspaceManagerAssignment(args: GetWorkspaceManagerAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceManagerAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getWorkspaceManagerAssignment", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceManagerAssignmentName": args.workspaceManagerAssignmentName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceManagerAssignmentArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace manager assignment
     */
    workspaceManagerAssignmentName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The workspace manager assignment
 */
export interface GetWorkspaceManagerAssignmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * List of resources included in this workspace manager assignment
     */
    readonly items: types.outputs.AssignmentItemResponse[];
    /**
     * The time the last job associated to this assignment ended at
     */
    readonly lastJobEndTime: string;
    /**
     * State of the last job associated to this assignment
     */
    readonly lastJobProvisioningState: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource name of the workspace manager group targeted by the workspace manager assignment
     */
    readonly targetResourceName: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a workspace manager assignment
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkspaceManagerAssignmentOutput(args: GetWorkspaceManagerAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceManagerAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getWorkspaceManagerAssignment", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceManagerAssignmentName": args.workspaceManagerAssignmentName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceManagerAssignmentOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace manager assignment
     */
    workspaceManagerAssignmentName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}