import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Log Analytics cluster instance.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2019-08-01-preview, 2020-03-01-preview, 2020-08-01, 2020-10-01, 2021-06-01, 2022-10-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * Name of the Log Analytics Cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The top level Log Analytics cluster resource container.
 */
export interface GetClusterResult {
    /**
     * The list of Log Analytics workspaces associated with the cluster
     */
    readonly associatedWorkspaces?: types.outputs.AssociatedWorkspaceResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The cluster's billing type.
     */
    readonly billingType?: string;
    /**
     * Additional properties for capacity reservation
     */
    readonly capacityReservationProperties?: types.outputs.CapacityReservationPropertiesResponse;
    /**
     * The ID associated with the cluster.
     */
    readonly clusterId: string;
    /**
     * The cluster creation time
     */
    readonly createdDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Resource's identity.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
     */
    readonly isAvailabilityZonesEnabled?: boolean;
    /**
     * Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'
     */
    readonly isDoubleEncryptionEnabled?: boolean;
    /**
     * The associated key properties.
     */
    readonly keyVaultProperties?: types.outputs.KeyVaultPropertiesResponse;
    /**
     * The last time the cluster was updated.
     */
    readonly lastModifiedDate: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the cluster.
     */
    readonly provisioningState: string;
    /**
     * The sku properties.
     */
    readonly sku?: types.outputs.ClusterSkuResponse;
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
 * Gets a Log Analytics cluster instance.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2019-08-01-preview, 2020-03-01-preview, 2020-08-01, 2020-10-01, 2021-06-01, 2022-10-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationalinsights:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterOutputArgs {
    /**
     * Name of the Log Analytics Cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}