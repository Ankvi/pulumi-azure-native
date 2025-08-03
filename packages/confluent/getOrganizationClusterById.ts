import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get cluster by Id
 *
 * Uses Azure REST API version 2024-07-01.
 */
export function getOrganizationClusterById(args: GetOrganizationClusterByIdArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationClusterByIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:getOrganizationClusterById", {
        "clusterId": args.clusterId,
        "environmentId": args.environmentId,
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrganizationClusterByIdArgs {
    /**
     * Confluent kafka or schema registry cluster id
     */
    clusterId: string;
    /**
     * Confluent environment id
     */
    environmentId: string;
    /**
     * Organization resource name
     */
    organizationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Details of cluster record
 */
export interface GetOrganizationClusterByIdResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Type of cluster
     */
    readonly kind?: string;
    /**
     * Metadata of the record
     */
    readonly metadata?: types.outputs.SCMetadataEntityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Specification of the cluster
     */
    readonly spec?: types.outputs.SCClusterSpecEntityResponse;
    /**
     * Specification of the cluster status
     */
    readonly status?: types.outputs.ClusterStatusEntityResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get cluster by Id
 *
 * Uses Azure REST API version 2024-07-01.
 */
export function getOrganizationClusterByIdOutput(args: GetOrganizationClusterByIdOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOrganizationClusterByIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:getOrganizationClusterById", {
        "clusterId": args.clusterId,
        "environmentId": args.environmentId,
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrganizationClusterByIdOutputArgs {
    /**
     * Confluent kafka or schema registry cluster id
     */
    clusterId: pulumi.Input<string>;
    /**
     * Confluent environment id
     */
    environmentId: pulumi.Input<string>;
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}