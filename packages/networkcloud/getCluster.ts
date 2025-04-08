import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided cluster.
 *
 * Uses Azure REST API version 2025-02-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetClusterResult {
    /**
     * The rack definition that is intended to reflect only a single rack in a single rack cluster, or an aggregator rack in a multi-rack cluster.
     */
    readonly aggregatorOrSingleRackDefinition: types.outputs.RackDefinitionResponse;
    /**
     * The settings for the log analytics workspace used for output of logs from this cluster.
     */
    readonly analyticsOutputSettings?: types.outputs.AnalyticsOutputSettingsResponse;
    /**
     * Field Deprecated. The resource ID of the Log Analytics Workspace that will be used for storing relevant logs.
     */
    readonly analyticsWorkspaceId?: string;
    /**
     * The list of cluster runtime version upgrades available for this cluster.
     */
    readonly availableUpgradeVersions: types.outputs.ClusterAvailableUpgradeVersionResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The capacity supported by this cluster.
     */
    readonly clusterCapacity: types.outputs.ClusterCapacityResponse;
    /**
     * The latest heartbeat status between the cluster manager and the cluster.
     */
    readonly clusterConnectionStatus: string;
    /**
     * The extended location (custom location) that represents the cluster's control plane location. This extended location is used to route the requests of child objects of the cluster that are handled by the platform operator.
     */
    readonly clusterExtendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * The customer-provided location information to identify where the cluster resides.
     */
    readonly clusterLocation?: string;
    /**
     * The latest connectivity status between cluster manager and the cluster.
     */
    readonly clusterManagerConnectionStatus: string;
    /**
     * The resource ID of the cluster manager that manages this cluster. This is set by the Cluster Manager when the cluster is created.
     */
    readonly clusterManagerId: string;
    /**
     * The service principal to be used by the cluster during Arc Appliance installation.
     */
    readonly clusterServicePrincipal?: types.outputs.ServicePrincipalInformationResponse;
    /**
     * The type of rack configuration for the cluster.
     */
    readonly clusterType: string;
    /**
     * The current runtime version of the cluster.
     */
    readonly clusterVersion: string;
    /**
     * The settings for commands run in this cluster, such as bare metal machine run read only commands and data extracts.
     */
    readonly commandOutputSettings?: types.outputs.CommandOutputSettingsResponse;
    /**
     * The validation threshold indicating the allowable failures of compute machines during environment validation and deployment.
     */
    readonly computeDeploymentThreshold?: types.outputs.ValidationThresholdResponse;
    /**
     * The list of rack definitions for the compute racks in a multi-rack
     * cluster, or an empty list in a single-rack cluster.
     */
    readonly computeRackDefinitions?: types.outputs.RackDefinitionResponse[];
    /**
     * The current detailed status of the cluster.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * Resource ETag.
     */
    readonly etag: string;
    /**
     * The extended location of the cluster manager associated with the cluster.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Field Deprecated. This field will not be populated in an upcoming version. The extended location (custom location) that represents the Hybrid AKS control plane location. This extended location is used when creating provisioned clusters (Hybrid AKS clusters).
     */
    readonly hybridAksExtendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The identity for the resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The configuration of the managed resource group associated with the resource.
     */
    readonly managedResourceGroupConfiguration?: types.outputs.ManagedResourceGroupConfigurationResponse;
    /**
     * The count of Manual Action Taken (MAT) events that have not been validated.
     */
    readonly manualActionCount: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource ID of the Network Fabric associated with the cluster.
     */
    readonly networkFabricId: string;
    /**
     * The provisioning state of the cluster.
     */
    readonly provisioningState: string;
    /**
     * The settings for cluster runtime protection.
     */
    readonly runtimeProtectionConfiguration?: types.outputs.RuntimeProtectionConfigurationResponse;
    /**
     * The configuration for use of a key vault to store secrets for later retrieval by the operator.
     */
    readonly secretArchive?: types.outputs.ClusterSecretArchiveResponse;
    /**
     * The settings for the secret archive used to hold credentials for the cluster.
     */
    readonly secretArchiveSettings?: types.outputs.SecretArchiveSettingsResponse;
    /**
     * The support end date of the runtime version of the cluster.
     */
    readonly supportExpiryDate: string;
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
     * The strategy for updating the cluster.
     */
    readonly updateStrategy?: types.outputs.ClusterUpdateStrategyResponse;
    /**
     * The settings for how security vulnerability scanning is applied to the cluster.
     */
    readonly vulnerabilityScanningSettings?: types.outputs.VulnerabilityScanningSettingsResponse;
    /**
     * The list of workload resource IDs that are hosted within this cluster.
     */
    readonly workloadResourceIds: string[];
}
/**
 * Get properties of the provided cluster.
 *
 * Uses Azure REST API version 2025-02-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}