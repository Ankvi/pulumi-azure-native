import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the VMSS VM extension.
 */
export function getVirtualMachineScaleSetVMExtension(args: GetVirtualMachineScaleSetVMExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineScaleSetVMExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20211101:getVirtualMachineScaleSetVMExtension", {
        "expand": args.expand,
        "instanceId": args.instanceId,
        "resourceGroupName": args.resourceGroupName,
        "vmExtensionName": args.vmExtensionName,
        "vmScaleSetName": args.vmScaleSetName,
    }, opts);
}

export interface GetVirtualMachineScaleSetVMExtensionArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: string;
    /**
     * The instance ID of the virtual machine.
     */
    instanceId: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine extension.
     */
    vmExtensionName: string;
    /**
     * The name of the VM scale set.
     */
    vmScaleSetName: string;
}

/**
 * Describes a VMSS VM Extension.
 */
export interface GetVirtualMachineScaleSetVMExtensionResult {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    readonly autoUpgradeMinorVersion?: boolean;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    readonly enableAutomaticUpgrade?: boolean;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The virtual machine extension instance view.
     */
    readonly instanceView?: types.outputs.VirtualMachineExtensionInstanceViewResponse;
    /**
     * The name of the extension.
     */
    readonly name: string;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    readonly protectedSettings?: any;
    /**
     * The extensions protected settings that are passed by reference, and consumed from key vault
     */
    readonly protectedSettingsFromKeyVault?: any;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The name of the extension handler publisher.
     */
    readonly publisher?: string;
    /**
     * Json formatted public settings for the extension.
     */
    readonly settings?: any;
    /**
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    readonly suppressFailures?: boolean;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Specifies the version of the script handler.
     */
    readonly typeHandlerVersion?: string;
}
/**
 * The operation to get the VMSS VM extension.
 */
export function getVirtualMachineScaleSetVMExtensionOutput(args: GetVirtualMachineScaleSetVMExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineScaleSetVMExtensionResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineScaleSetVMExtension(a, opts))
}

export interface GetVirtualMachineScaleSetVMExtensionOutputArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The instance ID of the virtual machine.
     */
    instanceId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine extension.
     */
    vmExtensionName: pulumi.Input<string>;
    /**
     * The name of the VM scale set.
     */
    vmScaleSetName: pulumi.Input<string>;
}
