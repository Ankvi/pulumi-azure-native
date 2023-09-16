import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified address.
 * Azure REST API version: 2021-12-01.
 */
export function getAddressByName(args: GetAddressByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetAddressByNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edgeorder:getAddressByName", {
        "addressName": args.addressName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAddressByNameArgs {
    /**
     * The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
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
export interface GetAddressByNameResult {
    /**
     * Status of address validation
     */
    readonly addressValidationStatus: string;
    /**
     * Contact details for the address
     */
    readonly contactDetails: types.outputs.edgeorder.ContactDetailsResponse;
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
     * Shipping details for the address
     */
    readonly shippingAddress?: types.outputs.edgeorder.ShippingAddressResponse;
    /**
     * Represents resource creation and update time
     */
    readonly systemData: types.outputs.edgeorder.SystemDataResponse;
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
 * Gets information about the specified address.
 * Azure REST API version: 2021-12-01.
 */
export function getAddressByNameOutput(args: GetAddressByNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAddressByNameResult> {
    return pulumi.output(args).apply((a: any) => getAddressByName(a, opts))
}

export interface GetAddressByNameOutputArgs {
    /**
     * The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    addressName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
