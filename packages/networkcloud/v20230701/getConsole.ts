import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided virtual machine console.
 */
export function getConsole(args: GetConsoleArgs, opts?: pulumi.InvokeOptions): Promise<GetConsoleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud/v20230701:getConsole", {
        "consoleName": args.consoleName,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetConsoleArgs {
    /**
     * The name of the virtual machine console.
     */
    consoleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine.
     */
    virtualMachineName: string;
}

export interface GetConsoleResult {
    /**
     * The more detailed status of the console.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The indicator of whether the console access is enabled.
     */
    readonly enabled: string;
    /**
     * The date and time after which the key will be disallowed access.
     */
    readonly expiration?: string;
    /**
     * The extended location of the cluster manager associated with the cluster this virtual machine is created on.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource ID of the private link service that is used to provide virtual machine console access.
     */
    readonly privateLinkServiceId: string;
    /**
     * The provisioning state of the virtual machine console.
     */
    readonly provisioningState: string;
    /**
     * The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in.
     */
    readonly sshPublicKey: types.outputs.SshPublicKeyResponse;
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
     * The unique identifier for the virtual machine that is used to access the console.
     */
    readonly virtualMachineAccessId: string;
}
/**
 * Get properties of the provided virtual machine console.
 */
export function getConsoleOutput(args: GetConsoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConsoleResult> {
    return pulumi.output(args).apply((a: any) => getConsole(a, opts))
}

export interface GetConsoleOutputArgs {
    /**
     * The name of the virtual machine console.
     */
    consoleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    virtualMachineName: pulumi.Input<string>;
}
