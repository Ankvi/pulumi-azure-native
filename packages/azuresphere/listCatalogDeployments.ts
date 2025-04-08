import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists deployments for catalog.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function listCatalogDeployments(args: ListCatalogDeploymentsArgs, opts?: pulumi.InvokeOptions): Promise<ListCatalogDeploymentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere:listCatalogDeployments", {
        "catalogName": args.catalogName,
        "filter": args.filter,
        "maxpagesize": args.maxpagesize,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListCatalogDeploymentsArgs {
    /**
     * Name of catalog
     */
    catalogName: string;
    /**
     * Filter the result list using the given expression
     */
    filter?: string;
    /**
     * The maximum number of result items per page.
     */
    maxpagesize?: number;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The number of result items to skip.
     */
    skip?: number;
    /**
     * The number of result items to return.
     */
    top?: number;
}

/**
 * The response of a Deployment list operation.
 */
export interface ListCatalogDeploymentsResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink: string;
    /**
     * The Deployment items on this page
     */
    readonly value: types.outputs.DeploymentResponse[];
}
/**
 * Lists deployments for catalog.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function listCatalogDeploymentsOutput(args: ListCatalogDeploymentsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListCatalogDeploymentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuresphere:listCatalogDeployments", {
        "catalogName": args.catalogName,
        "filter": args.filter,
        "maxpagesize": args.maxpagesize,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListCatalogDeploymentsOutputArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Filter the result list using the given expression
     */
    filter?: pulumi.Input<string>;
    /**
     * The maximum number of result items per page.
     */
    maxpagesize?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The number of result items to skip.
     */
    skip?: pulumi.Input<number>;
    /**
     * The number of result items to return.
     */
    top?: pulumi.Input<number>;
}