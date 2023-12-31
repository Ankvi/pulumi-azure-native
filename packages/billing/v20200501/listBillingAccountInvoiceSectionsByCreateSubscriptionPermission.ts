import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 */
export function listBillingAccountInvoiceSectionsByCreateSubscriptionPermission(args: ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionArgs, opts?: pulumi.InvokeOptions): Promise<ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billing/v20200501:listBillingAccountInvoiceSectionsByCreateSubscriptionPermission", {
        "billingAccountName": args.billingAccountName,
    }, opts);
}

export interface ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
}

/**
 * The list of invoice section properties with create subscription permission.
 */
export interface ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult {
    /**
     * The link (url) to the next page of results.
     */
    readonly nextLink: string;
    /**
     * The list of invoice section properties with create subscription permission.
     */
    readonly value?: types.outputs.InvoiceSectionWithCreateSubPermissionResponse[];
}
/**
 * Lists the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 */
export function listBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutput(args: ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult> {
    return pulumi.output(args).apply((a: any) => listBillingAccountInvoiceSectionsByCreateSubscriptionPermission(a, opts))
}

export interface ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutputArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
}
