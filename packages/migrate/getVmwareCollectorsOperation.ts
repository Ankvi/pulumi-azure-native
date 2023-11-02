import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a VmwareCollector
 * Azure REST API version: 2023-03-15.
 */
export function getVmwareCollectorsOperation(args: GetVmwareCollectorsOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetVmwareCollectorsOperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getVmwareCollectorsOperation", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "vmWareCollectorName": args.vmWareCollectorName,
    }, opts);
}

export interface GetVmwareCollectorsOperationArgs {
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * VMware collector ARM name
     */
    vmWareCollectorName: string;
}

/**
 * VMware collector resource.
 */
export interface GetVmwareCollectorsOperationResult {
    /**
     * Gets or sets the collector agent properties.
     */
    readonly agentProperties?: types.outputs.CollectorAgentPropertiesBaseResponse;
    /**
     * Gets the Timestamp when collector was created.
     */
    readonly createdTimestamp: string;
    /**
     * Gets the discovery site id.
     */
    readonly discoverySiteId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Timestamp when collector was last updated.
     */
    readonly updatedTimestamp: string;
}
/**
 * Get a VmwareCollector
 * Azure REST API version: 2023-03-15.
 */
export function getVmwareCollectorsOperationOutput(args: GetVmwareCollectorsOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVmwareCollectorsOperationResult> {
    return pulumi.output(args).apply((a: any) => getVmwareCollectorsOperation(a, opts))
}

export interface GetVmwareCollectorsOperationOutputArgs {
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * VMware collector ARM name
     */
    vmWareCollectorName: pulumi.Input<string>;
}
