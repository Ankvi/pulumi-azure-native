import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the configured settings for a serial port
 */
export function getSerialPort(args: GetSerialPortArgs, opts?: pulumi.InvokeOptions): Promise<GetSerialPortResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:serialconsole/v20180501:getSerialPort", {
        "parentResource": args.parentResource,
        "parentResourceType": args.parentResourceType,
        "resourceGroupName": args.resourceGroupName,
        "resourceProviderNamespace": args.resourceProviderNamespace,
        "serialPort": args.serialPort,
    }, opts);
}

export interface GetSerialPortArgs {
    /**
     * The resource name, or subordinate path, for the parent of the serial port. For example: the name of the virtual machine.
     */
    parentResource: string;
    /**
     * The resource type of the parent resource.  For example: 'virtualMachines' or 'virtualMachineScaleSets'
     */
    parentResourceType: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The namespace of the resource provider.
     */
    resourceProviderNamespace: string;
    /**
     * The name of the serial port to connect to.
     */
    serialPort: string;
}

/**
 * Represents the serial port of the parent resource.
 */
export interface GetSerialPortResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Specifies whether the port is enabled for a serial console connection.
     */
    readonly state?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the configured settings for a serial port
 */
export function getSerialPortOutput(args: GetSerialPortOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSerialPortResult> {
    return pulumi.output(args).apply((a: any) => getSerialPort(a, opts))
}

export interface GetSerialPortOutputArgs {
    /**
     * The resource name, or subordinate path, for the parent of the serial port. For example: the name of the virtual machine.
     */
    parentResource: pulumi.Input<string>;
    /**
     * The resource type of the parent resource.  For example: 'virtualMachines' or 'virtualMachineScaleSets'
     */
    parentResourceType: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The namespace of the resource provider.
     */
    resourceProviderNamespace: pulumi.Input<string>;
    /**
     * The name of the serial port to connect to.
     */
    serialPort: pulumi.Input<string>;
}
