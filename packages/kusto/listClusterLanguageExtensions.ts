import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of language extensions that can run within KQL queries.
 *
 * Uses Azure REST API version 2024-04-13.
 *
 * Other available API versions: 2020-02-15, 2020-06-14, 2020-09-18, 2021-01-01, 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listClusterLanguageExtensions(args: ListClusterLanguageExtensionsArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterLanguageExtensionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:listClusterLanguageExtensions", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListClusterLanguageExtensionsArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The list of language extension objects.
 */
export interface ListClusterLanguageExtensionsResult {
    /**
     * The list of language extensions.
     */
    readonly value?: types.outputs.LanguageExtensionResponse[];
}
/**
 * Returns a list of language extensions that can run within KQL queries.
 *
 * Uses Azure REST API version 2024-04-13.
 *
 * Other available API versions: 2020-02-15, 2020-06-14, 2020-09-18, 2021-01-01, 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listClusterLanguageExtensionsOutput(args: ListClusterLanguageExtensionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListClusterLanguageExtensionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:listClusterLanguageExtensions", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListClusterLanguageExtensionsOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}