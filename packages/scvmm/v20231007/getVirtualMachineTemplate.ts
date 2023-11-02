import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements VirtualMachineTemplate GET method.
 */
export function getVirtualMachineTemplate(args: GetVirtualMachineTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm/v20231007:getVirtualMachineTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineTemplateName": args.virtualMachineTemplateName,
    }, opts);
}

export interface GetVirtualMachineTemplateArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the VirtualMachineTemplate.
     */
    virtualMachineTemplateName: string;
}

/**
 * The VirtualMachineTemplates resource definition.
 */
export interface GetVirtualMachineTemplateResult {
    /**
     * Gets computer name.
     */
    readonly computerName: string;
    /**
     * Gets the desired number of vCPUs for the vm.
     */
    readonly cpuCount: number;
    /**
     * Gets the disks of the template.
     */
    readonly disks: types.outputs.VirtualDiskResponse[];
    /**
     * Gets a value indicating whether to enable dynamic memory or not.
     */
    readonly dynamicMemoryEnabled: string;
    /**
     * Gets the max dynamic memory for the vm.
     */
    readonly dynamicMemoryMaxMB: number;
    /**
     * Gets the min dynamic memory for the vm.
     */
    readonly dynamicMemoryMinMB: number;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Gets the generation for the vm.
     */
    readonly generation: number;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    readonly inventoryItemId?: string;
    /**
     * Gets a value indicating whether the vm template is customizable or not.
     */
    readonly isCustomizable: string;
    /**
     * Gets highly available property.
     */
    readonly isHighlyAvailable: string;
    /**
     * Gets a value indicating whether to enable processor compatibility mode for live migration of VMs.
     */
    readonly limitCpuForMigration: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * MemoryMB is the desired size of a virtual machine's memory, in MB.
     */
    readonly memoryMB: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the network interfaces of the template.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfaceResponse[];
    /**
     * Gets os name.
     */
    readonly osName: string;
    /**
     * Gets the type of the os.
     */
    readonly osType: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
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
     * Unique ID of the virtual machine template.
     */
    readonly uuid?: string;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    readonly vmmServerId?: string;
}
/**
 * Implements VirtualMachineTemplate GET method.
 */
export function getVirtualMachineTemplateOutput(args: GetVirtualMachineTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineTemplateResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineTemplate(a, opts))
}

export interface GetVirtualMachineTemplateOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the VirtualMachineTemplate.
     */
    virtualMachineTemplateName: pulumi.Input<string>;
}
