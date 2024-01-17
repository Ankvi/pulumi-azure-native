import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get firmware.
 * Azure REST API version: 2023-02-08-preview.
 */
export function getFirmware(args: GetFirmwareArgs, opts?: pulumi.InvokeOptions): Promise<GetFirmwareResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotfirmwaredefense:getFirmware", {
        "firmwareId": args.firmwareId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFirmwareArgs {
    /**
     * The id of the firmware.
     */
    firmwareId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the firmware analysis workspace.
     */
    workspaceName: string;
}

/**
 * Firmware definition
 */
export interface GetFirmwareResult {
    /**
     * User-specified description of the firmware.
     */
    readonly description?: string;
    /**
     * File name for a firmware that user uploaded.
     */
    readonly fileName?: string;
    /**
     * File size of the uploaded firmware image.
     */
    readonly fileSize?: number;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Firmware model.
     */
    readonly model?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The status of firmware scan.
     */
    readonly status?: string;
    /**
     * A list of errors or other messages generated during firmware analysis
     */
    readonly statusMessages?: any[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Firmware vendor.
     */
    readonly vendor?: string;
    /**
     * Firmware version.
     */
    readonly version?: string;
}
/**
 * Get firmware.
 * Azure REST API version: 2023-02-08-preview.
 */
export function getFirmwareOutput(args: GetFirmwareOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirmwareResult> {
    return pulumi.output(args).apply((a: any) => getFirmware(a, opts))
}

export interface GetFirmwareOutputArgs {
    /**
     * The id of the firmware.
     */
    firmwareId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the firmware analysis workspace.
     */
    workspaceName: pulumi.Input<string>;
}