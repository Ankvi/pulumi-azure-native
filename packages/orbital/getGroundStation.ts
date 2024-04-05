import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified ground station in a specified resource group.
 * Azure REST API version: 2024-03-01-preview.
 *
 * Other available API versions: 2024-03-01.
 */
export function getGroundStation(args: GetGroundStationArgs, opts?: pulumi.InvokeOptions): Promise<GetGroundStationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital:getGroundStation", {
        "groundStationName": args.groundStationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGroundStationArgs {
    /**
     * Ground Station name.
     */
    groundStationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Ground Station contains one or more antennas.
 */
export interface GetGroundStationResult {
    /**
     * Altitude of the ground station.
     */
    readonly altitudeMeters?: number;
    /**
     * Ground station capabilities.
     */
    readonly capabilities: string[];
    /**
     * City of ground station.
     */
    readonly city?: string;
    /**
     * A reference to global communications site.
     */
    readonly globalCommunicationsSite: types.outputs.GroundStationsPropertiesResponseGlobalCommunicationsSite;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Latitude of the ground station in decimal degrees.
     */
    readonly latitudeDegrees?: number;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Longitude of the ground station in decimal degrees.
     */
    readonly longitudeDegrees?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Ground station provider name.
     */
    readonly providerName?: string;
    /**
     * Release Status of a ground station.
     */
    readonly releaseMode: string;
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
 * Gets the specified ground station in a specified resource group.
 * Azure REST API version: 2024-03-01-preview.
 *
 * Other available API versions: 2024-03-01.
 */
export function getGroundStationOutput(args: GetGroundStationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGroundStationResult> {
    return pulumi.output(args).apply((a: any) => getGroundStation(a, opts))
}

export interface GetGroundStationOutputArgs {
    /**
     * Ground Station name.
     */
    groundStationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}