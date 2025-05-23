import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Catalog Devbox Definition error details
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCatalogDevBoxDefinitionErrorDetails(args: GetCatalogDevBoxDefinitionErrorDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalogDevBoxDefinitionErrorDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getCatalogDevBoxDefinitionErrorDetails", {
        "catalogName": args.catalogName,
        "devBoxDefinitionName": args.devBoxDefinitionName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCatalogDevBoxDefinitionErrorDetailsArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the Dev Box definition.
     */
    devBoxDefinitionName: string;
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
 * List of validator error details. Populated when changes are made to the resource or its dependent resources that impact the validity of the Catalog resource.
 */
export interface GetCatalogDevBoxDefinitionErrorDetailsResult {
    /**
     * Errors associated with resources synchronized from the catalog.
     */
    readonly errors: types.outputs.CatalogErrorDetailsResponse[];
}
/**
 * Gets Catalog Devbox Definition error details
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCatalogDevBoxDefinitionErrorDetailsOutput(args: GetCatalogDevBoxDefinitionErrorDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCatalogDevBoxDefinitionErrorDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getCatalogDevBoxDefinitionErrorDetails", {
        "catalogName": args.catalogName,
        "devBoxDefinitionName": args.devBoxDefinitionName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCatalogDevBoxDefinitionErrorDetailsOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the Dev Box definition.
     */
    devBoxDefinitionName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}