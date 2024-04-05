import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get counters
 */
export function getPreRuleCounters(args: GetPreRuleCountersArgs, opts?: pulumi.InvokeOptions): Promise<GetPreRuleCountersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240119preview:getPreRuleCounters", {
        "firewallName": args.firewallName,
        "globalRulestackName": args.globalRulestackName,
        "priority": args.priority,
    }, opts);
}

export interface GetPreRuleCountersArgs {
    firewallName?: string;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    /**
     * Pre Rule priority
     */
    priority: string;
}

/**
 * Rule counter
 */
export interface GetPreRuleCountersResult {
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
export function getPreRuleCountersOutput(args: GetPreRuleCountersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPreRuleCountersResult> {
    return pulumi.output(args).apply((a: any) => getPreRuleCounters(a, opts))
}

export interface GetPreRuleCountersOutputArgs {
    firewallName?: pulumi.Input<string>;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    /**
     * Pre Rule priority
     */
    priority: pulumi.Input<string>;
}