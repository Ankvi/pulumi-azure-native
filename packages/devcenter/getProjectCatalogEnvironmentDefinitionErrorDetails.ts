import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Environment Definition error details
 * Azure REST API version: 2024-02-01.
 *
 * Other available API versions: 2024-05-01-preview.
 */
export function getProjectCatalogEnvironmentDefinitionErrorDetails(args: GetProjectCatalogEnvironmentDefinitionErrorDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectCatalogEnvironmentDefinitionErrorDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getProjectCatalogEnvironmentDefinitionErrorDetails", {
        "catalogName": args.catalogName,
        "environmentDefinitionName": args.environmentDefinitionName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectCatalogEnvironmentDefinitionErrorDetailsArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the Environment Definition.
     */
    environmentDefinitionName: string;
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
 * List of validator error details. Populated when changes are made to the resource or its dependent resources that impact the validity of the Catalog resource.
 */
export interface GetProjectCatalogEnvironmentDefinitionErrorDetailsResult {
    /**
     * Errors associated with resources synchronized from the catalog.
     */
    readonly errors: types.outputs.CatalogErrorDetailsResponse[];
}
/**
 * Gets Environment Definition error details
 * Azure REST API version: 2024-02-01.
 *
 * Other available API versions: 2024-05-01-preview.
 */
export function getProjectCatalogEnvironmentDefinitionErrorDetailsOutput(args: GetProjectCatalogEnvironmentDefinitionErrorDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectCatalogEnvironmentDefinitionErrorDetailsResult> {
    return pulumi.output(args).apply((a: any) => getProjectCatalogEnvironmentDefinitionErrorDetails(a, opts))
}

export interface GetProjectCatalogEnvironmentDefinitionErrorDetailsOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the Environment Definition.
     */
    environmentDefinitionName: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}