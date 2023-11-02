import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List users success response
 */
export function listAccessUsers(args: ListAccessUsersArgs, opts?: pulumi.InvokeOptions): Promise<ListAccessUsersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent/v20230822:listAccessUsers", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessUsersArgs {
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
 * List users success response
 */
export interface ListAccessUsersResult {
    /**
     * Data of the users list
     */
    readonly data?: types.outputs.UserRecordResponse[];
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
 * List users success response
 */
export function listAccessUsersOutput(args: ListAccessUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccessUsersResult> {
    return pulumi.output(args).apply((a: any) => listAccessUsers(a, opts))
}

export interface ListAccessUsersOutputArgs {
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
