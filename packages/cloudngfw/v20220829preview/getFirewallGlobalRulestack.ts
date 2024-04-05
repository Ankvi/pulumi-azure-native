import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get Global Rulestack associated with the Firewall
 */
export function getFirewallGlobalRulestack(args: GetFirewallGlobalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallGlobalRulestackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20220829preview:getFirewallGlobalRulestack", {
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
 */
export function getFirewallGlobalRulestackOutput(args: GetFirewallGlobalRulestackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallGlobalRulestackResult> {
    return pulumi.output(args).apply((a: any) => getFirewallGlobalRulestack(a, opts))
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