import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List service accounts success response
 * Azure REST API version: 2023-08-22.
 */
export function listAccessServiceAccounts(args: ListAccessServiceAccountsArgs, opts?: pulumi.InvokeOptions): Promise<ListAccessServiceAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:listAccessServiceAccounts", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessServiceAccountsArgs {
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
 * List service accounts success response
 */
export interface ListAccessServiceAccountsResult {
    /**
     * Data of the service accounts list
     */
    readonly data?: types.outputs.ServiceAccountRecordResponse[];
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
 * List service accounts success response
 * Azure REST API version: 2023-08-22.
 */
export function listAccessServiceAccountsOutput(args: ListAccessServiceAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccessServiceAccountsResult> {
    return pulumi.output(args).apply((a: any) => listAccessServiceAccounts(a, opts))
}

export interface ListAccessServiceAccountsOutputArgs {
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
