import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided cloud services network.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview.
 */
export function getCloudServicesNetwork(args: GetCloudServicesNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudServicesNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getCloudServicesNetwork", {
        "cloudServicesNetworkName": args.cloudServicesNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudServicesNetworkArgs {
    /**
     * The name of the cloud services network.
     */
    cloudServicesNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Upon creation, the additional services that are provided by the platform will be allocated and
 * represented in the status of this resource. All resources associated with this cloud services network will be part
 * of the same layer 2 (L2) isolation domain. At least one service network must be created but may be reused across many
 * virtual machines and/or Hybrid AKS clusters.
 */
export interface GetCloudServicesNetworkResult {
    /**
     * The list of egress endpoints. This allows for connection from a Hybrid AKS cluster to the specified endpoint.
     */
    readonly additionalEgressEndpoints?: types.outputs.EgressEndpointResponse[];
    /**
     * The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
     */
    readonly associatedResourceIds: string[];
    /**
     * The resource ID of the Network Cloud cluster this cloud services network is associated with.
     */
    readonly clusterId: string;
    /**
     * The more detailed status of the cloud services network.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The indicator of whether the platform default endpoints are allowed for the egress traffic.
     */
    readonly enableDefaultEgressEndpoints?: string;
    /**
     * The full list of additional and default egress endpoints that are currently enabled.
     */
    readonly enabledEgressEndpoints: types.outputs.EgressEndpointResponse[];
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this cloud services network.
     */
    readonly hybridAksClustersAssociatedIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the interface that will be present in the virtual machine to represent this network.
     */
    readonly interfaceName: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the cloud services network.
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
     * Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this cloud services network.
     */
    readonly virtualMachinesAssociatedIds: string[];
}
/**
 * Get properties of the provided cloud services network.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview.
 */
export function getCloudServicesNetworkOutput(args: GetCloudServicesNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCloudServicesNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getCloudServicesNetwork", {
        "cloudServicesNetworkName": args.cloudServicesNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudServicesNetworkOutputArgs {
    /**
     * The name of the cloud services network.
     */
    cloudServicesNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}