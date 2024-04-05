import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method to get a site.
 */
export function getWebAppSitesController(args: GetWebAppSitesControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSitesControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure/v20231001preview:getWebAppSitesController", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "webAppSiteName": args.webAppSiteName,
    }, opts);
}

export interface GetWebAppSitesControllerArgs {
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
 * WebApp site web model.
 */
export interface GetWebAppSitesControllerResult {
    /**
     * Gets or sets the discovery scenario.
     */
    readonly discoveryScenario?: string;
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
     * Gets the service endpoint.
     */
    readonly serviceEndpoint: string;
    /**
     * Gets or sets the appliance details used by service to communicate
     *            
     * to the appliance.
     */
    readonly siteAppliancePropertiesCollection?: types.outputs.SiteAppliancePropertiesResponse[];
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
 * Method to get a site.
 */
export function getWebAppSitesControllerOutput(args: GetWebAppSitesControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppSitesControllerResult> {
    return pulumi.output(args).apply((a: any) => getWebAppSitesController(a, opts))
}

export interface GetWebAppSitesControllerOutputArgs {
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