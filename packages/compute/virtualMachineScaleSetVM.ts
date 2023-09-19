import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a virtual machine scale set virtual machine.
 * Azure REST API version: 2023-03-01. Prior API version in Azure Native 1.x: 2021-03-01
 */
export class VirtualMachineScaleSetVM extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSetVM resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSetVM {
        return new VirtualMachineScaleSetVM(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:VirtualMachineScaleSetVM';

    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSetVM.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineScaleSetVM {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineScaleSetVM.__pulumiType;
    }

    /**
     * Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    public readonly additionalCapabilities!: pulumi.Output<types.outputs.AdditionalCapabilitiesResponse | undefined>;
    /**
     * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
     */
    public readonly availabilitySet!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
     */
    public readonly diagnosticsProfile!: pulumi.Output<types.outputs.DiagnosticsProfileResponse | undefined>;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    public readonly hardwareProfile!: pulumi.Output<types.outputs.HardwareProfileResponse | undefined>;
    /**
     * The identity of the virtual machine, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.VirtualMachineIdentityResponse | undefined>;
    /**
     * The virtual machine instance ID.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The virtual machine instance view.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.VirtualMachineScaleSetVMInstanceViewResponse>;
    /**
     * Specifies whether the latest model has been applied to the virtual machine.
     */
    public /*out*/ readonly latestModelApplied!: pulumi.Output<boolean>;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
     */
    public readonly licenseType!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
     */
    public /*out*/ readonly modelDefinitionApplied!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * Specifies the network profile configuration of the virtual machine.
     */
    public readonly networkProfileConfiguration!: pulumi.Output<types.outputs.VirtualMachineScaleSetVMNetworkProfileConfigurationResponse | undefined>;
    /**
     * Specifies the operating system settings for the virtual machine.
     */
    public readonly osProfile!: pulumi.Output<types.outputs.OSProfileResponse | undefined>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    public readonly plan!: pulumi.Output<types.outputs.PlanResponse | undefined>;
    /**
     * Specifies the protection policy of the virtual machine.
     */
    public readonly protectionPolicy!: pulumi.Output<types.outputs.VirtualMachineScaleSetVMProtectionPolicyResponse | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The virtual machine child extension resources.
     */
    public /*out*/ readonly resources!: pulumi.Output<types.outputs.VirtualMachineExtensionResponse[]>;
    /**
     * Specifies the Security related profile settings for the virtual machine.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.SecurityProfileResponse | undefined>;
    /**
     * The virtual machine SKU.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.StorageProfileResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. <br><br>Minimum api-version: 2021-03-01
     */
    public readonly userData!: pulumi.Output<string | undefined>;
    /**
     * Azure VM unique ID.
     */
    public /*out*/ readonly vmId!: pulumi.Output<string>;
    /**
     * The virtual machine zones.
     */
    public /*out*/ readonly zones!: pulumi.Output<string[]>;

    /**
     * Create a VirtualMachineScaleSetVM resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetVMArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vmScaleSetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmScaleSetName'");
            }
            resourceInputs["additionalCapabilities"] = args ? args.additionalCapabilities : undefined;
            resourceInputs["availabilitySet"] = args ? args.availabilitySet : undefined;
            resourceInputs["diagnosticsProfile"] = args ? args.diagnosticsProfile : undefined;
            resourceInputs["hardwareProfile"] = args ? args.hardwareProfile : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["networkProfileConfiguration"] = args ? args.networkProfileConfiguration : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["protectionPolicy"] = args ? args.protectionPolicy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityProfile"] = args ? args.securityProfile : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["vmScaleSetName"] = args ? args.vmScaleSetName : undefined;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["latestModelApplied"] = undefined /*out*/;
            resourceInputs["modelDefinitionApplied"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        } else {
            resourceInputs["additionalCapabilities"] = undefined /*out*/;
            resourceInputs["availabilitySet"] = undefined /*out*/;
            resourceInputs["diagnosticsProfile"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["instanceId"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["latestModelApplied"] = undefined /*out*/;
            resourceInputs["licenseType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["modelDefinitionApplied"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["networkProfileConfiguration"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["protectionPolicy"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userData"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20171201:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20180401:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20180601:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20181001:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20190301:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20190701:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20191201:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20200601:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20201201:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20210301:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20210401:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20210701:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20211101:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20220301:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20220801:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20221101:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20230301:VirtualMachineScaleSetVM" }, { type: "azure-native:compute/v20230701:VirtualMachineScaleSetVM" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineScaleSetVM.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineScaleSetVM resource.
 */
export interface VirtualMachineScaleSetVMArgs {
    /**
     * Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    additionalCapabilities?: pulumi.Input<types.inputs.AdditionalCapabilitiesArgs>;
    /**
     * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
     */
    availabilitySet?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile?: pulumi.Input<types.inputs.DiagnosticsProfileArgs>;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    hardwareProfile?: pulumi.Input<types.inputs.HardwareProfileArgs>;
    /**
     * The identity of the virtual machine, if configured.
     */
    identity?: pulumi.Input<types.inputs.VirtualMachineIdentityArgs>;
    /**
     * The instance ID of the virtual machine.
     */
    instanceId?: pulumi.Input<string>;
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
     * Specifies the network profile configuration of the virtual machine.
     */
    networkProfileConfiguration?: pulumi.Input<types.inputs.VirtualMachineScaleSetVMNetworkProfileConfigurationArgs>;
    /**
     * Specifies the operating system settings for the virtual machine.
     */
    osProfile?: pulumi.Input<types.inputs.OSProfileArgs>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    plan?: pulumi.Input<types.inputs.PlanArgs>;
    /**
     * Specifies the protection policy of the virtual machine.
     */
    protectionPolicy?: pulumi.Input<types.inputs.VirtualMachineScaleSetVMProtectionPolicyArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
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
     * UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. <br><br>Minimum api-version: 2021-03-01
     */
    userData?: pulumi.Input<string>;
    /**
     * The name of the VM scale set where the extension should be create or updated.
     */
    vmScaleSetName: pulumi.Input<string>;
}
