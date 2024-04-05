import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified site network service.
 */
export function getSiteNetworkService(args: GetSiteNetworkServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteNetworkServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork/v20230901:getSiteNetworkService", {
        "resourceGroupName": args.resourceGroupName,
        "siteNetworkServiceName": args.siteNetworkServiceName,
    }, opts);
}

export interface GetSiteNetworkServiceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the site network service.
     */
    siteNetworkServiceName: string;
}

/**
 * Site network service resource.
 */
export interface GetSiteNetworkServiceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed identity of the Site network service, if configured.
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
     * Site network service properties.
     */
    readonly properties: types.outputs.SiteNetworkServicePropertiesFormatResponse;
    /**
     * Sku of the site network service.
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
 * Gets information about the specified site network service.
 */
export function getSiteNetworkServiceOutput(args: GetSiteNetworkServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSiteNetworkServiceResult> {
    return pulumi.output(args).apply((a: any) => getSiteNetworkService(a, opts))
}

export interface GetSiteNetworkServiceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the site network service.
     */
    siteNetworkServiceName: pulumi.Input<string>;
}