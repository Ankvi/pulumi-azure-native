import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a string that represents the contents of the RDP file for the virtual machine
 * Azure REST API version: 2018-09-15.
 */
export function getVirtualMachineRdpFileContents(args: GetVirtualMachineRdpFileContentsArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineRdpFileContentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getVirtualMachineRdpFileContents", {
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVirtualMachineRdpFileContentsArgs {
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the virtual machine.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Represents a .rdp file
 */
export interface GetVirtualMachineRdpFileContentsResult {
    /**
     * The contents of the .rdp file
     */
    readonly contents?: string;
}
/**
 * Gets a string that represents the contents of the RDP file for the virtual machine
 * Azure REST API version: 2018-09-15.
 */
export function getVirtualMachineRdpFileContentsOutput(args: GetVirtualMachineRdpFileContentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineRdpFileContentsResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineRdpFileContents(a, opts))
}

export interface GetVirtualMachineRdpFileContentsOutputArgs {
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
