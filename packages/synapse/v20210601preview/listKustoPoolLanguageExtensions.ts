import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a list of language extensions that can run within KQL queries.
 */
export function listKustoPoolLanguageExtensions(args: ListKustoPoolLanguageExtensionsArgs, opts?: pulumi.InvokeOptions): Promise<ListKustoPoolLanguageExtensionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601preview:listKustoPoolLanguageExtensions", {
        "kustoPoolName": args.kustoPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListKustoPoolLanguageExtensionsArgs {
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The list of language extension objects.
 */
export interface ListKustoPoolLanguageExtensionsResult {
    /**
     * The list of language extensions.
     */
    readonly value?: types.outputs.LanguageExtensionResponse[];
}
/**
 * Returns a list of language extensions that can run within KQL queries.
 */
export function listKustoPoolLanguageExtensionsOutput(args: ListKustoPoolLanguageExtensionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListKustoPoolLanguageExtensionsResult> {
    return pulumi.output(args).apply((a: any) => listKustoPoolLanguageExtensions(a, opts))
}

export interface ListKustoPoolLanguageExtensionsOutputArgs {
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
