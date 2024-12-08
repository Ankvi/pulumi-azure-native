import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the user solution.
 * Azure REST API version: 2015-11-01-preview.
 */
export function getSolution(args: GetSolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationsmanagement:getSolution", {
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetSolutionArgs {
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * User Solution Name.
     */
    solutionName: string;
}

/**
 * The container for solution.
 */
export interface GetSolutionResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Plan for solution object supported by the OperationsManagement resource provider.
     */
    readonly plan?: types.outputs.SolutionPlanResponse;
    /**
     * Properties for solution object supported by the OperationsManagement resource provider.
     */
    readonly properties: types.outputs.SolutionPropertiesResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the user solution.
 * Azure REST API version: 2015-11-01-preview.
 */
export function getSolutionOutput(args: GetSolutionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationsmanagement:getSolution", {
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetSolutionOutputArgs {
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * User Solution Name.
     */
    solutionName: pulumi.Input<string>;
}