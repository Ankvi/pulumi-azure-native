import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Notification Hubs Namespace Resource.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native notificationhubs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceArgs {
    /**
     * Namespace name
     */
    namespaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Notification Hubs Namespace Resource.
 */
export interface GetNamespaceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Time when the namespace was created.
     */
    readonly createdAt: string;
    /**
     * Gets or sets whether or not the namespace is set as Critical.
     */
    readonly critical: boolean;
    /**
     * Deprecated.
     */
    readonly dataCenter?: string;
    /**
     * Gets or sets whether or not the namespace is currently enabled.
     */
    readonly enabled: boolean;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Azure Insights Metrics id.
     */
    readonly metricId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines values for NamespaceType.
     */
    readonly namespaceType?: string;
    /**
     * A collection of network authorization rules.
     */
    readonly networkAcls?: types.outputs.NetworkAclsResponse;
    /**
     * Collection of Notification Hub or Notification Hub Namespace PNS credentials.
     */
    readonly pnsCredentials?: types.outputs.PnsCredentialsResponse;
    /**
     * Private Endpoint Connections for namespace
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResourceResponse[];
    /**
     * Defines values for OperationProvisioningState.
     */
    readonly provisioningState?: string;
    /**
     * Type of public network access.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Region. The value is always set to the same value as Namespace.Location, so we are deprecating
     * this property.
     */
    readonly region: string;
    /**
     * Allowed replication region
     */
    readonly replicationRegion?: string;
    /**
     * Gets or sets scaleUnit where the namespace gets created
     */
    readonly scaleUnit?: string;
    /**
     * Gets or sets endpoint you can use to perform NotificationHub
     * operations.
     */
    readonly serviceBusEndpoint: string;
    /**
     * The Sku description for a namespace
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Namespace status.
     */
    readonly status?: string;
    /**
     * Namespace subscription id.
     */
    readonly subscriptionId: string;
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
    /**
     * Time when the namespace was updated.
     */
    readonly updatedAt: string;
    /**
     * Namespace SKU name.
     */
    readonly zoneRedundancy?: string;
}
/**
 * Notification Hubs Namespace Resource.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native notificationhubs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamespaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:notificationhubs:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceOutputArgs {
    /**
     * Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}