import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements VirtualMachineTemplate GET method.
 * Azure REST API version: 2022-05-21-preview.
 */
export function getVirtualMachineTemplate(args: GetVirtualMachineTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getVirtualMachineTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineTemplateName": args.virtualMachineTemplateName,
    }, opts);
}

export interface GetVirtualMachineTemplateArgs {
    /**
     * The name of the resource group.
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
     * Gets or sets computer name.
     */
    readonly computerName: string;
    /**
     * Gets or sets the desired number of vCPUs for the vm.
     */
    readonly cpuCount: number;
    /**
     * Gets or sets the disks of the template.
     */
    readonly disks: types.outputs.VirtualDiskResponse[];
    /**
     * Gets or sets a value indicating whether to enable dynamic memory or not.
     */
    readonly dynamicMemoryEnabled: string;
    /**
     * Gets or sets the max dynamic memory for the vm.
     */
    readonly dynamicMemoryMaxMB: number;
    /**
     * Gets or sets the min dynamic memory for the vm.
     */
    readonly dynamicMemoryMinMB: number;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Gets or sets the generation for the vm.
     */
    readonly generation: number;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    readonly inventoryItemId?: string;
    /**
     * Gets or sets a value indicating whether the vm template is customizable or not.
     */
    readonly isCustomizable: string;
    /**
     * Gets highly available property.
     */
    readonly isHighlyAvailable: string;
    /**
     * Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs.
     */
    readonly limitCpuForMigration: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * MemoryMB is the desired size of a virtual machine's memory, in MB.
     */
    readonly memoryMB: number;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Gets or sets the network interfaces of the template.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfacesResponse[];
    /**
     * Gets or sets os name.
     */
    readonly osName: string;
    /**
     * Gets or sets the type of the os.
     */
    readonly osType: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
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
 * Azure REST API version: 2022-05-21-preview.
 */
export function getVirtualMachineTemplateOutput(args: GetVirtualMachineTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineTemplateResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineTemplate(a, opts))
}

export interface GetVirtualMachineTemplateOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the VirtualMachineTemplate.
     */
    virtualMachineTemplateName: pulumi.Input<string>;
}
