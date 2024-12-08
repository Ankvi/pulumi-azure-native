import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a guest configuration assignment
 * Azure REST API version: 2022-01-25.
 *
 * Other available API versions: 2024-04-05.
 */
export function getGuestConfigurationAssignment(args: GetGuestConfigurationAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestConfigurationAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:guestconfiguration:getGuestConfigurationAssignment", {
        "guestConfigurationAssignmentName": args.guestConfigurationAssignmentName,
        "resourceGroupName": args.resourceGroupName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetGuestConfigurationAssignmentArgs {
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
export interface GetGuestConfigurationAssignmentResult {
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
 * Azure REST API version: 2022-01-25.
 *
 * Other available API versions: 2024-04-05.
 */
export function getGuestConfigurationAssignmentOutput(args: GetGuestConfigurationAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGuestConfigurationAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:guestconfiguration:getGuestConfigurationAssignment", {
        "guestConfigurationAssignmentName": args.guestConfigurationAssignmentName,
        "resourceGroupName": args.resourceGroupName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetGuestConfigurationAssignmentOutputArgs {
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