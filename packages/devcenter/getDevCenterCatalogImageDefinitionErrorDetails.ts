import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Image Definition error details
 *
 * Uses Azure REST API version 2025-04-01-preview.
 */
export function getDevCenterCatalogImageDefinitionErrorDetails(args: GetDevCenterCatalogImageDefinitionErrorDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetDevCenterCatalogImageDefinitionErrorDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getDevCenterCatalogImageDefinitionErrorDetails", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "imageDefinitionName": args.imageDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDevCenterCatalogImageDefinitionErrorDetailsArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the Image Definition.
     */
    imageDefinitionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * List of validator error details. Populated when changes are made to the resource or its dependent resources that impact the validity of the Catalog resource.
 */
export interface GetDevCenterCatalogImageDefinitionErrorDetailsResult {
    /**
     * Errors associated with resources synchronized from the catalog.
     */
    readonly errors: types.outputs.CatalogErrorDetailsResponse[];
}
/**
 * Gets Image Definition error details
 *
 * Uses Azure REST API version 2025-04-01-preview.
 */
export function getDevCenterCatalogImageDefinitionErrorDetailsOutput(args: GetDevCenterCatalogImageDefinitionErrorDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDevCenterCatalogImageDefinitionErrorDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getDevCenterCatalogImageDefinitionErrorDetails", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "imageDefinitionName": args.imageDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDevCenterCatalogImageDefinitionErrorDetailsOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the Image Definition.
     */
    imageDefinitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}