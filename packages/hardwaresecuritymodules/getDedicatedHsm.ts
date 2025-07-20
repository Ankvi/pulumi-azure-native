import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Azure dedicated HSM.
 *
 * Uses Azure REST API version 2024-06-30-preview.
 *
 * Other available API versions: 2021-11-30, 2025-03-31. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hardwaresecuritymodules [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Name of the dedicated Hsm
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Resource information with extended details.
 */
export interface GetDedicatedHsmResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Specifies the management network interfaces of the dedicated hsm.
     */
    readonly managementNetworkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * The name of the resource
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
     * The Dedicated Hsm zones.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified Azure dedicated HSM.
 *
 * Uses Azure REST API version 2024-06-30-preview.
 *
 * Other available API versions: 2021-11-30, 2025-03-31. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hardwaresecuritymodules [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDedicatedHsmOutput(args: GetDedicatedHsmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDedicatedHsmResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hardwaresecuritymodules:getDedicatedHsm", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedHsmOutputArgs {
    /**
     * Name of the dedicated Hsm
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}