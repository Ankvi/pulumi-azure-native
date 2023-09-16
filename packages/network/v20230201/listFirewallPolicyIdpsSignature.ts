import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves the current status of IDPS signatures for the relevant policy
 */
export function listFirewallPolicyIdpsSignature(args: ListFirewallPolicyIdpsSignatureArgs, opts?: pulumi.InvokeOptions): Promise<ListFirewallPolicyIdpsSignatureResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230201:listFirewallPolicyIdpsSignature", {
        "filters": args.filters,
        "firewallPolicyName": args.firewallPolicyName,
        "orderBy": args.orderBy,
        "resourceGroupName": args.resourceGroupName,
        "resultsPerPage": args.resultsPerPage,
        "search": args.search,
        "skip": args.skip,
    }, opts);
}

export interface ListFirewallPolicyIdpsSignatureArgs {
    /**
     * Contain all filters names and values
     */
    filters?: types.inputs.network.v20230201.FilterItems[];
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: string;
    /**
     * Column to sort response by
     */
    orderBy?: types.inputs.network.v20230201.OrderBy;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The number of the results to return in each page
     */
    resultsPerPage?: number;
    /**
     * Search term in all columns
     */
    search?: string;
    /**
     * The number of records matching the filter to skip
     */
    skip?: number;
}

/**
 * Query result
 */
export interface ListFirewallPolicyIdpsSignatureResult {
    /**
     * Number of total records matching the query.
     */
    readonly matchingRecordsCount?: number;
    /**
     * Array containing the results of the query
     */
    readonly signatures?: types.outputs.network.v20230201.SingleQueryResultResponse[];
}
/**
 * Retrieves the current status of IDPS signatures for the relevant policy
 */
export function listFirewallPolicyIdpsSignatureOutput(args: ListFirewallPolicyIdpsSignatureOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListFirewallPolicyIdpsSignatureResult> {
    return pulumi.output(args).apply((a: any) => listFirewallPolicyIdpsSignature(a, opts))
}

export interface ListFirewallPolicyIdpsSignatureOutputArgs {
    /**
     * Contain all filters names and values
     */
    filters?: pulumi.Input<pulumi.Input<types.inputs.network.v20230201.FilterItemsArgs>[]>;
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * Column to sort response by
     */
    orderBy?: pulumi.Input<types.inputs.network.v20230201.OrderByArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The number of the results to return in each page
     */
    resultsPerPage?: pulumi.Input<number>;
    /**
     * Search term in all columns
     */
    search?: pulumi.Input<string>;
    /**
     * The number of records matching the filter to skip
     */
    skip?: pulumi.Input<number>;
}
