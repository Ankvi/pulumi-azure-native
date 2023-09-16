import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the extension.
 * Azure REST API version: 2022-07-15-preview.
 */
export function getMachineExtension(args: GetMachineExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getMachineExtension", {
        "extensionName": args.extensionName,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetMachineExtensionArgs {
    /**
     * The name of the machine extension.
     */
    extensionName: string;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
    /**
     * The name of the machine containing the extension.
     */
    virtualMachineName: string;
}

/**
 * Describes a Machine Extension.
 */
export interface GetMachineExtensionResult {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    readonly autoUpgradeMinorVersion?: boolean;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
     */
    readonly enableAutomaticUpgrade?: boolean;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag?: string;
    /**
     * Gets or sets the Id.
     */
    readonly id: string;
    /**
     * The machine extension instance view.
     */
    readonly instanceView?: types.outputs.connectedvmwarevsphere.MachineExtensionPropertiesResponseInstanceView;
    /**
     * Gets or sets the location.
     */
    readonly location?: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    readonly protectedSettings?: any;
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
     * The system data.
     */
    readonly systemData: types.outputs.connectedvmwarevsphere.SystemDataResponse;
    /**
     * Gets or sets the Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
    /**
     * Specifies the version of the script handler.
     */
    readonly typeHandlerVersion?: string;
}
/**
 * The operation to get the extension.
 * Azure REST API version: 2022-07-15-preview.
 */
export function getMachineExtensionOutput(args: GetMachineExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineExtensionResult> {
    return pulumi.output(args).apply((a: any) => getMachineExtension(a, opts))
}

export interface GetMachineExtensionOutputArgs {
    /**
     * The name of the machine extension.
     */
    extensionName: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the machine containing the extension.
     */
    virtualMachineName: pulumi.Input<string>;
}
