import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a SAP Migration discovery site resource.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 */
export function getSapDiscoverySite(args: GetSapDiscoverySiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSapDiscoverySiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSapDiscoverySite", {
        "resourceGroupName": args.resourceGroupName,
        "sapDiscoverySiteName": args.sapDiscoverySiteName,
    }, opts);
}

export interface GetSapDiscoverySiteArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the discovery site resource for SAP Migration.
     */
    sapDiscoverySiteName: string;
}

/**
 * Define the SAP Migration discovery site resource.
 */
export interface GetSapDiscoverySiteResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Indicates any errors on the SAP Migration discovery site resource.
     */
    readonly errors: types.outputs.SAPMigrateErrorResponse;
    /**
     * The extended location definition.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The master site ID from Azure Migrate.
     */
    readonly masterSiteId?: string;
    /**
     * The migrate project ID from Azure Migrate.
     */
    readonly migrateProjectId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the provisioning states.
     */
    readonly provisioningState: string;
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
 * Gets a SAP Migration discovery site resource.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 */
export function getSapDiscoverySiteOutput(args: GetSapDiscoverySiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSapDiscoverySiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSapDiscoverySite", {
        "resourceGroupName": args.resourceGroupName,
        "sapDiscoverySiteName": args.sapDiscoverySiteName,
    }, opts);
}

export interface GetSapDiscoverySiteOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the discovery site resource for SAP Migration.
     */
    sapDiscoverySiteName: pulumi.Input<string>;
}