import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get information about a guest configuration assignment
 */
export function getGuestConfigurationHCRPAssignment(args: GetGuestConfigurationHCRPAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestConfigurationHCRPAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:guestconfiguration/v20220125:getGuestConfigurationHCRPAssignment", {
        "guestConfigurationAssignmentName": args.guestConfigurationAssignmentName,
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGuestConfigurationHCRPAssignmentArgs {
    /**
     * The guest configuration assignment name.
     */
    guestConfigurationAssignmentName: string;
    /**
     * The name of the ARC machine.
     */
    machineName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Guest configuration assignment is an association between a machine and guest configuration.
 */
export interface GetGuestConfigurationHCRPAssignmentResult {
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
    readonly properties: types.outputs.guestconfiguration.v20220125.GuestConfigurationAssignmentPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.guestconfiguration.v20220125.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get information about a guest configuration assignment
 */
export function getGuestConfigurationHCRPAssignmentOutput(args: GetGuestConfigurationHCRPAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGuestConfigurationHCRPAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getGuestConfigurationHCRPAssignment(a, opts))
}

export interface GetGuestConfigurationHCRPAssignmentOutputArgs {
    /**
     * The guest configuration assignment name.
     */
    guestConfigurationAssignmentName: pulumi.Input<string>;
    /**
     * The name of the ARC machine.
     */
    machineName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
