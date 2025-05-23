import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SharedPrivateLinkResource
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-07-19-preview, 2025-01-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databasewatcher [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSharedPrivateLinkResource(args: GetSharedPrivateLinkResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedPrivateLinkResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasewatcher:getSharedPrivateLinkResource", {
        "resourceGroupName": args.resourceGroupName,
        "sharedPrivateLinkResourceName": args.sharedPrivateLinkResourceName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetSharedPrivateLinkResourceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The Shared Private Link resource name.
     */
    sharedPrivateLinkResourceName: string;
    /**
     * The database watcher name.
     */
    watcherName: string;
}

/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 */
export interface GetSharedPrivateLinkResourceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The DNS zone segment to be included in the DNS name of the shared private link. Value is required for Azure Data Explorer clusters and SQL managed instances, and must be omitted for SQL logical servers and key vaults. The value is the second segment of the host FQDN name of the resource that the shared private link resource is for. For example: if the host name is 'adx-cluster-21187695.eastus.kusto.windows.net', then the value is 'eastus'; if the host name is 'sql-mi-23961134.767d5869f605.database.windows.net', then the value is '767d5869f605'.
     */
    readonly dnsZone?: string;
    /**
     * The group id from the provider of resource the shared private link resource is for.
     */
    readonly groupId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource ID of the resource the shared private link resource is for.
     */
    readonly privateLinkResourceId: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The request message for requesting approval of the shared private link resource.
     */
    readonly requestMessage: string;
    /**
     * Status of the shared private link resource. Can be Pending, Approved, Rejected or Disconnected.
     */
    readonly status: string;
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
 * Get a SharedPrivateLinkResource
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-07-19-preview, 2025-01-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databasewatcher [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSharedPrivateLinkResourceOutput(args: GetSharedPrivateLinkResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSharedPrivateLinkResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databasewatcher:getSharedPrivateLinkResource", {
        "resourceGroupName": args.resourceGroupName,
        "sharedPrivateLinkResourceName": args.sharedPrivateLinkResourceName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetSharedPrivateLinkResourceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Shared Private Link resource name.
     */
    sharedPrivateLinkResourceName: pulumi.Input<string>;
    /**
     * The database watcher name.
     */
    watcherName: pulumi.Input<string>;
}