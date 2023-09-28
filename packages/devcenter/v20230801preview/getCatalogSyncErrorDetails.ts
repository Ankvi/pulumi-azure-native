import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets catalog synchronization error details
 */
export function getCatalogSyncErrorDetails(args: GetCatalogSyncErrorDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalogSyncErrorDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20230801preview:getCatalogSyncErrorDetails", {
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
 */
export function getCatalogSyncErrorDetailsOutput(args: GetCatalogSyncErrorDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCatalogSyncErrorDetailsResult> {
    return pulumi.output(args).apply((a: any) => getCatalogSyncErrorDetails(a, opts))
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
