import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of elastic traffic filters in the account
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-06-01, 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elastic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listListAssociatedTrafficFilter(args: ListListAssociatedTrafficFilterArgs, opts?: pulumi.InvokeOptions): Promise<ListListAssociatedTrafficFilterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:listListAssociatedTrafficFilter", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListListAssociatedTrafficFilterArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * List of elastic traffic filters in the account
 */
export interface ListListAssociatedTrafficFilterResult {
    /**
     * List of elastic traffic filters in the account
     */
    readonly rulesets?: types.outputs.ElasticTrafficFilterResponse[];
}
/**
 * List of elastic traffic filters in the account
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-06-01, 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elastic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listListAssociatedTrafficFilterOutput(args: ListListAssociatedTrafficFilterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListListAssociatedTrafficFilterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:listListAssociatedTrafficFilter", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListListAssociatedTrafficFilterOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}