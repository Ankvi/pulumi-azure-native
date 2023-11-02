import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of the specified connected cluster, including name, identity, properties, and additional cluster details.
 */
export function getConnectedCluster(args: GetConnectedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectedClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetes/v20231101preview:getConnectedCluster", {
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
     * AAD profile for the connected cluster.
     */
    readonly aadProfile?: types.outputs.AadProfileResponse;
    /**
     * Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
     */
    readonly agentPublicKeyCertificate: string;
    /**
     * Version of the agent running on the connected cluster resource
     */
    readonly agentVersion: string;
    /**
     * Arc agentry configuration for the provisioned cluster.
     */
    readonly arcAgentProfile?: types.outputs.ArcAgentProfileResponse;
    /**
     * Indicates whether Azure Hybrid Benefit is opted in
     */
    readonly azureHybridBenefit?: string;
    /**
     * Represents the connectivity status of the connected cluster.
     */
    readonly connectivityStatus: string;
    /**
     * The Kubernetes distribution running on this connected cluster.
     */
    readonly distribution?: string;
    /**
     * The Kubernetes distribution version on this connected cluster.
     */
    readonly distributionVersion?: string;
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
     * The kind of connected cluster.
     */
    readonly kind?: string;
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
     * More properties related to the Connected Cluster
     */
    readonly miscellaneousProperties: {[key: string]: string};
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
 */
export function getConnectedClusterOutput(args: GetConnectedClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectedClusterResult> {
    return pulumi.output(args).apply((a: any) => getConnectedCluster(a, opts))
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
