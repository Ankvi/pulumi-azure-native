import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DiscoveredAssetEndpointProfile
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getDiscoveredAssetEndpointProfile(args: GetDiscoveredAssetEndpointProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetDiscoveredAssetEndpointProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceregistry:getDiscoveredAssetEndpointProfile", {
        "discoveredAssetEndpointProfileName": args.discoveredAssetEndpointProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiscoveredAssetEndpointProfileArgs {
    /**
     * Discovered Asset Endpoint Profile name parameter.
     */
    discoveredAssetEndpointProfileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Discovered Asset Endpoint Profile definition.
 */
export interface GetDiscoveredAssetEndpointProfileResult {
    /**
     * Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
     */
    readonly additionalConfiguration?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Identifier used to detect changes in the asset endpoint profile.
     */
    readonly discoveryId: string;
    /**
     * Defines the configuration for the connector type that is being used with the endpoint profile.
     */
    readonly endpointProfileType: string;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
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
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * List of supported authentication methods supported by the target server.
     */
    readonly supportedAuthenticationMethods?: string[];
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * An integer that is incremented each time the resource is modified.
     */
    readonly version: number;
}
/**
 * Get a DiscoveredAssetEndpointProfile
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getDiscoveredAssetEndpointProfileOutput(args: GetDiscoveredAssetEndpointProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDiscoveredAssetEndpointProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceregistry:getDiscoveredAssetEndpointProfile", {
        "discoveredAssetEndpointProfileName": args.discoveredAssetEndpointProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiscoveredAssetEndpointProfileOutputArgs {
    /**
     * Discovered Asset Endpoint Profile name parameter.
     */
    discoveredAssetEndpointProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}