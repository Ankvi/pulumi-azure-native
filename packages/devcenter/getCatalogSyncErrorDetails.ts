import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets catalog synchronization error details
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCatalogSyncErrorDetails(args: GetCatalogSyncErrorDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalogSyncErrorDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getCatalogSyncErrorDetails", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCatalogSyncErrorDetailsArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Synchronization error details.
 */
export interface GetCatalogSyncErrorDetailsResult {
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
 * Gets catalog synchronization error details
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCatalogSyncErrorDetailsOutput(args: GetCatalogSyncErrorDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCatalogSyncErrorDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getCatalogSyncErrorDetails", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCatalogSyncErrorDetailsOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}