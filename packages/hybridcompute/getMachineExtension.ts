import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the extension.
 * Azure REST API version: 2022-12-27.
 *
 * Other available API versions: 2019-08-02-preview, 2020-08-15-preview, 2022-05-10-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-10.
 */
export function getMachineExtension(args: GetMachineExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute:getMachineExtension", {
        "extensionName": args.extensionName,
        "machineName": args.machineName,
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
    machineName: string;
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Describes Machine Extension Properties.
     */
    readonly properties: types.outputs.MachineExtensionPropertiesResponse;
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
}
/**
 * The operation to get the extension.
 * Azure REST API version: 2022-12-27.
 *
 * Other available API versions: 2019-08-02-preview, 2020-08-15-preview, 2022-05-10-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-10.
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
     * The name of the machine containing the extension.
     */
    machineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}