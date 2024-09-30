import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a description for the specified namespace.
 * Azure REST API version: 2022-01-01-preview.
 *
 * Other available API versions: 2015-08-01, 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceArgs {
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Description of a namespace resource.
 */
export interface GetNamespaceResult {
    /**
     * Alternate name for namespace
     */
    readonly alternateName?: string;
    /**
     * The time the namespace was created
     */
    readonly createdAt: string;
    /**
     * This property disables SAS authentication for the Service Bus namespace.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * Properties of BYOK Encryption description
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Properties of BYOK Identity description
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The Geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Identifier for Azure Insights metrics
     */
    readonly metricId: string;
    /**
     * The minimum TLS version for the cluster to support, e.g. '1.2'
     */
    readonly minimumTlsVersion?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections?: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the namespace.
     */
    readonly provisioningState: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Endpoint you can use to perform Service Bus operations.
     */
    readonly serviceBusEndpoint: string;
    /**
     * Properties of SKU
     */
    readonly sku?: types.outputs.SBSkuResponse;
    /**
     * Status of the namespace.
     */
    readonly status: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt: string;
    /**
     * Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Gets a description for the specified namespace.
 * Azure REST API version: 2022-01-01-preview.
 *
 * Other available API versions: 2015-08-01, 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicebus:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}