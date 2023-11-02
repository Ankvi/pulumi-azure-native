import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of language extensions that can run within KQL queries.
 * Azure REST API version: 2022-12-29.
 *
 * Other available API versions: 2022-07-07, 2023-05-02, 2023-08-15.
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
     * The name of the resource group containing the Kusto cluster.
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
 * Azure REST API version: 2022-12-29.
 *
 * Other available API versions: 2022-07-07, 2023-05-02, 2023-08-15.
 */
export function listClusterLanguageExtensionsOutput(args: ListClusterLanguageExtensionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListClusterLanguageExtensionsResult> {
    return pulumi.output(args).apply((a: any) => listClusterLanguageExtensions(a, opts))
}

export interface ListClusterLanguageExtensionsOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
}
