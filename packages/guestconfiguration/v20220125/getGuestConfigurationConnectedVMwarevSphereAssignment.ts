import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a guest configuration assignment
 */
export function getGuestConfigurationConnectedVMwarevSphereAssignment(args: GetGuestConfigurationConnectedVMwarevSphereAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestConfigurationConnectedVMwarevSphereAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:guestconfiguration/v20220125:getGuestConfigurationConnectedVMwarevSphereAssignment", {
        "guestConfigurationAssignmentName": args.guestConfigurationAssignmentName,
        "resourceGroupName": args.resourceGroupName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetGuestConfigurationConnectedVMwarevSphereAssignmentArgs {
    /**
     * The guest configuration assignment name.
     */
    guestConfigurationAssignmentName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine.
     */
    vmName: string;
}

/**
 * Guest configuration assignment is an association between a machine and guest configuration.
 */
export interface GetGuestConfigurationConnectedVMwarevSphereAssignmentResult {
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
 * Get information about a guest configuration assignment
 */
export function getGuestConfigurationConnectedVMwarevSphereAssignmentOutput(args: GetGuestConfigurationConnectedVMwarevSphereAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGuestConfigurationConnectedVMwarevSphereAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getGuestConfigurationConnectedVMwarevSphereAssignment(a, opts))
}

export interface GetGuestConfigurationConnectedVMwarevSphereAssignmentOutputArgs {
    /**
     * The guest configuration assignment name.
     */
    guestConfigurationAssignmentName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    vmName: pulumi.Input<string>;
}