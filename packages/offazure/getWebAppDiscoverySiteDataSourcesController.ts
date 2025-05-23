import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method to get a Web app data source in site.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-06-06, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppDiscoverySiteDataSourcesController(args: GetWebAppDiscoverySiteDataSourcesControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDiscoverySiteDataSourcesControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getWebAppDiscoverySiteDataSourcesController", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Method to get a Web app data source in site.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-06-06, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppDiscoverySiteDataSourcesControllerOutput(args: GetWebAppDiscoverySiteDataSourcesControllerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppDiscoverySiteDataSourcesControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:getWebAppDiscoverySiteDataSourcesController", {
        "discoverySiteDataSourceName": args.discoverySiteDataSourceName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "webAppSiteName": args.webAppSiteName,
    }, opts);
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