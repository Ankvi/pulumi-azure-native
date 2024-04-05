import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified network slice.
 */
export function getSlice(args: GetSliceArgs, opts?: pulumi.InvokeOptions): Promise<GetSliceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork/v20230901:getSlice", {
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
        "sliceName": args.sliceName,
    }, opts);
}

export interface GetSliceArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the network slice.
     */
    sliceName: string;
}

/**
 * Network slice resource. Must be created in the same location as its parent mobile network.
 */
export interface GetSliceResult {
    /**
     * An optional description for this network slice.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The provisioning state of the network slice resource.
     */
    readonly provisioningState: string;
    /**
     * Single-network slice selection assistance information (S-NSSAI). Unique at the scope of a mobile network.
     */
    readonly snssai: types.outputs.SnssaiResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
 * Gets information about the specified network slice.
 */
export function getSliceOutput(args: GetSliceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSliceResult> {
    return pulumi.output(args).apply((a: any) => getSlice(a, opts))
}

export interface GetSliceOutputArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the network slice.
     */
    sliceName: pulumi.Input<string>;
}