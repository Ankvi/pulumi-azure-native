import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SuppressionListAddress.
 */
export function getSuppressionListAddress(args: GetSuppressionListAddressArgs, opts?: pulumi.InvokeOptions): Promise<GetSuppressionListAddressResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:communication/v20230601preview:getSuppressionListAddress", {
        "addressId": args.addressId,
        "domainName": args.domainName,
        "emailServiceName": args.emailServiceName,
        "resourceGroupName": args.resourceGroupName,
        "suppressionListName": args.suppressionListName,
    }, opts);
}

export interface GetSuppressionListAddressArgs {
    /**
     * The id of the address in a suppression list.
     */
    addressId: string;
    /**
     * The name of the Domains resource.
     */
    domainName: string;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the suppression list.
     */
    suppressionListName: string;
}

/**
 * A object that represents a SuppressionList record.
 */
export interface GetSuppressionListAddressResult {
    /**
     * The location where the SuppressionListAddress data is stored at rest. This value is inherited from the parent Domains resource.
     */
    readonly dataLocation: string;
    /**
     * Email address of the recipient.
     */
    readonly email: string;
    /**
     * The first name of the email recipient.
     */
    readonly firstName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The date the address was last updated in a suppression list.
     */
    readonly lastModified: string;
    /**
     * The last name of the email recipient.
     */
    readonly lastName?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * An optional property to provide contextual notes or a description for an address.
     */
    readonly notes?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a SuppressionListAddress.
 */
export function getSuppressionListAddressOutput(args: GetSuppressionListAddressOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSuppressionListAddressResult> {
    return pulumi.output(args).apply((a: any) => getSuppressionListAddress(a, opts))
}

export interface GetSuppressionListAddressOutputArgs {
    /**
     * The id of the address in a suppression list.
     */
    addressId: pulumi.Input<string>;
    /**
     * The name of the Domains resource.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the suppression list.
     */
    suppressionListName: pulumi.Input<string>;
}
