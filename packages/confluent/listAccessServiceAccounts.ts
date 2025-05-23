import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List service accounts success response
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2023-08-22, 2024-02-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Resource group name
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
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2023-08-22, 2024-02-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listAccessServiceAccountsOutput(args: ListAccessServiceAccountsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAccessServiceAccountsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:listAccessServiceAccounts", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessServiceAccountsOutputArgs {
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * Resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Search filters for the request
     */
    searchFilters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}