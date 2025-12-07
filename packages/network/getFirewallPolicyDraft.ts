import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a draft Firewall Policy.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFirewallPolicyDraft(args: GetFirewallPolicyDraftArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyDraftResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getFirewallPolicyDraft", {
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallPolicyDraftArgs {
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
export interface GetFirewallPolicyDraftResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The parent firewall policy from which rules are inherited.
     */
    readonly basePolicy?: types.outputs.SubResourceResponse;
    /**
     * DNS Proxy Settings definition.
     */
    readonly dnsSettings?: types.outputs.DnsSettingsResponse;
    /**
     * Explicit Proxy Settings definition.
     */
    readonly explicitProxy?: types.outputs.ExplicitProxyResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get a draft Firewall Policy.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFirewallPolicyDraftOutput(args: GetFirewallPolicyDraftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFirewallPolicyDraftResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getFirewallPolicyDraft", {
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallPolicyDraftOutputArgs {
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}