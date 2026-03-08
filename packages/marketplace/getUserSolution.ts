import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about the user solution
 *
 * Uses Azure REST API version 2023-03-01-preview.
 */
export function getUserSolution(args: GetUserSolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetUserSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:marketplace:getUserSolution", {
        "solutionId": args.solutionId,
    }, opts);
}

export interface GetUserSolutionArgs {
    /**
     * The solution id
     */
    solutionId: string;
}

/**
 * The Solution data structure
 */
export interface GetUserSolutionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    readonly displayName?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    readonly products?: types.outputs.ProductResponse[];
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get information about the user solution
 *
 * Uses Azure REST API version 2023-03-01-preview.
 */
export function getUserSolutionOutput(args: GetUserSolutionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:marketplace:getUserSolution", {
        "solutionId": args.solutionId,
    }, opts);
}

export interface GetUserSolutionOutputArgs {
    /**
     * The solution id
     */
    solutionId: pulumi.Input<string>;
}