import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Class representing the config for the solution in the migrate project.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function getSolutionsControllerConfig(args: GetSolutionsControllerConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetSolutionsControllerConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getSolutionsControllerConfig", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetSolutionsControllerConfigArgs {
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
 * Class representing the config for the solution in the migrate project.
 */
export interface GetSolutionsControllerConfigResult {
    /**
     * Gets or sets the publisher sas uri for the solution.
     */
    readonly publisherSasUri?: string;
}
/**
 * Class representing the config for the solution in the migrate project.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function getSolutionsControllerConfigOutput(args: GetSolutionsControllerConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSolutionsControllerConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getSolutionsControllerConfig", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetSolutionsControllerConfigOutputArgs {
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