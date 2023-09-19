import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workspace manager assignment
 * Azure REST API version: 2023-06-01-preview.
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
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
 * Azure REST API version: 2023-06-01-preview.
 */
export function getWorkspaceManagerAssignmentOutput(args: GetWorkspaceManagerAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceManagerAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceManagerAssignment(a, opts))
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
