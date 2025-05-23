import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of the provided cluster manager.
 *
 * Uses Azure REST API version 2025-02-01.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterManager(args: GetClusterManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getClusterManager", {
        "clusterManagerName": args.clusterManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterManagerArgs {
    /**
     * The name of the cluster manager.
     */
    clusterManagerName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetClusterManagerResult {
    /**
     * The resource ID of the Log Analytics workspace that is used for the logs collection.
     */
    readonly analyticsWorkspaceId?: string;
    /**
     * Field deprecated, this value will no longer influence the cluster manager allocation process and will be removed in a future version. The Azure availability zones within the region that will be used to support the cluster manager resource.
     */
    readonly availabilityZones?: string[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The list of the cluster versions the manager supports. It is used as input in clusterVersion property of a cluster resource.
     */
    readonly clusterVersions: types.outputs.ClusterAvailableVersionResponse[];
    /**
     * The detailed status that provides additional information about the cluster manager.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * Resource ETag.
     */
    readonly etag: string;
    /**
     * The resource ID of the fabric controller that has one to one mapping with the cluster manager.
     */
    readonly fabricControllerId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The identity of the cluster manager.
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
     * The extended location (custom location) that represents the cluster manager's control plane location. This extended location is used when creating cluster and rack manifest resources.
     */
    readonly managerExtendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the cluster manager.
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
    /**
     * Field deprecated, this value will no longer influence the cluster manager allocation process and will be removed in a future version. The size of the Azure virtual machines to use for hosting the cluster manager resource.
     */
    readonly vmSize?: string;
}
/**
 * Get the properties of the provided cluster manager.
 *
 * Uses Azure REST API version 2025-02-01.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterManagerOutput(args: GetClusterManagerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getClusterManager", {
        "clusterManagerName": args.clusterManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterManagerOutputArgs {
    /**
     * The name of the cluster manager.
     */
    clusterManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}