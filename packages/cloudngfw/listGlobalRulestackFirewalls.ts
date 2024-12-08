import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List of Firewalls associated with Rulestack
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function listGlobalRulestackFirewalls(args: ListGlobalRulestackFirewallsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackFirewallsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listGlobalRulestackFirewalls", {
        "globalRulestackName": args.globalRulestackName,
    }, opts);
}

export interface ListGlobalRulestackFirewallsArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
}

/**
 * List firewalls response
 */
export interface ListGlobalRulestackFirewallsResult {
    /**
     * next link
     */
    readonly nextLink?: string;
    /**
     * firewalls list
     */
    readonly value: string[];
}
/**
 * List of Firewalls associated with Rulestack
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function listGlobalRulestackFirewallsOutput(args: ListGlobalRulestackFirewallsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListGlobalRulestackFirewallsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listGlobalRulestackFirewalls", {
        "globalRulestackName": args.globalRulestackName,
    }, opts);
}

export interface ListGlobalRulestackFirewallsOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
}