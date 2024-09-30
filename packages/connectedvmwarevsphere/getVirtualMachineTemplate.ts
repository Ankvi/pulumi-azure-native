import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements virtual machine template GET method.
 * Azure REST API version: 2022-07-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01, 2023-12-01.
 */
export function getVirtualMachineTemplate(args: GetVirtualMachineTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getVirtualMachineTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineTemplateName": args.virtualMachineTemplateName,
    }, opts);
}

export interface GetVirtualMachineTemplateArgs {
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
    /**
     * Name of the virtual machine template resource.
     */
    virtualMachineTemplateName: string;
}

/**
 * Define the virtualMachineTemplate.
 */
export interface GetVirtualMachineTemplateResult {
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * Gets or sets the disks the template.
     */
    readonly disks: types.outputs.VirtualDiskResponse[];
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Firmware type
     */
    readonly firmwareType: string;
    /**
     * Gets or sets the folder path of the template.
     */
    readonly folderPath: string;
    /**
     * Gets or sets the Id.
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the virtual machine template.
     */
    readonly inventoryItemId?: string;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Gets or sets memory size in MBs for the template.
     */
    readonly memorySizeMB: number;
    /**
     * Gets or sets the vCenter Managed Object name for the virtual machine template.
     */
    readonly moName: string;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual machine
     * template.
     */
    readonly moRefId?: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Gets or sets the network interfaces of the template.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfaceResponse[];
    /**
     * Gets or sets the number of vCPUs for the template.
     */
    readonly numCPUs: number;
    /**
     * Gets or sets the number of cores per socket for the template.
     * Defaults to 1 if unspecified.
     */
    readonly numCoresPerSocket: number;
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
     * The resource status information.
     */
    readonly statuses: types.outputs.ResourceStatusResponse[];
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets or sets the Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the current version of VMware Tools.
     */
    readonly toolsVersion: string;
    /**
     * Gets or sets the current version status of VMware Tools installed in the guest operating system.
     */
    readonly toolsVersionStatus: string;
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    readonly uuid: string;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this template resides.
     */
    readonly vCenterId?: string;
}
/**
 * Implements virtual machine template GET method.
 * Azure REST API version: 2022-07-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01, 2023-12-01.
 */
export function getVirtualMachineTemplateOutput(args: GetVirtualMachineTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedvmwarevsphere:getVirtualMachineTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineTemplateName": args.virtualMachineTemplateName,
    }, opts);
}

export interface GetVirtualMachineTemplateOutputArgs {
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the virtual machine template resource.
     */
    virtualMachineTemplateName: pulumi.Input<string>;
}