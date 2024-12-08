import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Rule Collection Group Draft.
 * Azure REST API version: 2023-11-01.
 *
 * Other available API versions: 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getFirewallPolicyRuleCollectionGroupDraft(args: GetFirewallPolicyRuleCollectionGroupDraftArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyRuleCollectionGroupDraftResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getFirewallPolicyRuleCollectionGroupDraft", {
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionGroupName": args.ruleCollectionGroupName,
    }, opts);
}

export interface GetFirewallPolicyRuleCollectionGroupDraftArgs {
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the FirewallPolicyRuleCollectionGroup.
     */
    ruleCollectionGroupName: string;
}

/**
 * Rule Collection Group resource.
 */
export interface GetFirewallPolicyRuleCollectionGroupDraftResult {
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    readonly priority?: number;
    /**
     * Group of Firewall Policy rule collections.
     */
    readonly ruleCollections?: (types.outputs.FirewallPolicyFilterRuleCollectionResponse | types.outputs.FirewallPolicyNatRuleCollectionResponse)[];
    /**
     * A read-only string that represents the size of the FirewallPolicyRuleCollectionGroupProperties in MB. (ex 1.2MB)
     */
    readonly size: string;
    /**
     * Rule Group type.
     */
    readonly type: string;
}
/**
 * Get Rule Collection Group Draft.
 * Azure REST API version: 2023-11-01.
 *
 * Other available API versions: 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getFirewallPolicyRuleCollectionGroupDraftOutput(args: GetFirewallPolicyRuleCollectionGroupDraftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFirewallPolicyRuleCollectionGroupDraftResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getFirewallPolicyRuleCollectionGroupDraft", {
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionGroupName": args.ruleCollectionGroupName,
    }, opts);
}

export interface GetFirewallPolicyRuleCollectionGroupDraftOutputArgs {
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the FirewallPolicyRuleCollectionGroup.
     */
    ruleCollectionGroupName: pulumi.Input<string>;
}