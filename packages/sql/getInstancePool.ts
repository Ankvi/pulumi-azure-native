import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an instance pool.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview.
 */
export function getInstancePool(args: GetInstancePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetInstancePoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getInstancePool", {
        "instancePoolName": args.instancePoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstancePoolArgs {
    /**
     * The name of the instance pool to be retrieved.
     */
    instancePoolName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * An Azure SQL instance pool.
 */
export interface GetInstancePoolResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
     */
    readonly licenseType: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name and tier of the SKU.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Resource ID of the subnet to place this instance pool in.
     */
    readonly subnetId: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Count of vCores belonging to this instance pool.
     */
    readonly vCores: number;
}
/**
 * Gets an instance pool.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview.
 */
export function getInstancePoolOutput(args: GetInstancePoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstancePoolResult> {
    return pulumi.output(args).apply((a: any) => getInstancePool(a, opts))
}

export interface GetInstancePoolOutputArgs {
    /**
     * The name of the instance pool to be retrieved.
     */
    instancePoolName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}
