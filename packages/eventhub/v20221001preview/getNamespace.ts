import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the description of the specified namespace.
 */
export function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub/v20221001preview:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceArgs {
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Single Namespace item in List or Get Operation
 */
export interface GetNamespaceResult {
    /**
     * Alternate name specified when alias and namespace names are same.
     */
    readonly alternateName?: string;
    /**
     * Cluster ARM ID of the Namespace.
     */
    readonly clusterArmId?: string;
    /**
     * The time the Namespace was created.
     */
    readonly createdAt: string;
    /**
     * This property disables SAS authentication for the Event Hubs namespace.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * Properties of BYOK Encryption description
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Properties of BYOK Identity description
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Value that indicates whether AutoInflate is enabled for eventhub namespace.
     */
    readonly isAutoInflateEnabled?: boolean;
    /**
     * Value that indicates whether Kafka is enabled for eventhub namespace.
     */
    readonly kafkaEnabled?: boolean;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
     */
    readonly maximumThroughputUnits?: number;
    /**
     * Identifier for Azure Insights metrics.
     */
    readonly metricId: string;
    /**
     * The minimum TLS version for the cluster to support, e.g. '1.2'
     */
    readonly minimumTlsVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections?: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the Namespace.
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
     * Properties of sku resource
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Status of the Namespace.
     */
    readonly status: string;
    /**
     * The system meta data relating to this resource.
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
     * The time the Namespace was updated.
     */
    readonly updatedAt: string;
    /**
     * Enabling this property creates a Standard Event Hubs Namespace in regions supported availability zones.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Gets the description of the specified namespace.
 */
export function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getNamespace(a, opts))
}

export interface GetNamespaceOutputArgs {
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
