import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a guest configuration assignment for VMSS
 * Azure REST API version: 2022-01-25.
 *
 * Other available API versions: 2024-04-05.
 */
export function getGuestConfigurationAssignmentsVMSS(args: GetGuestConfigurationAssignmentsVMSSArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestConfigurationAssignmentsVMSSResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:guestconfiguration:getGuestConfigurationAssignmentsVMSS", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "vmssName": args.vmssName,
    }, opts);
}

export interface GetGuestConfigurationAssignmentsVMSSArgs {
    /**
     * The guest configuration assignment name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine scale set.
     */
    vmssName: string;
}

/**
 * Guest configuration assignment is an association between a machine and guest configuration.
 */
export interface GetGuestConfigurationAssignmentsVMSSResult {
    /**
     * ARM resource id of the guest configuration assignment.
     */
    readonly id: string;
    /**
     * Region where the VM is located.
     */
    readonly location?: string;
    /**
     * Name of the guest configuration assignment.
     */
    readonly name?: string;
    /**
     * Properties of the Guest configuration assignment.
     */
    readonly properties: types.outputs.GuestConfigurationAssignmentPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get information about a guest configuration assignment for VMSS
 * Azure REST API version: 2022-01-25.
 *
 * Other available API versions: 2024-04-05.
 */
export function getGuestConfigurationAssignmentsVMSSOutput(args: GetGuestConfigurationAssignmentsVMSSOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGuestConfigurationAssignmentsVMSSResult> {
    return pulumi.output(args).apply((a: any) => getGuestConfigurationAssignmentsVMSS(a, opts))
}

export interface GetGuestConfigurationAssignmentsVMSSOutputArgs {
    /**
     * The guest configuration assignment name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine scale set.
     */
    vmssName: pulumi.Input<string>;
}