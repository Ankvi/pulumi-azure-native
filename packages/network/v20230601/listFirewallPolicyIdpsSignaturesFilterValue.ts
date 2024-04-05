import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the current filter values for the signatures overrides
 */
export function listFirewallPolicyIdpsSignaturesFilterValue(args: ListFirewallPolicyIdpsSignaturesFilterValueArgs, opts?: pulumi.InvokeOptions): Promise<ListFirewallPolicyIdpsSignaturesFilterValueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:listFirewallPolicyIdpsSignaturesFilterValue", {
        "filterName": args.filterName,
        "firewallPolicyName": args.firewallPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListFirewallPolicyIdpsSignaturesFilterValueArgs {
    /**
     * Describes the name of the column which values will be returned
     */
    filterName?: string;
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes the list of all possible values for a specific filter value
 */
export interface ListFirewallPolicyIdpsSignaturesFilterValueResult {
    /**
     * Describes the possible values
     */
    readonly filterValues?: string[];
}
/**
 * Retrieves the current filter values for the signatures overrides
 */
export function listFirewallPolicyIdpsSignaturesFilterValueOutput(args: ListFirewallPolicyIdpsSignaturesFilterValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListFirewallPolicyIdpsSignaturesFilterValueResult> {
    return pulumi.output(args).apply((a: any) => listFirewallPolicyIdpsSignaturesFilterValue(a, opts))
}

export interface ListFirewallPolicyIdpsSignaturesFilterValueOutputArgs {
    /**
     * Describes the name of the column which values will be returned
     */
    filterName?: pulumi.Input<string>;
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}