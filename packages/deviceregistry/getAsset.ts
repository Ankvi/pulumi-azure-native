import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve a single asset.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getAsset(args: GetAssetArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceregistry:getAsset", {
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssetArgs {
    /**
     * Asset name parameter.
     */
    assetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Asset definition.
 */
export interface GetAssetResult {
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.AssetResponseExtendedLocation;
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
     * Asset resource properties.
     */
    readonly properties: types.outputs.AssetResponseProperties;
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
 * Retrieve a single asset.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getAssetOutput(args: GetAssetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssetResult> {
    return pulumi.output(args).apply((a: any) => getAsset(a, opts))
}

export interface GetAssetOutputArgs {
    /**
     * Asset name parameter.
     */
    assetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
