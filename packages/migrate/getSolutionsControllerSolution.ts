import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Solution REST Resource.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function getSolutionsControllerSolution(args: GetSolutionsControllerSolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetSolutionsControllerSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getSolutionsControllerSolution", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetSolutionsControllerSolutionArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Unique name of a migration solution within a migrate project.
     */
    solutionName: string;
}

/**
 * Solution REST Resource.
 */
export interface GetSolutionsControllerSolutionResult {
    /**
     * Gets or sets the ETAG for optimistic concurrency control.
     */
    readonly etag?: string;
    /**
     * Gets the relative URL to get to this REST resource.
     */
    readonly id: string;
    /**
     * Gets the name of this REST resource.
     */
    readonly name: string;
    /**
     * Gets or sets the properties of the solution.
     */
    readonly properties: types.outputs.SolutionPropertiesResponse;
    /**
     * Gets the type of this REST resource.
     */
    readonly type: string;
}
/**
 * Solution REST Resource.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function getSolutionsControllerSolutionOutput(args: GetSolutionsControllerSolutionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSolutionsControllerSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getSolutionsControllerSolution", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetSolutionsControllerSolutionOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Unique name of a migration solution within a migrate project.
     */
    solutionName: pulumi.Input<string>;
}