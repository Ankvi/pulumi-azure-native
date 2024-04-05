import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists active security admin rules in a network manager.
 */
export function listActiveSecurityAdminRules(args: ListActiveSecurityAdminRulesArgs, opts?: pulumi.InvokeOptions): Promise<ListActiveSecurityAdminRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210501preview:listActiveSecurityAdminRules", {
        "networkManagerName": args.networkManagerName,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListActiveSecurityAdminRulesArgs {
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
export interface ListActiveSecurityAdminRulesResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of active security admin rules.
     */
    readonly value?: (types.outputs.ActiveDefaultSecurityAdminRuleResponse | types.outputs.ActiveSecurityAdminRuleResponse)[];
}
/**
 * Lists active security admin rules in a network manager.
 */
export function listActiveSecurityAdminRulesOutput(args: ListActiveSecurityAdminRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListActiveSecurityAdminRulesResult> {
    return pulumi.output(args).apply((a: any) => listActiveSecurityAdminRules(a, opts))
}

export interface ListActiveSecurityAdminRulesOutputArgs {
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