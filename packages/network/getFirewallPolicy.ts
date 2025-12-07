import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Firewall Policy.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * A read-only string that represents the size of the FirewallPolicyPropertiesFormat in MB. (ex 0.5MB)
     */
    readonly size: string;
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
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFirewallPolicyOutput(args: GetFirewallPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFirewallPolicyResult> {
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