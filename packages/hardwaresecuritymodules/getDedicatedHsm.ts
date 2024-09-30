import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Azure dedicated HSM.
 * Azure REST API version: 2021-11-30.
 *
 * Other available API versions: 2024-06-30-preview.
 */
export function getDedicatedHsm(args: GetDedicatedHsmArgs, opts?: pulumi.InvokeOptions): Promise<GetDedicatedHsmResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hardwaresecuritymodules:getDedicatedHsm", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedHsmArgs {
    /**
     * The name of the dedicated HSM.
     */
    name: string;
    /**
     * The name of the Resource Group to which the dedicated hsm belongs.
     */
    resourceGroupName: string;
}

/**
 * Resource information with extended details.
 */
export interface GetDedicatedHsmResult {
    /**
     * The Azure Resource Manager resource ID for the dedicated HSM.
     */
    readonly id: string;
    /**
     * The supported Azure location where the dedicated HSM should be created.
     */
    readonly location: string;
    /**
     * Specifies the management network interfaces of the dedicated hsm.
     */
    readonly managementNetworkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * The name of the dedicated HSM.
     */
    readonly name: string;
    /**
     * Specifies the network interfaces of the dedicated hsm.
     */
    readonly networkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * SKU details
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * This field will be used when RP does not support Availability zones.
     */
    readonly stampId?: string;
    /**
     * Resource Status Message.
     */
    readonly statusMessage: string;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type of the dedicated HSM.
     */
    readonly type: string;
    /**
     * The Dedicated Hsm zones.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified Azure dedicated HSM.
 * Azure REST API version: 2021-11-30.
 *
 * Other available API versions: 2024-06-30-preview.
 */
export function getDedicatedHsmOutput(args: GetDedicatedHsmOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDedicatedHsmResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hardwaresecuritymodules:getDedicatedHsm", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedHsmOutputArgs {
    /**
     * The name of the dedicated HSM.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group to which the dedicated hsm belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}