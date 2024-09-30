import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List cluster success response
 * Azure REST API version: 2023-08-22.
 *
 * Other available API versions: 2024-02-13.
 */
export function listAccessRoleBindings(args: ListAccessRoleBindingsArgs, opts?: pulumi.InvokeOptions): Promise<ListAccessRoleBindingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:listAccessRoleBindings", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessRoleBindingsArgs {
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
export interface ListAccessRoleBindingsResult {
    /**
     * Data of the environments list
     */
    readonly data?: types.outputs.RoleBindingRecordResponse[];
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
 * Azure REST API version: 2023-08-22.
 *
 * Other available API versions: 2024-02-13.
 */
export function listAccessRoleBindingsOutput(args: ListAccessRoleBindingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccessRoleBindingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:listAccessRoleBindings", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessRoleBindingsOutputArgs {
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