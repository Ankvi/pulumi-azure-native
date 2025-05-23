import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DiscoverySourceResource
 *
 * Uses Azure REST API version 2025-01-31-preview.
 */
export function getDiscoverySource(args: GetDiscoverySourceArgs, opts?: pulumi.InvokeOptions): Promise<GetDiscoverySourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dependencymap:getDiscoverySource", {
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
        "sourceName": args.sourceName,
    }, opts);
}

export interface GetDiscoverySourceArgs {
    /**
     * Maps resource name
     */
    mapName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * discovery source resource
     */
    sourceName: string;
}

/**
 * A Discovery Source resource
 */
export interface GetDiscoverySourceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Provisioning state of Discovery Source resource.
     */
    readonly provisioningState: string;
    /**
     * Source ArmId of Discovery Source resource
     */
    readonly sourceId: string;
    /**
     * Source type of Discovery Source resource.
     */
    readonly sourceType: string;
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
 * Get a DiscoverySourceResource
 *
 * Uses Azure REST API version 2025-01-31-preview.
 */
export function getDiscoverySourceOutput(args: GetDiscoverySourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDiscoverySourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dependencymap:getDiscoverySource", {
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
        "sourceName": args.sourceName,
    }, opts);
}

export interface GetDiscoverySourceOutputArgs {
    /**
     * Maps resource name
     */
    mapName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * discovery source resource
     */
    sourceName: pulumi.Input<string>;
}