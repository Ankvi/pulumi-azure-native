import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a HypervSite
 * Azure REST API version: 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getHypervSitesController(args: GetHypervSitesControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetHypervSitesControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getHypervSitesController", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetHypervSitesControllerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name
     */
    siteName: string;
}

/**
 * A HyperV SiteResource
 */
export interface GetHypervSitesControllerResult {
    /**
     * Gets or sets the on-premises agent details.
     */
    readonly agentDetails?: types.outputs.SiteAgentPropertiesResponse;
    /**
     * Gets or sets the Appliance Name.
     */
    readonly applianceName?: string;
    /**
     * Gets or sets the ARM ID of migration hub solution for SDS.
     */
    readonly discoverySolutionId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Gets the Master Site this site is linked to.
     */
    readonly masterSiteId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * Gets the service endpoint.
     */
    readonly serviceEndpoint: string;
    /**
     * Gets or sets the service principal identity details used by agent for
     * communication
     *             to the service.
     */
    readonly servicePrincipalIdentityDetails?: types.outputs.SiteSpnPropertiesResponse;
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
 * Get a HypervSite
 * Azure REST API version: 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getHypervSitesControllerOutput(args: GetHypervSitesControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHypervSitesControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:getHypervSitesController", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetHypervSitesControllerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}