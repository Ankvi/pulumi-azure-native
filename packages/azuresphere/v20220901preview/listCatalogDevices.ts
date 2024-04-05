import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists devices for catalog.
 */
export function listCatalogDevices(args: ListCatalogDevicesArgs, opts?: pulumi.InvokeOptions): Promise<ListCatalogDevicesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere/v20220901preview:listCatalogDevices", {
        "catalogName": args.catalogName,
        "filter": args.filter,
        "maxpagesize": args.maxpagesize,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListCatalogDevicesArgs {
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
 * The response of a Device list operation.
 */
export interface ListCatalogDevicesResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink: string;
    /**
     * The Device items on this page
     */
    readonly value: types.outputs.DeviceResponse[];
}
/**
 * Lists devices for catalog.
 */
export function listCatalogDevicesOutput(args: ListCatalogDevicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListCatalogDevicesResult> {
    return pulumi.output(args).apply((a: any) => listCatalogDevices(a, opts))
}

export interface ListCatalogDevicesOutputArgs {
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