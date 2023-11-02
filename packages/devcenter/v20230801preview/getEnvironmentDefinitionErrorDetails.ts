import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Environment Definition error details
 */
export function getEnvironmentDefinitionErrorDetails(args: GetEnvironmentDefinitionErrorDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentDefinitionErrorDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20230801preview:getEnvironmentDefinitionErrorDetails", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "environmentDefinitionName": args.environmentDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnvironmentDefinitionErrorDetailsArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the Environment Definition.
     */
    environmentDefinitionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * List of validator error details. Populated when changes are made to the resource or its dependent resources that impact the validity of the Catalog resource.
 */
export interface GetEnvironmentDefinitionErrorDetailsResult {
    /**
     * Errors associated with resources synchronized from the catalog.
     */
    readonly errors: types.outputs.CatalogErrorDetailsResponse[];
}
/**
 * Gets Environment Definition error details
 */
export function getEnvironmentDefinitionErrorDetailsOutput(args: GetEnvironmentDefinitionErrorDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEnvironmentDefinitionErrorDetailsResult> {
    return pulumi.output(args).apply((a: any) => getEnvironmentDefinitionErrorDetails(a, opts))
}

export interface GetEnvironmentDefinitionErrorDetailsOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the Environment Definition.
     */
    environmentDefinitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}