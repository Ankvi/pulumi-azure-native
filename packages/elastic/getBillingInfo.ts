import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Marketplace Subscription and Organization details to which resource gets billed into.
 * Azure REST API version: 2023-07-01-preview.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getBillingInfo(args: GetBillingInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingInfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:getBillingInfo", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBillingInfoArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Marketplace Subscription and Organization details to which resource gets billed into.
 */
export interface GetBillingInfoResult {
    /**
     * Marketplace Subscription details
     */
    readonly marketplaceSaasInfo?: types.outputs.MarketplaceSaaSInfoResponse;
    /**
     * Partner Billing Entity details: Organization Info
     */
    readonly partnerBillingEntity?: types.outputs.PartnerBillingEntityResponse;
}
/**
 * Marketplace Subscription and Organization details to which resource gets billed into.
 * Azure REST API version: 2023-07-01-preview.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getBillingInfoOutput(args: GetBillingInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBillingInfoResult> {
    return pulumi.output(args).apply((a: any) => getBillingInfo(a, opts))
}

export interface GetBillingInfoOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
