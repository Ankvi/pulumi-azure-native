import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get virtual machine
 *
 * Uses Azure REST API version 2019-04-01.
 */
export function getVirtualMachine(args: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:vmwarecloudsimple:getVirtualMachine", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineArgs {
    /**
     * The name of the resource group
     */
    resourceGroupName: string;
    /**
     * virtual machine name
     */
    virtualMachineName: string;
}

/**
 * Virtual machine model
 */
export interface GetVirtualMachineResult {
    /**
     * The amount of memory
     */
    readonly amountOfRam: number;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The list of Virtual Disks' Controllers
     */
    readonly controllers: types.outputs.VirtualDiskControllerResponse[];
    /**
     * Virtual machine properties
     */
    readonly customization?: types.outputs.GuestOSCustomizationResponse;
    /**
     * The list of Virtual Disks
     */
    readonly disks?: types.outputs.VirtualDiskResponse[];
    /**
     * The DNS name of Virtual Machine in VCenter
     */
    readonly dnsname: string;
    /**
     * Expose Guest OS or not
     */
    readonly exposeToGuestVM?: boolean;
    /**
     * The path to virtual machine folder in VCenter
     */
    readonly folder: string;
    /**
     * The name of Guest OS
     */
    readonly guestOS: string;
    /**
     * The Guest OS type
     */
    readonly guestOSType: string;
    /**
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/virtualMachines/{virtualMachineName}
     */
    readonly id: string;
    /**
     * Azure region
     */
    readonly location: string;
    /**
     * {virtualMachineName}
     */
    readonly name: string;
    /**
     * The list of Virtual NICs
     */
    readonly nics?: types.outputs.VirtualNicResponse[];
    /**
     * The number of CPU cores
     */
    readonly numberOfCores: number;
    /**
     * Password for login. Deprecated - use customization property
     */
    readonly password?: string;
    /**
     * Private Cloud Id
     */
    readonly privateCloudId: string;
    /**
     * The provisioning status of the resource
     */
    readonly provisioningState: string;
    /**
     * The public ip of Virtual Machine
     */
    readonly publicIP: string;
    /**
     * Virtual Machines Resource Pool
     */
    readonly resourcePool?: types.outputs.ResourcePoolResponse;
    /**
     * The status of Virtual machine
     */
    readonly status: string;
    /**
     * The list of tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Virtual Machine Template Id
     */
    readonly templateId?: string;
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: string;
    /**
     * Username for login. Deprecated - use customization property
     */
    readonly username?: string;
    /**
     * The list of Virtual VSphere Networks
     */
    readonly vSphereNetworks?: string[];
    /**
     * The internal id of Virtual Machine in VCenter
     */
    readonly vmId: string;
    /**
     * VMware tools version
     */
    readonly vmwaretools: string;
}
/**
 * Get virtual machine
 *
 * Uses Azure REST API version 2019-04-01.
 */
export function getVirtualMachineOutput(args: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:vmwarecloudsimple:getVirtualMachine", {
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetVirtualMachineOutputArgs {
    /**
     * The name of the resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * virtual machine name
     */
    virtualMachineName: pulumi.Input<string>;
}