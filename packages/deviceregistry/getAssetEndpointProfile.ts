import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AssetEndpointProfile
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2023-11-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Defines the client authentication mechanism to the server.
     */
    readonly authentication?: types.outputs.AuthenticationResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Reference to a discovered asset endpoint profile. Populated only if the asset endpoint profile has been created from discovery flow. Discovered asset endpoint profile name must be provided.
     */
    readonly discoveredAssetEndpointProfileRef?: string;
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
     * Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
     */
    readonly status: types.outputs.AssetEndpointProfileStatusResponse;
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
     * Globally unique, immutable, non-reusable id.
     */
    readonly uuid: string;
}
/**
 * Get a AssetEndpointProfile
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2023-11-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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