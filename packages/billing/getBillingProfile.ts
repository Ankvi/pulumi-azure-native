import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
 *
 * Uses Azure REST API version 2024-04-01.
 */
export function getBillingProfile(args: GetBillingProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billing:getBillingProfile", {
        "billingAccountName": args.billingAccountName,
        "billingProfileName": args.billingProfileName,
    }, opts);
}

export interface GetBillingProfileArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: string;
}

/**
 * A billing profile.
 */
export interface GetBillingProfileResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A billing profile.
     */
    readonly properties: types.outputs.BillingProfilePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
 *
 * Uses Azure REST API version 2024-04-01.
 */
export function getBillingProfileOutput(args: GetBillingProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBillingProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:billing:getBillingProfile", {
        "billingAccountName": args.billingAccountName,
        "billingProfileName": args.billingProfileName,
    }, opts);
}

export interface GetBillingProfileOutputArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: pulumi.Input<string>;
}