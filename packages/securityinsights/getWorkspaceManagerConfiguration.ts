import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workspace manager configuration
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview.
 */
export function getWorkspaceManagerConfiguration(args: GetWorkspaceManagerConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceManagerConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getWorkspaceManagerConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceManagerConfigurationName": args.workspaceManagerConfigurationName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceManagerConfigurationArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace manager configuration
     */
    workspaceManagerConfigurationName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The workspace manager configuration
 */
export interface GetWorkspaceManagerConfigurationResult {
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The current mode of the workspace manager configuration
     */
    readonly mode: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Gets a workspace manager configuration
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview.
 */
export function getWorkspaceManagerConfigurationOutput(args: GetWorkspaceManagerConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceManagerConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getWorkspaceManagerConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceManagerConfigurationName": args.workspaceManagerConfigurationName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceManagerConfigurationOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace manager configuration
     */
    workspaceManagerConfigurationName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}