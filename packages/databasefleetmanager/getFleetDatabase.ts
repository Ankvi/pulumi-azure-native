import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a fleet database.
 *
 * Uses Azure REST API version 2025-02-01-preview.
 */
export function getFleetDatabase(args: GetFleetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetFleetDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasefleetmanager:getFleetDatabase", {
        "databaseName": args.databaseName,
        "fleetName": args.fleetName,
        "fleetspaceName": args.fleetspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetDatabaseArgs {
    /**
     * Name of the database.
     */
    databaseName: string;
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
 * A fleet database.
 */
export interface GetFleetDatabaseResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Fleet database properties.
     */
    readonly properties: types.outputs.FleetDatabasePropertiesResponse;
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
 * Gets a fleet database.
 *
 * Uses Azure REST API version 2025-02-01-preview.
 */
export function getFleetDatabaseOutput(args: GetFleetDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFleetDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databasefleetmanager:getFleetDatabase", {
        "databaseName": args.databaseName,
        "fleetName": args.fleetName,
        "fleetspaceName": args.fleetspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetDatabaseOutputArgs {
    /**
     * Name of the database.
     */
    databaseName: pulumi.Input<string>;
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