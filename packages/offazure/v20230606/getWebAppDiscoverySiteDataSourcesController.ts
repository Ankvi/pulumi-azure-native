import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Method to get a Web app data source in site.
 */
export function getWebAppDiscoverySiteDataSourcesController(args: GetWebAppDiscoverySiteDataSourcesControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDiscoverySiteDataSourcesControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure/v20230606:getWebAppDiscoverySiteDataSourcesController", {
        "discoverySiteDataSourceName": args.discoverySiteDataSourceName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "webAppSiteName": args.webAppSiteName,
    }, opts);
}

export interface GetWebAppDiscoverySiteDataSourcesControllerArgs {
    /**
     * Data Source ARM name.
     */
    discoverySiteDataSourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name
     */
    siteName: string;
    /**
     * Web app site name.
     */
    webAppSiteName: string;
}

/**
 * Web app data source web model.
 */
export interface GetWebAppDiscoverySiteDataSourcesControllerResult {
    /**
     * Gets or sets the discovery site Id.
     */
    readonly discoverySiteId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * provisioning state enum
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.offazure.v20230606.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Method to get a Web app data source in site.
 */
export function getWebAppDiscoverySiteDataSourcesControllerOutput(args: GetWebAppDiscoverySiteDataSourcesControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppDiscoverySiteDataSourcesControllerResult> {
    return pulumi.output(args).apply((a: any) => getWebAppDiscoverySiteDataSourcesController(a, opts))
}

export interface GetWebAppDiscoverySiteDataSourcesControllerOutputArgs {
    /**
     * Data Source ARM name.
     */
    discoverySiteDataSourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
    /**
     * Web app site name.
     */
    webAppSiteName: pulumi.Input<string>;
}
