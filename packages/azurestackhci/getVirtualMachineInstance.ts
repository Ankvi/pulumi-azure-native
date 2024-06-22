import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a virtual machine instance
 * Azure REST API version: 2023-07-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-01-01, 2024-02-01-preview.
 */
export function getVirtualMachineInstance(args: GetVirtualMachineInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getVirtualMachineInstance", {
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
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Guest agent install status.
     */
    readonly guestAgentInstallStatus?: types.outputs.GuestAgentInstallStatusResponse;
    /**
     * HardwareProfile - Specifies the hardware settings for the virtual machine instance.
     */
    readonly hardwareProfile?: types.outputs.VirtualMachineInstancePropertiesResponseHardwareProfile;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The virtual machine instance view.
     */
    readonly instanceView: types.outputs.VirtualMachineInstanceViewResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * NetworkProfile - describes the network configuration the virtual machine instance
     */
    readonly networkProfile?: types.outputs.VirtualMachineInstancePropertiesResponseNetworkProfile;
    /**
     * OsProfile - describes the configuration of the operating system and sets login data
     */
    readonly osProfile?: types.outputs.VirtualMachineInstancePropertiesResponseOsProfile;
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
    readonly securityProfile?: types.outputs.VirtualMachineInstancePropertiesResponseSecurityProfile;
    /**
     * The observed state of virtual machine instances
     */
    readonly status: types.outputs.VirtualMachineInstanceStatusResponse;
    /**
     * StorageProfile - contains information about the disks and storage information for the virtual machine instance
     */
    readonly storageProfile?: types.outputs.VirtualMachineInstancePropertiesResponseStorageProfile;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Azure REST API version: 2023-07-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-01-01, 2024-02-01-preview.
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