import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Support information for the service
 */
export function listPaloAltoNetworksCloudngfwSupportInfo(args?: ListPaloAltoNetworksCloudngfwSupportInfoArgs, opts?: pulumi.InvokeOptions): Promise<ListPaloAltoNetworksCloudngfwSupportInfoResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240119preview:listPaloAltoNetworksCloudngfwSupportInfo", {
    }, opts);
}

export interface ListPaloAltoNetworksCloudngfwSupportInfoArgs {
}

/**
 * Support information for the service
 */
export interface ListPaloAltoNetworksCloudngfwSupportInfoResult {
    /**
     * Support account associated with given resource
     */
    readonly accountId?: string;
    /**
     * account registered in Customer Support Portal
     */
    readonly accountRegistrationStatus?: string;
    /**
     * credits purchased, unit per hour
     */
    readonly credits?: number;
    /**
     * date in format yyyy-mm-dd
     */
    readonly endDateForCredits?: string;
    /**
     * Product usage is in free trial period
     */
    readonly freeTrial?: string;
    /**
     * Free trial credit remaining
     */
    readonly freeTrialCreditLeft?: number;
    /**
     * Free trial days remaining
     */
    readonly freeTrialDaysLeft?: number;
    /**
     * URL for paloaltonetworks live community
     */
    readonly helpURL?: string;
    /**
     * URL for Strata Cloud Manager
     */
    readonly hubUrl?: string;
    /**
     * monthly credit is computed as credits * days in calendar month
     */
    readonly monthlyCreditLeft?: number;
    /**
     * product Serial associated with given resource
     */
    readonly productSerial?: string;
    /**
     * product SKU associated with given resource
     */
    readonly productSku?: string;
    /**
     * URL for registering product in paloaltonetworks Customer Service Portal
     */
    readonly registerURL?: string;
    /**
     * date in format yyyy-mm-dd
     */
    readonly startDateForCredits?: string;
    /**
     * URL for paloaltonetworks Customer Service Portal
     */
    readonly supportURL?: string;
}
/**
 * Support information for the service
 */
export function listPaloAltoNetworksCloudngfwSupportInfoOutput(opts?: pulumi.InvokeOptions): pulumi.Output<ListPaloAltoNetworksCloudngfwSupportInfoResult> {
    return pulumi.output(listPaloAltoNetworksCloudngfwSupportInfo(opts))
}