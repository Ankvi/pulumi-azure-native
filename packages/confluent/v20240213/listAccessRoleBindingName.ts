import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of the role binding names returned on successful response
 */
export function listAccessRoleBindingName(args: ListAccessRoleBindingNameArgs, opts?: pulumi.InvokeOptions): Promise<ListAccessRoleBindingNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent/v20240213:listAccessRoleBindingName", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessRoleBindingNameArgs {
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
 * Details of the role binding names returned on successful response
 */
export interface ListAccessRoleBindingNameResult {
    /**
     * List of role binding names
     */
    readonly data?: string[];
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
 * Details of the role binding names returned on successful response
 */
export function listAccessRoleBindingNameOutput(args: ListAccessRoleBindingNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccessRoleBindingNameResult> {
    return pulumi.output(args).apply((a: any) => listAccessRoleBindingName(a, opts))
}

export interface ListAccessRoleBindingNameOutputArgs {
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