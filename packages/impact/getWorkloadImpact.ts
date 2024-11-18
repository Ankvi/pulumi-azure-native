import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadImpact
 * Azure REST API version: 2024-05-01-preview.
 */
export function getWorkloadImpact(args: GetWorkloadImpactArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadImpactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:impact:getWorkloadImpact", {
        "workloadImpactName": args.workloadImpactName,
    }, opts);
}

export interface GetWorkloadImpactArgs {
    /**
     * workloadImpact resource 
     */
    workloadImpactName: string;
}

/**
 * Workload Impact properties
 */
export interface GetWorkloadImpactResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.WorkloadImpactPropertiesResponse;
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
 * Get a WorkloadImpact
 * Azure REST API version: 2024-05-01-preview.
 */
export function getWorkloadImpactOutput(args: GetWorkloadImpactOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadImpactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:impact:getWorkloadImpact", {
        "workloadImpactName": args.workloadImpactName,
    }, opts);
}

export interface GetWorkloadImpactOutputArgs {
    /**
     * workloadImpact resource 
     */
    workloadImpactName: pulumi.Input<string>;
}