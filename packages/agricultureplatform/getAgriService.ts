import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AgriServiceResource
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getAgriService(args: GetAgriServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetAgriServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agricultureplatform:getAgriService", {
        "agriServiceResourceName": args.agriServiceResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgriServiceArgs {
    /**
     * The name of the AgriService resource.
     */
    agriServiceResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Schema of the AgriService resource from Microsoft.AgriculturePlatform resource provider.
 */
export interface GetAgriServiceResult {
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
    readonly properties: types.outputs.AgriServiceResourcePropertiesResponse;
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
 * Get a AgriServiceResource
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getAgriServiceOutput(args: GetAgriServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAgriServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:agricultureplatform:getAgriService", {
        "agriServiceResourceName": args.agriServiceResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgriServiceOutputArgs {
    /**
     * The name of the AgriService resource.
     */
    agriServiceResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}