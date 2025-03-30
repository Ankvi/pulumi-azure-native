import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets fleetspace resource.
 *
 * Uses Azure REST API version 2025-02-01-preview.
 */
export function getFleetspace(args: GetFleetspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetFleetspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasefleetmanager:getFleetspace", {
        "fleetName": args.fleetName,
        "fleetspaceName": args.fleetspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetspaceArgs {
    /**
     * Name of the database fleet.
     */
    fleetName: string;
    /**
     * Name of the fleetspace.
     */
    fleetspaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A fleetspace.
 */
export interface GetFleetspaceResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A Fleetspace properties.
     */
    readonly properties: types.outputs.FleetspacePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets fleetspace resource.
 *
 * Uses Azure REST API version 2025-02-01-preview.
 */
export function getFleetspaceOutput(args: GetFleetspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFleetspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databasefleetmanager:getFleetspace", {
        "fleetName": args.fleetName,
        "fleetspaceName": args.fleetspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetspaceOutputArgs {
    /**
     * Name of the database fleet.
     */
    fleetName: pulumi.Input<string>;
    /**
     * Name of the fleetspace.
     */
    fleetspaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}