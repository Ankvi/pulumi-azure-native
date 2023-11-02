import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements AvailabilitySet GET method.
 * Azure REST API version: 2022-05-21-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-10-07.
 */
export function getAvailabilitySet(args: GetAvailabilitySetArgs, opts?: pulumi.InvokeOptions): Promise<GetAvailabilitySetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getAvailabilitySet", {
        "availabilitySetName": args.availabilitySetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAvailabilitySetArgs {
    /**
     * Name of the AvailabilitySet.
     */
    availabilitySetName: string;
    /**
     * The name of the resource group.
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
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Gets or sets the location.
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    readonly vmmServerId?: string;
}
/**
 * Implements AvailabilitySet GET method.
 * Azure REST API version: 2022-05-21-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-10-07.
 */
export function getAvailabilitySetOutput(args: GetAvailabilitySetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAvailabilitySetResult> {
    return pulumi.output(args).apply((a: any) => getAvailabilitySet(a, opts))
}

export interface GetAvailabilitySetOutputArgs {
    /**
     * Name of the AvailabilitySet.
     */
    availabilitySetName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
