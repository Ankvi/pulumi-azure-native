import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a virtual machine instance
 */
export function getVirtualMachineInstance(args: GetVirtualMachineInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20230701preview:getVirtualMachineInstance", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetVirtualMachineInstanceArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: string;
}

/**
 * The virtual machine instance resource definition.
 */
export interface GetVirtualMachineInstanceResult {
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.azurestackhci.v20230701preview.ExtendedLocationResponse;
    /**
     * Guest agent install status.
     */
    readonly guestAgentInstallStatus?: types.outputs.azurestackhci.v20230701preview.GuestAgentInstallStatusResponse;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine instance.
     */
    readonly hardwareProfile?: types.outputs.azurestackhci.v20230701preview.VirtualMachineInstancePropertiesResponseHardwareProfile;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.azurestackhci.v20230701preview.IdentityResponse;
    /**
     * The virtual machine instance view.
     */
    readonly instanceView: types.outputs.azurestackhci.v20230701preview.VirtualMachineInstanceViewResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * NetworkProfile - describes the network configuration the virtual machine instance
     */
    readonly networkProfile?: types.outputs.azurestackhci.v20230701preview.VirtualMachineInstancePropertiesResponseNetworkProfile;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    readonly osProfile?: types.outputs.azurestackhci.v20230701preview.VirtualMachineInstancePropertiesResponseOsProfile;
    /**
     * Provisioning state of the virtual machine instance.
     */
    readonly provisioningState: string;
    /**
     * Unique identifier defined by ARC to identify the guest of the VM.
     */
    readonly resourceUid?: string;
    /**
     * SecurityProfile - Specifies the security settings for the virtual machine instance.
     */
    readonly securityProfile?: types.outputs.azurestackhci.v20230701preview.VirtualMachineInstancePropertiesResponseSecurityProfile;
    /**
     * The observed state of virtual machine instances
     */
    readonly status: types.outputs.azurestackhci.v20230701preview.VirtualMachineInstanceStatusResponse;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine instance
     */
    readonly storageProfile?: types.outputs.azurestackhci.v20230701preview.VirtualMachineInstancePropertiesResponseStorageProfile;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.azurestackhci.v20230701preview.SystemDataResponse;
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
 * Gets a virtual machine instance
 */
export function getVirtualMachineInstanceOutput(args: GetVirtualMachineInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineInstanceResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineInstance(a, opts))
}

export interface GetVirtualMachineInstanceOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: pulumi.Input<string>;
}
