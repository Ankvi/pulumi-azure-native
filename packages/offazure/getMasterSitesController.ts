import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a MasterSite
 * Azure REST API version: 2023-06-06.
 */
export function getMasterSitesController(args: GetMasterSitesControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetMasterSitesControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getMasterSitesController", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetMasterSitesControllerArgs {
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
 * A MasterSite
 */
export interface GetMasterSitesControllerResult {
    /**
     * Gets or sets a value indicating whether multiple sites per site type are
     * allowed.
     */
    readonly allowMultipleSites?: boolean;
    /**
     * Gets or sets a value for customer storage account ARM id.
     */
    readonly customerStorageAccountArmId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the nested sites under Master Site.
     */
    readonly nestedSites: string[];
    /**
     * Gets the private endpoint connections.
     */
    readonly privateEndpointConnections: types.outputs.offazure.PrivateEndpointConnectionResponse[];
    /**
     * provisioning state enum
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the state of public network access.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Gets or sets the sites that are a part of Master Site.
     *             The key
     * should contain the Site ARM name.
     */
    readonly sites?: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.offazure.SystemDataResponse;
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
 * Get a MasterSite
 * Azure REST API version: 2023-06-06.
 */
export function getMasterSitesControllerOutput(args: GetMasterSitesControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMasterSitesControllerResult> {
    return pulumi.output(args).apply((a: any) => getMasterSitesController(a, opts))
}

export interface GetMasterSitesControllerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}
