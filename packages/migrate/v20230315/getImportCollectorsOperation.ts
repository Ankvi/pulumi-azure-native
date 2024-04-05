import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ImportCollector
 */
export function getImportCollectorsOperation(args: GetImportCollectorsOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetImportCollectorsOperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20230315:getImportCollectorsOperation", {
        "importCollectorName": args.importCollectorName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImportCollectorsOperationArgs {
    /**
     * Import collector ARM name
     */
    importCollectorName: string;
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
 * Import collector resource.
 */
export interface GetImportCollectorsOperationResult {
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
 * Get a ImportCollector
 */
export function getImportCollectorsOperationOutput(args: GetImportCollectorsOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImportCollectorsOperationResult> {
    return pulumi.output(args).apply((a: any) => getImportCollectorsOperation(a, opts))
}

export interface GetImportCollectorsOperationOutputArgs {
    /**
     * Import collector ARM name
     */
    importCollectorName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}