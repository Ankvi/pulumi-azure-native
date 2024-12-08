import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information related to a specific migrate project. Returns a json object of type 'migrateProject' as specified in the models section.
 * Azure REST API version: 2020-05-01.
 *
 * Other available API versions: 2023-01-01.
 */
export function getMigrateProjectsControllerMigrateProject(args: GetMigrateProjectsControllerMigrateProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrateProjectsControllerMigrateProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getMigrateProjectsControllerMigrateProject", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrateProjectsControllerMigrateProjectArgs {
    /**
     * Migrate project name.
     */
    migrateProjectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
}

/**
 * Migrate project.
 */
export interface GetMigrateProjectsControllerMigrateProjectResult {
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * Path reference to this project /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{projectName}
     */
    readonly id: string;
    /**
     * Azure location in which project is created.
     */
    readonly location?: string;
    /**
     * Name of the project.
     */
    readonly name: string;
    /**
     * Properties of a migrate project.
     */
    readonly properties: types.outputs.MigrateProjectPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the object = [Microsoft.Migrate/migrateProjects].
     */
    readonly type: string;
}
/**
 * Get information related to a specific migrate project. Returns a json object of type 'migrateProject' as specified in the models section.
 * Azure REST API version: 2020-05-01.
 *
 * Other available API versions: 2023-01-01.
 */
export function getMigrateProjectsControllerMigrateProjectOutput(args: GetMigrateProjectsControllerMigrateProjectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMigrateProjectsControllerMigrateProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getMigrateProjectsControllerMigrateProject", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrateProjectsControllerMigrateProjectOutputArgs {
    /**
     * Migrate project name.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}