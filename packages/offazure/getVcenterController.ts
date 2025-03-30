import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Vcenter
 *
 * Uses Azure REST API version 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview, 2024-05-01-preview.
 */
export function getVcenterController(args: GetVcenterControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetVcenterControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getVcenterController", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "vcenterName": args.vcenterName,
    }, opts);
}

export interface GetVcenterControllerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name
     */
    siteName: string;
    /**
     *  VCenters name
     */
    vcenterName: string;
}

/**
 * A vcenter resource belonging to a site resource.
 */
export interface GetVcenterControllerResult {
    /**
     * Gets the timestamp marking vCenter creation.
     */
    readonly createdTimestamp: string;
    /**
     * Gets the errors.
     */
    readonly errors: types.outputs.HealthErrorDetailsResponse[];
    /**
     * Gets or sets the FQDN/IPAddress of the vCenter.
     */
    readonly fqdn?: string;
    /**
     * Gets or sets the friendly name of the vCenter.
     */
    readonly friendlyName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Gets the instance UUID of the vCenter.
     */
    readonly instanceUuid: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the performance statistics enabled on the vCenter.
     */
    readonly perfStatisticsLevel: string;
    /**
     * Gets or sets the port of the vCenter.
     */
    readonly port?: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets the run as account ID of the vCenter.
     */
    readonly runAsAccountId?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Gets the timestamp marking last updated on the vCenter.
     */
    readonly updatedTimestamp: string;
    /**
     * Gets the version of the vCenter.
     */
    readonly version: string;
}
/**
 * Get a Vcenter
 *
 * Uses Azure REST API version 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview, 2024-05-01-preview.
 */
export function getVcenterControllerOutput(args: GetVcenterControllerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVcenterControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:getVcenterController", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "vcenterName": args.vcenterName,
    }, opts);
}

export interface GetVcenterControllerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
    /**
     *  VCenters name
     */
    vcenterName: pulumi.Input<string>;
}