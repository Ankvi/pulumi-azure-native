import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Support information for the service
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPaloAltoNetworksCloudngfwSupportInfo(args?: ListPaloAltoNetworksCloudngfwSupportInfoArgs, opts?: pulumi.InvokeOptions): Promise<ListPaloAltoNetworksCloudngfwSupportInfoResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listPaloAltoNetworksCloudngfwSupportInfo", {
    }, opts);
}

export interface ListPaloAltoNetworksCloudngfwSupportInfoArgs {
}

/**
 * Support information for the service
 */
export interface ListPaloAltoNetworksCloudngfwSupportInfoResult {
    /**
     * Support account associated with given resource when association type is tenant
     */
    readonly accountId?: string;
    /**
     * Support account associated with given resource when association type is billing
     */
    readonly accountIdForBilling?: string;
    /**
     * account registered in Customer Support Portal
     */
    readonly accountRegistrationStatus?: string;
    /**
     * Association Type
     */
    readonly associationType?: string;
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
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPaloAltoNetworksCloudngfwSupportInfoOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPaloAltoNetworksCloudngfwSupportInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listPaloAltoNetworksCloudngfwSupportInfo", {
    }, opts);
}