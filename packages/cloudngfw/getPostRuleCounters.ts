import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get counters
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export function getPostRuleCounters(args: GetPostRuleCountersArgs, opts?: pulumi.InvokeOptions): Promise<GetPostRuleCountersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getPostRuleCounters", {
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
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export function getPostRuleCountersOutput(args: GetPostRuleCountersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPostRuleCountersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getPostRuleCounters", {
        "firewallName": args.firewallName,
        "globalRulestackName": args.globalRulestackName,
        "priority": args.priority,
    }, opts);
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