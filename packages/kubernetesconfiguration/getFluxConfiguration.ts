import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of the Flux Configuration.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2022-07-01, 2022-11-01, 2024-04-01-preview, 2024-11-01, 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kubernetesconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFluxConfiguration(args: GetFluxConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetFluxConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesconfiguration:getFluxConfiguration", {
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
     * The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
     */
    clusterResourceName: string;
    /**
     * The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Parameters to reconcile to the AzureBlob source kind type.
     */
    readonly azureBlob?: types.outputs.AzureBlobDefinitionResponse;
    /**
     * Parameters to reconcile to the Bucket source kind type.
     */
    readonly bucket?: types.outputs.BucketDefinitionResponse;
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
    readonly gitRepository?: types.outputs.GitRepositoryDefinitionResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Array of kustomizations used to reconcile the artifact pulled by the source type on the cluster.
     */
    readonly kustomizations?: {[key: string]: types.outputs.KustomizationDefinitionResponse};
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
     * Maximum duration to wait for flux configuration reconciliation. E.g PT1H, PT5M, P1D
     */
    readonly reconciliationWaitDuration?: string;
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
     * Branch and/or SHA of the source commit synced with the cluster.
     */
    readonly sourceSyncedCommitId: string;
    /**
     * Datetime the fluxConfiguration synced its source on the cluster.
     */
    readonly sourceUpdatedAt: string;
    /**
     * Datetime the fluxConfiguration synced its status on the cluster with Azure.
     */
    readonly statusUpdatedAt: string;
    /**
     * Statuses of the Flux Kubernetes resources created by the fluxConfiguration or created by the managed objects provisioned by the fluxConfiguration.
     */
    readonly statuses: types.outputs.ObjectStatusDefinitionResponse[];
    /**
     * Whether this configuration should suspend its reconciliation of its kustomizations and sources.
     */
    readonly suspend?: boolean;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Whether flux configuration deployment should wait for cluster to reconcile the kustomizations.
     */
    readonly waitForReconciliation?: boolean;
}
/**
 * Gets details of the Flux Configuration.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2022-07-01, 2022-11-01, 2024-04-01-preview, 2024-11-01, 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kubernetesconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFluxConfigurationOutput(args: GetFluxConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFluxConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kubernetesconfiguration:getFluxConfiguration", {
        "clusterName": args.clusterName,
        "clusterResourceName": args.clusterResourceName,
        "clusterRp": args.clusterRp,
        "fluxConfigurationName": args.fluxConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFluxConfigurationOutputArgs {
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
     */
    clusterResourceName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
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