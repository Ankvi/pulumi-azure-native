import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * cloud provider regions available for creating Schema Registry clusters.
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2024-02-13, 2025-07-17-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listOrganizationRegions(args: ListOrganizationRegionsArgs, opts?: pulumi.InvokeOptions): Promise<ListOrganizationRegionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:listOrganizationRegions", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListOrganizationRegionsArgs {
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
 * Result of POST request to list regions supported by confluent
 */
export interface ListOrganizationRegionsResult {
    /**
     * List of regions supported by confluent
     */
    readonly data?: types.outputs.RegionRecordResponse[];
}
/**
 * cloud provider regions available for creating Schema Registry clusters.
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2024-02-13, 2025-07-17-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listOrganizationRegionsOutput(args: ListOrganizationRegionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListOrganizationRegionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:listOrganizationRegions", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListOrganizationRegionsOutputArgs {
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