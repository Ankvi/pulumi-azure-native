import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists active security admin rules in a network manager.
 */
export function listActiveSecurityAdminRule(args: ListActiveSecurityAdminRuleArgs, opts?: pulumi.InvokeOptions): Promise<ListActiveSecurityAdminRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210201preview:listActiveSecurityAdminRule", {
        "networkManagerName": args.networkManagerName,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListActiveSecurityAdminRuleArgs {
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
 * Result of the request to list active security admin rules. It contains a list of active security admin rules and a skiptoken to get the next set of results.
 */
export interface ListActiveSecurityAdminRuleResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of active security admin rules.
     */
    readonly value?: (types.outputs.network.v20210201preview.ActiveDefaultSecurityAdminRuleResponse | types.outputs.network.v20210201preview.ActiveSecurityAdminRuleResponse)[];
}
/**
 * Lists active security admin rules in a network manager.
 */
export function listActiveSecurityAdminRuleOutput(args: ListActiveSecurityAdminRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListActiveSecurityAdminRuleResult> {
    return pulumi.output(args).apply((a: any) => listActiveSecurityAdminRule(a, opts))
}

export interface ListActiveSecurityAdminRuleOutputArgs {
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
