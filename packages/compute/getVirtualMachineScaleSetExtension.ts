import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the extension.
 * Azure REST API version: 2023-03-01.
 */
export function getVirtualMachineScaleSetExtension(args: GetVirtualMachineScaleSetExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineScaleSetExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getVirtualMachineScaleSetExtension", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "vmScaleSetName": args.vmScaleSetName,
        "vmssExtensionName": args.vmssExtensionName,
    }, opts);
}

export interface GetVirtualMachineScaleSetExtensionArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the VM scale set containing the extension.
     */
    vmScaleSetName: string;
    /**
     * The name of the VM scale set extension.
     */
    vmssExtensionName: string;
}

/**
 * Describes a Virtual Machine Scale Set Extension.
 */
export interface GetVirtualMachineScaleSetExtensionResult {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    readonly autoUpgradeMinorVersion?: boolean;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    readonly enableAutomaticUpgrade?: boolean;
    /**
     * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The name of the extension.
     */
    readonly name?: string;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    readonly protectedSettings?: any;
    /**
     * The extensions protected settings that are passed by reference, and consumed from key vault
     */
    readonly protectedSettingsFromKeyVault?: types.outputs.KeyVaultSecretReferenceResponse;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    readonly provisionAfterExtensions?: string[];
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
 * The operation to get the extension.
 * Azure REST API version: 2023-03-01.
 */
export function getVirtualMachineScaleSetExtensionOutput(args: GetVirtualMachineScaleSetExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineScaleSetExtensionResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineScaleSetExtension(a, opts))
}

export interface GetVirtualMachineScaleSetExtensionOutputArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VM scale set containing the extension.
     */
    vmScaleSetName: pulumi.Input<string>;
    /**
     * The name of the VM scale set extension.
     */
    vmssExtensionName: pulumi.Input<string>;
}
