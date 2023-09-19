import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets virtual machines by resource name
 */
export function getVirtualmachineRetrieve(args: GetVirtualmachineRetrieveArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualmachineRetrieveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20210901preview:getVirtualmachineRetrieve", {
        "resourceGroupName": args.resourceGroupName,
        "virtualmachinesName": args.virtualmachinesName,
    }, opts);
}

export interface GetVirtualmachineRetrieveArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    virtualmachinesName: string;
}

/**
 * The virtual machine resource definition.
 */
export interface GetVirtualmachineRetrieveResult {
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
    readonly hardwareProfile?: types.outputs.VirtualmachinesPropertiesResponseHardwareProfile;
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
    readonly networkProfile?: types.outputs.VirtualmachinesPropertiesResponseNetworkProfile;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    readonly osProfile?: types.outputs.VirtualmachinesPropertiesResponseOsProfile;
    readonly provisioningState: string;
    /**
     * name of the object to be used in moc
     */
    readonly resourceName?: string;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine.
     */
    readonly securityProfile?: types.outputs.VirtualmachinesPropertiesResponseSecurityProfile;
    /**
     * VirtualMachineStatus defines the observed state of virtualmachines
     */
    readonly status: types.outputs.VirtualMachineStatusResponse;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine
     */
    readonly storageProfile?: types.outputs.VirtualmachinesPropertiesResponseStorageProfile;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Gets virtual machines by resource name
 */
export function getVirtualmachineRetrieveOutput(args: GetVirtualmachineRetrieveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualmachineRetrieveResult> {
    return pulumi.output(args).apply((a: any) => getVirtualmachineRetrieve(a, opts))
}

export interface GetVirtualmachineRetrieveOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    virtualmachinesName: pulumi.Input<string>;
}
