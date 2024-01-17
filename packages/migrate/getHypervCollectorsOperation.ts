import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a HypervCollector
 * Azure REST API version: 2023-03-15.
 */
export function getHypervCollectorsOperation(args: GetHypervCollectorsOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetHypervCollectorsOperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getHypervCollectorsOperation", {
        "hypervCollectorName": args.hypervCollectorName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHypervCollectorsOperationArgs {
    /**
     * Hyper-V collector ARM name
     */
    hypervCollectorName: string;
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Hyper-V collector resource.
 */
export interface GetHypervCollectorsOperationResult {
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
 * Get a HypervCollector
 * Azure REST API version: 2023-03-15.
 */
export function getHypervCollectorsOperationOutput(args: GetHypervCollectorsOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHypervCollectorsOperationResult> {
    return pulumi.output(args).apply((a: any) => getHypervCollectorsOperation(a, opts))
}

export interface GetHypervCollectorsOperationOutputArgs {
    /**
     * Hyper-V collector ARM name
     */
    hypervCollectorName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}