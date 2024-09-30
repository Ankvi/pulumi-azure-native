import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the extension.
 * Azure REST API version: 2022-12-15-preview.
 */
export function getMachineExtension(args: GetMachineExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineExtensionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getMachineExtension", {
        "extensionName": args.extensionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMachineExtensionArgs {
    /**
     * The name of the machine extension.
     */
    extensionName: string;
    /**
     * The name of the machine containing the extension.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
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
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag?: string;
    /**
     * The Id.
     */
    readonly id: string;
    /**
     * The machine extension instance view.
     */
    readonly instanceView?: types.outputs.MachineExtensionPropertiesResponseInstanceView;
    /**
     * The location.
     */
    readonly location?: string;
    /**
     * The name.
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
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Specifies the version of the script handler.
     */
    readonly typeHandlerVersion?: string;
}
/**
 * The operation to get the extension.
 * Azure REST API version: 2022-12-15-preview.
 */
export function getMachineExtensionOutput(args: GetMachineExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineExtensionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getMachineExtension", {
        "extensionName": args.extensionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMachineExtensionOutputArgs {
    /**
     * The name of the machine extension.
     */
    extensionName: pulumi.Input<string>;
    /**
     * The name of the machine containing the extension.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}