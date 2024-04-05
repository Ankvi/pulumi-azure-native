import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List the device groups for the catalog.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function listCatalogDeviceGroups(args: ListCatalogDeviceGroupsArgs, opts?: pulumi.InvokeOptions): Promise<ListCatalogDeviceGroupsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere:listCatalogDeviceGroups", {
        "catalogName": args.catalogName,
        "deviceGroupName": args.deviceGroupName,
        "filter": args.filter,
        "maxpagesize": args.maxpagesize,
        "resourceGroupName": args.resourceGroupName,
        "skip": args.skip,
        "top": args.top,
    }, opts);
}

export interface ListCatalogDeviceGroupsArgs {
    /**
     * Name of catalog
     */
    catalogName: string;
    /**
     * Device Group name.
     */
    deviceGroupName?: string;
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
 * The response of a DeviceGroup list operation.
 */
export interface ListCatalogDeviceGroupsResult {
    /**
     * The link to the next page of items
     */
    readonly nextLink: string;
    /**
     * The DeviceGroup items on this page
     */
    readonly value: types.outputs.DeviceGroupResponse[];
}
/**
 * List the device groups for the catalog.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function listCatalogDeviceGroupsOutput(args: ListCatalogDeviceGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListCatalogDeviceGroupsResult> {
    return pulumi.output(args).apply((a: any) => listCatalogDeviceGroups(a, opts))
}

export interface ListCatalogDeviceGroupsOutputArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Device Group name.
     */
    deviceGroupName?: pulumi.Input<string>;
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