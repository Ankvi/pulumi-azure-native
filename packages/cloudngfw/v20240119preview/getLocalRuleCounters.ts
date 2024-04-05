import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get counters
 */
export function getLocalRuleCounters(args: GetLocalRuleCountersArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalRuleCountersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240119preview:getLocalRuleCounters", {
        "firewallName": args.firewallName,
        "localRulestackName": args.localRulestackName,
        "priority": args.priority,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalRuleCountersArgs {
    firewallName?: string;
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * Local Rule priority
     */
    priority: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Rule counter
 */
export interface GetLocalRuleCountersResult {
    /**
     * apps seen
     */
    readonly appSeen?: types.outputs.AppSeenDataResponse;
    /**
     * firewall name
     */
    readonly firewallName?: string;
    /**
     * hit count
     */
    readonly hitCount?: number;
    /**
     * last updated timestamp
     */
    readonly lastUpdatedTimestamp?: string;
    /**
     * priority number
     */
    readonly priority: string;
    /**
     * timestamp of request
     */
    readonly requestTimestamp?: string;
    /**
     * rule list name
     */
    readonly ruleListName?: string;
    /**
     * rule name
     */
    readonly ruleName: string;
    /**
     * rule Stack Name
     */
    readonly ruleStackName?: string;
    /**
     * timestamp of response
     */
    readonly timestamp?: string;
}
/**
 * Get counters
 */
export function getLocalRuleCountersOutput(args: GetLocalRuleCountersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalRuleCountersResult> {
    return pulumi.output(args).apply((a: any) => getLocalRuleCounters(a, opts))
}

export interface GetLocalRuleCountersOutputArgs {
    firewallName?: pulumi.Input<string>;
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * Local Rule priority
     */
    priority: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}