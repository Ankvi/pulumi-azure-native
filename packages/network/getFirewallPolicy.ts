import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Firewall Policy.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2020-04-01, 2021-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getFirewallPolicy(args: GetFirewallPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getFirewallPolicy", {
        "expand": args.expand,
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallPolicyArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * FirewallPolicy Resource.
 */
export interface GetFirewallPolicyResult {
    /**
     * The parent firewall policy from which rules are inherited.
     */
    readonly basePolicy?: types.outputs.SubResourceResponse;
    /**
     * List of references to Child Firewall Policies.
     */
    readonly childPolicies: types.outputs.SubResourceResponse[];
    /**
     * DNS Proxy Settings definition.
     */
    readonly dnsSettings?: types.outputs.DnsSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Explicit Proxy Settings definition.
     */
    readonly explicitProxy?: types.outputs.ExplicitProxyResponse;
    /**
     * List of references to Azure Firewalls that this Firewall Policy is associated with.
     */
    readonly firewalls: types.outputs.SubResourceResponse[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The identity of the firewall policy.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Insights on Firewall Policy.
     */
    readonly insights?: types.outputs.FirewallPolicyInsightsResponse;
    /**
     * The configuration for Intrusion detection.
     */
    readonly intrusionDetection?: types.outputs.FirewallPolicyIntrusionDetectionResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the firewall policy resource.
     */
    readonly provisioningState: string;
    /**
     * List of references to FirewallPolicyRuleCollectionGroups.
     */
    readonly ruleCollectionGroups: types.outputs.SubResourceResponse[];
    /**
     * The Firewall Policy SKU.
     */
    readonly sku?: types.outputs.FirewallPolicySkuResponse;
    /**
     * The private IP addresses/IP ranges to which traffic will not be SNAT.
     */
    readonly snat?: types.outputs.FirewallPolicySNATResponse;
    /**
     * SQL Settings definition.
     */
    readonly sql?: types.outputs.FirewallPolicySQLResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The operation mode for Threat Intelligence.
     */
    readonly threatIntelMode?: string;
    /**
     * ThreatIntel Whitelist for Firewall Policy.
     */
    readonly threatIntelWhitelist?: types.outputs.FirewallPolicyThreatIntelWhitelistResponse;
    /**
     * TLS Configuration definition.
     */
    readonly transportSecurity?: types.outputs.FirewallPolicyTransportSecurityResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified Firewall Policy.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2020-04-01, 2021-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getFirewallPolicyOutput(args: GetFirewallPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getFirewallPolicy", {
        "expand": args.expand,
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallPolicyOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}