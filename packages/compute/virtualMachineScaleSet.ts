import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a Virtual Machine Scale Set.
 * Azure REST API version: 2023-03-01. Prior API version in Azure Native 1.x: 2021-03-01.
 *
 * Other available API versions: 2015-06-15, 2016-04-30-preview, 2023-07-01, 2023-09-01.
 */
export class VirtualMachineScaleSet extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSet {
        return new VirtualMachineScaleSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:VirtualMachineScaleSet';

    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineScaleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineScaleSet.__pulumiType;
    }

    /**
     * Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    public readonly additionalCapabilities!: pulumi.Output<types.outputs.AdditionalCapabilitiesResponse | undefined>;
    /**
     * Policy for automatic repairs.
     */
    public readonly automaticRepairsPolicy!: pulumi.Output<types.outputs.AutomaticRepairsPolicyResponse | undefined>;
    /**
     * Optional property which must either be set to True or omitted.
     */
    public readonly constrainedMaximumCapacity!: pulumi.Output<boolean | undefined>;
    /**
     * When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
     */
    public readonly doNotRunExtensionsOnOverprovisionedVMs!: pulumi.Output<boolean | undefined>;
    /**
     * The extended location of the Virtual Machine Scale Set.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Specifies information about the dedicated host group that the virtual machine scale set resides in. Minimum api-version: 2020-06-01.
     */
    public readonly hostGroup!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The identity of the virtual machine scale set, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.VirtualMachineScaleSetIdentityResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the orchestration mode for the virtual machine scale set.
     */
    public readonly orchestrationMode!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    public readonly overprovision!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    public readonly plan!: pulumi.Output<types.outputs.PlanResponse | undefined>;
    /**
     * Fault Domain count for each placement group.
     */
    public readonly platformFaultDomainCount!: pulumi.Output<number | undefined>;
    /**
     * Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance.
     */
    public readonly priorityMixPolicy!: pulumi.Output<types.outputs.PriorityMixPolicyResponse | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. Minimum api-version: 2018-04-01.
     */
    public readonly proximityPlacementGroup!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set.
     */
    public readonly scaleInPolicy!: pulumi.Output<types.outputs.ScaleInPolicyResponse | undefined>;
    /**
     * When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
     */
    public readonly singlePlacementGroup!: pulumi.Output<boolean | undefined>;
    /**
     * The virtual machine scale set sku.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Specifies the Spot Restore properties for the virtual machine scale set.
     */
    public readonly spotRestorePolicy!: pulumi.Output<types.outputs.SpotRestorePolicyResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the time at which the Virtual Machine Scale Set resource was created. Minimum api-version: 2021-11-01.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
     */
    public /*out*/ readonly uniqueId!: pulumi.Output<string>;
    /**
     * The upgrade policy.
     */
    public readonly upgradePolicy!: pulumi.Output<types.outputs.UpgradePolicyResponse | undefined>;
    /**
     * The virtual machine profile.
     */
    public readonly virtualMachineProfile!: pulumi.Output<types.outputs.VirtualMachineScaleSetVMProfileResponse | undefined>;
    /**
     * Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set.
     */
    public readonly zoneBalance!: pulumi.Output<boolean | undefined>;
    /**
     * The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a VirtualMachineScaleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalCapabilities"] = args ? args.additionalCapabilities : undefined;
            resourceInputs["automaticRepairsPolicy"] = args ? args.automaticRepairsPolicy : undefined;
            resourceInputs["constrainedMaximumCapacity"] = args ? args.constrainedMaximumCapacity : undefined;
            resourceInputs["doNotRunExtensionsOnOverprovisionedVMs"] = args ? args.doNotRunExtensionsOnOverprovisionedVMs : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hostGroup"] = args ? args.hostGroup : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["orchestrationMode"] = args ? args.orchestrationMode : undefined;
            resourceInputs["overprovision"] = args ? args.overprovision : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["platformFaultDomainCount"] = args ? args.platformFaultDomainCount : undefined;
            resourceInputs["priorityMixPolicy"] = args ? args.priorityMixPolicy : undefined;
            resourceInputs["proximityPlacementGroup"] = args ? args.proximityPlacementGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scaleInPolicy"] = args ? args.scaleInPolicy : undefined;
            resourceInputs["singlePlacementGroup"] = args ? args.singlePlacementGroup : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["spotRestorePolicy"] = args ? args.spotRestorePolicy : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["upgradePolicy"] = args ? args.upgradePolicy : undefined;
            resourceInputs["virtualMachineProfile"] = args ? args.virtualMachineProfile : undefined;
            resourceInputs["vmScaleSetName"] = args ? args.vmScaleSetName : undefined;
            resourceInputs["zoneBalance"] = args ? args.zoneBalance : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
        } else {
            resourceInputs["additionalCapabilities"] = undefined /*out*/;
            resourceInputs["automaticRepairsPolicy"] = undefined /*out*/;
            resourceInputs["constrainedMaximumCapacity"] = undefined /*out*/;
            resourceInputs["doNotRunExtensionsOnOverprovisionedVMs"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hostGroup"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["orchestrationMode"] = undefined /*out*/;
            resourceInputs["overprovision"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["platformFaultDomainCount"] = undefined /*out*/;
            resourceInputs["priorityMixPolicy"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroup"] = undefined /*out*/;
            resourceInputs["scaleInPolicy"] = undefined /*out*/;
            resourceInputs["singlePlacementGroup"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["spotRestorePolicy"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
            resourceInputs["upgradePolicy"] = undefined /*out*/;
            resourceInputs["virtualMachineProfile"] = undefined /*out*/;
            resourceInputs["zoneBalance"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20150615:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20160330:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20160430preview:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20170330:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20171201:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20180401:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20180601:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20181001:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20190301:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20190701:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20191201:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20200601:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20201201:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20210301:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20210401:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20210701:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20211101:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20220301:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20220801:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20221101:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20230301:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20230701:VirtualMachineScaleSet" }, { type: "azure-native:compute/v20230901:VirtualMachineScaleSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineScaleSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineScaleSet resource.
 */
export interface VirtualMachineScaleSetArgs {
    /**
     * Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    additionalCapabilities?: pulumi.Input<types.inputs.AdditionalCapabilitiesArgs>;
    /**
     * Policy for automatic repairs.
     */
    automaticRepairsPolicy?: pulumi.Input<types.inputs.AutomaticRepairsPolicyArgs>;
    /**
     * Optional property which must either be set to True or omitted.
     */
    constrainedMaximumCapacity?: pulumi.Input<boolean>;
    /**
     * When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
     */
    doNotRunExtensionsOnOverprovisionedVMs?: pulumi.Input<boolean>;
    /**
     * The extended location of the Virtual Machine Scale Set.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Specifies information about the dedicated host group that the virtual machine scale set resides in. Minimum api-version: 2020-06-01.
     */
    hostGroup?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The identity of the virtual machine scale set, if configured.
     */
    identity?: pulumi.Input<types.inputs.VirtualMachineScaleSetIdentityArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the orchestration mode for the virtual machine scale set.
     */
    orchestrationMode?: pulumi.Input<string | types.enums.OrchestrationMode>;
    /**
     * Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    overprovision?: pulumi.Input<boolean>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    plan?: pulumi.Input<types.inputs.PlanArgs>;
    /**
     * Fault Domain count for each placement group.
     */
    platformFaultDomainCount?: pulumi.Input<number>;
    /**
     * Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance.
     */
    priorityMixPolicy?: pulumi.Input<types.inputs.PriorityMixPolicyArgs>;
    /**
     * Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. Minimum api-version: 2018-04-01.
     */
    proximityPlacementGroup?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set.
     */
    scaleInPolicy?: pulumi.Input<types.inputs.ScaleInPolicyArgs>;
    /**
     * When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
     */
    singlePlacementGroup?: pulumi.Input<boolean>;
    /**
     * The virtual machine scale set sku.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Specifies the Spot Restore properties for the virtual machine scale set.
     */
    spotRestorePolicy?: pulumi.Input<types.inputs.SpotRestorePolicyArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The upgrade policy.
     */
    upgradePolicy?: pulumi.Input<types.inputs.UpgradePolicyArgs>;
    /**
     * The virtual machine profile.
     */
    virtualMachineProfile?: pulumi.Input<types.inputs.VirtualMachineScaleSetVMProfileArgs>;
    /**
     * The name of the VM scale set to create or update.
     */
    vmScaleSetName?: pulumi.Input<string>;
    /**
     * Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set.
     */
    zoneBalance?: pulumi.Input<boolean>;
    /**
     * The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}