import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DiscoveredAsset
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getDiscoveredAsset(args: GetDiscoveredAssetArgs, opts?: pulumi.InvokeOptions): Promise<GetDiscoveredAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceregistry:getDiscoveredAsset", {
        "discoveredAssetName": args.discoveredAssetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiscoveredAssetArgs {
    /**
     * Discovered Asset name parameter.
     */
    discoveredAssetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Discovered Asset definition.
 */
export interface GetDiscoveredAssetResult {
    /**
     * A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must provide asset endpoint profile name.
     */
    readonly assetEndpointProfileRef: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Array of datasets that are part of the asset. Each dataset spec describes the data points that make up the set.
     */
    readonly datasets?: types.outputs.DiscoveredDatasetResponse[];
    /**
     * Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
     */
    readonly defaultDatasetsConfiguration?: string;
    /**
     * Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
     */
    readonly defaultEventsConfiguration?: string;
    /**
     * Object that describes the default topic information for the asset.
     */
    readonly defaultTopic?: types.outputs.TopicResponse;
    /**
     * Identifier used to detect changes in the asset.
     */
    readonly discoveryId: string;
    /**
     * Reference to the documentation.
     */
    readonly documentationUri?: string;
    /**
     * Array of events that are part of the asset. Each event can have per-event configuration.
     */
    readonly events?: types.outputs.DiscoveredEventResponse[];
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Revision number of the hardware.
     */
    readonly hardwareRevision?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Asset manufacturer name.
     */
    readonly manufacturer?: string;
    /**
     * Asset manufacturer URI.
     */
    readonly manufacturerUri?: string;
    /**
     * Asset model name.
     */
    readonly model?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Asset product code.
     */
    readonly productCode?: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Asset serial number.
     */
    readonly serialNumber?: string;
    /**
     * Revision number of the software.
     */
    readonly softwareRevision?: string;
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
    /**
     * An integer that is incremented each time the resource is modified.
     */
    readonly version: number;
}
/**
 * Get a DiscoveredAsset
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getDiscoveredAssetOutput(args: GetDiscoveredAssetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDiscoveredAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceregistry:getDiscoveredAsset", {
        "discoveredAssetName": args.discoveredAssetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiscoveredAssetOutputArgs {
    /**
     * Discovered Asset name parameter.
     */
    discoveredAssetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}