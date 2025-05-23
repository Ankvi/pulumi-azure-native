import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified data manager resource.
 *
 * Uses Azure REST API version 2019-06-01.
 */
export function getDataManager(args: GetDataManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetDataManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybriddata:getDataManager", {
        "dataManagerName": args.dataManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataManagerArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName: string;
    /**
     * The Resource Group Name
     */
    resourceGroupName: string;
}

/**
 * The DataManager resource.
 */
export interface GetDataManagerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Etag of the Resource.
     */
    readonly etag?: string;
    /**
     * The Resource Id.
     */
    readonly id: string;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
     * US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
     * region is specified on update the request will succeed.
     */
    readonly location: string;
    /**
     * The Resource Name.
     */
    readonly name: string;
    /**
     * The sku type.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
     * (across resource groups).
     */
    readonly tags?: {[key: string]: string};
    /**
     * The Resource type.
     */
    readonly type: string;
}
/**
 * Gets information about the specified data manager resource.
 *
 * Uses Azure REST API version 2019-06-01.
 */
export function getDataManagerOutput(args: GetDataManagerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybriddata:getDataManager", {
        "dataManagerName": args.dataManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataManagerOutputArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}