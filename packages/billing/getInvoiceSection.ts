import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Uses Azure REST API version 2024-04-01.
 */
export function getInvoiceSection(args: GetInvoiceSectionArgs, opts?: pulumi.InvokeOptions): Promise<GetInvoiceSectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billing:getInvoiceSection", {
        "billingAccountName": args.billingAccountName,
        "billingProfileName": args.billingProfileName,
        "invoiceSectionName": args.invoiceSectionName,
    }, opts);
}

export interface GetInvoiceSectionArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: string;
    /**
     * The ID that uniquely identifies an invoice section.
     */
    invoiceSectionName: string;
}

/**
 * An invoice section.
 */
export interface GetInvoiceSectionResult {
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
     * An invoice section.
     */
    readonly properties: types.outputs.InvoiceSectionPropertiesResponse;
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
 * Gets an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Uses Azure REST API version 2024-04-01.
 */
export function getInvoiceSectionOutput(args: GetInvoiceSectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInvoiceSectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:billing:getInvoiceSection", {
        "billingAccountName": args.billingAccountName,
        "billingProfileName": args.billingProfileName,
        "invoiceSectionName": args.invoiceSectionName,
    }, opts);
}

export interface GetInvoiceSectionOutputArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies an invoice section.
     */
    invoiceSectionName: pulumi.Input<string>;
}