import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified saved search for a given workspace.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSavedSearch(args: GetSavedSearchArgs, opts?: pulumi.InvokeOptions): Promise<GetSavedSearchResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getSavedSearch", {
        "resourceGroupName": args.resourceGroupName,
        "savedSearchId": args.savedSearchId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSavedSearchArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The id of the saved search.
     */
    savedSearchId: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Value object for saved search results.
 */
export interface GetSavedSearchResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The category of the saved search. This helps the user to find a saved search faster. 
     */
    readonly category: string;
    /**
     * Saved search display name.
     */
    readonly displayName: string;
    /**
     * The ETag of the saved search. To override an existing saved search, use "*" or specify the current Etag
     */
    readonly etag?: string;
    /**
     * The function alias if query serves as a function.
     */
    readonly functionAlias?: string;
    /**
     * The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.
     */
    readonly functionParameters?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The query expression for the saved search.
     */
    readonly query: string;
    /**
     * The tags attached to the saved search.
     */
    readonly tags?: types.outputs.TagResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The version number of the query language. The current version is 2 and is the default.
     */
    readonly version?: number;
}
/**
 * Gets the specified saved search for a given workspace.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSavedSearchOutput(args: GetSavedSearchOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSavedSearchResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationalinsights:getSavedSearch", {
        "resourceGroupName": args.resourceGroupName,
        "savedSearchId": args.savedSearchId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSavedSearchOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The id of the saved search.
     */
    savedSearchId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}