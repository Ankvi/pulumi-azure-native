import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of cluster record
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
     * Id of the cluster
     */
    readonly id?: string;
    /**
     * Type of cluster
     */
    readonly kind?: string;
    /**
     * Metadata of the record
     */
    readonly metadata?: types.outputs.SCMetadataEntityResponse;
    /**
     * Display name of the cluster
     */
    readonly name?: string;
    /**
     * Specification of the cluster
     */
    readonly spec?: types.outputs.SCClusterSpecEntityResponse;
    /**
     * Specification of the cluster status
     */
    readonly status?: types.outputs.ClusterStatusEntityResponse;
    /**
     * Type of the resource
     */
    readonly type?: string;
}
/**
 * Details of cluster record
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