import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2019-10-01-preview, 2020-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native billing [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listBillingAccountInvoiceSectionsByCreateSubscriptionPermission(args: ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionArgs, opts?: pulumi.InvokeOptions): Promise<ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billing:listBillingAccountInvoiceSectionsByCreateSubscriptionPermission", {
        "billingAccountName": args.billingAccountName,
        "filter": args.filter,
    }, opts);
}

export interface ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
    /**
     * The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
     */
    filter?: string;
}

/**
 * A container for a list of resources
 */
export interface ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult {
    /**
     * The link (url) to the next page of results.
     */
    readonly nextLink: string;
    /**
     * The list of resources.
     */
    readonly value: types.outputs.InvoiceSectionWithCreateSubPermissionResponse[];
}
/**
 * Lists the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2019-10-01-preview, 2020-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native billing [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutput(args: ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:billing:listBillingAccountInvoiceSectionsByCreateSubscriptionPermission", {
        "billingAccountName": args.billingAccountName,
        "filter": args.filter,
    }, opts);
}

export interface ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutputArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
     */
    filter?: pulumi.Input<string>;
}