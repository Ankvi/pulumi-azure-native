import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the storage task assignment properties
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2024-01-01.
 */
export function getStorageTaskAssignment(args: GetStorageTaskAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageTaskAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:getStorageTaskAssignment", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "storageTaskAssignmentName": args.storageTaskAssignmentName,
    }, opts);
}

export interface GetStorageTaskAssignmentArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    storageTaskAssignmentName: string;
}

/**
 * The storage task assignment.
 */
export interface GetStorageTaskAssignmentResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the storage task assignment.
     */
    readonly properties: types.outputs.StorageTaskAssignmentPropertiesResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the storage task assignment properties
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2024-01-01.
 */
export function getStorageTaskAssignmentOutput(args: GetStorageTaskAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageTaskAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storage:getStorageTaskAssignment", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "storageTaskAssignmentName": args.storageTaskAssignmentName,
    }, opts);
}

export interface GetStorageTaskAssignmentOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    storageTaskAssignmentName: pulumi.Input<string>;
}