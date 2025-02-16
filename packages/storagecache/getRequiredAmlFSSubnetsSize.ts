import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the number of available IP addresses needed for the AML file system information provided.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-11-01-preview, 2024-03-01, 2024-07-01.
 */
export function getRequiredAmlFSSubnetsSize(args?: GetRequiredAmlFSSubnetsSizeArgs, opts?: pulumi.InvokeOptions): Promise<GetRequiredAmlFSSubnetsSizeResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagecache:getRequiredAmlFSSubnetsSize", {
        "sku": args.sku,
        "storageCapacityTiB": args.storageCapacityTiB,
    }, opts);
}

export interface GetRequiredAmlFSSubnetsSizeArgs {
    /**
     * SKU for the resource.
     */
    sku?: types.inputs.SkuName;
    /**
     * The size of the AML file system, in TiB.
     */
    storageCapacityTiB?: number;
}

/**
 * Information about the number of available IP addresses that are required for the AML file system.
 */
export interface GetRequiredAmlFSSubnetsSizeResult {
    /**
     * The number of available IP addresses that are required for the AML file system.
     */
    readonly filesystemSubnetSize?: number;
}
/**
 * Get the number of available IP addresses needed for the AML file system information provided.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-11-01-preview, 2024-03-01, 2024-07-01.
 */
export function getRequiredAmlFSSubnetsSizeOutput(args?: GetRequiredAmlFSSubnetsSizeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRequiredAmlFSSubnetsSizeResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storagecache:getRequiredAmlFSSubnetsSize", {
        "sku": args.sku,
        "storageCapacityTiB": args.storageCapacityTiB,
    }, opts);
}

export interface GetRequiredAmlFSSubnetsSizeOutputArgs {
    /**
     * SKU for the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuNameArgs>;
    /**
     * The size of the AML file system, in TiB.
     */
    storageCapacityTiB?: pulumi.Input<number>;
}