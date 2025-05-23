import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a DNS security rule for a DNS resolver policy.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export function getDnsSecurityRule(args: GetDnsSecurityRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsSecurityRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dnsresolver:getDnsSecurityRule", {
        "dnsResolverPolicyName": args.dnsResolverPolicyName,
        "dnsSecurityRuleName": args.dnsSecurityRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsSecurityRuleArgs {
    /**
     * The name of the DNS resolver policy.
     */
    dnsResolverPolicyName: string;
    /**
     * The name of the DNS security rule.
     */
    dnsSecurityRuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a DNS security rule.
 */
export interface GetDnsSecurityRuleResult {
    /**
     * The action to take on DNS requests that match the DNS security rule.
     */
    readonly action: types.outputs.DnsSecurityRuleActionResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * DNS resolver policy domains lists that the DNS security rule applies to.
     */
    readonly dnsResolverDomainLists: types.outputs.SubResourceResponse[];
    /**
     * The state of DNS security rule.
     */
    readonly dnsSecurityRuleState?: string;
    /**
     * ETag of the DNS security rule.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The priority of the DNS security rule.
     */
    readonly priority: number;
    /**
     * The current provisioning state of the DNS security rule. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets properties of a DNS security rule for a DNS resolver policy.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export function getDnsSecurityRuleOutput(args: GetDnsSecurityRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDnsSecurityRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dnsresolver:getDnsSecurityRule", {
        "dnsResolverPolicyName": args.dnsResolverPolicyName,
        "dnsSecurityRuleName": args.dnsSecurityRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsSecurityRuleOutputArgs {
    /**
     * The name of the DNS resolver policy.
     */
    dnsResolverPolicyName: pulumi.Input<string>;
    /**
     * The name of the DNS security rule.
     */
    dnsSecurityRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}