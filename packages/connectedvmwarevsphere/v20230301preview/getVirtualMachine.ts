import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Implements virtual machine GET method.
 */
export function getVirtualMachine(args: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere/v20230301preview:getVirtualMachine", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineArgs {
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
    /**
     * Name of the virtual machine resource.
     */
    virtualMachineName: string;
}

/**
 * Define the virtualMachine.
 */
export interface GetVirtualMachineResult {
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation?: types.outputs.connectedvmwarevsphere.v20230301preview.ExtendedLocationResponse;
    /**
     * Firmware type
     */
    readonly firmwareType?: string;
    /**
     * Gets or sets the folder path of the vm.
     */
    readonly folderPath: string;
    /**
     * Guest agent status properties.
     */
    readonly guestAgentProfile?: types.outputs.connectedvmwarevsphere.v20230301preview.GuestAgentProfileResponse;
    /**
     * Hardware properties.
     */
    readonly hardwareProfile?: types.outputs.connectedvmwarevsphere.v20230301preview.HardwareProfileResponse;
    /**
     * Gets or sets the Id.
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.connectedvmwarevsphere.v20230301preview.IdentityResponse;
    /**
     * Gets or sets the instance uuid of the vm.
     */
    readonly instanceUuid: string;
    /**
     * Gets or sets the inventory Item ID for the virtual machine.
     */
    readonly inventoryItemId?: string;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Gets or sets the vCenter Managed Object name for the virtual machine.
     */
    readonly moName: string;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine.
     */
    readonly moRefId?: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Network properties.
     */
    readonly networkProfile?: types.outputs.connectedvmwarevsphere.v20230301preview.NetworkProfileResponse;
    /**
     * OS properties.
     */
    readonly osProfile?: types.outputs.connectedvmwarevsphere.v20230301preview.OsProfileResponse;
    /**
     * Placement properties.
     */
    readonly placementProfile?: types.outputs.connectedvmwarevsphere.v20230301preview.PlacementProfileResponse;
    /**
     * Gets the power state of the virtual machine.
     */
    readonly powerState: string;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the ARM Id of the resourcePool resource on which this virtual machine will
     * deploy.
     */
    readonly resourcePoolId?: string;
    /**
     * Gets the security profile.
     */
    readonly securityProfile?: types.outputs.connectedvmwarevsphere.v20230301preview.SecurityProfileResponse;
    /**
     * Gets or sets the SMBIOS UUID of the vm.
     */
    readonly smbiosUuid?: string;
    /**
     * The resource status information.
     */
    readonly statuses: types.outputs.connectedvmwarevsphere.v20230301preview.ResourceStatusResponse[];
    /**
     * Storage properties.
     */
    readonly storageProfile?: types.outputs.connectedvmwarevsphere.v20230301preview.StorageProfileResponse;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.connectedvmwarevsphere.v20230301preview.SystemDataResponse;
    /**
     * Gets or sets the Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the ARM Id of the template resource to deploy the virtual machine.
     */
    readonly templateId?: string;
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    readonly uuid: string;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
     */
    readonly vCenterId?: string;
    /**
     * Gets or sets a unique identifier for the vm resource.
     */
    readonly vmId: string;
}
/**
 * Implements virtual machine GET method.
 */
export function getVirtualMachineOutput(args: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachine(a, opts))
}

export interface GetVirtualMachineOutputArgs {
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the virtual machine resource.
     */
    virtualMachineName: pulumi.Input<string>;
}
