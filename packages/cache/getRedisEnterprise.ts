import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a RedisEnterprise cluster
 * Azure REST API version: 2023-03-01-preview.
 */
export function getRedisEnterprise(args: GetRedisEnterpriseArgs, opts?: pulumi.InvokeOptions): Promise<GetRedisEnterpriseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache:getRedisEnterprise", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRedisEnterpriseArgs {
    /**
     * The name of the RedisEnterprise cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes the RedisEnterprise cluster
 */
export interface GetRedisEnterpriseResult {
    /**
     * Encryption-at-rest configuration for the cluster.
     */
    readonly encryption?: types.outputs.ClusterPropertiesResponseEncryption;
    /**
     * DNS name of the cluster endpoint
     */
    readonly hostName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The minimum TLS version for the cluster to support, e.g. '1.2'
     */
    readonly minimumTlsVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connections associated with the specified RedisEnterprise cluster
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Current provisioning status of the cluster
     */
    readonly provisioningState: string;
    /**
     * Version of redis the cluster supports, e.g. '6'
     */
    readonly redisVersion: string;
    /**
     * Current resource status of the cluster
     */
    readonly resourceState: string;
    /**
     * The SKU to create, which affects price, performance, and features.
     */
    readonly sku: types.outputs.EnterpriseSkuResponse;
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
     * The Availability Zones where this cluster will be deployed.
     */
    readonly zones?: string[];
}
/**
 * Gets information about a RedisEnterprise cluster
 * Azure REST API version: 2023-03-01-preview.
 */
export function getRedisEnterpriseOutput(args: GetRedisEnterpriseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRedisEnterpriseResult> {
    return pulumi.output(args).apply((a: any) => getRedisEnterprise(a, opts))
}

export interface GetRedisEnterpriseOutputArgs {
    /**
     * The name of the RedisEnterprise cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
