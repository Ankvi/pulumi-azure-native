import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified FirewallPolicyRuleGroup.
 *
 * Uses Azure REST API version 2020-04-01.
 *
 * Other available API versions: 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFirewallPolicyRuleGroup(args: GetFirewallPolicyRuleGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyRuleGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getFirewallPolicyRuleGroup", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly rules?: (types.outputs.FirewallPolicyFilterRuleResponse | types.outputs.FirewallPolicyNatRuleResponse)[];
    /**
     * Rule Group type.
     */
    readonly type: string;
}
/**
 * Gets the specified FirewallPolicyRuleGroup.
 *
 * Uses Azure REST API version 2020-04-01.
 *
 * Other available API versions: 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFirewallPolicyRuleGroupOutput(args: GetFirewallPolicyRuleGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFirewallPolicyRuleGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getFirewallPolicyRuleGroup", {
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "ruleGroupName": args.ruleGroupName,
    }, opts);
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