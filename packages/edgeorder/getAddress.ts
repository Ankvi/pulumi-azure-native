import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about the specified address.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2022-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native edgeorder [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAddress(args: GetAddressArgs, opts?: pulumi.InvokeOptions): Promise<GetAddressResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder:getAddress", {
        "addressName": args.addressName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAddressArgs {
    /**
     * The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only.
     */
    addressName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Address Resource.
 */
export interface GetAddressResult {
    /**
     * Type of address based on its usage context.
     */
    readonly addressClassification?: string;
    /**
     * Status of address validation.
     */
    readonly addressValidationStatus: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Contact details for the address.
     */
    readonly contactDetails?: types.outputs.ContactDetailsResponse;
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
     * Provisioning state
     */
    readonly provisioningState: string;
    /**
     * Shipping details for the address.
     */
    readonly shippingAddress?: types.outputs.ShippingAddressResponse;
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
 * Get information about the specified address.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2022-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native edgeorder [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAddressOutput(args: GetAddressOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAddressResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edgeorder:getAddress", {
        "addressName": args.addressName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAddressOutputArgs {
    /**
     * The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only.
     */
    addressName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}