import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ScheduledAction
 *
 * Uses Azure REST API version 2025-04-15-preview.
 */
export function getScheduledAction(args: GetScheduledActionArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledActionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:computeschedule:getScheduledAction", {
        "resourceGroupName": args.resourceGroupName,
        "scheduledActionName": args.scheduledActionName,
    }, opts);
}

export interface GetScheduledActionArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the ScheduledAction
     */
    scheduledActionName: string;
}

/**
 * The scheduled action resource
 */
export interface GetScheduledActionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.ScheduledActionPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a ScheduledAction
 *
 * Uses Azure REST API version 2025-04-15-preview.
 */
export function getScheduledActionOutput(args: GetScheduledActionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledActionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:computeschedule:getScheduledAction", {
        "resourceGroupName": args.resourceGroupName,
        "scheduledActionName": args.scheduledActionName,
    }, opts);
}

export interface GetScheduledActionOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the ScheduledAction
     */
    scheduledActionName: pulumi.Input<string>;
}