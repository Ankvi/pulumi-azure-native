import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all effective security admin rules applied on a virtual network.
 * Azure REST API version: 2023-02-01.
 */
export function listNetworkManagerEffectiveSecurityAdminRules(args: ListNetworkManagerEffectiveSecurityAdminRulesArgs, opts?: pulumi.InvokeOptions): Promise<ListNetworkManagerEffectiveSecurityAdminRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listNetworkManagerEffectiveSecurityAdminRules", {
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "top": args.top,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListNetworkManagerEffectiveSecurityAdminRulesArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: string;
    /**
     * An optional query parameter which specifies the maximum number of records to be returned by the server.
     */
    top?: number;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
}

/**
 * Result of the request to list networkManagerEffectiveSecurityAdminRules. It contains a list of groups and a skiptoken to get the next set of results.
 */
export interface ListNetworkManagerEffectiveSecurityAdminRulesResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of NetworkManagerEffectiveSecurityAdminRules
     */
    readonly value?: (types.outputs.EffectiveDefaultSecurityAdminRuleResponse | types.outputs.EffectiveSecurityAdminRuleResponse)[];
}
/**
 * List all effective security admin rules applied on a virtual network.
 * Azure REST API version: 2023-02-01.
 */
export function listNetworkManagerEffectiveSecurityAdminRulesOutput(args: ListNetworkManagerEffectiveSecurityAdminRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNetworkManagerEffectiveSecurityAdminRulesResult> {
    return pulumi.output(args).apply((a: any) => listNetworkManagerEffectiveSecurityAdminRules(a, opts))
}

export interface ListNetworkManagerEffectiveSecurityAdminRulesOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: pulumi.Input<string>;
    /**
     * An optional query parameter which specifies the maximum number of records to be returned by the server.
     */
    top?: pulumi.Input<number>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}
