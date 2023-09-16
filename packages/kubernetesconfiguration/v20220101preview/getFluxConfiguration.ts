import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets details of the Flux Configuration.
 */
export function getFluxConfiguration(args: GetFluxConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetFluxConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesconfiguration/v20220101preview:getFluxConfiguration", {
        "clusterName": args.clusterName,
        "clusterResourceName": args.clusterResourceName,
        "clusterRp": args.clusterRp,
        "fluxConfigurationName": args.fluxConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFluxConfigurationArgs {
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: string;
    /**
     * The Kubernetes cluster resource name - either managedClusters (for AKS clusters) or connectedClusters (for OnPrem K8S clusters).
     */
    clusterResourceName: string;
    /**
     * The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters).
     */
    clusterRp: string;
    /**
     * Name of the Flux Configuration.
     */
    fluxConfigurationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Flux Configuration object returned in Get & Put response.
 */
export interface GetFluxConfigurationResult {
    /**
     * Parameters to reconcile to the Bucket source kind type.
     */
    readonly bucket?: types.outputs.kubernetesconfiguration.v20220101preview.BucketDefinitionResponse;
    /**
     * Combined status of the Flux Kubernetes resources created by the fluxConfiguration or created by the managed objects.
     */
    readonly complianceState: string;
    /**
     * Key-value pairs of protected configuration settings for the configuration
     */
    readonly configurationProtectedSettings?: {[key: string]: string};
    /**
     * Error message returned to the user in the case of provisioning failure.
     */
    readonly errorMessage: string;
    /**
     * Parameters to reconcile to the GitRepository source kind type.
     */
    readonly gitRepository?: types.outputs.kubernetesconfiguration.v20220101preview.GitRepositoryDefinitionResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Array of kustomizations used to reconcile the artifact pulled by the source type on the cluster.
     */
    readonly kustomizations?: {[key: string]: types.outputs.kubernetesconfiguration.v20220101preview.KustomizationDefinitionResponse};
    /**
     * Datetime the fluxConfiguration last synced its source on the cluster.
     */
    readonly lastSourceUpdatedAt: string;
    /**
     * Branch and SHA of the last source commit synced with the cluster.
     */
    readonly lastSourceUpdatedCommitId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The namespace to which this configuration is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
     */
    readonly namespace?: string;
    /**
     * Status of the creation of the fluxConfiguration.
     */
    readonly provisioningState: string;
    /**
     * Public Key associated with this fluxConfiguration (either generated within the cluster or provided by the user).
     */
    readonly repositoryPublicKey: string;
    /**
     * Scope at which the operator will be installed.
     */
    readonly scope?: string;
    /**
     * Source Kind to pull the configuration data from.
     */
    readonly sourceKind?: string;
    /**
     * Statuses of the Flux Kubernetes resources created by the fluxConfiguration or created by the managed objects provisioned by the fluxConfiguration.
     */
    readonly statuses: types.outputs.kubernetesconfiguration.v20220101preview.ObjectStatusDefinitionResponse[];
    /**
     * Whether this configuration should suspend its reconciliation of its kustomizations and sources.
     */
    readonly suspend?: boolean;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    readonly systemData: types.outputs.kubernetesconfiguration.v20220101preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets details of the Flux Configuration.
 */
export function getFluxConfigurationOutput(args: GetFluxConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFluxConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getFluxConfiguration(a, opts))
}

export interface GetFluxConfigurationOutputArgs {
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster resource name - either managedClusters (for AKS clusters) or connectedClusters (for OnPrem K8S clusters).
     */
    clusterResourceName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters).
     */
    clusterRp: pulumi.Input<string>;
    /**
     * Name of the Flux Configuration.
     */
    fluxConfigurationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
