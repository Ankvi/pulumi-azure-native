import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Asset
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2024-09-01-preview, 2024-11-01.
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
     * A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must have the format <ModuleCR.metadata.namespace>/<ModuleCR.metadata.name>.
     */
    readonly assetEndpointProfileUri: string;
    /**
     * Resource path to asset type (model) definition.
     */
    readonly assetType?: string;
    /**
     * A set of key-value pairs that contain custom attributes set by the customer.
     */
    readonly attributes?: any;
    /**
     * Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration.
     */
    readonly dataPoints?: types.outputs.DataPointResponse[];
    /**
     * Stringified JSON that contains protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here.
     */
    readonly defaultDataPointsConfiguration?: string;
    /**
     * Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
     */
    readonly defaultEventsConfiguration?: string;
    /**
     * Human-readable description of the asset.
     */
    readonly description?: string;
    /**
     * Human-readable display name.
     */
    readonly displayName?: string;
    /**
     * Reference to the documentation.
     */
    readonly documentationUri?: string;
    /**
     * Enabled/Disabled status of the asset.
     */
    readonly enabled?: boolean;
    /**
     * Array of events that are part of the asset. Each event can have per-event configuration.
     */
    readonly events?: types.outputs.EventResponse[];
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Asset id provided by the customer.
     */
    readonly externalAssetId?: string;
    /**
     * Revision number of the hardware.
     */
    readonly hardwareRevision?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
     */
    readonly status: types.outputs.AssetStatusResponse;
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
     * Globally unique, immutable, non-reusable id.
     */
    readonly uuid: string;
    /**
     * An integer that is incremented each time the resource is modified.
     */
    readonly version: number;
}
/**
 * Get a Asset
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2024-09-01-preview, 2024-11-01.
 */
export function getAssetOutput(args: GetAssetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceregistry:getAsset", {
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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