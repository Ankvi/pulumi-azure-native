import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists Active Security User Rules in a network manager.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2022-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listActiveSecurityUserRules(args: ListActiveSecurityUserRulesArgs, opts?: pulumi.InvokeOptions): Promise<ListActiveSecurityUserRulesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listActiveSecurityUserRules", {
        "networkManagerName": args.networkManagerName,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListActiveSecurityUserRulesArgs {
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
export interface ListActiveSecurityUserRulesResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of active security user rules.
     */
    readonly value?: (types.outputs.ActiveDefaultSecurityUserRuleResponse | types.outputs.ActiveSecurityUserRuleResponse)[];
}
/**
 * Lists Active Security User Rules in a network manager.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2022-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listActiveSecurityUserRulesOutput(args: ListActiveSecurityUserRulesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListActiveSecurityUserRulesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listActiveSecurityUserRules", {
        "networkManagerName": args.networkManagerName,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListActiveSecurityUserRulesOutputArgs {
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