import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified FirewallPolicyRuleCollectionGroup.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01.
 */
export function getFirewallPolicyRuleCollectionGroup(args: GetFirewallPolicyRuleCollectionGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyRuleCollectionGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getFirewallPolicyRuleCollectionGroup", {
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionGroupName": args.ruleCollectionGroupName,
    }, opts);
}

export interface GetFirewallPolicyRuleCollectionGroupArgs {
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
export interface GetFirewallPolicyRuleCollectionGroupResult {
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
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    readonly priority?: number;
    /**
     * The provisioning state of the firewall policy rule collection group resource.
     */
    readonly provisioningState: string;
    /**
     * Group of Firewall Policy rule collections.
     */
    readonly ruleCollections?: (types.outputs.FirewallPolicyFilterRuleCollectionResponse | types.outputs.FirewallPolicyNatRuleCollectionResponse)[];
    /**
     * Rule Group type.
     */
    readonly type: string;
}
/**
 * Gets the specified FirewallPolicyRuleCollectionGroup.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01.
 */
export function getFirewallPolicyRuleCollectionGroupOutput(args: GetFirewallPolicyRuleCollectionGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallPolicyRuleCollectionGroupResult> {
    return pulumi.output(args).apply((a: any) => getFirewallPolicyRuleCollectionGroup(a, opts))
}

export interface GetFirewallPolicyRuleCollectionGroupOutputArgs {
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