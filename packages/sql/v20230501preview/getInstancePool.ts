import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an instance pool.
 */
export function getInstancePool(args: GetInstancePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetInstancePoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getInstancePool", {
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
     * The Dns Zone that the managed instance pool is in.
     */
    readonly dnsZone: string;
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
     * Specifies maintenance configuration id to apply to this managed instance.
     */
    readonly maintenanceConfigurationId?: string;
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