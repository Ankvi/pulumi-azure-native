import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List of Firewalls associated with Rulestack
 */
export function listGlobalRulestackFirewalls(args: ListGlobalRulestackFirewallsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalRulestackFirewallsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240119preview:listGlobalRulestackFirewalls", {
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
 */
export function listGlobalRulestackFirewallsOutput(args: ListGlobalRulestackFirewallsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGlobalRulestackFirewallsResult> {
    return pulumi.output(args).apply((a: any) => listGlobalRulestackFirewalls(a, opts))
}

export interface ListGlobalRulestackFirewallsOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
}