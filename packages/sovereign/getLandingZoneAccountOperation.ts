import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a landing zone account.
 *
 * Uses Azure REST API version 2025-02-27-preview.
 */
export function getLandingZoneAccountOperation(args: GetLandingZoneAccountOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetLandingZoneAccountOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sovereign:getLandingZoneAccountOperation", {
        "landingZoneAccountName": args.landingZoneAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLandingZoneAccountOperationArgs {
    /**
     * The landing zone account.
     */
    landingZoneAccountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Landing zone account resource type. A Landing zone account is the container for configuring, deploying and managing multiple landing zones.
 */
export interface GetLandingZoneAccountOperationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.LandingZoneAccountResourcePropertiesResponse;
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
 * Get a landing zone account.
 *
 * Uses Azure REST API version 2025-02-27-preview.
 */
export function getLandingZoneAccountOperationOutput(args: GetLandingZoneAccountOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLandingZoneAccountOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sovereign:getLandingZoneAccountOperation", {
        "landingZoneAccountName": args.landingZoneAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLandingZoneAccountOperationOutputArgs {
    /**
     * The landing zone account.
     */
    landingZoneAccountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}