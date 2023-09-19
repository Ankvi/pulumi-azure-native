import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists device insights for catalog.
 * Azure REST API version: 2022-09-01-preview.
 */
export function listCatalogDeviceInsights(args: ListCatalogDeviceInsightsArgs, opts?: pulumi.InvokeOptions): Promise<ListCatalogDeviceInsightsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere:listCatalogDeviceInsights", {
        "catalogName": args.catalogName,
        "filter": args.filter,
        "maxpagesize": args.maxpagesize,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListCatalogDeviceInsightsArgs {
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
 * Paged collection of DeviceInsight items
 */
export interface ListCatalogDeviceInsightsResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink?: string;
    /**
     * The DeviceInsight items on this page
     */
    readonly value: types.outputs.DeviceInsightResponse[];
}
/**
 * Lists device insights for catalog.
 * Azure REST API version: 2022-09-01-preview.
 */
export function listCatalogDeviceInsightsOutput(args: ListCatalogDeviceInsightsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListCatalogDeviceInsightsResult> {
    return pulumi.output(args).apply((a: any) => listCatalogDeviceInsights(a, opts))
}

export interface ListCatalogDeviceInsightsOutputArgs {
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
