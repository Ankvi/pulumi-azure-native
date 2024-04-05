import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements AvailabilitySet GET method.
 */
export function getAvailabilitySet(args: GetAvailabilitySetArgs, opts?: pulumi.InvokeOptions): Promise<GetAvailabilitySetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm/v20231007:getAvailabilitySet", {
        "availabilitySetResourceName": args.availabilitySetResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAvailabilitySetArgs {
    /**
     * Name of the AvailabilitySet.
     */
    availabilitySetResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The AvailabilitySets resource definition.
 */
export interface GetAvailabilitySetResult {
    /**
     * Name of the availability set.
     */
    readonly availabilitySetName?: string;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Provisioning state of the resource.
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
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    readonly vmmServerId?: string;
}
/**
 * Implements AvailabilitySet GET method.
 */
export function getAvailabilitySetOutput(args: GetAvailabilitySetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAvailabilitySetResult> {
    return pulumi.output(args).apply((a: any) => getAvailabilitySet(a, opts))
}

export interface GetAvailabilitySetOutputArgs {
    /**
     * Name of the AvailabilitySet.
     */
    availabilitySetResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}