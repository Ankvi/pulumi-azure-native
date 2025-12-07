import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a NamespaceDiscoveredAsset
 *
 * Uses Azure REST API version 2025-07-01-preview.
 *
 * Other available API versions: 2025-10-01, 2025-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNamespaceDiscoveredAsset(args: GetNamespaceDiscoveredAssetArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceDiscoveredAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceregistry:getNamespaceDiscoveredAsset", {
        "discoveredAssetName": args.discoveredAssetName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceDiscoveredAssetArgs {
    /**
     * The name of the discovered asset.
     */
    discoveredAssetName: string;
    /**
     * The name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Discovered asset definition.
 */
export interface GetNamespaceDiscoveredAssetResult {
    /**
     * URIs or type definition IDs.
     */
    readonly assetTypeRefs?: string[];
    /**
     * A set of key-value pairs that contain custom attributes.
     */
    readonly attributes?: any;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Array of datasets that are part of the asset. Each dataset spec describes the data points that make up the set.
     */
    readonly datasets?: types.outputs.NamespaceDiscoveredDatasetResponse[];
    /**
     * Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
     */
    readonly defaultDatasetsConfiguration?: string;
    /**
     * Default destinations for a dataset.
     */
    readonly defaultDatasetsDestinations?: (types.outputs.DatasetBrokerStateStoreDestinationResponse | types.outputs.DatasetMqttDestinationResponse | types.outputs.DatasetStorageDestinationResponse)[];
    /**
     * Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
     */
    readonly defaultEventsConfiguration?: string;
    /**
     * Default destinations for an event.
     */
    readonly defaultEventsDestinations?: (types.outputs.EventMqttDestinationResponse | types.outputs.EventStorageDestinationResponse)[];
    /**
     * Stringified JSON that contains connector-specific default configuration for all management groups. Each management group can have its own configuration that overrides the default settings here.
     */
    readonly defaultManagementGroupsConfiguration?: string;
    /**
     * Stringified JSON that contains connector-specific default configuration for all streams. Each stream can have its own configuration that overrides the default settings here.
     */
    readonly defaultStreamsConfiguration?: string;
    /**
     * Default destinations for a stream.
     */
    readonly defaultStreamsDestinations?: (types.outputs.StreamMqttDestinationResponse | types.outputs.StreamStorageDestinationResponse)[];
    /**
     * Reference to the device that provides data for this asset. Must provide device name & endpoint on the device to use.
     */
    readonly deviceRef: types.outputs.DeviceRefResponse;
    /**
     * Identifier used to detect changes in the asset.
     */
    readonly discoveryId: string;
    /**
     * Asset documentation reference.
     */
    readonly documentationUri?: string;
    /**
     * Array of events that are part of the asset. Each event can have per-event configuration.
     */
    readonly events?: types.outputs.NamespaceDiscoveredEventResponse[];
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Asset hardware revision number.
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
     * Array of management groups that are part of the asset. Each management group can have a per-group configuration.
     */
    readonly managementGroups?: types.outputs.NamespaceDiscoveredManagementGroupResponse[];
    /**
     * Asset manufacturer.
     */
    readonly manufacturer?: string;
    /**
     * Asset manufacturer URI.
     */
    readonly manufacturerUri?: string;
    /**
     * Asset model.
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
     * Asset software revision number.
     */
    readonly softwareRevision?: string;
    /**
     * Array of streams that are part of the asset. Each stream can have a per-stream configuration.
     */
    readonly streams?: types.outputs.NamespaceDiscoveredStreamResponse[];
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
 * Get a NamespaceDiscoveredAsset
 *
 * Uses Azure REST API version 2025-07-01-preview.
 *
 * Other available API versions: 2025-10-01, 2025-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNamespaceDiscoveredAssetOutput(args: GetNamespaceDiscoveredAssetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamespaceDiscoveredAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceregistry:getNamespaceDiscoveredAsset", {
        "discoveredAssetName": args.discoveredAssetName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceDiscoveredAssetOutputArgs {
    /**
     * The name of the discovered asset.
     */
    discoveredAssetName: pulumi.Input<string>;
    /**
     * The name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}