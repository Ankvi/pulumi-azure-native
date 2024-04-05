import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get counters
 */
export function getPostRuleCounters(args: GetPostRuleCountersArgs, opts?: pulumi.InvokeOptions): Promise<GetPostRuleCountersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20230901preview:getPostRuleCounters", {
        "firewallName": args.firewallName,
        "globalRulestackName": args.globalRulestackName,
        "priority": args.priority,
    }, opts);
}

export interface GetPostRuleCountersArgs {
    firewallName?: string;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    /**
     * Post Rule priority
     */
    priority: string;
}

/**
 * Rule counter
 */
export interface GetPostRuleCountersResult {
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
export function getPostRuleCountersOutput(args: GetPostRuleCountersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPostRuleCountersResult> {
    return pulumi.output(args).apply((a: any) => getPostRuleCounters(a, opts))
}

export interface GetPostRuleCountersOutputArgs {
    firewallName?: pulumi.Input<string>;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    /**
     * Post Rule priority
     */
    priority: pulumi.Input<string>;
}