import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves information about the model view or the instance view of a virtual machine.
 */
export function getVirtualMachine(args: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20230301:getVirtualMachine", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetVirtualMachineArgs {
    /**
     * The expand expression to apply on the operation. 'InstanceView' retrieves a snapshot of the runtime properties of the virtual machine that is managed by the platform and can change outside of control plane operations. 'UserData' retrieves the UserData property as part of the VM model view that was provided by the user during the VM Create/Update operation.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine.
     */
    vmName: string;
}

/**
 * Describes a Virtual Machine.
 */
export interface GetVirtualMachineResult {
    /**
     * Specifies additional capabilities enabled or disabled on the virtual machine.
     */
    readonly additionalCapabilities?: types.outputs.compute.v20230301.AdditionalCapabilitiesResponse;
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS.
     */
    readonly applicationProfile?: types.outputs.compute.v20230301.ApplicationProfileResponse;
    /**
     * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
     */
    readonly availabilitySet?: types.outputs.compute.v20230301.SubResourceResponse;
    /**
     * Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01.
     */
    readonly billingProfile?: types.outputs.compute.v20230301.BillingProfileResponse;
    /**
     * Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01.
     */
    readonly capacityReservation?: types.outputs.compute.v20230301.CapacityReservationProfileResponse;
    /**
     * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
     */
    readonly diagnosticsProfile?: types.outputs.compute.v20230301.DiagnosticsProfileResponse;
    /**
     * Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
     */
    readonly evictionPolicy?: string;
    /**
     * The extended location of the Virtual Machine.
     */
    readonly extendedLocation?: types.outputs.compute.v20230301.ExtendedLocationResponse;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.
     */
    readonly extensionsTimeBudget?: string;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    readonly hardwareProfile?: types.outputs.compute.v20230301.HardwareProfileResponse;
    /**
     * Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01.
     */
    readonly host?: types.outputs.compute.v20230301.SubResourceResponse;
    /**
     * Specifies information about the dedicated host group that the virtual machine resides in. **Note:** User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01.
     */
    readonly hostGroup?: types.outputs.compute.v20230301.SubResourceResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The identity of the virtual machine, if configured.
     */
    readonly identity?: types.outputs.compute.v20230301.VirtualMachineIdentityResponse;
    /**
     * The virtual machine instance view.
     */
    readonly instanceView: types.outputs.compute.v20230301.VirtualMachineInstanceViewResponse;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
     */
    readonly licenseType?: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    readonly networkProfile?: types.outputs.compute.v20230301.NetworkProfileResponse;
    /**
     * Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned.
     */
    readonly osProfile?: types.outputs.compute.v20230301.OSProfileResponse;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    readonly plan?: types.outputs.compute.v20230301.PlanResponse;
    /**
     * Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum api‐version: 2020‐12‐01.
     */
    readonly platformFaultDomain?: number;
    /**
     * Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01
     */
    readonly priority?: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01.
     */
    readonly proximityPlacementGroup?: types.outputs.compute.v20230301.SubResourceResponse;
    /**
     * The virtual machine child extension resources.
     */
    readonly resources: types.outputs.compute.v20230301.VirtualMachineExtensionResponse[];
    /**
     * Specifies Scheduled Event related configurations.
     */
    readonly scheduledEventsProfile?: types.outputs.compute.v20230301.ScheduledEventsProfileResponse;
    /**
     * Specifies the Security related profile settings for the virtual machine.
     */
    readonly securityProfile?: types.outputs.compute.v20230301.SecurityProfileResponse;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    readonly storageProfile?: types.outputs.compute.v20230301.StorageProfileResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the time at which the Virtual Machine resource was created. Minimum api-version: 2021-11-01.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.
     */
    readonly userData?: string;
    /**
     * Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum api‐version: 2019‐03‐01.
     */
    readonly virtualMachineScaleSet?: types.outputs.compute.v20230301.SubResourceResponse;
    /**
     * Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
     */
    readonly vmId: string;
    /**
     * The virtual machine zones.
     */
    readonly zones?: string[];
}
/**
 * Retrieves information about the model view or the instance view of a virtual machine.
 */
export function getVirtualMachineOutput(args: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachine(a, opts))
}

export interface GetVirtualMachineOutputArgs {
    /**
     * The expand expression to apply on the operation. 'InstanceView' retrieves a snapshot of the runtime properties of the virtual machine that is managed by the platform and can change outside of control plane operations. 'UserData' retrieves the UserData property as part of the VM model view that was provided by the user during the VM Create/Update operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    vmName: pulumi.Input<string>;
}
