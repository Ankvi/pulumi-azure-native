import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a virtual machine
 * Azure REST API version: 2022-12-15-preview.
 */
export function getVirtualMachine(args: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getVirtualMachine", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the virtual machine
     */
    virtualMachineName: string;
}

/**
 * The virtual machine resource definition.
 */
export interface GetVirtualMachineResult {
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Guest agent status properties.
     */
    readonly guestAgentProfile?: types.outputs.GuestAgentProfileResponse;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine.
     */
    readonly hardwareProfile?: types.outputs.VirtualMachinePropertiesResponseHardwareProfile;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * NetworkProfile - describes the network configuration the virtual machine
     */
    readonly networkProfile?: types.outputs.VirtualMachinePropertiesResponseNetworkProfile;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    readonly osProfile?: types.outputs.VirtualMachinePropertiesResponseOsProfile;
    /**
     * Provisioning state of the virtual machine.
     */
    readonly provisioningState: string;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine.
     */
    readonly securityProfile?: types.outputs.VirtualMachinePropertiesResponseSecurityProfile;
    /**
     * The observed state of virtual machines
     */
    readonly status: types.outputs.VirtualMachineStatusResponse;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine
     */
    readonly storageProfile?: types.outputs.VirtualMachinePropertiesResponseStorageProfile;
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
     * Unique identifier for the vm resource.
     */
    readonly vmId: string;
}
/**
 * Gets a virtual machine
 * Azure REST API version: 2022-12-15-preview.
 */
export function getVirtualMachineOutput(args: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachine(a, opts))
}

export interface GetVirtualMachineOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the virtual machine
     */
    virtualMachineName: pulumi.Input<string>;
}