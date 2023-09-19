import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements VirtualMachine GET method.
 * Azure REST API version: 2022-05-21-preview.
 */
export function getVirtualMachine(args: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getVirtualMachine", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Name of the VirtualMachine.
     */
    virtualMachineName: string;
}

/**
 * The VirtualMachines resource definition.
 */
export interface GetVirtualMachineResult {
    /**
     * Availability Sets in vm.
     */
    readonly availabilitySets?: types.outputs.VirtualMachinePropertiesResponseAvailabilitySets[];
    /**
     * Type of checkpoint supported for the vm.
     */
    readonly checkpointType?: string;
    /**
     * Checkpoints in the vm.
     */
    readonly checkpoints?: types.outputs.CheckpointResponse[];
    /**
     * ARM Id of the cloud resource to use for deploying the vm.
     */
    readonly cloudId?: string;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Gets or sets the generation for the vm.
     */
    readonly generation?: number;
    /**
     * Guest agent status properties.
     */
    readonly guestAgentProfile?: types.outputs.GuestAgentProfileResponse;
    /**
     * Hardware properties.
     */
    readonly hardwareProfile?: types.outputs.HardwareProfileResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    readonly inventoryItemId?: string;
    /**
     * Last restored checkpoint in the vm.
     */
    readonly lastRestoredVMCheckpoint: types.outputs.CheckpointResponse;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Network properties.
     */
    readonly networkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * OS properties.
     */
    readonly osProfile?: types.outputs.OsProfileResponse;
    /**
     * Gets the power state of the virtual machine.
     */
    readonly powerState: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Storage properties.
     */
    readonly storageProfile?: types.outputs.StorageProfileResponse;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * ARM Id of the template resource to use for deploying the vm.
     */
    readonly templateId?: string;
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * Unique ID of the virtual machine.
     */
    readonly uuid?: string;
    /**
     * VMName is the name of VM on the SCVMM server.
     */
    readonly vmName?: string;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    readonly vmmServerId?: string;
}
/**
 * Implements VirtualMachine GET method.
 * Azure REST API version: 2022-05-21-preview.
 */
export function getVirtualMachineOutput(args: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachine(a, opts))
}

export interface GetVirtualMachineOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the VirtualMachine.
     */
    virtualMachineName: pulumi.Input<string>;
}
