import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided the Kubernetes cluster.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01, 2023-10-01-preview.
 */
export function getKubernetesCluster(args: GetKubernetesClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getKubernetesCluster", {
        "kubernetesClusterName": args.kubernetesClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKubernetesClusterArgs {
    /**
     * The name of the Kubernetes cluster.
     */
    kubernetesClusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetKubernetesClusterResult {
    /**
     * The Azure Active Directory Integration properties.
     */
    readonly aadConfiguration?: types.outputs.AadConfigurationResponse;
    /**
     * The administrative credentials that will be applied to the control plane and agent pool nodes that do not specify their own values.
     */
    readonly administratorConfiguration?: types.outputs.AdministratorConfigurationResponse;
    /**
     * The full list of network resource IDs that are attached to this cluster, including those attached only to specific agent pools.
     */
    readonly attachedNetworkIds: string[];
    /**
     * The list of versions that this Kubernetes cluster can be upgraded to.
     */
    readonly availableUpgrades: types.outputs.AvailableUpgradeResponse[];
    /**
     * The resource ID of the Network Cloud cluster.
     */
    readonly clusterId: string;
    /**
     * The resource ID of the connected cluster set up when this Kubernetes cluster is created.
     */
    readonly connectedClusterId: string;
    /**
     * The current running version of Kubernetes on the control plane.
     */
    readonly controlPlaneKubernetesVersion: string;
    /**
     * The defining characteristics of the control plane for this Kubernetes Cluster.
     */
    readonly controlPlaneNodeConfiguration: types.outputs.ControlPlaneNodeConfigurationResponse;
    /**
     * The current status of the Kubernetes cluster.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * The current feature settings.
     */
    readonly featureStatuses: types.outputs.FeatureStatusResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The agent pools that are created with this Kubernetes cluster for running critical system services and workloads. This data in this field is only used during creation, and the field will be empty following the creation of the Kubernetes Cluster. After creation, the management of agent pools is done using the agentPools sub-resource.
     */
    readonly initialAgentPoolConfigurations: types.outputs.InitialAgentPoolConfigurationResponse[];
    /**
     * The Kubernetes version for this cluster. Accepts n.n, n.n.n, and n.n.n-n format. The interpreted version used will be resolved into this field after creation or update.
     */
    readonly kubernetesVersion: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The configuration of the managed resource group associated with the resource.
     */
    readonly managedResourceGroupConfiguration?: types.outputs.ManagedResourceGroupConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The configuration of the Kubernetes cluster networking, including the attachment of networks that span the cluster.
     */
    readonly networkConfiguration: types.outputs.NetworkConfigurationResponse;
    /**
     * The details of the nodes in this cluster.
     */
    readonly nodes: types.outputs.KubernetesClusterNodeResponse[];
    /**
     * The provisioning state of the Kubernetes cluster resource.
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
 * Get properties of the provided the Kubernetes cluster.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01, 2023-10-01-preview.
 */
export function getKubernetesClusterOutput(args: GetKubernetesClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesClusterResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesCluster(a, opts))
}

export interface GetKubernetesClusterOutputArgs {
    /**
     * The name of the Kubernetes cluster.
     */
    kubernetesClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
