import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists Active Security User Rules in a network manager.
 */
export function listActiveSecurityUserRule(args: ListActiveSecurityUserRuleArgs, opts?: pulumi.InvokeOptions): Promise<ListActiveSecurityUserRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210201preview:listActiveSecurityUserRule", {
        "networkManagerName": args.networkManagerName,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListActiveSecurityUserRuleArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * List of regions.
     */
    regions?: string[];
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: string;
}

/**
 * Result of the request to list active security user rules. It contains a list of active security user rules and a skiptoken to get the next set of results.
 */
export interface ListActiveSecurityUserRuleResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of active security user rules.
     */
    readonly value?: (types.outputs.network.v20210201preview.ActiveDefaultSecurityUserRuleResponse | types.outputs.network.v20210201preview.ActiveSecurityUserRuleResponse)[];
}
/**
 * Lists Active Security User Rules in a network manager.
 */
export function listActiveSecurityUserRuleOutput(args: ListActiveSecurityUserRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListActiveSecurityUserRuleResult> {
    return pulumi.output(args).apply((a: any) => listActiveSecurityUserRule(a, opts))
}

export interface ListActiveSecurityUserRuleOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * List of regions.
     */
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: pulumi.Input<string>;
}
