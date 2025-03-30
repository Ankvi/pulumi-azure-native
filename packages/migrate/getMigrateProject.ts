import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Migrate Project REST Resource.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getMigrateProject(args: GetMigrateProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrateProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getMigrateProject", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrateProjectArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: string;
    /**
     * Name of the Azure Resource Group that migrate project is part of.
     */
    resourceGroupName: string;
}

/**
 * Migrate Project REST Resource.
 */
export interface GetMigrateProjectResult {
    /**
     * Gets or sets the eTag for concurrency control.
     */
    readonly eTag?: string;
    /**
     * Gets the relative URL to get this migrate project.
     */
    readonly id: string;
    /**
     * Gets or sets the Azure location in which migrate project is created.
     */
    readonly location?: string;
    /**
     * Gets the name of the migrate project.
     */
    readonly name: string;
    /**
     * Gets or sets the nested properties.
     */
    readonly properties: types.outputs.MigrateProjectPropertiesResponse;
    /**
     * Gets or sets the tags.
     */
    readonly tags?: types.outputs.MigrateProjectResponseTags;
    /**
     * Handled by resource provider. Type = Microsoft.Migrate/MigrateProject.
     */
    readonly type: string;
}
/**
 * Migrate Project REST Resource.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getMigrateProjectOutput(args: GetMigrateProjectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMigrateProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getMigrateProject", {
        "migrateProjectName": args.migrateProjectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrateProjectOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that migrate project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}