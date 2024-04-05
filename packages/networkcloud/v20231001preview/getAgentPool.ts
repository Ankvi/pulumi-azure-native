import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided Kubernetes cluster agent pool.
 */
export function getAgentPool(args: GetAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud/v20231001preview:getAgentPool", {
        "agentPoolName": args.agentPoolName,
        "kubernetesClusterName": args.kubernetesClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgentPoolArgs {
    /**
     * The name of the Kubernetes cluster agent pool.
     */
    agentPoolName: string;
    /**
     * The name of the Kubernetes cluster.
     */
    kubernetesClusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetAgentPoolResult {
    /**
     * The administrator credentials to be used for the nodes in this agent pool.
     */
    readonly administratorConfiguration?: types.outputs.AdministratorConfigurationResponse;
    /**
     * The configurations that will be applied to each agent in this agent pool.
     */
    readonly agentOptions?: types.outputs.AgentOptionsResponse;
    /**
     * The configuration of networks being attached to the agent pool for use by the workloads that run on this Kubernetes cluster.
     */
    readonly attachedNetworkConfiguration?: types.outputs.AttachedNetworkConfigurationResponse;
    /**
     * The list of availability zones of the Network Cloud cluster used for the provisioning of nodes in this agent pool. If not specified, all availability zones will be used.
     */
    readonly availabilityZones?: string[];
    /**
     * The number of virtual machines that use this configuration.
     */
    readonly count: number;
    /**
     * The current status of the agent pool.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The Kubernetes version running in this agent pool.
     */
    readonly kubernetesVersion: string;
    /**
     * The labels applied to the nodes in this agent pool.
     */
    readonly labels?: types.outputs.KubernetesLabelResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node.
     */
    readonly mode: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the agent pool.
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
     * The taints applied to the nodes in this agent pool.
     */
    readonly taints?: types.outputs.KubernetesLabelResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The configuration of the agent pool.
     */
    readonly upgradeSettings?: types.outputs.AgentPoolUpgradeSettingsResponse;
    /**
     * The name of the VM SKU that determines the size of resources allocated for node VMs.
     */
    readonly vmSkuName: string;
}
/**
 * Get properties of the provided Kubernetes cluster agent pool.
 */
export function getAgentPoolOutput(args: GetAgentPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAgentPoolResult> {
    return pulumi.output(args).apply((a: any) => getAgentPool(a, opts))
}

export interface GetAgentPoolOutputArgs {
    /**
     * The name of the Kubernetes cluster agent pool.
     */
    agentPoolName: pulumi.Input<string>;
    /**
     * The name of the Kubernetes cluster.
     */
    kubernetesClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}