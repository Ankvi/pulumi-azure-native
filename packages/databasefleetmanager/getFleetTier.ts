import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a tier resource.
 *
 * Uses Azure REST API version 2025-02-01-preview.
 */
export function getFleetTier(args: GetFleetTierArgs, opts?: pulumi.InvokeOptions): Promise<GetFleetTierResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasefleetmanager:getFleetTier", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
        "tierName": args.tierName,
    }, opts);
}

export interface GetFleetTierArgs {
    /**
     * Name of the database fleet.
     */
    fleetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the tier.
     */
    tierName: string;
}

/**
 * A SQL Database Fleet tier.
 */
export interface GetFleetTierResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A Fleet tier properties.
     */
    readonly properties: types.outputs.FleetTierPropertiesResponse;
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
 * Gets a tier resource.
 *
 * Uses Azure REST API version 2025-02-01-preview.
 */
export function getFleetTierOutput(args: GetFleetTierOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFleetTierResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databasefleetmanager:getFleetTier", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
        "tierName": args.tierName,
    }, opts);
}

export interface GetFleetTierOutputArgs {
    /**
     * Name of the database fleet.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the tier.
     */
    tierName: pulumi.Input<string>;
}