import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified FirewallPolicyRuleGroup.
 */
export function getFirewallPolicyRuleGroup(args: GetFirewallPolicyRuleGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyRuleGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20200401:getFirewallPolicyRuleGroup", {
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "ruleGroupName": args.ruleGroupName,
    }, opts);
}

export interface GetFirewallPolicyRuleGroupArgs {
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the FirewallPolicyRuleGroup.
     */
    ruleGroupName: string;
}

/**
 * Rule Group resource.
 */
export interface GetFirewallPolicyRuleGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Priority of the Firewall Policy Rule Group resource.
     */
    readonly priority?: number;
    /**
     * The provisioning state of the firewall policy rule group resource.
     */
    readonly provisioningState: string;
    /**
     * Group of Firewall Policy rules.
     */
    readonly rules?: (types.outputs.network.v20200401.FirewallPolicyFilterRuleResponse | types.outputs.network.v20200401.FirewallPolicyNatRuleResponse)[];
    /**
     * Rule Group type.
     */
    readonly type: string;
}
/**
 * Gets the specified FirewallPolicyRuleGroup.
 */
export function getFirewallPolicyRuleGroupOutput(args: GetFirewallPolicyRuleGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallPolicyRuleGroupResult> {
    return pulumi.output(args).apply((a: any) => getFirewallPolicyRuleGroup(a, opts))
}

export interface GetFirewallPolicyRuleGroupOutputArgs {
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the FirewallPolicyRuleGroup.
     */
    ruleGroupName: pulumi.Input<string>;
}
