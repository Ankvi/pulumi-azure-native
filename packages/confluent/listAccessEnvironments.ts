import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List environments success response
 * Azure REST API version: 2023-08-22.
 *
 * Other available API versions: 2024-02-13, 2024-07-01.
 */
export function listAccessEnvironments(args: ListAccessEnvironmentsArgs, opts?: pulumi.InvokeOptions): Promise<ListAccessEnvironmentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:listAccessEnvironments", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessEnvironmentsArgs {
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
 * List environments success response
 */
export interface ListAccessEnvironmentsResult {
    /**
     * Data of the environments list
     */
    readonly data?: types.outputs.EnvironmentRecordResponse[];
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
 * List environments success response
 * Azure REST API version: 2023-08-22.
 *
 * Other available API versions: 2024-02-13, 2024-07-01.
 */
export function listAccessEnvironmentsOutput(args: ListAccessEnvironmentsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAccessEnvironmentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:listAccessEnvironments", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessEnvironmentsOutputArgs {
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