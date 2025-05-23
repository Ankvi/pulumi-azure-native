import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the storage task properties
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function getStorageTask(args: GetStorageTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageTaskResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storageactions:getStorageTask", {
        "resourceGroupName": args.resourceGroupName,
        "storageTaskName": args.storageTaskName,
    }, opts);
}

export interface GetStorageTaskArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
     */
    storageTaskName: string;
}

/**
 * Represents Storage Task.
 */
export interface GetStorageTaskResult {
    /**
     * The storage task action that is executed
     */
    readonly action: types.outputs.StorageTaskActionResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation date and time of the storage task in UTC.
     */
    readonly creationTimeInUtc: string;
    /**
     * Text that describes the purpose of the storage task
     */
    readonly description: string;
    /**
     * Storage Task is enabled when set to true and disabled when set to false
     */
    readonly enabled: boolean;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identity of the resource.
     */
    readonly identity: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Represents the provisioning state of the storage task.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Storage task version.
     */
    readonly taskVersion: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the storage task properties
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function getStorageTaskOutput(args: GetStorageTaskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageTaskResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storageactions:getStorageTask", {
        "resourceGroupName": args.resourceGroupName,
        "storageTaskName": args.storageTaskName,
    }, opts);
}

export interface GetStorageTaskOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
     */
    storageTaskName: pulumi.Input<string>;
}