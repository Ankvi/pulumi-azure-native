import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a Virtual Machine.
 */
export class VirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachine {
        return new VirtualMachine(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20230701:VirtualMachine';

    /**
     * Returns true if the given object is an instance of VirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachine.__pulumiType;
    }

    /**
     * Specifies additional capabilities enabled or disabled on the virtual machine.
     */
    public readonly additionalCapabilities!: pulumi.Output<types.outputs.AdditionalCapabilitiesResponse | undefined>;
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS.
     */
    public readonly applicationProfile!: pulumi.Output<types.outputs.ApplicationProfileResponse | undefined>;
    /**
     * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
     */
    public readonly availabilitySet!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01.
     */
    public readonly billingProfile!: pulumi.Output<types.outputs.BillingProfileResponse | undefined>;
    /**
     * Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01.
     */
    public readonly capacityReservation!: pulumi.Output<types.outputs.CapacityReservationProfileResponse | undefined>;
    /**
     * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
     */
    public readonly diagnosticsProfile!: pulumi.Output<types.outputs.DiagnosticsProfileResponse | undefined>;
    /**
     * Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
     */
    public readonly evictionPolicy!: pulumi.Output<string | undefined>;
    /**
     * The extended location of the Virtual Machine.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.
     */
    public readonly extensionsTimeBudget!: pulumi.Output<string | undefined>;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    public readonly hardwareProfile!: pulumi.Output<types.outputs.HardwareProfileResponse | undefined>;
    /**
     * Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01.
     */
    public readonly host!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Specifies information about the dedicated host group that the virtual machine resides in. **Note:** User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01.
     */
    public readonly hostGroup!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The identity of the virtual machine, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.VirtualMachineIdentityResponse | undefined>;
    /**
     * The virtual machine instance view.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.VirtualMachineInstanceViewResponse>;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
     */
    public readonly licenseType!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned.
     */
    public readonly osProfile!: pulumi.Output<types.outputs.OSProfileResponse | undefined>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    public readonly plan!: pulumi.Output<types.outputs.PlanResponse | undefined>;
    /**
     * Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum api‐version: 2020‐12‐01.
     */
    public readonly platformFaultDomain!: pulumi.Output<number | undefined>;
    /**
     * Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01
     */
    public readonly priority!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01.
     */
    public readonly proximityPlacementGroup!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The virtual machine child extension resources.
     */
    public /*out*/ readonly resources!: pulumi.Output<types.outputs.VirtualMachineExtensionResponse[]>;
    /**
     * Specifies Scheduled Event related configurations.
     */
    public readonly scheduledEventsProfile!: pulumi.Output<types.outputs.ScheduledEventsProfileResponse | undefined>;
    /**
     * Specifies the Security related profile settings for the virtual machine.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.SecurityProfileResponse | undefined>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.StorageProfileResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the time at which the Virtual Machine resource was created. Minimum api-version: 2021-11-01.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.
     */
    public readonly userData!: pulumi.Output<string | undefined>;
    /**
     * Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum api‐version: 2019‐03‐01.
     */
    public readonly virtualMachineScaleSet!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
     */
    public /*out*/ readonly vmId!: pulumi.Output<string>;
    /**
     * The virtual machine zones.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a VirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalCapabilities"] = args ? args.additionalCapabilities : undefined;
            resourceInputs["applicationProfile"] = args ? args.applicationProfile : undefined;
            resourceInputs["availabilitySet"] = args ? args.availabilitySet : undefined;
            resourceInputs["billingProfile"] = args ? args.billingProfile : undefined;
            resourceInputs["capacityReservation"] = args ? args.capacityReservation : undefined;
            resourceInputs["diagnosticsProfile"] = args ? args.diagnosticsProfile : undefined;
            resourceInputs["evictionPolicy"] = args ? args.evictionPolicy : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["extensionsTimeBudget"] = args ? args.extensionsTimeBudget : undefined;
            resourceInputs["hardwareProfile"] = args ? args.hardwareProfile : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["hostGroup"] = args ? args.hostGroup : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["platformFaultDomain"] = args ? args.platformFaultDomain : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["proximityPlacementGroup"] = args ? args.proximityPlacementGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduledEventsProfile"] = args ? args.scheduledEventsProfile : undefined;
            resourceInputs["securityProfile"] = args ? args.securityProfile : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["virtualMachineScaleSet"] = args ? args.virtualMachineScaleSet : undefined;
            resourceInputs["vmName"] = args ? args.vmName : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        } else {
            resourceInputs["additionalCapabilities"] = undefined /*out*/;
            resourceInputs["applicationProfile"] = undefined /*out*/;
            resourceInputs["availabilitySet"] = undefined /*out*/;
            resourceInputs["billingProfile"] = undefined /*out*/;
            resourceInputs["capacityReservation"] = undefined /*out*/;
            resourceInputs["diagnosticsProfile"] = undefined /*out*/;
            resourceInputs["evictionPolicy"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["extensionsTimeBudget"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["host"] = undefined /*out*/;
            resourceInputs["hostGroup"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["licenseType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["platformFaultDomain"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroup"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["scheduledEventsProfile"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userData"] = undefined /*out*/;
            resourceInputs["virtualMachineScaleSet"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:VirtualMachine" }, { type: "azure-native:compute/v20150615:VirtualMachine" }, { type: "azure-native:compute/v20160330:VirtualMachine" }, { type: "azure-native:compute/v20160430preview:VirtualMachine" }, { type: "azure-native:compute/v20170330:VirtualMachine" }, { type: "azure-native:compute/v20171201:VirtualMachine" }, { type: "azure-native:compute/v20180401:VirtualMachine" }, { type: "azure-native:compute/v20180601:VirtualMachine" }, { type: "azure-native:compute/v20181001:VirtualMachine" }, { type: "azure-native:compute/v20190301:VirtualMachine" }, { type: "azure-native:compute/v20190701:VirtualMachine" }, { type: "azure-native:compute/v20191201:VirtualMachine" }, { type: "azure-native:compute/v20200601:VirtualMachine" }, { type: "azure-native:compute/v20201201:VirtualMachine" }, { type: "azure-native:compute/v20210301:VirtualMachine" }, { type: "azure-native:compute/v20210401:VirtualMachine" }, { type: "azure-native:compute/v20210701:VirtualMachine" }, { type: "azure-native:compute/v20211101:VirtualMachine" }, { type: "azure-native:compute/v20220301:VirtualMachine" }, { type: "azure-native:compute/v20220801:VirtualMachine" }, { type: "azure-native:compute/v20221101:VirtualMachine" }, { type: "azure-native:compute/v20230301:VirtualMachine" }, { type: "azure-native:compute/v20230901:VirtualMachine" }, { type: "azure-native:compute/v20240301:VirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * Specifies additional capabilities enabled or disabled on the virtual machine.
     */
    additionalCapabilities?: pulumi.Input<types.inputs.AdditionalCapabilitiesArgs>;
    /**
     * Specifies the gallery applications that should be made available to the VM/VMSS.
     */
    applicationProfile?: pulumi.Input<types.inputs.ApplicationProfileArgs>;
    /**
     * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
     */
    availabilitySet?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01.
     */
    billingProfile?: pulumi.Input<types.inputs.BillingProfileArgs>;
    /**
     * Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01.
     */
    capacityReservation?: pulumi.Input<types.inputs.CapacityReservationProfileArgs>;
    /**
     * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile?: pulumi.Input<types.inputs.DiagnosticsProfileArgs>;
    /**
     * Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
     */
    evictionPolicy?: pulumi.Input<string | types.enums.VirtualMachineEvictionPolicyTypes>;
    /**
     * The extended location of the Virtual Machine.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01.
     */
    extensionsTimeBudget?: pulumi.Input<string>;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    hardwareProfile?: pulumi.Input<types.inputs.HardwareProfileArgs>;
    /**
     * Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01.
     */
    host?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * Specifies information about the dedicated host group that the virtual machine resides in. **Note:** User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01.
     */
    hostGroup?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The identity of the virtual machine, if configured.
     */
    identity?: pulumi.Input<types.inputs.VirtualMachineIdentityArgs>;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned.
     */
    osProfile?: pulumi.Input<types.inputs.OSProfileArgs>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    plan?: pulumi.Input<types.inputs.PlanArgs>;
    /**
     * Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum api‐version: 2020‐12‐01.
     */
    platformFaultDomain?: pulumi.Input<number>;
    /**
     * Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01
     */
    priority?: pulumi.Input<string | types.enums.VirtualMachinePriorityTypes>;
    /**
     * Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01.
     */
    proximityPlacementGroup?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile?: pulumi.Input<types.inputs.ScheduledEventsProfileArgs>;
    /**
     * Specifies the Security related profile settings for the virtual machine.
     */
    securityProfile?: pulumi.Input<types.inputs.SecurityProfileArgs>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    storageProfile?: pulumi.Input<types.inputs.StorageProfileArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01.
     */
    userData?: pulumi.Input<string>;
    /**
     * Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum api‐version: 2019‐03‐01.
     */
    virtualMachineScaleSet?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the virtual machine.
     */
    vmName?: pulumi.Input<string>;
    /**
     * The virtual machine zones.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}