import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Solution REST Resource.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getSolution(args: GetSolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getSolution", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetSolutionArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: string;
    /**
     * Name of the Azure Resource Group that migrate project is part of.
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
export interface GetSolutionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getSolutionOutput(args: GetSolutionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSolutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getSolution", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetSolutionOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that migrate project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Unique name of a migration solution within a migrate project.
     */
    solutionName: pulumi.Input<string>;
}