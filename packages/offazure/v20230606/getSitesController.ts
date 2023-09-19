import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a VmwareSite
 */
export function getSitesController(args: GetSitesControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetSitesControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure/v20230606:getSitesController", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetSitesControllerArgs {
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
 * A VmwareSite
 */
export interface GetSitesControllerResult {
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
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
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
    readonly provisioningState: string;
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
 * Get a VmwareSite
 */
export function getSitesControllerOutput(args: GetSitesControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSitesControllerResult> {
    return pulumi.output(args).apply((a: any) => getSitesController(a, opts))
}

export interface GetSitesControllerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}
