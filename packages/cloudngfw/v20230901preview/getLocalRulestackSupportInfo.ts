import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * support info for rulestack.
 */
export function getLocalRulestackSupportInfo(args: GetLocalRulestackSupportInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalRulestackSupportInfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20230901preview:getLocalRulestackSupportInfo", {
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
     * Support account associated with given resource
     */
    readonly accountId?: string;
    /**
     * account registered in Customer Support Portal
     */
    readonly accountRegistered?: string;
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
 */
export function getLocalRulestackSupportInfoOutput(args: GetLocalRulestackSupportInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalRulestackSupportInfoResult> {
    return pulumi.output(args).apply((a: any) => getLocalRulestackSupportInfo(a, opts))
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