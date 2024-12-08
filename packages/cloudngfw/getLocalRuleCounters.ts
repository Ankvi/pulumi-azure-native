import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get counters
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getLocalRuleCounters(args: GetLocalRuleCountersArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalRuleCountersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getLocalRuleCounters", {
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
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getLocalRuleCountersOutput(args: GetLocalRuleCountersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLocalRuleCountersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getLocalRuleCounters", {
        "firewallName": args.firewallName,
        "localRulestackName": args.localRulestackName,
        "priority": args.priority,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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