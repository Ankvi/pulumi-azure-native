import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the list of available agri solutions.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function listAgriServiceAvailableSolutions(args: ListAgriServiceAvailableSolutionsArgs, opts?: pulumi.InvokeOptions): Promise<ListAgriServiceAvailableSolutionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agricultureplatform:listAgriServiceAvailableSolutions", {
        "agriServiceResourceName": args.agriServiceResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgriServiceAvailableSolutionsArgs {
    /**
     * The name of the AgriService resource.
     */
    agriServiceResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The list of available agri solutions.
 */
export interface ListAgriServiceAvailableSolutionsResult {
    /**
     * Agri solutions list.
     */
    readonly solutions: types.outputs.DataManagerForAgricultureSolutionResponse[];
}
/**
 * Returns the list of available agri solutions.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function listAgriServiceAvailableSolutionsOutput(args: ListAgriServiceAvailableSolutionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAgriServiceAvailableSolutionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:agricultureplatform:listAgriServiceAvailableSolutions", {
        "agriServiceResourceName": args.agriServiceResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAgriServiceAvailableSolutionsOutputArgs {
    /**
     * The name of the AgriService resource.
     */
    agriServiceResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}