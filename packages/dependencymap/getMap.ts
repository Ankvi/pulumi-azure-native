import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a MapsResource
 *
 * Uses Azure REST API version 2025-01-31-preview.
 */
export function getMap(args: GetMapArgs, opts?: pulumi.InvokeOptions): Promise<GetMapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dependencymap:getMap", {
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMapArgs {
    /**
     * Maps resource name
     */
    mapName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Maps resource
 */
export interface GetMapResult {
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
     * Provisioning state of Maps resource.
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a MapsResource
 *
 * Uses Azure REST API version 2025-01-31-preview.
 */
export function getMapOutput(args: GetMapOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dependencymap:getMap", {
        "mapName": args.mapName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMapOutputArgs {
    /**
     * Maps resource name
     */
    mapName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}