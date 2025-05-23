import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all effective security admin rules applied on a virtual network.
 *
 * Uses Azure REST API version 2021-02-01-preview.
 */
export function listNetworkManagerEffectiveSecurityAdminRule(args: ListNetworkManagerEffectiveSecurityAdminRuleArgs, opts?: pulumi.InvokeOptions): Promise<ListNetworkManagerEffectiveSecurityAdminRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listNetworkManagerEffectiveSecurityAdminRule", {
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListNetworkManagerEffectiveSecurityAdminRuleArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: string;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: string;
}

/**
 * Result of the request to list networkManagerEffectiveSecurityAdminRules. It contains a list of groups and a skiptoken to get the next set of results.
 */
export interface ListNetworkManagerEffectiveSecurityAdminRuleResult {
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
 *
 * Uses Azure REST API version 2021-02-01-preview.
 */
export function listNetworkManagerEffectiveSecurityAdminRuleOutput(args: ListNetworkManagerEffectiveSecurityAdminRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListNetworkManagerEffectiveSecurityAdminRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listNetworkManagerEffectiveSecurityAdminRule", {
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

export interface ListNetworkManagerEffectiveSecurityAdminRuleOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    skipToken?: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}