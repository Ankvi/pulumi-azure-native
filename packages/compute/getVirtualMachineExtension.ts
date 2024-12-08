import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the extension.
 * Azure REST API version: 2023-03-01.
 *
 * Other available API versions: 2021-11-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01.
 */
export function getVirtualMachineExtension(args: GetVirtualMachineExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineExtensionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getVirtualMachineExtension", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "vmExtensionName": args.vmExtensionName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetVirtualMachineExtensionArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine extension.
     */
    vmExtensionName: string;
    /**
     * The name of the virtual machine containing the extension.
     */
    vmName: string;
}

/**
 * Describes a Virtual Machine Extension.
 */
export interface GetVirtualMachineExtensionResult {
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
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
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
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
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
 *
 * Other available API versions: 2021-11-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01.
 */
export function getVirtualMachineExtensionOutput(args: GetVirtualMachineExtensionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualMachineExtensionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getVirtualMachineExtension", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "vmExtensionName": args.vmExtensionName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetVirtualMachineExtensionOutputArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine extension.
     */
    vmExtensionName: pulumi.Input<string>;
    /**
     * The name of the virtual machine containing the extension.
     */
    vmName: pulumi.Input<string>;
}