import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists SKUs available to the project
 * Azure REST API version: 2024-06-01-preview.
 *
 * Other available API versions: 2024-07-01-preview, 2024-08-01-preview.
 */
export function listSkusByProject(args: ListSkusByProjectArgs, opts?: pulumi.InvokeOptions): Promise<ListSkusByProjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:listSkusByProject", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListSkusByProjectArgs {
    /**
     * The name of the project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Results of the Microsoft.DevCenter SKU list operation.
 */
export interface ListSkusByProjectResult {
    /**
     * URL to get the next set of results if there are any.
     */
    readonly nextLink: string;
    /**
     * Current page of results.
     */
    readonly value: types.outputs.DevCenterSkuResponse[];
}
/**
 * Lists SKUs available to the project
 * Azure REST API version: 2024-06-01-preview.
 *
 * Other available API versions: 2024-07-01-preview, 2024-08-01-preview.
 */
export function listSkusByProjectOutput(args: ListSkusByProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSkusByProjectResult> {
    return pulumi.output(args).apply((a: any) => listSkusByProject(a, opts))
}

export interface ListSkusByProjectOutputArgs {
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}