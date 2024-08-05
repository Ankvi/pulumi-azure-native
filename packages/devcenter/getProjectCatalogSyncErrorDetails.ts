import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets project catalog synchronization error details
 * Azure REST API version: 2024-02-01.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview.
 */
export function getProjectCatalogSyncErrorDetails(args: GetProjectCatalogSyncErrorDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectCatalogSyncErrorDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getProjectCatalogSyncErrorDetails", {
        "catalogName": args.catalogName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectCatalogSyncErrorDetailsArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
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
 * Synchronization error details.
 */
export interface GetProjectCatalogSyncErrorDetailsResult {
    /**
     * Catalog items that have conflicting names.
     */
    readonly conflicts: types.outputs.CatalogConflictErrorResponse[];
    /**
     * Errors that occured during synchronization.
     */
    readonly errors: types.outputs.CatalogSyncErrorResponse[];
    /**
     * Error information for the overall synchronization operation.
     */
    readonly operationError: types.outputs.CatalogErrorDetailsResponse;
}
/**
 * Gets project catalog synchronization error details
 * Azure REST API version: 2024-02-01.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview.
 */
export function getProjectCatalogSyncErrorDetailsOutput(args: GetProjectCatalogSyncErrorDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectCatalogSyncErrorDetailsResult> {
    return pulumi.output(args).apply((a: any) => getProjectCatalogSyncErrorDetails(a, opts))
}

export interface GetProjectCatalogSyncErrorDetailsOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}