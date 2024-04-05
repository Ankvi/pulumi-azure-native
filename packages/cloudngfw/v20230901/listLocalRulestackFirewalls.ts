import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List of Firewalls associated with Rulestack
 */
export function listLocalRulestackFirewalls(args: ListLocalRulestackFirewallsArgs, opts?: pulumi.InvokeOptions): Promise<ListLocalRulestackFirewallsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20230901:listLocalRulestackFirewalls", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListLocalRulestackFirewallsArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * List firewalls response
 */
export interface ListLocalRulestackFirewallsResult {
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
export function listLocalRulestackFirewallsOutput(args: ListLocalRulestackFirewallsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLocalRulestackFirewallsResult> {
    return pulumi.output(args).apply((a: any) => listLocalRulestackFirewalls(a, opts))
}

export interface ListLocalRulestackFirewallsOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}