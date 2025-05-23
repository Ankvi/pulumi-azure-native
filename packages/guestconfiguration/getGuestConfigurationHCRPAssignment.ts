import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a guest configuration assignment
 *
 * Uses Azure REST API version 2024-04-05.
 *
 * Other available API versions: 2022-01-25. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native guestconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGuestConfigurationHCRPAssignment(args: GetGuestConfigurationHCRPAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestConfigurationHCRPAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:guestconfiguration:getGuestConfigurationHCRPAssignment", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-04-05.
 *
 * Other available API versions: 2022-01-25. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native guestconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGuestConfigurationHCRPAssignmentOutput(args: GetGuestConfigurationHCRPAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGuestConfigurationHCRPAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:guestconfiguration:getGuestConfigurationHCRPAssignment", {
        "guestConfigurationAssignmentName": args.guestConfigurationAssignmentName,
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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