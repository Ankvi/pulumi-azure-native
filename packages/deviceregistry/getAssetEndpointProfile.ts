import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AssetEndpointProfile
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2024-09-01-preview, 2024-11-01.
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
     * Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
     */
    readonly additionalConfiguration?: string;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
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
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
     */
    readonly targetAddress: string;
    /**
     * Defines the authentication mechanism for the southbound connector connecting to the shop floor/OT device.
     */
    readonly transportAuthentication?: types.outputs.TransportAuthenticationResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Defines the client authentication mechanism to the server.
     */
    readonly userAuthentication?: types.outputs.UserAuthenticationResponse;
    /**
     * Globally unique, immutable, non-reusable id.
     */
    readonly uuid: string;
}
/**
 * Get a AssetEndpointProfile
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2024-09-01-preview, 2024-11-01.
 */
export function getAssetEndpointProfileOutput(args: GetAssetEndpointProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssetEndpointProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceregistry:getAssetEndpointProfile", {
        "assetEndpointProfileName": args.assetEndpointProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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