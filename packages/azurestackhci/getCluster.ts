import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get HCI cluster.
 * Azure REST API version: 2023-03-01.
 *
 * Other available API versions: 2022-01-01, 2022-09-01, 2022-12-15-preview, 2023-06-01, 2023-08-01.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getCluster", {
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
     * Desired properties of the cluster.
     */
    readonly desiredProperties?: types.outputs.ClusterDesiredPropertiesResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Most recent billing meter timestamp.
     */
    readonly lastBillingTimestamp: string;
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
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    readonly principalId: string;
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
    readonly reportedProperties: types.outputs.ClusterReportedPropertiesResponse;
    /**
     * Object id of RP Service Principal
     */
    readonly resourceProviderObjectId: string;
    /**
     * Region specific DataPath Endpoint of the cluster.
     */
    readonly serviceEndpoint: string;
    /**
     * Software Assurance properties of the cluster.
     */
    readonly softwareAssuranceProperties?: types.outputs.SoftwareAssurancePropertiesResponse;
    /**
     * Status of the cluster agent.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    readonly tenantId: string;
    /**
     * Number of days remaining in the trial period.
     */
    readonly trialDaysRemaining: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    readonly userAssignedIdentities?: {[key: string]: types.outputs.UserAssignedIdentityResponse};
}
/**
 * Get HCI cluster.
 * Azure REST API version: 2023-03-01.
 *
 * Other available API versions: 2022-01-01, 2022-09-01, 2022-12-15-preview, 2023-06-01, 2023-08-01.
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
