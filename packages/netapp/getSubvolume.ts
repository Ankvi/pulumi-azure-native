import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the path associated with the subvolumeName provided
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview.
 */
export function getSubvolume(args: GetSubvolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetSubvolumeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getSubvolume", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "subvolumeName": args.subvolumeName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetSubvolumeArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the subvolume.
     */
    subvolumeName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Subvolume Information properties
 */
export interface GetSubvolumeResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * parent path to the subvolume
     */
    readonly parentPath?: string;
    /**
     * Path to the subvolume
     */
    readonly path?: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
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
 * Returns the path associated with the subvolumeName provided
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview.
 */
export function getSubvolumeOutput(args: GetSubvolumeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubvolumeResult> {
    return pulumi.output(args).apply((a: any) => getSubvolume(a, opts))
}

export interface GetSubvolumeOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the subvolume.
     */
    subvolumeName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}