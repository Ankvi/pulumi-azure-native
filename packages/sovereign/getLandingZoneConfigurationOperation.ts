import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a landing zone configuration.
 *
 * Uses Azure REST API version 2025-02-27-preview.
 */
export function getLandingZoneConfigurationOperation(args: GetLandingZoneConfigurationOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetLandingZoneConfigurationOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sovereign:getLandingZoneConfigurationOperation", {
        "landingZoneAccountName": args.landingZoneAccountName,
        "landingZoneConfigurationName": args.landingZoneConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLandingZoneConfigurationOperationArgs {
    /**
     * The landing zone account.
     */
    landingZoneAccountName: string;
    /**
     * The landing zone configuration name
     */
    landingZoneConfigurationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 */
export interface GetLandingZoneConfigurationOperationResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.LandingZoneConfigurationResourcePropertiesResponse;
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
 * Get a landing zone configuration.
 *
 * Uses Azure REST API version 2025-02-27-preview.
 */
export function getLandingZoneConfigurationOperationOutput(args: GetLandingZoneConfigurationOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLandingZoneConfigurationOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sovereign:getLandingZoneConfigurationOperation", {
        "landingZoneAccountName": args.landingZoneAccountName,
        "landingZoneConfigurationName": args.landingZoneConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLandingZoneConfigurationOperationOutputArgs {
    /**
     * The landing zone account.
     */
    landingZoneAccountName: pulumi.Input<string>;
    /**
     * The landing zone configuration name
     */
    landingZoneConfigurationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}