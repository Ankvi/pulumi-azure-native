import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the number of available IP addresses needed for the AML file system information provided.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01-preview, 2024-07-01, 2025-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagecache [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01-preview, 2024-07-01, 2025-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagecache [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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