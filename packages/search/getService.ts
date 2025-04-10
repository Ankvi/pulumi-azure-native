import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the search service with the given name in the given resource group.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-04-01-preview, 2023-11-01, 2024-03-01-preview, 2024-06-01-preview, 2025-02-01-preview.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:search:getService", {
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    searchServiceName: string;
}

/**
 * Describes an Azure Cognitive Search service and its current state.
 */
export interface GetServiceResult {
    /**
     * Defines the options for how the data plane API of a search service authenticates requests. This cannot be set if 'disableLocalAuth' is set to true.
     */
    readonly authOptions?: types.outputs.DataPlaneAuthOptionsResponse;
    /**
     * When set to true, calls to the search service will not be permitted to utilize API keys for authentication. This cannot be set to true if 'dataPlaneAuthOptions' are defined.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * Specifies any policy regarding encryption of resources (such as indexes) using customer manager keys within a search service.
     */
    readonly encryptionWithCmk?: types.outputs.EncryptionWithCmkResponse;
    /**
     * Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
     */
    readonly hostingMode?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network specific rules that determine how the Azure Cognitive Search service may be reached.
     */
    readonly networkRuleSet?: types.outputs.NetworkRuleSetResponse;
    /**
     * The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
     */
    readonly partitionCount?: number;
    /**
     * The list of private endpoint connections to the Azure Cognitive Search service.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The state of the last provisioning operation performed on the search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'succeeded' or 'failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'succeeded' directly in the call to Create search service. This is because the free service uses capacity that is already set up.
     */
    readonly provisioningState: string;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
     */
    readonly replicaCount?: number;
    /**
     * The list of shared private link resources managed by the Azure Cognitive Search service.
     */
    readonly sharedPrivateLinkResources: types.outputs.SharedPrivateLinkResourceResponse[];
    /**
     * The SKU of the Search Service, which determines price tier and capacity limits. This property is required when creating a new Search Service.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The status of the search service. Possible values include: 'running': The search service is running and no provisioning operations are underway. 'provisioning': The search service is being provisioned or scaled up or down. 'deleting': The search service is being deleted. 'degraded': The search service is degraded. This can occur when the underlying search units are not healthy. The search service is most likely operational, but performance might be slow and some requests might be dropped. 'disabled': The search service is disabled. In this state, the service will reject all API requests. 'error': The search service is in an error state. If your service is in the degraded, disabled, or error states, it means the Azure Cognitive Search team is actively investigating the underlying issue. Dedicated services in these states are still chargeable based on the number of search units provisioned.
     */
    readonly status: string;
    /**
     * The details of the search service status.
     */
    readonly statusDetails: string;
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
 * Gets the search service with the given name in the given resource group.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-04-01-preview, 2023-11-01, 2024-03-01-preview, 2024-06-01-preview, 2025-02-01-preview.
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:search:getService", {
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
    }, opts);
}

export interface GetServiceOutputArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    searchServiceName: pulumi.Input<string>;
}