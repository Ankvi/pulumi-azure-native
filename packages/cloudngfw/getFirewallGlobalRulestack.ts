import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get Global Rulestack associated with the Firewall
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFirewallGlobalRulestack(args: GetFirewallGlobalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallGlobalRulestackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getFirewallGlobalRulestack", {
        "firewallName": args.firewallName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallGlobalRulestackArgs {
    /**
     * Firewall resource name
     */
    firewallName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * PAN Rulestack Describe Object
 */
export interface GetFirewallGlobalRulestackResult {
    /**
     * rulestack description
     */
    readonly azureId: string;
}
/**
 * Get Global Rulestack associated with the Firewall
 *
 * Uses Azure REST API version 2025-02-06-preview.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFirewallGlobalRulestackOutput(args: GetFirewallGlobalRulestackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFirewallGlobalRulestackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getFirewallGlobalRulestack", {
        "firewallName": args.firewallName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallGlobalRulestackOutputArgs {
    /**
     * Firewall resource name
     */
    firewallName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}