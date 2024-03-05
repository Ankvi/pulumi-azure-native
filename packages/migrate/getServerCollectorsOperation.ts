import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ServerCollector
 * Azure REST API version: 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview.
 */
export function getServerCollectorsOperation(args: GetServerCollectorsOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetServerCollectorsOperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getServerCollectorsOperation", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "serverCollectorName": args.serverCollectorName,
    }, opts);
}

export interface GetServerCollectorsOperationArgs {
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Physical server collector ARM name
     */
    serverCollectorName: string;
}

/**
 * Physical server collector resource.
 */
export interface GetServerCollectorsOperationResult {
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
 * Get a ServerCollector
 * Azure REST API version: 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview.
 */
export function getServerCollectorsOperationOutput(args: GetServerCollectorsOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerCollectorsOperationResult> {
    return pulumi.output(args).apply((a: any) => getServerCollectorsOperation(a, opts))
}

export interface GetServerCollectorsOperationOutputArgs {
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Physical server collector ARM name
     */
    serverCollectorName: pulumi.Input<string>;
}