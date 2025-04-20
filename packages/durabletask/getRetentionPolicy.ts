import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Retention Policy
 *
 * Uses Azure REST API version 2025-04-01-preview.
 */
export function getRetentionPolicy(args: GetRetentionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetRetentionPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:durabletask:getRetentionPolicy", {
        "resourceGroupName": args.resourceGroupName,
        "schedulerName": args.schedulerName,
    }, opts);
}

export interface GetRetentionPolicyArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Scheduler
     */
    schedulerName: string;
}

/**
 * A retention policy resource belonging to the scheduler
 */
export interface GetRetentionPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.RetentionPolicyPropertiesResponse;
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
 * Get a Retention Policy
 *
 * Uses Azure REST API version 2025-04-01-preview.
 */
export function getRetentionPolicyOutput(args: GetRetentionPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRetentionPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:durabletask:getRetentionPolicy", {
        "resourceGroupName": args.resourceGroupName,
        "schedulerName": args.schedulerName,
    }, opts);
}

export interface GetRetentionPolicyOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Scheduler
     */
    schedulerName: pulumi.Input<string>;
}