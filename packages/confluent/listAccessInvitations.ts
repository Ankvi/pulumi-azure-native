import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List invitations success response
 * Azure REST API version: 2023-08-22.
 */
export function listAccessInvitations(args: ListAccessInvitationsArgs, opts?: pulumi.InvokeOptions): Promise<ListAccessInvitationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:listAccessInvitations", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessInvitationsArgs {
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
 * List invitations success response
 */
export interface ListAccessInvitationsResult {
    /**
     * Data of the invitations list
     */
    readonly data?: types.outputs.InvitationRecordResponse[];
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
 * List invitations success response
 * Azure REST API version: 2023-08-22.
 */
export function listAccessInvitationsOutput(args: ListAccessInvitationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccessInvitationsResult> {
    return pulumi.output(args).apply((a: any) => listAccessInvitations(a, opts))
}

export interface ListAccessInvitationsOutputArgs {
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
