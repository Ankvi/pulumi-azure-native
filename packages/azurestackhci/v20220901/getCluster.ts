import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get HCI cluster.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20220901:getCluster", {
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

/**
 * Cluster details.
 */
export interface GetClusterResult {
    /**
     * Object id of cluster AAD identity.
     */
    readonly aadApplicationObjectId?: string;
    /**
     * App id of cluster AAD identity.
     */
    readonly aadClientId?: string;
    /**
     * Id of cluster identity service principal.
     */
    readonly aadServicePrincipalObjectId?: string;
    /**
     * Tenant id of cluster AAD identity.
     */
    readonly aadTenantId?: string;
    /**
     * Type of billing applied to the resource.
     */
    readonly billingModel: string;
    /**
     * Unique, immutable resource id.
     */
    readonly cloudId: string;
    /**
     * Endpoint configured for management from the Azure portal.
     */
    readonly cloudManagementEndpoint?: string;
    /**
     * The timestamp of resource creation (UTC).
     */
    readonly createdAt?: string;
    /**
     * The identity that created the resource.
     */
    readonly createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    readonly createdByType?: string;
    /**
     * Desired properties of the cluster.
     */
    readonly desiredProperties?: types.outputs.azurestackhci.v20220901.ClusterDesiredPropertiesResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Most recent billing meter timestamp.
     */
    readonly lastBillingTimestamp: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    readonly lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    readonly lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    readonly lastModifiedByType?: string;
    /**
     * Most recent cluster sync timestamp.
     */
    readonly lastSyncTimestamp: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * First cluster sync timestamp.
     */
    readonly registrationTimestamp: string;
    /**
     * Properties reported by cluster agent.
     */
    readonly reportedProperties: types.outputs.azurestackhci.v20220901.ClusterReportedPropertiesResponse;
    /**
     * Region specific DataPath Endpoint of the cluster.
     */
    readonly serviceEndpoint: string;
    /**
     * Software Assurance properties of the cluster.
     */
    readonly softwareAssuranceProperties?: types.outputs.azurestackhci.v20220901.SoftwareAssurancePropertiesResponse;
    /**
     * Status of the cluster agent.
     */
    readonly status: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Number of days remaining in the trial period.
     */
    readonly trialDaysRemaining: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get HCI cluster.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult> {
    return pulumi.output(args).apply((a: any) => getCluster(a, opts))
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
