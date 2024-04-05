import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an outbound firewall rule.
 */
export function getOutboundFirewallRule(args: GetOutboundFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetOutboundFirewallRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230201preview:getOutboundFirewallRule", {
        "outboundRuleFqdn": args.outboundRuleFqdn,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetOutboundFirewallRuleArgs {
    outboundRuleFqdn: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * An Azure SQL DB Server Outbound Firewall Rule.
 */
export interface GetOutboundFirewallRuleResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the outbound rule.
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an outbound firewall rule.
 */
export function getOutboundFirewallRuleOutput(args: GetOutboundFirewallRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOutboundFirewallRuleResult> {
    return pulumi.output(args).apply((a: any) => getOutboundFirewallRule(a, opts))
}

export interface GetOutboundFirewallRuleOutputArgs {
    outboundRuleFqdn: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}