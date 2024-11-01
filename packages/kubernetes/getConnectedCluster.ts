import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of the specified connected cluster, including name, identity, properties, and additional cluster details.
 * Azure REST API version: 2022-05-01-preview.
 *
 * Other available API versions: 2020-01-01-preview, 2022-10-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-07-15-preview, 2024-12-01-preview.
 */
export function getConnectedCluster(args: GetConnectedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectedClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetes:getConnectedCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedClusterArgs {
    /**
     * The name of the Kubernetes cluster on which get is called.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a connected cluster.
 */
export interface GetConnectedClusterResult {
    /**
     * Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
     */
    readonly agentPublicKeyCertificate: string;
    /**
     * Version of the agent running on the connected cluster resource
     */
    readonly agentVersion: string;
    /**
     * Represents the connectivity status of the connected cluster.
     */
    readonly connectivityStatus: string;
    /**
     * The Kubernetes distribution running on this connected cluster.
     */
    readonly distribution?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the connected cluster.
     */
    readonly identity: types.outputs.ConnectedClusterIdentityResponse;
    /**
     * The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
     */
    readonly infrastructure?: string;
    /**
     * The Kubernetes version of the connected cluster resource
     */
    readonly kubernetesVersion: string;
    /**
     * Time representing the last instance when heart beat was received from the cluster
     */
    readonly lastConnectivityTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Expiration time of the managed identity certificate
     */
    readonly managedIdentityCertificateExpirationTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Connected cluster offering
     */
    readonly offering: string;
    /**
     * The resource id of the private link scope this connected cluster is assigned to, if any.
     */
    readonly privateLinkScopeResourceId?: string;
    /**
     * Property which describes the state of private link on a connected cluster resource.
     */
    readonly privateLinkState?: string;
    /**
     * Provisioning state of the connected cluster resource.
     */
    readonly provisioningState?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Number of CPU cores present in the connected cluster resource
     */
    readonly totalCoreCount: number;
    /**
     * Number of nodes present in the connected cluster resource
     */
    readonly totalNodeCount: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the properties of the specified connected cluster, including name, identity, properties, and additional cluster details.
 * Azure REST API version: 2022-05-01-preview.
 *
 * Other available API versions: 2020-01-01-preview, 2022-10-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-07-15-preview, 2024-12-01-preview.
 */
export function getConnectedClusterOutput(args: GetConnectedClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectedClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kubernetes:getConnectedCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedClusterOutputArgs {
    /**
     * The name of the Kubernetes cluster on which get is called.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}