import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information related to a specific migrate project. Returns a json object of type 'migrateProject' as specified in the models section.
 */
export function getMigrateProjectsControllerMigrateProject(args: GetMigrateProjectsControllerMigrateProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrateProjectsControllerMigrateProjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20230101:getMigrateProjectsControllerMigrateProject", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrateProjectsControllerMigrateProjectArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
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
 */
export function getMigrateProjectsControllerMigrateProjectOutput(args: GetMigrateProjectsControllerMigrateProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMigrateProjectsControllerMigrateProjectResult> {
    return pulumi.output(args).apply((a: any) => getMigrateProjectsControllerMigrateProject(a, opts))
}

export interface GetMigrateProjectsControllerMigrateProjectOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
