import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List cluster success response
 *
 * Uses Azure REST API version 2023-08-22.
 *
 * Other available API versions: 2024-02-13, 2024-07-01.
 */
export function listAccessClusters(args: ListAccessClustersArgs, opts?: pulumi.InvokeOptions): Promise<ListAccessClustersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:listAccessClusters", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessClustersArgs {
    /**
     * Organization resource name
     */
    organizationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Search filters for the request
     */
    searchFilters?: {[key: string]: string};
}

/**
 * List cluster success response
 */
export interface ListAccessClustersResult {
    /**
     * Data of the environments list
     */
    readonly data?: types.outputs.ClusterRecordResponse[];
    /**
     * Type of response
     */
    readonly kind?: string;
    /**
     * Metadata of the list
     */
    readonly metadata?: types.outputs.ConfluentListMetadataResponse;
}
/**
 * List cluster success response
 *
 * Uses Azure REST API version 2023-08-22.
 *
 * Other available API versions: 2024-02-13, 2024-07-01.
 */
export function listAccessClustersOutput(args: ListAccessClustersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAccessClustersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:listAccessClusters", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessClustersOutputArgs {
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Search filters for the request
     */
    searchFilters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}