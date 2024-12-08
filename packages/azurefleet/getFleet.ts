import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Fleet
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-11-01.
 */
export function getFleet(args: GetFleetArgs, opts?: pulumi.InvokeOptions): Promise<GetFleetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurefleet:getFleet", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetArgs {
    /**
     * The name of the Compute Fleet
     */
    fleetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Compute Fleet resource
 */
export interface GetFleetResult {
    /**
     * Compute Profile to use for running user's workloads.
     */
    readonly computeProfile: types.outputs.ComputeProfileResponse;
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
     * Details of the resource plan.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Configuration Options for Regular instances in Compute Fleet.
     */
    readonly regularPriorityProfile?: types.outputs.RegularPriorityProfileResponse;
    /**
     * Configuration Options for Spot instances in Compute Fleet.
     */
    readonly spotPriorityProfile?: types.outputs.SpotPriorityProfileResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the time at which the Compute Fleet is created.
     */
    readonly timeCreated: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Specifies the ID which uniquely identifies a Compute Fleet.
     */
    readonly uniqueId: string;
    /**
     * List of VM sizes supported for Compute Fleet
     */
    readonly vmSizesProfile: types.outputs.VmSizeProfileResponse[];
    /**
     * Zones in which the Compute Fleet is available
     */
    readonly zones?: string[];
}
/**
 * Get a Fleet
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-11-01.
 */
export function getFleetOutput(args: GetFleetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFleetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurefleet:getFleet", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetOutputArgs {
    /**
     * The name of the Compute Fleet
     */
    fleetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}