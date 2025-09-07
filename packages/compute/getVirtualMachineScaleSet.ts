import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Display information about a virtual machine scale set.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualMachineScaleSet(args: GetVirtualMachineScaleSetArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineScaleSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getVirtualMachineScaleSet", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "vmScaleSetName": args.vmScaleSetName,
    }, opts);
}

export interface GetVirtualMachineScaleSetArgs {
    /**
     * The expand expression to apply on the operation. 'UserData' retrieves the UserData property of the VM scale set that was provided by the user during the VM scale set Create/Update operation
     */
    expand?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the VM scale set.
     */
    vmScaleSetName: string;
}

/**
 * Describes a Virtual Machine Scale Set.
 */
export interface GetVirtualMachineScaleSetResult {
    /**
     * Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    readonly additionalCapabilities?: types.outputs.AdditionalCapabilitiesResponse;
    /**
     * Policy for automatic repairs.
     */
    readonly automaticRepairsPolicy?: types.outputs.AutomaticRepairsPolicyResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Optional property which must either be set to True or omitted.
     */
    readonly constrainedMaximumCapacity?: boolean;
    /**
     * When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
     */
    readonly doNotRunExtensionsOnOverprovisionedVMs?: boolean;
    /**
     * Etag is property returned in Create/Update/Get response of the VMSS, so that customer can supply it in the header to ensure optimistic updates
     */
    readonly etag: string;
    /**
     * The extended location of the Virtual Machine Scale Set.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Specifies information about the dedicated host group that the virtual machine scale set resides in. Minimum api-version: 2020-06-01.
     */
    readonly hostGroup?: types.outputs.SubResourceResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the virtual machine scale set, if configured.
     */
    readonly identity?: types.outputs.VirtualMachineScaleSetIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Specifies the orchestration mode for the virtual machine scale set.
     */
    readonly orchestrationMode?: string;
    /**
     * Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    readonly overprovision?: boolean;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * Fault Domain count for each placement group.
     */
    readonly platformFaultDomainCount?: number;
    /**
     * Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance.
     */
    readonly priorityMixPolicy?: types.outputs.PriorityMixPolicyResponse;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. Minimum api-version: 2018-04-01.
     */
    readonly proximityPlacementGroup?: types.outputs.SubResourceResponse;
    /**
     * Policy for Resiliency
     */
    readonly resiliencyPolicy?: types.outputs.ResiliencyPolicyResponse;
    /**
     * Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set.
     */
    readonly scaleInPolicy?: types.outputs.ScaleInPolicyResponse;
    /**
     * The ScheduledEventsPolicy.
     */
    readonly scheduledEventsPolicy?: types.outputs.ScheduledEventsPolicyResponse;
    /**
     * When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
     */
    readonly singlePlacementGroup?: boolean;
    /**
     * The virtual machine scale set sku.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Specifies the sku profile for the virtual machine scale set.
     */
    readonly skuProfile?: types.outputs.SkuProfileResponse;
    /**
     * Specifies the Spot Restore properties for the virtual machine scale set.
     */
    readonly spotRestorePolicy?: types.outputs.SpotRestorePolicyResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the time at which the Virtual Machine Scale Set resource was created. Minimum api-version: 2021-11-01.
     */
    readonly timeCreated: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
     */
    readonly uniqueId: string;
    /**
     * The upgrade policy.
     */
    readonly upgradePolicy?: types.outputs.UpgradePolicyResponse;
    /**
     * The virtual machine profile.
     */
    readonly virtualMachineProfile?: types.outputs.VirtualMachineScaleSetVMProfileResponse;
    /**
     * Specifies the align mode between Virtual Machine Scale Set compute and storage Fault Domain count.
     */
    readonly zonalPlatformFaultDomainAlignMode?: string;
    /**
     * Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set.
     */
    readonly zoneBalance?: boolean;
    /**
     * The availability zones.
     */
    readonly zones?: string[];
}
/**
 * Display information about a virtual machine scale set.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualMachineScaleSetOutput(args: GetVirtualMachineScaleSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualMachineScaleSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getVirtualMachineScaleSet", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "vmScaleSetName": args.vmScaleSetName,
    }, opts);
}

export interface GetVirtualMachineScaleSetOutputArgs {
    /**
     * The expand expression to apply on the operation. 'UserData' retrieves the UserData property of the VM scale set that was provided by the user during the VM scale set Create/Update operation
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VM scale set.
     */
    vmScaleSetName: pulumi.Input<string>;
}