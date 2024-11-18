import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Task Hub
 * Azure REST API version: 2024-10-01-preview.
 */
export function getTaskHub(args: GetTaskHubArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskHubResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:durabletask:getTaskHub", {
        "resourceGroupName": args.resourceGroupName,
        "schedulerName": args.schedulerName,
        "taskHubName": args.taskHubName,
    }, opts);
}

export interface GetTaskHubArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Scheduler
     */
    schedulerName: string;
    /**
     * The name of the TaskHub
     */
    taskHubName: string;
}

/**
 * A Task Hub resource belonging to the scheduler
 */
export interface GetTaskHubResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.TaskHubPropertiesResponse;
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
 * Get a Task Hub
 * Azure REST API version: 2024-10-01-preview.
 */
export function getTaskHubOutput(args: GetTaskHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTaskHubResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:durabletask:getTaskHub", {
        "resourceGroupName": args.resourceGroupName,
        "schedulerName": args.schedulerName,
        "taskHubName": args.taskHubName,
    }, opts);
}

export interface GetTaskHubOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Scheduler
     */
    schedulerName: pulumi.Input<string>;
    /**
     * The name of the TaskHub
     */
    taskHubName: pulumi.Input<string>;
}