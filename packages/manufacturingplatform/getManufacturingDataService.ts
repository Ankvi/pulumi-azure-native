import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a MdsResource
 *
 * Uses Azure REST API version 2025-03-01.
 */
export function getManufacturingDataService(args: GetManufacturingDataServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetManufacturingDataServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:manufacturingplatform:getManufacturingDataService", {
        "mdsResourceName": args.mdsResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManufacturingDataServiceArgs {
    /**
     * Name.
     */
    mdsResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A ManufacturingPlatformProviderHub resource
 */
export interface GetManufacturingDataServiceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.MdsResourcePropertiesResponse;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a MdsResource
 *
 * Uses Azure REST API version 2025-03-01.
 */
export function getManufacturingDataServiceOutput(args: GetManufacturingDataServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManufacturingDataServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:manufacturingplatform:getManufacturingDataService", {
        "mdsResourceName": args.mdsResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManufacturingDataServiceOutputArgs {
    /**
     * Name.
     */
    mdsResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}