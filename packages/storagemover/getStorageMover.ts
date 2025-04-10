import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Storage Mover resource.
 *
 * Uses Azure REST API version 2023-03-01.
 *
 * Other available API versions: 2023-07-01-preview, 2023-10-01, 2024-07-01.
 */
export function getStorageMover(args: GetStorageMoverArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageMoverResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagemover:getStorageMover", {
        "resourceGroupName": args.resourceGroupName,
        "storageMoverName": args.storageMoverName,
    }, opts);
}

export interface GetStorageMoverArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Storage Mover resource.
     */
    storageMoverName: string;
}

/**
 * The Storage Mover resource, which is a container for a group of Agents, Projects, and Endpoints.
 */
export interface GetStorageMoverResult {
    /**
     * A description for the Storage Mover.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The provisioning state of this resource.
     */
    readonly provisioningState: string;
    /**
     * Resource system metadata.
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
 * Gets a Storage Mover resource.
 *
 * Uses Azure REST API version 2023-03-01.
 *
 * Other available API versions: 2023-07-01-preview, 2023-10-01, 2024-07-01.
 */
export function getStorageMoverOutput(args: GetStorageMoverOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageMoverResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storagemover:getStorageMover", {
        "resourceGroupName": args.resourceGroupName,
        "storageMoverName": args.storageMoverName,
    }, opts);
}

export interface GetStorageMoverOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Storage Mover resource.
     */
    storageMoverName: pulumi.Input<string>;
}