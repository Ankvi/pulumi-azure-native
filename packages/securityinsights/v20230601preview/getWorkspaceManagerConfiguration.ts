import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workspace manager configuration
 */
export function getWorkspaceManagerConfiguration(args: GetWorkspaceManagerConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceManagerConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230601preview:getWorkspaceManagerConfiguration", {
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
 */
export function getWorkspaceManagerConfigurationOutput(args: GetWorkspaceManagerConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceManagerConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceManagerConfiguration(a, opts))
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
