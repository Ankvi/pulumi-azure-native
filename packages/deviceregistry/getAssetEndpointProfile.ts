import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve a single Asset Endpoint Profile.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getAssetEndpointProfile(args: GetAssetEndpointProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetEndpointProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceregistry:getAssetEndpointProfile", {
        "assetEndpointProfileName": args.assetEndpointProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssetEndpointProfileArgs {
    /**
     * Asset Endpoint Profile name parameter.
     */
    assetEndpointProfileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Asset Endpoint Profile definition.
 */
export interface GetAssetEndpointProfileResult {
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.AssetEndpointProfileResponseExtendedLocation;
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
     * Asset Endpoint Profile resource properties.
     */
    readonly properties: types.outputs.AssetEndpointProfilePropertiesResponse;
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
 * Retrieve a single Asset Endpoint Profile.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getAssetEndpointProfileOutput(args: GetAssetEndpointProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssetEndpointProfileResult> {
    return pulumi.output(args).apply((a: any) => getAssetEndpointProfile(a, opts))
}

export interface GetAssetEndpointProfileOutputArgs {
    /**
     * Asset Endpoint Profile name parameter.
     */
    assetEndpointProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
