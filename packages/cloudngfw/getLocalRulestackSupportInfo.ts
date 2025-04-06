import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * support info for rulestack.
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLocalRulestackSupportInfo(args: GetLocalRulestackSupportInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalRulestackSupportInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getLocalRulestackSupportInfo", {
        "email": args.email,
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalRulestackSupportInfoArgs {
    /**
     * email address on behalf of which this API called
     */
    email?: string;
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Support information for the resource
 */
export interface GetLocalRulestackSupportInfoResult {
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
    readonly accountRegistered?: string;
    /**
     * Association Type
     */
    readonly associationType?: string;
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
     * URL for paloaltonetworks Customer Service Portal
     */
    readonly supportURL?: string;
    /**
     * user domain is supported in Customer Support Portal
     */
    readonly userDomainSupported?: string;
    /**
     * user registered in Customer Support Portal
     */
    readonly userRegistered?: string;
}
/**
 * support info for rulestack.
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLocalRulestackSupportInfoOutput(args: GetLocalRulestackSupportInfoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLocalRulestackSupportInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getLocalRulestackSupportInfo", {
        "email": args.email,
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalRulestackSupportInfoOutputArgs {
    /**
     * email address on behalf of which this API called
     */
    email?: pulumi.Input<string>;
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}