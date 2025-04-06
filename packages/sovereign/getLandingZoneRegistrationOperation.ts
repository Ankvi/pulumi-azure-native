import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a landing zone registration.
 *
 * Uses Azure REST API version 2025-02-27-preview.
 */
export function getLandingZoneRegistrationOperation(args: GetLandingZoneRegistrationOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetLandingZoneRegistrationOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sovereign:getLandingZoneRegistrationOperation", {
        "landingZoneAccountName": args.landingZoneAccountName,
        "landingZoneRegistrationName": args.landingZoneRegistrationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLandingZoneRegistrationOperationArgs {
    /**
     * The landing zone account.
     */
    landingZoneAccountName: string;
    /**
     * The name of the landing zone registration resource.
     */
    landingZoneRegistrationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Landing zone registration resource type.
 */
export interface GetLandingZoneRegistrationOperationResult {
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.LandingZoneRegistrationResourcePropertiesResponse;
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
 * Get a landing zone registration.
 *
 * Uses Azure REST API version 2025-02-27-preview.
 */
export function getLandingZoneRegistrationOperationOutput(args: GetLandingZoneRegistrationOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLandingZoneRegistrationOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sovereign:getLandingZoneRegistrationOperation", {
        "landingZoneAccountName": args.landingZoneAccountName,
        "landingZoneRegistrationName": args.landingZoneRegistrationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLandingZoneRegistrationOperationOutputArgs {
    /**
     * The landing zone account.
     */
    landingZoneAccountName: pulumi.Input<string>;
    /**
     * The name of the landing zone registration resource.
     */
    landingZoneRegistrationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}