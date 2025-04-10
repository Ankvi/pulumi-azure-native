import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a permission binding.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview, 2025-02-15.
 */
export function getPermissionBinding(args: GetPermissionBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetPermissionBindingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getPermissionBinding", {
        "namespaceName": args.namespaceName,
        "permissionBindingName": args.permissionBindingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPermissionBindingArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * Name of the permission binding.
     */
    permissionBindingName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * The Permission binding resource.
 */
export interface GetPermissionBindingResult {
    /**
     * The name of the client group resource that the permission is bound to.
     * The client group needs to be a resource under the same namespace the permission binding is a part of.
     */
    readonly clientGroupName?: string;
    /**
     * Description for the Permission Binding resource.
     */
    readonly description?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The allowed permission.
     */
    readonly permission?: string;
    /**
     * Provisioning state of the PermissionBinding resource.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to the PermissionBinding resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The name of the Topic Space resource that the permission is bound to.
     * The Topic space needs to be a resource under the same namespace the permission binding is a part of.
     */
    readonly topicSpaceName?: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a permission binding.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview, 2025-02-15.
 */
export function getPermissionBindingOutput(args: GetPermissionBindingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPermissionBindingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getPermissionBinding", {
        "namespaceName": args.namespaceName,
        "permissionBindingName": args.permissionBindingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPermissionBindingOutputArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the permission binding.
     */
    permissionBindingName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}